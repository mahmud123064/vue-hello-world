<template>
  <div>
    <p>hello data</p>

    <p v-if="loading">User data is Loading...</p>
    <div v-else>
      <b-table striped hover :items="tableItems" :fields="fields">
        <template #cell(actions)="row">
          <b-button size="sm" @click="editUser(row.item)" variant="warning" class="mr-2">
            Update
          </b-button>
          <b-button size="sm" @click="deleteUser(row.item.id)" variant="danger">
            Delete
          </b-button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "updateData",
  data() {
    return {
      users: [],
      loading: true,
      error: null,
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "street", label: "Street" },
        { key: "actions", label: "Actions" }
      ],
    };
  },
  computed: {
    tableItems() {
      return this.users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        lat: user.address.geo.lat,
        lng: user.address.geo.lng,
        website: user.website,
        companyName: user.company.name,
        catchPhrase: user.company.catchPhrase,
        bs: user.company.bs,
      }));
    }
  },
  methods: {
    editUser(user) {
      console.log('Edit user:', user);
      // Implement edit logic
    },
    deleteUser(userId) {
      if (confirm('Are you sure you want to delete this user?')) {
        console.log('Delete user with ID:', userId);
        // Implement delete logic
      }
    }
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        this.error = error.message;
      })
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>

<style scoped>
.mr-2 {
  margin-right: 0.5rem;
}
</style>