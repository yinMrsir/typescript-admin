<template>
  <div>
    <div class="home-bottom-title">习题组成</div>
    <div style="margin-top: 20px;" ref="chart" :class="className" :style="{height: height, width: width}"></div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Mixins} from 'vue-property-decorator';
  import HTitle from '@/components/htable/HTitle.vue';
  import echarts, {EChartOption} from 'echarts';
  import ResizeMixin from '@/mixins/resize';

  @Component({
    components: {
      HTitle,
    },
  })
  export default class Problem extends Mixins(ResizeMixin) {
    @Prop({default: 'chart'}) private className!: string;
    @Prop({default: '100%'}) private width!: string;
    @Prop({default: '340px'}) private height!: string;
    @Prop({default: ''}) private datas!: any;

    public mounted() {
      this.$nextTick(() => {
        this.initChart();
      });
    }

    private initChart() {
      const typekeys: string[] = ['语文', '数学', '历史'];
      const diffkeys: string[] = ['容易', '一般', '困难'];
      const types: Array<{ value: number, name: string }> = [
        {value: 20, name: '语文'},
        {value: 10, name: '数学'},
        {value: 15, name: '历史'},
      ];
      const diffs: Array<{ value: number, name: string }> = [
        {value: 80, name: '简单'},
        {value: 60, name: '一般'},
        {value: 30, name: '困难'},
      ];
      this.chart = echarts.init((this.$refs as any).chart as HTMLDivElement);
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          left: 10,
          data: typekeys.concat(diffkeys),
          itemWidth: 10,
          itemHeight: 10,
          icon: 'circle',
        },
        series: [
          {
            name: '习题难度',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
              position: 'inner',
              formatter: '{c}',
            },
            labelLine: {
              show: false,
            },
            data: diffs,
            color: ['#6CDC87', '#F3667C', '#FAD449'],
          },
          {
            name: '习题类型',
            type: 'pie',
            radius: ['40%', '55%'],
            data: types,
            label: {
              formatter: '{b} {c}',
            },
            color: [
              '#4ECCCC', '#4AA2FC', '#8A55D9',
              '#F3667C', '#0CE28A', '#FAD449',
            ],
          },
        ],
      } as any);
    }
  }
</script>

<style lang="scss" scoped>
</style>
