<template>
  <table v-if="treeData.deptname" id="tree-chart">
    <tr>
      <td :colspan="treeData.children ? treeData.children.length * 2 : 1"
          :class="{parentLevel: treeData.children, extend: treeData.children && treeData.extend}">
        <div :class="{node: true, hasMate: treeData.mate}">
          <div class="person">
            <div class="name">{{treeData.deptname}}</div>
            <i class="add" @click="add(treeData)"></i>
            <i class="edit" @click="edit(treeData)"></i>
            <i class="del" @click="del(treeData)"></i>
          </div>
          <div class="person" v-if="treeData.mate" @click="$emit('click-node', treeData.mate)">
            <div class="name">{{treeData.mate.deptname}}</div>
            <i class="add" @click="add(treeData)"></i>
            <i class="edit" @click="edit(treeData)"></i>
            <i class="del" @click="del(treeData)"></i>
          </div>
        </div>
        <div class="extend_handle" v-if="treeData.children" @click="toggleExtend(treeData)"></div>
      </td>
    </tr>
    <tr v-if="treeData.children && treeData.extend">
      <td v-for="(children, index) in treeData.children" :key="index" colspan="2" class="childLevel">
        <TreeChart :json="children" @add-node="$emit('add-node', $event)" @edit-node="$emit('edit-node', $event)" @del-node="$emit('del-node', $event)"></TreeChart>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from 'vue-property-decorator';

  @Component({
    name: 'TreeChart',
  })
  export default class extends Vue {
    @Prop({default: {}}) private json!: object;
    private treeData = {};

    @Watch('json', {immediate: true})
    private handler(Props: any) {
      const extendKey = (jsonData: { extend: boolean | undefined; children: { forEach: (arg0: (c: any) => void) => void; }; }) => {
        jsonData.extend = (jsonData.extend === void 0 ? true : !!jsonData.extend);
        if (Array.isArray(jsonData.children)) {
          jsonData.children.forEach((c) => {
            extendKey(c);
          });
        }
        return jsonData;
      };
      if (Props) {
        this.treeData = extendKey(Props);
      }
    }

    private toggleExtend(treeData: { extend: boolean; }) {
      treeData.extend = !treeData.extend;
      this.$forceUpdate();
    }

    private add(node: any) {
      this.$emit('add-node', node);
    }

    private edit(node: any) {
      this.$emit('edit-node', node);
    }

    private del(node: any) {
      this.$emit('del-node', node);
    }

  }
</script>

<style scoped>
  table {
    border-collapse: separate !important;
    border-spacing: 0 !important;
  }

  td {
    position: relative;
    vertical-align: top;
    padding: 0 0 50px 0;
    text-align: center;
  }

  .extend_handle {
    position: absolute;
    left: 50%;
    bottom: 2px;
    width: 10px;
    height: 10px;
    padding: 10px;
    transform: translate3d(-12px, 0, 0) rotate(-90deg);
    cursor: pointer;
    background: url("../assets/hebing.png") no-repeat;
    z-index: 9;
  }

  .parentLevel.extend .extend_handle {
    transform: translate3d(-12px, 0, 0) rotate(-90deg);
  }

  .parentLevel .extend_handle {
    transform: translate3d(-12px, 0, 0) rotate(90deg);
  }

  /*.extend_handle:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 2px solid;
    border-color: #1890FF #1890FF transparent transparent;
    transform: rotateZ(135deg);
    transform-origin: 50% 50% 0;
    transition: transform ease 300ms;
  }*/

  .extend_handle:hover:before {
    border-color: #333 #333 transparent transparent;
  }

  .extend .extend_handle:before {
    transform: rotateZ(-45deg);
  }

  .extend::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 24px;
    height: 40px;
    border-left: 2px solid #1890FF;
    transform: translate3d(-1px, 0, 0)
  }

  .childLevel::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 100%;
    height: 15px;
    border-left: 2px solid #1890FF;
    transform: translate3d(-1px, 0, 0)
  }

  .childLevel::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -15px;
    border-top: 2px solid #1890FF;
  }

  .childLevel:first-child:before, .childLevel:last-child:before {
    display: none;
  }

  .childLevel:first-child:after {
    left: 50%;
    height: 15px;
    border: 2px solid;
    border-color: #1890FF transparent transparent #1890FF;
    border-radius: 6px 0 0 0;
    transform: translate3d(1px, 0, 0)
  }

  .childLevel:last-child:after {
    right: 50%;
    height: 15px;
    border: 2px solid;
    border-color: #1890FF #1890FF transparent transparent;
    border-radius: 0 6px 0 0;
    transform: translate3d(-1px, 0, 0)
  }

  .childLevel:first-child.childLevel:last-child::after {
    left: auto;
    border-radius: 0;
    border-color: transparent #1890FF transparent transparent;
    transform: translate3d(1px, 0, 0)
  }

  .node {
    position: relative;
    display: inline-block;
    width: 13em;
    box-sizing: border-box;
    text-align: center;
  }

  .node .person {
    position: relative;
    display: inline-block;
    z-index: 2;
    width: 6em;
    overflow: hidden;
  }

  .node .person .avat {
    display: block;
    width: 4em;
    height: 4em;
    margin: auto;
    overflow: hidden;
    background: #fff;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .node .person .avat img {
    width: 100%;
    height: 100%;
  }

  .node .person .name {
    height: 2em;
    line-height: 2em;
    overflow: hidden;
    width: 100%;
  }

  .node.hasMate::after {
    content: "";
    position: absolute;
    left: 2em;
    right: 2em;
    top: 2em;
    border-top: 2px solid #ccc;
    z-index: 1;
  }

  .node.hasMate .person:last-child {
    margin-left: 1em;
  }

  .landscape {
    transform: translate(-100%, 0) rotate(-90deg);
    transform-origin: 100% 0;
  }

  .landscape .node {
    text-align: left;
    height: 12em;
    width: 8em;
  }

  .landscape .person {
    position: relative;
    transform: rotate(90deg);
    padding-left: 1em;
    height: 4em;
    top: 4em;
    left: -1em;
    background: rgba(251, 251, 251, 1);
    border: 1px solid rgba(232, 232, 232, 1);
    border-left: #1890FF solid 4px;
    border-radius: 3px;
    width: 9em;
  }

  .landscape .person .avat {
    position: absolute;
    left: 0;
  }

  .landscape .person .name {
    height: 4em;
    line-height: 4em;
  }

  .landscape .hasMate {
    position: relative;
  }

  .landscape .hasMate .person {
    position: absolute;
  }

  .landscape .hasMate .person:first-child {
    left: auto;
    right: -4em;
  }

  .landscape .hasMate .person:last-child {
    left: -4em;
    margin-left: 0;
  }

  .person:hover .add {
    width: 14px;
    height: 14px;
    background: url("../assets/tianjia.png");
    position: absolute;
    top: 2px;
    right: 46px;
    cursor: pointer;
    z-index: 9;
  }

  .person:hover .add:hover {
    background: url("../assets/zengjia-hover.png");
  }

  .person:hover .edit {
    width: 14px;
    height: 14px;
    background: url("../assets/bainji.png");
    position: absolute;
    top: 2px;
    right: 26px;
    cursor: pointer;
    z-index: 9;
  }

  .person:hover .edit:hover {
    width: 14px;
    height: 14px;
    background: url("../assets/xiugai-hover.png");
    position: absolute;
    top: 2px;
    right: 26px;
    cursor: pointer;
    z-index: 9;
  }

  .person:hover .del {
    width: 14px;
    height: 14px;
    background: url("../assets/shanchu.png");
    position: absolute;
    top: 2px;
    right: 6px;
    cursor: pointer;
    z-index: 9;
  }

  .person:hover .del:hover {
    background: url("../assets/shanchu-hover.png");
  }
</style>
