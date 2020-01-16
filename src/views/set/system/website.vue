<template>
  <div>
    <el-card style="margin: 15px;">
      <div slot="header" class="clearfix">
        <span>网站设置</span>
      </div>
      <el-form ref="form" label-width="120px">
        <el-form-item label="网站名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="网站域名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="缓存时间">
          <el-row>
            <el-col :span="2">
              <el-input></el-input>
            </el-col>
            <el-col :span="22">
              <div style="padding-left: 15px;">
                分钟 <span style="padding-left: 15px;color: #9da5af">本地开发一般推荐设置为 0，线上环境建议设置为 10。</span>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="最大文件上传">
          <el-row>
            <el-col :span="2">
              <el-input></el-input>
            </el-col>
            <el-col :span="22">
              <div style="padding-left: 15px;">
                KB <span style="padding-left: 15px;color: #9da5af">提示：1 M = 1024 KB</span>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="上传文件类型">
          <el-input value="png|gif|jpg|jpeg|zip|rar"></el-input>
        </el-form-item>
        <el-form-item label="首页标题">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="META关键词">
          <el-input type="textarea" placeholder="多个关键词用英文状态 , 号分割"></el-input>
        </el-form-item>
        <el-form-item label="META描述">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="版权信息">
          <el-input type="textarea"></el-input>
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
    name: 'Website',
  })
  export default class extends Vue {
  }
</script>
