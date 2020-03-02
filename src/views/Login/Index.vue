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
          class="login-form"
          status-icon
        >
          <el-form-item prop="username">
            <label for="username">邮箱</label>
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <label for="password">密码</label>
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <label>重复密码</label>
            <el-input v-model="ruleForm.passwords"></el-input>
          </el-form-item>
          <el-form-item>
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
                <el-button type="success" class="block">{{
                  codeButtonStatus.text
                }}</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-col :span="24">
              <el-button type="danger" class="block">{{
                model === "login" ? "登录" : "注册"
              }}</el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
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
      codeButtonStatus: {
        status: false,
        text: "获取验证码"
      },
      model: "login"
    };
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
}

.block {
  display: block;
  width: 100%;
}
</style>
