<template>
  <div :class="isEdit ? 'relative zent-design-preview-controller active' : 'relative zent-design-preview-controller'">
    <div @click.stop.prevent="setIsEdit()" class="design-commodity">
      <ul>
        <li v-for="(item, index) in commoditys" :key="index">
          <img :src="item.img || require('../../../../assets/app/grad.png')" alt="">
          <h2>{{item.name}}</h2>
          <div class="design-commodity-item">
            <div class="price">¥ <span>{{item.pr}}</span></div>
            <i class="van-icon van-icon-cart-circle-o"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="zent-design-editor-item" v-show="isEdit" style="width: 600px;">
      <div class="design-edit-title">商品</div>
      <el-form label-width="90px">
        <el-form-item label="图片地址">
          <div style="margin-bottom: 20px;">
            <el-row :gutter="10" v-for="(item, index) in commoditys" :key="index">
              <el-col :span="12">
                <el-input v-model="item.img" placeholder="图片地址"></el-input>
              </el-col>
              <el-col :span="7">
                <el-input v-model="item.name" placeholder="商品名称"></el-input>
              </el-col>
              <el-col :span="4">
                <el-input v-model="item.pr" placeholder="价格"></el-input>
              </el-col>
            </el-row>
          </div>
          <el-button type="primary" @click="addImage">添加一组</el-button>
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
  import DesignMixin from '@/mixins/app/designMixin';

  @Component
  export default class DesignCommodity extends Mixins(DesignMixin) {
    private commoditys: any[] = this.itemData.data.commoditys;

    private removeImage() {
      this.commoditys.splice(this.commoditys.length - 1, 1);
    }

    private addImage() {
      this.commoditys.push({img: ''});
    }
  }
</script>

<style lang="scss">
  .design-commodity {
    ul {
      padding: 4%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        width: 48%;
        box-sizing: border-box;
        border: #eeeeee solid 1px;
        background: #fff;
        margin-bottom: 10px;

        h2 {
          font-size: 14px;
          font-weight: normal;
          padding: 10px 5px;
        }

        img {
          display: block;
          width: 100%;
        }

        .design-commodity-item {
          display: flex;
          justify-content: space-between;
          color: #FF4444;
          font-size: 18px;
          padding: 0 10px 10px;
          align-items: center;

          .price {
            font-size: 12px;

            span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
</style>
