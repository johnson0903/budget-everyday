/* eslint-disable vue/attribute-hyphenation */

<template>
  <div class="pg-billing">
    <el-button
      class="pg-billing__btn-add"
      type="primary"
      @click="handleAdd"
    >
      新增紀錄
    </el-button>
    <OverviewDialog
      :show-dialog="showDialog"
      :dialog-data="dialogData"
      @close="closeDialog"
    />
    <OverviewList @edit="handleEdit" />
    <BudgetCalendar />
  </div>
</template>

<script>
// import OverviewCalendar from '@/containers/Overview/OverviewCalendar'
import OverviewList from '@/containers/Overview/OverviewList'
import OverviewDialog from '@/containers/Overview/OverviewDialog'
import BudgetCalendar from '@/containers/Budget/BudgetCalendar'
export default {
  name: 'Overview',
  components: { OverviewList, OverviewDialog, BudgetCalendar },
  data () {
    return {
      showDialog: false,
      dialogData: {
        action: '',
        data: {
          dollar: 0,
          type: '',
          account: '',
          title: ''
        }
      }
    }
  },
  methods: {
    handleAdd () {
      this.dialogData.action = 'ADD'
      this.dialogData.data = {}
      this.showDialog = true
    },
    handleEdit ({ index, data }) {
      this.dialogData.action = 'EDIT'
      this.dialogData.data = data
      this.dialogData.index = index
      this.showDialog = true
    },
    closeDialog () {
      this.dialogData.action = ''
      this.dialogData.data = {}
      this.showDialog = false
    }
  }

}
</script>

<style lang="scss">
  // .pg-billing {
  //   &__btn-add {
  //     display: block;
  //     margin-left: auto;
  //   }
  // }
</style>
