<template>
  <div class="webgl-transition-demo--container ptb24">
    <mixed-example></mixed-example>

    <separate-example></separate-example>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import separateExample from "./components/separate-example.vue";
import mixedExample from "./components/mixed-example.vue";
</script>
<style scoped lang="less">
.webgl-transition-demo--container {
  height: 100%;
  margin: 0 auto;
}
</style>
