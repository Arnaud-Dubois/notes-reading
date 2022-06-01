<template>
  <li class="instrument-item">
    <a class="instrument-item-link" :href="src" target="_blank">
      <span><InstrumentPlaceholder fill="grey" /></span>
      <span>{{ name }}</span>
      <span class="external-link"><ExternalLink fill="grey" /></span>
    </a>
  </li>
</template>

<script>
import InstrumentPlaceholder from "@/components/icons/InstrumentPlaceholder.vue";
import ExternalLink from "@/components/icons/ExternalLink.vue";

export default {
  name: "InstrumentItem",
  components: {
    InstrumentPlaceholder,
    ExternalLink,
  },
  props: {
    name: {
      type: String,
    },
    src: {
      type: String,
    },
  },
};
</script>

<style>
.instrument-item {
  display: flex;
  border-bottom: 1px solid lightgrey;
  /* border-bottom: 1px solid var(--primary-light-color); */
}

.instrument-item-link {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  text-decoration: none;
  line-height: initial;
  transition: background-color 0.1s ease;
  color: var(--primary-color);
}

.instrument-item-link:hover {
  background-color: #ebfffc;
}

.external-link {
  opacity: 0;
  transition: opacity 0.1s ease;
}

.instrument-item-link:hover .external-link {
  opacity: 1;
}
</style>