<template lang="pug">
header
  .menu-btn
    i.fas.fa-bars
  .container
    nav.main-nav
      img.logo(src="../assets/logo.png" alt="CoinTable")
      ul.main-menu
        li(v-for="item in relatedCoins" :key="item.id")
          router-link(:to="{\
          name: 'Coin',\
          params: { name: item.name.toLowerCase() },\
          }")
            | {{
            | item.name + " - " + optimizeNumber(item.priceUsd) + " USD"
            | }}
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

<style lang="sass">
.main-nav
  display: flex
  align-items: center
  justify-content: space-between
  height: 60px
  padding: 20px 0
  font-size: 13px

.logo
  width: 160px

ul
  display: flex

  li
    padding: 0 10px

    a
      padding-bottom: 2px

      &:hover
        border-bottom: 2px solid #262626

    &.main-menu
      flex: 1
      margin-left: 20px

.menu-btn
  cursor: pointer
  position: absolute
  top: 20px
  right: 30px
  z-index: 2
  display: none
</style>
