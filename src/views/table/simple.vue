<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import {trmfxApi} from '@/api/index';

  @Component
  export default class SimpleTable extends Vue {
    private tableData: object[] = [];

    private mounted() {
      this.getPageData();
    }

    private getPageData() {
      trmfxApi.getTaskFxQueryPages({pageNum: 1, pageSize: 10}).then((data: any) => {
        this.tableData = data.records;
      });
    }
  }
</script>
