<template>
  <div id="app">
    <div class="menu">
      <router-link v-for='(menu,index) of menus' :key='index' :to='menu.link' exact active-class="active">
        {{menu.title}}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      menus: [
        { title: 'Home', link: '/' },
        { title: 'Category', link: '/category' },
        { title: 'Devices', link: '/devices' },
      ]
    }
  },
}
</script>
<style>
  .menu {
    display: flex;
    justify-content: center;
  }
  .menu a {
    margin: 0px 10px;
    text-decoration: none;
    color: #000;
  }
  .menu a.active {
    text-decoration: underline;
  }
</style>
