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
  export default class QuestionType extends Mixins(ResizeMixin) {
    @Prop({default: 'chart'}) private className!: string;
    @Prop({default: '100%'}) private width!: string;
    @Prop({default: '340px'}) private height!: string;
    @Prop({default: ''}) private questionType!: any;
    public chart: any;

    public mounted() {
      this.$nextTick(() => {
        this.initChart();
      });
    }

    private initChart() {
      const keys: string[] = ['语文', '数学', '历史'];
      const newData: Array<{ value: number, name: string }> = [
        {value: 20, name: '语文'},
        {value: 10, name: '数学'},
        {value: 15, name: '历史'},
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
            name: '习题类型',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '20%'],
            label: {
              position: 'center',
              color: '#888',
              formatter: '习题类型',
            },
            data: [{value: 100, name: '习题类型'}],
            color: ['#fff'],
          },
          {
            name: '习题类型',
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
        color: ['#475DF2', '#7C8DFF', '#0CE28A', '#FAD449'],
      } as any);
    }
  }
</script>

<style lang="scss" scoped>
</style>
