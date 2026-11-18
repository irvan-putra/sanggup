package com.vanipy.sanggup

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.util.SizeF
import android.widget.RemoteViews

class StreakWidgetProvider : AppWidgetProvider() {
    override fun onUpdate(context: Context, manager: AppWidgetManager, ids: IntArray) {
        for (id in ids) manager.updateAppWidget(id, build(context, manager.getAppWidgetOptions(id)))
    }

    override fun onAppWidgetOptionsChanged(context: Context, manager: AppWidgetManager, id: Int, newOptions: Bundle) {
        manager.updateAppWidget(id, build(context, newOptions))
    }

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)
        // Date or time changes can break or move the streak: redraw.
        when (intent.action) {
            Intent.ACTION_DATE_CHANGED, Intent.ACTION_TIME_CHANGED,
            Intent.ACTION_TIMEZONE_CHANGED -> refreshAll(context)
        }
    }

    companion object {
        fun build(context: Context, options: Bundle? = null): RemoteViews {
            if (Build.VERSION.SDK_INT >= 31) {
                return RemoteViews(mapOf(
                    SizeF(110f, 48f) to content(context, R.layout.widget_streak),
                    SizeF(110f, 110f) to content(context, R.layout.widget_streak_tall)
                ))
            }
            val tall = (options?.getInt(AppWidgetManager.OPTION_APPWIDGET_MIN_HEIGHT, 48) ?: 48) >= 110
            return content(context, if (tall) R.layout.widget_streak_tall else R.layout.widget_streak)
        }

        private fun content(context: Context, layout: Int): RemoteViews {
            val views = RemoteViews(context.packageName, layout)
            views.setTextViewText(R.id.streak_count, StreakStore.visible(context).toString())
            val open = PendingIntent.getActivity(
                context, 0, Intent(context, MainActivity::class.java),
                PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
            )
            views.setOnClickPendingIntent(R.id.widget_root, open)
            return views
        }

        fun refreshAll(context: Context) {
            val mgr = AppWidgetManager.getInstance(context)
            val ids = mgr.getAppWidgetIds(ComponentName(context, StreakWidgetProvider::class.java))
            for (id in ids) mgr.updateAppWidget(id, build(context, mgr.getAppWidgetOptions(id)))
        }
    }
}
