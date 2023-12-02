<template>
  <div>
    <v-col class="main_screen">
      <v-row class="first_level_auth_screen">
        <v-col>
          <v-img :width="300" :src="Images['bannerImage']"></v-img>
        </v-col>
        <v-col>
          <v-responsive
              class="mx-auto"
              height="300"
              width="500"
              max-width="700">
            <v-row>
              <h1>FlatSeller</h1>
            </v-row>
            <v-row>
              <h3>Making your dreams
                come true</h3>
            </v-row>
          </v-responsive>
        </v-col>
      </v-row>
      <v-row class="second_level_auth_screen">
        <div v-if="storeStatus.getStatus === 0">
          <auth-form/>
        </div>
        <div v-else>
          <error_auth_form/>
        </div>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import Images from "~/static/images.js";
import Error_auth_form from "~/components/error_auth_form.vue";
import {useStateAuth} from "~/stores/stateAuth.js";
export default {
  name: "AuthPage",
  components: {Error_auth_form},
  setup(){
    const storeStatus = useStateAuth();
    return{storeStatus}
  },
  data(){
    return{
      Images,
    }
  }
}


</script>


<style lang="scss">
.main_screen{
  background-color: black;
}
.first_level_auth_screen{
  background-color: #8E62EC;
  border-radius: 10% 20px;
  height: 30vh;
}
.first_level_auth_screen .v-col{
  max-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px 10px;
}
.first_level_auth_screen .v-col .v-row{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  margin: 10px 10px 10px 10px;
}
.v-responsive__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between
}
.second_level_auth_screen{
  background-color: white;
  border-radius: 10% 20px;
  height: 70vh;
}
</style>