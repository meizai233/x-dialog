<template>
  <el-dialog
    v-model="option.isShow"
    :title="option.title || '标题'"
    :width="option.width || '500'"
    draggable
  >
    <div
      style="
        display: flex; /* 激活 flexbox */
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
      "
    >
      <component :is="content" ref="child" :data="option.data"></component>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="onCancel">{{ option.cancelText || "Cancel" }}</el-button>
        <el-button type="primary" @click="onOk"> {{ option.okTExt || "Confirm" }} </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineAsyncComponent, getCurrentInstance, ref } from "vue";

const props = defineProps({
  option: {
    type: Object,
  },
  isShow: {
    type: Boolean,
    default: false,
  },
});

const instance = getCurrentInstance();
const app = instance.appContext.app; // 获取全局 app 实例
const wraps = app?._instance?.refs?.wraps;
const emit = defineEmits(["update:isShow"]);
const child = ref(null);
const childResult = ref(null);
const content = defineAsyncComponent(props.option.component);

const onOk = async () => {
  // 一般情况下做什么：拿到子组件的数据 提交
  // props.option?.onOk();
  if (child.value?.onOk) {
    childResult.value = await child.value.onOk();
  }
  wraps.removeDialog(childResult.value);
};

const onCancel = async () => {
  if (child.value?.onCancel) {
    childResult.value = await child.value.onCancel();
  }
  emit("update:isShow", false);
  wraps.removeDialog();
};
</script>
