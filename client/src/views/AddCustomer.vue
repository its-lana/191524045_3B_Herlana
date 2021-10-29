<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Add Customer</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="customer.first_name"
          :rules="[(v) => !!v || 'First Name is required']"
          label="First Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="customer.last_name"
          :rules="[(v) => !!v || 'Last Name is required']"
          label="Last Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="customer.email"
          :rules="[(v) => !!v || 'Email is required']"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="customer.address_id"
          :rules="[(v) => !!v || 'Address Id is required']"
          label="Address Id"
          required
        ></v-text-field>

        <v-text-field
          v-model="customer.store_id"
          :rules="[(v) => !!v || 'Store Id is required']"
          label="Store Id"
          required
        ></v-text-field>
      </v-form>

      <v-btn color="primary" class="mt-3" @click="saveCustomer">Submit</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title> Submitted successfully! </v-card-title>

        <v-card-subtitle>
          Click the button to add new Customer.
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="success" @click="newCustomer">Add</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>


<script>
import Customer from "../repository/interactor/customer";

export default {
  name: "App",
  data() {
    return {
      customer: {
        customer_id: null,
        first_name: "",
        last_name: "",
        email: "",
        address_id: null,
        store_id: null,
      },
      submitted: false,
      // success: false,
    };
  },
  methods: {
    saveCustomer() {
      var data = {
        first_name: this.customer.first_name,
        last_name: this.customer.last_name,
        email: this.customer.email,
        address_id: parseInt(this.customer.address_id),
        store_id: parseInt(this.customer.store_id),
      };

      Customer.createCustomer(data)
        .then((response) => {
          this.customer.customer_id = response.data.customer_id;
          console.log(response.data);
          this.submitted = true;
          // this.success = true;
          this.newCustomer();
        })
        .catch((e) => {
          console.log(e);
        });
      this.$router.push({ path: "/customer" });
    },

    newCustomer() {
      this.customer = {};
      this.submitted = false;
    },
  },
};
</script>