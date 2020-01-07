<template>
  <div>
    <el-card style="margin: 15px;">
      <div slot="header" class="clearfix">
        <span>修改密码</span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="当前密码" prop="currPass">
          <el-input v-model="ruleForm.currPass" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off"></el-input>
          <el-button type="text" disabled style="padding-left: 10px;">6到16个字符</el-button>
        </el-form-item>
        <el-form-item label="确认新密码" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component({
    name: 'Password',
  })
  export default class extends Vue {
    private ruleForm = {
      currPass: '',
      pass: '',
      checkPass: '',
    };

    private validateCurrPass = (rule: any, value: string, callback: any) => {
      if (value === '') {
        callback(new Error('请输入旧密码'));
      } else {
        callback();
      }
    }

    private validatePass = (rule: any, value: string, callback: any) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          (this.$refs.ruleForm as HTMLFormElement).validateField('checkPass');
        }
        callback();
      }
    }

    private validatePass2 = (rule: any, value: string, callback: any) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }

    private rules = {
      currPass: [
        {validator: this.validateCurrPass, trigger: 'blur'},
      ],
      pass: [
        {validator: this.validatePass, trigger: 'blur'},
      ],
      checkPass: [
        {validator: this.validatePass2, trigger: 'blur'},
      ],
    };

    private submitForm(formName: string | number) {
      (this.$refs[formName] as HTMLFormElement).validate((valid: any) => {
        if (valid) {
          alert('submit!');
        } else {
          this.$message.error('error submit!!');
          return false;
        }
      });
    }
  }
</script>

<style lang="scss" scoped>
  .el-input {
    max-width: 300px;
  }
</style>
