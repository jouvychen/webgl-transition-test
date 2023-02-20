<script setup lang="ts" name="apiCaution">
import { animationsNameList } from "../constant";

</script>

<template>
  <div class="api-caution">
    <h2 class="h2">Constructor</h2>

    <h3 class="h3">
      WebglTransitions( parent:<a class="param links">ParentDom</a>,
      transitionList:<a class="param links">Transition[]</a>, playPicList:<a
        class="param links"
        >string[] | HTMLImageElement[]</a
      >, carouselTime?:<a class="param links">number</a>)
    </h3>
    <p>
      <a class="links">parent</a>
      -- parent node informations, expect to pass a HTMLDIVElement which
      inincludes id, width(Optional), height(Optional).<br />
      <a class="links">transitionList</a>
      -- a collection of animation names. Built-in animation types:<br />
      <a v-for="(item, index) in animationsNameList" :key="index">
        {{ item }}
        <span v-if="index != animationsNameList.length - 1">、</span> </a
      ><br />

      <a class="links">playPicList</a>
      -- allow online images array or HTMLImageElements array<br />

      <a class="links">carouselTime</a>
      -- time between two animations. Unit:ms. Default: 3000.<br /><br />

      Create a new WebglTransition instance.
    </p>

    <h2 class="h2">Properties</h2>
    <p>
      See all properties in webgl-transition
      <a
        class="links"
        href="https://github.com/jouvychen/webgl-transition/blob/master/lib/index.ts"
        target="_blank"
        >index.ts</a
      >
    </p>

    <div><a class="links">.canvas</a>: HTMLCanvasElement.</div>
    <div><a class="links">.vsSource</a>: vertex shader source.</div>
    <div><a class="links">.fsSource</a>: fragment shader source.</div>
    <div><a class="links">.vertexShader</a>: vertex Shader, a WebGLShader.</div>
    <div>
      <a class="links">.fragmentShader</a>: fragment Shader, a WebGLShader.
    </div>
    <div><a class="links">.shaderProgram</a>: WebGLProgram;</div>
    <div><a class="links">.vertexBuffer</a>: WebGLBuffer;</div>
    <div><a class="links">.gl</a>: WebGLRenderingContext;</div>
    <div><a class="links">.playPicPreloadList</a>: store preloaded images.</div>
    <div>
      <a class="links">.textures</a>: take out 2 images from playPicPreloadList
      to create textures every times.
    </div>
    <div>
      <a class="links">.stopPlaying</a>: indicates whether the current state is
      stopped.
    </div>
    <div><a class="links">.assignmentList</a>: set uniform parameters.</div>

    <h2 class="h2">Methods</h2>
    <p>
      See all methods in webgl-transition
      <a
        class="links"
        href="https://github.com/jouvychen/webgl-transition/blob/master/lib/index.ts"
        target="_blank"
        >index.ts</a
      >
    </p>

    <h3 class="h3">
      .<a class="links">main</a>
      ( ) :
      <span class="param">undefined</span>
    </h3>
    <p>Create webgl content and start the animation.</p>

    <h3 class="h3">
      .<a class="links">simulatedLostContext</a> () :
      <span class="param">undefined</span>
    </h3>
    <p>
      Simulate lost webgl context, canvas will catch the webglcontextlost event
      and restarts main method in few seconds.
    </p>

    <!-- stop -->
    <h3 class="h3">
      .<a class="links">stop</a> () : <span class="param">undefined</span>
    </h3>
    <p>Call clearInterval method but no dispose webgl content.</p>

    <!-- restart -->
    <h3 class="h3">
      .<a class="links">restart</a> () : <span class="param">undefined</span>
    </h3>
    <p>
      Dispose webgl content and recreate a new animation, you can call this
      method after stop.
    </p>

    <h2 class="h2">Source</h2>

    <p>
      <a
        href="https://github.com/jouvychen/webgl-transition/blob/master/lib/index.ts"
        target="_blank"
        >webgl-transition/lib/index.ts</a
      >
    </p>
    
  </div>
</template>

<style scoped lang="less">
.api-caution {
  color: #444444;
  text-align: left;
  max-width: 1200px;

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
  }
}
</style>
