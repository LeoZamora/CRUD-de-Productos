<template>
  <div
    class="modal fade show"
    tabindex="-1"
    role="dialog"
    style="display: block; background: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-between">
          <h5 class="modal-title">Edit Product</h5>
          <button type="button" class="close btn" id="btn-close" @click="closeEditModal">
            <i class="bi bi-x-circle"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="changesProduct.Name"
              autocomplete="Name"
              placeholder="Enter product name"
            />
          </div>
          <div class="form-group">
            <label for="price">Price:</label>
            <input
              type="text"
              class="form-control"
              id="price"
              v-model="changesProduct.Price"
              placeholder="Enter product price"
            />
          </div>
          <div class="form-group">
            <label for="desc">Description:</label>
            <textarea
              type="text"
              class="form-control"
              id="desc"
              v-model="changesProduct.Description"
              placeholder="Enter product description"
            />
          </div>
          <!-- <div class="form-group">
            <label for="category">Category:</label>
            <input
              type="text"
              class="form-control"
              id="category"
              v-model="changesProduct.Category"
              placeholder="Enter product category"
            />
          </div> -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            id="btn-save"
            class="btn btn-primary"
            @click="saveChanges"
          >
            Save
          </button>
          <button
            type="button"
            id="btn-closed"
            class="btn btn-secondary"
            @click="closeEditModal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCategoria from "../services/Categoria.services.js";
import { editProduct } from "@/controllers/Edit.controller";

export default {
  name: "EditProduct",

  props: ["producto"],

  data() {
    return {
      changesProduct: {
        Id: this.producto.Id,
        Name: this.producto.Nombre,
        Category: this.producto.Categoria,
        Price: this.producto.Precio,
        Description: this.producto.Descripcion,
      },
    };
  },

  methods: {
    closeEditModal() {
      this.$emit("close");
    },

    saveChanges() {
      console.log(this.changesProduct);
      editProduct(this.changesProduct);
      this.closeEditModal();
    },
  },

  mounted() {
    console.log("Producto recicbido", this.$props.producto);
  },

  created() {
    getCategoria();
  },
};
</script>

<style scoped>
.modal-header {
  /* background-color: purple; */
  color: black;
}

#btn-close {
  color: black;
}

#btn-save {
  border: none;
}

#btn-closed {
  color: white;
  border: none;
}
</style>
