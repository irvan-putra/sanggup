package com.vanipy.sanggup

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Intent
import android.graphics.drawable.AnimationDrawable
import android.net.Uri
import android.os.Bundle
import android.view.Gravity
import android.view.View
import android.view.ViewGroup
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView

class MainActivity : Activity() {
    private lateinit var streakText: TextView
    private lateinit var web: WebView

    /** Called from app.js when a practice stage is logged. */
    inner class Bridge {
        @JavascriptInterface
        fun stageDone() {
            StreakStore.record(applicationContext)
            runOnUiThread { showStreak() }
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val dp = resources.displayMetrics.density

        val sang = ImageView(this).apply {
            contentDescription = "Sang the gecko"
            val anim = AnimationDrawable()
            val frames = intArrayOf(R.drawable.sang_0, R.drawable.sang_1, R.drawable.sang_2,
                R.drawable.sang_3, R.drawable.sang_4, R.drawable.sang_5)
            for (f in frames) anim.addFrame(resources.getDrawable(f, theme), 350)
            anim.isOneShot = false
            setImageDrawable(anim)
            post { anim.start() }
        }
        streakText = TextView(this).apply {
            textSize = 18f
            setTextColor(0xFF241a33.toInt())
        }
        val header = LinearLayout(this).apply {
            orientation = LinearLayout.HORIZONTAL
            gravity = Gravity.CENTER_VERTICAL
            setPadding((12 * dp).toInt(), (6 * dp).toInt(), (12 * dp).toInt(), (6 * dp).toInt())
            setBackgroundColor(0xFFf5f1e8.toInt())
            addView(sang, LinearLayout.LayoutParams((96 * dp).toInt(), (58 * dp).toInt()))
            addView(streakText, LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f))
        }

        web = WebView(this)
        web.settings.javaScriptEnabled = true
        web.settings.domStorageEnabled = true
        web.settings.allowFileAccess = true
        web.settings.allowFileAccessFromFileURLs = false
        web.settings.allowUniversalAccessFromFileURLs = false
        web.addJavascriptInterface(Bridge(), "SanggupAndroid")
        web.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                val u = request.url
                if (u.scheme == "file") return false
                startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(u.toString())))
                return true
            }
        }
        web.loadUrl("file:///android_asset/web/index.html")

        val root = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            addView(header, LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT))
            addView(web, LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 0, 1f))
        }
        setContentView(root)
        showStreak()
    }

    private fun showStreak() {
        val n = StreakStore.visible(this)
        streakText.text = if (n == 0) "No streak yet. Log a practice stage." else "$n day streak"
    }

    override fun onResume() {
        super.onResume()
        showStreak()
    }

    @Deprecated("Deprecated in Java")
    override fun onBackPressed() {
        if (web.canGoBack()) web.goBack() else super.onBackPressed()
    }
}
