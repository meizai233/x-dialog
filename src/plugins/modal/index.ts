// import { createVNode, render } from "vue";
import XModal from "./XModal.vue";
import XDialogWraps from "./XDialogWraps.vue";

export default {
  install: (app, options) => {
    // 加载时会执行一次
    // 全局注册组件
    app.component("XDialogWraps", XDialogWraps);

    app.config.globalProperties.$modal = {
      open: (options) => {
        // 拿到options 预处理
        if (typeof options.component !== "function") {
          throw new Error("组件需要为方法");
        }
        const dialog = {
          ...options,
          // todo
          isShow: true,
          seq: 1,
        };

        // 拿到wraps实例
        const wraps = app?._instance?.refs?.wraps;
        if (wraps) {
          wraps.addDialog(dialog);
        }
      },
    };
  },
};
