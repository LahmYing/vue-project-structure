<template>
  <div class="about">
    <!-- <Navigation></Navigation> -->

    <!-- 多个 slot -->
    <!-- <a-layout></a-layout> -->

    <!-- 在 slot 处访问到 <current-user> 组件内的 data  -->
    <current-user>
      <!-- v-slot: 缩写 # -->
      <template #default="slotProps">{{ slotProps.user.firstName }}</template>
      <!-- 用解构的形式可让模板更简洁，如下 -->
      <!-- <template v-slot:default="{ user }">{{ user.firstName }}</template> -->
    </current-user>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
    'a-layout': () => import('../components/slot_example/a/layout'),
    'current-user': () => import('../components/slot_example/b/current_user'),
  }
}
</script>
