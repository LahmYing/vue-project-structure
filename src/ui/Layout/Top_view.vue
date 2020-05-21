<template>
  <header class="top-view mri-hairline--bottom">

    <!--  Left  -->
    <div class="top-view--left">
      <img class="brand-logo" :src="logo_url">
    </div>

    <!--  After left  -->
    <div class="top-view--after-left">
      <Button class="top-nav-item mri-hairline--left" :size="'lg'">Overview</Button>
      <Button class="top-nav-item" :size="'lg'">Analysis</Button>
      <Button class="top-nav-item mri-hairline--left" :size="'lg'">Shop</Button>
      <Button class="top-nav-item mri-hairline--left" :size="'lg'">Log</Button>
    </div>

    <!--  Right  -->
    <div class="top-view--right"></div>

  </header>
</template>

<style lang="scss" scoped>
  @import "../_styles/variables.scss";  
  .top-view { position: relative; display: grid; grid-template-columns: auto 1fr 300px; align-items: center; height: $height_2_inner*2; padding: 0 $gap_1; grid-column-gap: $gap_1; }
  /*.top-view::after { border-color: #fff; }*/
  .top-view--left { padding-right: $gap_4; }
  .top-view--left .brand-logo { display: block; height: $height_1*2; }
  .top-view--after-left { font-size: 0; }
  .top-view--after-left .top-nav-item { background: transparent; }
</style>

<script>
export default {
  props: {
    'logo_url': {
      type: String,
      default: ''
    }
  }
}
</script>
