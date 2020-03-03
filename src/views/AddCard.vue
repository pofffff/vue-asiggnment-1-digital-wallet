<template>
  <div class="container">
    <Top headline="Add New Card" span="New Card" />
    <Card :card="card" />
    <CardForm @add="add" @update="update" />
    <div class="button">
      <button @click="add">Add Card</button>
    </div>
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
      card: {},
      cards: []
    };
  },
  methods: {
    update(input) {
      this.card = input;
    },
    add() {
      // If isValid is true, proceed to add card
      if (this.card.isValid === true) {
        if (localStorage.getItem("cards")) {
          this.cards = JSON.parse(localStorage.getItem("cards"));
          this.cards.push(this.card);
          localStorage.setItem("cards", JSON.stringify(this.cards));
        } else {
          this.cards.push(this.card);
          localStorage.setItem("cards", JSON.stringify(this.cards));
        }
        this.$router.push("/");
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .button {
    button {
      background-color: black;
      color: white;
    }
  }
}
</style>
