<template>
  <div
    class="mri-pad"
    :class="{ 'with-left': $slots['left-side'], 'with-right': $slots['right-side'] }"
  >
    <!--  Pad left  -->
    <div class="pad-left" v-if="$slots['left-side']">
      <slot name="left-side"></slot>
    </div>

    <!--  Pad main  -->
    <div class="pad-main">
      <slot></slot>
    </div>

    <!--  Pad right  -->
    <div class="pad-right" v-if="$slots['right-side']">
      <slot name="right-side"></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../_styles/variables.scss";  
  .mri-pad { position: relative; display: grid; grid-template-columns: 1fr; justify-items: stretch; margin: 0 auto; min-width: 1080px; padding: $gap_1; }
  .mri-pad.with-left { grid-template-columns: 200px 1fr; }
  .mri-pad.with-right { grid-template-columns: 1fr 120px; }
  .mri-pad.with-left.with-right { grid-template-columns: 200px 1fr 120px; }
</style>

<script>
export default {
  mounted () { }
}
</script>
