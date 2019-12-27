<template>
  <div class="main-box">
    <div ref="barChartSimple"></div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import {select, Selection} from 'd3-selection';
  import {scaleLinear, scaleBand, ScaleBand, ScaleLinear} from 'd3-scale';
  import {max, ticks, range} from 'd3-array';
  import {axisBottom, axisLeft} from 'd3-axis';
  import {easeBounceInOut} from 'd3-ease';
  import {transition} from 'd3-transition';

  interface DataType {
    letter: string;
    frequency: number;
  }

  @Component
  export default class SimpleBarChart extends Vue {
    private data: DataType[] = [
      {letter: '一', frequency: 0.08167},
      {letter: '二', frequency: 0.13492},
      {letter: '三', frequency: 0.02782},
      {letter: '四', frequency: 0.04253},
      {letter: '五', frequency: 0.12702},
      {letter: '六', frequency: 0.02288},
      {letter: '日', frequency: 0.22288},
    ];
    private containerWidth!: number;
    private containerHeight: number = 500;
    private margin = {
      top: 80,
      right: 20,
      bottom: 30,
      left: 60,
    };
    private barWidth!: number;
    private height!: number;
    private width!: number;
    private svg!: Selection<SVGSVGElement, unknown, null, undefined>;
    private g!: Selection<SVGGElement, unknown, null, undefined>;
    private x!: ScaleBand<string>;
    private y!: ScaleLinear<number, number>;

    private mounted() {
      this.containerWidth = (this.$refs.barChartSimple as HTMLElement).offsetWidth;
      this.width = this.containerWidth - this.margin.left - this.margin.right;
      this.height = this.containerHeight - this.margin.top - this.margin.bottom;

      this.svg = select(this.$refs.barChartSimple as HTMLElement)
        .append('svg')
        .attr('width', this.containerWidth)
        .attr('height', this.containerHeight);

      this.g = this.svg.append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

      this.drawAxisBottom();
      this.drawAxisLeft();
      this.drawBgPillar();
      this.drawPillar();
    }

    private drawAxisBottom() {
      // 构建一个分段比例尺
      this.x = scaleBand()
        .rangeRound([0, this.width])
        .padding(0.1).domain(
          this.data.map((d: DataType) => {
            return d.letter;
          }),
        );

      this.g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(axisBottom(this.x));
    }

    private drawAxisLeft() {
      this.y = scaleLinear()
        .rangeRound([this.height, 0])
        .domain([
          0,
          max(this.data, (d: any) => {
            return d.frequency;
          }),
        ]);

      this.g.append('g')
        .attr('class', 'axis axis--y')
        .call(axisLeft(this.y).ticks(10, '%'))
        .append('text')
        .attr('y', -16)
        .attr('dy', '.71em')
        .style('text-anchor', 'middle')
        .style('fill', '#fff')
        .text('空置率 (%)');
    }

    private drawBgPillar() {
      this.barWidth = (this.width / this.data.length) * 0.9; // 用于绘制每条柱
      const stepArray = ticks(0, max(this.data, (d: { frequency: any; }) => d.frequency), 10); // 用于生成背景柱
      const colors = ['#ccc', '#ddd']; // 用于生成背景柱

      this.g.append('g') // 设置背景柱
        .attr('class', 'bar--bg-bar')
        .selectAll('rect')
        .data(range(stepArray.length - 1))
        .enter()
        .append('rect')
        .attr('stroke', 'none')
        .attr('stroke-width', 0)
        .attr('fill', (d: any, i: number) => {
          return colors[i % 2];
        })
        .attr('x', 1)
        .attr('width', this.width)
        .attr('height', (d: any, i: number) => {
          return this.y(stepArray[i]) - this.y(stepArray[i + 1]);
        })
        .attr('y', (d: any, i: number) => {
          return this.y((i + 1) * stepArray[1]);
        });
    }

    private drawPillar() {
      this.g.selectAll('.bar') // 画柱图
        .data(this.data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('fill', '#8a2be2')
        .attr('x', (d: { letter: string; }) => {
          return Number(this.x(d.letter));
        })
        .attr('y', this.height)
        .attr('width', this.x.bandwidth())
        .attr('height', 0);

      transition().selectAll('.bar')
        .duration(200)
        .ease(easeBounceInOut)
        .delay((d, i) => {
          return i * 200;
        })
        .attr('y', (d: any) => {
          return this.y(d ? d.frequency : 0);
        })
        .attr('height', (d: any) => {
          return this.height - this.y(d ? d.frequency : 0);
        });

      this.g.append('g') // 输出柱图上的数值
        .attr('class', 'bar--text')
        .selectAll('text')
        .data(this.data)
        .enter()
        .append('text')
        .attr('fill', 'orange')
        .attr('font-size', '14px')
        .attr('text-anchor', 'middle')
        .attr('x', (d: { letter: string; }) => {
          return Number(this.x(d.letter));
        })
        .attr('y', (d: { frequency: number | { valueOf(): number; }; }) => {
          return this.y(d.frequency);
        })
        .attr('dx', this.barWidth / 2)
        .attr('dy', '1em')
        .text((d: { frequency: number; }) => {
          return (d.frequency * 100).toFixed(2) + '%';
        });

      this.svg
        .append('g') // 输出标题
        .attr('class', 'bar--title')
        .append('text')
        .attr('fill', '#000')
        .attr('font-size', '16px')
        .attr('font-weight', '700')
        .attr('text-anchor', 'middle')
        .attr('x', this.containerWidth / 2)
        .attr('y', 20)
        .text('本周酒店房间空置率');
    }

  }

</script>
