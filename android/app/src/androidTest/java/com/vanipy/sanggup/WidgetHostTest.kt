package com.vanipy.sanggup

import android.appwidget.AppWidgetHost
import android.appwidget.AppWidgetManager
import android.content.ComponentName
import android.graphics.Bitmap
import android.graphics.Canvas
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.webkit.WebView
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit
import android.widget.FrameLayout
import android.widget.ViewFlipper
import androidx.test.core.app.ActivityScenario
import androidx.test.platform.app.InstrumentationRegistry
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Test
import java.io.File
import java.io.FileOutputStream

/**
 * Hosts the real widget through AppWidgetHost/AppWidgetHostView and samples the
 * ViewFlipper. This proves RemoteViews flipping inside a widget host. It is NOT
 * a test of any particular launcher (Pixel Launcher, One UI, etc.).
 * The test borrows the shell's BIND_APPWIDGET permission to bind (no launcher UI).
 */
class WidgetHostTest {
    private val tag = "SANGGUP"

    private fun save(view: View, name: String) {
        val bmp = Bitmap.createBitmap(view.width, view.height, Bitmap.Config.ARGB_8888)
        view.draw(Canvas(bmp))
        val ctx = InstrumentationRegistry.getInstrumentation().targetContext
        FileOutputStream(File(ctx.filesDir, name)).use { bmp.compress(Bitmap.CompressFormat.PNG, 100, it) }
    }

    private fun findWeb(v: View): WebView? {
        if (v is WebView) return v
        if (v is ViewGroup) for (i in 0 until v.childCount) {
            val found = findWeb(v.getChildAt(i))
            if (found != null) return found
        }
        return null
    }

    private fun js(scenario: ActivityScenario<MainActivity>, script: String): String {
        val latch = CountDownLatch(1)
        var result = ""
        scenario.onActivity { a ->
            findWeb(a.window.decorView)!!.evaluateJavascript(script) { value -> result = value; latch.countDown() }
        }
        assertTrue("JavaScript callback timed out", latch.await(10, TimeUnit.SECONDS))
        return result
    }

    @Test
    fun widgetFlipperAdvances() {
        val ctx = InstrumentationRegistry.getInstrumentation().targetContext
        val mgr = AppWidgetManager.getInstance(ctx)
        val provider = ComponentName(ctx, StreakWidgetProvider::class.java)
        val host = AppWidgetHost(ctx, 4242)
        val id = host.allocateAppWidgetId()
        val ua = InstrumentationRegistry.getInstrumentation().uiAutomation
        ua.adoptShellPermissionIdentity("android.permission.BIND_APPWIDGET")
        val bound = try { mgr.bindAppWidgetIdIfAllowed(id, provider) } finally { ua.dropShellPermissionIdentity() }
        assertTrue("bind refused even with shell BIND_APPWIDGET", bound)
        host.startListening()
        mgr.updateAppWidget(id, StreakWidgetProvider.build(ctx))

        ActivityScenario.launch(MainActivity::class.java).use { scenario ->
            var ready = false
            for (attempt in 0 until 40) {
                if (js(scenario, "document.querySelectorAll('.track-card').length") == "20") { ready = true; break }
                Thread.sleep(500)
            }
            assertTrue("Offline learning grid never loaded", ready)
            scenario.onActivity { a ->
                val bmp = InstrumentationRegistry.getInstrumentation().uiAutomation.takeScreenshot()
                FileOutputStream(File(ctx.filesDir, "app_ready.png")).use { bmp.compress(Bitmap.CompressFormat.PNG, 100, it) }
            }
            // Exercise the real learning-path button and its native bridge using test data.
            js(scenario, "document.querySelector('.track-card').click(); document.querySelector('button[data-act=finish]').click(); true")
            for (attempt in 0 until 20) {
                if (StreakStore.visible(ctx) == 1) break
                Thread.sleep(100)
            }
            assertEquals("Practice log did not reach native streak", 1, StreakStore.visible(ctx))
            js(scenario, "document.getElementById('back-to-tracks').click(); true")
            mgr.updateAppWidget(id, StreakWidgetProvider.build(ctx))
            var hostView: View? = null
            scenario.onActivity { a ->
                val info = mgr.getAppWidgetInfo(id)
                assertNotNull(info)
                val hv = host.createView(ctx, id, info)
                val dp = a.resources.displayMetrics.density
                hv.setAppWidget(id, info)
                a.addContentView(hv, FrameLayout.LayoutParams((160 * dp).toInt(), (160 * dp).toInt()))
                hostView = hv
            }
            Thread.sleep(1500)
            val seen = LinkedHashSet<Int>()
            var found = false
            for (i in 0 until 14) {
                scenario.onActivity {
                    val flipper = hostView!!.findViewById<ViewFlipper>(R.id.sang_flipper)
                    if (flipper != null) {
                        found = true
                        seen.add(flipper.displayedChild)
                        Log.i(tag, "t=$i flipper child=${flipper.displayedChild} running=${flipper.isFlipping} children=${flipper.childCount}")
                    }
                    if (i == 0 || i == 3 || i == 6) {
                        save(hostView!!, "widget_$i.png")
                        val ctx2 = InstrumentationRegistry.getInstrumentation().targetContext
                        val full = InstrumentationRegistry.getInstrumentation().uiAutomation.takeScreenshot()
                        FileOutputStream(File(ctx2.filesDir, "host_$i.png")).use { full.compress(Bitmap.CompressFormat.PNG, 100, it) }
                    }
                }
                Thread.sleep(250)
            }
            assertTrue("ViewFlipper not found in hosted widget", found)
            Log.i(tag, "distinct displayed children: $seen")
            assertTrue("flipper never advanced: $seen", seen.size > 1)
        }
        host.deleteAppWidgetId(id)
    }
}
