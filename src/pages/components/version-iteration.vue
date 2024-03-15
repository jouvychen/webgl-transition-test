<script setup lang="ts" name="versionIteration">
import { v114AnimationImport } from "../codeText";
const show1141 = ref(false); // version1.2.0's fisrt code show/not show
</script>

<template>
  <div class="version-iteration">
    <b>1.3.1</b>
    <br />
    <p>
      <i>Ⅰ.</i>
      In this version, the initialization parameter is passed in as an object.
      <a @click="show1141 = !show1141" class="cursor">{{
        show1141 ? "put away" : "show more"
      }}</a>
    </p>

    <highlightjs
      v-show="show1141"
      class="highlight"
      language="js"
      :code="v114AnimationImport"
    />
  </div>
</template>

<style scoped lang="less">
.version-iteration {
  color: #444444;
  text-align: left;
  max-width: 1200px;

  p {
    text-align: left;
  }
}

.box {
  max-height: 600px;
  transition: max-height 0.3s;
}
</style>
