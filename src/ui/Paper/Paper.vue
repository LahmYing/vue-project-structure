<template>
  <div class="mri-paper mri-shadow-md" :class="[size]">
    <div class="mri-paper--main">
      <slot></slot>
    </div>
    <div class="mri-paper--aside mri-hairline--left">
      <slot name="paper-aside"></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../_styles/variables.scss";  
  .mri-paper { display: grid; grid-template-columns: 1fr 400px; background: #fff; height: 89vh; border-radius: $radius_lg; }
  .mri-paper .mri-paper--main { padding: $gap_3; overflow-y: auto; }
  .mri-paper.full .mri-paper--main { width: 100%; }
  .mri-paper.large .mri-paper--main { width: 1200px; }
  .mri-paper.middle .mri-paper--main { width: 1080px; }
  .mri-paper.small .mri-paper--main { width: 960px; }
  .mri-paper .mri-paper--aside { padding: $gap_3; overflow-y: auto; }
</style>

<script>
export default {
  props: {
    'size': {
      type: String,
      default: 'full',
      validator: function (value) {
        return ['full', 'large', 'middle', 'small'].indexOf(value) !== -1
      }
    }
  }
}
</script>
