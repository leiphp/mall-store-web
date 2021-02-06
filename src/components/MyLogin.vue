<!--
 * @Description: 登录组件
 * @Author: hai-27
 * @Date: 2020-02-19 20:55:17
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-01 15:34:08
 -->
<template>
  <div id="myLogin">
    <el-dialog title="登录" width="300px" center :visible.sync="isLogin">
      <el-form :model="LoginUser" :rules="rules" status-icon ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input prefix-icon="el-icon-user-solid" placeholder="请输入账号" v-model="LoginUser.name"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            prefix-icon="el-icon-view"
            type="password"
            placeholder="请输入密码"
            v-model="LoginUser.pass"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="medium" type="primary" @click="Login" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import request from '@/utils/request'
export default {
  name: "MyLogin",
  data() {
    // 用户名的校验方法
    let validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入用户名"));
      }
      // 用户名以字母开头,长度在4-16之间,允许字母数字下划线
      const userNameRule = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;
      if (userNameRule.test(value)) {
        this.$refs.ruleForm.validateField("checkPass");
        return callback();
      } else {
        return callback(new Error("字母开头,长度4-16之间,允许字母数字下划线"));
      }
    };
    // 密码的校验方法
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码"));
      }
      // 密码以字母开头,长度在6-18之间,允许字母数字和下划线
      // const passwordRule = /^[a-zA-Z]\w{5,17}$/;
      const passwordRule = /^[a-zA-Z0-9]\w{5,17}$/;
      if (passwordRule.test(value)) {
        this.$refs.ruleForm.validateField("checkPass");
        return callback();
      } else {
        return callback(
          new Error("不一定字母开头,长度6-18之间,允许字母数字和下划线")
        );
      }
    };
    return {
      LoginUser: {
        name: "",
        pass: ""
      },
      // 用户信息校验规则,validator(校验方法),trigger(触发方式),blur为在组件 Input 失去焦点时触发
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  computed: {
    // 获取vuex中的showLogin，控制登录组件是否显示
    isLogin: {
      get() {
        return this.$store.getters.getShowLogin;
      },
      set(val) {
        this.$refs["ruleForm"].resetFields();
        this.setShowLogin(val);
      }
    }
  },
  methods: {
    ...mapActions(["setUser", "setShowLogin"]),
    Login() {
      // 通过element自定义表单校验规则，校验用户输入的用户信息
      this.$refs["ruleForm"].validate(valid => {
        //如果通过校验开始登录
        if (valid) {
          const params = new URLSearchParams()
          params.append('username', this.LoginUser.name)
          params.append('password', this.LoginUser.pass)
          request.post('/sso/login', params).then((res) => {
            const { code, data, message } = res
            if (code === 200) {
              // 隐藏登录组件
                this.isLogin = false;
                // 登录信息存到本地
                // let user = JSON.stringify({userName:"test",user_id:1});
                let token = JSON.stringify(data.token);
                // localStorage.setItem("user", user);
                localStorage.setItem("token", token);
                this.userinfo()//获取登录用户信息再存储
                // 登录信息存到vuex
                this.setUser(data.token);
                // 弹出通知框提示登录成功信息
                this.notifySucceed(message);
            }else {
                // 清空输入框的校验状态
                this.$refs["ruleForm"].resetFields();
                // 弹出通知框提示登录失败信息
                this.notifyError(message);
            }
          })

          // this.$axios
          //   .post("/api/users/login", {
          //     userName: this.LoginUser.name,
          //     password: this.LoginUser.pass
          //   })
          //   .then(res => {
          //     // “001”代表登录成功，其他的均为失败
          //     if (res.data.code === "001") {
          //       // 隐藏登录组件
          //       this.isLogin = false;
          //       // 登录信息存到本地
          //       let user = JSON.stringify(res.data.user);
          //       localStorage.setItem("user", user);
          //       // 登录信息存到vuex
          //       this.setUser(res.data.user);
          //       // 弹出通知框提示登录成功信息
          //       this.notifySucceed(res.data.msg);
          //     } else {
          //       // 清空输入框的校验状态
          //       this.$refs["ruleForm"].resetFields();
          //       // 弹出通知框提示登录失败信息
          //       this.notifyError(res.data.msg);
          //     }
          //   })
          //   .catch(err => {
          //     return Promise.reject(err);
          //   });
        } else {
          return false;
        }
      });
    },
    //获取用户信息
    userinfo() {
      request.get('/sso/info').then((res) => {
          const { code, data, message } = res
          if (code === 200) {
              let user = JSON.stringify({userName:data.username,user_id:data.id});
              localStorage.setItem("user", user);
          }else {
              // 弹出通知框提示登录失败信息
              this.notifyError(message);
          }
        })
    }
  }
};
</script>
<style>
</style>