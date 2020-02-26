<template>
  <div class="container">
    <Top headline="Add New Card" span="New Card" />
    <Card class="card" />
    <CardForm @add="add" />
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
import CardForm from "../components/CardForm";

export default {
  name: "AddCard",

  components: {
    Top,
    Card,
    CardForm
  },
  data: () => {
    return {
      cards: []
    };
  },
  watch: {
    cards() {
      localStorage.setItem("cards", JSON.stringify(this.cards));
    }
  },
  methods: {
    add(input) {
      if (localStorage.getItem("cards")) {
        this.cards = JSON.parse(localStorage.getItem("cards"));
        this.cards.push(input);

        localStorage.setItem("cards", JSON.stringify(this.cards));
      }
      this.$router.push("/", this.cards);
    }
  },
  mounted() {
    if (localStorage.getItem("cards")) {
      this.cards = JSON.parse(localStorage.getItem("cards"));
    } else {
      localStorage.setItem("cards", JSON.stringify(this.cards));
    }
  }
};
</script>


<style lang="scss" scoped>
$yellow: #ffae34;
$black: #222222;
$shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
$mono: "PT Mono";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
