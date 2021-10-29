<template>
  <nav>
    <v-toolbar color="#001935" height="55px">
      <v-toolbar-title class="text-uppercase grey--text">
        <v-btn @click="toHome()" color="transparent">
          <v-img
            :src="require('../images/customer-cartoon.jpg')"
            width="30"
            height="35"
            @click="toHome()"
          />
        </v-btn>
      </v-toolbar-title>
      <h1 class="change-font white--text text-uppercase mx-2">
        <b>191524045</b>
      </h1>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-btn text class="mx-2" color="white" @click="goAddCustomer()">
        Add Customer
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      user: [],
      logged: false,
      notifikasi: [],
    };
  },
  methods: {
    goAddCustomer() {
      this.$router.push({ path: "/customer/add" });
    },
    toHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>


<style>
.change-font {
  font-family: "Montserrat", Montserrat, Montserrat;
}
</style>