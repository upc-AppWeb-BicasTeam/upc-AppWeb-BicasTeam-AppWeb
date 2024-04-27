<script>
import { HomeApiService } from "../../learning/services/home-api.service.js";

export default {
  name: "home",
  title: "Home",
  data() {
    return {
      activities: [],
      deliveries: [],
    };
  },
  created() {
    const apiService = new HomeApiService();
    apiService.getAllActivitiesDriver().then(response => {
      this.activities = response.data;
    });

    apiService.getAllDeliveriesDriver().then(response => {
      this.deliveries = response.data;
    });
  },
}
</script>

<template>
  <div class="w-full align-content-center">
    <div class="welcome-container">
      <h1 class="title">Welcome, David Doe!</h1>
      <img src="../../assets/logo.png" id="icon" alt="User Icon" class="custom-image">
    </div>
    <p class="subtitle">Let's start</p>
    <div class="card-container">
      <div class="card" v-if="activities.length">
        <h2 class="card-title"><i class="fa fa-list"></i>Today's activities</h2>
        <div class="card-content">
          <div class="activity" v-for="activity in activities" :key="activity.id">
            <div class="card-content1">
              <h3>{{ activity.title }}</h3>
              <div class="date-time"> <!-- Añadido este div -->
                <p>{{ activity.date }}</p>
                <p1>{{ activity.time }}</p1>
              </div>
            </div>
          </div>

        </div>
        <button class="see-more-button" @click="showMore">See More</button>

      </div>

      <div class="card" v-if="deliveries.length">
        <h2 class="card-title"><i class="fa fa-truck"></i>Deliveries on the move</h2>
        <div class="card-content">
          <div class="delivery" v-for="delivery in deliveries" :key="delivery.id">
            <div class="card-content2">
              <div class="delivery">
                <p>address: {{ delivery.address }}</p>
                <p>package: {{ delivery.package}}</p>
                <p>shipping: {{ delivery.shipping}}</p>
              </div>
            </div>
          </div>

        </div>
        <button class="see-more-button1" @click="showMore">See More</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'font-awesome/css/font-awesome.min.css';
.w-full {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;
}

.title {
  color: white;
  font-size: 45px;
  margin-top: -10px;
}

.subtitle {
  color: lightgrey;
  margin-top: -10px;
  font-size: 25px;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
}

.card {
  color: black;
  background-color: #ffff;
  border-radius: 20px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;


  padding: 5px;
  flex: 1;
  margin-bottom: 20px;
  width: 450px; /* Ajusta este valor a tu gusto */
  height: 400px; /* Ajusta este valor a tu gusto */
}



.card-title {
  color: black;
  font-size: 20px;
}

.card-content {

  width: 380px; /* Ajusta este valor a tu gusto */
  height: 500px;

  margin-bottom: 45px;
  margin-top: -38px;
  margin-left: 60px;




}
.card-content1{

  font-size: 14px;
  color: white;
  background-color: #303841;
  border-radius: 20px;
  margin: 5px;
  padding: 5px;
  width: 300px; /* Ajusta este valor a tu gusto */
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 25px;


}
.card-content2 {
  font-size: 16px;
  color: white;
  background-color: #303841;
  border-radius: 20px;
  margin: 5px;
  padding: 5px;
  width: 300px; /* Ajusta este valor a tu gusto */
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 25px;




}



.activity h3, .activity p {
  margin-top: 5px;
  margin-bottom: 5px;
}

.card-title {
  /* Añadido para mover el título un poco a la derecha */
  padding-left: 100px;
  margin-bottom: 25px;
}


.date-time {
  display: flex; /* Se utiliza flexbox para el diseño */
  gap: 10px; /* Ajusta este valor a tu gusto para modificar la separación */
}

.date-time p1 {
  /* Añade tus estilos aquí */

  /* Por ejemplo, para moverlo un poco a la derecha */
  margin-left: 100px; /* Ajusta este valor a tu gusto */
  margin-top: 6px;
}

.delivery {

  gap: 10px; /* Ajusta este valor a tu gusto para modificar la separación */
}
.see-more-button {
  font-size: 14px;
  margin-top: -40px;
  margin-bottom: 32px;
  background-color: #ffcc00;
  color: white;
  border: none;
  padding: 5px 5px;
  cursor: pointer;
  margin-left: 265px;
  border-radius: 20px;
  width: 100px; /* Ajusta este valor a tu gusto */
  height: 50px;
}


.see-more-button1 {
  font-size: 14px;
  margin-top: -40px;
  margin-bottom: 30px;
  background-color: #ffcc00;
  color: white;
  border: none;
  padding: 5px 5px;
  cursor: pointer;

  margin-left: 265px;
  border-radius: 20px;
  width: 100px;
  height: 50px;
}


.custom-image {
  width: 80px; /* Ajusta el ancho según tus preferencias */
  height: auto; /* Mantener la proporción original */
  margin-left: 200px; /* Ajusta la posición horizontal */
}


.welcome-container {
  display: flex;
  align-items: center; /* Centrar verticalmente */
  justify-content: flex-end; /* Alinear al lado derecho */
  margin-left: 250px
}

.fa {
  padding-right:15px

}
</style>