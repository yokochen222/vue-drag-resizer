<template>
  <div id="app">
    <vue-drag-resizer
      :width.sync="rec.width"
      :height.sync="rec.height"
      :left.sync="rec.left"
      :top.sync="rec.top"
      :rotate.sync="rec.rotate"
      :focus="true"
      canvas="#app"
    >
      <img src="https://www.baidu.com/img/flexible/logo/pc/result.png" alt="" />
    </vue-drag-resizer>
  </div>
</template>

<script>
import VueDragResizer from "@/packages/vue-drag-resizer";
export default {
  name: "App",
  components: {
    VueDragResizer,
  },
  data() {
    return {
      rec: {
        width: 100,
        height: 100,
        left: 0,
        top: 0,
        rotate: 0,
      },
    };
  },
};
</script>
<style>
body,
html {
  height: 100%;
  width: 100%;
}
#app {
  width: 336px;
  height: 667px;
  background: #eee;
  position: relative;
  margin: 0 auto;
}
</style>
