import axios from "axios";
import { Loading } from 'element-ui';
 axios.defaults.withCredentials = true; //配置为true
// axios.create({
//     // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
//     withCredentials: true
    
//   })
import qs from "qs";
axios.defaults.timeout = 5000;
axios.defaults.baseURL = "http://59.110.138.169" // 比如开发时的服务器地址和生产时的服务器地址 
var loadings ; // 保存开启的弹窗 
// 请求拦截器 实现loading弹窗  转换post请求

axios.interceptors.request.use(function (config) {
    // 在发起请求请做一些业务处理  
    // 如开启loading  对请求的参数做处理 添加token等
    // 例  在请求的时候开启elementui的loading
loadings = Loading.service();
// if(config.method == "post"){
//     config.data = qs.stringify(config.data);
// }

    return config;
}, function (error) {
    // 对请求失败做处理
    return Promise.reject(error);
});

// 响应拦截器  关闭弹窗 对返回的数据进行过滤
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

export default axios;