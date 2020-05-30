<template>
  <nav class="pub-nav">
    <!--  Role level  -->
    <div class="nav-role-level">{{ nav_role_level[role_group] }}</div>

    <!--  Nav main  -->
    <div class="nav-main">
      <slot></slot>
    </div>

    <!--  Nav aside  -->
    <div class="nav-aside">
      <div class="user-mine">
        <div class="user-mine-main mri-hairline--bottom">
          <Icon :name="'user'" :style="{ 'font-size': '18px' }"></Icon>
          <span>Mine</span>
        </div>
        <div class="user-mine-status">{{use_mine_status[role_group]}} O.P.</div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import '../../ui/_styles/variables.scss';
.pub-nav {
  position: relative;
  min-width: 80px;
  background: $theme_color;
}
.nav-role-level {
  transform: scale(0.8);
  transform-origin: top;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #fff;
  border-radius: 0 0 4px 4px;
  font-weight: bold;
}
.nav-main {
  padding: $gap_1 0;
}
.nav-aside {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.nav-aside .user-mine {
  margin: 0 $gap_1;
  padding: $gap_1 0;
}
.nav-aside .user-mine-main {
  padding: 4px 0;
}
.nav-aside .user-mine-main::after {
  border-color: $black;
}
.nav-aside .user-mine-main > span {
  margin-left: 1px;
  font-size: 12px;
  font-weight: bold;
  vertical-align: 2px;
}
.nav-aside .user-mine-status {
  padding: 4px 0;
  transform: scale(0.8);
  transform-origin: left;
}
@media only screen and (max-width: 768px) {
  .pub-nav {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    bottom: 0;
    height: 70px;
    background: $light_gray_3;
  }
  .nav-role-level {
    display: none;
  }
  .nav-main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 2px 0;
  }
  .nav-aside {
    display: none;
  }
}
</style>

<script>
export default {
  data () {
    return {
      role_group: localStorage.role_group,
      nav_role_level: {
        PM: 'Platform Manager',
        MM: 'Merchant Manager',
        SM: 'Store Manager'
      },
      use_mine_status: {
        PM: 'Platform',
        MM: 'Merchant',
        SM: 'Store'
      }
    }
  }
}
</script>
