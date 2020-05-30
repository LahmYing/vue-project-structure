<template>
  <nav class="navigation">
    <!-- PM --------------------------------------------------------------------------------- -->
    <template>
      <!-- Pub nav -->
      <Pub-nav>
        <Nav-item
          :name="'Overview'"
          :to="{ name: 'PubNav', params: { role_group: 'PM', pub_nav: 'overview' }}"
        >
          <Icon :name="'computer'" :style="{ fontSize: '28px' }"></Icon>
          <div>666</div>
        </Nav-item>
        <Nav-item
          :name="'Brand&Stores'"
          :to="{ name: 'PubNav', params: {  role_group: 'PM', pub_nav: 'brand_n_stores' }}"
        >
          <Icon :name="'bowl'" :style="{ fontSize: '28px' }"></Icon>
        </Nav-item>
        <Nav-item
          :name="'Operating'"
          :to="{ name: 'PubNav', params: { role_group: 'PM', pub_nav: 'operating' }}"
        >
          <Icon :name="'gear'" :style="{ fontSize: '28px' }"></Icon>
        </Nav-item>
        <Nav-item
          :name="'Statistics'"
          :to="{ name: 'PubNav', params: { role_group: 'PM', pub_nav: 'statistics' }}"
        >
          <Icon :name="'chart-pie'" :style="{ fontSize: '28px' }"></Icon>
        </Nav-item>
      </Pub-nav>

      <!-- Sub nav -->
      <Sub-nav>
        <template v-if="$route.params.pub_nav === 'brand_n_stores'">
          <Nav-group v-if="!$route.params.store_id">
            <Nav-item :name="'Merchant'" :type="'vertical'" :to="{ name: 'Merchant' }"></Nav-item>
            <Nav-item :name="'Store'" :type="'vertical'" :to="{ name: 'Stores' }"></Nav-item>
          </Nav-group>
          <!-- store config nav -->
          <Nav-group v-if="$route.params.store_id">
            <Nav-item
              :name="'门店概览'"
              :type="'vertical'"
              :to="{ name: 'Store_config_tab', params: { tab: 'overview' } }"
            ></Nav-item>
            <Nav-item
              :name="'统计'"
              :type="'vertical'"
              :to="{ name: 'Store_config_tab', params: { tab: 'statistics' } }"
            ></Nav-item>
            <div class="store-config_divider">
              <div class="divider"></div>
            </div>
            <Nav-item
              :name="'基本信息'"
              :type="'vertical'"
              :to="{ name: 'Store_config_tab', params: { tab: 'basic_info' } }"
            ></Nav-item>
            <Nav-item
              :name="'业务/收银设置'"
              :type="'vertical'"
              :to="{ name: 'Store_config_tab', params: { tab: 'business_n_cash_register' } }"
            ></Nav-item>
            <Nav-item
              :name="'功能设置'"
              :type="'vertical'"
              :to="{ name: 'Store_config_tab', params: { tab: 'function' } }"
            ></Nav-item>
            <Nav-item
              :name="'账号'"
              :type="'vertical'"
              :to="{ name: 'Store_config_tab', params: { tab: 'account' } }"
            ></Nav-item>
            <div class="store-config_divider">
              <div class="divider"></div>
            </div>
            <Nav-item
              :name="'菜品管理'"
              :type="'vertical'"
              :to="{ name: 'Store_config_tab', params: { tab: 'dishes' } }"
            ></Nav-item>
            <Nav-item
              :name="'优惠活动管理'"
              :type="'vertical'"
              :to="{ name: 'Store_config_tab', params: { tab: 'promotions' } }"
            ></Nav-item>
            <Nav-item
              :name="'桌台管理'"
              :type="'vertical'"
              :to="{ name: 'Store_config_tab', params: { tab: 'table' } }"
            ></Nav-item>
          </Nav-group>
        </template>
      </Sub-nav>
    </template>
  </nav>
</template>

<style scoped lang="scss">
@import '../../ui/_styles/variables.scss';
.navigation {
  position: fixed;
  top: $height_1_inner * 2;
  left: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 80px 200px;
}
.store-config_divider {
  padding: 12px 0 14px 12px;
}
.store-config_divider > .divider {
  border-top: 1px solid rgba(221, 221, 221, 1);
}
</style>

<script>
export default {
  data () {
    return {
      cur_pub_nav: 'PM_Overview'
    }
  },
  components: {
    'Pub-nav': () => import('./Pub_nav'),
    'Sub-nav': () => import('./Sub_nav'),
    'Nav-group': () => import('./Nav_group'),
    'Nav-item': () => import('./Nav_item')
  }
}
</script>
