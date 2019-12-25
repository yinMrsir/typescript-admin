import Vue, {DirectiveOptions} from 'vue';

import 'normalize.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss';

import App from './App.vue';
import router from './router';
import store from './store';
import './permission';
// 模拟接口
import './mock';
// 自定义插件
import ToastPlugins from './plugins/toastPlugins';
// filters
import * as filters from '@/filters';
// directives
import * as directives from '@/directives';

Vue.use(ElementUI);
Vue.use(ToastPlugins);

Object.keys(filters).forEach((key) => {
  // tslint:disable-next-line:ban-types
  Vue.filter(key, (filters as { [key: string]: Function })[key]);
});

Object.keys(directives).forEach((key) => {
  Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key]);
});

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
