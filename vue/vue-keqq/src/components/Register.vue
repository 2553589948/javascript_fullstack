<template>
  <div class="star-login">
        <h1>注册</h1>
        <div class="login-wraper">
            <div class="avatar" :style="`background-image:url(${avatar})`"></div>
            <div class="input-group">
                <label for="nickname">昵称</label><input type="text" id="nickname" v-model="nickname">
            </div>
            <div class="input-group input-group-panel">
                <label for="username">账号</label><input type="text" id="username" v-model="username">
            </div>
            <div class="input-group input-group-panel">
                <label for="userpwd">密码</label><input type="password" id="userpwd" v-model="userpwd">
            </div>
            <div class="sign" @click="register">注册</div>
            <span class="badge-img">+</span>
        </div>
        <p class="register" @click="login">已经有账号了？点击登录</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      avatar: require('./../assets/images/raw_1512446140.jpeg'),
      nickname: '',
      username: '',
      userpwd: ''
    }
  },
  methods: {
    register () {
      // if (this.nickname.trim() === '' || this.username.trim() === '' || this.userpwd.trim() === '') {
      //   this.$toast('昵称、账号或者密码不能为空')
      // }
      // this.$http({
      //   method: 'post',
      //   url: 'http://localhost:3000/users/userRegister',
      //   data: {
      //     nickname: this.nickname.trim(),
      //     username: this.username.trim(),
      //     userpwd: this.userpwd.trim()
      //   }
      // })
      // .then((res) => {
      //   console.log(res)
      //   if(res.data.code === '200') {
      //     this.$router.push({path: '/StarLogin'})
      //   } else {
      //     this.$toast(res.data.mess)
      //   }
      // })
    },
    login () {
      this.$router.replace({path: '/login'})
    }
  }
}
</script>

<style lang="less" scoped>
input {
  border: 0;
  outline: none;
}
.star-login {
  width: 100vw;
  height: 100vh;
  background: #fff;
  padding: 0 1.28*37.5px;
  overflow: hidden;
  box-sizing: border-box;
  h1 {
    margin-top: 1.12*37.5px;
    height: 0.693333*37.5px;
    line-height: 0.693333*37.5px;
    color: rgba(16, 16, 16, 1);
    font-size: 0.48*37.5px;
    text-align: center;
    font-family: Arial;
  }
  .login-wraper {
    width: 7.44*37.5px;
    height: 11.413333*37.5px;
    margin-top: 1.706667*37.5px;
    border-radius: 0.266667*37.5px;
    box-shadow: 0 0 0.533333*37.5px 0 rgba(170, 170, 170, 1);
    border: 1px solid rgba(187, 187, 187, 1);
    position: relative;
    overflow: hidden;
    .avatar {
      width: 2.4*37.5px;
      height: 2.4*37.5px;
      margin: 1.093333*37.5px auto 0.773333*37.5px;
      border-radius: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .badge-img{
      position: absolute;
      width: 1.2*37.5px;
      height: 1.2*37.5px;
      line-height: 1.2*37.5px;
      left: 4.266667*37.5px;
      top: 2.453333*37.5px;
      color: rgba(16, 16, 16, 0.5);
      text-align: center;
    }
    .input-group {
      width: 5.546667*37.5px;
      height: 1.226667*37.5px;
      line-height: 1.226667*37.5px;
      display: flex;
      margin: 0 auto;
      opacity: 0.5;
      border-radius: 0.533333*37.5px;
      border: 1px solid rgba(187, 187, 187, 1);
      padding-left: 0.533333*37.5px;
      label {
        display: inline-flex;
        // flex: 1;
        width: 0.96*37.5px;
        opacity: 0.3;
        color: rgba(16, 16, 16, 1);
        font-size: 0.373333*37.5px;
        font-family: Arial;
      }
      input {
        display: inline-block;
        width: 100%;
        border-radius: 0.533333*37.5px;
        padding-left: 10px;
        font-size: 0.373333*37.5px;
      }
    }
    .input-group-panel {
      margin-top: 10px;
    }
    .sign{
        margin: .8*37.5px auto 0;
        width: 5.546667*37.5px;
        height: 1.226667*37.5px;
        line-height: 1.226667*37.5px;
        border-radius: .533333*37.5px;
        background-color: rgba(51, 54, 67, 1);
        text-align: center;
        left: 169px;
        opacity: 0.8;
        color: rgba(255, 255, 255, 1);
        font-size: .48*37.5px;
        font-family: Arial;
    }
  }
  .register {
    height: 0.613333*37.5px;
    margin-top: 1.52*37.5px;
    line-height: 0.613333*37.5px;
    opacity: 0.3;
    color: rgba(16, 16, 16, 1);
    font-size: 0.373333*37.5px;
    text-align: center;
    font-family: Arial;
  }
}
</style>
