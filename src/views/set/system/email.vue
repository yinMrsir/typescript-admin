<template>
  <div>
    <el-card style="margin: 15px;">
      <div slot="header" class="clearfix">
        <span>邮件服务</span>
      </div>
      <el-form ref="form" label-width="120px">
        <el-form-item label="SMTP服务器">
          <el-row>
            <el-col :span="4">
              <el-input></el-input>
            </el-col>
            <el-col :span="18">
              <div style="padding-left: 15px; color: #8f8f8f">如：smtp.163.com</div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="SMTP端口号">
          <el-row>
            <el-col :span="3">
              <el-input></el-input>
            </el-col>
            <el-col :span="19">
              <div style="padding-left: 15px; color: #8f8f8f">一般为 25 或 465</div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="发件人邮箱">
          <el-row>
            <el-col :span="4">
              <el-input></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="发件人昵称">
          <el-row>
            <el-col :span="4">
              <el-input></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="邮箱登入密码">
          <el-row>
            <el-col :span="4">
              <el-input type="password"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确认保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component({
    name: 'Email',
  })
  export default class extends Vue {
  }
</script>
