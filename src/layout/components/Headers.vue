<template>
  <div>
    <el-row>
      <el-col :span="1">
        <a href="javascript:void(0)" @click="setOpened"><i :class="className"></i></a>
      </el-col>
      <el-col :span="4" class="input-box">
        <el-input placeholder="搜索..."></el-input>
      </el-col>
      <el-col :offset="17" :span="1">
        <i class="el-icon-message-solid"></i>
      </el-col>
      <el-col :span="1">
        <el-dropdown>
          <span class="el-dropdown-link">
            王小虎
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改资料</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component
  export default class Headers extends Vue {

    get isCollapse() {
      return this.$store.state.opened;
    }

    get className() {
      if (this.$store.state.opened) {
        return 'el-icon-s-unfold';
      } else {
        return 'el-icon-s-fold';
      }
    }

    private setOpened() {
      this.$store.dispatch('setOpened', !this.isCollapse);
    }
  }
</script>

<style lang="scss">
  .el-header {
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    width: 100%;
    line-height: 50px;
    height: 50px;
  }

  .border-none {
    border: none;
  }

  .input-box {
    .el-input__inner {
      border: none;
    }
  }
</style>
