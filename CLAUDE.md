# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Chinese-language (zh-CN) VitePress documentation site: "AI + 运营学习手册" (AI + Operations Learning Handbook). Content covers content creation/operations learning in four phases, plus an AI tools intro section.

## Commands

```bash
npm run docs:dev       # Start local dev server
npm run docs:build     # Build for production (output: docs/.vitepress/dist)
npm run docs:preview   # Preview production build locally
```

No test or lint commands are configured.

## Deployment

- **GitHub Pages**: Auto-deploys on push to `master` via `.github/workflows/deploy.yml` (Node 20)
- **Vercel**: Auto-deploys via `vercel.json`
- Base path is `/agent-learning/` (set in `docs/.vitepress/config.ts`)

## Architecture

```
docs/
├── .vitepress/
│   ├── config.ts          # Site config: nav, sidebar, theme, base path
│   ├── theme/
│   │   ├── index.ts       # Extends default VitePress theme
│   │   ├── custom.css     # Brand colors (warm rose-brown #C4856A), fonts (Noto Sans SC)
│   │   └── components/    # Custom Vue components (e.g., ClawdCrab.vue)
│   └── dist/              # Build output (gitignored)
├── public/                # Static assets (served at site root)
├── index.md               # Homepage (uses VitePress `home` layout with Vue script for video hero)
├── overview.md            # Learning overview
├── phase1-4/              # Four learning phases, each with index.md + topic pages
└── ai-world/              # AI tools intro section
```

## Key Conventions

- **All content is in Chinese**. Write documentation, UI text, and commit messages in Chinese when modifying user-facing content.
- **Adding a new page**: Create `.md` file in the appropriate `docs/` subdirectory, then add the sidebar entry in `docs/.vitepress/config.ts` under the correct section.
- The homepage `docs/index.md` contains a Vue `<script setup>` block that replaces the hero image element with a `<video>` tag for `.webm` files.
