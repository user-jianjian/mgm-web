<template>
  <!-- <div class="detail">
        <div class="poster-container">
          <img id = "poster" src="../assets/activitydetail.png" width="100%">
        </div>
        
        <div class="container">
          <el-button type="primary" id="advicebtn" size="medium">立即推荐</el-button>
        </div>
    </div> -->

  <div>
    <div class="root">
      <!-- <img src="../assets/activitydetail.png" alt="Poster Image" width="100%"> -->
      <button class="recommend-button" @click="goToLogin">立刻推荐</button>
      <!-- <button class="rules-button">查看规则</button> -->
      <button class="rules-button">活<br>动<br>细<br>则</button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'ActivityDetailView',
  components: {
  },
  methods: {
    goToLogin() {
      console.log("go to login ...");
      this.$router.push('/login');
    }
  }
}
</script>

<style>
/* div {
    margin: 0;
  }

  .poster-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
  }

  .container {
    position: relative;
    z-index: 100;
  }

  .container .el-button {
    position: absolute;
  } */

  .root {
    width: 100%;
    background-image: url('../assets/activitydetail.png');
    background-size: 100% auto;
    background-position: center center;
    aspect-ratio: 1125/2436;
  }

  .recommend-button {
    /* position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #007bff;
    color: #fff;
    font-size: 18px;
    border: none;
    outline: none; */

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
    /* position: fixed;
    top: 100px;
    right: 0px;
    background-color: #fff;
    color: #007bff;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    writing-mode: vertical-tb;
    text-orientation: upright; */

    /* position: fixed;
    top: 25%;
    right: 0px;
    background-color: #fff;
    color: #007bff;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    writing-mode: sideways-right;
    transform: rotate(90deg); */

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
</style>