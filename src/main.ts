import { createApp } from 'vue'
import './style.css'
import CommonComponent from './components/index';
import App from './App.vue';
import router from './router';

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript"; //引入语言
hljs.registerLanguage("javascript", javascript);
import hljsVuePlugin from "@highlightjs/vue-plugin";
// import "highlight.js/styles/stackoverflow-dark.css";
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/lib/common";

// import VConsole from 'vconsole';
// let vconsole = new VConsole();

const app = createApp(App);
app.use(router);
app.use(CommonComponent);
app.use(hljsVuePlugin);
// app.use(vconsole);
app.mount('#app');
