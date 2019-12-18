import toastComponent from '../components/Toast.vue';

let $vm: { $el: HTMLElement; message: string; time: number; showToast: () => void; };

export default {
  install(Vue: any) {
    if (!$vm) {
      const toastPlugin = Vue.extend(toastComponent);
      $vm = new toastPlugin({
        el: document.createElement('div'),
      });
      document.body.appendChild($vm.$el);
    }

    const toast = {
      show(options: { message: string; time: number; }): void {
        $vm.message = options.message;
        $vm.time = options.time || 1500;
        $vm.showToast();
      },
    };

    if (!Vue.$toast) {
      Vue.$toast = toast;
    }

    Vue.mixin({
      created() {
        this.$toast = Vue.$toast;
      },
    });
  },
};
