<template>
  <component
    :is="isHref ? 'a' : 'button'"
    :class="classes"
    @click="handleClick"
    v-bind="tagProps"
    :disabled="disabled"
    :loading="loading"
  >
    <span v-if="!!this.$slots.default" ref="slot">
      <slot></slot>
    </span>
  </component>
</template>

<script>
export default {
  // 根元素继承父作用域的 [非 prop attribute] 即 [$attrs]
  inheritAttrs: false,
  __II_BUTTON: true,
  props: {
    type: {
      validator (value) {
        return ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warn', 'error'].indexOf(value) !== -1
      },
      default: 'default'
    },
    shape: {
      validator (value) {
        return ['circle', 'circle-outline'].indexOf(value) !== -1
      }
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
    ghost: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    to: String,
    htmlType: {
      default: 'button',
      validator (value) {
        return ['button', 'submit', 'reset'].indexOf(value) !== -1
      }
    }
  },
  data () {
    return {
      prefixCls: 'ii-btn'
    }
  },
  computed: {
    classes () {
      const { type, shape, size, prefixCls, loading, ghost } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: !!type,
        [`${prefixCls}-${shape}`]: !!shape,
        [`${prefixCls}-${size}`]: !!size,
        [`${prefixCls}-loading`]: loading,
        // [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
        [`${prefixCls}-ghost`]: ghost
      }
    },
    isHref () {
      const { to } = this
      console.log('to', to)
      return !!to
    },
    tagProps () {
      const { htmlType } = this
      return { type: htmlType }
    }
  },
  methods: {
    // Ctrl or CMD and click, open in new window when use `to`
    handleClick (e) {
      this.$emit('click', e)
      // const openInNewWindow = e.ctrlKey || e.metaKey
      // console.log('openInNewWindow/', openInNewWindow)
      // this.handleCheckClick(event, openInNewWindow)
    }
  }
}
</script>

<style lang="less" scoped>
@import './style/index.less';
</style>