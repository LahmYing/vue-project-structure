<template>
  <div class="s-tab-item"
       :class="{ 'tab-item-active': $parent.value === value }"
       @click="$parent.$emit('input', value)">
    <slot></slot>
  </div>
</template>

<style lang="stylus">
  @import "./../_stylus/vatiables.styl";
  .s-tab-item { position: relative; display: inline-block; height: _size_md; line-height: _size_md; padding: 0 10px; font-size: 14px; color: #666; }
  .s-tab-item.tab-item-active { font-weight: bold; color: #232323; }
</style>

<script>
  export default {
    props: {
      value: {
        type: [String, Number]
      }
    }
  }
</script>
