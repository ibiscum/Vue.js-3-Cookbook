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
            <h3>View User</h3>
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
            <user-form
              :value="userData"
              disabled
            />
          </vs-col>
        </vs-row>
        <template #footer>
          <div>
            <vs-row vs-justify="flex-start">
              <vs-button
                color="primary"
                type="filled"
                icon="arrow_back"
                size="small"
                style="margin-left: 5px"
                @click="changeRoute('list')"
              >
                Back
              </vs-button>
              <vs-button
                color="success"
                type="filled"
                icon="edit"
                size="small"
                style="margin-left: 5px"
                @click="changeRoute('edit', userId)"
              >
                Edit User
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
  name: "ViewUser",
  components: {
    UserForm,
  },
  mixins: [changeRouteMixin],
  computed: {
    userId() {
      return this.$route.params.id;
    },
    userData() {
      return this.$store.getters.getUserData;
    },
  },
  async beforeMount() {
    await this.getUserById();
  },
  methods: {
    async getUserById() {
      await this.$store.dispatch("fetchUserData", this.userId);
    },
  },
};
</script>
