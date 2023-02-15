// 防抖函数
export const debounce = (fn:any, delay:number) => {
  let timer:any = null;
  return function () {
    if (timer) { clearTimeout(timer); }
    timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line prefer-rest-params
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
};