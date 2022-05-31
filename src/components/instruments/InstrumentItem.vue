<template>
  <li class="instrument-item">
    <a :href="src" target="_blank">{{ name }}</a>
  </li>
</template>

<script>
export default {
  name: "InstrumentItem",
  props: {
    name: {
        type: String,
    },
    src: {
        type: String,
    }
  }
};
</script>

<style>
.instrument-item {
    display: flex;
    border-bottom: 1px solid lightgrey;
    padding: .5rem;
}
</style>