<template>
  <div v-if="currentCustomer" class="edit-form py-3">
    <p class="headline">Edit Customer Data</p>

    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="currentCustomer.first_name"
        :rules="[(v) => !!v || 'First Name is required']"
        label="First Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="currentCustomer.last_name"
        :rules="[(v) => !!v || 'Last Name is required']"
        label="Last Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="currentCustomer.email"
        :rules="[(v) => !!v || 'Email is required']"
        label="Email"
        required
      ></v-text-field>

      <v-text-field
        v-model="currentCustomer.address_id"
        :rules="[(v) => !!v || 'Address Id is required']"
        label="Address Id"
        required
      ></v-text-field>

      <v-text-field
        v-model="currentCustomer.store_id"
        :rules="[(v) => !!v || 'Store Id is required']"
        label="Store Id"
        required
      ></v-text-field>

      <label><strong>Status:</strong></label>
      {{ currentCustomer.activebool ? "Active" : "Inactive" }}

      <v-divider class="my-5"></v-divider>

      <v-btn
        v-if="currentCustomer.activebool"
        @click="updateActivated(false)"
        color="primary"
        small
        class="mr-2"
      >
        Non-Active
      </v-btn>

      <v-btn
        v-else
        @click="updateActivated(true)"
        color="primary"
        small
        class="mr-2"
      >
        Activate
      </v-btn>

      <v-btn color="error" small class="mr-2" @click="deleteCustomer">
        Delete
      </v-btn>

      <v-btn color="success" small @click="updateCustomer"> Update </v-btn>
    </v-form>

    <p class="mt-3">{{ message }}</p>
  </div>

  <div v-else>
    <p>Please click on a Customer...</p>
  </div>
</template>



<script>
import Customer from "../repository/interactor/customer";

export default {
  name: "App",
  data() {
    return {
      currentCustomer: null,
      message: "",
    };
  },
  methods: {
    getCustomer(id) {
      Customer.getCustomerById(id)
        .then((response) => {
          this.currentCustomer = response.data;
          console.log(this.currentCustomer);
          console.log(typeof this.currentCustomer);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateActivated(status) {
      var data = {
        customer_id: this.currentCustomer.customer_id,
        first_name: this.currentCustomer.first_name,
        last_name: this.currentCustomer.last_name,
        email: this.currentCustomer.email,
        address_id: this.currentCustomer.address_id,
        store_id: this.currentCustomer.store_id,
        activebool: status,
      };

      Customer.updateCustomerData(this.currentCustomer.customer_id, data)
        .then((response) => {
          this.currentCustomer.activebool = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateCustomer() {
      Customer.updateCustomerData(
        this.currentCustomer.customer_id,
        this.currentCustomer
      )
        .then((response) => {
          console.log(response.data);
          this.message = "The customer data was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
          console.log("eror apdet");
        });
    },

    deleteCustomer() {
      Customer.deleteCustomerById(this.currentCustomer.customer_id)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
      this.$router.push({ path: "/customer" });
    },
  },
  mounted() {
    this.message = "";
    this.getCustomer(this.$route.params.id);
    console.log(this.$route.params.id);
  },
};
</script>
