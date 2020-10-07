<template>
  <div class="home">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from '@/layout/index.vue'

export default {
  name: 'Home',
  components: {
    Layout
  }
}
</script>
