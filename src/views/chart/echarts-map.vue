<template>
  <div class="echarts">
    <div :style="{height:'100vh',width:'100%'}" ref="myEchart"></div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import echarts, {EChartOption} from 'echarts';
  import axios from 'axios';

  @Component({
    name: 'EchartsMap',
  })
  export default class extends Vue {
    private chart: null = null;

    private mounted() {
      this.chinaConfigure();
    }

    private chinaConfigure() {
      const myChart = echarts.init(this.$refs.myEchart as any);
      (window as any).onresize = myChart.resize;
      window.addEventListener('resize', (myChart as any).resize);

      myChart.on('click', (params: any) => {
        const p = params;
      });

      axios.get('https://geo.datav.aliyun.com/areas/bound/100000_full.json').then((data) => {
        echarts.registerMap('china', data.data);

        const series: any[] = [
          {
            name: '香港18区人口密度',
            type: 'map',
            map: 'china',
            label: {
              show: true,
            },
          },
        ];
        myChart.setOption({
          series,
        } as EChartOption<EChartOption.SeriesBar>);
      });
    }
  }
</script>
