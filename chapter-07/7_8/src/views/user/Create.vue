<template>
  <vs-row>
    <vs-col
      vs-type="flex"
      vs-justify="left"
      vs-align="left"
      vs-w="12"
    >
      <vs-card style="margin: 20px">
        <template #header>
          <div>
            <h3>Create User</h3>
          </div>
        </template>
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="left"
            vs-align="left"
            vs-w="12"
            style="margin: 20px"
          >
            <user-form v-model="userData" />
          </vs-col>
        </vs-row>
        <template #footer>
          <div>
            <vs-row vs-justify="flex-start">
              <vs-button
                color="success"
                type="filled"
                icon="save"
                size="small"
                @click="createUser"
              >
                Create User
              </vs-button>
              <vs-button
                color="danger"
                type="filled"
                icon="cancel"
                size="small"
                style="margin-left: 5px"
                @click="changeRoute('list')"
              >
                Cancel
              </vs-button>
            </vs-row>
          </div>
        </template>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
import UserForm from "@/components/userForm";
import changeRouteMixin from "@/mixin/changeRoute";

export default {
  name: "CreateUser",
  components: {
    UserForm,
  },
  mixins: [changeRouteMixin],
  data: () => ({
    userData: {
      name: "",
      email: "",
      birthday: "",
      country: "",
      phone: "",
    },
  }),
  methods: {
    async createUser() {
      await this.$store.dispatch("createUser", this.userData);
      this.changeRoute("list");
    },
  },
};
</script>
