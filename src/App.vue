<template>
  <x-dialog-wraps ref="wraps"></x-dialog-wraps>
  <button @click="handleShowModal">点击显示模态框</button>
  <h1>{{ $translate("greetings.hello") }}</h1>
  <div class="contact-info">
    <p><strong>姓名:</strong> {{ name }}</p>
    <p><strong>邮箱:</strong> {{ email }}</p>
  </div>
  <!-- <father></father> -->
</template>

<script setup>
import { ref } from "vue";
import MyButton from "./MyButton.vue";
import Father from "./Father.vue";
import useGlobal from "./hooks/useGlobal";
import XModal from "./plugins/modal/XModal.vue";

// 组件引用
const { $modal } = useGlobal();
const name = ref("张三");
const email = ref("zhangsan@example.com");

// 打开 Modal 的事件处理函数
const handleShowModal = () => {
  $modal.open({
    title: "创建banner",
    width: "600px",
    data: {
      name,
      email,
    },
    component: () => import("./CreateBanner.vue"),
  });
  // .then((v) => {
  //   console.log("v", v);
  // });
};
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
