<template>
  <div>
    <el-row>
      <el-col :span="1">
        <a href="javascript:void(0)" @click="setOpened"><i :class="className"></i></a>
      </el-col>
      <el-col :span="4" class="input-box">
        <el-input placeholder="搜索..."></el-input>
      </el-col>
      <el-col :span="19" style="text-align: right;">
        <router-link :to="{name: 'AppMessage'}">
          <el-badge class="header-mark" :value="12">
            <i class="el-icon-message-solid"></i>
          </el-badge>
        </router-link>
        <el-dropdown @command="handleCommand" trigger="click" style="margin-left: 30px;">
          <span class="el-dropdown-link">
            <img src="../../assets/oval.png" style="display: inline-block;vertical-align: -7px;" alt=""/>
            {{username}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link :to="{name: 'Info'}">基本资料</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link :to="{name: 'Password'}">修改密码</router-link>
            </el-dropdown-item>
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

  .header-mark .el-badge__content.is-fixed{
    top: 10px;
  }
</style>
