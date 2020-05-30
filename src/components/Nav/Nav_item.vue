<template>
  <!-- 
    :class="[type]" => :class="['aClass', 'bClass']"
    数组形式，比常见的 object 形式简便些
  -->
  <!-- 
    :class= “{ active: boolean }” => :class= “aComputedClassObject” =>
    the aComputedClassObject returns { active: boolean }
  -->
  <router-link class="nav-item text-center" :class="[type]" :to="to">
    <!-- this.$slots.default  slot 的节点数组 -->
    <div class="nav-icon" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="nav-name">{{ name }}</div>
  </router-link>
</template>

<style scoped lang="scss">
@import '../../ui/_styles/variables.scss';
.nav-item {
  position: relative;
  display: block;
}
.nav-item:hover {
  background: rgba(0, 0, 0, 0.03);
  cursor: pointer;
  opacity: 0.95;
}
.nav-item.router-link-active::after {
  content: '';
  display: block;
  position: absolute;
  right: 0.5px;
  top: 18%;
  bottom: 18%;
  width: 3px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 1px;
}
.nav-item.horizontal {
  padding: $gap_1 0;
}
.nav-item.horizontal .nav-icon {
  padding: 5px 0 1px;
}
.nav-item.horizontal .nav-name {
  transform: scale(0.8);
  margin: 0 (-$gap_1);
  font-weight: bold;
  text-align: center;
  line-height: 1.3;
}
.nav-item.vertical {
  display: flex;
  padding: $gap_1 $gap_2;
  font-weight: bold;
}
.nav-item.vertical .nav-icon {
  width: 16px;
  text-align: center;
  margin-right: 5px;
}
.nav-item.vertical .nav-name {
  flex: 1;
  text-align: left;
}
@media only screen and (max-width: 768px) {
  .nav-item.horizontal .nav-name {
    font-weight: normal;
  }
}
</style>

<script>
export default {
  props: {
    name: String,
    type: {
      type: String,
      default: 'horizontal'
    },
    to: [String, Object]
  },
  mounted () {
    // console.log(this.$slots.default)
  }
}
</script>
