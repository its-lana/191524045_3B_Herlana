<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field
        v-model="name"
        label="Search by Name (First Name or Last Name)"
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchName"> Search </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>List Customers</v-card-title>

        <v-data-table
          :headers="headers"
          :items="customer"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editCustomer(item.id)"
              >mdi-pencil</v-icon
            >
            <v-icon small @click="deleteOneCustomer(item.id)"
              >mdi-delete</v-icon
            >
          </template>
        </v-data-table>

        <v-card-actions v-if="jumlah_customer > 0">
          <v-btn small color="error" @click="deleteAllCustomer">
            Remove All
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
import Customer from "../repository/interactor/customer";

export default {
  name: "App",
  components: {},
  data() {
    return {
      customer: [],
      name: "",
      // title: "",
      jumlah_customer: 0,
      headers: [
        {
          text: "Id",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "First Name", value: "first_name", sortable: false },
        { text: "Last Name", value: "last_name", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "Address Id", value: "address_id", sortable: false },
        { text: "Store Id", value: "store_id", sortable: false },
        { text: "Active", value: "active", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    getAllCustomer() {
      // this.customer = [];
      // console.log("test");
      Customer.getAllCustomer()
        .then((response) => {
          console.log(typeof response.data);

          if (typeof response !== "undefined") {
            console.log(response.data);
            this.customer = response.data.map(this.getDisplayCustomer);
          } else {
            console.log("undefined boy");
          }

          console.log(this.customer);
          this.jumlah_customer = this.customer.length;
        })
        .catch((e) => {
          console.log("eror boy");
          console.log(e);
        });
    },
    refreshList() {
      this.getAllCustomer();
    },
    deleteAllCustomer() {
      Customer.deleteAllCustomer()
        .then((response) => {
          // console.log("response");
          console.log(response);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
      // this.getAllCustomer();
    },
    searchName() {
      Customer.getCustomerByFN(this.name)
        .then((response) => {
          this.customer = response.data.map(this.getDisplayCustomer);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    comparer(customer, respon) {
      for (let i = 0; i < customer.length; i++) {
        if (customer[i].id_customer == respon.id_customer) {
          return true;
        }
        // }
      }
      return false;
    },

    editCustomer(id) {
      this.$router.push({ name: "customer-details", params: { id } });
    },

    deleteOneCustomer(id) {
      Customer.deleteCustomerById(id)
        .then((response) => {
          console.log(response);
          // this.getAllCustomer();
          this.refreshList();

          this.jumlah_customer = this.customer.length;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getDisplayCustomer(customer) {
      return {
        id: customer.customer_id,
        first_name: customer.first_name,
        last_name: customer.last_name,
        email: customer.email,
        address_id: customer.address_id,
        store_id: customer.store_id,
        active: customer.activebool ? "Yes" : "No",
      };
    },
  },
  mounted() {
    this.getAllCustomer();
  },
};
</script>
