<template>
  <div class="home-container">
    <el-row :gutter="15">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>图标集合</span>
            <router-link :to="{name: 'Icon'}" class="box-card_link">更多</router-link>
          </div>
          <el-row :gutter="10">
            <el-col :span="6" class="icon-box_col" v-for="(item, index) in iconList" :key="index">
              <div class="icon-box">
                <i :class="item"></i>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>时间线</span>
          </div>
          <el-timeline>
            <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp">
              {{activity.content}}
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>版本信息</span> <a href="https://github.com/yinMrsir/typescript-admin" class="box-card_link"
                                 target="_blank">下载</a>
          </div>
          <el-table :data="tableData" border :show-header="showHeader">
            <el-table-column prop="style"></el-table-column>
            <el-table-column prop="value"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component({
    name: 'Home',
  })
  export default class extends Vue {
    private showHeader: boolean = false;
    private tableData: any[] = [
      {style: '当前版本', value: 'v1.0.0'},
      {style: '框架', value: 'vue'},
      {style: '语法', value: 'typescript'},
      {style: 'UI组件库', value: 'Element v2.13.0'},
      {style: '图表库', value: 'd3.js'},
    ];
    private activities: any[] = [
      {
        content: '支持使用图标',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more',
      }, {
        content: '支持自定义颜色',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87',
      }, {
        content: '支持自定义尺寸',
        timestamp: '2018-04-03 20:46',
        size: 'large',
      }, {
        content: '默认样式的节点',
        timestamp: '2018-04-03 20:46',
      },
    ];
    private iconList: string[] = [
      'el-icon-platform-eleme',
      'el-icon-eleme',
      'el-icon-delete-solid',
      'el-icon-delete',
      'el-icon-s-tools',
      'el-icon-setting',
      'el-icon-user-solid',
      'el-icon-user',
      'el-icon-phone',
      'el-icon-phone-outline',
      'el-icon-more',
      'el-icon-more-outline',
      'el-icon-star-on',
      'el-icon-star-off',
      'el-icon-s-goods',
      'el-icon-goods',
    ];
  }
</script>

<style lang="scss">
  .home-container {
    margin: 15px;
  }

  .box-card {
    height: 340px;

    .box-card_link {
      float: right;
      padding: 3px 0;
      color: #20a0ff;
      font-size: 14px;
    }
  }

  .icon-box {
    background: #f8f8f8;
    text-align: center;
    padding: 10px 0;
    margin-bottom: 10px;

    i {
      font-size: 30px;
    }
  }

  .icon-box_col {
    text-align: center;
    font-size: 14px;
    color: #666;
  }
</style>
