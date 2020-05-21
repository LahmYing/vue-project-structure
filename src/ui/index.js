export default {
  install (Vue, options) {
    // Layout --------------------------------------------------------------------------------
    Vue.component('Top-view', require('./Layout/Top_view').default)
    Vue.component('Pad', require('./Pad/Pad').default)
    Vue.component('Paper', require('./Paper/Paper').default)
    Vue.component('Piece', require('./Piece/Piece').default)
    // Base ----------------------------------------------------------------------------------
    Vue.component('Button', require('./Button/Button').default)
    // Output --------------------------------------------------------------------------------
    Vue.component('Grid-table', require('./Grid_table/Grid_table').default)
    Vue.component('Grid-row', require('./Grid_table/Grid_row').default)
    Vue.component('Grid-col', require('./Grid_table/Grid_col').default)
    Vue.component('Su-image', require('./Image/Su-image').default)
    // Input ---------------------------------------------------------------------------------
    Vue.component('Field', require('./Field/Field').default)
    // Vue.component('Modal', require('./Modal/Modal').default)
    // Vue.component('Tab', require('./Tab/Tab').default)
    // Vue.component('Tab-item', require('./Tab/Tab_item').default)
    // Vue.component('Action-bar', require('./Action_bar/Action_bar').default)
  }
}
