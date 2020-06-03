<template>
  <el-aside width="220px;">
    <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" :collapse="isCollapse"
             background-color="#27274A"
             text-color="#BFDFFF"
             unique-opened>
      <!-- 一级 -->
      <template v-for="route in routes" v-if="route.meta && !route.meta.hidden">
        <template v-if="route.children && !route.meta.affix">
          <el-submenu :index="route.name">
            <template slot="title" v-if="route.meta">
              <i :class="route.meta.icon"></i> <span slot="title">{{route.meta.title}}</span>
            </template>
            <!-- 二级 -->
            <template v-for="(item1, index1) in route.children" v-if="item1.meta && !item1.meta.hidden">
              <template v-if="item1.children">
                <el-submenu :index="item1.name">
                  <template slot="title" v-if="item1.meta">
                    <span slot="title">{{item1.meta.title}}</span>
                  </template>
                  <!-- 三级-->
                  <router-link :to="{name: item2.name}" v-for="(item2, index2) in item1.children" :key="index2">
                    <el-menu-item :index="item2.name">{{item2.meta.title}}
                    </el-menu-item>
                  </router-link>
                </el-submenu>
              </template>
              <template v-else>
                <router-link :to="{name: item1.name}">
                  <el-menu-item :index="item1.name">
                    <i :class="item1.meta.icon"></i> <span slot="title">{{item1.meta.title}}</span>
                  </el-menu-item>
                </router-link>
              </template>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <router-link :to="{name: route.name}">
            <el-menu-item :index="route.name">
              <i :class="route.meta.icon"></i> <span slot="title">{{route.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>


<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import {RouteConfig} from 'vue-router';
  import {AppModule} from '@/store/modules/app';
  import {PermissionModule} from '@/store/modules/permission';

  @Component({
    name: 'Sidled',
  })
  export default class extends Vue {
    public routes: RouteConfig[] = [];

    get isCollapse() {
      return AppModule.opened;
    }

    get activeMenu() {
      const route = this.$route;
      const {meta, name} = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return name;
    }

    private mounted() {
      this.routes = PermissionModule.routes;
    }
  }
</script>

<style lang="scss">
  $asideBg: #20222A;

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
  }

  .el-aside {
    color: #333;
    line-height: 200px;

    ul {
      height: 100%;
    }

    .el-menu {
      .el-submenu__title {
        i {
          color: #fff;
          margin-right: 5px;
          width: 24px;
          text-align: center;
          font-size: 18px;
        }
      }

      .el-menu-item {
        &.is-active {
          background-color: #3F9EFF !important;
          color: #fff !important;
        }
      }
    }
  }
</style>
