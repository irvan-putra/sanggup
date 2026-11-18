package com.vanipy.sanggup

import android.appwidget.AppWidgetHost
import android.appwidget.AppWidgetManager
import android.content.ComponentName
import android.graphics.Bitmap
import android.graphics.Canvas
import android.util.Log
import android.view.View
import android.view.ViewGroup
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
                    if (i == 0 || i == 3 || i == 6) save(hostView!!, "widget_$i.png")
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
