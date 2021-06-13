import VueDragResize from './vue-drag-resize.vue'

VueDragResize.install = (Vue) => {
  Vue.component('vue-drag-resize', VueDragResize)
}
export {
  VueDragResize
}

export default VueDragResize