<script setup>
const { data: productList } = await useApi('pages/loan-request')
const search = ref('')

// headers
const headers = [
  {
    title: 'Loan Type',
    key: 'type',
  },
  {
    title: 'Loan Number',
    key: 'id',
  },
  {
    title: 'Registration Date',
    key: 'date',
  },
  {
    title: 'Status',
    key: 'status',
    sortable: true,
  },
  {
    title: 'Loan Amount',
    key: 'amount',
    sortable: true,
  },
]

const resolveStatusColor = status => {
  if (status === 'Confirmed')
    return 'primary'
  if (status === 'Completed')
    return 'success'
  if (status === 'Cancelled')
    return 'error'
}


</script>

<template>


  <div>

    <VCard class="app-card-code">
      <VCardItem>

        <VCardText>
          <VRow>
            <VCol cols="8" md="8">
              <VCardTitle style="font-size: 24px;"><b>Loan Requests</b></VCardTitle>
            </VCol>
            <VCol cols="4" md="4">
              <VTextField v-model="search" label="Search" placeholder="Search ..." append-inner-icon="ri-search-line"
                single-line hide-details dense outlined />
            </VCol>
          </VRow>
        </VCardText>

        <!-- 👉 Data Table  -->
        <VDataTable :headers="headers" :items="productList || []" :search="search" :items-per-page="10"
          class="text-no-wrap">
          <template #item.type="{ item }">
            <span>{{ item.type }}</span>
          </template>
          <template #item.id="{ item }">
            <span>{{ item.id }}</span>
          </template>
          <template #item.date="{ item }">
            <span>{{ item.date }}</span>
          </template>
          <template #item.status="{ item }">
            <VChip :color="item.status === 'Quoted' ? 'primary' : item.status === 'Settled' ? 'error' : 'default'"
              size="small" class="font-weight-medium">
              {{ item.status }}
            </VChip>
          </template>
          <template #item.amount="{ item }">
            <span>{{ item.amount }}</span> <span>&#65020;</span>
          </template>
        </VDataTable>


      </VCardItem>
    </VCard>

  </div>
</template>
