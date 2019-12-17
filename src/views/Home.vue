<template>
  <div>
    <HTitle>{{msg}}</HTitle>
    <Toast message="操作失败" ref="toast"></Toast>
    <el-button type="primary" @click="changeToastStatus">显示Toast</el-button>
    <el-button type="primary">{{'buttonCont' | uppercaseFirstChar}}</el-button>
    <br>
    <span v-color="'red'">{{msg}}</span>
  </div>
</template>


<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import HTitle from '../components/HTitle.vue';
  import Toast from '../components/Toast.vue';

  @Component({
    components: {
      HTitle,
      Toast,
    },
  })
  export default class Home extends Vue {
    private msg: string = 'hello world!';
    private isShow: boolean = false;
    private $toast!: {show: (options: any) => void};

    private changeToastStatus() {
      (this.$refs.toast as Toast).showToast();
    }

    private mounted() {
      this.$toast.show({
        message: '成功',
      });
    }

  }

</script>

<style>
  .hello {
    font-size: 30px;
  }

  #svg {
    background: #ccc;
    width: 500px;
    height: 250px;
  }

  path {
    fill: none;
    stroke: #4682b4;
    stroke-width: 2
  }
</style>
