<template>
  <div>
    <h1>登录界面</h1>
    用户名：<Input name="username"  ref="username"/><br/>
    密码：<Input type="password" ref="password"  /><br/>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      var s = this.$refs.username.value
      var password = this.$refs.password.value
      console.log(s)
      console.log(password)
      console.log(' ====== ')

      window.sessionStorage.setItem('access-token', 'aaa')
      this.$router.replace('/')
    }
  }
}

</script>
