import fetch from '@/utils/fetch';

const simple = (params?: {}) => fetch.get('/table/simple', params);

export default {
  simple,
};
