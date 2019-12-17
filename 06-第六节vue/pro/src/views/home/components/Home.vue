 <template id="com1">
    <div>
        <div class="top">
            <img :src="src" alt="">
        </div>
        <div class="center">
            <p v-if="!isInputShow">
                {{ text }}
            </p>
            <input @blur="$emit('update:isInputShow',false)" type="text" id="ipt" v-model="texts" @keyup="upt" v-else>
        </div>
        <div class="bot">
            <button @click="del(id)">删除</button>
            <button @click="edit">编辑</button>
            <button @click="phot(src)">查看大图</button>
        </div>
    </div>
</template>
<script>
// from 后面的字符如果没有加./ 或者../ 的话那么vue-cli默认查找的目录将会是node_modules安装的目录
import mock from "mockjs";

export default {
    template:"#com1",
    props:[ // this.id
        "id",
        "text",
        "src",
        "isInputShow",
        "isMaskShow",
        "img"
    ],
    data () {
        return {
            texts:this.text
        }
    },
    methods: {
        phot(val){
            this.$emit("update:isMaskShow",true);
            this.$emit("update:img",val)
        },
        upt(){
            this.$emit("update:text",this.texts);
        },
        del(val){
            this.$emit("delparentlist",val)
        },
        edit(){
            this.$emit("update:isInputShow",true);
            // 在dom更新完成之后立即执行的操作
            this.$nextTick(()=>{
                var ele = document.getElementById("ipt");
                ele.focus();
            })
            
            //this.isInputShow = !this.isInputShow;
        }
    }
}
</script>
