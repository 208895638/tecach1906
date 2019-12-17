const user = {
    state: {
        username: localStorage.getItem("user")
    },

    namespaced: true,

    mutations: {
        // 
        addUserName(state,val){ // 修改state里面的属性
            state.username = val;
        }
    },
    actions: {
        
    },
    getters: {
        
    }
}
export default user