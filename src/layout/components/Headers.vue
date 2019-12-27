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
        <el-dropdown @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
            {{username}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改资料</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import {AppModule} from '@/store/modules/app';
  import {UserModule} from '@/store/modules/user';

  @Component({
    name: 'Headers',
  })
  export default class extends Vue {

    get isCollapse() {
      return AppModule.opened;
    }

    get username(): string {
      return UserModule.userInfo ? JSON.parse(UserModule.userInfo).username : '';
    }

    get className() {
      if (AppModule.opened) {
        return 'el-icon-s-unfold';
      } else {
        return 'el-icon-s-fold';
      }
    }

    private setOpened() {
      AppModule.setOpened(!this.isCollapse);
    }

    private handleCommand(command: string) {
      if (command === 'logout') {
        UserModule.Logout();
        this.$router.push('/login');
      }
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
