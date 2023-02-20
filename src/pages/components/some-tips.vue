<script setup lang="ts" name="someTips">
</script>

<template>
  <div class="some-tips">
    <p>
      Ⅰ.Since continuous animation requires higher GPU overhead and consumes
      more resources as the size of the canvas increases, please call the
      dispose method to free the memory when you no longer need the instance<b
        title="webglTransitions is the WebglTransitions's instance"
        >(demo: webglTransitions.dispose())</b
      >. If you don't need it for a while, you can call stop first and then
      restart the animation when you need it again<b
        title="webglTransitions is the WebglTransitions's instance"
        >(demo: webglTransitions.stop();webglTransitions.restart())</b
      >.
    </p>
    <p>
      Ⅱ.About <b>diushijianting</b>, since webgl will lose its context when the
      system or web page sleeps, define this parameter to control the number of
      times Webgl-transitions should be re-instantiated.
    </p>
  </div>
</template>

<style scoped lang="less">
.some-tips {
  color: #444444;
  text-align: left;
  max-width: 1200px;

  p {
    text-align: left;
  }

  // .h2 {
  //   font-size: 28px;
  //   line-height: 36px;
  //   font-weight: normal;
  //   margin-left: -1px;
  //   margin-top: 28px;
  //   margin-bottom: -8px;
  // }

  // .h3 {
  //   font-size: 20px;
  //   line-height: 28px;
  //   font-weight: normal;
  //   margin-top: 24px;
  //   margin-bottom: -8px;
  // }

  // .links {
  //   color: #049ef4;
  // }

  // .param {
  //   color: #999;
  // }
}
</style>
