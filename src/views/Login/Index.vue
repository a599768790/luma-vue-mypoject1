<!--  -->
<template>
  <div id="login">
    <div class="login-wrap">
      <div class="menu-div">
        <ul class="menu-tab">
          <li
            v-for="item in menuTab"
            :key="item.id"
            :class="{ current: item.current }"
            @click="toggleMenu(item)"
          >
            {{ item.txt }}
          </li>
        </ul>
      </div>
      <div class="login-div">
        <el-form
          ref="loginForm"
          :model="ruleForm"
          label-width="80px"
          class="login-form"
          status-icon
          :rules="rules"
        >
          <el-form-item prop="username">
            <label for="username">邮箱</label>
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="">
            <label for="password">密码</label>
            <el-input
              id="password"
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              minlength="6"
              maxlength="20"
            ></el-input>
          </el-form-item>
          <el-form-item prop="" v-show="model === 'register'">
            <label>重复密码</label>
            <el-input
              type="password"
              v-model="ruleForm.passwords"
              autocomplete="off"
              minlength="6"
              maxlength="20"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <label>验证码</label>
            <el-row :gutter="10">
              <el-col :span="15">
                <el-input
                  v-model="ruleForm.code"
                  minlength="6"
                  maxlength="6"
                ></el-input>
              </el-col>
              <el-col :span="9">
                <el-button
                  type="success"
                  class="block"
                  @click="getSms()"
                  :disabled="codeButtonStatus.status"
                  >{{ codeButtonStatus.text }}</el-button
                >
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-col :span="24">
              <el-button
                type="danger"
                class="block"
                @click="submitForm('loginForm')"
                :disable="loginButtonStatus"
                >{{ model === "login" ? "登录" : "注册" }}</el-button
              >
            </el-col>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import sha1 from "js-sha1";
import { GetSms as Api_GetSms } from "@/api/login.js";
import {
  ValidateUsername,
  ValidatePassword,
  ValidateVCode,
  validateEmail
} from "@/utils/validate.js";
export default {
  data() {
    return {
      menuTab: [
        { txt: "登录", current: true, type: "login" },
        { txt: "注册", current: false, type: "register" }
      ],
      ruleForm: {
        username: "",
        password: "",
        passwords: "",
        code: ""
      },
      model: "login",
      // 验证码按钮状态
      codeButtonStatus: {
        status: false,
        text: "获取验证码"
      },
      // 登陆状态
      loginButtonStatus: true,
      rules: {
        username: [{ validator: ValidateUsername, trigger: "blur" }],
        password: [{ validator: ValidatePassword, trigger: "blur" }],
        passwords: [{ validator: ValidatePassword, trigger: "blur" }],
        code: [{ validator: ValidateVCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    toggleMenu(data) {
      // console.log(data);
      this.menuTab.forEach((elem, index) => {
        // console.log("foreach")
        // console.log(elem);
        // console.log(index);
        // 两个都false
        elem.current = false;
      });
      data.current = true;
      this.model = data.type;
      // 清空表单
      this.resetFromData();
    },
    // 更新按钮状态
    updataButtonStatus(parms) {
      this.codeButtonStatus.status = parms.status;
      this.codeButtonStatus.text = parms.text;
    },
    // 清空表单
    resetFromData() {
      // console.log("清空表单");
      this.$refs["loginForm"].resetFields();
    },
    // 获取验证码
    getSms() {
      // console.log("获取验证码");
      // 进行提示
      if (this.ruleForm.username == "") {
        this.$message.error("邮箱不能为空！！");
        return false;
      }
      if (validateEmail(this.ruleForm.username)) {
        this.$message.error("邮箱格式有误，请重新输入！！");
        return false;
      }
      // 获取验证码
      let requestData = {
        username: this.ruleForm.username,
        module: this.model
      };
      // 更新按钮状态
      this.updataButtonStatus({
        status: true,
        text: "已发送"
      });
      // debugger;
      // api请求
      Api_GetSms(requestData)
        .then(response => {
          console.log(res);
          let data = response.data;
          this.$message({
            message: data.message,
            type: "success"
          });
          // 启用登录或注册按钮
          this.loginButtonStatus = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        // 表单验证通过
        if (valid) {
          // 三元运算
          this.model === "login" ? this.login() : this.register();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 登陆
    login() {
      console.log("登陆");
      let repuestData = {
        username: this.ruleForm.username,
        password: sha1(this.ruleForm.password),
        code: this.ruleForm.code
      };
      debugger;
      this.$store
        .dispatch("app/login", repuestData)
        .then(response => {
          // 页面跳转
          console.log(response);
          this.$router.push({
            name: "console"
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
#login {
  .login-wrap {
    width: 400px;
    margin: auto;
    margin-top: 100px;
  }
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #000;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.block {
  display: block;
  width: 100%;
}
</style>
