import { GridItem } from "./interface";
import { getImgUrl } from "./utils";

const listData: GridItem[] = [
    {
        path: "",
        title: "wind",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "wind",
        content: "...",
    },
    {
        path: "",
        title: "waterDrop",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "waterDrop",
        content: "...",
    },
    {
        path: "",
        title: "squaresWire",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "squaresWire",
        content: "...",
    },
    {
        path: "",
        title: "crossWarp",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "crossWarp",
        content: "...",
    },
    {
        path: "",
        title: "crossZoom",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "crossZoom",
        content: "...",
    },
    {
        path: "",
        title: "directionalWarp",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "directionalWarp",
        content: "...",
    },
    {
        path: "",
        title: "dreamy",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "dreamy",
        content: "...",
    },
    {
        path: "",
        title: "flyEye",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "flyEye",
        content: "...",
    },
    {
        path: "",
        title: "morph",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "morph",
        content: "...",
    },
    {
        path: "",
        title: "mosaic",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "mosaic",
        content: "...",
    },
    {
        path: "",
        title: "perlin",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "perlin",
        content: "...",
    },
    {
        path: "",
        title: "randomSquares",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "randomSquares",
        content: "...",
    },
    {
        path: "",
        title: "ripple",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "ripple",
        content: "...",
    },
    {
        path: "",
        title: "simpleZoom",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "simpleZoom",
        content: "...",
    },
    {
        path: "",
        title: "directional",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "directional",
        content: "...",
    },
    {
        path: "",
        title: "windowSlice",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "windowSlice",
        content: "...",
    },
    {
        path: "",
        title: "invertedPageCurl",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "invertedPageCurl",
        content: "...",
    },
    {
        path: "",
        title: "linearBlur",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "linearBlur",
        content: "...",
    },
    {
        path: "",
        title: "glitchMemories",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "glitchMemories",
        content: "...",
    },
    {
        path: "",
        title: "polkaDotsCurtain",
        playPicList: [getImgUrl("red-silk.jpg"), getImgUrl("red-silk2.webp")],
        description: "polkaDotsCurtain",
        content: "...",
    },
];

const animationsNameList = [
    "wind",
    "waterDrop",
    "squaresWire",
    "dreamy",
    "crossWarp",
    "crossZoom",
    "directionalWarp",
    "randomSquares",
    "ripple",
    "flyEye",
    "morph",
    "mosaic",
    "perlin",
    "simpleZoom",
    "directional",
    "windowSlice",
    "linearBlur",
    "invertedPageCurl",
    "glitchMemories",
    "polkaDotsCurtain",
]

// 网络图片模式
const singleModeCodeNetwork = `<script setup lang="ts" name="mixedExample">
import { computed } from "@vue/runtime-core";
import { onMounted } from "vue";
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
        const imgsBase = import.meta.env.VITE_IMG_URL;
        const imgs = [
            'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg',
            'https://images.pexels.com/photos/236660/pexels-photo-236660.jpeg',
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
};

// clear Interval when page unmounted
onUnmounted(() => {
    stop();
});
</script>

<template>
<div>
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
`

// 混合模式
const singleModeCodeMixed = `<script setup lang="ts" name="separateExample">
import { ref } from "vue";

import { GridItem } from "../interface";
import { singleWebglTransitionList } from "../constant";
import gridLayout from "@/components/grid-layout.vue";
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

const gridLayoutRef = ref<typeof gridLayout>();
const router = useRouter();
let listData = singleWebglTransitionList.map((o: GridItem, i: number) => {
  o.id = 'webgl-transition-parent-Math.random().toString().slice(2, 10)';
  return o;
});
const moduleTitle = "webgl-transition demo(V1.3.1)";
const imgsBase = import.meta.env.VITE_IMG_URL;
const onlineImages = [
    'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg',
    'https://images.pexels.com/photos/236660/pexels-photo-236660.jpeg',
];
let webglTransitions: WebglTransitions;
const lastPlayObject = ref<GridItem>();

/**
 * function
 */
const onClickGrid = async (object: GridItem) => {
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
      const el = document.querySelector('#lastPlayObject.value?.id');
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
        parentId: '#object.id',
        transitionList: [transitionObject[object.title]],
        playPicUrlList: [...onlineImages],
        playPicList: localImages,
        watchResize: true,
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
};

const onViewCode = () => {
  router.push("/view-code");
};

// clear Interval when page unmounted
onUnmounted(() => {
  webglTransitions?.stop();
  webglTransitions?.dispose();
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
`

export { listData as singleWebglTransitionList, animationsNameList, singleModeCodeNetwork, singleModeCodeMixed }