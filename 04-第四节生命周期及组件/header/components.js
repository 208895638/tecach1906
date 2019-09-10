
var str = `
<div class="box">
    <img src="./bd_logo.png" alt="">
    <ul>
        <li :class="{border:classname == 'index'}">
            <a href="./index.html">首页</a>
        </li>
        <li :class="{border:classname == 'home'}">
            <a href="./home.html">home页</a>
        </li>
        <li :class="{border:classname == 'user'}">
            <a href="./user.html">user页面</a>
        </li>
    </ul>
</div>`
Vue.component("headers",{
    template:str,
    props: ["classname"]
})