<template>
  <div>
    <el-card style="margin: 15px;">
      <div slot="header" class="clearfix">
        <span>设置我的资料</span>
      </div>
      <el-form ref="Form" label-width="80px">
        <el-form-item label="我的角色">
          <el-select placeholder="请选择角色" v-model="optionsValue" style="width: 300px;">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input :value="username" readonly></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="radio">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机">
          <el-input placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" placeholder="请输入备注"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确认修改</el-button>
          <el-button>重新填写</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import {UserModule} from '@/store/modules/user';

  @Component({
    name: 'Info'
  })
  export default class extends Vue {
    private optionsValue: number = 1;
    private options = [
      {value: 1, label: '超级管理员'},
      {value: 2, label: '普通管理员', disabled: true},
      {value: 3, label: '审核员', disabled: true},
      {value: 4, label: '编辑人员', disabled: true},
    ];
    private radio:number = 1;

    get username() {
      return JSON.parse(UserModule.userInfo).username
    }
  }
</script>

<style lang="scss" scoped>
  .el-input {
    max-width: 300px;
  }
</style>
