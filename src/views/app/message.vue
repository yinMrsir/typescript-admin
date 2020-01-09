<template>
  <div class="main-box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!--   全部消息   -->
      <el-tab-pane label="全部消息" name="all">
        <TabPaneContent type="all" ref="all"></TabPaneContent>
      </el-tab-pane>
      <!--   通知   -->
      <el-tab-pane label="通知" name="inform">
        <span slot="label">
          <el-badge class="mark" :value="12">通知</el-badge>
        </span>
        <TabPaneContent type="inform" ref="inform"></TabPaneContent>
      </el-tab-pane>
      <!--   私信   -->
      <el-tab-pane label="私信" name="private">
        <TabPaneContent type="private" ref="private"></TabPaneContent>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import TabPaneContent from '@/views/app/component/TabPaneContent.vue';

  @Component({
    name: 'AppMessage',
    components: {
      TabPaneContent,
    },
  })
  export default class extends Vue {
    private activeName: string = 'all';

    private mounted() {
      (this.$refs[this.activeName] as TabPaneContent).getMessage();
    }

    private handleClick(tab: any) {
      const tabPaneContent = this.$refs[tab.name];
      // 如果组件未加载过数据，就进行数据加载
      if ((tabPaneContent as TabPaneContent).list.length === 0) {
        (tabPaneContent as TabPaneContent).getMessage();
      }
    }
  }
</script>

<style>
  .mark .el-badge__content.is-fixed {
    top: 6px;
  }
</style>
