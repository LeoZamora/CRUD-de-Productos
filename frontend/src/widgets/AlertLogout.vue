<template>
  <div
    class="modal fade show"
    tabindex="1"
    role="dialog"
    style="display: block; background: rgba(0, 0, 0, 0.5)"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-between">
          <h5 class="modal-title">
            <i class="fas fa-exclamation-triangle text-warning"></i>Confirmación
          </h5>
          <button type="button" class="close btn" aria-label="Close" @click="closeAlert">
            <i class="bi bi-x-circle"></i>
          </button>
        </div>
        <div class="modal-body">
          <p>¿Está seguro de que desea cerrar sesion?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click.prevent="closeAlert">
            Cancel
          </button>
          <button type="button" class="btn btn-danger" @click="confirmExit">Acept</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AlertLogout",

  methods: {
    ...mapActions(["logout"]),

    closeAlert() {
      this.$emit("close");
    },

    confirmExit() {
      try {
        this.closeAlert();
        this.logout();
        this.$router.push({ name: "login" });
      } catch (error) {
        console.log("Error: ", error);
      }
    },
  },
};
</script>
