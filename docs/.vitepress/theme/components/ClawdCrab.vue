<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <div class="clawd-container">
    <video
      :src="withBase('/clawd-laptop.webm')"
      autoplay
      loop
      muted
      playsinline
      class="clawd-video"
    ></video>
  </div>
</template>

<style scoped>
.clawd-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.clawd-video {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;
}

/* 适配不同屏幕大小 */
@media (min-width: 640px) {
  .clawd-video {
    max-width: 600px;
  }
}
</style>
