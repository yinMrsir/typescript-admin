<template>
  <div class="home-item-box">
    <HTitle :level="5">
      <div class="title-top">用户授权数</div>
    </HTitle>
    <div style="margin-top: 20px;" ref="chart" :class="className" :style="{height: height, width: width}"></div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Mixins, Watch} from 'vue-property-decorator';
  import HTitle from '@/components/htable/HTitle.vue';
  import echarts, {EChartOption} from 'echarts';
  import ResizeMixin from '@/mixins/resize';

  @Component({
    components: {
      HTitle,
    },
  })
  export default class UserTotal extends Mixins(ResizeMixin) {
    @Prop({default: 'chart'}) private className!: string;
    @Prop({default: '100%'}) private width!: string;
    @Prop({default: '340px'}) private height!: string;

    @Watch('userTotalKey')
    private userTotalKeyWatch(newValue: string) {
      this.$emit('updateChart', newValue);
    }

    public mounted() {
      this.$nextTick(() => {
        this.initChart();
      });
    }

    private initChart() {
      const keys: string[] = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
      const values: number[] = [1, 3, 5, 7, 9, 6, 10];
      this.chart = echarts.init((this.$refs as any).chart as HTMLDivElement);
      this.chart.setOption({
        title: {
          subtext: '总授权数：' + 100,
        },
        color: ['#5B8FF9'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
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
            name: '用户授权',
            type: 'bar',
            barWidth: '30%',
            data: values,
            label: {
              normal: {
                show: true,
                position: 'top',
              },
            },
          },
        ],
      } as any);
    }
  }
</script>

<style lang="scss" scoped>
  .title-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .title-right {
      font-size: 15px;
      color: #333;
      font-weight: normal;
    }
  }
</style>
