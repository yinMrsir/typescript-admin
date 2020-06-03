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
            <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index">{{item.meta.title}}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main-layout-box">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import Sidled from '@/layout/components/Sidled.vue';
  import Headers from '@/layout/components/Headers.vue';
  import {RouteRecord} from 'vue-router';

  @Component({
    components: {
      Sidled,
      Headers,
    },
  })
  export default class Layout extends Vue {
    private breadcrumbs: RouteRecord[] = [];

    @Watch('$route')
    private onRouteChange() {
      this.getBreadcrumb();
    }

    private getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => item.meta && item.meta.title);
      const first = matched[0];
      if (first.name === 'Home') {
        matched = [];
      }
      this.breadcrumbs = matched;
    }

    private mounted() {
      this.getBreadcrumb();
    }
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

  .main-layout-box {
    height: calc(100vh - 127px);
    overflow-y: auto;
  }

  .breadcrumb {
    background: #fff;
    padding: 15px;
    border-top: #ececec solid 1px;
    border-bottom: #ececec solid 1px;
    height: 59px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
</style>
