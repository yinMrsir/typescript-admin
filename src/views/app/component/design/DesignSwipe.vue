<template>
  <div :class="isEdit ? 'relative zent-design-preview-controller active' : 'relative zent-design-preview-controller'">
    <div @click="setIsEdit">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" style="width: 100%; display: block;"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="zent-design-editor-item" v-show="isEdit">
      <el-form label-width="90px">
        <el-form-item label="选择模板：">
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
