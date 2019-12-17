import mock from "mockjs";
var mocks = mock.Random , arr=[];

for(var i = 0 ; i< 10 ; i++){
    var num = mocks.integer(1, 5); // 商品原数据 对应的数量
    var oldNum = JSON.parse(JSON.stringify(num)); // 保存商品的元数据  把这个保存的数据作为购物车商品的最大值 
    var obj = {
        id:mocks.guid(),
        name:mocks.ctitle(5),
        info:mocks.cparagraph(),
        num: num,
        oldNum:oldNum, // 购物车里面的数据 如果等于这里保存的num1 那就以为着购物车里面的数据是最大值
        price: mocks.float(0, 100, 0, 0),
        img:mocks.dataImage('200x100')
    }
    arr.push(obj)
}
console.log(arr)

const car = {
    state: {
        list:arr,
        carList:[]
    },
    namespaced: true,
    mutations: {
        addCar(state,val){
            var item = state.carList.find(ele => ele.id == val.id);
            var ele = state.list.find(ele => ele.id == val.id); // 商品的数据
            var obj = {
                id:val.id,
                name:val.name,
                num: 1,
                maxNum:ele.oldNum,
                isChecked:false,
                price: val.price
            };
            
            ele.num -- ;
            if(item){ // 如果购物车存在当前传递过来的商品
                item.num ++ ;
            }else{
                state.carList.push(obj);
            };
            console.log(state.carList)
        },
        uptCheck(state){
            var bol = state.carList.every(ele => ele.isChecked == true);
            if(bol){
                state.carList.forEach(ele => ele.isChecked = false)
            }else{
                state.carList.forEach(ele => ele.isChecked = true)
            }
            
        },
        inc(state , id){ 
            var item = state.carList.find(ele => ele.id == id);
            var ele = state.list.find(ele => ele.id == id)
            if(item.num == 0){

            }else{
                item.num -- ;
                ele.num ++ ;
            }
        },
        add(state , id){
            var item = state.carList.find(ele => ele.id == id);
            var ele = state.list.find(ele => ele.id == id);
            item.num ++ ;
            ele.num -- ;
        }
    },
    getters: {
        carNum(state){
            return state.carList.length;
        },
        isAllchecked(state){
            var bol = state.carList.every(ele => ele.isChecked == true);
            if(state.carList.length == 0){
                return false
            }
            return  bol
        },
        totalPrice(state){
            return state.carList.reduce((total, current)=>{
                if(current.isChecked == true){
                    return total = total + current.price * current.num
                }else{
                    return total
                }
            },0)
        }
    }
}

export default car