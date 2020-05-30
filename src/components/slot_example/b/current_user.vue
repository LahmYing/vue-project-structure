<template>
  <span>
    <!-- 将 user 作为 <slot> 元素的一个 attribute 绑定上去 -->
    <slot :user="user">{{ user.lastName }}</slot>
  </span>
</template>

<script>
export default {
  data () {
    return {
      user: {
        firstName: 'LanYing',
        lastName: 'Huang'
      }
    }
  }
}
</script>

<style>
</style>