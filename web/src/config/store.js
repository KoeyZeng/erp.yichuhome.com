import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    base: {
      ver: "V0.0.0",
      edition: "社区版",
      copyright: "YICHUHOME.COM",
      webSite: "https://www.yichuhome.com",
      cdnSite: "https://cdn.yichuhome.com",
      contact: "https://www.yichuhome.com/about",
    },
    Token: "",
    sys: {
      name: "易初进销存软件",
      company: "广州易初商业贸易有限公司",
      icp: "ICP备案号码",
      notice: "",
    },
    user: {},
    frame: [],
    menu: [],
    fields: {},
    root: {},
    category: [],
    warehouse: [],
    account: [],
    iet: [],
    often: [],
    theme: "theme_0_0",
    memoData: "",
  },
  mutations: {
    //更新数据中心
    //payload:{key:'sys.name',val:'success'}
    upState(state, payload) {
      if (typeof payload.val == "object") {
        eval("state." + payload.key + "=" + JSON.stringify(payload.val));
      } else {
        eval("state." + payload.key + '="' + payload.val + '"');
      }
    },
  },
  plugins: [createPersistedState()], //数据持久化
});
