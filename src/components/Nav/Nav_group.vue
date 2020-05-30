<template>
  <div class="nav-group">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import '../../ui/_styles/variables.scss';
.nav-group {
  padding: $gap_1 0;
}
</style>
