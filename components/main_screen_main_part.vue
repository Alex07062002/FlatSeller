<script>
import Images from "~/static/images.js";

export default {
  name: "MainScreenMainPart",
  data(){
    return {
      Images
    }
  }
}

</script>

<template>
  <v-col>
    <v-row class="first_level_main_comp">
    <v-col>
      <v-responsive
          class="mx-auto"
        max-width="300"
        >
        <h2>Агентство по покупке
        недвижимости уже
          у Вас дома</h2>
      </v-responsive>
    </v-col>
    <v-col>
    <v-responsive
      class="mx-auto"
      max-width="300">
      <h2>Добро пожаловать на
        площадку по продаже квартир</h2>
    </v-responsive>
    </v-col>
    </v-row>
    <v-row class="second_level_main_comp">
      <v-responsive
          class="mx-auto"
          max-width="1100">
        <h4>Купи квартиру своей мечты
          без очередей и долгих поисков</h4>
      </v-responsive>
    </v-row>
    <v-row class="third_level_main_comp">
      <v-responsive
      class="mx-auto"
      max-width="1100">
      <h4>Вы только подумали,
        а мы уже предлагаем лучшие
        цены на рынке</h4>
      </v-responsive>
    </v-row>
    <v-row class="fourth_level_main_comp">
    <v-col>
    <v-img :width="200" :src="Images['clockImage']"></v-img>
    </v-col>
    <v-col>
    <NuxtLink to="/AuthPage"><v-btn>Начать поиск</v-btn></NuxtLink>
    </v-col>
    <v-col>
      <v-img :width="200" :src="Images['houseMainImage']"></v-img>
    </v-col>
    </v-row>
  </v-col>
</template>

<style lang="scss">

.v-responsive__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between
}
.first_level_main_comp .v-col{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px 10px 10px 10px;
}
.second_level_main_comp{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 10px 10px;
}
.third_level_main_comp{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 10px 10px;
}
.fourth_level_main_comp .v-col{
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 10px 10px;
}

.fourth_level_main_comp .v-col .v-btn{
  background-color: black;
  color: white;
}
</style>