<template>
  <div class="d-block mx-auto" style="width: 600px">
    <ul class="d-flex justify-content-between p-2 text-white list" id="list-menu">
      <li v-for="ls in list" :key="ls.Id">
        <router-link :to="getRoute(ls.Name_List)">
          <button>{{ ls.Name_List }}</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getList } from "@/services/MenuList.service";

export default {
  name: "MenuList",

  data() {
    return {
      list: [],
      options: {
        home: "Home",
        product: "Products",
        contact: "Contact",
        about: "About Us",
      },
    };
  },

  methods: {
    getRoute(name) {
      switch (name) {
        case this.options.home:
          return { name: "home" };
        case this.options.product:
          return { name: "productos" };
        case this.options.contact:
          return { name: "contact" };
        case this.options.about:
          return { name: "about-us" };
        default:
          return { name: "home" }; // Default route in case no match is found
      }
    },

    async loadingItems() {
      try {
        const result = await getList();
        this.list = result;
      } catch (error) {
        console.error("Error loading menu items:", error);
      }
    },
  },

  mounted() {
    this.loadingItems();
  },
};
</script>

<style scoped>
#list-menu {
  list-style: none;
  margin: 0;
}

.list li:hover {
  transition: 0.5s;
  cursor: pointer;
}

.list li button {
  background-color: transparent;
  border: none;
  color: white;
}
</style>
