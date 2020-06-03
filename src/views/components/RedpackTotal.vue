<template>
  <div class="home-item-box">
    <HTitle :level="5">
      <div class="title-top">红包发放 <span class="title-right"></span></div>
    </HTitle>
    <div style="margin-top: 20px;" ref="chart" :class="className" :style="{height: height, width: width}"></div>
    <div class="redbag-total">
      <div class="redbag-total-title">累计发放红包</div>
      <p>20 <em>元</em></p>
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
  export default class RedpackTotal extends Mixins(ResizeMixin) {
    @Prop({default: 'chart'}) private className!: string;
    @Prop({default: '100%'}) private width!: string;
    @Prop({default: '340px'}) private height!: string;
    @Prop({default: {}}) private datas!: any;

    public mounted() {
      this.$nextTick(() => {
        this.initChart();
      });
    }

    private initChart() {
      const keys: string[] = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
      const values: number[] = [1, 6, 5, 7, 9, 6, 10];
      this.chart = echarts.init((this.$refs as any).chart as HTMLDivElement);
      this.chart.setOption({
        grid: {
          top: '30%',
          left: '3%',
          right: '4%',
          bottom: '4%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: keys,
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: values,
          type: 'line',
          label: {
            normal: {
              show: true,
              position: 'top',
            },
          },
          areaStyle: {
            normal: {
              color: '#FDD6D6',  // 改变区域颜色
            },
          },
          itemStyle: {
            normal: {
              color: '#F95B5B', // 改变折线点的颜色
              lineStyle: {
                color: '#F95B5B', // 改变折线颜色
              },
            },
          },
        }],
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

  .redbag-total {
    width: 167px;
    height: 73px;
    background: linear-gradient(135deg, rgba(252, 164, 175, 1) 0%, rgba(237, 130, 143, 1) 100%);
    border-radius: 8px;
    position: absolute;
    top: 78px;
    left: 26px;
    color: #fff;
    font-size: 30px;
    box-shadow: 0 7px 12px 0 rgba(255, 157, 128, 0.5);

    .redbag-total-title {
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
</style>
