import { GridItem } from "./interface";
import { getImgUrl } from "./utils";

const listData: GridItem[] = [
    {
        path: "",
        title: "wind",
        playPicList: ["http://pic1.zhimg.com/v2-4ce925afd994d72a16276bc7fbddf97c_r.jpg", getImgUrl("white-silk.webp"), getImgUrl("white-lotus.webp")],
        // playPicList: [
        //     "http://pic4.zhimg.com/v2-02ae8129fed6feadc1514fd861a44a2f_r.jpg",

        //     "http://pic1.zhimg.com/v2-aa528fcd1a5ff3ba4a4a8429d3c11222_r.jpg",

        //     "http://pic1.zhimg.com/v2-4ce925afd994d72a16276bc7fbddf97c_r.jpg",
        // ],
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
        playPicList: [
            getImgUrl("004827-1673110107646e.webp"),
            getImgUrl("113340-1650944020d166.webp"),
        ],
        description: "squaresWire",
        content: "...",
    },
    {
        path: "",
        title: "crossWarp",
        playPicList: [
            getImgUrl("005836-16499555168372.webp"),
            getImgUrl("184041-1674556841997c.webp"),
        ],
        description: "crossWarp",
        content: "...",
    },
    {
        path: "",
        title: "crossZoom",
        playPicList: [
            getImgUrl("005104-16730238642321.webp"),
            getImgUrl("192110-1568028070e1cc.webp"),
        ],
        description: "crossZoom",
        content: "...",
    },
    {
        path: "",
        title: "directionalWarp",
        playPicList: [
            getImgUrl("172210-16742065302a9c.webp"),
            getImgUrl("154624-16741143848abd.webp"),
        ],
        description: "directionalWarp",
        content: "...",
    },
    {
        path: "",
        title: "dreamy",
        playPicList: [
            getImgUrl("154242-1674114162e7d7.webp"),
            getImgUrl("154100-1674114060d02c.webp"),
        ],
        description: "dreamy",
        content: "...",
    },
    {
        path: "",
        title: "flyEye",
        playPicList: [
            getImgUrl("173740-16722202608132.webp"),
            getImgUrl("165525-167273612558a6.webp"),
            getImgUrl("165158-16727359185812.webp"),
        ],
        description: "flyEye",
        content: "...",
    },
    {
        path: "",
        title: "morph",
        playPicList: [
            getImgUrl("000703-16738852232359.webp"),
            getImgUrl("005245-167319676525cb.webp"),
        ],
        description: "morph",
        content: "...",
    },
    {
        path: "",
        title: "mosaic",
        playPicList: [
            getImgUrl("005741-167432026152b8.webp"),
            getImgUrl("002815-16740592954afa.webp"),
        ],
        description: "mosaic",
        content: "...",
    },
    {
        path: "",
        title: "perlin",
        playPicList: [
            getImgUrl("004413-16757018539a1b.webp"),
            getImgUrl("004156-1675701716a172.webp"),
            getImgUrl("004307-16757017873bc6.webp"),
        ],
        description: "perlin",
        content: "...",
    },
    {
        path: "",
        title: "randomSquares",
        playPicList: [
            getImgUrl("203400-166791084068b8.webp"),
            getImgUrl("215849-16651511295207.webp"),
        ],
        description: "randomSquares",
        content: "...",
    },
    {
        path: "",
        title: "ripple",
        playPicList: [
            getImgUrl("200340-164233462027dc.webp"),
            getImgUrl("002828-1654792108762f.webp"),
        ],
        description: "ripple",
        content: "...",
    },
    {
        path: "",
        title: "simpleZoom",
        playPicList: [
            getImgUrl("000732-16489156528a86.webp"),
            getImgUrl("000831-1648915711b98a.webp"),
        ],
        description: "simpleZoom",
        content: "...",
    },
    {
        path: "",
        title: "directional",
        playPicList: [
            getImgUrl("002213-167379973369d6.webp"),
            getImgUrl("002407-16735406474623.webp"),
        ],
        description: "directional",
        content: "...",
    },
    {
        path: "",
        title: "windowSlice",
        playPicList: [
            getImgUrl("002407-16735406474623.webp"),
            getImgUrl("233139-167371029908dd.webp"),
        ],
        description: "windowSlice",
        content: "...",
    },
    {
        path: "",
        title: "invertedPageCurl",
        playPicList: [
            getImgUrl("233139-167371029908dd.webp"),
            getImgUrl("002213-167379973369d6.webp"),
        ],
        description: "invertedPageCurl",
        content: "...",
    },
    {
        path: "",
        title: "linearBlur",
        playPicList: [
            getImgUrl("220501-1586700301dfe4.webp"),
            getImgUrl("001611-1596212171d777.webp"),
        ],
        description: "linearBlur",
        content: "...",
    },
    {
        path: "",
        title: "glitchMemories",
        playPicList: [
            getImgUrl("63531.jpg"),
            getImgUrl("63532.jpg"),
            getImgUrl("63533.jpg"),
        ],
        description: "glitchMemories",
        content: "...",
    },
    {
        path: "",
        title: "polkaDotsCurtain",
        playPicList: [
            getImgUrl("read-book.jpg"),
            getImgUrl("153854-16578707341b13.webp"),
        ],
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
    import { WebglTransitions } from "webgl-transition/dist/index";
    import { wind } from "/webgl-transition/dist/transition-types";
    let webglTransitions = new WebglTransitions(
        {
            domId: "#webgl-transition", // Necessary
            width: 1920, // Optional attribute
            height: 1080, // Optional attribute
        },
        [
            wind
        ], // transitionList
        [
            "http://pic4.zhimg.com/v2-02ae8129fed6feadc1514fd861a44a2f_r.jpg",

            "http://pic1.zhimg.com/v2-aa528fcd1a5ff3ba4a4a8429d3c11222_r.jpg",
        
            "http://pic1.zhimg.com/v2-4ce925afd994d72a16276bc7fbddf97c_r.jpg",
        ] // playPicList
      );
    webglTransitions?.main();
`

// 混合模式
const singleModeCodeMixed = `
    // This example is based on Vite
    import { WebglTransitions } from "webgl-transition/dist/index";
    import { wind } from "/webgl-transition/dist/transition-types";

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
    import { wind, waterDrop, squaresWire, dreamy } from "/webgl-transition/dist/transition-types";

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