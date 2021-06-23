<template>
  <div
    ref="drager"
    :tabindex="tabindex"
    :style="DragerStyles"
    :class="['yo-canvas-drager', { active: mousedown || focus }]"
    @focus="handleDragerFocus"
    @keydown.16.stop.prevent="shiftKeyDown = true"
    @keyup.16.stop.prevent="shiftKeyDown = false"
    @mousedown="handleDragerMouseDown"
  >
    <div ref="el" class="yo-drag-el">
      <slot></slot>
    </div>
    <div v-if="focus || mousedown" class="yo-drager-resize-spans">
      <!-- 方向缩放点 -->
      <span
        v-for="pointer in 8"
        :key="pointer"
        class="yo-canvas-drager-pointer"
        @mousedown.stop.prevent="handlePointMouseDown($event, pointer)"
      ></span>
      <!-- 控制旋转轴 -->
      <span
        @mousedown.stop.prevent="handleRoateMouseDown"
        :style="rotateStyle"
        class="yo-canvas-drager-rotate-line"
      ></span>
    </div>
  </div>
</template>

<script>
// .yo-canvas-drager-pointer-rotate {
//     cursor: url("http://topology.le5le.com/img/rotate.cur"), auto;
//   }
import { scale } from "@/utils/scale";
// import rotateCur from "@/assets/rotate.cur";
const rotateCur = `data:application/octet-stream;base64,AAACAAEAGBgAAAwADACICQAAFgAAACgAAAAYAAAAMAAAAAEAIAAAAAAAYAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAJwAAAEkAAABpAAAAcAAAAF0AAAA3AAAAEwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEYAAAC0AAAA8QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA1wAAAIQAAAAYAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAlAAAAP8AAAD8AAAApgAAAFoAAAA3AAAAMAAAAEQAAAB3AAAAzwAAAP8AAADlAAAAUgAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAC7AAAA/wAAAKUAAAAlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFYAAADgAAAA/wAAAG0AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0AAAC/AAAAggAAAAAAAAAAAAAAAgAAAAIAAAABAAAAAQAAAAIAAAACAAAAAQAAAAAAAAAdAAAAwQAAAP8AAABVAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAFQAAANoAAADnAAAAIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEMAAAD/AAAAiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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`;
export default {
  props: {
    tabindex: {
      type: Number,
      default: 1,
    },
    focusZIndex: {
      type: Number,
      default: 1,
    },
    left: {
      type: Number,
      default: 0,
    },
    top: {
      type: Number,
      default: 0,
    },
    rotate: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    canvas: {
      type: String,
      default: "body",
    },
    focus: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    DragerStyles() {
      return `
        z-index: ${this.zIndex};
        width: ${this.width}px;
        height: ${this.height}px;
        left: ${this.left}px;
        top: ${this.top}px;
        transform: rotate(${this.rotate}deg);
      `;
    },
    elementStyle() {
      return `
        width: ${this.width}px;
        height: ${this.height}px;
      `;
    },
    rotateStyle() {
      return `cursor: url(${rotateCur}), auto;`;
    },
  },
  watch: {
    focus: {
      immediate: true,
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            this.handleDragerFocus();
          });
        } else {
          this.handleDragerBlur();
        }
      },
    },
  },
  data() {
    return {
      // 画布信息
      zIndex: this.tabindex + 1,
      canvasDom: null,
      canvasInfo: {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
      },
      shiftKeyDown: false,
      mousedown: false,
      mousemoveDir: "",
      // 鼠标按下位置
      mousedownPos: {
        x: 0,
        y: 0,
      },
      // 控制手柄信息
      dragerInfo: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      },
      currentDir: 0,
    };
  },
  methods: {
    // 获取画布信息用于碰壁检测
    getCanvasInfo() {
      this.canvasDom = document.querySelector(this.canvas);
      this.canvasInfo = this.canvasDom.getBoundingClientRect();
    },
    // 获取控制手柄元素信息
    getDragerInfo() {
      const drager = this.$refs.drager;
      const top = drager.offsetTop;
      const left = drager.offsetLeft;
      const height = drager.offsetHeight;
      const width = drager.offsetWidth;
      this.dragerInfo = {
        top,
        left,
        height,
        width,
      };

      this.$emit("update:width", width);
      this.$emit("update:height", height);
      this.$emit("update:top", top);
      this.$emit("update:left", left);
      this.$emit("change", {
        top,
        left,
        height,
        width,
        rotate: this.rotate,
      });
    },
    // 获取焦点
    handleDragerFocus() {
      this.$emit("focus");
      this.getCanvasInfo();
      this.zIndex = this.focusZIndex || this.tabindex + 1;
      document.addEventListener("keydown", this.handleDragerKeyDown);
    },
    // 失去焦点
    handleDragerBlur() {
      this.$emit("blur");
      this.zIndex = this.tabindex + 1;
      this.mousedown = false;
      document.removeEventListener("keydown", this.handleDragerKeyDown);
    },
    // 根据键盘调整上下左右
    handleDragerKeyDown(e) {
      const keycode = e.keyCode;
      const keycodes = [37, 38, 39, 40];
      const dom = this.$refs.drager;
      if (keycodes.includes(keycode)) {
        e.preventDefault();
        e.stopPropagation();
        switch (keycode) {
          case 37:
            dom.style.left = this.left - 1 + "px";
            break;
          case 38:
            dom.style.top = this.top - 1 + "px";
            break;
          case 39:
            dom.style.left = this.left + 1 + "px";
            break;
          case 40:
            dom.style.top = this.top + 1 + "px";
            break;
        }
        this.getDragerInfo();
      }
    },
    // DOM元素鼠标按下记录鼠标位置
    // 获取DOM元素信息
    handleDragerMouseDown(e) {
      this.mousedownPos.x = e.pageX;
      this.mousedownPos.y = e.pageY;

      document.addEventListener("mousemove", this.handleDragerMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      const self = this;
      function handleMouseUp() {
        document.removeEventListener("mousemove", self.handleDragerMouseMove);
      }

      this.getDragerInfo();
    },
    // DOM元素鼠标移动事件
    handleDragerMouseMove(e) {
      const disX = this.mousedownPos.x - e.pageX;
      const disY = this.mousedownPos.y - e.pageY;
      let left = this.dragerInfo.left - disX;
      let top = this.dragerInfo.top - disY;

      if (left > top && this.shiftKeyDown) {
        this.$emit("update:left", left);
      } else if (top > left && this.shiftKeyDown) {
        this.$emit("update:top", top);
      } else {
        this.$emit("update:left", left);
        this.$emit("update:top", top);
      }
    },
    // 元素大小调整逻辑
    handlePointMouseDown(e, dir) {
      this.mousedownPos.x = e.pageX;
      this.mousedownPos.y = e.pageY;
      this.currentDir = dir;

      document.addEventListener("mousemove", this.handlePointMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      const self = this;
      function handleMouseUp() {
        document.removeEventListener("mousemove", self.handlePointMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        self.getDragerInfo();
      }

      this.getDragerInfo();
    },
    handlePointMouseMove(e) {
      const drager = this.$refs.drager;
      const width = e.pageX - this.mousedownPos.x;
      const height = e.pageY - this.mousedownPos.y;

      if (this.currentDir === 1) {
        if (this.shiftKeyDown) {
          const sc = scale(this.width, this.height, width);
          const nh = this.height + this.height - sc.height;
          const nw = this.width + this.width - sc.width;
          drager.style.height = nh + "px";
          drager.style.width = nw + "px";

          drager.style.top = this.dragerInfo.top + (this.height - nh) + "px";
          drager.style.left = this.dragerInfo.left + (this.width - nw) + "px";
        } else {
          drager.style.height = this.height - height + "px";
          drager.style.width = this.width - width + "px";
          drager.style.top = this.dragerInfo.top + height + "px";
          drager.style.left = this.dragerInfo.left + width + "px";
        }
      }
      if (this.currentDir === 2) {
        drager.style.height = this.height - height + "px";
        drager.style.top = this.dragerInfo.top + height + "px";
      }
      if (this.currentDir === 3) {
        if (this.shiftKeyDown) {
          const sc = scale(this.width, this.height, width);
          drager.style.height = sc.height + "px";
          drager.style.width = sc.width + "px";
          drager.style.top =
            this.dragerInfo.top + (this.height - sc.height) + "px";
        } else {
          drager.style.height = this.height - height + "px";
          drager.style.width = this.width + width + "px";
          drager.style.top = this.dragerInfo.top + height + "px";
        }
      }
      if (this.currentDir === 4) {
        drager.style.height = this.height + "px";
        drager.style.width = this.width - width + "px";
        drager.style.left = this.dragerInfo.left + width + "px";
      }
      if (this.currentDir === 5) {
        drager.style.width = this.width + width + "px";
        drager.style.height = this.height + "px";
      }
      if (this.currentDir === 6) {
        if (this.shiftKeyDown) {
          const sc = scale(this.width, this.height, width);
          drager.style.width = this.width + this.width - sc.width + "px";
          drager.style.height = this.height + this.height - sc.height + "px";
          drager.style.left = this.dragerInfo.left + width + "px";
        } else {
          drager.style.width = this.width - width + "px";
          drager.style.height = this.height + height + "px";
          drager.style.left = this.dragerInfo.left + width + "px";
        }
      }
      if (this.currentDir === 7) {
        drager.style.height = this.height + height + "px";
      }
      if (this.currentDir === 8) {
        if (this.shiftKeyDown) {
          const sc = scale(this.width, this.height, width);
          drager.style.width = sc.width + "px";
          drager.style.height = sc.height + "px";
        } else {
          drager.style.width = this.width + width + "px";
          drager.style.height = this.height + height + "px";
        }
      }
    },
    handleRoateMouseDown(e) {
      this.canvasDom.style.cursor = `url(${rotateCur}),auto`;
      const drager = this.$refs.drager;
      // 旋转开始
      const event = window.event;
      const resc = drager.getBoundingClientRect();
      const point = {
        x: resc.x + resc.width / 2,
        y: resc.y + resc.height / 2,
      };
      const prevAngle =
        Math.atan2(event.pageY - point.y, event.pageX - point.x) -
        (this.rotate * Math.PI) / 180;

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      const self = this;
      function handleMouseMove() {
        // 旋转
        const event = window.event;
        const angle = Math.atan2(event.pageY - point.y, event.pageX - point.x);
        const rotate = Math.floor(((angle - prevAngle) * 180) / Math.PI);
        self.$emit("update:rotate", rotate);
      }
      function handleMouseUp() {
        // 旋转结束
        self.canvasDom.style.cursor = "default";
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$color-primary: #00b363;
.yo-canvas-drager {
  position: absolute;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  user-select: none;

  &.active {
    cursor: move;
  }

  .yo-drag-el {
    user-select: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .yo-drager-resize-spans {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid $color-primary;
    box-sizing: border-box;
    .yo-canvas-drager-rotate-line {
      position: absolute;
      height: 40px;
      width: 0;
      top: -40px;
      border-right: 1px solid $color-primary;
      left: 0;
      right: 0;
      box-sizing: border-box;
      margin: auto;
      &::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border: 1px solid $color-primary;
        background: #fff;
        margin-left: -5px;
        border-radius: 10px;
      }
    }
  }

  .yo-canvas-drager-pointer {
    width: 7px;
    height: 7px;
    display: block;
    border: 1px solid $color-primary;
    position: absolute;
    box-sizing: border-box;
    background: #fff;
    user-select: none;
    &:hover {
      background: $color-primary;
    }
    &:nth-child(1) {
      top: -4px;
      left: -4px;
      cursor: nwse-resize;
    }
    &:nth-child(2) {
      left: 0;
      right: 0;
      top: -4px;
      margin: auto;
      cursor: ns-resize;
    }
    &:nth-child(3) {
      top: -4px;
      right: -4px;
      margin: auto;
      cursor: nesw-resize;
    }
    &:nth-child(4) {
      top: 0px;
      bottom: 0;
      left: -4px;
      margin: auto;
      cursor: ew-resize;
    }
    &:nth-child(5) {
      top: 0px;
      bottom: 0px;
      right: -4px;
      margin: auto;
      cursor: ew-resize;
    }
    &:nth-child(6) {
      bottom: -4px;
      left: -4px;
      cursor: nesw-resize;
    }
    &:nth-child(7) {
      bottom: -4px;
      left: 0px;
      right: 0px;
      margin: auto;
      cursor: ns-resize;
    }
    &:nth-child(8) {
      bottom: -4px;
      right: -4px;
      cursor: nwse-resize;
    }
  }
}
</style>
