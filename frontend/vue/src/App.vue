<template>
  <div id="app">
    <the-background />
    <the-header />
    <div class="global-wrapper">
      <navigation-bar v-bind:listMenu="menu" />
      <router-view />
    </div>
  </div>
</template>

<script>
import TheBackground from "./components/Layouts/Background/TheBackground";
import TheHeader from "./components/Layouts/Header/TheHeader";
import Navbar from "./components/Layouts/Navbar/Navbar";

export default {
  name: "App",
  components: {
    "the-background": TheBackground,
    "the-header": TheHeader,
    "navigation-bar": Navbar,
  },
  data() {
    return {
      menu: [
        {
          href: "/",
          title: "Profil Nasabah",
          icon: "fa fa-user-circle",
        },
        {
          href: "/datakontrak",
          title: "Data Kontrak",
          icon: "fa fa-archive",
        },
        {
          href: "/informasicollateral",
          title: "Informasi Collateral / BPKB",
          icon: "fa fa-calculator",
        },
        {
          href: "/collection",
          title: "Collection",
          icon: "fa fa-coins",
        },
        {
          href: "/insurance",
          title: "Insurance",
          icon: "fa fa-sliders-h",
        },
        {
          href: "/informasipembayaran",
          title: "Informasi Pembayaran",
          icon: "fa fa-cogs",
        },
        {
          href: "/penawaran",
          title: "Penawaran",
          icon: "fa fa-clipboard-check",
        },
        {
          href: "/pengajuanaplikasi",
          title: "Pengajuan Aplikasi",
          icon: "fa fa-times-circle",
        },
        {
          href: "/case",
          title: "Case",
          icon: "fa fa-file-invoice",
        },
      ],
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: #ffdd00 !important;
  height: 100vh;
  width: 100vw;
  scroll-behavior: smooth;
}

#app {
  height: 100vh;
  width: 100vw;
}

.global-wrapper {
  display: grid;
  grid-template-columns: 280px auto;
  padding: 0;
  height: calc(100vh - 95px);
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
