import {DirectiveOptions} from 'vue';

export const color: DirectiveOptions = {
  inserted(el, binding) {
    el.style.color = binding.value;
  },
};
