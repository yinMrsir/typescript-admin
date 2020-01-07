<template>
  <div class="main-box">
    <el-table :data="tableData" style="width: 100%" border v-loading="loading">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <div style="padding-top: 15px;">
      <el-pagination background layout="prev, pager, next" :total="1000" style="text-align: right;"
                     @current-change="changePageHandler"></el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import {tableApi} from '@/api/index';

  @Component({
    name: 'AppContentList'
  })
  export default class extends Vue {
    private tableData: object[] = [];
    private loading: boolean = false;

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
