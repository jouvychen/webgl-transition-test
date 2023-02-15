<script setup lang="ts" name="mixedExample">
import { computed } from "@vue/runtime-core";
import { onMounted } from "vue";
import { WebglTransitions } from "webgl-transition/dist/index";
// function bubleSort(arr: any) {
//   var len = arr.length;
//   for (let outer = len; outer >= 2; outer--) {
//     for (let inner = 0; inner <= outer - 1; inner++) {
//       // debugger;
//       console.log("arr[inner + 1]", arr[30]);
//       if (arr[inner] > arr[inner + 1]) {
//         let temp = arr[inner];
//         arr[inner] = arr[inner + 1];
//         arr[inner + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
let webglTransitions: WebglTransitions;
const glcanvasRef = ref<HTMLDivElement>();
const clientWidth = computed(() => {
  return glcanvasRef.value?.clientWidth;
});
const clientHeight = computed(() => {
  const height = glcanvasRef.value
    ? Number((glcanvasRef.value?.clientWidth * 1080) / 1920)
    : 0;
  return height;
});
onMounted(() => {
  const imgs = [
    // 'cat1.jpg',

    // 'cat2.jpg',

    // 'gleb-alexandrov-sunrise-02.jpg',

    "http://pic4.zhimg.com/v2-02ae8129fed6feadc1514fd861a44a2f_r.jpg",

    "http://pic1.zhimg.com/v2-aa528fcd1a5ff3ba4a4a8429d3c11222_r.jpg",

    "http://pic1.zhimg.com/v2-4ce925afd994d72a16276bc7fbddf97c_r.jpg",
  ];
  webglTransitions = new WebglTransitions(
    {
      domId: "#glcanvas",
      width: clientWidth.value,
      height: clientHeight.value,
    },
    [
      "wind",
      "waterDrop",
      "squaresWire",
      "dreamy",
      "crossWarp",
      "crossZoom",
      "directionalWarp",
      "randomSquares", // 7
      "ripple",
      "flyEye",
      "morph", // 10
      "mosaic",
      "perlin",
      "simpleZoom",
      "directional",
      "windowSlice", // 15
      "linearBlur",
      "invertedPageCurl",
      "glitchMemories",
      "polkaDotsCurtain", // 19
    ],
    imgs
  );
  webglTransitions?.main();
});
const lost = () => {
  webglTransitions?.simulatedLostContext();
};
const stop = () => {
  webglTransitions?.stop();
};
// const aaa = [3, 7, 4, 2, 1, 9];
// bubleSort(aaa);
</script>

<template>
  <div>
    <!-- <div class="class" @click="lost">丢失</div>
    <div class="class" @click="stop">停止</div> -->
    <div
      ref="glcanvasRef"
      id="glcanvas"
      :style="{ width: '100%', height: clientHeight + 'px' }"
    ></div>
  </div>
</template>

<style scoped>
</style>
