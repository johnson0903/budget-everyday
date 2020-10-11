<template>
  <div class="ct_billing_dialog">
    <el-dialog
      title="新增紀錄"
      :visible.sync="dialogFormVisible"
      @close="handleClose"
    >
      <el-form
        :model="form"
        label-width="80px"
      >
        <el-form-item label="金額">
          <el-input
            v-model.number="form.dollar"
            placeholder="請輸入金額"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="類別">
          <el-select
            v-model="form.type"
            placeholder="请選擇類別"
          >
            <el-option
              label="早餐"
              value="breakfast"
            />
            <el-option
              label="午餐"
              value="lunch"
            />
            <el-option
              label="晚餐"
              value="dinner"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="帳戶">
          <el-select
            v-model="form.account"
            placeholder="请選擇帳戶"
          >
            <el-option
              label="現金"
              value="cash"
            />
            <el-option
              label="信用卡"
              value="credit-card"
            />
            <el-option
              label="電子支付"
              value="pay"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="項目">
          <el-input
            v-model="form.title"
            placeholder="請輸入項目內容"
            autocomplete="off"
          />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="handleSubmit"
        >
          儲存
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BillingDialog',
  props: {
    showDialog: {
      type: Boolean,
      required: true
    },
    dialogData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      form: {
        dollar: '',
        type: '',
        title: '',
        account: ''
      },
      dialogFormVisible: false
    }
  },
  watch: {
    showDialog: function (newValue) {
      if (newValue) {
        this.dialogFormVisible = true
        if (this.dialogData.action === 'ADD') {
          this.form = {
            dollar: 0,
            type: '',
            title: '',
            account: ''
          }
        } else {
          this.form = { ...this.dialogData.data }
        }
      }
    }
  },
  methods: {
    handleSubmit () {
      if (this.dialogData.action === 'ADD') {
        this.$store.commit('addExpenseData', this.form)
      } else {
        this.$store.commit('editExpenseData', { index: this.dialogData.index, data: this.form })
      }

      this.dialogFormVisible = false
    },
    handleClose () {
      this.$emit('close')
      this.dialogFormVisible = false
      this.form = {
        dollar: '',
        type: '',
        title: '',
        account: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .ct_billing_dialog {
    &__btn-add {
      display: block;
      margin-left: auto;
    }
  }
</style>
