<template>
  <div class="main-box">
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import {tableApi} from '@/api/index';

  @Component
  export default class SimpleTable extends Vue {
    private tableData: object[] = [];

    private mounted() {
      this.getPageData();
    }

    private getPageData() {
      tableApi.simple().then((data: any) => {
        this.tableData = data.data.list;
      });
    }
  }
</script>

<style lang="scss">
  .pagination{
    padding-top: 20px;
  }
</style>
