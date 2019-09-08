# vue 

### v-model

Vue的核心特性之一是双向绑定，vue的响应式原理是实现了数据－>视图，接下来我们要学习 视图－>数据的原理。v-model
> 用法：
v-model指令用来在input、select、textarea、checkbox、radio等表单控件或者组件上创建双向绑定。
你可以用 v-model 指令在表单控件元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖，它负责监听用户的输入事件以更新数据，并特别处理一些极端的例子。

+ 双向绑定文本

```html
<div id="demo">
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
</div>
<script type="text/javascript">
    var app=new Vue({
        el:'#demo',
        data:{
            message:'hello vue'
        }
    });
</script>
```
+ 多行文本 

```html
<div id="demo">
    <span>Multiline message is:</span>
    <p style="white-space: pre">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
</div>
<script type="text/javascript">
    var app=new Vue({
        el:'#demo',
        data:{
            message:'hello vue'
        }
    });
</script>
```
+ 复选框
  - 单个勾选框，
```html
<div id="demo">
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
</div>
<script type="text/javascript">
    var app=new Vue({
        el:'#demo',
        data:{
            checked:false
        }
    });
</script>
```
+ 多个勾选框，绑定到同一个数组：
```html
<div id="demo">
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
</div>
<script type="text/javascript">
    var app=new Vue({
        el:'#demo',
        data:{
            checkedNames: []
        }
    });
</script>
```
+ 单选按钮 
```html
<div id="demo">
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
</div>
<script type="text/javascript">
    var app=new Vue({
        el:'#demo',
        data:{
                picked: ''
        }
    });
</script>
```
+ 选择列表 
```html
<div id="demo">
    <select v-model="selected">
    <option>A</option>
    <option>B</option>
    <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
</div>
<script type="text/javascript">
    var app=new Vue({
        el:'#demo',
        data:{
                selected: null
        }
    });
</script>
```
### v-model 修饰符
+ .lazy 
在默认情况下， v-model 在 input 事件中同步输入框的值与数据 ，但可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：
```html
<!-- 在 "change" 而不是 "input" 事件中更新 -->
<input v-model.lazy="msg" >
```
+ .number
如果想自动将用户的输入值转为 Number 类型，可以添加一个修饰符 number 给 v-model 来处理输入值：
```html
<input v-model.number="age" type="text">
```
+ .trim 
如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入： 
```html
<input v-model.trim="msg">
```

### v-on指令 
绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。
在监听原生 DOM 事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个 $event **属性： **v-on:click="handle('ok', $event)"。
+ v-on执行简单的表达式
```html
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
<script>
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
</script>
```
+ v-on执行函数 
```html
<div id="example-1">
  <button v-on:click="add">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
<script>
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  },
  methods:{
      add(){
          this.counter ++ ;
      }
  }
})
</script>
```
+ v-on简写 @
```html
<button @click="alert(1)"></button>
```
+ 常用事件函数
用v-on 给每个按钮分别添加不同的事件，来向数组追加元素。
```html
<div id="box">
    <input type="button" value="按钮1click" v-on:click='add()' />
    <input type="button" value="按钮2mouseover" v-on:mouseover='add()' />
    <input type="button" value="按钮3mouseout" v-on:mouseout='add()' />
    <input type="button" value="按钮4mousedown" v-on:mousedown='add()' />
    <input type="button" value="按钮5mouseup" v-on:mouseup='add()' />
    <input type="button" value="按钮6dblclick" v-on:dblclick='add()' />
    <hr />
    <ul>
        <li v-for='value in arr'>
            {{value}}
        </li>
    </ul>
</div>
<script type="text/javascript">
    new Vue({
        el: '#box',
        data: {
            arr:['apple','banana','orange','pear']
        },
        methods:{
            add:function(){//方法
                this.arr.push('tomato')
            }
        }
    })
</script>
```
+ 事件对象
有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法：

```html
<div id="box">
    <input type="button" value="按钮" v-on:click="show()"/>
    <input type="button" value="按钮" @click="show($event)"/>
    <input type="button" value="按钮" @click="show($event,12)"/>
</div>
<script type="text/javascript">
    new Vue({
        el: '#box',
        data: {
            
        },
        methods:{
            show:function(ev,b){
                //相对与浏览器可视区域的坐标
                alert(ev.clientX);
                alert(b)
            }
        }
    })
</script>
```

### 事件修饰符 

在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。
常用事件修饰符
+ .stop
阻止事件冒泡 
+ .prevent
阻止默认事件 
+ .capture  实现事件捕获机制
+ .self 使用self实现点击当前元素的时候才触发事件处理函数 可以理解为变相的阻止事件冒泡
+ .once 事件只触发一次
```html
<!-- capture 事件捕获 -->
<div id="app">
        <div class="box" @click.capture="boxEvents">
            <div class="inner" @click="innerEvents">
                里面的内容
            </div>
        </div>
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            data () {
                return {
                    
                }
            },
            methods: {
                boxEvents(){
                    console.log("boxEvents")
                },
                innerEvents(){
                    console.log("innerEvents")
                }
            }
        })
    </script>
```
```html
<!-- self -->
<div id="app">
        <div class="box" @click.self="boxEvents">
            <div class="inner" @click="innerEvents">
                里面的内容
            </div>
        </div>
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            data () {
                return {
                    
                }
            },
            methods: {
                boxEvents(){
                    console.log("boxEvents")
                },
                innerEvents(){
                    console.log("innerEvents")
                }
            }
        })
    </script>
```
```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>
```

+ 按键修饰符 

在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符： 

```html
<div id="box"> 
    <!-- 回车 13 -->
    <input type="text" value="按钮" @keyup.13="show()"/>
    <input type="text" value="按钮" @keyup.enter="show()"/>
    <input type="text" value="按钮" @keyup.up="show()"/>
    <input type="text" value="按钮" @keyup.down="show()"/>
    <input type="text" value="按钮" @keyup.left="show()"/>
    <input type="text" value="按钮" @keyup.right="show()"/>
</div>
<script type="text/javascript">
    new Vue({
        el: '#box',
        data: {
            
        },
        methods:{
            show:function(){
                alert("你按回车了")
            }
        }
    })
</script>
```

### 计算属性
 computed 在`vue中一些数据经常依赖于别的数据做出改变`，且改变的逻辑也较复杂，这个时候就需要用到计算属性computed通俗来说就是当前数据不是确定的，要经常做出改变，而这个改变是其他数据改变导致的。只要在计算属性函数里引用了 data 中的某个属性，当这个属性发生变化时，函数就可以可以嗅探到这个变化，并且执行某些操作。


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./lib/vue.js"></script>
</head>
<body>
    <div id="app">
           <div>
               <button @click="a++">
                    点我a++
               </button>
               <button @click="b++">
                    点我b++
               </button>
           </div>
           <div>
               a + b = {{ total }}
           </div>
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            data(){
                return {
                   a:1,
                   b:2
                }
            },
            computed:{
                total(){
                    return this.a + this.b;
                }
            }
        })
    </script>
</body>
</html>
```
> 计算属性特点
+ 计算属性本质是一个方法 但调用的时候不加括号
+ 计算属性所依赖的数据变化必然会触发计算属性的重新求值
+ 计算属性的值会缓存；

### 侦听器 
使用侦听器 可以监听data中数据的变化 然后触发watch中的函数变化
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./lib/vue.js"></script>
</head>
<body>
    <div id="app">
           <input type="text" v-model="message">
           {{ message }}
           {{ num }}
    </div>
    <script>
        var message = 11
        var vm = new Vue({
            el:"#app",
            watch: {
                // 如果 `question` 发生改变，这个函数就会运行
                message: function (newVal, oldVal) {
                    console.log("newVal" ,newVal )
                    console.log( "oldVal" ,oldVal)
                    this.num ++
                }
            },
            data(){
                return {
                    num : 10,
                    message
                }
            }
        })
    </script>
</body>
</html>

```
### 侦听器与计算属性的不同

1.  计算属性一进入页面 就会执行  侦听器 只有当数据更改的时候才会执行
2.  侦听器监听的数据不能更改 计算属性当依赖的属性更改的时候会自动执行 
3.  计算属性会缓存结果
4.  计算属性必须return一个值 而watch不需要


## Class 与 Style 绑定
操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是属性，所以我们可以用 v-bind 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。

### class绑定
+ 三元运算符 
```html
    <div id="app">
      <div :class=" num <= 10 ? 'on' : 'green'">
        1234
      </div>
    </div>
    <script>
      var vm = new Vue({
        el: "#app",
        data(){
            return {
                num : 9
            }
        }
      });
    </script>
```
+ 对象语法
  - 绑定单个class
```html
<!-- 下面表示 active 这个 class 存在与否将取决于数据属性 -->
<div v-bind:class="{ active: isActive }"></div>
```
  - 绑定多个class
```html
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```
+ 数组语法 
可以把一个数组传给 v-bind:class，以应用一个 class 列表：
```html
<div v-bind:class="[activeClass, errorClass]"></div>
<script>
var vm = new Vue({
    el: "#app",
    data(){
        return {
            activeClass: 'active',
            errorClass: 'text-danger'
        }
    }
});
</script>
```

### 内联样式绑定 
v-bind:style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名：
+ 对象语法
```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
<div v-bind:style="styleObject"></div>
<script>
var vm = new Vue({
    el: "#app",
    data(){
        return {
            activeColor: 'red',
            fontSize: 30,
            styleObject: {
                color: 'red',
                fontSize: '13px'
            }
        }
    }
});
</script>
```
+ 数组语法
```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
<script>
    let vm = new Vue({
        el: '#app',
        data: {
            baseStyles: {
                color: 'green',
                fontSize: '30px'
            },
            overridingStyles: {
                'font-weight': 'bold'
            }
        }
    });
</script>
```

