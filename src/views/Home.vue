<template>
  <div>
    <HTitle>
      {{msg}}
    </HTitle>
  </div>
</template>


<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import HTitle from '../components/HTitle.vue';

  @Component({
    components: {
      HTitle,
    },
  })
  export default class Home extends Vue {
    private msg: string = 'hello world!';
  }

</script>

<style>
  .hello {
    font-size: 30px;
  }

  #svg {
    background: #ccc;
    width: 500px;
    height: 250px;
  }

  path {
    fill: none;
    stroke: #4682b4;
    stroke-width: 2
  }
</style>
