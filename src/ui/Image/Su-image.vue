<template>
  <div class="mri-su-image"
       :style="style"
       :class="{ 'swiper-lazy': lazy }"
       :data-background="self_image_url">
    <slot></slot>
  </div>
</template>

<style scoped>
  .mri-su-image { position: relative; background: no-repeat center/cover; background-color: #eee; }
</style>

<script>
// 两个场景:
// 按容器尺寸剪裁
// 按图片自身的一遍伸缩剪裁
export default {
  props: {
    src: { type: String, require: true },
    ratio: { type: String, default: '3:2' },
    lazy: { type: Boolean, default: false }
  },
  data () {
    return {
      self_src: '',
      height: 0,
      is_load_img: !this.lazy
    }
  },
  computed: {
    style () {
      const { height, self_src, is_load_img } = this
      let result = {}
      if (height || height === 0) result.height = height + 'px'
      if (self_src && is_load_img) result.backgroundImage = 'url(' + self_src + ')'
      return result
    }
  },
  mounted () {
    this.init()
    if (this.lazy) this.$nextTick(() => this.lazyLoad())
  },
  watch: {
    src: function () {
      this.init()
    }
  },
  methods: {
    init: function () {
      // 按比例算高度
      let cur_el = window.getComputedStyle(this.$el)
      let cur_width = parseInt(cur_el.getPropertyValue('width').slice(0, -2))
      let to_height = (cur_width / this.ratio.split(':')[0] * this.ratio.split(':')[1]).toFixed(0)
      this.height = to_height
      // 设置剪裁
      this.self_src = this.src ? this.src + '?imageView2/1/w/' + (cur_width * 2) + '/h/' + (to_height * 2) : ''
      this.$forceUpdate()
    },
    lazyLoad: function () {
      const { top, right, bottom, left } = this.$el.getBoundingClientRect()
      const w_height = window.innerHeight || document.documentElement.clientHeight
      const w_width = window.innerWidth || document.documentElement.clientWidth
      const x_offset = 50
      const y_offset = 100

      this.is_load_img = bottom >= -y_offset && right >= -x_offset && top <= w_height + y_offset && left <= w_width + x_offset

      if (!this.is_load_img) {
        this.$root.$emit('bind-lazy-img', this.$el, () => {
          this.is_load_img = true
        })
      }
    }
  }
}
</script>
