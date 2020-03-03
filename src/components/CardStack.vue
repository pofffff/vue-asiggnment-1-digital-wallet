<template>
  <div class="cards">
    <div v-for="(card, index) in cards" :key="index" @click="setCard(index)" class="cardWrapper">
      <Card class="card" :card="card" />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  components: {
    Card
  },
  props: { cards: Array },
  methods: {
    setCard(index) {
      this.$emit("setCard", index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.cards {
  height: 24rem;

  .cardWrapper:last-child {
    overflow: visible;
  }

  .card {
    cursor: pointer;
    height: 2.5rem;
  }
}
</style>