<template>
  <div class="nav-group">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  @import './../../../_styles/variables';
  .nav-group { padding: $gap_1 0; }
</style>
