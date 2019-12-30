<template>
  <div ref="mapChart">
    <div id="svg"></div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import {changsha} from '@/data/changsha';
  import * as d3 from 'd3';

  @Component({
    name: 'MapChart',
  })
  export default class extends Vue {
    private width: number = 0;
    private height: number = 800;

    private mounted() {
      this.width = (this.$refs.mapChart as HTMLElement).offsetWidth;
      const svg = d3.select('#svg')
        .append('svg')
        .attr('width', this.width + 'px')
        .attr('height', this.height + 'px');

      /*
       * 创建一个地理投影
       * .center 设置投影中心位置
       * .scale 设置缩放系数
       *
       */
      const projection = d3.geoMercator()
        .center([112, 28])
        .scale(30000)
        .translate([this.width / 5, this.height / 1.5]);

      //  创建路径生成器path
      const path: any = d3.geoPath().projection(projection);

      //  获取GeoJSON数据：这里我放在了js中方便加载
      const features = changsha.features;

      // 设置颜色值
      const ss2 = d3.schemeSet2;
      const sp2 = d3.schemePastel2;

      /*
       * 渲染地图
       *
       * mouseover 鼠标移入变色
       *
       */
      svg.append('g')
        .attr('class', 'map')
        .selectAll('.china')
        .data(features)
        .join('path')
        .attr('class', 'china')
        .attr('fill', (d, i) => {
          return ss2[i % 3];
        })
        .attr('d', path)
        .on('mouseover', function(d, i) {
          d3.select(this)
            .attr('fill', sp2[i % 3]);
        })
        .on('mouseout', function(d, i)  {
          d3.select(this)
            .attr('fill', ss2[i % 3]);
        });
    }
  }
</script>
