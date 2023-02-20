const v114AnimationImport = `
    // old version
    let webglTransitions = new WebglTransitions(
        {
            domId: "#webgl-transition",
        },
        [
            "wind"
        ],
        [
            "http://pic1.zhimg.com/v2-aa528fcd1a5ff3ba4a4a8429d3c11222_r.jpg",
        
            "http://pic1.zhimg.com/v2-4ce925afd994d72a16276bc7fbddf97c_r.jpg",
        ]
    );

    // new version(1.2.0+)
    import { wind } from "/webgl-transition/dist/transition-types";
    let webglTransitions = new WebglTransitions(
        {
            domId: "#webgl-transition",
        },
        [
            wind
        ], // here
        [
            "http://pic1.zhimg.com/v2-aa528fcd1a5ff3ba4a4a8429d3c11222_r.jpg",
        
            "http://pic1.zhimg.com/v2-4ce925afd994d72a16276bc7fbddf97c_r.jpg",
        ]
    );
`
export { v114AnimationImport }