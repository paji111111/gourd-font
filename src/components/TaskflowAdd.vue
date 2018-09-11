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
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '请输入登录密码', trigger: 'blur'}
        ]
      }
    }
  },

  methods: {
    login () {
      console.log(' ------------------------------------ ')
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
