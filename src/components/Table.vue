<template lang="pug">
section.coin
  table
    caption
      | Coin Table
    thead
      tr
        th(scope="col") Rank
        th(scope="col") Name
        th(scope="col") Price
        th(scope="col") Change(24Hr)
        th(scope="col")
    tbody
      tr
        td(data-label="Rank") 1
        td(data-label="Name")
          | Bitcoin
          sup BTC
        td(data-label="Price") $1,190
        td(data-label="Change(24Hr)")
          span.increase 1.24%
        td
          a.btn(href="#") Add To Portfolio
      tr
        td(data-label="Rank") 2
        td(data-label="Name")
          | Ethereum
          sup ETH
        td(data-label="Price") $1,190
        td(data-label="Change(24Hr)")
          span.decrease -1.24%
        td
          a.btn(href="#") Add To Portfolio
      tr
        td(data-label="Rank") 3
        td(data-label="Name")
          | Tether
          sup USDT
        td(data-label="Price") $1,190
        td(data-label="Change(24Hr)")
          span.increase 22.24%
        td
          a.btn(href="#") Add To Portfolio
      tr
        td(data-label="Rank") 4
        td(data-label="Name")
          | BNB
          sup BNB
        td(data-label="Price") $1,190
        td(data-label="Change(24Hr)")
          span.increase 13.24%
        td
          a.btn(href="#") Add To Portfolio
      tr
        td(data-label="Rank") 5
        td(data-label="Name")
          | USD Coin
          sup USDC
        td(data-label="Price") $1,190
        td.decrease(data-label="Change(24Hr)")
          span.decrease -2.24%
        td
          a.btn(href="#") Add To Portfolio
  .pagination
    a.btn(href="#")
      i.fas.fa-chevron-left
      |
      | Prev
    a.btn(href="#")
      | Next
      i.fas.fa-chevron-right
</template>


<style lang="sass">
table
    border: 1px solid #ccc
    border-collapse: collapse
    margin: 0
    padding: 0
    width: 100%
    table-layout: fixed
    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px
    border-radius: 10px

caption
    font-size: 1.5em
    margin: 0.5em 0 0.75em

tr
    background-color: #f8f8f8
    border: 1px solid #ddd
    padding: 0.35em

th,
td
    padding: 0.625em
    text-align: center

    span.decrease
        color: rgb(244, 67, 54)

    span.increase
        color: rgb(24, 198, 131)

    &:last-child
        text-align: center

    sup
        font-size: 10px
        color: #616161

th
    font-size: 0.85em
    letter-spacing: 0.1em
    text-transform: uppercase

.coin
    margin: 20px 0

.pagination
    margin: 20px 0
</style>