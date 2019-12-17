const moduleA = {   // moduleA
    state: { num:1 },
    namespaced: true,
    mutations: {  
        addNum(state){
            state.num += 3  // 调用的时候执行 this.$store.commit('addNum')
        }
    },
    actions: { 
        // syncAddNum(context,val){
        //     context.commit("addNum",val) // 调用的时候执行 this.$store.dispatch('syncAddNum')
        // }
    },
    getters: { 
        // addNums(state){
        //     return state.num + "元 "  // 调用的时候执行 this.$store.getters.addNums
        // }
    }
}
export default moduleA