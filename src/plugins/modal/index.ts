// import { createVNode, render } from "vue";
import XDialogWraps from "./XDialogWraps.vue";

export default {
  install: (app, options) => {
    // 加载时会执行一次
    // 全局注册组件
    app.component("XDialogWraps", XDialogWraps);

    // 用一个变量存储dialog的编号
    let dialogCount = 0;

    app.config.globalProperties.$modal = {
      open: (options) => {
        const p = new Promise((resolve, reject) => {
          // 拿到options 预处理
          if (typeof options.component !== "function") {
            throw new Error("组件需要为方法");
          }

          const dialog = {
            ...options,
            resolve,
            reject,
            isShow: true,
            seq: dialogCount++,
          };

          // 拿到wraps实例
          const wraps = app?._instance?.refs?.wraps;
          if (wraps) {
            wraps.addDialog(dialog);
          }
        });
        return p;
      },
    };
  },
};
