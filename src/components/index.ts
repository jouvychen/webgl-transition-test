import GridLayout from './grid-layout.vue'; // 卡片布局
import CssPlayPauseButton from './css-play-pause-button.vue'; // css播放暂停按钮

const commonComponent = {
  install(Vue: any) {
    Vue.component('GridLayout', GridLayout);
    Vue.component('CssPlayPauseButton', CssPlayPauseButton);
  },
};
export default commonComponent;