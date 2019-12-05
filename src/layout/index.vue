<template>
  <el-container>
    <Sidled></Sidled>
    <el-container>
      <el-header height="50px">
        <Headers></Headers>
      </el-header>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>


<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import Sidled from '@/layout/components/Sidled.vue';
  import Headers from '@/layout/components/Headers.vue';

  @Component({
    components: {
      Sidled,
      Headers,
    },
  })
  export default class Layout extends Vue {}

</script>

<style>
  .el-container {
    height: 100%;
  }

  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
