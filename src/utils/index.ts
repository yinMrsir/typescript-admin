export const getRequest = (url: string, name: string) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  const r = url.substr(url.indexOf('?') + 1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};


// 深拷贝
export const extend = (data: { [x: string]: any; length: any; }) => {
  if (typeof data === 'object' && data) {
    const val: any = typeof data.length === 'number' ? [] : {};
    Object.keys(data).forEach((key) => {
      val[key] = extend(data[key]);
    });
    return val;
  } else {
    return data;
  }
};

export default {
  getRequest,
  extend,
};

