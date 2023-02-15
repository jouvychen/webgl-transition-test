<script setup lang="ts">
function bubleSort(arr: any) {
  var len = arr.length;
  for (let outer = len; outer >= 2; outer--) {
    for (let inner = 0; inner <= outer - 1; inner++) {
      // debugger;
      console.log("arr[inner + 1]", arr[30]);
      if (arr[inner] > arr[inner + 1]) {
        let temp = arr[inner];
        arr[inner] = arr[inner + 1];
        arr[inner + 1] = temp;
      }
    }
  }
  return arr;
}
// const aaa = [3, 7, 4, 2, 1, 9];
// bubleSort(aaa);
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
