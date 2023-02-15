import RULE from "../tools/rules";

const getImgUrl = (name: string) => {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
};

const loadImgs = (imageList: string[]) => {
    let proList = [];
    for (let i = 0; i < imageList.length; i++) {
        let pro = new Promise((resolve, reject) => {
            let img = new Image();
            // 图片是网络图片
            if (RULE.isNetworkImageLoose.pattern.test(imageList[i])) {
                img.setAttribute("crossOrigin", "Anonymous");
            }
            img.onload = function () {
                resolve(img)
            }
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

export { getImgUrl, asyncLoadImage }