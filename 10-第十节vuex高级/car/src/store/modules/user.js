const user = {
    namespaced: true,
    state: {
        token:localStorage.getItem("token") ? localStorage.getItem("token") : ""
    },
    mutations: {
        uptToken(state,val){
            state.token = val
        },
        clearToken(state){
            state.token = ""
        }
    }
}
export default user