package com.vanipy.sanggup

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class StreakLogicTest {
    @Test fun firstPracticeStartsAtOne() = assertEquals(1, StreakLogic.record(-10, 0, 100))
    @Test fun sameDayDoesNotDoubleCount() = assertEquals(3, StreakLogic.record(100, 3, 100))
    @Test fun nextDayExtends() = assertEquals(4, StreakLogic.record(99, 3, 100))
    @Test fun gapResetsToOne() = assertEquals(1, StreakLogic.record(97, 5, 100))
    @Test fun visibleBrokenAfterGap() = assertEquals(0, StreakLogic.visible(97, 5, 100))
    @Test fun visibleKeepsYesterday() = assertEquals(5, StreakLogic.visible(99, 5, 100))
    @Test fun atRiskOnlyWhenYesterday() {
        assertTrue(StreakLogic.atRisk(99, 5, 100))
        assertFalse(StreakLogic.atRisk(100, 5, 100))
    }
}
