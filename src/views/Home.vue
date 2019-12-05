<template>
  <div>
    <div class="hello">
      {{msg}}
    </div>
    <HTitle level="1">你好！</HTitle>
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

<style scoped>
.hello{
  font-size: 30px;
}
</style>
