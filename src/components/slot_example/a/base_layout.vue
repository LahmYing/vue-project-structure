<template>
  <div class="container">
    <!-- type="defaultHeader" 后备内容，slot 无子节点时即显示 'defaultHeader text' -->
    <header type="defaultHeader">
      <slot name="header">
        <h1>defaultHeader text</h1>
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>