<template>
  <div class="container">
    <img src="../assets/bg.png"
         class="bg" />
    <el-row class="main">
      <el-col :span="6">
        <div class="grid-content left">
          <div class="left-content">
            <i class="el-icon-view"></i>
            <br />
            <br />
            <font>人脸识别</font>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          ff
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          ggg
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Index",
    props: {
      msg: String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style lang="less" scoped>
  .container {
    border-top: 2px solid #9e010c;
    background: rgba(62, 62, 62, 0.7);
    width: 1280px;
    margin: 0 auto;
    padding-bottom: 40px;
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
      .el-col {
        position: relative;
        height: 800px;
        .left {
          position: absolute;
          width: 190px;
          height: 240px;
          border: 1px solid #959595;
          border-radius: 5px;
          text-align: center;
          top: 50%;
          left: 50%;
          margin-top: -120px;
          margin-left: -95px;
          .left-content {
            margin-top: 80px;
          }
        }
      }
    }
  }
</style>
