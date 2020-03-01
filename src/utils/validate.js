import { MessageBox } from "element-ui";
const certnoReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //邮箱验证
const emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
const telReg = /^1[345789]\d{9}$/; //手机号码
const faxReg = /^(\d{3,4}-)?\d{7,8}$/; //传真
const nameReg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,10}$/; // 姓名
const verifyCodeReg = /^[a-z0-9]{6}$/; //验证码

// 用户名
export function ValidateUsername(rule, value, callback) {
  const reg = emailReg;
  if (!value) {
    return callback(new Error("用户名不能为空"));
  } else if (!reg.test(value)) {
    return callback(new Error("用户名不正确"));
  } else {
    callback();
  }
}

// 验证密码
export function ValidatePassword(rule, value, callback) {
  const reg = verifyCodeReg;
  if (!value) {
    return callback(new Error("密码不能为空"));
  } else if (!reg.test(value)) {
    return callback(new Error("密码不正确"));
  } else {
    callback();
  }
}

// 验证码
export function ValidateVCode(rule, value, callback) {
  const reg = verifyCodeReg;
  if (!value) {
    return callback(new Error("验证码不能为空"));
  } else if (!reg.test(value)) {
    return callback(new Error("验证码不正确"));
  } else {
    callback();
  }
}

/**
 * 验证邮箱
 */
export function validateEmail(value) {
  let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return !reg.test(value) ? true : false;
}
