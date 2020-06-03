<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="home-item-box">
          <HTitle :level="5">
            <div class="title-top">题库情况统计 <span class="title-right" v-html="'题量：45道'"></span>
            </div>
          </HTitle>
          <el-row>
            <el-col :span="12">
              <QuestionType className="mt20"></QuestionType>
            </el-col>
            <el-col :span="12">
              <QuestionDiff className="mt20"></QuestionDiff>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <UserTotal></UserTotal>
      </el-col>
      <el-col :span="12">
        <PointTotal></PointTotal>
      </el-col>
      <el-col :span="12">
        <RedpackTotal></RedpackTotal>
      </el-col>
      <el-col :span="24">
        <div class="home-item-box">
          <HTitle :level="5">考试情况
          </HTitle>
          <el-row :gutter="10">
            <el-col :span="7">
              <Problem ref="problem"></Problem>
            </el-col>
            <el-col :span="10">
              <ExamineeScores></ExamineeScores>
            </el-col>
            <el-col :span="7">
              <Areal></Areal>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import QuestionType from '@/views/components/QuestionType.vue';
  import QuestionDiff from '@/views/components/QuestionDiff.vue';
  import UserTotal from '@/views/components/UserTotal.vue';
  import PointTotal from '@/views/components/PointTotal.vue';
  import RedpackTotal from '@/views/components/RedpackTotal.vue';
  import Problem from '@/views/components/Problem.vue';
  import ExamineeScores from '@/views/components/ExamineeScores.vue';
  import Areal from '@/views/components/Areal.vue';
  import HTitle from '@/components/htable/HTitle.vue';

  @Component({
    name: 'Home',
    components: {
      QuestionType,
      HTitle,
      QuestionDiff,
      UserTotal,
      PointTotal,
      RedpackTotal,
      Problem,
      ExamineeScores,
      Areal,
    },
  })
  export default class extends Vue {
  }
</script>

<style lang="scss">
  .home {
    padding: 25px;

    .title-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .title-right {
        font-size: 15px;
        color: #333;
        font-weight: normal;
      }
    }

    .home-item-box {
      background: #fff;
      padding: 0 30px;
      width: 100%;
      height: 437px;
      box-shadow: 0 2px 8px 0 rgba(167, 204, 255, 0.8);
      border-radius: 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
      position: relative;
    }

    .home-bottom-title {
      font-size: 18px;
      color: #0E0B3E;
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      padding: 20px 18px 0;
    }
  }

  .mt20 {
    margin-top: 20px;
  }
</style>
