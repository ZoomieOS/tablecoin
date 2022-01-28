<template lang="pug">
div
  svg(width="800" height="500")
</template>
<script>
import * as d3 from "d3";
export default {
  props: ["lineData"],
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getHistory", this.name);

    const svg = d3.select("svg");
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;
    const g = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    const parseTime = d3.utcParse("%Y-%m-%dT%H:%M:%S.%LZ");
    const x = d3.scaleTime().rangeRound([0, width]);
    const y = d3.scaleLinear().rangeRound([height, 0]);
    const line = d3
      .line()
      .x(function (d) {
        return x(parseTime(d.date));
      })
      .y(function (d) {
        return y(d.priceUsd);
      });

    x.domain(
      d3.extent(this.lineData, function (d) {
        return parseTime(d.date);
      })
    );
    y.domain(
      d3.extent(this.lineData, function (d) {
        return d.priceUsd;
      })
    );
    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(7));
    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Price ($)");
    g.append("path")
      .datum(this.lineData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  },
};
</script>
<style scoped></style>