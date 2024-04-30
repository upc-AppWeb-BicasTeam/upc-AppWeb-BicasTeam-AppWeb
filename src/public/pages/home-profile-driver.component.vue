<script>
import sidebarDriverComponent from "../../profiles-managment/components/sidebar-driver.component.vue";
import homeDriverComponent from "../../profiles-managment/components/home-driver.component.vue";

export default {
  name: "Businessman-Profile",
  components: {

    homeDriverComponent,
    sidebarDriverComponent


  },
}
</script>

<template>
  <div class="container">
    <sidebar-driver-component/>
    <home-driver-component/>
  </div>
</template>

<style>
.container{
  display: flex;
}
</style>