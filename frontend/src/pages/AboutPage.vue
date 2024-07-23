<template>
  <!-- <Nav_Bar class="p-2 fixed-top">
    <MenuList />
  </Nav_Bar> -->
  <div id="container">
    <!-- <div id="wrapper">
          <div id="sidebar"></div>
          <div id="main"></div>
        </div> -->
    <div class="row mt-5">
      <div class="col text-center">
        <img src="../assets/logo.png" id="img" alt="titulo" />
        <h1>About Us</h1>
      </div>
    </div>
  </div>
</template>

<script>
// import Nav_Bar from "@/components/Nav_Bar.vue";
// import MenuList from "@/widgets/MenuList.vue";

export default {
  name: "AboutPage",

  components: {
    // Nav_Bar,
    // MenuList,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

#navbar,
#container {
  font-family: Montserrat;
}

#container {
  padding-top: 50px;
}
</style>
