import Vue from 'vue'
import Vuex from 'vuex'
import car from "./modules/car"
import user from "./modules/user"

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        car:car,
        user
    }
})
