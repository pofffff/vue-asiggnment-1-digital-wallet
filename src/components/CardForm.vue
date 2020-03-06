<template>
  <!-- Watching any input in cardform-->
  <div class="form" @input="update">
    <label for="vendor">
      Vendor
      <span v-if="invalid.vendor" class="error">Must choose vendor</span>
    </label>
    <select v-model="vendor" name="vendor" id="vendor">
      <option style="display: none">Select</option>
      <option value="bitcoin">Bitcoin Inc</option>
      <option value="ninja">Ninja Bank</option>
      <option value="blockchain">Block Chain Inc</option>
      <option value="evil">Evil Corp</option>
    </select>
    <label for="number">
      Card Number
      <span v-if="invalid.number" class="error">Enter a valid number</span>
    </label>
    <input
      v-model="number"
      type="text"
      name="number"
      placeholder="xxxx xxxx xxxx xxxx"
      maxlength="16"
    />
    <label for="holder">
      Card Holder
      <span v-if="invalid.holder" class="error">Enter a valid name</span>
    </label>
    <input
      v-model="holder"
      type="text"
      name="holder"
      placeholder="Firstname Lastname"
      maxlength="24"
    />
    <section class="split">
      <div class="numbers">
        <label for="valid">
          Valid Thru
          <span v-if="invalid.valid" class="error">mm/yy</span>
        </label>
        <input
          v-model="valid"
          class="input"
          type="text"
          name="valid"
          placeholder="MM/YY"
          maxlength="5"
        />
      </div>
      <div class="numbers">
        <label for="cvc">
          CVC
          <span v-if="invalid.cvc" class="error">xxx</span>
        </label>
        <input v-model="cvc" class="input" type="text" name="cvc" placeholder="xxx" maxlength="3" />
      </div>
    </section>
    <span v-if="invalid.date" class="error span">Not a valid year</span>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      // Inputs binded with v-model and using watch
      // on each one to validate the input.
      // If input is correct invalid {key} will be updated.
      vendor: "",
      number: "",
      holder: "",
      valid: "",
      cvc: "",

      // If any key in invalid is true,
      // add-button wont push route or add to local storage
      invalid: {
        vendor: false,
        number: false,
        holder: false,
        valid: false,
        date: false,
        cvc: false
      }
    };
  },
  watch: {
    // Validation of inputs
    vendor() {
      // Can not be empty
      if (this.vendor === "") {
        this.invalid.vendor = true;
      } else {
        this.invalid.vendor = false;
      }
    },
    // Regex functions are separated and found in methods
    number() {
      // Must be 16 numbers
      if (this.valNumber(this.number) === false) {
        this.invalid.number = true;
      } else {
        this.invalid.number = false;
      }
    },
    holder() {
      // Two words with only letters
      if (this.valHolder(this.holder) === false) {
        this.invalid.holder = true;
      } else {
        this.invalid.holder = false;
      }
    },
    valid() {
      // Written xx/xx
      if (!this.valValid(this.valid)) {
        this.invalid.valid = true;
      } else {
        this.invalid.valid = false;
      }

      // Month 01-12 and year not before this year and max 3 years ahead from now
      if (this.valDate(this.valid) === false) {
        this.invalid.date = true;
      } else {
        this.invalid.date = false;
      }
    },
    cvc() {
      // Must be 3 numbers
      if (this.valCVC(this.cvc) === false) {
        this.invalid.cvc = true;
      } else {
        this.invalid.cvc = false;
      }
    }
  },
  methods: {
    // This method emits every input to display on card
    update() {
      const input = {
        vendor: this.vendor,
        number: this.number,
        holder: this.holder,
        valid: this.valid,
        cvc: this.cvc,
        // add-button will check "isValid" before proceed to add card
        isValid: false
      };
      // Check if all isValid: {keys} are false
      const allKeysFalse = Object.keys(this.invalid).every(
        k => !this.invalid[k]
      );

      if (allKeysFalse === true) {
        // If true, check if any input: {key} is empty
        const emptyKey = Object.keys(input).some(key => input[key] === "");
        if (emptyKey === false) {
          input.isValid = true;
        }
      }

      // Emit to AddCard
      this.$emit("update", input);
    },
    // VALIDATION METHODS
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
    valDate(date) {
      let d = new Date();
      let year = d.getFullYear();
      year = year.toString().split("");
      const yy = year[2] + year[3];
      const yyMax = (Number(yy) + 3).toString();
      const input = date.split("/");
      const inputYear = input[1];

      if (inputYear < yy || inputYear > yyMax) {
        return false;
      }
    },
    valCVC(cvc) {
      const pattern = /\d{3}/;
      return pattern.test(cvc);
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
    color: $black2;
    font-weight: 600;
  }

  input {
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