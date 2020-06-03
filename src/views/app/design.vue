<template>
  <div class="main-box-two">
    <HTitle>编辑微页面</HTitle>
    <div class="design-box">
      <div class="design-preview">
        <DesignTitle></DesignTitle>
        <DesignSwipe></DesignSwipe>
        <DesignSearch></DesignSearch>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import HTitle from '@/components/htable/HTitle.vue';
  import DesignTitle from '@/views/app/component/design/DesignTitle.vue';
  import DesignSwipe from '@/views/app/component/design/DesignSwipe.vue';
  import DesignSearch from '@/views/app/component/design/DesignSearch.vue';

  @Component({
    components: {
      HTitle,
      DesignTitle,
      DesignSwipe,
      DesignSearch,
    },
  })
  export default class Design extends Vue {
  }
</script>

<style lang="scss">
  .design-box {
    padding: 10px;

    .design-preview {
      border: 1px solid #e5e5e5;
      width: 320px;
      min-height: 450px;
      position: relative;
    }

    .zent-design-editor-item {
      position: absolute;
      left: 100%;
      top: 0;
      padding: 12px 10px;
      min-height: 28px;
      background: #f8f8f8;
      border-radius: 5px;
      border: 1px solid #e5e5e5;
      width: 420px;
      margin-left: 20px;
      font-size: 12px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      z-index: 5;

      &:after, &:before {
        right: 100%;
        top: 20px;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }

      &:before {
        border-color: transparent;
        border-right-color: #e5e5e5;
        border-width: 7px;
        margin-top: -7px;
      }

      &:after {
        border-color: transparent;
        border-right-color: #f8f8f8;
        border-width: 6px;
        margin-top: -6px;
      }
    }
  }

  .zent-design-preview-controller {
    &:hover:before {
      opacity: .5;
    }

    &:before, &:hover:before {
      z-index: 2;
      display: block;
      border: 1px dashed #38f;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      pointer-events: none;
      display: none;
    }

    .zent-design-preview-controller__action-btn-delete {
      position: absolute;
      top: -10px;
      right: -10px;
      z-index: 15;
      font-size: 0;
      line-height: 0;
      cursor: pointer;
      background: #ccc;
      border-radius: 50%;
      display: none;
      width: 20px;
      height: 20px;

      i {
        color: #fff;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        width: 20px;
        height: 20px;
      }
    }

    &:hover .zent-design-preview-controller__action-btn-delete{
      display: inline-block;
    }
  }
</style>
