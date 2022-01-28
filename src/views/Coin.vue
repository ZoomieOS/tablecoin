<template lang="pug">
.container
  section.coin-info
    h1 {{ coinFullInfo.name }}
    .coin-cards
      div
        h3 Price
        span {{ "$" + optimizeNumber(coinFullInfo.priceUsd) }}
      div
        h3 Volume (24Hr)
        span {{ "$" + optimizeNumber(coinFullInfo.volumeUsd24Hr) }}
      div
        h3 Supply
        span {{ "$" + optimizeNumber(coinFullInfo.supply) }}
      div
        h3 Market Cap
        span {{ "$" + optimizeNumber(coinFullInfo.marketCapUsd) }}
      div
        h3 Change (24Hr)
        span
          | {{
          | optimizeNumber(coinFullInfo.changePercent24Hr) + "%"
          | }}
    h2 History:
    chart(:linedata="coinHistory")
</template>

<script>
import optimizeNumber from "../components/mixins/optimizeNumber";
import chart from "../components/Chart.vue";

export default {
  name: "Coin",
  mixins: [optimizeNumber],
  components: {
    chart,
  },
  props: ["name", "coinsInfo"],
  beforeUpdate() {
    this.$store.dispatch("getCoinFullInfo", this.name);
  },
  mounted() {
  },
  computed: {
    coinFullInfo() {
      return this.$store.state.coinsFullInfo;
    },
    coinHistory() {
      return this.$store.state.coinHistory;
    },
  },
};
</script>