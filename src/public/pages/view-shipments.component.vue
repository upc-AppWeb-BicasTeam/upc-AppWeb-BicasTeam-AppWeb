<script>

import Sidebar from "../components/sidebar.component.vue";
import OrganizationCarrier from "../../service-execution/components/organization-carrier.component.vue";


export default {
  name: "organization-shipment",
  components: {OrganizationCarrier, Sidebar},

}
</script>

<template>
  <div class="container">
    <sidebar></sidebar>
    <organization-carrier></organization-carrier>
  </div>

</template>

<style>
.container{
  display: flex;
}
</style>