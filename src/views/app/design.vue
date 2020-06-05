<template>
  <div class="main-box-two">
    <HTitle>编辑微页面</HTitle>
    <div class="design-box">
      <el-row>
        <el-col :span="3">
          <div class="select-component">
            <ul>
              <li v-for="(item, index) in selectComponentList" :key="index" @click="addComponent(index)">
                <i :class="item.icon"></i>
                <p>{{item.name}}</p>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="18" :offset="3">
          <div class="design-preview" :style="'background: '+ background +''">
            <DesignTitle :background="background" @reset="reset" @updateBgColor="updateBgColor"
                         ref="designTitle"></DesignTitle>
            <draggable ref="draggable">
              <template v-for="(item, index) in componentList">
                <DesignSwipe @reset="reset" v-if="item.type === 1" :itemData="item" :index="index"></DesignSwipe>
                <DesignSearch @reset="reset" v-if="item.type === 2" :itemData="item" :index="index"></DesignSearch>
                <DesignGrid @reset="reset" v-if="item.type === 3" :itemData="item" :index="index"></DesignGrid>
                <DesignCommodity @reset="reset" v-if="item.type === 4" :itemData="item"
                                 :index="index"></DesignCommodity>
              </template>
            </draggable>
          </div>
          <el-button type="primary" style="margin:30px 0 50px 110px;" @click="defaultData">使用默认模板</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import util from '@/utils';
  import draggable from 'vuedraggable';
  import HTitle from '@/components/htable/HTitle.vue';
  import DesignTitle from '@/views/app/component/design/DesignTitle.vue';
  import DesignSwipe from '@/views/app/component/design/DesignSwipe.vue';
  import DesignSearch from '@/views/app/component/design/DesignSearch.vue';
  import DesignGrid from '@/views/app/component/design/DesignGrid.vue';
  import DesignCommodity from '@/views/app/component/design/DesignCommodity.vue';

  @Component({
    components: {
      draggable,
      HTitle,
      DesignTitle,
      DesignSwipe,
      DesignSearch,
      DesignGrid,
      DesignCommodity,
    },
  })
  export default class Design extends Vue {
    private background: string = '#F9F9F9';
    private selectComponentList: Array<{ icon: string, name: string, type: number }> = [
      {icon: 'el-icon-picture', name: '图片广告', type: 1},
      {icon: 'el-icon-search', name: '搜索框', type: 2},
      {icon: 'el-icon-s-grid', name: '宫格', type: 3},
      {icon: 'el-icon-s-goods', name: '商品', type: 4},
    ];
    private componentList: any[] = [];
    private defaultComponentData: any[] = [
      {type: 1},
      {type: 2},
      {
        type: 3,
        data: {
          images: [
            {img: 'https://img.yzcdn.cn/upload_files/2018/12/28/FosHDZR71fCuSgpEYVx3rrACdiwG.png'},
            {img: 'https://img.yzcdn.cn/upload_files/2018/12/28/FhMqIwcQAh_Pl1MRz_xzcpJ2KjxB.png'},
            {img: 'https://img.yzcdn.cn/upload_files/2018/12/28/Ft6FNKjLzAsetplkC0mV6f3DmmeP.png'},
            {img: 'https://img.yzcdn.cn/upload_files/2018/12/28/FizLy1E8Oy0PeXwssf8YiGcsP9tE.png'},
          ],
        },
      },
      {
        type: 3,
        data: {
          images: [
            {img: 'https://img.yzcdn.cn/upload_files/2018/12/28/FgtgjdlLW2iFJ2puJgJlY6nvXFRJ.png!large.png'},
          ],
          columnNum: 1,
        },
      },
      {
        type: 4,
        data: {
          commoditys: [
            {img: '', pr: 100, name: '测试商品'},
          ],
          columnNum: 1,
        },
      },
    ];

    private defaultData() {
      this.componentList = util.extend(this.defaultComponentData);
    }

    private addComponent(index: number) {
      // 如果类型是宫格
      if (this.selectComponentList[index].type === 3) {
        this.componentList.push({
          type: this.selectComponentList[index].type,
          data: {
            images: [{img: ''}, {img: ''}, {img: ''}, {img: ''}],
          },
        });
      } else if (this.selectComponentList[index].type === 4) {
        this.componentList.push({
          type: this.selectComponentList[index].type,
          data: {
            commoditys: [{img: ''}, {img: ''}, {img: ''}, {img: ''}],
          },
        });
      } else {
        this.componentList.push({
          type: this.selectComponentList[index].type,
          data: {},
        });
      }
    }

    public updateBgColor(color: string) {
      this.background = color;
    }

    public reset(type: string, index?: number) {
      if (type === 'edit') {
        const comList = (this.$refs['draggable'] as any).$children;
        for (const key of Object.keys(comList)) {
          (comList[key] as any).isEdit = false;
        }
        (this.$refs['designTitle'] as any).isEdit = false;
      } else if (type === 'remove') {
        if (index !== undefined) {
          this.componentList.splice(index, 1);
        }
        this.$forceUpdate();
      }
    }
  }
</script>

<style lang="scss">
  .design-box {
    .select-component {
      height: calc(100vh - 222px);
      border-right: #eaeaea solid 1px;

      ul {
        li {
          width: 50%;
          border-right: #eaeaea solid 1px;
          border-bottom: #eaeaea solid 1px;
          text-align: center;
          box-sizing: border-box;
          padding: 15px;
          font-size: 12px;
          float: left;
          cursor: pointer;

          &:hover {
            background: #2a77ff;

            i {
              color: #fff;
            }

            p {
              color: #fff;
            }
          }

          i {
            font-size: 30px;
            margin-bottom: 10px;
          }

          p {
            margin: 0;
          }
        }
      }
    }

    .design-preview {
      margin-top: 20px;
      border: 1px solid #e5e5e5;
      width: 320px;
      min-height: 450px;
      position: relative;
    }

    .zent-design-editor-item {
      position: absolute;
      left: 100%;
      top: 0;
      padding: 12px 10px;
      min-height: 28px;
      background: #f8f8f8;
      border-radius: 5px;
      border: 1px solid #e5e5e5;
      width: 420px;
      margin-left: 20px;
      font-size: 12px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      z-index: 5;

      &:after, &:before {
        right: 100%;
        top: 20px;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }

      &:before {
        border-color: transparent;
        border-right-color: #e5e5e5;
        border-width: 7px;
        margin-top: -7px;
      }

      &:after {
        border-color: transparent;
        border-right-color: #f8f8f8;
        border-width: 6px;
        margin-top: -6px;
      }
    }
  }

  .zent-design-preview-controller {
    &:hover:before, &.active:before {
      opacity: .5;
    }

    &:before, &:hover:before, &.active:before {
      z-index: 2;
      display: block;
      border: 1px dashed #38f;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      pointer-events: none;
      display: none;
    }

    .zent-design-preview-controller__action-btn-delete {
      position: absolute;
      top: -10px;
      right: -10px;
      z-index: 15;
      font-size: 0;
      line-height: 0;
      cursor: pointer;
      background: #ccc;
      border-radius: 50%;
      display: none;
      width: 20px;
      height: 20px;

      i {
        color: #fff;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        width: 20px;
        height: 20px;
      }
    }

    &:hover .zent-design-preview-controller__action-btn-delete, &.active .zent-design-preview-controller__action-btn-delete {
      display: inline-block;
    }
  }

  .design-edit-title {
    border-bottom: #ccc solid 1px;
    padding: 0 10px 10px 0;
    font-size: 14px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .el-form-item {
    margin-bottom: 5px;
  }
</style>
