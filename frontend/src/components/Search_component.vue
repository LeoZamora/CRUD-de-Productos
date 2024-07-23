<template>
  <div id="search" class="d-flex justify-content-end me-4">
    <form action="" class="d-flex">
      <input
        type="search"
        class="form-control sm mb-3 mt-3 me-2"
        placeholder="Search"
        id="search"
        v-model="nameFilter"
        autocomplete="name"
        aria-placeholder="search"
        style="width: 300px"
        @input="handleFilter"
      />
      <button @click.prevent="handleClick" id="btn-search" class="btn align-self-center">
        <i class="bi bi-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
import { getFilterProducts } from "@/services/Products.services.js";

export default {
  name: "Search_component",

  data() {
    return {
      productFilter: [],
      nameFilter: "",
    };
  },

  methods: {
    async handleClick() {
      try {
        const response = await getFilterProducts(this.nameFilter);
        this.productFilter = response.data.filter.result;
        this.$emit("filter-result", this.productFilter);
      } catch (error) {
        throw new Error(error);
      }
    },
    async handleFilter() {
      try {
        const response = await getFilterProducts(this.nameFilter);
        this.productFilter = response.data.filter.result;
        this.$emit("filter-result", this.productFilter);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
</script>

<style scoped>
#btn-search {
  background-color: purple;
  color: white;
}
</style>
