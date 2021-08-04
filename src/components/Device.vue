<template>
    <div>
        <h3>
            Device: {{id}}
        </h3>
        <h3>
            Query: {{this.$route.query.title}}
        </h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$router.currentRoute.params['id']
        }
    },
    watch: {
        $route(to,from){
            console.log(to,from)
            this.id = to.params['id']
        }
    }
}
</script>

<style>

</style>