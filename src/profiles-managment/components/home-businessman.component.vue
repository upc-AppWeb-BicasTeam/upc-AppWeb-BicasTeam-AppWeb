<script>
import { HomeApiService } from "../services/home-api.service.js";

export default {
  name: "home-businessman",
  title: "Home",
  data() {
    return {
      activities: [],
      conditions: [],
      deliveries: [],
    };
  },
  created() {
    const apiService = new HomeApiService();
    apiService.getAllActivities().then(response => {
      this.activities = response.data;
    });
    apiService.getAllCondition().then(response => {
      this.conditions = response.data;
    });
    apiService.getAllDeliveries().then(response => {
      this.deliveries = response.data;
    });
  },
}
</script>

<template>
  <div class="w-full align-content-center">
    <div class="welcome-container">
      <h1 class="title">Welcome, Jhon Doe!</h1>
      <img src="../../public/assets/logo.png" id="icon" alt="User Icon" class="custom-image">
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
        <div class="card-content2">
          <div class="delivery" v-for="delivery in deliveries" :key="delivery.id">
            <h3>{{ delivery.title }}</h3>
            <p>Responsible: {{ delivery.responsible }}</p>
            <p>Start time: {{ delivery.star}}</p>
            <p>Delivery time: {{ delivery.delivery}}</p>
          </div>

        </div>
        <button class="see-more-button1" @click="showMore">See More</button>
      </div>
    </div>
    <div class="card2" v-if="conditions.length">
      <h2 class="card-title2"><i class="fa fa-signal"></i>Condition of drivers and vehicles</h2>
      <div class="card-content3">
        <div class="condition" v-for="condition in conditions" :key="condition.id">
          <div class="date-time">
            <p3>Driver: {{ condition.driver }}</p3>

            <p4>Status: {{ condition.status }}</p4>

          </div>
          <div class="date-time">
            <p3>Vehicle: {{ condition.vehicle }}</p3>
            <p5>Conditions: {{ condition.conditions }}</p5>


          </div>

        </div>

      </div>
      <button class="see-more-button2" @click="showMore">See More</button>
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
  height: 280px; /* Ajusta este valor a tu gusto */
}

.card2{
  color: black;
  background-color: #ffff;
  border-radius: 20px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px;

  margin-bottom: 20px;
  width: 950px; /* Ajusta este valor a tu gusto */
  height: 180px; /* Ajusta este valor a tu gusto */
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
  font-size: 13px;
  color: white;
  background-color: #303841;
  border-radius: 20px;
  margin: 5px;
  padding: 5px;
  width: 380px; /* Ajusta este valor a tu gusto */
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  margin-top: -5px;
  margin-left: 30px;
  text-indent: 10px;
}

.card-content3{
  font-size: 13px;
  color: white;
  background-color: #303841;
  border-radius: 20px;
  margin: 5px;
  padding: 5px;
  width: 850px; /* Ajusta este valor a tu gusto */
  height: 80px;
  display: flex;
  margin-bottom: 50px;

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

.card-title2{

  /* Añadido para mover el título un poco a la derecha */
  margin-top: 10px;
  padding-right:400px;
  margin-bottom: 5px;

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
.date-time p3{

  margin-left: 100px;
  margin-top: 10px;

}

.date-time p4 {
  /* Añade tus estilos aquí */

  /* Por ejemplo, para moverlo un poco a la derecha */
  margin-left: 300px; /* Ajusta este valor a tu gusto */
  margin-top: 10px;
}

.date-time p5 {
  /* Añade tus estilos aquí */

  /* Por ejemplo, para moverlo un poco a la derecha */
  margin-left: 245px; /* Ajusta este valor a tu gusto */
  margin-top: 10px;
}

.see-more-button {
  font-size: 14px;
  margin-top: -50px;
  margin-bottom: 18px;
  background-color: #ffcc00;
  color: white;
  border: none;
  padding: 5px 5px;
  cursor: pointer;
  margin-left: 260px;
  border-radius: 20px;
  width: 100px; /* Ajusta este valor a tu gusto */
  height: 27px;
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

  margin-left: 310px;
  border-radius: 20px;
  width: 100px;
  height: 50px;
}
.see-more-button2 {
  font-size: 14px;
  margin-top: -40px;
  background-color: #ffcc00;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  margin-left: 770px;
  border-radius: 20px;
  width: 100px; /* Ajusta este valor a tu gusto */
  height: 27px;
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

