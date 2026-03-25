import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/agent-learning/',
  title: 'AI + 运营学习手册',
  description: '生活 · 摄影 · 内容创作学习记录',
  lang: 'zh-CN',

  themeConfig: {
    logo: '✦',
    siteTitle: 'AI + 运营',

    nav: [
      { text: '首页', link: '/' },
      { text: '学习总览', link: '/overview' },
      { text: 'AI 世界入门', link: '/ai-world/' },
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '学习总览', link: '/overview' },
        ]
      },
      {
        text: '第一阶段 · 建立感觉',
        collapsed: false,
        items: [
          { text: '阶段概述', link: '/phase1/' },
          { text: '每日任务清单', link: '/phase1/tasks' },
          { text: 'Claude 提示词模板', link: '/phase1/prompts' },
        ]
      },
      {
        text: '第二阶段 · 建立工作流',
        collapsed: false,
        items: [
          { text: '阶段概述', link: '/phase2/' },
          { text: '工具使用指南', link: '/phase2/tools' },
          { text: '标题逻辑拆解', link: '/phase2/title-logic' },
        ]
      },
      {
        text: '第三阶段 · 数据意识',
        collapsed: false,
        items: [
          { text: '阶段概述', link: '/phase3/' },
          { text: '数据记录表', link: '/phase3/data-template' },
          { text: '每周复盘清单', link: '/phase3/weekly-review' },
        ]
      },
      {
        text: '第四阶段 · 实习冲刺',
        collapsed: false,
        items: [
          { text: '阶段概述', link: '/phase4/' },
          { text: '简历模板', link: '/phase4/resume' },
          { text: '面试准备', link: '/phase4/interview' },
        ]
      },
      {
        text: 'AI 世界入门',
        collapsed: false,
        items: [
          { text: '三个核心认知', link: '/ai-world/' },
          { text: '基础概念', link: '/ai-world/concepts' },
          { text: '工具全景', link: '/ai-world/tools' },
          { text: '提示词进阶', link: '/ai-world/prompts-advanced' },
        ]
      },
    ],

    socialLinks: [],

    footer: {
      message: '用 AI 工具创造更好的内容',
    },

    search: {
      provider: 'local'
    },

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    darkModeSwitchLabel: '主题',

    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    lastUpdatedText: '最后更新',
  },

  markdown: {
    lineNumbers: false,
  },
})
