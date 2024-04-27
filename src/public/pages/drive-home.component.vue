
<script>
export default {
  name: 'app',
  title: 'Welcome',
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Home', to: '/home', icon: 'fa-home' },
        { label: 'Organization', to: '/organization', icon: 'fa-users' },
        { label: 'Reports', to: '/reports', icon: 'fa-bar-chart' },
      ],
      setting: [
        { label: 'Setting', to: '/setting', icon: 'fa-cog' },
      ]
    }
  },
  created() {
    document.body.style.backgroundColor = '#5D6D7E';
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
}
</script>

<template>
  <div class="app">
    <div class="sidebar">
      <div class="profile">
        <img src="./assets/conductor.png" id="icon" alt="User Icon" class="custom-image">
        <h1 class="name">David Doe</h1>
      </div>
      <p class="count">Driver</p>
      <nav>
        <router-link v-for="item in items" :key="item.label" v-slot="{navigate, href}" :to="item.to" custom>
          <pv-button :href="href" class="p-button-text text-white" @click="navigate">
            <i class="fa" :class="item.icon"></i> {{ item.label }}
          </pv-button>
        </router-link>
      </nav>
      <div class="setting">
        <router-link v-for="setting in setting" :key="setting.label" v-slot="{navigate, href}" :to="setting.to" custom>
          <pv-button :href="href" class="p-button-text text-white" @click="navigate">
            <i class="fa fa-cog"></i> {{ setting.label }}
          </pv-button>
        </router-link>
      </div>
    </div>
    <main>
      <router-view/>
    </main>
  </div>
</template>



<style scoped>
@import 'font-awesome/css/font-awesome.min.css';

/* Estilos CSS aquí */
</style>



<style scoped>
@import 'font-awesome/css/font-awesome.min.css';

.app {
  display: flex;
  font-family: 'Roboto', sans-serif; /* Cambiado a una fuente más moderna */
  height: 100vh;
  align-items: center;
  position: fixed;
}
.sidebar {
  width: 200px;
  height: 100vh;
  background-color: #303841;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-top-right-radius: 20px; /* Ajusta este valor a tu gusto */
  border-bottom-right-radius: 20px; /* Ajusta este valor a tu gusto */
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
.name {
  color: white;
  font-size: 24px;
  margin-top: -10px;
  white-space: nowrap;
  margin-left: -10px;
}

.count {
  color: white;
  margin-top: -10px;
  font-size: 12px;
  margin-left: 70px;

}

nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%; /* Añadido para que los botones ocupen todo el ancho */
}
main {
  width: 100%; /* Ajusta este valor a tu gusto */
  height: 100%; /* Ajusta este valor a tu gusto */
  background-color: #5D6D7E;
  color: white;
  margin-left: 280px; /* Cambiado para que el contenido principal no se superponga con la barra lateral */
  margin-bottom: 20px;
}

.setting{
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%; /* Añadido para que los botones ocupen todo el ancho */
}

.custom-image {
  width: 80px; /* Ajusta el ancho según tus preferencias */
  height: 75px; /* Mantener la proporción original */
  margin-left: 200px; /* Ajusta la posición horizontal */
  border-radius: 50%;
  margin-right: 15px
}


.profile {
  display: flex;
  align-items: center; /* Centrar verticalmente */
  justify-content: flex-end; /* Alinear al lado derecho */
  margin-right: 200px;
  margin-top: 60px;
  margin-bottom: -150px
}
.fa {
  padding-right:15px

}

</style>



