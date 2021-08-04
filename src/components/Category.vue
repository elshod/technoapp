<template>
    <div>
        <h1>Category page</h1>
        <div class="menu">
            <router-link v-for='(menu,index) of menus' :key='index' 
            :to="{name:'Category',name:menu.title}" >
            {{menu.title}}</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menus: [
                {title:'List',link:'list'},
                {title:'NewCategory',link:'new-category'},
            ]
        }
    },
}
</script>

<style>

</style>