<template>
  <div
    :tabindex="tabindex"
    :style="DragerStyles"
    :class="['yo-canvas-drager', { active: mousedown || focus }]"
    ref="drager"
    @focus="handleDragerFocus"
    @click="handleDragerFocus"
    @blur="handleDragerBlur"
    @keydown.16.stop.prevent="shiftKeyDown = true"
    @keyup.16.stop.prevent="shiftKeyDown = false"
    @keydown="handleDragerKeyDown"
  >
    <div ref="el" class="drag-el">
      <slot></slot>
    </div>
    <div v-if="focus || mousedown" class="yo-resize-spans">
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
        class="yo-canvas-drager-rotate-line"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabindex: {
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
  },
  data() {
    return {
      // 画布信息
      zIndex: this.tabindex + 1,
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
    handleDragerKeyDown(e) {
      console.log(e);
    },
    // 获取画布信息用于碰壁检测
    getCanvasInfo() {
      const canvas = document.querySelector(this.canvas);
      this.canvasInfo = canvas.getBoundingClientRect();
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
      document.onmousedown = this.handleDragerMouseDown;
      this.mousedown = true;
      this.getCanvasInfo();
      this.getDragerInfo();
      this.zIndex = 9999;
    },
    // 失去焦点
    handleDragerBlur(e) {
      this.$emit("focus", false);
      this.zIndex = this.tabindex + 1;
      this.mousedown = false;
      // document.onmousedown = null;
    },
    // DOM元素鼠标按下记录鼠标位置
    // 获取DOM元素信息
    handleDragerMouseDown(e) {
      this.mousedownPos.x = e.pageX;
      this.mousedownPos.y = e.pageY;
      document.onmousemove = this.handleDragerMouseMove;
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      this.getDragerInfo();
    },
    // DOM元素鼠标移动事件
    handleDragerMouseMove(e) {
      const disX = this.mousedownPos.x - e.pageX;
      const disY = this.mousedownPos.y - e.pageY;
      let left = this.dragerInfo.left - disX;
      let top = this.dragerInfo.top - disY;

      // left = this.canvasInfo.width - this.width;
      // top = this.canvasInfo.height - this.height;
      // // 左右碰壁检测
      // if (left <= 0) {
      //   left = 0;
      // } else if (left + this.width > this.canvasInfo.width) {
      //   left = this.canvasInfo.width - this.width;
      // }
      // // 上下碰壁检测
      // if (top <= 0) {
      //   top = 0;
      // } else if (top + this.height > this.canvasInfo.height) {
      //   top = this.canvasInfo.height - this.height;
      // }

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

      document.onmousemove = this.handlePointMouseMove;
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        this.getDragerInfo();
      };
      this.getDragerInfo();
    },
    handlePointMouseMove(e) {
      const drager = this.$refs.drager;
      const width = e.pageX - this.mousedownPos.x;
      const height = e.pageY - this.mousedownPos.y;
      const maxDis = Math.max(width, height);

      if (this.currentDir === 1) {
        if (this.shiftKeyDown) {
          drager.style.width = this.width - maxDis + "px";
          drager.style.height = this.height - maxDis + "px";
          drager.style.top = this.dragerInfo.top + maxDis + "px";
          drager.style.left = this.dragerInfo.left + maxDis + "px";
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
          drager.style.height = this.height + width + "px";
          drager.style.width = this.width + width + "px";
          drager.style.top = this.dragerInfo.top - width + "px";
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
          drager.style.width = this.width - width + "px";
          drager.style.height = this.height - width + "px";
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
          drager.style.width = this.width + maxDis + "px";
          drager.style.height = this.height + maxDis + "px";
        } else {
          drager.style.width = this.width + width + "px";
          drager.style.height = this.height + height + "px";
        }
      }
    },
    handleRoateMouseDown() {
      const drager = this.$refs.drager;
      // 旋转开始
      var event = window.event;
      const resc = drager.getBoundingClientRect();
      var point = {
        x: resc.x + resc.width / 2,
        y: resc.y + resc.height / 2,
      };
      var prevAngle =
        Math.atan2(event.pageY - point.y, event.pageX - point.x) -
        (this.rotate * Math.PI) / 180;
      document.onmousemove = () => {
        // 旋转
        var event = window.event;
        var angle = Math.atan2(event.pageY - point.y, event.pageX - point.x);
        var rotate = Math.floor(((angle - prevAngle) * 180) / Math.PI);
        this.$emit("update:rotate", rotate);
      };
      document.onmouseup = () => {
        // 旋转结束
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$color-primary: #0087ff;
.yo-canvas-drager {
  position: absolute;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  user-select: none;

  &.active {
    cursor: move;
  }
  .drag-el {
    user-select: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .yo-resize-spans {
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
