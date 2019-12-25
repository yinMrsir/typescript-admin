import fetch from '@/utils/fetch';

const login = (params: {} | undefined) => fetch.post('/login', params);

export default {
  login,
};
