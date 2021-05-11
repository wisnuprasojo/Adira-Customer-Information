<template>
  <router-link
    v-bind:to="link"
    custom
    v-slot="{ navigate, isActive, isExactActive }"
    tag="li"
  >
    <li
      v-on:click="navigate"
      v-bind:class="[
        isActive && 'router-link-active',
        isExactActive && 'router-link-exact-active',
      ]"
      v-on:keypress.enter="navigate"
      role="link"
    >
      <i v-bind:class="icon"></i> <span>{{ title }}</span>
    </li>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    icon: String,
  },
};
</script>

<style scoped>
i {
  margin-right: 10px;
}

li {
  padding: 15px;
  background-color: transparent;
  text-decoration: none;
  color: black;
  font-size: 14px;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 5px;
}

li:hover {
  background-color: #fff;
}

a {
  width: 100%;
}

li.router-link-exact-active {
  background-color: #fff;
}

li.router-link-exact-active i {
  color: black;
}
</style>
