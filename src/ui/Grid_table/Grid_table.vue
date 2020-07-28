<template>
  <section class="mri-grid-table">

    <!-- Table Header -->
    <header class="table-header mri-hairline--bottom" v-if="rows.length > 0">
        <span class="table-header-col"
              v-for="(col, index) in rows[0].$children"
              :key="index"
              :style="[getWidth(col.span), { 'text-align': col.align }]">{{ col.col_title }}</span>
    </header>

    <!--  Table Header  -->
    <div class="table-body">
      <slot></slot>
    </div>

  </section>
</template>

<style lang="scss">
  @import './../_styles/variables.scss';
  .mri-grid-table { position: relative; height: 100%; font-size: 14px; padding: $gap_1 0; }
  .mri-grid-table .table-header { position: absolute; top: 0; left: 0; right: 0; z-index: 100; display: flex; white-space: nowrap; }
  .mri-grid-table .table-header-col { background: #fff; padding: 0 $gap_1; line-height: $height_2; color: #888; }
  .mri-grid-table .table-body { height: 100%; padding-top: $height_2; overflow-y: auto; }
</style>

<script>
export default {
  name: 'Grid-table',
  props: {
    data_source: [Array, Object]
  },
  data () {
    return {
      rows: []
    }
  },
  created () {
    this.$on('mri-grid-col--mounted', () => {
      this.rows = this.$children
    })
  },
  methods: {
    getWidth: function (span) {
      if (!span) {
        return { flex: 1 }
      } else if (typeof span === 'string') {
        return { width: span }
      } else {
        return { flex: span }
      }
    }
  }
}
</script>
