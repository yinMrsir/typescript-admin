<template>
  <div class="relative zent-design-preview-controller">
    <van-search placeholder="请输入搜索关键词" />
    <div class="zent-design-editor-item" v-show="isEdit">
      <el-form label-width="90px">
        <el-form-item label="搜索样式：">
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
  }
</script>
