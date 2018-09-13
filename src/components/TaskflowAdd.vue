<template>
  <div>
    这是测试
    <el-form>
      <el-form-item label="名字是"  label-width="80px">
          <el-input ref="name"/>
      </el-form-item>
      <el-form-item label="流程状态">
        <el-input ref="status"></el-input>
      </el-form-item>
      <el-form-item label="流程描述">
        <el-input ref="description"></el-input>
      </el-form-item>
      <el-form-item class="delu-box">
        <el-button @click.native.prevent="login" style="float: left;">登录
        </el-button>
        <el-button @click.native.prevent="handleReset" style="float: right;">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'TaskflowAdd',
  data () {
    return {
      user: {
        name: '',
        status: '',
        description: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        status: [
          {required: true, message: '请输入状态', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '请输入描述', trigger: 'blur'}
        ]
      }
    }
  },

  methods: {
    login () {
      var userId = this.$refs.name.value
      console.log('userId ====================== ' + userId)
      console.log(' ------------------------------------ ')

      var params = new URLSearchParams()
      params.append('param1', 'value1')
      params.append('param2', 'value2')

      this.$http.post(this.uploadAddr + '/user/get', params).then(function (response) {
        console.log('response ======= ' + response)

        console.log(response.status)
        console.log(response.data)

        var json = JSON.stringify(response)
        // var json = JSON.parse(response)
        console.log(json.toString())

      })
    },
    handleReset () {
      this.$refs.ruleForm.resetFields()
    },
    handleSubmit () {
      this.login()
    }
  }
}
</script>

<style>

</style>
