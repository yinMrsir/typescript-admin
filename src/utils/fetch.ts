// 引入axios
import axios from 'axios';
import {Message} from 'element-ui';
import {UserModule} from '@/store/modules/user';

// 创建axios实例
const httpService = axios.create({
  // url前缀-'https://some-domain.com/api/'
  baseURL: process.env.VUE_APP_BASE_API, // 需自定义
  // 请求超时时间
  timeout: 3000, // 需自定义
  headers: {'Content-Type': 'application/json'},
});

// request拦截器
httpService.interceptors.request.use(
  (config: any) => {
    // 让每个请求携带token
    if (UserModule.token) {
      config.headers.Authorization = UserModule.token;
    }
    return config;
  },
  (error) => {
    // 请求错误处理
    Promise.reject(error);
  },
);

// respone拦截器
httpService.interceptors.response.use(
  (response) => {
    // 统一处理状态
    const res = response.data;
    if (+res.code !== 200) { // 需自定义
      if (+res.code === 511) {
        Message({
          message: res.message,
          type: 'error',
          duration: 5 * 1000,
        });
      }
      // 返回异常
      return Promise.reject({
        status: res.code,
        message: res.message,
      });
    } else {
      return response.data;
    }
  },
  // 处理处理
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求';
          break;
        case 401:
          error.message = '未授权，请重新登录';
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        case 404:
          error.message = '请求错误,未找到该资源';
          break;
        case 405:
          error.message = '请求方法未允许';
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器端出错';
          break;
        case 501:
          error.message = '网络未实现';
          break;
        case 502:
          error.message = '网络错误';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '网络超时';
          break;
        case 505:
          error.message = 'http版本不支持该请求';
          break;
        default:
          error.message = `未知错误${error.response.status}`;
      }
    } else {
      error.message = '连接到服务器失败';
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

/*网络请求部分*/

/*
 *  get请求
 *  url:请求地址
 *  params:参数
 * */
export function get(url: string | undefined, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url,
      method: 'get',
      params,
    }).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function post(url: string | undefined, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url,
      method: 'post',
      data: params,
    }).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
}

/*
 *  文件上传
 *  url:请求地址
 *  params:参数
 * */
export function fileUpload(url: string | undefined, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url,
      method: 'post',
      data: params,
      headers: {'Content-Type': 'multipart/form-data'},
    }).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
}

export default {
  get,
  post,
  fileUpload,
};
