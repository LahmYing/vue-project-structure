<template>
  <div class="s-action-bar">
    <slot></slot>
  </div>
</template>

<style lang="stylus">
  @import "./../_stylus/vatiables.styl";
  .s-action-bar { position: fixed; bottom: 0; left: 0; right: 0; background: #fff; height: _size_lg; padding: 6px 30px; box-shadow: 0 0 18px -6px rgba(0,0,0,.5); }
</style>
