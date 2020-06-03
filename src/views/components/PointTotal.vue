<template>
  <div class="home-item-box">
    <HTitle :level="5">
      <div class="title-top">积分统计 <span class="title-right"></span></div>
    </HTitle>
    <div style="margin-top: 20px;" ref="chart" :class="className" :style="{height: height, width: width}"></div>
    <div class="scores-total">
      <div class="scores-box-title">总积分</div>
      <p>3000 <em>分</em></p>
    </div>
    <div class="scores-cover">
      <div class="scores-box-title">可兑换积分</div>
      <p>1600 <em>元</em></p>
    </div>
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
  export default class PointTotal extends Mixins(ResizeMixin) {
    @Prop({default: 'chart'}) private className!: string;
    @Prop({default: '100%'}) private width!: string;
    @Prop({default: '340px'}) private height!: string;

    public mounted() {
      this.$nextTick(() => {
        this.initChart();
      });
    }

    private initChart() {
      const keys: string[] = ['10-1', '10-2', '10-3', '10-4', '10-5', '10-6'];
      const totalPoints: number[] = [10, 8, 6, 5, 4, 3];
      const payPoints: number[] = [2, 1, 5, 2, 4, 2];
      this.chart = echarts.init((this.$refs as any).chart as HTMLDivElement);
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          top: 20,
          data: ['总积分', '可兑换积分'],
          itemWidth: 10,
          itemHeight: 10,
        },
        grid: {
          top: '30%',
          left: '3%',
          right: '4%',
          bottom: '4%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: keys,
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '可兑换积分',
            type: 'bar',
            stack: '可用积分',
            barWidth: '20%',
            data: payPoints,
          },
          {
            name: '总积分',
            type: 'bar',
            stack: '总积分',
            barWidth: '20%',
            data: totalPoints,
          },
        ],
        color: ['#5AD8A6', '#5B8FF9'],
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

  .scores-total {
    width: 134px;
    height: 73px;
    background: linear-gradient(135deg, rgba(107, 186, 249, 1) 0%, rgba(66, 143, 252, 1) 100%);
    box-shadow: 0 7px 12px 0 rgba(161, 167, 203, 0.5);
    border-radius: 8px;
    position: absolute;
    top: 78px;
    left: 26px;
    font-size: 30px;
    color: #fff;

    .scores-box-title {
      padding: 8px 12px;
      font-size: 12px;
    }

    p {
      text-align: center;
      margin: 0;
      padding: 0;

      em {
        font-size: 12px;
        font-style: normal;
      }
    }
  }

  .scores-cover {
    width: 125px;
    height: 72px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 7px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: absolute;
    top: 78px;
    left: 172px;
    font-size: 30px;

    .scores-box-title {
      padding: 8px 12px;
      font-size: 12px;
      color: #4997FB;
    }

    p {
      text-align: center;
      margin: 0;
      padding: 0;

      em {
        font-size: 12px;
        font-style: normal;
      }
    }
  }
</style>
