import GridLayout from './grid-layout.vue'; // 卡片布局

const commonComponent = {
  install(Vue: any) {
    Vue.component('GridLayout', GridLayout);
  },
};
export default commonComponent;