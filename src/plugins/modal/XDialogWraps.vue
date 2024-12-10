<template>
  <!-- 存放wrap组件  -->
  <!-- wrap 接收 dialog key -->
  <!-- <x-dialog-wrap v-for="dialog in dialogs" :key="dialog.seq"> </x-dialog-wrap> -->
  <x-modal
    v-for="dialog in dialogs"
    :key="dialog.seq"
    :option="dialog"
    v-model:isShow="dialog.isShow"
  ></x-modal>
</template>

<script setup>
import { reactive } from "vue";
import XModal from "./XModal.vue";
import useGlobal from "../../hooks/useGlobal";

const dialogs = reactive([]);
const { $modal } = useGlobal();

// wraps 管理dialogs的添加移除
// wrap 管理dialog的挂载
// dialog 管理 展示dialog
const addDialog = (dialog) => {
  dialogs.push(dialog);
};

const removeDialog = (val) => {
  console.log("val", val);
  dialogs.pop();
};
// 把方法绑定到全局 可以使用
$modal.addDialog = addDialog;
$modal.removeDialog = removeDialog;

// 直接把方法绑定到全局

defineExpose({
  dialogs,
  addDialog,
  removeDialog,
});
</script>

<style lang="less" scoped></style>
