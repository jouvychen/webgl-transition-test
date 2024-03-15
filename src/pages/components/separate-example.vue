<script setup lang="ts" name="separateExample">
import { ref } from "vue";

import { GridItem } from "../interface";
import { singleWebglTransitionList } from "../constant";
import gridLayout from "@/components/grid-layout.vue";
// 已发布依赖
// import { WebglTransitions } from "webgl-transition/dist/index";
// import {
//   wind,
//   waterDrop,
//   squaresWire,
//   crossWarp,
//   crossZoom,
//   directionalWarp,
//   dreamy,
//   flyEye,
//   morph,
//   mosaic,
//   perlin,
//   randomSquares,
//   ripple,
//   simpleZoom,
//   directional,
//   windowSlice,
//   invertedPageCurl,
//   linearBlur,
//   glitchMemories,
//   polkaDotsCurtain,
// } from "webgl-transition/dist/transition-types";

// npm link webgl-transition测试
import {
  WebglTransitions,
  wind,
  waterDrop,
  squaresWire,
  crossWarp,
  crossZoom,
  directionalWarp,
  dreamy,
  flyEye,
  morph,
  mosaic,
  perlin,
  randomSquares,
  ripple,
  simpleZoom,
  directional,
  windowSlice,
  invertedPageCurl,
  linearBlur,
  glitchMemories,
  polkaDotsCurtain,
} from "webgl-transition";

// import { WebglTransitions } from "../../dist/index";

//  '../../dist/transition-types'
//  'webgl-transition/lib/transition-types'
import RULE from "../../tools/rules";
import { asyncLoadImage } from "../utils";

interface ObjectKey {
  [key: string]: any;
}

const transitionObject: ObjectKey = {
  wind: wind,
  waterDrop: waterDrop,
  squaresWire: squaresWire,
  crossWarp: crossWarp,
  crossZoom: crossZoom,
  directionalWarp: directionalWarp,
  dreamy: dreamy,
  flyEye: flyEye,
  morph: morph,
  mosaic: mosaic,
  perlin: perlin,
  randomSquares: randomSquares,
  ripple: ripple,
  simpleZoom: simpleZoom,
  directional: directional,
  windowSlice: windowSlice,
  invertedPageCurl: invertedPageCurl,
  linearBlur: linearBlur,
  glitchMemories: glitchMemories,
  polkaDotsCurtain: polkaDotsCurtain,
};
// defineProps<{ msg: string }>();

const gridLayoutRef = ref<typeof gridLayout>();
const router = useRouter();
let listData = singleWebglTransitionList.map((o: GridItem, i: number) => {
  o.id = `webgl-transition-parent-${Math.random().toString().slice(2, 10)}${i}`;
  return o;
});
const moduleTitle = "webgl-transition demo(V1.3.1)";
const imgsBase = import.meta.env.VITE_IMG_URL;
// 图片经过压缩可能无法解码并正常展示出来
const onlineImages = [
  // `${imgsBase}011d775d5663d2a80120695cdbced1.jpg`,
  // `${imgsBase}0158fc5d5663d6a80120695cf12578.jpg`,
  `${imgsBase}127028/pexels-photo-127028.jpeg`,
  `${imgsBase}236660/pexels-photo-236660.jpeg`,
];
let webglTransitions: WebglTransitions;
const lastPlayObject = ref<GridItem>();

/**
 * function
 */
const onClickGrid = async (object: GridItem) => {
  // 方式一：用户自定义图片, 需要在图片加载完成后才能初始化和调用方法
  if (
    webglTransitions?.playStatus === "pause" &&
    lastPlayObject.value?.id === object.id
  ) {
    webglTransitions?.continue();
  } else if (
    webglTransitions?.playStatus === "stop" ||
    lastPlayObject.value?.id != object.id
  ) {
    if (lastPlayObject.value) {
      const el = document.querySelector(`#${lastPlayObject.value?.id}`);
      if (el) {
        const childs = el.children;
        for (let i = childs.length - 1; i >= 0; i--) {
          if (RULE.webglTransitionParent.pattern.test(childs[i].id)) {
            el.removeChild(childs[i]);
          }
        }
      }
    }
    webglTransitions?.stop();
    webglTransitions?.dispose();
    asyncLoadImage(object.playPicList, (localImages: HTMLImageElement[]) => {
      const obj = {
        parentId: `#${object.id}`, // 过渡动画挂载父容器div的id
        transitionList: [transitionObject[object.title]], // 过渡动画类型
        playPicUrlList: [...onlineImages], // 使用在线图片地址
        playPicList: localImages, // 用户自定义加载并返回image对象数组
        watchResize: true, // 自动监听容器大小并调整画布大小
      };
      webglTransitions = new WebglTransitions(obj);
      webglTransitions?.main();
      lastPlayObject.value = object;
    });
  } else if (
    webglTransitions?.playStatus === "playing" &&
    lastPlayObject.value?.id === object.id
  ) {
    webglTransitions?.pause();
  }

  // 方式2：传网络图片, webgl-transition内部管理并发加载
  // webglTransitions = new WebglTransitions(
  //   `#${object.id}`,
  //   [object.title],
  //   onlineImages
  // );

  // const el = document.querySelector(`#${lastPlayObject.value?.id}`);
  // if (el) {
  //   const childs = el.children;
  //   for (let i = childs.length - 1; i >= 0; i--) {
  //     if (RULE.webglTransitionParent.pattern.test(childs[i].id)) {
  //       el.removeChild(childs[i]);
  //     }
  //   }
  // }

  // webglTransitions.restart();
  // lastPlayObject.value = object;
};

const onViewCode = () => {
  router.push("/view-code");
};

// clear Interval when page unmounted
onUnmounted(() => {
  webglTransitions?.stop();
  webglTransitions?.dispose();
  console.log("separate-example释放webglTransitions", webglTransitions);
});
</script>

<template>
  <div class="separate-example-container">
    <h1 class="main-title">{{ moduleTitle }}</h1>

    <h3>Separate example</h3>
    <p>
      Each is a separate instance showing a different transition animation
      effect.
      <a @click="onViewCode" class="cursor">(documentation)</a>
    </p>
    <grid-layout
      ref="gridLayoutRef"
      :title="moduleTitle"
      :list="listData"
      @on-click-grid="onClickGrid"
    ></grid-layout>
  </div>
</template>

<style scoped lang="less">
.separate-example-container {
  color: #888;
}
</style>
