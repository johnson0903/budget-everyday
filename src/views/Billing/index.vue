<template>
  <div class="pg-billing">
    <BillingDialog />
    <BillingCalendar />
    <BillingList />
  </div>
</template>

<script>
import BillingCalendar from '@/containers/Billing/BillingCalendar'
import BillingList from '@/containers/Billing/BillingList'
import BillingDialog from '@/containers/Billing/BillingDialog'
export default {
  name: 'Billing',
  components: { BillingCalendar, BillingList, BillingDialog }

}
</script>

<style>

</style>
