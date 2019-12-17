### 安装axios  `cnpm install axios --save `

### 使用axios 使用之前 必须引入需要的依赖  `import axios from "axios"`

### axios 请求类型

+ get请求 `axios.get(url[, config])`
    - 不带参数的写法 `axios.get("http://59.110.138.169/api/douban/movie/in_theaters")` 在get后面加上请求地址就可以

    - 带参数的写法 axios.get("http://59.110.138.169/api/douban/movie/in_theaters",{params:{start:2,limit:5}})
    
    参数写在请求地址后面  后面的参数是个对象 所需要传递给后端的参数写在 对象里面的params里面

    - 传递参数的简化写法  axios.get(`http://59.110.138.169/api/douban/movie/in_theaters?start=${2}&limit=${10}`) 第三种写法相当于第二种写法  也推荐第三种写法

+ post请求  

    - 第一种 post请求不附带参数 axios.post(`http://59.110.138.169/api/test/user/fileList`)

    - 第二种 post请求附带参数 需要把发送给后端的参数转换一下后端才能接收到 qs.stringify 转换传递的参数 

    axios.post(`http://59.110.138.169/api/test/user/fileList`,qs.stringify({start:2,limit:5}))

### 什么时候加qs  具体情况需要问后端  


### axios.defaults.baseURL = "http://59.110.138.169"; // 解决生产和开发的时候的服务器地址不一样的问题
 开发的时候访问的数据是开发时的数据库(测试数据库) 而生产的时候访问的数据是生产的数据库(线上的数据库)；开发时访问的服务器地址和访问的服务器地址不一样 所以ajax请求的地址不一样

### axios 拦截器 

+ 请求拦截器 axios.interceptors.request   能做的事情 比如开启loading等待  post请求需要用qs转换一下 都可以在请求拦截器里面执行操作  

```html
<script>
    axios.interceptors.request.use(function (config) {
        // 在发起请求请做一些业务处理  
        // 如开启loading  对请求的参数做处理 添加token等
        // 例  在请求的时候开启elementui的loading
    loadings = Loading.service({ fullscreen: true });
    if(config.method == "post"){
        config.data = qs.stringify(config.data);
    }
    
    console.log(config)
        return config;
    }, function (error) {
        // 对请求失败做处理
        return Promise.reject(error);
    });
</script>
```

+ 响应拦截器  axios.interceptors.response   能做的事情 比如关闭loading等待 对返回的数据执行过滤操作

```html
<script>
axios.interceptors.response.use(function (config) {
    // 在请求之后做处理 如关闭loading
  loadings.close();
  // 对返回过来的数据进行过滤操作
    return config.data;
}, function (error) {
    // 对请求失败做处理
    loadings.close();
    return Promise.reject(error);
});
</script>
```

