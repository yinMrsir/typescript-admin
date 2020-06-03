<template>
  <div class="relative">
    <div class="rc-design-component-config-preview--wechat" @click="setIsEdit">
      <div class="rc-design-component-config-preview__title">{{title}}</div>
    </div>
    <div class="zent-design-editor-item" v-show="isEdit">
      <el-form label-width="90px">
        <el-form-item label="页面名称：">
          <el-input size="small" v-model="title"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Mixins} from 'vue-property-decorator';
  import designMixin from '@/mixins/app/designMixin';

  @Component
  export default class DesignTitle extends Mixins(designMixin) {
    private title: string = '店铺主页';
    public isEdit: boolean = true;
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
</style>
