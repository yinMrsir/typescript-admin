<template>
  <div>
    <div class="home-bottom-title">考试区域分布</div>
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
  export default class Areal extends Mixins(ResizeMixin) {
    @Prop({default: 'chart'}) private className!: string;
    @Prop({default: '100%'}) private width!: string;
    @Prop({default: '300px'}) private height!: string;

    public mounted() {
      this.$nextTick(() => {
        this.initChart();
      });
    }

    private initChart() {
      const keys: string[] = ['芙蓉区', '天心区', '雨花区', '岳麓区', '开福区', '长沙县'];
      const newData: Array<{ value: number, name: string }> = [
        {value: 2, name: '芙蓉区'},
        {value: 5, name: '天心区'},
        {value: 3, name: '雨花区'},
        {value: 6, name: '岳麓区'},
        {value: 4, name: '开福区'},
        {value: 1, name: '长沙县'},
      ];
      this.chart = echarts.init((this.$refs as any).chart as HTMLDivElement);
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c}',
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: keys,
          itemWidth: 10,
          itemHeight: 10,
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
              position: 'center',
              color: '#888',
              formatter: [
                '{a|{b}}',
                '{b|{c}}',
              ].join('\n'),
              rich: {
                a: {
                  color: '#888888',
                  lineHeight: 20,
                },
                b: {
                  color: '#333333',
                  lineHeight: 30,
                  fontSize: '24',
                },
              },
            },
            labelLine: {
              show: false,
            },
            data: [{value: 80, name: '平均积分'}],
            color: ['#E8F7FF'],
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '58%'],
            avoidLabelOverlap: false,
            emphasis: {
              label: {
                show: true,
                fontSize: '14',
                fontWeight: 'bold',
              },
            },
            data: newData,
            color: [
              '#315EA1', '#45A4FF', '#64B9FF', '#91D5FF',
              '#F4A71F', '#FFCE79', '#FFD690', '#FFD690',
              '#FFD690', '#FFE1AD',
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: '{d}%',
                },
                labelLine: {show: true},
              },
            },
          },
        ],
      } as any);
    }
  }
</script>

<style lang="scss" scoped>
</style>
