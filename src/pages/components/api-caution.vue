<script setup lang="ts" name="apiCaution">

import { animationsNameList } from '../constant'

</script>

<template>
  <div class="api-caution">
    <h2 class="h2">Constructor</h2>

    <h3 class="h3">
      WebglTransitions( parent:<a class="param links">ParentDom</a>, transitionList:<a class="param links">any[]</a>, playPicList:<a class="param links">string[] | HTMLImageElement[]</a>, carouselTime?:<a class="param links">number</a>)
    </h3>
    <p>
      <a
        class="links"
        data-fragment="Box3"
        title="Box3"
        href="./index.html#api/en/math/Box3"
        >parent</a
      >
      -- parent node informations, expect to pass a HTMLDIVElement which inincludes id, width(Optional), height(Optional).<br />
      <a
        class="links"
        data-fragment="Color"
        title="Color"
        href="./index.html#api/en/math/Color"
        >transitionList</a
      >
      -- a collection of animation names. Built-in animation types:<br /><br />
      <a v-for="(item, index) in animationsNameList" :key="index">
        {{item}}
        <span v-if="index != animationsNameList.length - 1">、</span>
      </a>

      Creates a new wireframe box that represents the passed Box3.
    </p>

    <h2 class="h2">Properties</h2>
    <p>
      See the base
      <a
        class="links"
        data-fragment="LineSegments"
        title="LineSegments"
        href="./index.html#api/en/objects/LineSegments"
        >LineSegments</a
      >
      class for common properties.
    </p>

    <h3 class="h3">
      .<a
        class="links"
        data-fragment="Box3Helper.box"
        id="box"
        href="./index.html#api/en/helpers/Box3Helper.box"
        >box</a
      >
      :
      <a
        class="param links"
        data-fragment="Box3"
        href="./index.html#api/en/math/Box3"
        >Box3</a
      >
    </h3>
    <p>The Box3 being visualized.</p>

    <h2 class="h2">Methods</h2>
    <p>
      See the base
      <a
        class="links"
        data-fragment="LineSegments"
        title="LineSegments"
        href="./index.html#api/en/objects/LineSegments"
        >LineSegments</a
      >
      class for common methods.
    </p>

    <h3 class="h3">
      .<a
        class="links"
        data-fragment="Box3Helper.updateMatrixWorld"
        id="updateMatrixWorld"
        href="./index.html#api/en/helpers/Box3Helper.updateMatrixWorld"
        >updateMatrixWorld</a
      >
      ( force : <span class="param">Boolean</span> ) :
      <span class="param">undefined</span>
    </h3>
    <p>
      This overrides the method in the base
      <a
        class="links"
        data-fragment="Object3D"
        title="Object3D"
        href="./index.html#api/en/core/Object3D"
        >Object3D</a
      >
      class so that it also updates the wireframe box to the extent of the
      <a
        class="links"
        data-fragment="Box3Helper.box"
        title="Box3Helper.box"
        href="./index.html#api/en/helpers/Box3Helper.box"
        >.box</a
      >
      property.
    </p>

    <h3 class="h3">
      .<a
        class="links"
        data-fragment="Box3Helper.dispose"
        id="dispose"
        href="./index.html#api/en/helpers/Box3Helper.dispose"
        >dispose</a
      >
      () : <span class="param">undefined</span>
    </h3>
    <p>
      Frees the GPU-related resources allocated by this instance. Call this
      method whenever this instance is no longer used in your app.
    </p>

    <h2 class="h2">Source</h2>

    <p>
      <a
        href="https://github.com/mrdoob/three.js/blob/master/src/helpers/Box3Helper.js"
        target="_blank"
        >src/helpers/Box3Helper.js</a
      >
    </p>
  </div>
</template>

<style scoped lang="less">
.api-caution {
  color: #444444;
  text-align: left;

  .h2 {
    font-size: 28px;
    line-height: 36px;
    font-weight: normal;
    margin-left: -1px;
    margin-top: 28px;
    margin-bottom: -8px;
  }

  .h3 {
    font-size: 20px;
    line-height: 28px;
    font-weight: normal;
    margin-top: 24px;
    margin-bottom: -8px;
  }

  .links {
    color: #049ef4;
  }

  .param {
    color: #999;
    &:hover {
      color: #444;
    }
  }
}
</style>
