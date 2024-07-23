<template>
  <div
    class="modal fade show"
    tabindex="-1"
    role="dialog"
    style="display: block; background: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-between">
          <h5 class="modal-title">
            <i class="fas fa-exclamation-triangle text-warning"></i> Confirmación
          </h5>
          <button type="button" class="close btn" @click="closeAlert" aria-label="Close">
            <i class="bi bi-x-circle"></i>
          </button>
        </div>
        <div class="modal-body">
          <p>¿Está seguro de que desea eliminar este artículo?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click.prevent="closeAlert">
            Cancel
          </button>
          <button type="button" class="btn btn-danger" @click="confirmDelete">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deleteProduct } from "@/controllers/Delete.controllers.js";

export default {
  name: "AlertDelet",

  props: ["Id"],

  data() {
    return {
      idPd: this.Id,
    };
  },

  methods: {
    closeAlert() {
      this.$emit("close");
    },

    confirmDelete() {
      try {
        this.closeAlert();
        deleteProduct(this.idPd);
        alert("Artículo eliminado");
      } catch (error) {
        console.log(error);
      }

    },
  },
};
</script>

<style scoped>
.modal-dialog {
  margin-top: 10%;
}
</style>
