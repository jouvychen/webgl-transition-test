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
const singleModeCodeNetwork = `
<script setup lang="ts" name="mixedExample">
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
const singleModeCodeMixed = `
    // This example is based on Vite
    import { WebglTransitions } from "webgl-transition/dist/index";
    import { wind } from "webgl-transition/dist/transition-types";

    const getLocalImgUrl = (name: string) => {
        return new URL("The image path in your project + name", import.meta.url).href;
    };

    // Both local and network images
    const imageList = ["http://pic1.zhimg.com/v2-4ce925afd994d72a16276bc7fbddf97c_r.jpg", getLocalImgUrl("white-lotus.webp")];
    
    const loadImgs = (imageList: string[]) => {
        let proList = [];
        for (let i = 0; i < imageList.length; i++) {
            let pro = new Promise((resolve, reject) => {
                let img = new Image();
                // The picture is a web picture
                if (RULE.isNetworkImageLoose.pattern.test(imageList[i])) {
                    img.setAttribute("crossOrigin", "Anonymous");
                }
                img.onload = function () {
                    resolve(img)
                }
                // Just focus on your local image path
                img.src = imageList[i];
            })
            proList.push(pro)
        }

        return Promise.all(proList)
            .then((rs) => {
                console.log("loaded all images");
                return Promise.resolve(rs);
            })
    }

    const asyncLoadImage = async (imgList: string[], cb: CallableFunction) => {
        try {
            let rs = await loadImgs(imgList);
            cb(rs);
        } catch (err) {
            console.log(err)
            cb([])
        }
    }

    let webglTransitions: WebglTransitions;
    asyncLoadImage(imageList, (imageResult: HTMLImageElement[]) => {
        // Get the loaded images in the callback
        webglTransitions = new WebglTransitions(
            {
                domId: "#webgl-transition",
            },
            [
                wind
            ],
            imageResult
        );
    
        webglTransitions?.main();
    });
`

// 批量动画模式
const batchesModeCode = `
    import { WebglTransitions } from "webgl-transition/dist/index";
    import { wind, waterDrop, squaresWire, dreamy } from "webgl-transition/dist/transition-types";

    let webglTransitions = new WebglTransitions(
        {
            domId: "#webgl-transition", // Necessary
            width: 1920, // Optional attribute
            height: 1080, // Optional attribute
        },
        [
            wind,
            waterDrop,
            squaresWire,
            dreamy
        ], // transitionList
        [
            "http://pic4.zhimg.com/v2-02ae8129fed6feadc1514fd861a44a2f_r.jpg",

            "http://pic1.zhimg.com/v2-aa528fcd1a5ff3ba4a4a8429d3c11222_r.jpg",
        
            "http://pic1.zhimg.com/v2-4ce925afd994d72a16276bc7fbddf97c_r.jpg",
        ] // playPicList
      );
    webglTransitions?.main();
`

export { listData as singleWebglTransitionList, animationsNameList, singleModeCodeNetwork, singleModeCodeMixed, batchesModeCode }