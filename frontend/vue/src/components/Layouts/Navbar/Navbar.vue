<template>
  <div class="sidebar">
    <ul>
      <navbar-item
        v-for="menu in listMenu"
        v-bind:key="menu.title"
        v-bind:link="menu.href"
        v-bind:title="menu.title"
        v-bind:icon="menu.icon"
      >
      </navbar-item>
    </ul>
  </div>
</template>

<script>
import NavbarItem from "./NavbarItem";

export default {
  components: {
    "navbar-item": NavbarItem,
  },
  props: {
    title: String,
    listMenu: Array,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar {
  height: inherit;
  width: 280px;
  padding: 0px 15px 15px;
}

.sidebar .title-menu {
  padding: 20px;
  font-size: 22px;
  font-weight: bold;
}

.sidebar .title-menu span {
  font-size: 1.25rem !important;
}
</style>
