<template>
  <div id="app">
    <vs-row>
      <vs-col
        vs-type="flex"
        vs-justify="left"
        vs-align="left"
        vs-w="12"
      >
        <component
          :is="component"
          @change-component="changeComponent"
        />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import List from "./components/ListComp.vue";
import Create from "./components/CreateComp.vue";
import View from "./components/view.vue";
import Update from "./components/update.vue";

export default {
  name: "App",
  provide() {
    const base = {};

    Object.defineProperty(base, "userId", {
      enumerable: true,
      get: () => Number(this.userId),
    });

    return base;
  },
  data: () => ({
    componentIs: "list",
    userId: 0,
  }),
  computed: {
    component() {
      switch (this.componentIs) {
        case "list":
          return List;
        case "create":
          return Create;
        case "view":
          return View;
        case "edit":
          return Update;
        default:
          return undefined;
      }
    },
  },
  methods: {
    changeComponent(payload) {
      this.componentIs = payload.component;
      this.userId = Number(payload.userId);
    },
  },
};
</script>
