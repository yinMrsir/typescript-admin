<template>
  <div :class="isEdit ? 'relative zent-design-preview-controller active' : 'relative zent-design-preview-controller'">
    <div @click.stop.prevent="setIsEdit()">
      <van-swipe :autoplay="autoplay * 1000" :loop="loop" :showIndicators="showIndicators" :vertical="vertical"
                 :indicatorColor="indicatorColor">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img :src="item.img" style="width: 100%; display: block;"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="zent-design-editor-item" v-show="isEdit">
      <div class="design-edit-title">图片广告</div>
      <el-form label-width="90px">
        <el-form-item label="选择模板">
          <div style="padding-top: 15px;">
            <div class="rc-design-select-templates active">
              <div class="rc-design-select-templates__image-block">
                <img src="../../../../assets/app/swiper-two.png">
                <div class="rc-design-select-templates__title">轮播海报</div>
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="轮播间隔">
          <el-slider v-model="autoplay" :max="10" :min="1"></el-slider>
        </el-form-item>
        <el-form-item label="循环播放">
          <el-switch v-model="loop"></el-switch>
        </el-form-item>
        <el-form-item label="显示指示器">
          <el-switch v-model="showIndicators"></el-switch>
        </el-form-item>
        <el-form-item label="指示器颜色">
          <el-color-picker v-model="indicatorColor"></el-color-picker>
        </el-form-item>
        <el-form-item label="图片地址">
          <el-input v-for="(item, index) in images" v-model="item.img" style="margin-bottom: 10px;" :key="index"></el-input>
          <el-button type="primary" @click="addImage">添加图片</el-button>
          <el-button @click="removeImage">移除最后一项</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="zent-design-preview-controller__action-btn-delete" @click.stop.prevent="removeComponent">
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
    private images: Array<{ img: string }> = [
      {
        img: 'https://img.yzcdn.cn/upload_files/2018/12/28/FirWRcdRefLlafwLz-YM3bdm7DZW.jpg',
      },
      {
        img: 'https://img.yzcdn.cn/upload_files/2018/12/28/FirWRcdRefLlafwLz-YM3bdm7DZW.jpg',
      },
    ];
    private autoplay: number = 3;
    private loop: boolean = true;
    private showIndicators: boolean = true;
    private vertical: boolean = false;
    private indicatorColor: string = '';

    private removeImage() {
      this.images.splice(this.images.length - 1, 1);
    }

    private addImage() {
      this.images.push({img: ''});
    }
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

<style>
  .el-form-item__label {
    font-size: 12px;
  }
</style>
