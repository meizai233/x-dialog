<script>
import { defineComponent, h } from "vue";

export default defineComponent({
  //
  name: "MyButton",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    return () => {
      return h(
        "button",
        {
          onClick: () => emit("on-click"),
        },
        props.label
      );
    };
  },
});
</script>
