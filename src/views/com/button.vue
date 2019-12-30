<template>
  <div class="main-box">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card class="box-card margin-bottom-20">
          <div slot="header" class="clearfix">
            <span>基础用法</span>
          </div>
          <div>
            <el-row class="margin-bottom-20">
              <el-button>默认按钮</el-button>
              <el-button type="primary">主要按钮</el-button>
              <el-button type="success">成功按钮</el-button>
              <el-button type="info">信息按钮</el-button>
              <el-button type="warning">警告按钮</el-button>
              <el-button type="danger">危险按钮</el-button>
            </el-row>

            <el-row class="margin-bottom-20">
              <el-button plain>朴素按钮</el-button>
              <el-button type="primary" plain>主要按钮</el-button>
              <el-button type="success" plain>成功按钮</el-button>
              <el-button type="info" plain>信息按钮</el-button>
              <el-button type="warning" plain>警告按钮</el-button>
              <el-button type="danger" plain>危险按钮</el-button>
            </el-row>

            <el-row class="margin-bottom-20">
              <el-button round>圆角按钮</el-button>
              <el-button type="primary" round>主要按钮</el-button>
              <el-button type="success" round>成功按钮</el-button>
              <el-button type="info" round>信息按钮</el-button>
              <el-button type="warning" round>警告按钮</el-button>
              <el-button type="danger" round>危险按钮</el-button>
            </el-row>

            <el-row class="margin-bottom-20">
              <el-button icon="el-icon-search" circle></el-button>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="success" icon="el-icon-check" circle></el-button>
              <el-button type="info" icon="el-icon-message" circle></el-button>
              <el-button type="warning" icon="el-icon-star-off" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-row>
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>不同尺寸</span>
          </div>
          <div>
            <el-row class="margin-bottom-20">
              <el-button>默认按钮</el-button>
              <el-button size="medium">中等按钮</el-button>
              <el-button size="small">小型按钮</el-button>
              <el-button size="mini">超小按钮</el-button>
            </el-row>
            <el-row class="margin-bottom-20">
              <el-button round>默认按钮</el-button>
              <el-button size="medium" round>中等按钮</el-button>
              <el-button size="small" round>小型按钮</el-button>
              <el-button size="mini" round>超小按钮</el-button>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>禁用状态</span>
          </div>
          <div>
            <el-row class="margin-bottom-20">
              <el-button disabled>默认按钮</el-button>
              <el-button type="primary" disabled>主要按钮</el-button>
              <el-button type="success" disabled>成功按钮</el-button>
              <el-button type="info" disabled>信息按钮</el-button>
              <el-button type="warning" disabled>警告按钮</el-button>
              <el-button type="danger" disabled>危险按钮</el-button>
            </el-row>

            <el-row class="margin-bottom-20">
              <el-button plain disabled>朴素按钮</el-button>
              <el-button type="primary" plain disabled>主要按钮</el-button>
              <el-button type="success" plain disabled>成功按钮</el-button>
              <el-button type="info" plain disabled>信息按钮</el-button>
              <el-button type="warning" plain disabled>警告按钮</el-button>
              <el-button type="danger" plain disabled>危险按钮</el-button>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component({
    name: 'Button',
  })
  export default class extends Vue {
  }
</script>

<style lang="scss">
  .margin-bottom-20 {
    margin-bottom: 20px;
  }
</style>
