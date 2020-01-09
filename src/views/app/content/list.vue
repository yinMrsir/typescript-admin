<template>
  <div class="main-box">
    <div class="app-content-list_top">
      <el-form ref="form" label-width="80px">
        <el-row :gutter="10">
          <el-col :span="5">
            <el-form-item label="文章ID">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="作者">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="标题">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="文章标签">
              <el-select v-model="region" placeholder="请选择标签" style="width: 100%;">
                <el-option label="美食" value="1"></el-option>
                <el-option label="新闻" value="2"></el-option>
                <el-option label="八卦" value="3"></el-option>
                <el-option label="体育" value="4"></el-option>
                <el-option label="音乐" value="5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="app-content-btns">
      <el-button type="primary">删除</el-button>
      <el-button type="primary" @click="dialogVisible = true">添加</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border v-loading="loading">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <div style="padding-top: 15px;">
      <el-pagination background layout="prev, pager, next" :total="1000" style="text-align: right;"
                     @current-change="changePageHandler"></el-pagination>
    </div>

    <!-- 添加弹层 -->
    <el-dialog
        title="添加文章"
        :visible.sync="dialogVisible"
        width="30%">
      <el-form>
        <el-form-item label="文章标题" label-width="80px">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="发布人" label-width="80px">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" label-width="80px">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="标签" label-width="80px">
          <el-select placeholder="请选择标签" v-model="region">
            <el-option label="美食" value="1"></el-option>
            <el-option label="新闻" value="2"></el-option>
            <el-option label="八卦" value="3"></el-option>
            <el-option label="体育" value="4"></el-option>
            <el-option label="音乐" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布状态" label-width="80px">
          <el-switch></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import {tableApi} from '@/api/index';

  @Component({
    name: 'AppContentList',
  })
  export default class extends Vue {
    private tableData: object[] = [];
    private loading: boolean = false;
    private region: string = '';
    private dialogVisible: boolean = false;

    private mounted() {
      this.getPageData();
    }

    private getPageData() {
      this.loading = true;
      tableApi.simple().then((data: any) => {
        this.tableData = data.data.list;
        this.loading = false;
      });
    }

    private changePageHandler(n: number) {
      this.getPageData();
    }
  }
</script>

<style lang="scss">
  .app-content-btns {
    padding-bottom: 15px;
    border-bottom: #e6e6e6 solid 1px;
    margin-bottom: 15px;
  }
</style>
