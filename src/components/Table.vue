<template lang="pug">
section.coin
  table
    thead
      tr
        th(v-for="(textHeader, index) in tableHeaderText" scope="col" :key="textHeader + '_' + index")
          | {{ textHeader }}
        th(scope="col")
    tbody
      tr(v-for="item in pagination" :key="item.id")
        td(data-label="Rank") {{ item.rank }}
        td(data-label="Name")
          | {{ item.name }}
          sup {{ item.symbol }}
        td(data-label="Price") {{ "$" + optimizeNumber(item.priceUsd) }}
        td(data-label="Change(24Hr)")
          span(:class="[item.changePercent24Hr < 0 ? 'decrease' : 'increase']") {{ optimizeNumber(item.changePercent24Hr) + "%" }}
        td
          a.btn(href="#" @click="showModal(item.priceUsd, item.name)") Add To Portfolio
  .pagination
    a.btn(href="#" @click="prevPage")
      i.fas.fa-chevron-left
      |  Prev
    a.btn(href="#" @click="nextPage")
      | Next
      i.fas.fa-chevron-right
  modal(v-show="isModalVisible" @close="closeModal")
    h2(slot="header") Add Coin to Portfolio
    template(slot="body")
      label(for="qty") Enter quantity:
      input(name="qty" type="text" placeholder="Enter quantity")
    template(slot="footer")
      button.btn Add
</template>

<script>
import Modal from "../components/Modal.vue";
import optimizeNumber from "./mixins/optimizeNumber";

export default {
  mixins: [optimizeNumber],
  name: "Table",
  components: { Modal },
  data() {
    return {
      tableHeaderText: ["Rank", "Name", "Price", "Chaneg(24Hr)"],
      isModalVisible: false,
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    pagination() {
      return this.$store.state.coins.filter((row, index) => {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = this.currentPage * this.pageSize;
        if (index >= start && index < end) return true;
      });
    },
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    nextPage() {
      if (this.currentPage * this.pageSize < this.$store.state.coins.length) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
};
</script>