<template>
  <div :class="isEdit ? 'relative zent-design-preview-controller active' : 'relative zent-design-preview-controller'">
    <div @click.stop.prevent="setIsEdit()">
      <van-search placeholder="请输入搜索关键词"/>
    </div>
    <div class="zent-design-editor-item" v-show="isEdit">
      <div class="design-edit-title">搜索框</div>
      <el-form label-width="90px">
        <el-form-item label="框体样式：">
          <el-radio-group v-model="radioType">
            <el-radio label="1">方形</el-radio>
            <el-radio label="2">圆形</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="框体高度：">
          <el-slider v-model="searchHeight"></el-slider>
        </el-form-item>
      </el-form>
    </div>
    <div class="zent-design-preview-controller__action-btn-delete">
      <i class="el-icon-close"></i>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Mixins} from 'vue-property-decorator';
  import designMixin from '@/mixins/app/designMixin';
  import {Search} from 'vant';

  @Component({
    components: {
      [Search.name]: Search,
    },
  })
  export default class DesignSearch extends Mixins(designMixin) {
    private radioType: string = '1';
    private searchHeight: number = 40;
  }
</script>
