<template>
  <div class="admin-user-login-main">
    <div class="admin-user-login">
      <div class="admin-user-login-box admin-user-login-header">
        <h2>用户登录</h2>
        <p>后台管理模板系统</p>
      </div>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" autocomplete="on">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" ref="username" prefix-icon="iconfont icon-gerenzhongxin"
                    placeholder='用户名'></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" ref="password" type="password" prefix-icon="iconfont icon-jiumima"
                    placeholder='密码' show-password></el-input>
        </el-form-item>
        <el-form-item style='margin-bottom: 0;'>
          <el-col :span='14'>
            <el-input v-model="loginForm.code" prefix-icon="iconfont icon-dunpai" placeholder='图形验证码'></el-input>
          </el-col>
          <el-col :span='8' :offset='1'>
            <div id="v_container"></div>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span='12'>
            <el-checkbox v-model="checked">记住密码</el-checkbox>
          </el-col>
          <el-col :span='12'>
            <div class='text-right'><a href='#' class='admin-link'>忘记密码？</a></div>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type='primary' class='button-block' @click.native.prevent="handleLogin">登入</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import {Form as ElForm, Input} from 'element-ui';
  import {UserModule} from '@/store/modules/user';
  import GVerify from 'type-gverify';

  @Component
  export default class Login extends Vue {
    private checked = false;
    private loginForm = {
      username: '',
      password: '',
      code: '',
    };
    private verifyCode: any;

    private validateUsername = (rule: any, value: string, callback: any) => {
      if (!value) {
        callback(new Error(`请输入正确的用户名`));
      } else {
        callback();
      }
    }

    private validatePassword = (rule: any, value: string, callback: any) => {
      if (value.length < 4) {
        callback(new Error(`密码不能少于4位`));
      } else {
        callback();
      }
    }

    private loginRules = {
      username: [{validator: this.validateUsername, trigger: 'blur'}],
      password: [{validator: this.validatePassword, trigger: 'blur'}],
    };

    private handleLogin() {
      (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
        if (valid) {
          const {username, password, code} = this.loginForm;
          if (!(this.verifyCode).validate(code)) {
            this.$message.error('验证码错误');
            return;
          }
          const data = await UserModule.Login({username, password});
          if (data) {
            this.$message({
              message: '登录成功',
              type: 'success',
              duration: 1000,
              onClose: () => {
                this.$router.push({
                  path: '/',
                });
              },
            });
          }
        } else {
          return false;
        }
      });
    }

    private mounted() {
      if (this.loginForm.username === '') {
        (this.$refs.username as Input).focus();
      } else if (this.loginForm.password === '') {
        (this.$refs.password as Input).focus();
      }

      this.verifyCode = new GVerify({
        id: 'v_container',
      });
    }

  }
</script>

<style lang="scss">
  .admin-user-login-main {
    width: 345px;
    margin: 0 auto;
    box-sizing: border-box;

    .admin-user-login {
      position: relative;
      left: 0;
      top: 0;
      padding: 110px 0;
      min-height: 100%;
      box-sizing: border-box;

      h2 {
        margin-bottom: 10px;
        font-weight: 300;
        font-size: 30px;
        color: #000;
      }

      p {
        font-weight: 300;
        color: #999;
      }

      .admin-user-login-header {
        text-align: center;
      }
    }

    .el-input__prefix {
      left: 10px;
    }
  }
</style>
