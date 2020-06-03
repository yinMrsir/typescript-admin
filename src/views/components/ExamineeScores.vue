<template>
  <div>
    <div class="home-bottom-title">考生分数分布</div>
    <div ref="chart" :class="className" :style="{height: height, width: width}"></div>
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
  export default class ExamineeScores extends Mixins(ResizeMixin) {
    @Prop({default: 'chart'}) private className!: string;
    @Prop({default: '100%'}) private width!: string;
    @Prop({default: '320px'}) private height!: string;
    @Prop({default: ''}) private datas!: any;

    public mounted() {
      this.$nextTick(() => {
        this.initChart();
      });
    }

    private initChart() {
      const keys: string[] = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
      const newData: number[] = [1, 6, 5, 7, 9, 6, 10];
      this.chart = echarts.init((this.$refs as any).chart as HTMLDivElement);
      this.chart.setOption({
        color: ['#0CE28A'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '4%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: keys,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '考生人数',
            type: 'bar',
            barWidth: '30%',
            data: newData,
          },
        ],
      } as any);
    }
  }
</script>

<style lang="scss" scoped>
</style>
