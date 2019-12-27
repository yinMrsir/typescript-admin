import Mock from 'mockjs';

export default {
  simple() {
    const list = [];
    for (let i = 0; i < 10; i++) {
      list.push(Mock.mock({
        name: '@cname',
        date: Mock.Random.date(),
        address: Mock.Random.county(true),
      }));
    }
    return {
      code: 200,
      data: {
        list,
      },
    };
  },
};
