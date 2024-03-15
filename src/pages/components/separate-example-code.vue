<script setup lang="ts" name="separateExample">
import apiCaution from "./api-caution.vue";
import versionIteration from "./version-iteration.vue";
import someTips from "./some-tips.vue";
import {
  singleModeCodeNetwork,
  singleModeCodeMixed
} from "../constant";
</script>

<template>
  <div class="separate-example-code-container">
    <!-- 版本号 -->
    <h1>webgl-transition documentation(V1.3.1)</h1>

    <!-- Api和注意事项 -->
    <h3>Api</h3>

    <div class="code-container">
      <api-caution></api-caution>
    </div>

    <br />
    <br />

    <!-- 版本迭代 -->
    <h3>Version iteration</h3>
    <div class="code-container">
      <version-iteration></version-iteration>
    </div>
    <br />
    <br />

    <!-- 注意事项 -->
    <h3>Some tips</h3>
    <div class="code-container">
      <some-tips></some-tips>
    </div>
    <br />
    <br />

    <!-- 单个模式 -->
    <h3>Create a single transition animation</h3>

    <i>Ⅰ. All pictures from the Internet </i>
    <a href="https://github.com/jouvychen/webgl-transition-test/blob/demo/src/pages/components/batches-example.vue" target="_brank">online code(demo branch)</a>
    <div class="code-container">
      <highlightjs
        class="highlight"
        language="js"
        :code="singleModeCodeNetwork"
      />
    </div>

    <i>Ⅱ. Mixed mode, with both local and network images</i>
    <a href="https://github.com/jouvychen/webgl-transition-test/blob/demo/src/pages/components/separate-example.vue" target="_brank">online code(demo branch)</a>
    <div class="code-container">
      <highlightjs
        class="highlight"
        language="js"
        :code="singleModeCodeMixed"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.separate-example-code-container {
  color: #888;
  padding: 24px 0;
  max-width: 1200px;

  h1 {
    color: #2d2d2d;
  }

  .code-container {
    padding: 0 24px;
  }

  .long-text {
    padding: 0 24px;
    text-indent: 2em;
    text-align: left !important;
    display: block;
  }
}
</style>