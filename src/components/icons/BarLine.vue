<template>
  <div :style="{ right: position }" class="bar-line"></div>
</template>

<script>
export default {
  name: "BarLine",
  props: {
    position: {
        type: [Number,String],
        default: 0
    }
  },
};
</script>

<style>
.bar-line {
  background: black;
  width: 4px;
  height: 100%;
  position: absolute;
  top: 0;
}
</style>