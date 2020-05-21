<template>
  <a class="mri-button" :class="[type, size, { 'disable': is_disable }]" :href="'javascript:;'">
    <span class="s-button_prefix"></span>
    <span class="s-button_text"><slot></slot></span>
    <span class="s-button_suffix"></span>
  </a>
</template>

<style lang="scss">
  @import "./../_styles/variables";
  .mri-button { position: relative; display: inline-block; vertical-align: top; color: inherit; font-size: 0; text-decoration: none; text-align: center; cursor: pointer; }
  .s-button_text { font-size: 14px; }
  /* DISABLE */
  .mri-button.disable { background: #ccc; pointer-events: none; }
  /* TYPES */
  .mri-button { background: #fff; color: $black; border-radius: $radius_md; }
  .mri-button.ghost { border: 1px solid $black; background: transparent; color: $black; }
  .mri-button.link { background: transparent; color: $black; }
  /* SIZE */
  .mri-button.sm { height: $height_1; line-height: $height_1; padding: 0 $gap_1; }
  .mri-button.sm .s-button_text { font-size: 12px; }
  .mri-button.md { height: $height_2; line-height: $height_2; padding: 0 $gap_2; }
  .mri-button.md .s-button_text { font-size: 14px; }
  .mri-button.lg { height: $height_1*2; line-height: $height_1*2; padding: 0 $gap_3; }
  .mri-button.lg .s-button_text { font-size: 16px; }
  .mri-button.xlg { height: $height_2_inner*2; line-height: $height_2_inner*2; padding: 0 $gap_3; }
  .mri-button.xlg .s-button_text { font-size: 18px; }
</style>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
      validator: function (value) {
        return ['', 'ghost', 'link'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'md',
      validator: function (value) {
        return ['sm', 'md', 'lg', 'xlg'].indexOf(value) !== -1
      }
    },
    is_disable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
