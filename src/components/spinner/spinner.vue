<script setup>
  const props = defineProps({
    color: {
      type: String,
      default: "#ffffff",
    },
  });
</script>
<template>
  <div class="">
    <span class="loader block"></span>
  </div>
</template>

<style lang="scss" scoped>
  .loader {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: relative;
    animation: rotate 0.2s linear infinite;
  }
  .loader::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 3px solid v-bind(color);

    animation: prixClipFix 2s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
</style>
