<template>
  <button
    :class="classes"
    @click="$emit('on-click')"
    :disabled="attr.disabled"
    :loading="attr.loading"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  // 继承 attribute
  inheritAttrs: false,
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
      classes: {},
      attr: {
        disabled: false,
        loading: false,
      }
    }
  },
  // 用 created 不用 mounted
  created () {
    const { type, shape, size, loading, disabled } = this
    const { prefixCls } = this
    this.classes = {
      [`${prefixCls}`]: true,
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-${shape}`]: true,
      [`${prefixCls}-${size}`]: true,
    }
    this.attr.disabled = disabled
    this.attr.loading = loading
  }
}
</script>

<style lang="less" scoped>
@import './style/index.less';
</style>