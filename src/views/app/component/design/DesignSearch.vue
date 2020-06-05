<template>
  <div :class="isEdit ? 'relative zent-design-preview-controller active' : 'relative zent-design-preview-controller'">
    <div @click.stop.prevent="setIsEdit()">
      <van-search placeholder="请输入搜索关键词" :shape="shape" :background="background" :placeholder="placeholder" />
    </div>
    <div class="zent-design-editor-item" v-show="isEdit">
      <div class="design-edit-title">搜索框</div>
      <el-form label-width="90px">
        <el-form-item label="框体样式">
          <el-radio-group v-model="shape">
            <el-radio label="square">方形</el-radio>
            <el-radio label="round">圆形</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="外部背景色">
          <el-color-picker v-model="background"></el-color-picker>
        </el-form-item>
        <el-form-item label="最大字符数">
          <el-slider v-model="maxlength"></el-slider>
        </el-form-item>
        <el-form-item label="占位提示文字">
          <el-input v-model="placeholder" size="small"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="zent-design-preview-controller__action-btn-delete" @click.stop.prevent="removeComponent">
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
    private shape: string = 'square';
    private background: string = '';
    private maxlength: number = 10;
    private placeholder: string = '请输入搜索关键词';
  }
</script>
