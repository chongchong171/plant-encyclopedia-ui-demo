# 花草百科全书 - UI Demo

这是花草百科全书的 UI 设计演示项目，可以在微信开发者工具中直接运行预览。

## 快速开始

1. 克隆仓库：
   ```bash
   git clone https://github.com/chongchong171/plant-encyclopedia-ui-demo.git
   ```

2. 用微信开发者工具打开项目目录

3. 点击「编译」即可预览

## 页面说明

| 页面 | 说明 | 风格 |
|------|------|------|
| `pages/home` | 首页 | 墨绿引导页风格，大植物视觉 |
| `pages/main` | 功能页 | 淡白背景，深白模块区分 |

## 设计风格

- 墨绿主色：`#1a3a2f`
- 点缀绿：`#27ae60`
- 白背景：`#ffffff`
- 深白模块：`#f5f5f5`

## 交互说明

- 首页左滑 → 进入功能页
- 点击按钮 → 显示 Toast 提示（Demo 无实际功能）

## 文件结构

```
plant-encyclopedia-ui-demo/
├── app.js
├── app.json
├── app.wxss
├── project.config.json
├── pages/
│   ├── home/           # 首页
│   │   ├── home.js
│   │   ├── home.json
│   │   ├── home.wxml
│   │   └── home.wxss
│   └── main/           # 功能页
│       ├── main.js
│       ├── main.json
│       ├── main.wxml
│       └── main.wxss
└── images/             # 设计图片资源
```
