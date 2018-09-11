<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="流程名字"
                    prop="name"
                    :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' }
    ]"
      >
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="流程状态"
                    prop="status"
      >
        <el-input v-model="form.status"></el-input>
      </el-form-item>
      <el-form-item label="流程描述"
                    prop="description"
      >
        <el-input v-model="form.description"></el-input>
      </el-form-item>

      <el-form-item class="delu-box">
        <el-button type="primary" @click.native.prevent="login" :loading="btnLoading"
                   style="float: left;">登录
        </el-button>
        <el-button @click.native.prevent="handleReset" style="float: right;">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<!--<script>-->
<!--export default {-->
  <!--name: 'TaskflowAdd',-->
  <!--data () {-->
    <!--return {-->
      <!--user: {-->
        <!--name: '',-->
        <!--status: '',-->
        <!--description: ''-->
      <!--},-->
      <!--rules: {-->
        <!--name: [-->
          <!--{required: true, message: '请输入用户名', trigger: 'blur'}-->
        <!--],-->
        <!--status: [-->
          <!--{required: true, message: '请输入用户名', trigger: 'blur'}-->
        <!--],-->
        <!--description: [-->
          <!--{required: true, message: '请输入登录密码', trigger: 'blur'}-->
        <!--]-->
      <!--}-->
    <!--}-->
  <!--},-->

  <!--methods: {-->
    <!--login () {-->
      <!--this.$refs.ruleForm.validate((valid) => {-->
        <!--if (valid) {-->
          <!--console.log('2222222222')-->
          <!--this.user.password = this.user.password-->
          <!--this.$store.dispatch('login', this.user).then(() => {-->
            <!--var url = this.uploadAddr + '/taskflow/create'-->
            <!--var dataa = {-->
              <!--data: this.user.username + new Date().getTime()-->
            <!--}-->
            <!--this.$http.post(url, dataa).then(response => {-->
              <!--console.log(response.data)-->
              <!--// window.localStorage.setItem('token', response.data)-->
              <!--// this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token')-->
            <!--})-->

            <!--// this.$router.push({path: '/admin'})-->
          <!--}).catch(err => {-->
            <!--this.$message.error(err)-->
          <!--})-->
        <!--}-->
      <!--})-->
    <!--},-->
    <!--handleReset () {-->
      <!--this.$refs.ruleForm.resetFields()-->
    <!--},-->
    <!--handleSubmit () {-->
      <!--this.login()-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->

<style scoped>

</style>
