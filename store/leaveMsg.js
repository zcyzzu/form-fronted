import {set } from "./vuex.js";

export const state = () => ({
    nickname: "",
    mobile: "",
    wechat: "",
    major: "",
    msg: ""
});

export const mutations = {
    setNickname: set("nickname"),
    setMobile: set("mobile"),
    setWechat: set("wechat"),
    setMajor: set("major"),
    setMsg: set("msg")
};