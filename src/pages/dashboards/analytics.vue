<script setup>
import AnalyticsActivityTimeline from '@/views/dashboards/analytics/AnalyticsActivityTimeline.vue'
import AnalyticsPerformance from '@/views/dashboards/analytics/AnalyticsPerformance.vue'
import AnalyticsSalesCountry from '@/views/dashboards/analytics/AnalyticsSalesCountry.vue'

const statisticsVertical = [
  {
    title: 'Pending',
    color: 'warning',
    icon: 'ri-time-line',
    stats: '18',
    subtitle: '1,131,577.67 \uFDFC'
  },
  {
    title: 'Disbursed',
    color: 'primary',
    icon: 'ri-cash-line',
    stats: '25',
    subtitle: '1,365,460.78 \uFDFC',
  },
  {
    title: 'Settled',
    color: 'info',
    icon: 'ri-shake-hands-fill',
    stats: '4',
    subtitle: '109,000.00 \uFDFC',
  },
  {
    title: 'Denied',
    color: 'error',
    icon: 'ri-close-circle-line',
    stats: '0',
    subtitle: '0.00 \uFDFC',
  },
]
</script>

<template>
  <VRow class="match-height">

    <VCol cols="12" md="4">
      <VRow>

        <!-- 👉 Total Sales -->
        <VCol cols="6">
          <CardStatisticsVertical v-bind="statisticsVertical[0]" />
        </VCol>

        <VCol cols="6">
          <CardStatisticsVertical v-bind="statisticsVertical[1]" />
        </VCol>


        <VCol cols="6">
          <CardStatisticsVertical v-bind="statisticsVertical[2]" />
        </VCol>

        <VCol cols="6">
          <CardStatisticsVertical v-bind="statisticsVertical[3]" />
        </VCol>

      </VRow>
    </VCol>



    <!-- 👉 Sales Country -->
    <VCol cols="12" md="8">
      <AnalyticsSalesCountry />
    </VCol>


    <!-- 👉 Performance Chart -->
    <VCol cols="12" sm="6" md="4">
      <AnalyticsPerformance />
    </VCol>

    <!-- 👉 Activity Timeline -->
    <VCol cols="12" md="8">
      <AnalyticsActivityTimeline />
    </VCol>



  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
