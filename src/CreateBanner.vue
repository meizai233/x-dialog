<template>
  <div class="banner">
    <h2>{{ message }}</h2>

    <form>
      <div class="form-group">
        <label for="name">名字：</label>
        <input type="text" v-model="form.name" id="name" placeholder="请输入您的名字" required />
      </div>

      <div class="form-group">
        <label for="email">邮箱：</label>
        <input type="email" v-model="form.email" id="email" placeholder="请输入您的邮箱" required />
      </div>
    </form>
  </div>
  <!-- 提交or取消的逻辑定义在这里 -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import useGlobal from "./hooks/useGlobal";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({ name: "", email: "" }),
  },
});

const form = ref({
  name: "",
  email: "",
});

const { $modal } = useGlobal();

const onOk = async () => {
  // 提交前的处理逻辑
  await $modal.open({
    title: "创建banner",
    width: "300px",
    component: () => import("./ConfirmSubmit.vue"),
  });
  return form.value;
};

// 在组件挂载后初始化 form 的值
onMounted(() => {
  form.value.name = props.data.name || "";
  form.value.email = props.data.email || "";
});

defineExpose({
  form,
  onOk,
});
</script>

<style lang="less" scoped>
.banner {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  width: 300px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

input {
  padding: 8px;
  width: 100%;
  margin-top: 5px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ddd;
}

button {
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  border: none;
}

button[type="submit"] {
  background-color: #28a745;
}

button[type="submit"]:hover {
  background-color: #218838;
}

button:hover {
  background-color: #0056b3;
}
</style>
