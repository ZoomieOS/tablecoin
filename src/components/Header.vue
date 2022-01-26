<template lang="pug">
header
  .menu-btn
    i.fas.fa-bars
  .container
    nav.main-nav
      img.logo(src="../assets/logo.png", alt="CoinTable")
      ul.main-menu
        li
          a(href="#") Bitcoin 134,32 USD
        li
          a(href="#") Etherium 12,32 USD
        li
          a(href="#") Tether 1 USD
        li
          a(href="#")
            | Portfolio: 134,32 USD
            span(style="color: green") +2,38
            |
            | (1,80%)
</template>

<style lang="sass" scoped>
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
</style>
