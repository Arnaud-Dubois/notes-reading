<template>
  <div class="musical-staff">
    <div :key="line" v-for="line in 4" class="musical-staff-line"></div>
    <BarLine />
    <BarLine v-if="hasBarLines" :position="'25%'" />
    <BarLine v-if="hasBarLines" :position="'50%'" />
    <BarLine v-if="hasBarLines" :position="'75%'" />
    <slot></slot>
  </div>
</template>

<script>
import BarLine from "@/components/icons/BarLine.vue";
export default {
  name: "MusicStaff",
  components: {
    BarLine
  },
  props: {
    hasBarLines: {
      type: Boolean,
      default: true,
    }
  }
};
</script>

<style>
.musical-staff {
  width: 100%;
  position: relative;
}

.musical-staff-line:first-of-type {
  border-top: var(--line);
}

.musical-staff-line {
  border-bottom: var(--line);
  width: 100%;
  height: 12px;
}
</style>