<!--
<template>
  <div>
    <h1 v-if="level === 1" :class="$style.title1">
      <slot></slot>
    </h1>
    <h2 v-if="level === 2" :class="$style.title2">
      <slot></slot>
    </h2>
    <h3 v-if="level === 3" :class="$style.title3">
      <slot></slot>
    </h3>
    <h4 v-if="level === 4" :class="$style.title4">
      <slot></slot>
    </h4>
    <h5 v-if="level === 5" :class="$style.title5">
      <slot></slot>
    </h5>
  </div>
</template>
-->

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  interface Style {
    [propName: string]: string;
  }

  @Component({
    name: 'HTitle',
  })
  export default class extends Vue {
    @Prop({default: 1}) private level!: number;
    private $style!: Style;

    private render(createElement: Vue.CreateElement) {
      return createElement(
        'h' + this.level,
        {
          class: this.$style['title' + this.level],
        },
        this.$slots.default,
      );
    }
  }
</script>

<style lang="scss" module>
  .title1 {
    color: red;
  }

  .title2 {
    color: yellow;
  }

  .title3 {
    color: orange;
  }

  .title4 {
    color: blue;
  }

  .title5 {
    color: green;
  }
</style>
