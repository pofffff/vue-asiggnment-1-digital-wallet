<template>
  <div class="container">
    <Top headline="E - Wallet" span="Active Card" />
    <Card :cards="cards" />
    <section class="card-holder">
      <CardStack :cards="cards" v-for="(card, index) in cardss" :key="index" class="cards" />
    </section>
    <div class="button">
      <button @click="add">add new card</button>
    </div>
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";

export default {
  name: "Home",
  components: { Top, Card, CardStack },
  data: () => {
    return {
      cardss: [
        {
          number: "123",
          holder: "123",
          valid: "123",
          cvc: "123",
          vendor: "123"
        }
      ]
    };
  },
  // hämta local storage istället för skicka params?
  methods: {
    add() {
      this.$router.push("/AddCard");
    }
  }
};
</script>

<style lang="scss" scoped>
$black: #222222;
$mono: "PT Mono";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-holder {
    display: flex;
    flex-direction: column;
    max-height: 300px;
    .cards {
      max-height: 4rem;
    }
  }
  .button {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 3rem;
    button {
      width: 24rem;
      height: 5rem;
      display: flex;
      justify-content: center;
      border: solid 1px black;
      border-radius: 8px;
      text-transform: uppercase;
      font-family: $mono;
      font-size: 1.4rem;
      font-weight: bold;
      cursor: pointer;
      background: none;
    }
  }
}
</style>
