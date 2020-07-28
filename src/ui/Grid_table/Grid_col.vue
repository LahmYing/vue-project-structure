<template>
  <section class="mri-grid-col"
           :class="{ 'no-wrap': !is_wrap }"
           :title="!span || span > 0 ? $slots.default[0].text : ''"
           :style="[getWidth, { 'text-align': align }]">
    <slot></slot>
  </section>
</template>

<style lang="scss">
  @import './../_styles/variables';
  .mri-grid-col { padding: $gap_1; line-height: 1.4; }
  /* wrap */
  .mri-grid-col.no-wrap { overflow: hidden; text-overflow: ellipsis; }
  /* drag */
  .table-grid-row.sortable-ghost .table-grid-col-2 { background: rgba(0, 0, 0, .02); }
</style>

<script>
export default {
  props: {
    col_title: String,
    span: [String, Number],
    align: String,
    is_wrap: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getWidth: function () {
      if (!this.span) {
        return { flex: 1 }
      } else if (typeof this.span === 'string') {
        return { width: this.span }
      } else {
        return { flex: this.span }
      }
    }
  },
  mounted () {
    this.$parent.$parent.$emit('mri-grid-col--mounted')
  }
}
</script>
