<template>
  <div class="star-login">
    <h1>登录</h1>
    <div class="login-wraper">
      <div class="avatar" :style="`background-image: url(${avatar})`">
      </div>
      <div class="input-group">
        <label for="username">账号</label><input type="text" id="username" v-model="username">
      </div>
      <div class="input-group input-group-panel">
        <label for="userpwd">密码</label><input type="password" id="userpwd" v-model="userpwd">
      </div>
      <p class="forgot-pwd">忘记密码</p>
      <div class="sign" @click="login">登录</div>
    </div>
    <p class="register" @click="register">新用户？点击这里注册</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      userpwd: '',
      avatar: require('./../assets/images/raw_1512446140.jpeg')
    }
  },
  methods: {
    login () {
      if (this.username.trim() === '' || this.userpwd.trim() === '') {
        this.$toast('账号或密码不能为空！')
        return
      }
      this.$http({
        method: 'post',
        url: 'http://localhost:3000/users/userLogin',
        data: {
          username: this.username.trim(),
          userpwd: this.userpwd.trim()
        }
      })
        .then((res) => {
          console.log(res)
          if (res.data.code === '200') {
            sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))
            this.$toast('登录成功')
            this.$router.push({path: '/'})
          } else {
            this.$toast(res.data.mess)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    register () {
      this.$router.replace({path: '/register'})
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
    height: 10.773333*37.5px;
    margin-top: 1.706667*37.5px;
    border-radius: 0.266667*37.5px;
    box-shadow: 0 0 0.533333*37.5px 0 rgba(170, 170, 170, 1);
    border: 1px solid rgba(187, 187, 187, 1);
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
    .forgot-pwd{
        margin:10px auto .56*37.5px 1.973333*37.5px;
        height: .613333*37.5px;
        line-height: .453333*37.5px;
        opacity: 0.3;
        color: rgba(16, 16, 16, 1);
        font-size: .32*37.5px;
        font-family: Arial;
    }
    .sign{
        margin: 0 auto;
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
    margin-top: 2.16*37.5px;
    line-height: 0.613333*37.5px;
    opacity: 0.3;
    color: rgba(16, 16, 16, 1);
    font-size: 0.373333*37.5px;
    text-align: center;
    font-family: Arial;
  }
}
</style>
