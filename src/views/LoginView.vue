<template>
  <div class="login-page">
    <el-card class="login-card">
      <div class="logo-wrapper">
        <img src="../assets/companylogo.png" alt="PSBC Logo" width="80%">
      </div>
      <el-form class="form" :model="form" :rules="rules" ref="loginForm">

        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>

        <el-form-item prop="idCard">
          <el-input v-model="form.idCard" placeholder="请输入身份证号"></el-input>
        </el-form-item>


        <el-form-item prop="phoneNumber" class="phone-item">
          <!-- <el-select v-model="form.phoneCode" slot="prepend" placeholder="+86" class="phone-select">
              <el-option label="+86" value="86"></el-option>
            </el-select> -->

          <el-select v-model="value" placeholder="请选择" class="phone-select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-input v-model="form.phoneNumber" placeholder="请输入手机号" class="phone-input"></el-input>
        </el-form-item>

        <el-form-item prop="verificationCode" class="code-item">
          <el-input v-model="form.verificationCode" placeholder="请输入短信验证码" class="code-input"></el-input>
          <el-button class="code-btn" :disabled="disableCodeButton" @click="getCode">{{ codeButtonLabel }}</el-button>
        </el-form-item>

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
        idCard: '',
        phoneCode: '86',
        phoneNumber: '',
        verificationCode: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        idCard: [
          { required: true, message: '请输入身份证号', trigger: 'blur' }
        ],
        phoneNumber: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' }
        ]
      },
      disableCodeButton: false,
      codeButtonLabel: '获取验证码',
      disableSubmitButton: true,
      options: [{
        value: '+86(中国大陆)',
        label: '+86(中国大陆)'
      }, {
        value: '选项1',
        label: '黄金糕'
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
    submitForm() {
      // TODO: 实现提交表单的逻辑
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
  