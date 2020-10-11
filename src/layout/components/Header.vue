<template>
  <el-header
    class="app-header"
    height="60px"
  >
    <h1>{{ currentTab }}</h1>
    <el-button
      type="primary"
      icon="el-icon-search"
    >
      Search
    </el-button>
  </el-header>
</template>
<script>
export default {
  name: 'Header',
  computed: {
    currentTab () {
      return this.$route.meta.title
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: #212529;
    width: 100%;
  }
</style>
