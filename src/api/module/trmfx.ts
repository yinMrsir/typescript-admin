import fetch from '@/utils/fetch';

const getTaskFxQueryPages = (params: object) => fetch.get('/pc/trmfx/getTaskFxQueryPages', params);

export default {
  getTaskFxQueryPages,
};
