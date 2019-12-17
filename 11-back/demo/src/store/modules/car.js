import image1 from "@/assets/images/airPods.jpg"
import image1Info from "@/assets/images/airPods_detail.jpg"

import image2 from "@/assets/images/BeatsX_1.jpg"
import image2Info from "@/assets/images/BeatsX_1_detail.jpg"

import image3 from "@/assets/images/BeatsX_2.jpg"
import image3Info from "@/assets/images/BeatsX_2_detail.jpg"

import image4 from "@/assets/images/BeatsX_3.jpg"
import image4Info from "@/assets/images/BeatsX_3_detail.jpg"

import image5 from "@/assets/images/sonos.jpg"
import image5Info from "@/assets/images/sonos_detail.jpg"
var list = [
    {
        id: 1,
        name: 'AirPods',
        brand: 'Apple',
        image: image1,
        imageDetail: image1Info,
        sales: 10000,
        cost: 1288,
        color: '白色'
    },
    {
        id: 2,
        name: 'BeatsX 入耳式耳机',
        brand: 'Beats',
        image: image2,
        imageDetail: image2Info,
        sales: 11000,
        cost: 1188,
        color: '白色'
    },
    {
        id: 3,
        name: 'Beats Solo3 Wireless 头戴式式耳机',
        brand: 'Beats',
        image: image3,
        imageDetail: image3Info,
        sales: 5000,
        cost: 2288,
        color: '金色'
    },
    {
        id: 4,
        name: 'Beats Pill+ 便携式扬声器',
        brand: 'Beats',
        image: image4,
        imageDetail: image4Info,
        sales: 3000,
        cost: 1888,
        color: '红色'
    },
    {
        id: 5,
        name: 'Sonos PLAY:1 无线扬声器',
        brand: 'Sonos',
        image: image5,
        imageDetail: image5Info,
        sales: 8000,
        cost: 1578,
        color: '白色'
    }
]

const car = {
    state: {
        list:list,
        carList:[]
    },

    namespaced: true,

    mutations: {
        inc(state,{id,num}){ // num 1 -1 
            var ele =  state.carList.find(ele => ele.id == id);
            if(num < 0){ // -1
                if(ele.num == 1){

                }else{
                    ele.num  = ele.num + num ;
                }
            }else{ // 大于0 
                ele.num  = ele.num + num ;
            }
            
        },
        del(state,val){
            var index = state.carList.findIndex(ele => ele.id == val);
            state.carList.splice(index,1)
        },
       addCar(state,val){
            var obj = {
                name:val.name,
                price:val.cost,
                num:1,
                id:val.id,
                totalPrice:"",
                img:val.image
            }
            
            var carItem = state.carList.find(ele => ele.id == val.id);
            
            if(carItem){
                
                carItem.num ++ ;
            }else{
                state.carList.push(obj);
            }
       }
    },  
    actions: {
        
    },
    getters: {
        carLists(state){
            state.carList.forEach(ele => {
                ele.totalPrice = ele.num * ele.price
            });
            return state.carList
        },
        totalPrice(state){
            //[0,1[2,3,[4,5]]]
            return  state.carList.reduce((total,current)=>{
                return total = total + current.num*current.price
            },0)
        }
    }
}
export default car