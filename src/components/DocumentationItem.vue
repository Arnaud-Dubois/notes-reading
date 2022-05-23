<template>
  <li class="documentation-item" @click="isOpen = !isOpen">
    <div class="documentation-item-title">
      <div v-if="img">
        <img :src="img.src" :alt="img.alt" />
      </div>
      <div v-else class="music-placeholder-container">
        <MusicPlaceholder />
      </div>
      <h4>{{ title }}</h4>
    </div>

    <div v-if="isOpen" class="documentation-item-content">
      {{ content }}
      <slot></slot>
    </div>
  </li>
</template>

<script>
import MusicPlaceholder from "./icons/MusicPlaceholder.vue";
export default {
  name: "DocumentationItem",
  components: {
    MusicPlaceholder,
  },
  props: {
    img: Object,
    title: String,
    content: String,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>

.documentation-item {
  list-style-type: none;
  transition: background-color .2s ease-in-out;
  padding: 0 .25rem;
  border-radius: 3px;
  border-bottom: 1px solid lightgrey;
}

.documentation-item:hover {
  background-color: var(--hover-color);
}

.documentation-item-title {
  display: flex;
  gap: 1rem;
  /* border-bottom: 1px solid rgb(199, 199, 199); */
  align-items: center;
  padding: 0.5rem 0;
  cursor: pointer;
}


.documentation-item-content {
  text-align: left;
  padding: 1rem;
}
.music-placeholder-container {
  border: 2px solid black;
  border-radius: 3px;
  padding: 0.25rem;
}
</style>