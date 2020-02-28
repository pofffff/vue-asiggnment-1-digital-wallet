<template>
  <div class="container">
    <Top headline="E - Wallet" span="Active Card" />
    <Card :card="card" class="active" />
    <section class="card-holder">
      <CardStack :cards="cards" @setCard="setCard" class="cardStack" />
      <section v-if="btnOverlay" class="btn-overlay">
        <button @click="close" class="close">
          <i class="fas fa-times"></i>
        </button>
        <button @click="active" class="set-card">Set Active</button>
        <button @click="remove" class="set-card">Delete</button>
      </section>
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
      storage: localStorage.getItem("cards"),
      cards: [],
      btnOverlay: false,
      card: {},
      index: ""
    };
  },
  watch: {
    storage() {
      this.cards = JSON.parse(this.storage);
    }
  },
  methods: {
    add() {
      this.$router.push("/AddCard");
    },
    setCard(index) {
      console.log(index);
      this.index = index;
      this.btnOverlay = true;
    },
    active() {
      this.card = this.cards[this.index];
      this.btnOverlay = false;
    },
    remove() {
      console.log(this.index);
      this.cards.splice(this.index, 1);
      localStorage.setItem("cards", JSON.stringify(this.cards));
      this.btnOverlay = false;
      this.card = {};
    },
    close() {
      this.btnOverlay = false;
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
@import "../assets/scss/variables.scss";

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

  .btn-overlay {
    width: 20rem;
    height: 15rem;
    background: $white;
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 10px;
    box-shadow: $shadow;

    .close {
      display: flex;
      align-self: flex-end;
      justify-content: flex-start;
      margin: -2rem 0.75rem 0 0;
      color: $black1;
      background: none;
      border: none;
      font-size: 1.5rem;
    }
  }
}
</style>
