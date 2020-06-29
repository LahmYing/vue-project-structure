<template>
  <div class="piece">
    <div class="title">{{title}}</div>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.piece .title{ font-size: 20px; font-weight: bolder; }
.piece .slot{ margin-bottom: 20px; padding: 5px; border-left: 3px solid yellowgreen; }
</style>