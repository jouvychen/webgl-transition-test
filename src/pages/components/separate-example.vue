<script setup lang="ts" name="separateExample">
import { ref } from "vue";

import { GridItem } from "../interface";
import { singleWebglTransitionList } from "../constant";
import { WebglTransitions } from "webgl-transition/dist/index";
// import { WebglTransitions } from "webgl-transition/lib";
import RULE from "../../tools/rules";
import { asyncLoadImage } from "../utils";

// defineProps<{ msg: string }>();

/**
 * variable
 */
const router = useRouter();
let listData = singleWebglTransitionList.map((o: GridItem, i: number) => {
  o.id = `webgl-transition-parent-${Math.random().toString().slice(2, 10)}${i}`;
  return o;
});
const moduleTitle = "webgl-transition演示";
const imgs = [
  "http://pic4.zhimg.com/v2-02ae8129fed6feadc1514fd861a44a2f_r.jpg",

  "http://pic1.zhimg.com/v2-aa528fcd1a5ff3ba4a4a8429d3c11222_r.jpg",

  "http://pic1.zhimg.com/v2-4ce925afd994d72a16276bc7fbddf97c_r.jpg",
];
let webglTransitions: WebglTransitions;
const lastPlayObject = ref<GridItem>();

/**
 * function
 */
const onClickGrid = async (object: GridItem) => {
  webglTransitions?.stop();
  webglTransitions?.dispose();

  // 清空历史wengl-transition的canvas
  const el = document.querySelector(`#${lastPlayObject.value?.id}`);
  if (el) {
    const childs = el.children;
    for (let i = childs.length - 1; i >= 0; i--) {
      if (RULE.webglTransitionParent.pattern.test(childs[i].id)) {
        el.removeChild(childs[i]);
      }
    }
  }

  // 方式一：用户自定义图片, 需要在图片加载完成后才能初始化和调用方法
  asyncLoadImage(object.playPicList, (result: HTMLImageElement[]) => {
    webglTransitions = new WebglTransitions(
      {
        domId: `#${object.id}`,
      },
      [object.title],
      result
    );

    webglTransitions?.main();
    lastPlayObject.value = object;
  });

  // 方式2：传网络图片, webgl-transition内部管理并发加载
  // webglTransitions = new WebglTransitions(
  //   `#${object.id}`,
  //   [object.title],
  //   imgs
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
</script>

<template>
  <div class="separate-example-container">
    <h1 class="main-title">{{ moduleTitle }}</h1>

    <h3>Separate example</h3>
    <p>
      Each is a separate instance showing a different transition animation
      effect.
      <a @click="onViewCode" class="cursor">(view code)</a>
    </p>
    <grid-layout
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