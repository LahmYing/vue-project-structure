<template>
  <button
    :class="classes"
    @click="$emit('on-click')"
    v-bind="{disabled: disabled, loading: loading}"
  >
    <slot></slot>
  </button>
</template>

<script>
import { configProvider } from './config_provider'

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
  // 前缀处理 和 渲染空节点
  // inject: ['getPrefixCls', 'renderEmpty'], 
  // 可由一个 Provider 来提供这些方法
  // inject: ['configProvider'],
  inject: {
    configProvider: { default: () => configProvider },
  },
  // getPrefixCls: (suffixCls, customizePrefixCls) => {
  //   if (customizePrefixCls) return customizePrefixCls;
  //   return `ant-${suffixCls}`;
  // },
  data () {
    return {
      prefixCls: 'f-btn',
      classes: {}
    }
  },
  // 用 created 不用 mounted
  created () {
    const { type, shape, size, prefixCls } = this
    this.classes = {
      [`${prefixCls}`]: true,
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-${shape}`]: true,
      [`${prefixCls}-${size}`]: true,
    }
  },
  // beforeDestroy 前清除 setTimeout
  // this.delayTimeout =  setTimeout(() => {}, seconds)
  // beforeDestroy () {
  //   if (this.delayTimeout) {
  //     clearTimeout(this.delayTimeout);
  //   }
  // }
}
</script>

<style lang="less" scoped>
@import './style/index.less';
</style>