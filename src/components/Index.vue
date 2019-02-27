<template>
  <div class="container">
    <img src="../assets/bg.png"
         class="bg" />
    <el-row class="main">
      <el-col :span="15">
        <div class="grid-content">
          <el-carousel :interval="40000"
                       @change="change"
                       type="card"
                       height="450px">
            <el-carousel-item v-for="(item,index) in imgList"
                              :key="index">
              <img :src="item" />
            </el-carousel-item>
          </el-carousel>
          <br />
          <el-button type="primary"
                     @click="goExp">免费体验</el-button>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content result">
          <p class="title">分析结果</p>
          <el-row class="img"
                  :gutter="20">
            <el-col :span="8"
                    v-for="(item,index) in resultImgList"
                    :key="index">
              <img :src="item" />
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import img1 from "@/assets/1.png";
  import img2 from "@/assets/2.png";
  import img3 from "@/assets/3.png";
  import img4 from "@/assets/4.png";
  import img_1 from "@/assets/_1.png";
  import img_2 from "@/assets/_2.png";
  import img_3 from "@/assets/_3.png";
  import img_4 from "@/assets/_4.png";
  import img1_1 from "@/assets/1-1.png";
  import img2_1 from "@/assets/2-1.png";
  import img3_1 from "@/assets/3-1.png";
  import img3_2 from "@/assets/3-2.png";
  import img4_1 from "@/assets/4-1.png";
  import img4_2 from "@/assets/4-2.png";
  import img4_3 from "@/assets/4-3.png";
  export default {
    name: "Index",
    data() {
      return {
        index: 0,
        orginImg: [img1, img2, img3, img4],
        selectedImg: [img_1, img_2, img_3, img_4],
        imgList: [img_1, img2, img3, img4],
        list: [[img1_1], [img2_1], [img3_1, img3_2], [img4_1, img4_2, img4_3]],
        resultImgList: [img1_1]
      };
    },
    watch: {
      index(newVal, oldVal) {
        this.imgList.splice(oldVal, 1, this.orginImg[oldVal]);
        this.imgList.splice(newVal, 1, this.selectedImg[newVal]);
        this.resultImgList = this.list[newVal];
      }
    },
    methods: {
      change(index) {
        this.index = index;
      },
      goExp() {
        this.$router.push("./experience");
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
