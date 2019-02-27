<template>
  <div class="exp">
    <p class="experience-type">试用演示：骨架识别</p>
    <div class="container">
      <p class="title">请上传测试视频</p>
      <div class="operation">
        <el-upload class="upload-demo"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :before-remove="beforeRemove"
                   multiple
                   :limit="3"
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">点击上传</el-button>
          <div slot="tip"
               class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Experience",
    data() {
      return {
        fileList: [
          {
            name: "food.jpeg",
            url:
              "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          },
          {
            name: "food2.jpeg",
            url:
              "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          }
        ]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(
          `当前限制选择 3 个文件，本次选择了 ${
            files.length
          } 个文件，共选择了 ${files.length + fileList.length} 个文件`
        );
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`);
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
      }
    }
  }
</style>
