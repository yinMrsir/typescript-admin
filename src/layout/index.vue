<template>
  <el-container>
    <Sidled></Sidled>
    <el-container>
      <el-header height="50px">
        <Headers></Headers>
      </el-header>
      <el-main>
        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
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
  export default class Layout extends Vue {
  }

</script>

<style lang="scss">
  .el-container {
    height: 100%;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-main {
    padding: 0;
  }

  .breadcrumb {
    background: #fff;
    padding: 15px;
    border-top: #f6f6f6 solid 1px;
  }
</style>
