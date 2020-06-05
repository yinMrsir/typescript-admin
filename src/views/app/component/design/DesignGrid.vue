<template>
  <div :class="isEdit ? 'relative zent-design-preview-controller active' : 'relative zent-design-preview-controller'">
    <div @click.stop.prevent="setIsEdit()" class="design-grid">
      <van-grid :gutter="gutter" :column-num="columnNum">
        <van-grid-item v-for="(item, index) in images" :key="index">
          <van-image :src="item.img || require('../../../../assets/app/grad.png')"></van-image>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="zent-design-editor-item" v-show="isEdit">
      <div class="design-edit-title">宫格</div>
      <el-form label-width="90px">
        <el-form-item label="格子间距">
          <el-slider v-model="gutter" :min="0" :max="20"></el-slider>
        </el-form-item>
        <el-form-item label="列数">
          <el-slider v-model="columnNum" :min="1" :max="4"></el-slider>
        </el-form-item>
        <el-form-item label="图片地址">
          <el-input v-for="(item, index) in images" v-model="item.img" style="margin-bottom: 10px;"
                    :key="index"></el-input>
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
  import {Vue, Component, Mixins, Prop} from 'vue-property-decorator';
  import DesignMixin from '@/mixins/app/designMixin';
  import {Grid, GridItem, Image} from 'vant';

  @Component({
    components: {
      [Grid.name]: Grid,
      [GridItem.name]: GridItem,
      [Image.name]: Image,
    },
  })
  export default class DesignGrid extends Mixins(DesignMixin) {
    private gutter: number = 0;
    private columnNum: number = this.itemData.data.columnNum || 4;
    private images: any[] = this.itemData.data.images;

    private removeImage() {
      this.images.splice(this.images.length - 1, 1);
    }

    private addImage() {
      this.images.push({img: ''});
    }
  }
</script>

<style>
  .design-grid .van-grid-item__content {
    padding: 0;
  }
</style>
