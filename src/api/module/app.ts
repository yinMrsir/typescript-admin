import fetch from '@/utils/fetch';

const message = (params?: {}) => fetch.get('/app/message', params);

export default {
  message,
};
