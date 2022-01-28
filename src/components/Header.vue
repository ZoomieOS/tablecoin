<template lang="pug">
header
  .menu-btn
    i.fas.fa-bars
  .container
    nav.main-nav
      router-link(:to="{name: 'Main'}")
        img.logo(src="../assets/logo.png" alt="CoinTable")
      ul.main-menu
        li(v-for="item in relatedCoins" :key="item.id")
          router-link(:to="{\
          name: 'Coin',\
          params: {\
          name: item.name.toLowerCase(),\
          coinsInfo: item,\
          },\
          }")
            | {{ item.name + " - " + optimizeNumber(item.priceUsd) + " USD" }}
        li
          a(href="#")
            | Portfolio: 134,32 USD
            span(style="color: green") +2,38
            |               (1,80%)
</template>

<script>
import optimizeNumber from "./mixins/optimizeNumber";

export default {
  name: "Header",
  mixins: [optimizeNumber],
  computed: {
    relatedCoins() {
      return this.$store.getters.relatedCoins;
    },
  },
};
</script>