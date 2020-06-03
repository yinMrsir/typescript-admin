<template>
  <div :class="className" :style="{height: height, width: width}"></div>
</template>

<script lang="ts">
  import {Component, Prop, Mixins} from 'vue-property-decorator';
  import HTitle from '@/components/htable/HTitle.vue';
  import echarts, {EChartOption} from 'echarts';
  import ResizeMixin from '@/mixins/resize';

  @Component({
    components: {
      HTitle,
    },
  })
  export default class QuestionDiff extends Mixins(ResizeMixin) {
    @Prop({default: 'chart'}) private className!: string;
    @Prop({default: '100%'}) private width!: string;
    @Prop({default: '340px'}) private height!: string;
    @Prop({default: ''}) private questionDiff!: any;

    public mounted() {
      this.$nextTick(() => {
        this.initChart();
      });
    }

    private initChart() {
      const keys: string[] = ['容易', '一般', '困难'];
      const newData: Array<{ value: number, name: string }> = [
        {value: 80, name: '简单'},
        {value: 60, name: '一般'},
        {value: 30, name: '困难'},
      ];
      this.chart = echarts.init(this.$el as HTMLDivElement);
      this.chart.setOption({
        legend: {
          left: 'center',
          top: 'top',
          data: keys,
          itemWidth: 10,
          itemHeight: 10,
          icon: 'circle',
        },
        series: [
          {
            name: '习题难度',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '20%'],
            label: {
              position: 'center',
              color: '#888',
              formatter: '习题难度',
            },
            data: [{value: 100, name: '习题难度'}],
            color: ['#fff'],
          },
          {
            name: '习题难度',
            type: 'pie',
            radius: ['30%', '60%'],
            center: ['50%', '50%'],
            roseType: 'area',
            data: newData,
          },
        ],
        label: {
          formatter: '{b} {c}',
        },
        color: ['#45A1FF', '#F3667C', '#0CE28A', '#FAD449'],
      } as any);
    }
  }
</script>

<style lang="scss" scoped>
</style>
