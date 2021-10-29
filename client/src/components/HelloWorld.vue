
<template>
  <v-container>
    <v-row class="text-center mt-2" style="height: 500px">
      <v-col cols="12">
        <v-img
          :src="require('../images/customer-cartoon.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4 mt-4" style="margin-top: 400px">
        <h1 class="display-2 font-weight-bold mb-3" style="color: #001935">
          Welcome to <br />
          Data Customer Management
        </h1>

        <p class="subheading font-weight-regular" style="color: #001935">
          Created by
          <br />191524045 - Herlana
        </p>

        <v-btn
          elevation="2"
          class="mx-2 green white--text"
          width="250px"
          @click="goCustomer()"
          >Lets Go..</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
  methods: {
    goCustomer() {
      this.$router.push({ path: "/customer" });
    },
  },
};
</script>
