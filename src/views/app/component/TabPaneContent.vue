<template>
  <div>
    <div>
      <el-button @click="deleteHandler" size="small">删除</el-button>
      <el-button @click="markHandler" size="small">标记已读</el-button>
      <el-button @click="markHandler('all')" size="small">全部已读</el-button>
    </div>
    <div class="message-table-box">
      <el-table :data="list" style="width: 100%" border v-loading="loading" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="title" label="标题内容"></el-table-column>
        <el-table-column prop="date" label="时间"></el-table-column>
      </el-table>
      <div style="padding-top: 15px;">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="100"
            style="text-align: right;"
            @current-change="changePageHandler">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import {appApi} from '@/api';

  @Component({
    name: 'TabPaneContent',
  })
  export default class extends Vue {
    @Prop() private type!: string;
    public list: any[] = [];
    private loading: boolean = false;
    private multipleSelection: any[] = [];

    private changePageHandler(n: number) {
      this.getMessage();
    }

    private handleSelectionChange(val: any) {
      this.multipleSelection = val;
    }

    private deleteHandler() {
      if (this.multipleSelection.length === 0) {
        this.$message.warning('还未选中数据');
        return;
      }
      this.$confirm('确定删除选中的数据吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$message({type: 'success', message: '删除成功!'});
        // 重新请求
        this.getMessage();
      }).catch(() => {
        this.$message({type: 'info', message: '已取消删除'});
      });
    }

    private markHandler(type: string | undefined) {
      if (Object.prototype.toString.call(type) === '[object MouseEvent]') {
        if (this.multipleSelection.length === 0) {
          this.$message.warning('还未选中数据');
          return;
        }
        this.$message.success('标记已读成功');
        // 重新请求
        this.getMessage();
      } else if (type === 'all') {
        this.$message.success('全部标记已读成功');
      }
    }

    public getMessage() {
      this.loading = true;
      appApi.message({type: this.type}).then((data: any) => {
        this.list = data.data.list;
        this.loading = false;
      });
    }

  }
</script>

<style lang="scss" scoped>
  .message-table-box {
    padding-top: 15px;
  }
</style>
