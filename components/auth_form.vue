<template>
  <v-col>
    <v-row class="first_level_auth_comp">
      <v-responsive
          class="mx-auto"
          max-width="1100">
        <h1>Авторизоваться</h1>
      </v-responsive>
    </v-row>
    <v-row class="second_level_auth_comp">
      <v-responsive
          class="mx-auto"
          width="1100">
        <v-text-field class = "textfield"
                      v-model="login"
                      placeholder="Введите логин"
                      variant="outlined"
                      rounded
        ></v-text-field>
      </v-responsive>
    </v-row>
    <v-row class="third_level_auth_comp">
      <v-responsive
          class="mx-auto"
          width="1100">
        <v-text-field class = "textfield"
                      v-model="password"
                      type="password"
                      placeholder="Введите пароль"
                      variant="outlined"
                      rounded
      ></v-text-field>
      </v-responsive>
    </v-row>
    <v-row class="fourth_level_auth_comp">
      <v-col>
        <v-btn @click="checkAuth">Войти</v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import Images from "~/static/images.js";
import {useStateAuth} from "~/stores/stateAuth.js";

export default {
  name: "AuthMainPart",
  setup(){
    const storeStatus = useStateAuth();
    return{storeStatus}
  },
  data(){
    return{
      Images,
      login: "",
      password: ""
    }
  },
  methods:{
    checkAuth(){
     if(this.login === "Admin" && this.password === "Pa$$w0rd"){
       navigateTo("/Cities")
     } else{
      this.storeStatus.statusNewValue(2);
     }
    }
  }
}


</script>


<style lang="scss">
.v-col{
  width: 100vw;
}
.v-responsive__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.v-field__input{
  width: 600px;
}
.first_level_auth_comp{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px 10px 50px 10px;
}
.second_level_auth_comp{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 10px 10px;
}
.third_level_auth_comp{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 10px 10px;
}
.fourth_level_auth_comp .v-col{
  display: flex;
  justify-content: center;
}
.fourth_level_auth_comp .v-col .v-btn{
  background-color: black;
  color: white;
}

</style>