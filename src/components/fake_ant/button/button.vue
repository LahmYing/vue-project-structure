<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    shape: {
      validator (value) {
        return ['circle', 'circle-outline', 'round'].indexOf(value) !== -1
      },
      default: 'round'
    },
    size: {
      validator (value) {
        return ['small', 'large', 'default'].indexOf(value) !== -1
      },
      default: 'default'
    },
    loading: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      prefixCls: 'f',
      classes: {}
    }
  },
  // 用 created 不用 mounted
  created () {
    const { type, shape, size, loading, disabled } = this.$props
    this.classes = {
      [`${this.prefixCls}-${type}`]: true,
      [`${this.prefixCls}-${shape}`]: true,
      [`${this.prefixCls}-${size}`]: true,
      [`${this.prefixCls}-loading`]: loading,
      [`${this.prefixCls}-disabled`]: disabled,
    }
  }
}
</script>

<style>
</style>