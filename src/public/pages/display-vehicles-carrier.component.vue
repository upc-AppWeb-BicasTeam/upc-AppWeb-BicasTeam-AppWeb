<script>
import {defineComponent} from "vue";
import CyaVehiclesCarrier from "../../cya/components/cya-vehicles-carrier.component.vue";
import SidebarPublic from "../components/sidebar.component.vue";

export default defineComponent({
  components: {SidebarPublic, CyaVehiclesCarrier}
})
</script>

<template>
  <div class="container">
    <sidebar-public/>
    <cya-vehicles-carrier/>
  </div>
</template>

<style scoped>
.container{
  display: flex;
}
</style>