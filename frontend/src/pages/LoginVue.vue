<template>
  <Nav_Bar class="navbar">
    <img src="../assets/logo.png" width="40px" alt="" class="navbar-brand ms-5" />
    <h1 class="navbar-brand fw-bold text-white">API REST</h1>
    <!-- <button @click="logout" v-if="isLoggedIn">Logout</button> -->
  </Nav_Bar>
  <div class="container-sm" id="form-container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4 p-3 rounded shadow bg-body">
        <h2 class="fw-bold text-center">Bienvenido</h2>

        <form action="" @submit.prevent="lodingUser">
          <div class="mb-4 form-floating">
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              v-model="username"
              required
            />
            <label for="name" class="form-label">User name</label>
          </div>
          <div class="mb-4 form-floating">
            <input
              type="password"
              class="form-control"
              id="pass"
              v-model="password"
              required
            />
            <label for="pass" class="form-label">Password</label>
          </div>
          <div class="mb-4 form-check">
            <input
              id="connected"
              type="checkbox"
              name="connected"
              class="form-check-input"
              v-model="acceptTerms"
            />
            <label for="connected" class="form-check-label">Connected</label>
          </div>
          <div class="alert alert-danger" v-if="error">{{ error }}</div>
          <div class="d-grid">
            <button type="submit" class="btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Nav_Bar from "@/components/Nav_Bar.vue";
import { getUser, loginUser } from "@/services/User.services";
import { mapActions } from "vuex";
import { deleteConfigAuth } from "../Variabe/APILogic.js";

export default {
  name: "LoginVue",

  components: {
    Nav_Bar,
  },

  data() {
    return {
      username: "",
      password: "",
      acceptTerms: false,
      error: "",
      users: [],
    };
  },
  methods: {
    ...mapActions(["login"]),

    async lodingUser() {
      try {
        if (!this.username || !this.password) {
          this.error = "Por favor, cumple todo los campos";
          return;
        }
        if (!this.acceptTerms) {
          this.error = "Debes estar conectado";
          return;
        }

        this.error = "";

        let users = await getUser();
        const foundUser = users.find(
          (u) => u.user === this.username && u.password === this.password
        );

        if (foundUser) {
          const token = await loginUser(foundUser.user, foundUser.password);
          localStorage.setItem("token", token);

          this.login();
          this.$router.push({ name: "home" });
        }
      } catch (error) {
        this.error = "Error en la conexion a la Base de datos";
      }
      this.error = "";
    },
  },

  mounted() {
    deleteConfigAuth();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

#navbar,
#form-container {
  font-family: Montserrat;
}
.btn {
  background-color: purple;
  color: white;
  font-weight: bold;
}
#form-container {
  padding-top: 50px;
}
</style>
