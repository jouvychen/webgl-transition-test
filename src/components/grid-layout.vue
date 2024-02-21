<template>
  <div class="grid-container">
    
    <div ref="gridRef" v-for="(o, i) in list" :key="i" class="container">
      <div class="content">
        <div :id="o.id" class="webgl-transition-parent"></div>
        
        <img ref="imgRef" class="content-image" :src="o.playPicList[0]" />
        <div class="content-details" :class="fadeInCss[Number(i) % 5]">
          
          <div
            :class="{ 'play-btn-active': activeIndex === Number(i) }"
            @click="onClickItem(o, Number(i))"
            class="play-btn flex-center"
          >
            <CssPlayPauseButton ref="playPauseBtnRef"></CssPlayPauseButton>
          </div>
        </div>
      </div>
      <h3 class="title">{{ o.title }}</h3>
    </div>
  </div>
</template>
<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { debounce } from "../tools/common";
import CssPlayPauseButton from "@/components/css-play-pause-button.vue"; // css播放暂停按钮

interface GridItem {
  path: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

interface ObjectKey {
  [key: number]: string;
}

const emits = defineEmits(["onClickGrid"]);
const router = useRouter();
const props = defineProps({
  title: {
    type: String,
    default: "模块标题",
  },
  list: {
    type: Object,
    default: () => ({}),
  },
});

const gridRef = ref([]);
const playPauseBtnRef = ref<typeof CssPlayPauseButton[]>([]);
const activeIndex = ref<number>();
const imgRef = ref<HTMLImageElement>();
const imgHeight = ref(0);
const fadeInCss: ObjectKey = {
  0: "fadeIn-bottom",
  1: "fadeIn-top",
  2: "fadeIn-right",
  3: "fadeIn-top fadeIn-left",
  4: "fadeIn-top fadeIn-right",
};

const onClickItem = (object: GridItem, index: number) => {
  // 点击是同一个
  if (activeIndex.value === index) {
    playPauseBtnRef.value[index].onToggleActive();
  } else {
    // 不同时，先暂停上一个，然后下一个展示播放中
    activeIndex.value?.toString() && playPauseBtnRef.value[activeIndex.value].onPause();
    playPauseBtnRef.value[index].onToggleActive();
  }
  activeIndex.value = index;
  emits("onClickGrid", object);
};

const calcImgHeight = () => {
  if (imgRef.value) {
    imgHeight.value = imgRef.value.clientWidth * 0.7;
  }
};

// 窗口改变触发事件
const windowChangeEvent = () => {
  calcImgHeight();
};

onMounted(() => {
  console.log("数据", props.list);
});

nextTick(() => {
  windowChangeEvent();
});

window.addEventListener("resize", debounce(windowChangeEvent, 300));

// 销毁时移除绑定的事件
onUnmounted(() => {
  window.removeEventListener("resize", windowChangeEvent);
});
</script>

<style scoped lang="less">
// @import 'https://fonts.googleapis.com/css?family=Raleway';
@primary: #ffffff;
@pulse-bg: #ffffff;
.grid-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background: #f9f9f9;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
}

.container {
  // padding: 1em 0;
  float: left;
  width: 50%;
}
@media screen and (max-width: 640px) {
  .container {
    display: block;
    width: 100%;
  }
}

@media screen and (min-width: 900px) {
  .container {
    width: 33.3%;
  }
}

.container .title {
  font-size: 1.2em;
  color: #1a1a1a;
  text-align: center;
  margin: 5px;
}

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  height: 80%;
  margin: auto;
  overflow: hidden;
}

.content .webgl-transition-parent {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  opacity: 1;
}

.content-image {
  width: 100%;
  height: 100%;
}

.content-details {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  text-align: center;
  // padding-left: 1em;
  // padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.play-btn {
  width: 50px;
  height: 50px;
  font-size: 1.3em;
  font-weight: light;
  text-transform: uppercase;
  text-align: center;
  line-height: 100px;
  letter-spacing: -1px;
  color: white;
  border: none;
  border-radius: 50%;
  background: #0000008c;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgb(255 255 255 / 50%);
}

.play-btn-active {
  animation: pulse 1.5s;
  -webkit-animation: pulse 1.5s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom {
  top: 80%;
}

.fadeIn-top {
  top: 20%;
}

.fadeIn-left {
  left: 20%;
}

.fadeIn-right {
  left: 80%;
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(@pulse-bg, 0);
  }
  100% {
    // transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(@pulse-bg, 0);
  }
}
@-webkit-keyframes pulse {
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(@pulse-bg, 0);
  }
  100% {
    // transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(@pulse-bg, 0);
  }
}

svg {
  fill: darken(@primary, 12%);
  stroke: darken(@primary, 12%);
  stroke-linejoin: round;
  stroke-width: 8;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    fill: darken(@primary, 17%);
    stroke: darken(@primary, 17%);
    transform: scale(1.1, 1.1);
  }
}
</style>
