import fetch from '@/utils/fetch';

const message = (params?: {}) => fetch.get('/app/message', params);
const contentList = (params?: {}) => fetch.get('/app/contentList', params);

export default {
  message,
  contentList,
};
