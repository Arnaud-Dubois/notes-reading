<template>
  <div class="quick-link">
    <a :target="target" :href="src">{{ name }}</a>
  </div>
</template>

<script>
export default {
  name: "QuickLink",
  props: {
    name: {
      type: String,
    },
    src: {
      type: String,
    },
    target: {
        type: String,
        default: "_blank"
    }
  },
};
</script>

<style>
.quick-link {
  font-size: 0.8rem;
  text-align: right;
  margin: 1rem 0;
}


.quick-link a {
  padding: .5rem 1rem;
  color: var(--primary-color);
  background-color: #ebfffc;
  border-radius: 60px;
  text-decoration: none;
  font-weight: normal;
  transition: background-color .2s ease ;
}

.quick-link a:hover {
  background-color: #a0ebdf;
}
</style>