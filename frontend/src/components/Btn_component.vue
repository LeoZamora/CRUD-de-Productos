<template>
  <div class="me-5 ms-4">
    <button id="btn" type="button" class="btn btn-white btn-sm">
      <i class="bi bi-plus-circle-fill me-2" id="icon-plus"></i
      ><span>agregar productos</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Btn_widgets",
};
</script>

<style scoped>
#icon-plus {
  color: white;
}

#btn {
  background-color: purple;
  color: white;
  font-weight: bold;
}
</style>
