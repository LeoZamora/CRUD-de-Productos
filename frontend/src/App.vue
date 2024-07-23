<template>
  <div class="wrapper">
    <Nav_Bar class="navbar" v-if="isLoggedIn">
      <MenuList />
      <button id="btn-out" class="btn" type="button" @click="showAlert">
        <i class="bi bi-box-arrow-in-left"></i>
      </button>
    </Nav_Bar>
    <AlertLogout v-if="isVisisible" @close="closeModal" />
    <div class="sidebar" v-if="isLoggedIn">
      <Side_BarComponent v-if="isLoggedIn" />
    </div>
    <main class="main"><router-view /></main>
    <Footer_component class="footer" v-if="isLoggedIn" />
  </div>
</template>

<script>
import MenuList from "@/widgets/MenuList.vue";
import Footer_component from "./components/Footer_component.vue";
import Side_BarComponent from "./components/Side_Bar.component.vue";
import Nav_Bar from "@/components/Nav_Bar.vue";
import AlertLogout from "./widgets/AlertLogout.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",

  data() {
    return {
      isVisisible: false,
    };
  },

  components: {
    Footer_component,
    Side_BarComponent,
    Nav_Bar,
    MenuList,
    AlertLogout,
  },

  computed: {
    ...mapGetters(["isLoggedIn"]),
  },

  methods: {
    showAlert() {
      this.isVisisible = true;
    },
    closeModal() {
      this.isVisisible = false;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto 1fr;
  height: 100vh;
}

.navbar {
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.sidebar {
  grid-column: 1;
  grid-row: 2;
  background-color: #f4f4f4;
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
}

.main {
  grid-column: 2;
  grid-row: 2;
  overflow-y: auto;
}

.footer {
  grid-column: 1 / -1;
  grid-row: 3;
  background-color: #333;
  color: white;
  text-align: center;
}
#btn-out {
  font-size: 20px;
  padding: 4px;
  padding-top: 0;
  padding-bottom: 0;
  margin-right: 10px;
  border: none;
}
</style>
