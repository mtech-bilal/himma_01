<script setup>
const logisticData = ref([
  {
    icon: 'ri-time-line',
    color: 'warning',
    title: 'Pending',
    value: 18,
    change: '1,131,577.67 \uFDFC',
    isHover: false,
  },
  {
    icon: 'ri-cash-line',
    color: 'primary',
    title: 'Disbursed',
    value: 25,
    change: '1,365,460.78 \uFDFC',
    isHover: false,
  },
  {
    icon: 'ri-shake-hands-fill',
    color: 'info',
    title: 'Settled',
    value: 4,
    change: '109,000.00 \uFDFC',
    isHover: false,
  },
  {
    icon: 'ri-close-circle-line',
    color: 'error',
    title: 'Denied',
    value: 0,
    change: '0.00 \uFDFC',
    isHover: false,
  },
])
</script>

<template>
  <VRow>
    <VCol v-for="(data, index) in logisticData" :key="index" cols="12" md="3" sm="6">
      <div>
        <VCard class="logistics-card-statistics cursor-pointer"
          :style="data.isHover ? `border-block-end-color: rgb(var(--v-theme-${data.color}))` : `border-block-end-color: rgba(var(--v-theme-${data.color}),0.38)`"
          @mouseenter="data.isHover = true" @mouseleave="data.isHover = false">
          <VCardText>
            <div class="d-flex align-center gap-x-4 mb-2">
              <VAvatar variant="tonal" :color="data.color" rounded="lg">
                <VIcon :icon="data.icon" size="24" />
              </VAvatar>
              <h4 class="text-h4">
                {{ data.value }}
              </h4>
            </div>
            <h6 class="text-h6 font-weight-regular">
              {{ data.title }}
            </h6>
            <div class="d-flex align-center">
              <div class="text-body-1 font-weight-medium me-2">
                <b> {{ data.change }}</b>
              </div>
              <!-- <span class="text-sm text-disabled">than last week</span> -->
            </div>
          </VCardText>
        </VCard>
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
@use "@core/scss/base/mixins" as mixins;

.logistics-card-statistics {
  border-block-end-style: solid;
  border-block-end-width: 2px;

  &:hover {
    border-block-end-width: 3px;
    margin-block-end: -1px;

    @include mixins.elevation(10);

    transition: all 0.1s ease-out;
  }
}

.skin--bordered {
  .logistics-card-statistics {
    &:hover {
      margin-block-end: -2px;
    }
  }
}
</style>
