



<script>

import HomeBusinessman from "../../profiles-managment/components/home-businessman.component.vue";
import sidebarBusinessmanComponent from "../../profiles-managment/components/sidebar-businessman.component.vue";

export default {
  name: "Businessman-Profile",
  components: {
    HomeBusinessman,
    sidebarBusinessmanComponent

  },
}
</script>

<template>
  <div class="container">
    <sidebar-businessman-component/>
    <home-businessman/>
  </div>
</template>

<style>
.container{
  display: flex;
}
</style>