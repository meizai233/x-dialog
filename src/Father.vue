<template>
  <div>
    <button @click="changeMessage">Change Message</button>
    <ChildComponent :message="parentMessage" :obj="parentObj" />
  </div>
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
import { ref } from "vue";
export default {
  components: {
    ChildComponent,
  },
  setup() {
    const parentMessage = ref("Initial Message");

    const parentObj = {
      parent: "father",
    };
    const changeMessage = () => {
      parentMessage.value = "Updated Message";
      parentObj.parent = "son";
    };
    return {
      parentMessage,
      parentObj,
      changeMessage,
    };
  },
};
</script>
