import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class DesignMixin extends Vue {
  @Prop({
    default: () => {
      return {
        data: {},
      };
    },
  }) public itemData!: any;
  @Prop({default: 0}) public index!: number;
  public isEdit: boolean = false;

  public setIsEdit() {
    this.$emit('reset', 'edit');
    this.isEdit = true;
  }

  public removeComponent() {
    this.$emit('reset', 'remove', this.index);
  }
}
