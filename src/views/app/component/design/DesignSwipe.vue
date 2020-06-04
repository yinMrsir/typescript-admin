<template>
  <div :class="isEdit ? 'relative zent-design-preview-controller active' : 'relative zent-design-preview-controller'">
    <div @click.stop.prevent="setIsEdit()">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" style="width: 100%; display: block;"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="zent-design-editor-item" v-show="isEdit">
      <div class="design-edit-title">图片广告</div>
      <el-form label-width="90px" style="">
        <el-form-item label="选择模板：">
          <div style="padding-top: 15px;">
            <div class="rc-design-select-templates">
              <div class="rc-design-select-templates__image-block">
                <img src="../../../../assets/app/swiper-one.png">
                <div class="rc-design-select-templates__title">轮播海报</div>
              </div>
            </div>
            <div class="rc-design-select-templates active">
              <div class="rc-design-select-templates__image-block">
                <img src="../../../../assets/app/swiper-two.png">
                <div class="rc-design-select-templates__title">轮播海报</div>
              </div>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="zent-design-preview-controller__action-btn-delete">
      <i class="el-icon-close"></i>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Mixins} from 'vue-property-decorator';
  import {Swipe, SwipeItem} from 'vant';
  import designMixin from '@/mixins/app/designMixin';

  @Component({
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
  })
  export default class DesignSwipe extends Mixins(designMixin) {
    private images = [
      'https://img.yzcdn.cn/upload_files/2018/12/28/FirWRcdRefLlafwLz-YM3bdm7DZW.jpg',
      'https://img.yzcdn.cn/upload_files/2018/12/28/Fo-u2RjwqysPf7HkknkwMGdf50hu.jpg',
    ];
  }
</script>

<style scoped lang="scss">
  .rc-design-select-templates {
    width: 100px;
    height: 100px;
    display: inline-block;
    border: 1px solid #e5e5e5;
    margin: 0 10px 15px 0;
    padding-top: 5px;
    background-color: #fff;
    text-align: center;
    cursor: pointer;

    &.active {
      border-color: #38f;
    }

    img {
      width: 90px;
      height: 64px;
      max-width: 100%;
      vertical-align: middle;
      border: 0;
      -ms-interpolation-mode: bicubic;
      position: relative;
    }

    .rc-design-select-templates .rc-design-select-templates__image-block {
      width: 100px;
      height: 64px;
    }
  }
</style>
