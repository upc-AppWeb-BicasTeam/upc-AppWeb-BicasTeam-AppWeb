<script>
export default {
  name: 'app',
  data() {
    return {
      items: [
        {label: 'Report', to: '/report/view'}
      ]
    }
  }
}
</script>

<template>
  <pv-toolbar class="bg-primary" fixed>
    <template #start>
      <h3>ACME Learning Center</h3>
      <div class="flex-column">
        <router-link v-for="item in items" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="p-button-text text-white" @click="navigate">{{item.label}}</pv-button>
        </router-link>
      </div>
    </template>
  </pv-toolbar>
  <main>
    <router-view/>
  </main>
</template>
