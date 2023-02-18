<script setup lang="ts" name="separateExample">
import apiCaution from "./api-caution.vue";
import {
  singleModeCodeNetwork,
  singleModeCodeMixed,
  batchesModeCode,
} from "../constant";
</script>

<template>
  <div class="separate-example-code-container">
    <!-- Api和注意事项 -->
    <h3>Api and some tips</h3>

    <div class="code-container">
      <api-caution></api-caution>
    </div>

    <br />
    <br />

    <!-- 单个模式 -->
    <h3>Create a single transition animation</h3>

    <i>Ⅰ. All pictures from the Internet</i>
    <div class="code-container">
      <highlightjs
        class="highlight"
        language="js"
        :code="singleModeCodeNetwork"
      />
    </div>

    <i>Ⅱ. Mixed mode, with both local and network images</i>
    <div class="code-container">
      <highlightjs
        class="highlight"
        language="js"
        :code="singleModeCodeMixed"
      />
    </div>

    <br />
    <br />

    <!-- 批量模式 -->
    <h3>Create transition animations in batches</h3>

    <p class="long-text">
      Regarding the image type, it is the same with the requirement to create a
      single transition animation. Just fill some animation's name to the
      transitionList, then you'll get multiple types of transition animations.
    </p>
    <div class="code-container">
      <highlightjs class="highlight" language="js" :code="batchesModeCode" />
    </div>
  </div>
</template>

<style scoped lang="less">
.separate-example-code-container {
  color: #888;

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