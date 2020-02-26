<template>
  <div class="form">
    <label for="number">Card Number</label>
    <input type="text" name="number" v-model="number" />
    <label for="holder">Card Holder</label>
    <input type="text" name="holder" v-model="holder" />
    <section class="split">
      <div class="numbers">
        <label for="valid">Valid Thru</label>
        <input class="input" type="text" name="valid" v-model="valid" />
      </div>
      <div class="numbers">
        <label for="cvc">CVC</label>
        <input class="input" type="text" name="cvc" v-model="cvc" />
      </div>
    </section>
    <label for="vendor">Vendor</label>
    <select name="vendor" id="vendor" v-model="vendor">
      <option style="display: none">Select</option>
      <option value="bitcoin inc">Bitcoin Inc</option>
      <option value="ninja bank">Ninja Bank</option>
      <option value="block chain inc">Block Chain Inc</option>
      <option value="evil corp">Evil Corp</option>
    </select>
    <div class="button">
      <button @click="add">Add Card</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      number: "",
      holder: "",
      valid: "",
      cvc: "",
      vendor: ""
    };
  },
  methods: {
    add() {
      const input = {
        number: this.number,
        holder: this.holder,
        valid: this.valid,
        cvc: this.cvc,
        vendor: this.vendor
      };
      this.$emit("add", input);
    }
  }
};
</script>

<style lang="scss" scoped>
$mono: "PT Mono";
$grey: rgba(0, 0, 0, 0.8);
$black: #222222;
$yellow: #ffae34;

.form {
  width: 24rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  font-family: $mono;

  .split {
    display: grid;
    grid-template-columns: 11rem 11rem;
    width: 100%;
    column-gap: 2rem;
    justify-content: space-between;

    .input {
      width: 100%;
    }

    .numbers {
      display: flex;
      flex-direction: column;
    }
  }

  label {
    font-size: 0.8rem;
    color: $grey;
    font-weight: 600;
  }

  input {
    margin: 5px 0 15px 0;
    padding: 1rem;
    color: $black;
    border: 1px solid $black;
    font-family: $mono;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 8px;
  }

  select {
    margin: 5px 0 15px 0;
    padding: 1rem;
    color: $black;
    border: 1px solid $black;
    font-family: $mono;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 8px;
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
    align-items: center;
    justify-content: center;
    border: solid 1px black;
    border-radius: 8px;
    text-transform: uppercase;
    font-family: $mono;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    color: white;
    background: black;
  }
}
</style>