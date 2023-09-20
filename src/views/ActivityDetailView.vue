<template>
  <div>
    <div class="root">
      <el-select v-model="selectedCity" class="address-select" placeholder="请选择地址">
        <el-option label="北京" value="北京"></el-option>
        <el-option label="上海" value="上海"></el-option>
        <el-option label="广州" value="广州"></el-option>
        <el-option label="合肥" value="合肥"></el-option>
      </el-select>
      <button class="recommend-button" @click="goToLogin">立刻推荐</button>
      <button class="rules-button" @click="showRules">活<br>动<br>细<br>则</button>
    </div>

    <el-dialog :visible.sync="dialogVisible" title="活动细则" width="80%">
      <div v-html="rulesContent"></div>
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
      selectedCity: '北京',
      dialogVisible: false,
      rulesContent: ''
    }
  },
  methods: {
    goToLogin() {
      console.log("go to login ...");
      this.$router.push('/login');
    },
    showRules() {
      // 发送 AJAX 请求获取活动细则信息
      // fetch('/api/rules')
      //   .then(response => response.text())
      //   .then(data => {
      //     // 将活动细则信息保存到组件数据中
      //     this.rulesContent = data
      //     // 打开弹窗
      //     this.dialogVisible = true
      //   })
      //   .catch(error => console.error(error))

      this.rulesContent = "1. 参与条件：推荐人需为我行信用卡用户，持有至少一张我行信用卡，卡片状态正常，且不在黑名单中。2. 参与方法：推荐人点击“立即推荐”生成推荐二维码，被推荐人扫码跳转办卡页面，图片可保存，二维码在活动中有效期为30天，过期需在活动页面重新生成。\n3. 注意事项：活动参与地区为生成二维码时所在地区的活动，活动结束后二维码失效，新活动上线后需要重新生成。4. 奖励领取条件：新客户开卡成功后，完成激活首刷，即可领取。"
      this.dialogVisible = true;
    }
  }
}
</script>

<style>
.root {
  width: 100%;
  background-image: url('../assets/activitydetail.png');
  background-size: 100% auto;
  background-position: center center;
  aspect-ratio: 1125/2436;
}

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
