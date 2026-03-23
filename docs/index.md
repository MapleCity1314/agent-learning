---
layout: home

hero:
  name: "AI + 运营"
  text: "学习成长手册"
  tagline: 用 AI 工具，创作有温度的内容
  image:
    src: /clawd-laptop.webm
    alt: Claude Crab
  actions:
    - theme: brand
      text: 开始学习 →
      link: /overview
    - theme: alt
      text: AI 世界入门
      link: /ai-world/

features:
  - icon: 🌱
    title: 第一阶段 · 建立感觉
    details: 2 周内发出前 5 条内容，建立发布习惯，感受什么是有共鸣的内容。
    link: /phase1/
  - icon: 📚
    title: 第二阶段 · 建立工作流
    details: 学会独立完成选题→拍摄→修图→文案→发布的完整链路。
    link: /phase2/
  - icon: 📊
    title: 第三阶段 · 数据意识
    details: 用数据判断内容好坏，开始基于反馈迭代方向。
    link: /phase3/
  - icon: 🚀
    title: 第四阶段 · 实习冲刺
    details: 把积累转化成简历语言，投递小红书/品牌方运营实习。
    link: /phase4/
---

<script setup>
import { onMounted } from 'vue'

// 强制修正 Hero 区域的图片为视频
onMounted(() => {
  const heroImage = document.querySelector('.VPHero .image-src')
  if (heroImage && heroImage.src.endsWith('.webm')) {
    const video = document.createElement('video')
    video.src = heroImage.src
    video.autoplay = true
    video.loop = true
    video.muted = true
    video.playsInline = true
    video.style.width = '100%'
    video.style.maxWidth = '600px'
    video.className = 'image-src' // 保持原有样式
    heroImage.parentNode.replaceChild(video, heroImage)
  }
})
</script>
