<template>
    <div>
        <h1>Devices page</h1>
        <input type="text" v-model="query">
        <ul>
            <li v-for='link of 6' 
                :key='link'>
                <router-link 
                    :to="'/devices/'+link+'?title='+query">
                    Link: {{link}}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query:''
        }
    },
}
</script>

<style>

    ul li{
        cursor: pointer;
        display: block;
    }
</style>