<template>
  <div class="webgl-transition-demo--container ptb24">
    <batches-example></batches-example>

    <separate-example></separate-example>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import separateExample from "./components/separate-example.vue";
import batchesExample from "./components/batches-example.vue";
</script>
<style scoped lang="less">
.webgl-transition-demo--container {
  height: 100%;
  margin: 0 auto;
}
</style>
