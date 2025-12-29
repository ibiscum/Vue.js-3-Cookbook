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
            <h3>Update User</h3>
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
            <user-form v-model="tmpUserData" />
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
                @click="updateUser"
              >
                Update User
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
  name: "UpdateView",
  components: {
    UserForm,
  },
  mixins: [changeRouteMixin],
  data: () => ({
    tmpUserData: {
      name: "",
      email: "",
      birthday: "",
      country: "",
      phone: "",
    },
  }),
  computed: {
    userId() {
      return this.$route.params.id;
    },
    userData() {
      return this.$store.getters.getUserData;
    },
  },
  watch: {
    userData: {
      handler(newData) {
        this.tmpUserData = newData;
      },
      immediate: true,
      deep: true,
    },
  },
  async created() {
    await this.getUserById();
  },
  methods: {
    async getUserById() {
      await this.$store.dispatch("fetchUserData", this.userId);
    },
    async updateUser() {
      await this.$store.dispatch("updateUser", this.tmpUserData);
      this.changeRoute("list");
    },
  },
};
</script>
