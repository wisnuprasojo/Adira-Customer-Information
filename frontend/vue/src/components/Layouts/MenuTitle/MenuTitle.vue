<template>
  <div class="menu__title">
    <h4>{{ title }}</h4>
    <h5>{{ date }}</h5>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      date: "",
    };
  },
  created() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date();
    this.date = date.toLocaleDateString("ID-id", options);
  },
};
</script>

<style scoped>
.menu__title {
  display: flex;
  justify-content: space-between;
}
</style>
