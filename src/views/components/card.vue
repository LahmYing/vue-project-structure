<template>
  <div class="card" :class="{active: active}">red means active</div>
</template>

<script>
export default {
  props: ['active']
}
</script>

<style scoped>
.card {
  columns: #02060c;
  height: 30px;
  width: 50%;
  border: 1px solid rgb(235, 185, 50);
  text-align: center;
  padding: 5px;
  margin: 10px auto;
}
.card.active {
  color: red;
  font-weight: bolder;
}
</style>