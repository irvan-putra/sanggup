package com.vanipy.sanggup

import android.content.Context
import java.time.LocalDate

/** Streak kept in app-private storage. Nothing leaves the device. */
object StreakStore {
    private const val PREFS = "sanggup_streak"
    private const val K_LAST = "last_day"
    private const val K_STREAK = "streak"

    private fun today(): Long = LocalDate.now().toEpochDay()

    fun record(context: Context) {
        val p = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE)
        val next = StreakLogic.record(p.getLong(K_LAST, -10L), p.getInt(K_STREAK, 0), today())
        p.edit().putLong(K_LAST, today()).putInt(K_STREAK, next).apply()
        StreakWidgetProvider.refreshAll(context)
    }

    fun visible(context: Context): Int {
        val p = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE)
        return StreakLogic.visible(p.getLong(K_LAST, -10L), p.getInt(K_STREAK, 0), today())
    }
}
