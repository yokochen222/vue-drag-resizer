import VueDragResizer from './vue-drag-resizer.vue'

VueDragResizer.install = (Vue) => {
  Vue.component('vue-drag-resizer', VueDragResizer)
}
export {
  VueDragResizer
}

export default VueDragResizer