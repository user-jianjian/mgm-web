<template>
  <div class="login-page">
    <el-card class="login-card">
      <!-- logo图案 -->
      <div class="logo-wrapper">
        <img src="../assets/companylogo.png" alt="PSBC Logo" width="80%">
      </div>

      <el-form class="form" :model="form" :rules="rules" ref="loginForm">

        <!-- 姓名 -->
        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>

        <!-- 身份证号 -->
        <el-form-item prop="idNo">
          <el-input v-model="form.idNo" placeholder="请输入身份证号"></el-input>
        </el-form-item>


        <!-- 手机号 -->
        <el-form-item prop="mobileNo" class="phone-item">
          <el-select v-model="phoneCode" placeholder="请选择" class="phone-select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-input v-model="form.mobileNo" placeholder="请输入手机号" class="phone-input"></el-input>
        </el-form-item>

        <!-- 短信验证码 -->
        <el-form-item prop="captcha" class="code-item">
          <el-input v-model="form.captcha" placeholder="请输入短信验证码" class="code-input"></el-input>
          <el-button class="code-btn" :disabled="disableCodeButton" @click="getCode">{{ codeButtonLabel }}</el-button>
        </el-form-item>

        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" :disabled="disableSubmitButton" @click="submitForm" class="loginbtn">登录</el-button>
        </el-form-item>

      </el-form>
    </el-card>
  </div>
</template>
  
<script>
export default {
  data() {
    return {

      form: {
        name: '',
        idNo: '',
        mobileNo: '',
        captcha: ''
      },

      phoneCode: '+86(中国大陆)',

      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        idNo: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          { validator: this.validateIdNo, trigger: 'blur' }
        ],
        mobileNo: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: this.validateMobileNo, trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' }
        ]
      },

      disableCodeButton: false,
      codeButtonLabel: '获取验证码',
      disableSubmitButton: false,
      options: [{
        value: '+86(中国大陆)',
        label: '+86(中国大陆)'
      }, {
        value: '+852(中国香港)',
        label: '+852(中国香港)'
      }, {
        value: '+853(中国澳门)',
        label: '+852(中国澳门)'
      }, {
        value: '+886(中国台湾)',
        label: '+886(中国台湾)'
      }],
      value: '+86(中国大陆)'
    }
  },
  methods: {


    validateIdNo(rule, value, callback) {
      if (value && !/^\d{18}$/.test(value)) {
        callback(new Error('身份证号必须是18位数字'))
      } else {
        callback()
      }
    },

    validateMobileNo(rule, value, callback) {
      if (value && !/^\d{11}$/.test(value)) {
        callback(new Error('手机号必须是11位数字'))
      } else {
        callback()
      }
    },

    getCode() {
      // TODO: 实现获取短信验证码的逻辑
      this.disableCodeButton = true
      this.codeButtonLabel = '60s后重试'
      let countDown = 60
      let timer = setInterval(() => {
        countDown--
        this.codeButtonLabel = `${countDown}s后重试`
        if (countDown === 0) {
          clearInterval(timer)
          this.disableCodeButton = false
          this.codeButtonLabel = '获取验证码'
        }
      }, 1000)
    },



    submitForm() {

      // let userName = "zhangasan";
      // this.$router.push({ name: 'recommend', params: { userName: userName } })

      let submitForm = {
        "userName": this.form.name,
        "idNo": this.form.idNo,
        "mobileNo": this.form.mobileNo,
        "moveId": this.$route.params.moveId,
      };

      this.$http.post("https://9ea732a8-8108-4055-8829-c72710d139ee.mock.pstmn.io/login", submitForm).then((resp) => {
        if (resp.data.code == "000000") {
          let data = resp.data.data;
          let userName = data.userName;
          let moveId = data.moveId;
          let shareId = data.shareId;

          // 把参数也传入进去，进入分享二维码页面
          this.$router.push({ name: 'recommend', params: { userName: userName, moveId: moveId, shareId: shareId } });
        } else {
          this.$message.error(resp.data.message);
        }
      }).catch((err) => {
        this.$message.error('oops！出错了！');
      })
    }
  }
}
</script>
  
<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.login-card {
  /* width: 400px; */
  width: 100%;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.phone-select {
  width: 40%;
}

.phone-input {
  width: 60%;
}

.code-input {
  width: 60%;
}

.code-btn {
  width: 40%;
}

.loginbtn {
  width: 100%;
  background-color: #0079fe;
}
</style>

<style>
.el-form-item::after,
.el-form-item::before {
  content: none;
}

.loginbtn>span {
  color: white !important;
}
</style>
  