<template>
  <div>{{ message }}</div>
  {{ obj.parent }}
</template>
<script>
export default {
  props: {
    message: String,
    obj: Object,
  },
  setup(props) {
    // 我理解props是一个Proxy？message解构出来的string 解构赋值是进行一次简单的复制？直接指向了那个string的内存地址
    // 如果解构的是一个对象呢
    const { message, obj } = props;
    return {
      message,
      obj,
    };
  },
};
</script>
