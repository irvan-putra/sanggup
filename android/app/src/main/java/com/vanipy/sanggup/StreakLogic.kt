package com.vanipy.sanggup

/** Pure streak rules. Days are local calendar days as epoch-day numbers. */
object StreakLogic {
    /** New streak after practice is logged on [today]. */
    fun record(lastDay: Long, streak: Int, today: Long): Int = when {
        lastDay == today -> streak
        lastDay == today - 1 -> streak + 1
        else -> 1
    }

    /** Streak to show on [today]: broken if no practice yesterday or today. */
    fun visible(lastDay: Long, streak: Int, today: Long): Int =
        if (lastDay == today || lastDay == today - 1) streak else 0

    /** True when today's practice is not yet logged but a streak is still alive. */
    fun atRisk(lastDay: Long, streak: Int, today: Long): Boolean =
        streak > 0 && lastDay == today - 1
}
