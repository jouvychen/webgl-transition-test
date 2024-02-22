<script setup lang="ts" name="mixedExample">
import { computed } from "@vue/runtime-core";
import { onMounted } from "vue";
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
import { debounce } from "@/tools/common";

// 打包产物测试
// import { WebglTransitions } from "../../dist/index";
// import { wind, glitchMemories } from '../../dist/transition-types'

let webglTransitions: WebglTransitions;
const glcanvasRef = ref<HTMLDivElement>();
const clientWidth = ref(0);
const clientHeight = ref(0);
const calcWidth = () => {
  clientWidth.value = glcanvasRef.value ? glcanvasRef.value.clientWidth : 0;
};
const calcHeight = () => {
  clientHeight.value = glcanvasRef.value
    ? Number((glcanvasRef.value?.clientWidth * 2400) / 3600)
    : 0;
};
onMounted(() => {
  calcWidth();
  calcHeight();
  nextTick(() => {
    const imgs = [
      "https://img.zcool.cn/community/011d775d5663d2a80120695cdbced1.jpg",
      "https://img.zcool.cn/community/0158fc5d5663d6a80120695cf12578.jpg",
      "https://img.zcool.cn/community/01326c5d5663d2a8012187f49b8eed.jpg",
      "https://img.zcool.cn/community/013d165d5663d2a8012187f41712de.jpg",
      "https://img.zcool.cn/community/01c7575d5663d2a80120695c9b90d1.jpg",

      // "http://pic1.zhimg.com/v2-4ce925afd994d72a16276bc7fbddf97c_r.jpg", // 可能是编码问题
    ];
    const obj = {
      parentId: "#glcanvas",
      transitionList: [
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
      ],
      playPicUrlList: imgs,
      playPicList: [],
      carouselTime: 1000,
      watchResize: false,
    };
    webglTransitions = new WebglTransitions(obj);
    webglTransitions?.main();

    const resizeObserver = new ResizeObserver(
      debounce(() => {
        calcWidth();
        calcHeight();
        console.log("大小变化");
        webglTransitions?.onResize({
          width: clientWidth.value,
          height: clientHeight.value,
        });
      }, 300)
    );
    glcanvasRef.value && resizeObserver.observe(glcanvasRef.value);
  });
});
const lost = () => {
  webglTransitions?.simulatedLostContext();
};
const stop = () => {
  webglTransitions?.stop();
  webglTransitions?.dispose();
  console.log("batches-example释放webglTransitions", webglTransitions);
};

// clear Interval when page unmounted
onUnmounted(() => {
  stop();
});
</script>

<template>
  <div>
    <!-- <div class="class" @click="lost">丢失</div>
    <div class="class" @click="stop">停止</div> -->
    <div
      ref="glcanvasRef"
      id="glcanvas"
      :style="{ width: '100vw', height: clientHeight + 'px' }"
    ></div>
  </div>
</template>

<style scoped lang="less">
#glcanvas {
  overflow: hidden;
}
</style>
