### vue-drag-resizer

> vue-drag-resizer，基于定位实现 DOM 旋转及大小调整、按住 shift 等比例缩放

### 安装

```bash
 npm install vue-drag-resizer
```

### 使用

```html
<template>
  <div class="my-canvas">
    <vue-drag-resizer
      :left.sync="rect.left"
      :top.sync="rect.top"
      :width.sync="rect.width"
      :height.sync="rect.height"
      :rotate.sync="rect.rotate"
      :focus="focus"
      :tabindex="rect.tabindex"
      canvas=".my-canvas"
      @focus="handleFocus"
      @change="handleChange"
    >
      <div>文本示例<div>
    </vue-drag-resizer>
  </div>
</template>

<script>
import VueDargResizer from 'vue-darg-resizer'
import "vue-darg-resizer/lib/vue-drag-resizer.css"
export default {
  components: {
    VueDargResizer
  },
  data(){
    return {
      focus: false,
      rect: {
        tabindex: 1,
        left: 10,
        top: 10,
        width: 200,
        height: 100,
        rotate: 0
      }
    }
  },
  methods: {
    handleFocus(val) {
      this.focus = val
    },
    handleChange(obj) {
      console.log(obj)
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

### Props

> 默认单位 `px`; left、top、width、height、rotate 必须使用.sync 修师傅更改新值 或者通过 change 事件更新

| prop     | 类型    | 必填 | 描述                                                     |
| -------- | ------- | ---- | -------------------------------------------------------- |
| left     | number  | 是   | 相对画布 left 值                                         |
| top      | number  | 是   | 相对画布 top 值                                          |
| width    | number  | 是   | 元素 width 值                                            |
| height   | number  | 是   | 元素 height 值                                           |
| rotate   | number  | 是   | 元素旋转角度 deg                                         |
| focus    | boolean | 否   | 是否获取焦点                                             |
| tabindex | number  | 否   | tab 键序                                                 |
| canvas   | string  | 否   | 默认值为 document.body; (**注 canvas 节点必须拥有宽高**) |

### Events

| EventName | 事件值类型 | 示例                                                | 描述                           |
| --------- | ---------- | --------------------------------------------------- | ------------------------------ |
| focus     | boolean    | false                                               | 元素 focus                     |
| change    | object     | `{ top: 10,left: 10,height:10,width:10,rotate: 0 }` | 元素布局或大小发生改变事件回调 |
