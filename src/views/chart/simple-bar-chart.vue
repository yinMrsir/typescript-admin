<template>
  <div id="bar-chart--simple">
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import {select, selectAll} from 'd3-selection';
  import {scaleLinear} from 'd3-scale';

  @Component
  export default class SimpleBarChart extends Vue {
    private data: number[] = [1, 4, 7, 9, 6, 5];
    private barHeight: number = 50;
    private barPadding: number = 10;
    private svgHeight: number = (this.barHeight + this.barPadding) * this.data.length;
    private svgWidth: number = 500;

    mounted() {
      const svg = select('#bar-chart--simple')
        .append('svg')
        .attr('width', this.svgWidth)
        .attr('height', this.svgHeight);

      const bar = svg.selectAll('g')
        .data(this.data)
        .enter()
        .append('g')
        .attr('transform', (d, i) => {
          return 'translate(0, ' + i * (this.barHeight + this.barPadding) + ')';
        });

      bar.append('rect')
        .attr('width', d => d)
        .attr('height', this.barHeight)
        .style('fill', '#0086d9');
    }

    scale() {

    }
  }

</script>
