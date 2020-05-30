<template>
  <base-layout>
    <!-- v-slot 只能添加在 <template> 上 (只有一种例外情况) -->
    <template v-slot:header>
      <!-- <h1>Here might be a page title</h1> -->
    </template>

    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </base-layout>
</template>

<script>
export default {
  components: {
    'base-layout': () => import('./base_layout')
  }
}
</script>

<style>
</style>
