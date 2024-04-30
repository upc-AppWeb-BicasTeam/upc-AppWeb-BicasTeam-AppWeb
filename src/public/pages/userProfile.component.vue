<script>
import Sidebar from "../components/sidebar.component.vue";
import DataView from "../../profile/components/data-view.component.vue";
export default {
  name: "userProfile",
  components: {
    Sidebar,
    DataView
  },
}
</script>

<template>
  <div class="container">
    <sidebar></sidebar>
    <data-view></data-view>
  </div>
</template>

<style>
.container{
  display: flex;
}
</style>