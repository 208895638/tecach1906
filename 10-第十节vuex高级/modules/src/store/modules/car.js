const moduleA = {   // moduleA
    state: { 
        num:1 ,
        carList:[], // 存放添加的商品
    
        list:[
            {
                name:"法国 拉菲",
                num:10,
                price:368,
                id:1
            },
            {
                name:"茅台",
                num:20,
                price:888,
                id:2
            },
            {
                name:"啤酒",
                num:30,
                price:468,
                id:3
            },
        ]
    }, // this.$store.state.car.num
    namespaced: true, // 不加namespaced: true,只有state里面的数据是模块的 只有js函数有同名的情况 与这个js函数同名的函数都会执行
    // namespaced: true 加这个属性之后 mutations actions  getters 就会启用模块
    mutations: {  
        checkAll(state){
            // 判断上面数据是否勾选
            var isAllChecked = false;
            if(state.carList.length == 0){
                isAllChecked =  false
            }
            isAllChecked =  state.carList.every(ele => ele.isIpt == true);
            if(isAllChecked){ // 未true的情况是全部选中
                state.carList.forEach(ele => ele.isIpt = false)
            }else{
                state.carList.forEach(ele => ele.isIpt = true)
            }
        },
        addNum(state){
            state.num += 2  // 调用的时候执行 this.$store.commit("car/addNum")
        },
        addCar(state,id){ // 把商品添加到购物车
            var obj = state.list.find(ele => ele.id == id); // 查找需要添加的商品
            if(obj.num == 0){

            }else{
                obj.num -- ;
                var addObj = { // 添加到购物车里面的数据
                    name : obj.name,
                    num : 1,
                    id:id,
                    isIpt:false,
                    price : obj.price
                };
                // 
                
                var item = state.carList.find(ele =>ele.id == id ); // 购物车已经存在的数据
                if(item){
                    item.num ++;
                }else{
                    state.carList.push(addObj);
                }
            }
            
        }
    },
    actions: { 
        syncAddNum(context){
            setTimeout(()=>{
                context.commit("addNum") // 调用的时候执行 this.$store.dispatch("car/syncAddNum")
            },500)
            
        }
    },
    getters: { 
        addNums(state){
            return state.num + "元"  //  this.$store.getters["car/addNums"]
        },
        total(state){
            return state.carList.reduce((total , current)=>{
                if(current.isIpt == true){
                    return total = total + current.num*current.price
                }
                return total
            },0)
        },
        isAllChecked(state){
            if(state.carList.length == 0){
                return false
            }
            return state.carList.every(ele => ele.isIpt == true);
        }
    }
}
export default moduleA