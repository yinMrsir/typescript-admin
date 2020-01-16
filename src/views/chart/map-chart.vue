<template>
  <div ref="mapChart">
    <div id="svg"></div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import * as d3 from 'd3';
  import axios from 'axios';

  @Component({
    name: 'MapChart',
  })
  export default class extends Vue {
    private width: number = 0;
    private height: number = 800;

    private async mounted() {
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
        .scale(500)
        .translate([this.width / 2, this.height / 2]);

      //  创建路径生成器path
      const path: any = d3.geoPath().projection(projection);

      const {data} = await axios.get('https://geo.datav.aliyun.com/areas/bound/100000_full.json');
      //  获取GeoJSON数据：这里我放在了js中方便加载
      const features = data.features;

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
        .attr('class', (d, i) => {
          return 'china' + i;
        })
        .attr('fill', '#f0f0f0')
        .attr('d', path)
        .on('mouseover', function(d, i) {
          d3.select(this)
            .attr('fill', sp2[i % 3]);
        })
        .on('mouseout', function(d, i) {
          d3.select(this)
            .attr('fill', '#f0f0f0');
        });

      svg.selectAll('text')
        .data(data.features)
        .enter().append('svg:text')
        .text((d: any, i) => {
          return d.properties.name;
        })
        .attr('fill', 'rgba(6,85,178,0.5)')
        .attr('x', (d: any) => {
          if (d.properties.centroid) {
            const local: number[] = projection([d.properties.centroid[0], d.properties.centroid[1]]) || [];
            return local[0] - 22;
          }
          return 0;
        })
        .attr('y', (d: any) => {
          if (d.properties.centroid) {
            const local: number[] = projection([d.properties.centroid[0], d.properties.centroid[1]]) || [];
            return local[1] + 5;
          }
          return 0;
        })
        .attr('fill', '#000')
        .style('font-size', '12px');
    }

  }
</script>

<style>
  path {
    stroke: #333333;
  }

  g {
    transition: all ease 0.5s;
  }
</style>
