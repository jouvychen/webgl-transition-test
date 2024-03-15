<script setup lang="ts" name="apiCaution">
import { animationsNameList } from "../constant";
</script>

<template>
  <div class="api-caution">
    <h2 class="h2">Constructor</h2>

    <h3 class="h3">
      WebglTransitions( config: <a class="param links">Config</a>)
    </h3>
    <p>
      Config interface:
      <br />
      <a class="links">parentId</a>
      -- parent node informations, expect to pass a HTMLDIVElement's id.<br />
      <a class="links">transitionList</a>
      -- a collection of animation modules. Import the corresponding animation
      module to transitionList. The supported types are:<br />
      <a v-for="(item, index) in animationsNameList" :key="index">
        {{ item }}
        <span v-if="index != animationsNameList.length - 1">、</span> </a
      ><br />

      <a class="links">playPicUrlList</a>
      -- online images src array.<br />

      <a class="links">playPicList</a>
      -- HTMLImageElements array. For example, <a class="param links">new Image()</a>;<br />

      <a class="links">carouselTime</a>
      -- time between two animations. <b>Unit</b>:<a>ms</a>. <b>Default</b>:
      <a>3000</a>.<br />
      
      <a class="links">watchResize</a>
      -- listens for parent container size changes and redraws. <b>Default</b>:
      <a>false</a>.<br />

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

    <div><a class="links">.version</a>: 1.3.1</div>
    <div><a class="links">.parentDom</a>: HTMLDivElement.</div>
    <div><a class="links">.canvasId</a>: string.</div>
    <div><a class="links">.canvas</a>: HTMLCanvasElement.</div>
    <div><a class="links">.vsSource</a>: vertex shader source.</div>
    <div><a class="links">.fsSource</a>: fragment shader source.</div>
    <div><a class="links">.vertexShader</a>: vertex Shader, a WebGLShader.</div>
    <div>
      <a class="links">.fragmentShader</a>: fragment Shader, a WebGLShader.
    </div>
    <div><a class="links">.shaderProgram</a>: WebGLProgram.</div>
    <div><a class="links">.vertexBuffer</a>: WebGLBuffer.</div>
    <div><a class="links">.timer</a>: Transition gap timer. Type: NodeJS.Timeout | undefined | null</div>
    <div><a class="links">.playIndex</a>: The number of rotations of the transitions.</div>
    <div><a class="links">.playPicIndex</a>: The number of rotations of the pictures.</div>
    <div><a class="links">.gl</a>: WebGLRenderingContext.</div>
    <div><a class="links">.playPicPreloadList</a>: store preloaded images.</div>
    <div>
      <a class="links">.textures</a>: concat playPicUrlList and playPicList, take out 2 images from playPicPreloadList
      to create textures every times.
    </div>
    
    <div>
      <a class="links">.playStatus</a>: include playing, pause and stop.
    </div>
    <div>
      <a class="links">.animationId</a>: record the id of the requestAnimationFrame.
    </div>
    <div><a class="links">.assignmentList</a>: set uniform parameters.</div>
    <div><a class="links">.resizeObserver</a>: If you set watchResize to true in config, webgl-transition will create an internal listener for you to listen for changes in the size of the parent container and call the onResize method.</div>
    <div><a class="links">onResizeCallback</a>: resize callback.</div>
    
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

    <!-- pause -->
    <h3 class="h3">
      .<a class="links">pause</a> () : <span class="param">undefined</span>
    </h3>
    <p>Set playStatus to pause and call cancelAnimation to cancel this animation and clearNextAnimation to cancel the timer for the next animation.</p>

    <!-- continue -->
    <h3 class="h3">
      .<a class="links">continue</a> () : <span class="param">undefined</span>
    </h3>
    <p>Continue play the animation, call this after use pause function. </p>
    
    <!-- dispose -->
    <h3 class="h3">
      .<a class="links">dispose</a> () : <span class="param">undefined</span>
    </h3>
    <p>Release webgl resources.</p>

    <!-- restart -->
    <h3 class="h3">
      .<a class="links">restart</a> () : <span class="param">undefined</span>
    </h3>
    <p>
      Dispose webgl content and recreate a new animation, it will be called
      automatically when the system sleeps(at most twice).
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
