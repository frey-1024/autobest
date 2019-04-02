import { objMerge, isEmptyObject, isUndef } from './string';
// 接口基本链接
const path = process.env.ApiServiceUrl;

function handleFetch(url, options) {
  return fetch(path + url, options).then(res => res.json());
}

/**
 * 合并剩余参数
 * @param url
 * @param params
 * @returns {*}
 */
function jointUrl(url, params) {
  let joinStr = '?';
  Object.keys(params).forEach(key => {
    url += `${joinStr}${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    joinStr = '&';
  });
  return url;
}

/**
 * 当有请求参数时，把参数合并到URL上， 这里提供了url带参数的写法
 * 如：/user/:id/info -> /user/xxx/info
 * @param url
 * @param params
 * @returns {*}
 */
function handleUrl(url, params = {}) {
  if (isEmptyObject(params)) {
    return url;
  }
  // 匹配url中带参数的情况，并删除已匹配的param
  const matchUrlArgs = url.match(/:([^\/]*)/g);
  if (matchUrlArgs && matchUrlArgs.length) {
    const copyParams = { ...params };
    let key, param;
    matchUrlArgs.forEach(arg => {
      key = arg.substr(1);
      param = copyParams[key];
      if (!isUndef(param)) {
        url = url.replace(arg, encodeURIComponent(param));
        delete copyParams[key];
      }
    });
    url = jointUrl(url, copyParams);
    return url;
  }
  url = jointUrl(url, params);
  return url;
}

/**
 * 处理await 写法
 * @param url
 * @param options
 */
function intercept(url, options) {
  return handleFetch(url, options)
    .then(data => {
      console.log(data);
      // if (data.code === 0) {
      //   return data.data;
      // }
      return data;
    })
    .catch(e => {
      throw Error(e.message || '接口请求错误。');
    });
}
function getFetchOpts(options) {
  // 合并请求配置
  return objMerge(
    {
      cache: 'no-store', // 解决IE11下缓存问题
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json',
        'If-Modified-Since': '0' // 解决IE11下缓存问题
      },
      mode: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer'
    },
    options,
    true
  );
}
export default function ajax(url, options = {}) {
  const initOptions = getFetchOpts(options);
  return {
    /**
     * 获取接口
     * @param params
     */
    get(params) {
      return intercept(handleUrl(url, params), { ...initOptions, method: 'get' });
    },
    /**
     * post 接口
     * @param data
     * @param params
     */
    post(data, params) {
      return intercept(handleUrl(url, params), {
        ...initOptions,
        method: 'post',
        body: JSON.stringify(data)
      });
    },
    /**
     * 删除方法
     * @param params
     */
    delete(params) {
      return intercept(handleUrl(url, params), { ...initOptions, method: 'delete' });
    },
    /**
     * 修改方法
     * @param data
     * @param params
     */
    put(data, params) {
      return intercept(handleUrl(url, params), {
        ...initOptions,
        method: 'put',
        body: JSON.stringify(data)
      });
    }
  };
}
