<template>
  <div class="s-tab">
    <slot></slot>
  </div>
</template>

<style>
  .s-tab { margin: 0 -10px; font-size: 0; }
</style>

<script>
  export default {
    props: {
      value: {
        type: [String, Number],
        default: ''
      }
    }
  }
</script>
