<template>
  <el-aside
    class="app-sidebar"
    width="200px"
  >
    <el-menu
      :default-active="activeIndex"
      @select="handleItemSelect"
    >
      <template v-for="menuItem in menuList">
        <el-menu-item
          :key="menuItem.name"
          :index="menuItem.name"
        >
          <i :class="['app-sidebar__icon', `${menuItem.meta.icon}`]" />
          <span>{{ menuItem.meta.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      activeIndex: this.$route.name
    }
  },
  computed: {
    menuList () {
      return this.$router.options.routes[0].children
    }
  },
  methods: {
    handleItemSelect (index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index
        this.$route.push({ name: index })
      }
    }
  }
}
</script>
<style lang="scss">
  .app-sidebar {
    &__icon {
      margin-right: 0.75rem;
    }
  }
</style>
