<template>
  <div class="relative">
    <div class="rc-design-component-config-preview--wechat" @click.stop.prevent="setIsEdit()">
      <div class="rc-design-component-config-preview__title">{{title}}</div>
    </div>
    <div class="zent-design-editor-item" v-show="isEdit">
      <el-form label-width="90px">
        <el-form-item label="页面名称：">
          <el-input size="small" v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="背景颜色：">
          <el-radio-group v-model="backgroundStatus">
            <el-radio label="1">默认背景色</el-radio>
            <el-radio label="2">自定义背景色</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="+backgroundStatus === 2">
          <div class="reset-bg">
            <el-color-picker v-model="currBgColor"></el-color-picker>
            <el-button size="small" @click="resetBgColor">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Mixins, Watch, Prop} from 'vue-property-decorator';
  import designMixin from '@/mixins/app/designMixin';

  @Component
  export default class DesignTitle extends Mixins(designMixin) {
    @Prop({default: ''}) private background!: string;
    private title: string = '店铺主页';
    private backgroundStatus: string = '1';
    public isEdit: boolean = true;
    private currBgColor: string = this.background;
    private defaultBgColor: string = '';

    @Watch('currBgColor')
    private currBgColorWatch(newValue: string, oldValue: string) {
      if (this.defaultBgColor === '') {
        this.defaultBgColor = oldValue;
      }
      (this.$parent as any).background = newValue;
    }

    // 重置背景颜色到之前保存的
    private resetBgColor() {
      this.currBgColor = this.defaultBgColor;
      (this.$parent as any).background = this.defaultBgColor;
    }
  }
</script>

<style lang="scss" scoped>
  .rc-design-component-config-preview--wechat {
    background-image: url('../../../../assets/app/design-box-top.png');

    .rc-design-component-config-preview__title {
      display: inline-block;
      padding: 23px 60px 0;
      height: 40px;
      line-height: 40px;
      width: 200px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-weight: 700;
      font-size: 16px;
      text-align: center;
      vertical-align: middle;
      color: #fff;
    }
  }

  .reset-bg {
    display: flex;
    align-items: center;
  }
</style>

<style>
  .el-color-picker__trigger {
    width: 50px;
    height: 30px;
    margin-right: 10px;
  }

  .el-color-picker {
    height: 30px;
  }
</style>
