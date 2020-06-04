import {Vue, Component} from 'vue-property-decorator';

@Component
export default class DesignMixin extends Vue {
  public isEdit: boolean = false;

  public setIsEdit() {
    this.$emit('reset');
    this.isEdit = true;
  }
}
