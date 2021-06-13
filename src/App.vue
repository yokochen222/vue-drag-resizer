<template>
  <div id="app">
    <pre class="info-screen">
    <h4>按 tab 调整获取焦点的元素</h4><h4>按住shift 斜角等比例缩放</h4><h4>按方向键 单步移动元素 （1px）</h4>{{ recs[focusIndex] }}</pre>
    <div class="canvas">
      <vue-drag-resizer
        v-for="(rec, index) in recs"
        :key="index"
        :width.sync="rec.width"
        :height.sync="rec.height"
        :left.sync="rec.left"
        :top.sync="rec.top"
        :rotate.sync="rec.rotate"
        :focus="focusIndex === index"
        @focus="handleFocus(index)"
        canvas="#app"
      >
        <img v-if="rec.text" :src="rec.img" alt="" />
        <img v-else style="width: 100%; height:100%" :src="rec.img" alt="" />
        <div
          v-if="rec.text"
          style="width: 100%; height:100%"
          :src="rec.img"
          alt=""
          class="text"
        >
          {{ rec.text }}
        </div>
      </vue-drag-resizer>
    </div>
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
      focusIndex: 0,
      recs: [
        {
          width: 200,
          height: 100,
          left: 60,
          top: 80,
          rotate: 0,
          focus: false,
          img:
            "https://as.zbjimg.com/static/nodejs-zbj-utopiacs-web/widget/header-bd-v1/img/newlogo_5b91b4a.png",
        },
        {
          width: 240,
          height: 100,
          left: 60,
          top: 280,
          rotate: 0,
          focus: false,
          img: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
        {
          width: 240,
          height: 100,
          left: 60,
          top: 480,
          rotate: 0,
          focus: false,
          img: "https://www.baidu.com/img/flexible/logo/pc/result.png",
          text: "https://www.baidu.com/img/flexible/logo/pc/result.png",
        },
      ],
    };
  },
  methods: {
    handleFocus(index) {
      this.focusIndex = index;
    },
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body,
html {
  height: 100%;
  width: 100%;
}
#app {
}

.info-screen {
  position: absolute;
  top: 0;
}

.canvas {
  width: 336px;
  height: 667px;
  background: #eee;
  position: relative;
  margin: 0 auto;
  margin-top: 200px;
  .text {
    word-break: break-all;
  }
}
</style>
