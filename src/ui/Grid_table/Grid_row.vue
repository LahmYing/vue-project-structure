<template>
  <section class="mri-grid-row mri-hairline--bottom" :class="[{ 'can-be-click': use_click, 'small': is_small }, mood]">
    <slot></slot>
  </section>
</template>

<style lang="scss">
  @import './../_styles/variables';
  .mri-grid-row { position: relative; display: flex; margin-top: 1px; background: #fff; transition: all .2s; }
  /**/
  .mri-grid-row.can-be-click:not(.highlight):hover { background: light_gray_3; cursor: pointer; }
  .mri-grid-row::before { content: ''; display: block; position: absolute; top: 0; left: 0; bottom: 0; }
  /**/
  .mri-grid-row.danger { border-left: 3px solid danger; border-radius: 2px; }
  .mri-grid-row.warning { border-left: 3px solid warning; border-radius: 2px; }
  .mri-grid-row.success { border-left: 3px solid success; border-radius: 2px; }
  .mri-grid-row.blue { border-left: 3px solid blue; border-radius: 2px; }
</style>

<script>
export default {
  props: {
    tag: String,
    is_highlight: { type: Boolean, default: false },
    mood: String,
    use_click: { type: Boolean, default: false },
    is_small: {
      type: Boolean,
      default: false
    }
  }
}
</script>
