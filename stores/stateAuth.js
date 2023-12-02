import { defineStore } from 'pinia'

export const useStateAuth = defineStore('stateAuth', {
    state: () => {
        return {
            status: 0,
        }
    },
    getters:{
        getStatus:(state)=> state.status,
    },
    actions:{
        statusNewValue(new_value){
            this.status = new_value;
        }
    }
});