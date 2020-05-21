<template>
  <label class="mri-field" :class="{ 'in_grid': in_grid, 'readonly': readonly, 'big': $parent.row_num > 1 }">
    <span class="field-prefix" v-if="!!prefix" v-html="prefix"></span>
    <input class="the-input" :value="value" :type="type" :readonly="readonly" :placeholder="placeholder"
           @input="onInput"
           @keyup.enter="$emit('keyup-enter', value)">
    <span class="field-suffix" v-if="!!suffix" v-html="suffix"></span>
    <icon v-if="!!icon" :class="{ 'use-action': !!icon_event }" :name="icon" :color="'#666'"
          @click.native="$emit(icon_event)"></icon>
  </label>
</template>

<style scoped lang="scss">
  @import "./../_styles/variables";
  .mri-field { position: relative; display: inline-block; height: $height_2; line-height: $height_2_inner; padding: 2px $gap_2; background: #fff; vertical-align: top; border: 1px solid $light_gray_1; border-radius: $radius_md; }
  .mri-field .the-input { display: inline-block; width: 100%; border: none; appearance: none; background: transparent; outline: none; padding: 0; }
  .mri-field .the-input::-webkit-input-placeholder { color: #bbb; font-size: 12px; }
  .mri-field .icon { display: block; position: absolute; top: 50%; right: 6px; margin-top: -10px; padding: 4px; transition: all .1s; }
  .mri-field .icon.use-action:hover { cursor: pointer; opacity: .8; }
  /* 类型 */
  .mri-field.in_grid { display: inline-block; width: 100%; height: row_height_1; padding: 0; background: transparent; border-bottom: 1px solid light_gray_2; }
  .mri-field.in_grid .text-input-inner { display: flex; background: transparent; padding: 0; line-height: 14px; font-size: 14px; }
  .mri-field.in_grid .input-prefix { padding-right: 5px; display: inline-block; margin-top: 3px; }
  .mri-field.in_grid .input-suffix { padding-left: 5px; display: inline-block; margin-top: 3px; }
  .mri-field.in_grid .the-input { flex: 1; font-size: 14px; line-height: 20px; }
  .mri-field.in_grid.big { height: 72px; }
  .mri-field.in_grid.big .the-input { font-size: 28px; line-height: 62px; }
  .mri-field.in_grid.big .input-prefix { margin-top: 28px; }
  .mri-field.in_grid.big .input-suffix { margin-top: 28px; }
  /* readonly */
  .mri-field.readonly { border: none; pointer-events: none; cursor: not-allowed; }
</style>

<script>
export default {
  props: {
    value: { type: [String, Number] },
    type: { type: String, default: 'text' },
    icon: String,
    icon_event: String,
    placeholder: String,
    prefix: String,
    suffix: String,
    in_grid: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false }
  },
  methods: {
    onInput: function (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
