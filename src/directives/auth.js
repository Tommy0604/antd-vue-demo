import { check } from "../utils/auth";
/**
 * 自定义指令
 * 缺点删除子节点之后，无法复原（无法实现动态权限控制）
 * @param {*} Vue
 * @param {*} options
 */
function install(Vue, options = {}) {
  Vue.directive(options.name || "auth", {
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
}

export default { install };
