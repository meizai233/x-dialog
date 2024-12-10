<template>
  <x-modal></x-modal>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  // dialog需要存储什么数据
  components: { type: Object, required: true },
  data: { type: Object, required: false },
});

const render = (h) => {};

defineExpose({ render });
</script>

<style lang="less" scoped></style>
