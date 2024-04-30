<script>
import Sidebar from "../components/sidebar.component.vue";
import OrganizationBusinessman from "../../service-execution/components/organization-businessman.component.vue";

export default {
  name: "organization-shipment",
  components: {OrganizationBusinessman,Sidebar},

}
</script>

<template>
  <div class="container">
    <sidebar></sidebar>
    <organization-businessman></organization-businessman>
  </div>

</template>

<style>
.container{
  display: flex;
}
</style>