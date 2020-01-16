import Mock from 'mockjs';
import {getRequest} from '@/utils';

export default {
  message(params: { url: string }) {
    const list = [];
    const type = getRequest(params.url, 'type');
    const cnType = type === 'all' ? '全部消息' : type === 'inform' ? '通知' : '私信';
    for (let i = 0; i < 10; i++) {
      list.push(Mock.mock({
        date: Mock.Random.date(),
        title: `${Mock.Random.ctitle(10, 40)}(${cnType})`,
      }));
    }
    return {
      code: 200,
      data: {
        list,
      },
    };
  },
  contentList() {
    const list = [];
    for (let i = 0; i < 10; i++) {
      list.push(Mock.mock({
        'id': Mock.Random.id(),
        'tag|1-5': 1,
        'name': '@cname',
        'date': Mock.Random.date(),
        'title': Mock.Random.ctitle(15, 30),
        'content': Mock.Random.cparagraph(),
        'state|0-1': 1,
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
