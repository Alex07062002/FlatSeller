<template>
  <v-col>
    <v-row class="first_level_error_comp">
        <v-responsive
            class="mx-auto"
            max-width="1100"
        >
          <h1>Ошибка авторизации</h1>
        </v-responsive>
    </v-row>
    <v-row class="second_level_error_comp">
      <v-responsive
          class="mx-auto"
          max-width="1100">
        <h3>Введён неверный логин или пароль</h3>
      </v-responsive>
    </v-row>
    <v-row class="third_level_error_comp">
      <v-responsive
          class="mx-auto"
          max-width="1100">
        <h3>Попробуйте снова</h3>
      </v-responsive>
    </v-row>
    <v-row class="fourth_level_error_comp">
      <v-col>
        <v-btn @click="navToAuth">Авторизоваться снова</v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>


<script>
import {useStateAuth} from "~/stores/stateAuth.js";

export default {
  name: "AuthErrorForm",
  setup(){
    const storeStatus = useStateAuth();
    return{storeStatus}
  },
  methods:{
    navToAuth(){
      this.storeStatus.statusNewValue(0);
    }
  }
}

</script>


<style lang="scss">
.v-responsive__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.first_level_error_comp{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px 10px 50px 10px;
}
.second_level_error_comp{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 10px 10px;
}
.third_level_error_comp{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 10px 10px;
}
.fourth_level_error_comp .v-col{
  display: flex;
  justify-content: center;
}
.fourth_level_error_comp .v-col .v-btn{
  background-color: black;
  color: white;
}

</style>