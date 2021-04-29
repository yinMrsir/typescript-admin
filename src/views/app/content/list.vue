<template>
  <div class="main-box">
    <div class="app-content-list_top">
      <el-form ref="form" label-width="80px">
        <el-row :gutter="10">
          <el-col :span="5">
            <el-form-item label="文章ID">
              <el-input size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="作者">
              <el-input size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="标题">
              <el-input size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="文章标签">
              <el-select v-model="region" placeholder="请选择标签" style="width: 100%;"  size="small">
                <el-option :label="item.label" :value="item.value" v-for="item in selectList" :key="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="app-content-btns">
      <el-button type="primary" size="small">删除</el-button>
      <el-button type="primary" @click="addItem" size="small">添加</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border v-loading="loading" stripe row-key="id">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="文章ID" width="180"></el-table-column>
      <el-table-column label="文章标签" width="100">
        <template slot-scope="scope">
          {{selectObj[scope.row.tag]}}
        </template>
      </el-table-column>
      <el-table-column prop="title" label="文章标题"></el-table-column>
      <el-table-column prop="name" label="作者" width="180"></el-table-column>
      <el-table-column prop="date" label="上传时间" width="180"></el-table-column>
      <el-table-column label="发布状态" width="150">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.state === 1"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="primary" icon="el-icon-edit" @click="editRowData(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="padding-top: 15px;">
      <el-pagination background layout="prev, pager, next" :total="1000" style="text-align: right;"
                     @current-change="changePageHandler"></el-pagination>
    </div>

    <!-- 添加弹层 -->
    <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogVisible"
        width="30%">
      <el-form v-model="dialogForm">
        <el-form-item label="文章标题" label-width="80px">
          <el-input v-model="dialogForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="发布人" label-width="80px">
          <el-input autocomplete="off" v-model="dialogForm.name"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" label-width="80px">
          <el-input type="textarea" v-model="dialogForm.content"></el-input>
        </el-form-item>
        <el-form-item label="标签" label-width="80px">
          <el-select placeholder="请选择标签" v-model="dialogForm.tag">
            <el-option :label="item.label" :value="item.value" v-for="item in selectList" :key="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布状态" label-width="80px">
          <template slot-scope="scope">
            <el-switch v-model="dialogForm.state"></el-switch>
          </template>
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
  import {appApi} from '@/api/index';

  @Component({
    name: 'AppContentList',
  })
  export default class extends Vue {
    private tableData: object[] = [];
    private loading: boolean = false;
    private region: string = '';
    private dialogVisible: boolean = false;
    private dialogTitle: string = '添加文章';
    private selectList: any[] = [
      {label: '美食', value: '1'},
      {label: '新闻', value: '2'},
      {label: '八卦', value: '3'},
      {label: '体育', value: '4'},
      {label: '音乐', value: '5'},
    ];
    private dialogForm = {
      title: '',
      name: '',
      content: '',
      tag: '',
      state: true,
    };

    get selectObj() {
      const obj: any = {};
      for (const v of this.selectList) {
        obj[v.value] = v.label;
      }
      return obj;
    }

    private mounted() {
      this.getPageData();
    }

    private getPageData() {
      this.loading = true;
      appApi.contentList().then((data: any) => {
        this.tableData = data.data.list;
        this.loading = false;
      });
    }

    private changePageHandler(n: number) {
      this.getPageData();
    }

    private editRowData(obj: any) {
      this.dialogTitle = '修改';
      this.dialogVisible = true;
      const {title, name, tag, state, content} = obj;
      this.dialogForm = {
        title,
        name,
        tag: String(tag),
        state: state === 1,
        content,
      };
    }

    private addItem() {
      this.dialogTitle = '添加文章';
      this.dialogVisible = true;
      this.dialogForm = {
        title: '',
        name: '',
        content: '',
        tag: '',
        state: true,
      };
    }
  }
</script>

<style lang="scss">
  .app-content-btns {
    padding-bottom: 15px;
    padding-top: 15px;
    border-top: #e6e6e6 solid 1px;
  }
</style>
