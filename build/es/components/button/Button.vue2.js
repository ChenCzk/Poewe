import { defineComponent as c, ref as a, openBlock as r, createElementBlock as i, pushScopeId as l, popScopeId as s, createElementVNode as p } from "vue";
const d = (e) => (l("data-v-c3c1d908"), e = e(), s(), e), u = /* @__PURE__ */ d(() => /* @__PURE__ */ p("span", null, "-测试按钮-6", -1)), _ = [
  u
], h = /* @__PURE__ */ c({
  name: "bq-button",
  __name: "Button",
  props: {
    title: String,
    size: {
      type: String,
      required: !0,
      validate(e) {
        return ["mini", "default", "large"].includes(e);
      }
    }
  },
  setup(e) {
    const t = e;
    let n = a(1);
    const o = () => {
      alert("bq-button click" + n.value + t.size);
    };
    return (m, b) => (r(), i("div", {
      class: "bq-button",
      onClick: o
    }, _));
  }
});
export {
  h as default
};
