<script>
export default {
  name: "register-information",
  data(){
    return{
      type: this.$route.query.type
    }
  },

}
</script>

<template>
  <h1>hola</h1>
  <h2>type: {{type}}</h2>
</template>

<style scoped>

</style>