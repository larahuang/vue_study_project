import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 6000,
});

// 請求攔截
axiosApi.interceptors.request.use(
  (config) => {
    startLoading();
    return config;
  },
  (err) => {
    endLoading();
    return Promise.reject(err);
  }
);

// 回應攔截
axiosApi.interceptors.response.use(
  (response) => {
    endLoading();
    return response;
  },
  (err) => {
    endLoading();
    return Promise.reject(err);
  }
);

// ===== 常用方法封裝 =====
const Get = async (url, params = {}, option = {}) => {
  try {
    const res = await axiosApi.get(url, { params, ...option });
    return res.data.success
      ? [true, res.data.data, res.data.message]
      : [false, res.data.data, res.data.message];
  } catch (err) {
    console.error(err);
    return [false, err];
  }
};

const Post = async (url, params = {}, option = {}) => {
  try {
    const res = await axiosApi.post(url, params, { ...option });
    return res.data.success
      ? [true, res.data.data, res.data.message]
      : [false, res.data.data, res.data.message];
  } catch (err) {
    console.error(err);
    return [false, err];
  }
};

const Put = async (url, params = {}, option = {}) => {
  try {
    const res = await axiosApi.put(url, params, { ...option });
    return res.data.success
      ? [true, res.data.data, res.data.message]
      : [false, res.data.data, res.data.message];
  } catch (err) {
    console.error(err);
    return [false, err];
  }
};

const Delete = async (url, params = {}, option = {}) => {
  try {
    const res = await axiosApi.delete(url, { data: params, ...option });
    return res.data.success
      ? [true, res.data.data, res.data.message]
      : [false, res.data.data, res.data.message];
  } catch (err) {
    console.error(err);
    return [false, err];
  }
};

// ===== 從 Content-Disposition 取出檔案名稱 =====

export { Get, Post, Put, Delete };