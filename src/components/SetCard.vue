<template>
  <section class="btn-overlay">
    <button @click="close" class="close">
      <i class="fas fa-times"></i>
    </button>
    <button @click="active" class="set-card">Set Active</button>
    <button @click="remove" class="set-card">Delete</button>
  </section>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
    active() {
      this.$emit("active");
    },
    remove() {
      this.$emit("remove");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

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
    color: $black;
    background: none;
    border: none;
    font-size: 1.5rem;
  }
}
</style>