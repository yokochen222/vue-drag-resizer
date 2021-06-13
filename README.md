### vue-drag-resizeable

> vue-darg-resizeable，定位实现 DOM 旋转及大小

### 安装

```bash
 npm install vue-drag-resizeable
```

### 使用

```html
<template>
  <div class="my-canvas">
    <vue-drag-resizeable
      :left.sync="rect.left"
      :top.sync="rect.top"
      :width.sync="rect.width"
      :height.sync="rect.height"
      :rotate.sync="rect.rotate"
      :focus="rect.focus"
      :tabindex="rect.tabindex"
      canvas=".my-canvas"
    >
      <div>文本示例<div>
    </vue-drag-resizeable>
  </div>
</template>

<script>
import VueDargResizeable from 'vue-darg-resizeable'
export default {
  components: {
    VueDargResizeable
  },
  data(){
    return {
      rect: {
        tabindex: 1,
        left: 10,
        top: 10,
        width: 200,
        height: 100,
        rotate: 0
      }
    }
  }
}
</script>

<style>
.my-canvas {
  width: 375px;
  height: 667px;
}
</style>
```