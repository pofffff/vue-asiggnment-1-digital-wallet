<template>
  <div>
    <article :class="['card', vendor, chip]">
      <div class="chip">
        <img :src="require(`../assets/chip-${chip}.svg`)" alt />
        <img class="vendor-img" :src="require(`../assets/vendor-${vendor}.svg`)" alt />
      </div>
      <div class="number">
        <p>{{number}}</p>
      </div>
      <div class="holder">
        <p class="label">Card Holder</p>

        <p>{{holder}}</p>
      </div>
      <div class="valid">
        <p class="label">Valid Thru</p>
        <p>{{valid}}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object
  },
  data: () => {
    return {
      defaultImg: "square",
      defaultNumber: "xxxx xxxx xxxx xxxx",
      defaultHolder: "Firstname Lastname",
      defaultValid: "mm/yy"
    };
  },
  computed: {
    number() {
      if (!this.card.number) {
        return this.defaultNumber;
      } else {
        let number = this.card.number;
        number = number.match(/.{1,4}/g);
        return number.join(" ");
      }
    },
    holder() {
      if (!this.card.holder) {
        return this.defaultHolder;
      } else {
        return this.card.holder;
      }
    },
    valid() {
      if (!this.card.valid) {
        return this.defaultValid;
      } else {
        return this.card.valid;
      }
    },
    vendor() {
      if (!this.card.vendor) {
        return this.defaultImg;
      } else {
        return this.card.vendor;
      }
    },

    chip() {
      let chip = "dark";
      if (!this.card.vendor) {
        return chip;
      } else if (this.card.vendor === "bitcoin") {
        return chip;
      } else {
        chip = "light";
        return chip;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.chip {
  grid-area: chip;
  display: flex;
  justify-content: space-between;

  .vendor-img {
    margin-right: 1rem;
  }
}

.square {
  background-color: $default;

  .vendor-img {
    width: 2.5rem;
  }
}

.bitcoin {
  background-color: $bitcoin;
}
.ninja {
  background-color: $ninja;
}
.blockchain {
  background-color: $blockchain;
}
.evil {
  background-color: $evil;
}
.dark {
  color: $black1;
  text-shadow: -0.5px 0.5px 0px #3a3a3a;
}

.light {
  color: $white;
  text-shadow: 0.5px 0.5px 0px #868686, -0.5px -0.5px 0px #868686;
}

.card {
  display: grid;
  width: 24rem;
  height: 15rem;
  align-content: center;
  border-radius: 8px;
  box-shadow: $shadow;
  grid-template-areas: "chip chip chip chip" "number number number number" "holder holder holder valid";
  grid-template-rows: 80px 45px 50px;
  row-gap: 15px;
  justify-content: center;
  font-size: 1.1rem;
  font-family: $mono;

  .label {
    font-size: 0.8rem;
  }

  .number {
    grid-area: number;
    font-size: 2rem;
    width: 23rem;
  }

  .holder {
    grid-area: holder;
    width: 17rem;
  }

  .valid {
    grid-area: valid;
  }
}
</style>