<template>
  <div class="main-box-two" :style="{height: boxHeight}">
    <TreeChart :json="treeData" :class="{landscape: 1}" @add-node="addNode" @edit-node="editNode" @del-node="delNode"/>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import TreeChart from '@/components/TreeChart.vue';

  @Component({
    components: {
      TreeChart,
    },
  })
  export default class DepartmentManage extends Vue {
    private treeData = {};
    private boxHeight: string = 'auto';

    private addNode(node: any) {
      this.$prompt(`部门名称`, `添加子部门`, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '请输入部门名称',
      }).then(async ({value}: any) => {
        this.$message.success(`添加成功`);
      }).catch(() => {
        return;
      });
    }

    private editNode(node: any) {
      this.$prompt(`名称`, `修改名称`, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '请输入名称',
      }).then(async ({value}: any) => {
        this.$message.success(`修改成功`);
      }).catch(() => {
        return;
      });
    }

    private delNode(node: any) {
      this.$confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        this.$message.success(`删除成功`);
      }).catch(() => {
        return;
      });
    }

    private async getDeptAll() {
      this.treeData = {
        deptname: 'xxx电力服务公司',
        children: [
          {
            deptname: '办公室',
            children: [
              {
                deptname: 'xxx物业服务公司',
                children: [
                  {
                    deptname: '综合管理部',
                    children: [
                      {
                        deptname: '综合办公室',
                      },
                    ],
                  },
                  {deptname: '物业管理部'},
                  {deptname: '车队'},
                  {deptname: '服务部'},
                  {deptname: '财务部'},
                ],
              },
            ],
          },
          {
            deptname: '财务管理中心',
            children: [
              {deptname: '会计科'},
              {deptname: '出纳科'},
            ],
          },
          {
            deptname: '市场营销中心',
          },
          {
            deptname: '预结算中心',
          },
          {
            deptname: '电力工程公司',
            children: [
              {
                deptname: '办公室',
                children: [
                  {deptname: '总务'},
                ],
              },
              {deptname: '项目管理中心'},
              {deptname: '质安部'},
              {deptname: '输变电项目部'},
              {deptname: '生产技术部'},
            ],
          },
        ],
      };
      this.$nextTick(() => {
        this.boxHeight = (document.getElementById('tree-chart') as HTMLElement).offsetWidth + 'px';
      });
    }

    private mounted() {
      this.getDeptAll();
    }
  }
</script>

<style lang="scss">
  .main-box-two {
    background: #fff;
    margin: 15px;
  }
</style>
