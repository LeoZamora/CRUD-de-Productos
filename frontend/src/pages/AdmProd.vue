<template>
  <div>
    <div id="sect-1" class="d-flex justify-content-between align-items-center">
    <Btn_component @click="showAddModal" id="btn-w" />
    <Search_component @filter-result="handleFilteredResults" />
  </div>
  <div>
    <EditProduct
      v-if="isEditModalVisible"
      :producto="selectProduct"
      @close="closeModal"
    />
    <AddProduct v-if="isAddModalVisible" @close="closeModal" />
    <AlertDelet v-if="isAlertVisible" :Id="selectIdProduct" @close="closeModal" />
  </div>

  <section id="container">
    <div id="container-table">
      <div class="table-responsive ms-4 me-4 p-2 shadow rounded">
        <table class="table table-striped" id="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripcion</th>
              <th>Categoria</th>
              <th id="action">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pd in productos" :key="pd.Id">
              <td>{{ pd.Id }}</td>
              <td>{{ pd.Nombre }}</td>
              <td>C${{ pd.Precio }}</td>
              <td>{{ pd.Descripcion }}</td>
              <td>{{ pd.fk_id_Cat }}</td>
              <td class="col-2">
                <div class="d-flex justify-content-around">
                  <button class="btn btn-primary btn-sm" @click="showModal(pd)">
                    <i class="bi bi-pencil-fill"></i>
                  </button>
                  <button class="btn btn-danger btn-sm" @click="showAlert(pd.Id)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h2 id="page">Pages</h2>
          </div>
          <div>
            <button
              class="btn shadow-sm"
              v-if="isBtnVisible"
              @click.prevent="reloadProducts()"
            >
              <i class="bi bi-arrow-return-left"></i>
            </button>
          </div>
          <div>
            <nav aria-label="Page navegation">
              <ul class="pagination">
                <li class="page-item" :class="{ disable: currentPage === 1 }">
                  <a
                    class="page-link"
                    @click.prevent="goToPage(currentPage - 1)"
                    aria-label="Previous"
                  >
                    <span class="" aria-hidden="true"
                      ><i class="bi bi-caret-left"></i>
                    </span>
                  </a>
                </li>
                <li class="page-item" v-if="currentPage > 1">
                  <a class="page-link" @click.prevent="goToPage(currentPage - 1)">{{
                    currentPage - 1
                  }}</a>
                </li>

                <li class="page-item active">
                  <a class="page-link">
                    {{ currentPage }}
                  </a>
                </li>

                <li class="page-item" v-if="currentPage < totalPages">
                  <a class="page-link" @click.prevent="goToPage(currentPage + 1)">{{
                    currentPage + 1
                  }}</a>
                </li>

                <li class="page-item" :class="{ disable: currentPage === totalPages }">
                  <a
                    class="page-link"
                    @click.prevent="goToPage(currentPage + 1)"
                    aria-label="Next"
                  >
                    <span class="" aria-hidden="true"
                      ><i class="bi bi-caret-right"></i
                    ></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
// import MenuList from "@/widgets/MenuList.vue";
// import Nav_Bar from "../components/Nav_Bar.vue";
import Search_component from "../components/Search_component.vue";
import Btn_component from "@/components/Btn_component.vue";
import EditProduct from "@/widgets/EditProduct.vue";
import AddProduct from "@/widgets/AddProduct.vue";
import AlertDelet from "@/widgets/AlertDelet.vue";
import getCategoria from "@/services/Categoria.services";
import { getProducts } from "@/services/Products.services";

export default {
  name: "AdmProd",

  data() {
    return {
      productos: [],
      totalPages: 0,
      currentPage: 1,
      error: "",
      isBtnVisible: false,
      isEditModalVisible: false,
      isAddModalVisible: false,
      isAlertVisible: false,
      selectProduct: null,
      selectIdProduct: null,
    };
  },

  components: {
    Search_component,
    Btn_component,
    EditProduct,
    AddProduct,
    AlertDelet,
  },

  methods: {
    async loadingProducts(page = 1) {
      try {
        const response = await getProducts(page);
        this.productos = response.data.filter.result;
        this.totalPages = response.data.filter.totalPages;
        this.currentPage = page;
        console.log(response.data.filter.result);

        const cat = await getCategoria();
        console.log(cat);
      } catch (error) {
        throw new Error("Error interno del servidor");
      }
    },
    goToPage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.loadingProducts(page);
        this.isBtnVisible = false;
      }
    },

    showModal(producto) {
      this.isEditModalVisible = true;
      this.selectProduct = producto;
    },

    showAlert(Id) {
      this.isAlertVisible = true;
      this.selectIdProduct = Id;
    },

    showAddModal() {
      this.isAddModalVisible = true;
    },

    closeModal() {
      this.isEditModalVisible = false;
      this.isAddModalVisible = false;
      this.isAlertVisible = false;
      this.selectProduct = null;
      this.selectIdProduct = null;
    },

    async handleFilteredResults(filteredResult) {
      this.productos = filteredResult;
      this.isBtnVisible = true;
    },

    async reloadProducts() {
      try {
        await this.loadingProducts();
        this.isBtnVisible = false;
      } catch (error) {
        console.error("Error al recargar productos:", error);
      }
    },
  },

  mounted() {
    this.loadingProducts();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

/* #sect-1 {
  padding-top: 50px;
} */

#prod {
  font-weight: bold;
}

#page {
  font-size: 14px;
  font-family: Montserrat;
  font-weight: bold;
}

#table {
  font-family: Montserrat;
}

#container-table {
  height: 100%;
}

#navbar {
  font-family: Montserrat;
}

#action {
  text-align: center;
}

.page-item {
  cursor: pointer;
}

#btn-w {
  font-family: Montserrat;
}
</style>
