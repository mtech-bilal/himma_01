<script setup>
import LogisticsCardStatistics from '@/views/apps/logistics/LogisticsCardStatistics.vue'
import LogisticsDeliveryExpectations from '@/views/apps/logistics/LogisticsDeliveryExceptions.vue'
import LogisticsShipmentStatistics from '@/views/apps/logistics/LogisticsShipmentStatistics.vue'
import AnalyticsTotalTransactions from '@/views/dashboards/analytics/AnalyticsTotalTransactions.vue'
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12">
      <LogisticsCardStatistics />
    </VCol>

    <VCol cols="12" md="12">
      <LogisticsShipmentStatistics />
    </VCol>

    <VCol cols="12" md="8">
      <AnalyticsTotalTransactions />
    </VCol>

    <VCol cols="12" md="4">
      <LogisticsDeliveryExpectations />
    </VCol>

  </VRow>
</template>
