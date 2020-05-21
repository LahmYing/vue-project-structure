<template>
  <nav class="sub-nav mri-hairline--right">
    <slot></slot>
  </nav>
</template>

<style scoped lang="scss">
  .sub-nav { position: relative; min-width: 160px; }
  @media only screen and (max-width: 768px) {
    .sub-nav { display: none; }
  }
</style>
