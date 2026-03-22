# AI + 运营学习手册

生活/摄影方向内容运营学习笔记，基于 VitePress 构建。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 部署

Push 到 GitHub 后，Vercel 自动部署。

## 新增笔记

1. 在 `docs/` 对应目录下新建 `.md` 文件
2. 在 `docs/.vitepress/config.ts` 的 `sidebar` 中添加对应条目
3. Push，完成
