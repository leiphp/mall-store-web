<!--
 * @Description: 用户注册组件
 * @Author: leixiaotain
 * @Date: 2021-02-07 11:20:35
 -->
<template>
  <div id="register">
    <el-dialog title="注册" width="300px" center :visible.sync="isRegister">
      <el-form
        :model="RegisterUser"
        :rules="rules"
        status-icon
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="name">
          <el-input
            prefix-icon="el-icon-user-solid"
            placeholder="请输入账号"
            v-model="RegisterUser.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input
            prefix-icon="el-icon-phone"
            placeholder="请输入手机号"
            v-model="RegisterUser.phone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            prefix-icon="el-icon-view"
            type="password"
            placeholder="请输入密码"
            v-model="RegisterUser.pass"
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirmPass">
          <el-input
            prefix-icon="el-icon-view"
            type="password"
            placeholder="请再次输入密码"
            v-model="RegisterUser.confirmPass"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            prefix-icon="el-icon-s-help"
            placeholder="请输入验证码"
            v-model="RegisterUser.code"
            style="width:55%;float:left;"
          ></el-input>
          <el-button @click="sendMsg" size="mini" style="float:right;height:40px;width:44%;">{{buttonName}}</el-button>
        </el-form-item>
        <el-form-item>
          <el-button size="medium" type="primary" @click="Register" style="width:100%;">注册</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  name: "MyRegister",
  props: ["register"],
  data() {
    // 用户名的校验方法
    let validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入用户名"));
      }
      // 用户名以字母开头,长度在5-16之间,允许字母数字下划线
      const userNameRule = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
      if (userNameRule.test(value)) {
        return callback();
      }else{
        return callback(new Error("字母开头,长度5-16之间,允许字母数字下划线"));
      }
    };
    // 密码的校验方法
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码"));
      }
      // 密码以字母开头,长度在6-18之间,允许字母数字和下划线
      const passwordRule = /^[a-zA-Z]\w{5,17}$/;
      if (passwordRule.test(value)) {
        this.$refs.ruleForm.validateField("checkPass");
        return callback();
      } else {
        return callback(
          new Error("字母开头,长度6-18之间,允许字母数字和下划线")
        );
      }
    };
    // 确认密码的校验方法
    let validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入确认密码"));
      }
      // 校验是否以密码一致
      if (this.RegisterUser.pass != "" && value === this.RegisterUser.pass) {
        this.$refs.ruleForm.validateField("checkPass");
        return callback();
      } else {
        return callback(new Error("两次输入的密码不一致"));
      }
    };
    return {
      isRegister: false, // 控制注册组件是否显示
      RegisterUser: {
        name: "",
        pass: "",
        confirmPass: "",
        phone: "",
        code: ""
      },
      // 用户信息校验规则,validator(校验方法),trigger(触发方式),blur为在组件 Input 失去焦点时触发
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        confirmPass: [{ validator: validateConfirmPass, trigger: "blur" }]
      },
      buttonName: "获取验证码",
			isDisabled: false,
			time: 90
    };
  },
  watch: {
    // 监听父组件传过来的register变量，设置this.isRegister的值
    register: function(val) {
      if (val) {
        this.isRegister = val;
      }
    },
    // 监听this.isRegister变量的值，更新父组件register变量的值
    isRegister: function(val) {
      if (!val) {
        this.$refs["ruleForm"].resetFields();
        this.$emit("fromChild", val);
      }
    }
  },
  methods: {
    Register() {
      // 通过element自定义表单校验规则，校验用户输入的用户信息
      this.$refs["ruleForm"].validate(valid => {
        //如果通过校验开始注册
        console.log("valid",valid)
        if (valid) {
          var params = new URLSearchParams();
          params.append('username', this.RegisterUser.name);
          params.append('password', this.RegisterUser.pass);
          params.append('telephone', this.RegisterUser.phone);
          params.append('authCode', this.RegisterUser.code);

          request.post('sso/register', params).then((res) => {
            const { code, data, message } = res
            if (code === 200) {
              // 隐藏注册组件
              this.isRegister = false;
              console.log("data",data)
              this.notifySucceed(message);
            }else{
              this.notifySucceed(message);
            }
          })
        } else {
          return false;
        }
      });
    },
    //获取验证码
    sendMsg() {
      const params = {
        params: {
          telephone: this.RegisterUser.phone,
        }
      }
      request.get('sso/getAuthCode', params).then((res) => {
        const { code, data } = res
        // this.notifySucceed(message);
        if (code === 200) {
          this.notifySucceed("本次验证码为："+data);
          this.timestart()
        }
      })
    },
    //倒计时
    timestart() {
      let me = this;
      me.isDisabled = true;
      let interval = window.setInterval(function() {
        me.buttonName = '（' + me.time + '秒）后重发';
        --me.time;
        if(me.time < 0) {
          me.buttonName = "重新发送";
          me.time = 10;
          me.isDisabled = false;
          window.clearInterval(interval);
        }
      }, 1000);
    }
  }
};
</script>
<style>
</style>