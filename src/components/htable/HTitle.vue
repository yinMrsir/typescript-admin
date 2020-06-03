<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  interface Style {
    [propName: string]: string;
  }

  @Component({
    name: 'HTitle',
  })
  export default class extends Vue {
    @Prop({default: 1}) private level!: number;
    private $style!: Style;

    private render(createElement: Vue.CreateElement) {
      return createElement(
        'h' + this.level,
        {
          class: this.$style['title' + this.level],
        },
        this.$slots.default,
      );
    }
  }
</script>

<style lang="scss" module>
  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
  }

  .title1 {
    color: #0E0B3E;
    height: 65px;
    font-size: 18px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 20px;

    &:after {
      content: '';
      width: 6px;
      height: 40px;
      background: rgba(139, 87, 241, 1);
      border-radius: 0 6px 6px 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    &:before {
      content: '';
      height: 1px;
      background: #EAEAEA;
      left: 20px;
      right: 0;
      bottom: 0;
      position: absolute;
    }
  }

  .title2 {
    color: #0E0B3E;
    height: 65px;
    font-size: 18px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 20px;

    &:after {
      content: '';
      width: 6px;
      height: 40px;
      background: #1A8DFF;
      border-radius: 0 6px 6px 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    &:before {
      content: '';
      height: 1px;
      background: #EAEAEA;
      left: 20px;
      right: 0;
      bottom: 0;
      position: absolute;
    }
  }

  .title3 {
    color: #0E0B3E;
    height: 65px;
    font-size: 18px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 20px;

    &:before {
      content: '';
      height: 1px;
      background: #EAEAEA;
      left: 20px;
      right: 0;
      bottom: 0;
      position: absolute;
    }
  }

  .title4 {
    color: #333;
    height: 65px;
    font-size: 16px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-weight: normal;

    &:before {
      content: '';
      height: 1px;
      background: #EAEAEA;
      left: 20px;
      right: 0;
      bottom: 0;
      position: absolute;
    }
  }

  .title5 {
    color: #0E0B3E;
    height: 56px;
    font-size: 18px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 20px;

    &:before {
      content: '';
      height: 1px;
      background: #D1E4FE;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
    }

    &:after {
      content: '';
      width: 6px;
      height: 22px;
      background: #0086D9;
      border-radius: 3px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
