<template>
  <div>
    <div class="root">

      <!-- 背景海报图片 -->
      <img :src="moveDetailsURL" width="100%">

      <!-- 地址下拉框 -->
      <el-select v-model="selectedCity" class="address-select" placeholder="请选择地址">
        <el-option label="北京" value="beijing"></el-option>
        <el-option label="合肥" value="hefei"></el-option>
        <el-option label="上海" value="shanghai"></el-option>
        <el-option label="广州" value="guangzhou"></el-option>
      </el-select>

      <!-- 立刻推荐按钮 -->
      <button class="recommend-button" @click="goToLogin">立刻推荐</button>

      <!-- 活动细则 -->
      <button class="rules-button" @click="showRules">活<br>动<br>细<br>则</button>

    </div>

    <!-- 活动细则弹出框 -->
    <el-dialog :visible.sync="dialogVisible" title="活动细则" width="80%">
      <div v-html="moveRules"></div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCity: 'beijing',
      dialogVisible: false,
      moveDetailsURL: '',
      moveRules: '',
    }
  },

  watch: {
    selectedCity(newVal, oldVal) {
      this.$http.post("https://9ea732a8-8108-4055-8829-c72710d139ee.mock.pstmn.io/getMove", {
        location: newVal
      }).then((resp) => {
        let data = resp.data.data;
        this.moveDetailsURL = data.moveDetailsURL;
        this.moveRules = this.convertTextToHtml(data.moveRules);
      })
    }
  },

  created() {
    this.$http.post("https://9ea732a8-8108-4055-8829-c72710d139ee.mock.pstmn.io/getMove", {
      location: this.selectedCity
    }).then((resp) => {
      let data = resp.data.data;
      this.moveDetailsURL = data.moveDetailsURL;
      this.moveRules = this.convertTextToHtml(data.moveRules);
    })
  },

  methods: {
    goToLogin() {
      this.$router.push('/login');
    },
    showRules() {
      this.dialogVisible = true;
    },
    convertTextToHtml(text) {
      // 将文本中的每个换行符替换为HTML换行标签和<p>标签
      const html = text.split('\n').map(paragraph => `<p>${paragraph.trim()}</p>`).join('');
      // 将所有段落字符串包含在一个<div>标签中，并删除所有空白字符
      const wrappedHtml = `<div style="text-align: left">${html.replace(/\s+/g, '')}</div>`;
      // 返回转换后的HTML
      return wrappedHtml;
    }
  }
}
</script>

<style>
.recommend-button {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #007bff;
  color: #fff;
  font-size: 18px;
  border: none;
  outline: none;
  transform: translateZ(0);
}

.rules-button {
  position: fixed;
  top: 15%;
  right: 0;

  background: linear-gradient(to bottom, #4da6ff, #0077e6);
  color: #fff;

  font-size: 16px;
  padding: 12px 5px;
  border-radius: 5px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-align: center;
  line-height: 1.3em;
  height: auto;
  width: 35px;
}


.address-select {
  width: 20%;
  border-radius: 5px;
  position: absolute !important;
  top: 2%;
  right: 2%;
}

.el-select-dropdown .el-select-dropdown__item.selected,
.el-select-dropdown .el-select-dropdown__item:hover {
  background-color: transparent;
  color: #333;
}

.el-select-dropdown__item {
  color: #333;
}
</style>
