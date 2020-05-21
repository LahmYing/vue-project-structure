<template>
  <transition :name="mask_transition">
    <div class="s-modal" :class="[type, { 'pc': isPC() }]" :style="{ 'background': _modal_background }"
         @click="$emit('close-modal')">
      <div class="s-modal-wrap" :style="{ 'background': _background }" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style scoped>
  @import "./../_stylus/transitions.styl";
  .s-modal { position: fixed; z-index: 10000; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, .75); }
  .s-modal .s-modal-wrap { }
  /* type */
  .s-modal.from_center { display: flex; align-items: center; justify-content: center; }
  .s-modal.from_top .s-modal-wrap { position: absolute; top: 0; left: 0; right: 0; }
  .s-modal.from_bottom .s-modal-wrap { position: absolute; bottom: 0; left: 0; right: 0; }
  .s-modal.from_left .s-modal-wrap { position: absolute; bottom: 0; left: 0; top: 0; max-width: 100%; }
  .s-modal.from_right .s-modal-wrap { position: absolute; bottom: 0; top: 0; right: 0; max-width: 100%; }
  /* pc */
  .s-modal.pc .s-modal-wrap { position: relative; max-width: 414px; top: 0; }
</style>

<script>
  import {isPC} from './../_utils/utils.js'

  export default {
    props: {
      mask_transition: { type: String, default: 'fade' },
      type: { type: String, default: 'from_center' },
      _background: { type: String, default: '#fff' },
      _modal_background: { type: String, default: 'rgba(0, 0, 0, .75)' }
    },
    data() {
      return {
        transition_option: {
          from_center: 'bounce',
          from_top: 'slide-down',
          from_bottom: 'slide-up',
          from_left: 'slide-left',
          from_right: 'slide-right'
        }
      }
    },
    methods: {
      isPC: isPC
    }
  }
</script>
