<script setup>
  import { onMounted } from "vue";

  const props = defineProps({
    id: { type: String, required: true },
  });

  function dialogClickOutsideHandler(e) {
    if (e.target.tagName !== "DIALOG") return;

    const rect = e.target.getBoundingClientRect();

    const clickedInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (clickedInDialog === false) closeDialog();
  }

  async function closeDialog() {
    const dialog = document.getElementById(props.id);
    dialog.classList.add("hide");

    await new Promise(resolve => {
      dialog.addEventListener("webkitAnimationEnd", resolve);
    });

    dialog.classList.remove("hide");
    dialog.close();
  }

  onMounted(() => {
    const dialog = document.getElementById(props.id);
    dialog.addEventListener("click", dialogClickOutsideHandler);
  });
</script>
<template>
  <dialog :id="id">
    <slot></slot>
  </dialog>
</template>

<style lang="scss" scoped></style>
