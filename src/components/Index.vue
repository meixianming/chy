<template>
  <div class="container">
    <el-row class="main">
      <p class="title">识别火焰</p>
      <el-col :span="15">
        <div class="grid-content">
          <el-carousel :interval="40000"
                       @change="changeFlame"
                       type="card"
                       height="450px">
            <el-carousel-item v-for="(item,index) in flameList"
                              :key="index">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
          <br />
          <el-button type="primary"
                     @click="goExp(1)">免费体验</el-button>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content result">
          <p class="title">分析结果</p>
          <el-row class="img"
                  :gutter="20">
            <el-col :span="8">
              <img :src="flameResult" />
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row class="main">
      <p class="title">烟雾识别</p>
      <el-col :span="15">
        <div class="grid-content">
          <el-carousel :interval="40000"
                       @change="changeSmoke"
                       type="card"
                       height="450px">
            <el-carousel-item v-for="(item,index) in smokeList"
                              :key="index">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
          <br />
          <el-button type="primary"
                     @click="goExp(2)">免费体验</el-button>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content result">
          <p class="title">分析结果</p>
          <el-row class="img"
                  :gutter="20">
            <el-col :span="8">
              <img :src="smokeResult" />
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import flame1 from "@/assets/img/flame_1.png";
  import flame1R from "@/assets/img/flame_1_r.png";
  import flame2 from "@/assets/img/flame_2.png";
  import flame2R from "@/assets/img/flame_2_r.png";
  import flame3 from "@/assets/img/flame_3.png";
  import flame3R from "@/assets/img/flame_3_r.png";
  import flame4 from "@/assets/img/flame_4.png";
  import flame4R from "@/assets/img/flame_4_r.png";
  import somke1 from "@/assets/img/smoke1.png";
  import smoke1R from "@/assets/img/smoke1_r.png";
  import somke2 from "@/assets/img/smoke2.png";
  import smoke2R from "@/assets/img/smoke2_r.png";
  import somke3 from "@/assets/img/smoke3.png";
  import smoke3R from "@/assets/img/smoke3_r.png";
  export default {
    name: "Index",
    data() {
      return {
        flameIndex: 0,
        smokeIndex: 0,
        flameList: [flame1, flame2, flame3, flame4],
        smokeList: [somke1, somke2, somke3],
        flameResultList: [flame1R, flame2R, flame3R, flame4R],
        flameResult: flame1R,
        smokeResultList: [smoke1R, smoke2R, smoke3R],
        smokeResult: smoke1R
      };
    },
    watch: {
      flameIndex(newVal) {
        this.flameResult = this.flameResultList[newVal];
      },
      smokeIndex(newVal) {
        this.smokeResult = this.smokeResultList[newVal];
      }
    },
    methods: {
      changeFlame(index) {
        this.flameIndex = index;
      },
      changeSmoke(index) {
        this.smokeIndex = index;
      },
      goExp(index) {
        this.$router.push({
          path: "./experience",
          query: {
            type: index
          }
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style lang="less" scoped>
  .container {
    // border-top: 2px solid #9e010c;
    background: rgba(62, 62, 62, 0.7);
    width: 1280px;
    margin: 0 auto;
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .main {
      color: #fff;
      padding: 50px 0px;
      border-bottom: 1px solid #4c4c4c;
      .el-col {
        position: relative;
        .result {
          width: 400px;
          height: 500px;
          padding: 10px;
          margin-left: 48px;
          border: 1px solid #979797;
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>
