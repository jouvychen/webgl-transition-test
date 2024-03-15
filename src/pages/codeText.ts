const v114AnimationImport = `
    // old version
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

    // new version(1.3.1+)
    import { wind } from "webgl-transition";
    const transitionObject: ObjectKey = {
        wind: wind
      };
    const onlineImages = [
        'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg',
        'https://images.pexels.com/photos/236660/pexels-photo-236660.jpeg',
      ];
    const obj = {
        parentId: '#parentId',
        transitionList: [...transitionObject],
        playPicUrlList: [...onlineImages],
        playPicList: localImages,
        watchResize: true,
      };
      webglTransitions = new WebglTransitions(obj);
      webglTransitions?.main();
`
export { v114AnimationImport }