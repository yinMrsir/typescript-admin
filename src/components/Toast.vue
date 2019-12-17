<template>
  <div class="toast" v-if="isShow">{{message}}</div>
</template>

<script lang="ts">
  import {Vue, Prop, Component, Watch} from 'vue-property-decorator';

  @Component
  export default class Toast extends Vue {
    @Prop({default: ''}) private message!: string;
    @Prop({default: 1500}) private time !: number;
    private isShow: boolean = false;

    @Watch('isShow')
    private onChangeValue(newVal: boolean) {
      if (newVal) {
        setTimeout(() => {
          this.isShow = false;
        }, this.time);
      }
    }

    public showToast() {
      this.isShow = true;
    }
  }
</script>

<style lang="scss">
  .toast {
    position: fixed;
    padding: 5px 20px;
    background: rgba(0, 0, 0, 0.6);
    left: 50%;
    top: 50%;
    transition: translate(-50%, -50%);
    line-height: 2;
    color: #fff;
    border-radius: 5px;
  }
</style>
