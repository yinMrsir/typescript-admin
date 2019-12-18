import {Vue, Component} from 'vue-property-decorator';

@Component
export default class Mixin extends Vue {
  public msg: string = '';
  public mounted() {
    // tslint:disable-next-line:no-console
    console.log(this.msg);
  }
}
