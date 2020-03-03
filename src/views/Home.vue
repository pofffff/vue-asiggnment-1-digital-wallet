<template>
  <div class="container">
    <Top headline="E - Wallet" span="Active Card" />
    <Card :card="activeCard" class="active" />
    <section class="card-holder">
      <CardStack :cards="cards" @setCard="setCard" class="cardStack" />
      <SetCard v-if="btnOverlay" @close="close" @active="active" @remove="remove" />
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
import SetCard from "../components/SetCard";
export default {
  name: "Home",
  components: { Top, Card, CardStack, SetCard },
  data: () => {
    return {
      storedCards: localStorage.getItem("cards"),
      cards: [],
      activeCard: {},
      btnOverlay: false,
      index: ""
    };
  },
  watch: {
    storedCards() {
      this.cards = JSON.parse(this.storage);
    }
  },
  methods: {
    add() {
      this.$router.push("/AddCard");
    },
    setCard(index) {
      // Set card as active or delete from CardStack
      // Save index to data
      this.index = index;
      this.btnOverlay = true;
    },
    active() {
      // Active card stored in localStorage
      // Doesn't change when switching page or close app
      const card = this.cards[this.index];
      localStorage.setItem("activeCard", JSON.stringify(card));
      this.activeCard = card;
      this.btnOverlay = false;
    },
    remove() {
      // Remove from cardStack and rewrite localStorage
      this.cards.splice(this.index, 1);
      localStorage.setItem("cards", JSON.stringify(this.cards));
      this.activeCard = {};
      this.btnOverlay = false;
    },
    close() {
      this.btnOverlay = false;
    }
  },
  mounted() {
    // All Cards
    if (localStorage.getItem("cards")) {
      this.cards = JSON.parse(localStorage.getItem("cards"));
    } else {
      localStorage.setItem("cards", JSON.stringify(this.cards));
    }
    // Active Card
    if (localStorage.getItem("activeCard")) {
      this.activeCard = JSON.parse(localStorage.getItem("activeCard"));
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .active {
    height: 15rem;
  }

  .card-holder {
    display: flex;
    flex-direction: column;
    margin-top: 6.5rem;
  }
}
</style>
