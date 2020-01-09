import fetch from '@/utils/fetch';

const getRouters = (params?: {}) => fetch.get('/getRouters', params);

export default {
  getRouters,
};
