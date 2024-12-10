import { getCurrentInstance } from "vue";

/* global ICurrentInstance */
export default function useGlobal() {
  const {
    appContext: {
      config: { globalProperties },
    },
  } = getCurrentInstance();

  return globalProperties;
}
