<script setup>
const chartColors = {
  line: {
    series1: '#5cccb4',
    series2: '#666CFF',
  },
}

const headingColor = 'rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))'
const labelColor = 'rgba(var(--v-theme-on-background), var(--v-disabled-opacity))'
const borderColor = 'rgba(var(--v-border-color), var(--v-border-opacity))'

const series = [
  {
    name: 'Loan',
    type: 'column',
    data: [
      38,
      45,
      33,
      38,
      32,
      48,
      45,
      40,
      42,
      37,
      38,
      32,
    ],
  },
  {
    name: 'Month',
    type: 'line',
    data: [
      23,
      28,
      23,
      32,
      25,
      42,
      32,
      32,
      26,
      24,
      12,
      22,
    ],
  },
]

const LoansConfig = {
  chart: {
    type: 'line',
    stacked: false,
    parentHeightOffset: 0,
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  markers: {
    size: 5,
    colors: '#fff',
    strokeColors: chartColors.line.series2,
    hover: { size: 6 },
    borderRadius: 4,
  },
  stroke: {
    curve: 'smooth',
    width: [
      0,
      3,
    ],
    lineCap: 'round',
  },
  legend: {
    show: true,
    position: 'bottom',
    markers: {
      width: 8,
      height: 8,
      offsetX: -3,
    },
    height: 40,
    itemMargin: {
      horizontal: 10,
      vertical: 0,
    },
    fontSize: '15px',
    fontFamily: 'Inter',
    fontWeight: 400,
    labels: {
      colors: headingColor,
      useSeriesColors: !1,
    },
    offsetY: 10,
  },
  grid: {
    strokeDashArray: 8,
    borderColor,
  },
  colors: [
    chartColors.line.series1,
    chartColors.line.series2,
  ],
  fill: {
    opacity: [
      1,
      1,
    ],
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: { enabled: false },
  xaxis: {
    tickAmount: 10,
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px',
        fontFamily: 'Inter',
        fontWeight: 400,
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    tickAmount: 4,
    min: 0,
    // max: 50,
    labels: {
      style: {
        colors: labelColor,
        fontSize: '13px',
        fontFamily: 'Inter',
        fontWeight: 400,
      },
      formatter(val) {
        return `${val}`
      },
    },
  },
  responsive: [
    {
      breakpoint: 1400,
      options: {
        chart: { height: 320 },
        xaxis: { labels: { style: { fontSize: '10px' } } },
        legend: {
          itemMargin: {
            vertical: 0,
            horizontal: 10,
          },
          fontSize: '13px',
          offsetY: 12,
        },
      },
    },
    {
      breakpoint: 1025,
      options: {
        chart: { height: 415 },
        plotOptions: { bar: { columnWidth: '50%' } },
      },
    },
    {
      breakpoint: 982,
      options: { plotOptions: { bar: { columnWidth: '30%' } } },
    },
    {
      breakpoint: 480,
      options: {
        chart: { height: 250 },
        legend: { offsetY: 7 },
      },
    },
  ],
}
</script>

<template>
  <VCard>
    <VCardItem title="Financed loans" subtitle="Total financed loans in the last 12 months">
      <template #append>
        <VBtnGroup density="compact" variant="outlined" divided>
          <VBtn color="primary">
            SAR 0.00
          </VBtn>

          <!-- <VBtn
            icon="ri-arrow-down-s-line"
            color="primary"
          /> -->
        </VBtnGroup>
      </template>
    </VCardItem>

    <VCardText>
      <VueApexCharts id="shipment-statistics" type="line" height="320" :options="LoansConfig" :series="series" />
    </VCardText>
  </VCard>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";

.v-btn-group--divided .v-btn:not(:last-child) {
  border-inline-end-color: rgba(var(--v-theme-primary), 0.5);
}

#shipment-statistics {
  .apexcharts-legend-text {
    font-size: 15px !important;
    line-height: 22px;
  }

  .apexcharts-legend {
    .apexcharts-legend-series {
      border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
      border-radius: 0.5rem;
      block-size: 75%;
      margin-inline: 8px !important;
      padding-block: 4px;
      padding-inline: 16px;
    }
  }
}
</style>
