<script setup lang="ts" name="separateExample">
import apiCaution from './api-caution.vue';
import { singleModeCodeNetwork, singleModeCodeMixed } from "../constant";
</script>

<template>
  <div class="separate-example-code-container">
    <h3>Create a single transition animation code</h3>
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
    <i>Ⅲ. Api and other points of caution</i>
    <div class="code-container">
      <api-caution></api-caution>
    </div>
  </div>
</template>

<style scoped lang="less">
.separate-example-code-container {
  color: #888;

  .code-container {
    padding: 0 24px;
  }
}
</style>