<template>
  <x-dialog-wraps ref="wraps"></x-dialog-wraps>
  <!-- todo 点击时 应该调用addDialog -->
  <button @click="handleShowModal">点击显示模态框</button>
  <h1>{{ $translate("greetings.hello") }}</h1>
  <my-button :label="'Click Me'" @on-click="handleClick"></my-button>
  <father></father>
  <!-- <x-modal></x-modal> -->
  <el-button plain @click="centerDialogVisible = true"> Click to open the Dialog </el-button>

  <el-dialog v-model="centerDialogVisible" title="Warning" width="500" center>
    <span> It should be noted that the content will not be aligned in center by default </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
  <el-dialog v-model="centerDialogVisible" title="Dialog">
    <span>This is an Element Plus dialog.</span>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import MyButton from "./MyButton.vue";
import Father from "./Father.vue";
import useGlobal from "./hooks/useGlobal";
import XModal from "./plugins/modal/XModal.vue";

// 组件引用
const { $modal } = useGlobal();

// 控制对话框可见性的变量
const centerDialogVisible = ref(false);

// 点击按钮的事件处理函数
const handleClick = () => {
  alert("Button was clicked!");
};

// 打开 Modal 的事件处理函数
const handleShowModal = () => {
  $modal.open({
    title: "创建banner",
    width: "600px",
    component: () => import("./CreateBanner.vue"),
    async onConfirm() {
      console.log("点击确定 before");
      await sleep(2000);
      console.log("点击确定 after");
    },
    onCancel() {
      console.log("取消----");
    },
  });
};

// 模拟 sleep 函数
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
