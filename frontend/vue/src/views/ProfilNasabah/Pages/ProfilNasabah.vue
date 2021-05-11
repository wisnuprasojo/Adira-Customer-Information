<template>
  <div class="menu profil-nasabah">
    <menu-title v-bind:title="title" />
    <div class="menu__content">
      <!-- content -->
      <div class="menu__content-options">
        <!-- options -->
      </div>
      <div class="menu__content-form">
        <!-- form -->
      </div>
    </div>
  </div>
</template>

<script>
import MenuTitle from "../../../components/Layouts/MenuTitle/MenuTitle";

export default {
  components: {
    "menu-title": MenuTitle,
  },
  data() {
    return {
      title: "Profil Nasabah",
    };
  },
};
</script>

<style scoped>
.profil-nasabah {
  background-color: #f8f9fa;
}

.menu {
  border-radius: 10px;
  padding: 20px 20px 0px;
  height: inherit;
}
</style>
