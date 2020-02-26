<template>
  <div class="container">
    <article class="card">
      <div class="chip">
        <img src="../assets/chip-dark.svg" alt />
        <img class="vendor" src="../assets/vendor-bitcoin.svg" alt />
      </div>
      <div class="number">
        <p>1234 1234 1234 1234</p>
      </div>
      <div class="holder">
        <p class="label">Card Holder</p>

        <p>Tilda Charlotte</p>
      </div>
      <div class="valid">
        <p class="label">Valid Thru</p>
        <p>11/03</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cards: Array
  }
};
</script>


<style lang="scss" scoped>
$yellow: #ffae34;
$black: black;
$grey: rgba(0, 0, 0, 0.8);
$shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
$mono: "PT Mono";

.container {
  margin: 5px 0 1rem 0;
}
.card {
  display: grid;
  width: 24rem;
  height: 15rem;
  background-color: $yellow;
  border-radius: 8px;
  box-shadow: $shadow;
  grid-template-areas: "chip chip chip chip" "number number number number" "holder holder holder valid";
  grid-template-rows: 80px 45px 50px;
  row-gap: 15px;
  align-content: center;
  justify-content: center;
  font-size: 1.1rem;
  font-family: $mono;
  overflow: hidden;

  .label {
    color: $grey;
    font-size: 0.8rem;
  }

  .chip {
    grid-area: chip;
    display: flex;
    justify-content: space-between;

    .vendor {
      margin-right: 1rem;
    }
  }

  .number {
    grid-area: number;
    font-size: 2rem;
  }

  .holder {
    grid-area: holder;
  }

  .valid {
    grid-area: valid;
  }
}
</style>