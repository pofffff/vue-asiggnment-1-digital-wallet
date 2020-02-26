<template>
  <div class="cards">
    <Card />
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "CardStack",
  components: {
    Card
  },
  props: { cards: Array }
};
</script>

<style lang="scss" scoped>
</style>