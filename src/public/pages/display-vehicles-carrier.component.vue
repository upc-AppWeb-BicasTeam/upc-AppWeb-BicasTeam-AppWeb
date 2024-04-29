<script>
import {defineComponent} from "vue";
import CyaVehiclesCarrier from "../../cya/components/cya-vehicles-carrier.component.vue";
import SidebarPublic from "../components/sidebar.component.vue";

export default defineComponent({
  components: {SidebarPublic, CyaVehiclesCarrier}
})
</script>

<template>
  <sidebar-public/>
  <cya-vehicles-carrier/>
</template>

<style scoped>
</style>