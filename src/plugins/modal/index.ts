// import { createVNode, render } from "vue";
import XModal from "./XModal.vue";
import XDialogWraps from "./XDialogWraps.vue";

export default {
  install: (app, options) => {
    // 加载时会执行一次
    // 全局挂载组件

    // 注册组件
    app.component("XDialogWraps", XDialogWraps);
    console.log("app, options", app, options);
    app.config.globalProperties.$modal = {
      open: (options) => {
        debugger;
        // 拿到options 进行处理
        // 处理完后 拿到XModalWraps该实例下的add方法 进行调用 感觉也算用到单例模式？？
        // 或者直接把
        console.log("app", app);
        const dialog = {
          ...options,
          // todo
          isShow: true,
          seq: 1,
        };
        const wraps = app?._instance?.refs?.wraps;
        if (wraps) {
          wraps.addDialog(dialog);
        }
      },
    };
  },
};
