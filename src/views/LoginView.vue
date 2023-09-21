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

         <!-- <el-form-item>
              <el-button type="primary" :disabled="disableSubmitButton" @click="submit" class="loginbtn">立即</el-button>
        </el-form-item> -->


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
      phoneCode: '86',
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        idNo: [
          { required: true, message: '请输入身份证号', trigger: 'blur' }
        ],
        mobileNo: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
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
    getCode() {
      // TODO: 实现获取短信验证码的逻辑
      this.disableCodeButton = true
      this.codeButtonLabel = '60s后重试'
      setTimeout(() => {
        this.disableCodeButton = false
        this.codeButtonLabel = '获取验证码'
      }, 60000)
    },
    // submit(){
    //     this.$router.push('/recommend');
    // },
    submitForm() {
        this.$router.push('/recommend');
        this.$http.post("https://9ea732a8-8108-4055-8829-c72710d139ee.mock.pstmn.io/login", this.form).then((resp) => {
        console.log(resp);
        let data = resp.data.data;
        let userName = data.userName;
        let shareId = data.shareId;

        console.log(userName);
        console.log(shareId);

         

        // 把参数也传入进去，进入分享二维码页面
        // this.$router.push()
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
  