<template>
  <div class="exp">
    <p class="experience-type">试用演示：{{msg}}</p>
    <div class="container">
      <p class="title">请上传测试视频</p>
      <div class="operation">
        <el-upload class="upload-demo"
                   action="http://101.132.116.42/test_php/upload_file.php"
                   multiple
                   name="upfile"
                   :on-error="handleError"
                   :on-success="handleSuccess"
                   :file-list="fileList">
          <el-button size="small"
                     style="display:none"
                     slot="trigger"
                     type="primary">点击上传</el-button>
          <el-button size="small"
                     type="primary">点击上传</el-button>
          <el-button style="margin-left: 10px;"
                     size="small"
                     type="success"
                     @click="analyse">开始识别</el-button>
        </el-upload>
        <el-row class="vedio">
          <el-col :span="12">
            <p>原始视频</p>
            <video :src="vedio"
                   controls="true"
                   class="v"
                   playsinline="true"
                   style="object-fit:fill"
                   webkit-playsinline="true"
                   x-webkit-airplay="allow"
                   x5-video-player-fullscreen="true"
                   x5-video-player-type="h5"></video>
          </el-col>
          <el-col :span="12">
            <p>检测结果</p>
            <video :src="vedioR"
                   controls="true"
                   class="v"
                   playsinline="true"
                   style="object-fit:fill"
                   webkit-playsinline="true"
                   x-webkit-airplay="allow"
                   x5-video-player-fullscreen="true"
                   x5-video-player-type="h5"></video>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import flame from "@/assets/media/test_flame.mp4";
  import smoke from "@/assets/media/test_smoke_1.mp4";
  import flameR from "@/assets/media/result_test_flame.mp4";
  import smokeR from "@/assets/media/result_test_smoke_1.mp4";
  export default {
    name: "Experience",
    data() {
      return {
        vedio: "",
        vedioR: "",
        msg: "",
        fileList: []
      };
    },
    methods: {
      handleError(err, file, fileList) {
        console.log(err);
      },
      handleSuccess(res, file, fileList) {
        console.log(res);
      },
      analyse() {}
    },
    created() {
      if (this.$route.query.type == 1) {
        this.msg = "火焰识别";
        this.vedio = flame;
        this.vedioR = flameR;
      } else if (this.$route.query.type == 2) {
        this.msg = "烟雾识别";
        this.vedio = smoke;
        this.vedioR = smokeR;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style lang="less" scoped>
  .exp {
    width: 1280px;
    margin: 0 auto;
    text-align: left;
    color: #8b8b8b;
    .experience-type {
      line-height: 60px;
      font-size: 18px;
      margin-left: 50px;
    }
    .container {
      margin: 0 50px;
      min-height: 350px;
      border: 1px solid #ebebeb;
      background: #ffffff;
      border-radius: 5px;
      .title {
        background: #f5f5f5;
        height: 56px;
        border-bottom: 1px solid #e3e3e3;
        color: #333333;
        line-height: 56px;
        padding-left: 20px;
        font-size: 16px;
        margin: 0px;
      }
      .operation {
        padding: 20px 10px;
        .vedio {
          text-align: center;
          margin-top: 20px;
          .v {
            margin: 0 auto;
            width: 90%;
          }
        }
      }
    }
  }
</style>
