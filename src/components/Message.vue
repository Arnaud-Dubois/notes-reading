<template>
  <div class="message">
    <h4 class="titl">{{ title }}</h4>
    <div class="content w-54ch">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    title: String,
  },
};
</script>

<style>
.message {
  padding: 1rem;
  margin: 1rem 0;
  background: #ebfffc;
  color: var(--primary-color);
  border: 1px solid #a0ebdf;
  border-radius: 0.25rem;
}
.message .title {
  background-color: #00d1b2;
}
.message .content {
  text-align: left;
  margin: 0 auto;
}
.w-54ch {
  max-width: 54ch;
}
</style>