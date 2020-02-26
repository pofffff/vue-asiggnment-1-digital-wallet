<template>
  <div class="header">
    <h1>{{headline}}</h1>
    <span>{{span}}</span>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: {
    headline: String,
    span: String
  }
};
</script>

<style lang="scss" scoped>
$black: #222222;
$grey: rgba(34, 34, 34, 0.6);

.header {
  font-family: "Source Sans Pro";
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.2rem;
    font-weight: bold;
    color: $black;
  }

  span {
    font-size: 0.8rem;
    font-weight: 600;

    color: $grey;
  }
}
</style>