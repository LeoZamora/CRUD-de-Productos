<template>
  <div
    class="modal fade show"
    tabindex="-1"
    role="dialog"
    style="display: block; background: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-between">
          <h5 class="modal-tittle"><span>Add Product</span></h5>
          <button type="button" class="close btn" id="btn-close" @click="closeAddModal">
            <i class="bi bi-x-circle"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="col-md-6">
              <div class="form-group">
                <label for="code"><span>Code: </span></label>
                <input
                  type="text"
                  id="code"
                  class="form-control"
                  v-model="getNewProduct.Codigo"
                  placeholder="Enter product code"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  @input="clearError('error1')"
                />
                <div v-if="errors.error1" class="alert alert-danger">
                  {{ errors.error1 }}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="name"><span>Name: </span></label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    autocomplete="name"
                    v-model="getNewProduct.Nombre"
                    placeholder="Enter product name"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="precie"><span>Precie: </span></label>
                  <input
                    id="precie"
                    type="text"
                    class="form-control"
                    v-model="getNewProduct.Precio"
                    placeholder="Enter product precie"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    @input="clearError('error2')"
                  />
                  <div v-if="errors.error2" class="alert alert-danger">
                    {{ errors.error2 }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="category"><span>Category: </span></label>
                  <input
                    type="text"
                    id="category"
                    class="form-control"
                    v-model="getNewProduct.Categoria"
                    placeholder="Enter product category"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    @input="clearError('error3')"
                  />
                  <div v-if="errors.error3" class="alert alert-danger">
                    {{ errors.error3 }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="tipoEmp"><span>Packaging type: </span></label>
                  <input
                    type="text"
                    id="tipoEmp"
                    class="form-control"
                    v-model="getNewProduct.TipoEmpaque"
                    placeholder="Enter product packaging type"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    @input="clearError('error4')"
                  />
                  <div v-if="errors.error4" class="alert alert-danger">
                    {{ errors.error4 }}
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="form-group">
                <label for="desc"><span>Description: </span></label>
                <textarea
                  id="desc"
                  type="textarea"
                  class="form-control"
                  v-model="getNewProduct.Descripcion"
                  placeholder="Enter product description"
                ></textarea>
              </div>
            </div>
            <div v-if="msg" class="alert alert-danger">{{ msg }}</div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end">
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
            id="btn-cancel"
            class="btn btn-secondary"
            @click="closeAddModal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveProduct } from "@/controllers/Save.controller";

export default {
  name: "AddProduct",

  data() {
    return {
      getNewProduct: {
        Codigo: null,
        Nombre: "",
        Precio: null,
        Descripcion: "",
        Categoria: null,
        TipoEmpaque: null,
      },
      msg: "",
      errors: {
        error1: "",
        error2: "",
        error3: "",
        error4: "",
      },
    };
  },

  methods: {
    closeAddModal() {
      this.$emit("close");
    },

    saveChanges() {
      this.errors = {
        error1: "",
        error2: "",
        error3: "",
        error4: "",
      };

      if (
        !this.getNewProduct.Codigo ||
        !this.getNewProduct.Categoria ||
        !this.getNewProduct.Descripcion ||
        !this.getNewProduct.Nombre ||
        !this.getNewProduct.Precio ||
        !this.getNewProduct.TipoEmpaque
      ) {
        this.mgs = "Por favor complete todos los campos";
        return;
      }

      this.msg = "";

      if (isNaN(this.getNewProduct.Codigo)) {
        this.errors.error1 = "Product code must be a valid number.";
        return;
      }
      if (isNaN(this.getNewProduct.Precio)) {
        this.errors.error2 = "Product price must be a valid number.";
        return;
      }
      if (isNaN(this.getNewProduct.Categoria)) {
        this.errors.error3 = "Product category must be a valid number.";
        return;
      }
      if (isNaN(this.getNewProduct.TipoEmpaque)) {
        this.errors.error4 = "Packaging type must be a valid number.";
        return;
      }

      saveProduct(this.getNewProduct);
      this.closeAddModal();
      console.log(this.getNewProduct);
    },

    clearError(err) {
      this.errors[err] = "";
    },
  },
};
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
