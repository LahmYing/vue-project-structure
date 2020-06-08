<template>
  <button :class="classes" @click="$emit('on-click')">
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
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      prefixCls: 'f-btn',
      classes: {}
    }
  },
  // 用 created 不用 mounted
  created () {
    const { type, shape, size, loading, disabled } = this.$props
    const { prefixCls } = this
    this.classes = {
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-${shape}`]: true,
      [`${prefixCls}-${size}`]: true,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-disabled`]: disabled,
    }
  }
}
</script>

<style lang="less" scoped>
@import './style/index.less';
</style>