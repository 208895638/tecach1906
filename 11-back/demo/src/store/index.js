import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

import user from "./modules/user"
import car from "./modules/car"
const store = new Vuex.Store({
    modules: {
        userModule: user,
        car:car
    }
})

export default store