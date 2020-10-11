<template>
  <el-container class="app-layout">
    <Sidebar />
    <el-container class="app-main">
      <Header />
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
export default {
  name: 'Layout',
  components: { Header, Sidebar }
}
</script>
<style>
  .app-layout {
    /* width: 100%; */
    height: 100vh;
    margin: 0;
  }
  .app-main {
    background-color: #212529;
    flex-direction: column;
  }

  .el-aside {
    height: 100%;
    background-color: #272B2F;
  }
</style>
