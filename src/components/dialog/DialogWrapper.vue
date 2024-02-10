<script setup>
  import { onMounted } from "vue";

  const props = defineProps({
    id: { type: String, required: true },
  });

  function dialogClickHandler(e) {
    if (e.target.tagName !== "DIALOG") return;

    const rect = e.target.getBoundingClientRect();

    const clickedInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (clickedInDialog === false) e.target.close();
  }

  onMounted(() => {
    document
      .getElementById(props.id)
      .addEventListener("click", dialogClickHandler);
  });
</script>
<template>
  <dialog :id="id">
    <slot></slot>
  </dialog>
</template>

<style lang="scss" scoped></style>
