<script setup lang="ts" name="mixedExample">
import { computed } from "@vue/runtime-core";
import { onMounted } from "vue";
// import { WebglTransitions } from "webgl-transition/dist/index";

// import { WebglTransitions } from "webgl-transition/lib";
// import { wind, glitchMemories } from 'webgl-transition/lib/transition-types'

import { WebglTransitions } from "../../dist/index";
import { wind, glitchMemories } from '../../dist/transition-types'

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
      wind,
      glitchMemories
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
