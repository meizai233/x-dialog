<template>
  <el-dialog v-model="option.isShow" title="Dialog">
    <span>This is an Element Plus dialog.</span>
  </el-dialog>
</template>

<script setup>
const props = defineProps({
  option: {
    type: Object,
  },
});
</script>
