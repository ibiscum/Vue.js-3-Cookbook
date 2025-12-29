<template>
  <div class="cardBox">
    <div class="container tasker">
      <strong>My task is:</strong>
      <input
        type="text"
        :value="task"
        class="TaskInput"
        :class="$v.task.$error ? 'fieldError' : ''"
        @input="task = $event.target.value"
      >
      <button @click="addTask">
        Add Task
      </button>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "@vuelidate/validators";
import { useVuelidate } from '@vuelidate/core'

export default {
  name: "TaskInput",
  emits: ["add-task"],
  data: () => ({
    task: "",
  }),
  methods: {
    setup () {
    return { $v: useVuelidate() }
  },
    addTask() {
      this.$v = this.setup
      this.$v.$touch();

      if (this.$v.$error) return false;

      this.$emit("add-task", this.task);

      this.task = "";

      this.$v.$reset();
      return true;
    },
  },
  validations() {
    return {
      task: {
        required,
        minLength: minLength(5),
      },
    };
  },
};
</script>
<style scoped>
.tasker {
  margin: 20px;
}
.tasker .taskInput {
  font-size: 14px;
  margin: 0 10px;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.75);
}
.tasker button {
  border: 1px solid rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
}
</style>
