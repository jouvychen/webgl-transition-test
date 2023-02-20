<script setup lang="ts" name="versionIteration">
import { v114AnimationImport } from "../codeText";
const show1141 = ref(false); // version1.2.0's fisrt code show/not show
</script>

<template>
  <div class="version-iteration">
    <b>1.2.0</b>
    <br />
    <p>
      <i>Ⅰ.</i>
      Considering the size of the packaged products, in version 1.2.0+,
      transitionList parameter in the constructor has been changed from any[] to
      Transition[], animations' names will no longer accepted by the
      transitionList.
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
