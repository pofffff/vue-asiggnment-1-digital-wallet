<template>
  <div class="form" @input="update">
    <label for="vendor">Vendor</label>
    <select name="vendor" id="vendor" v-model="input.vendor">
      <option style="display: none">Select</option>
      <option value="bitcoin">Bitcoin Inc</option>
      <option value="ninja">Ninja Bank</option>
      <option value="blockchain">Block Chain Inc</option>
      <option value="evil">Evil Corp</option>
    </select>
    <label for="number">
      Card Number
      <span v-if="errNumber" class="error">Enter a valid number</span>
    </label>
    <input
      type="text"
      name="number"
      v-model="input.number"
      placeholder="xxxx xxxx xxxx xxxx"
      maxlength="16"
    />
    <label for="holder">
      Card Holder
      <span v-if="errHolder" class="error">Enter a valid name</span>
    </label>
    <input
      type="text"
      name="holder"
      v-model="input.holder"
      placeholder="Firstname Lastname"
      maxlength="24"
    />
    <section class="split">
      <div class="numbers">
        <label for="valid">
          Valid Thru
          <span v-if="errValid" class="error">mm/yy</span>
        </label>
        <input
          class="input"
          type="text"
          name="valid"
          v-model="input.valid"
          placeholder="MM/YY"
          maxlength="5"
        />
      </div>
      <div class="numbers">
        <label for="cvc">CVC</label>
        <input
          class="input"
          type="text"
          name="cvc"
          v-model="input.cvc"
          placeholder="xxx"
          maxlength="3"
        />
      </div>
    </section>
    <span v-if="errDate" class="error span">Not a valid year</span>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      input: {
        vendor: "",
        number: "",
        holder: "",
        valid: "",
        cvc: ""
      },
      errNumber: false,
      errHolder: false,
      errValid: false,
      errDate: false
    };
  },
  methods: {
    update() {
      // Validation of inputs
      if (this.valNumber(this.input.number) === false) {
        this.errNumber = true;
      } else {
        this.errNumber = false;
      }
      if (this.valHolder(this.input.holder) === false) {
        this.errHolder = true;
      } else {
        this.errHolder = false;
      }

      if (!this.valValid(this.input.valid)) {
        this.errValid = true;
      } else {
        this.errValid = false;
      }

      if (this.validDate(this.input.valid) === false) {
        this.errDate = true;
      } else {
        this.errDate = false;
      }

      this.$emit("update", this.input);
    },
    valNumber(number) {
      if (number.length < 16) {
        return false;
      }
    },
    valHolder(holder) {
      const pattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
      return pattern.test(holder);
    },
    valValid(valid) {
      const pattern = /^(0[1-9]|1[012])\/\d{2}$/;
      return pattern.test(valid);
    },
    validDate(date) {
      let d = new Date();
      let year = d.getFullYear();
      year = year.toString().split("");
      const yy = year[2] + year[3];
      const yyMax = (Number(yy) + 5).toString();
      const input = date.split("/");
      const inputYear = input[1];

      if (inputYear < yy || inputYear > yyMax) {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.form {
  width: 24rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  font-family: $mono;

  .error {
    color: red;
  }

  .span {
    font-size: 0.8rem;
    font-weight: 600;
    margin-left: 0.5rem;
  }

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
    color: $black1;
    font-weight: 600;
  }

  input {
    margin: 5px 0 15px 0;
    padding: 1rem;
    color: $black1;
    border: 1px solid $black2;
    font-family: $mono;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 8px;
  }

  select {
    margin: 5px 0 15px 0;
    padding: 1rem;
    color: $black2;
    border: 1px solid $black2;
    font-family: $mono;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 8px;
  }
}
</style>