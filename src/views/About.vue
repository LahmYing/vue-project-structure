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

    <div>
      <input type="text" v-model="store_basic_info.name" />
      <input type="text" v-model="store_basic_info.type" />
      <input type="text" v-model="store_basic_info.desc" />
      <button @click="updateStoreBasicInfo">updateStoreBasicInfo</button>
    </div>
  </div>
</template>

<script>
// 接口
import * as api from '@/constant/api'

export default {
  data () {
    return {
      store_id: '1704',
      store_basic_info: {}
    }
  },
  components: {
    'a-layout': () => import('../components/slot_example/a/layout'),
    'current-user': () => import('../components/slot_example/b/current_user'),
  },
  methods: {
    updateStoreBasicInfo () {
      this.putStoreBasicInfo(this.store_id, {
        name: this.store_basic_info.name,
        description: this.store_basic_info.desc,
        type: this.store_basic_info.type,
      })
    },
    putStoreBasicInfo (store_id, params) {
      this.$http.put(api.STORE_BASIC_INFO, {
        store_id: store_id,
        // 解构 object params
        ...params
      }).then(res => {
        if (res.data.code === 200) {
          this.$notification['success']({ message: res.data.msg, description: res.data.code })
        } else {
          this.$notification['error']({ message: res.data.msg, description: res.data.code })
        }
      })
    },
  }
}
</script>
