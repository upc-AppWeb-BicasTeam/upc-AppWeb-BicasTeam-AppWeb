<script>
import {defineComponent} from "vue";
import Sidebar from "../components/sidebar.component.vue";
import CyaVehiclesCarrier from "../../cya/components/cya-vehicles-carrier.component.vue";


export default defineComponent({
  components: { CyaVehiclesCarrier,Sidebar}
})
</script>

<template>
  <div class="container">
    <sidebar></sidebar>
    <cya-vehicles-carrier/>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>