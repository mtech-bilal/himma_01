<script setup>
import {
  externalPagination,
  kitchenSink
} from '@/views/demos/forms/tables/data-table/demoCodeDataTable';
</script>

<template>
  <VRow>
    <!-- 👉 External Pagination  -->
    <VCol cols="12">
      <AppCardCode title="External Pagination" :code="externalPagination" no-padding>
        <DemoDataTableExternalPagination />
      </AppCardCode>
    </VCol>

    <!-- 👉 Kitchen Sink  -->
    <VCol cols="12">
      <AppCardCode title="Kitchen Sink" :code="kitchenSink" no-padding>
        <DemoDataTableKitchenSink />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
