# SkillTree (Tech Arsenal)

**SkillTree** 是一个受 RPG 游戏启发的个人技能管理系统。它不再是一个简单的待办清单，而是一个可视化的“技能树”或“军火库”，帮助你梳理自己的技术栈，并在面对新项目时快速组合出最优解。

> "做什么东西的时候，能用到什么。"

## 核心概念

- **Skill Pool (技能池)**: 你的待点亮技能或新发现的工具。就像 RPG 里的未分配点数或新获得的战利品。
- **Skill Zones (技能领域)**: 已经点亮并分类的技能栈。
    - **WEB**: 前端、后端、全栈技术。
    - **AI**: 模型、自动化工作流、生成式 AI 工具。
    - **VIDEO**: 剪辑、特效、流媒体技术。
    - **3D**: 建模、渲染、游戏引擎。
    - **DESIGN**: UI/UX、平面设计工具。
    - **TOOLS**: 生产力工具、CLI、Docker 等。
- **Drag & Drop**: 像整理背包一样，通过拖拽轻松管理你的技能组合。

## 技术栈

- **前端框架**: React 19 + Vite 7
- **UI 设计**: Tailwind CSS (Glassmorphism 风格)
- **数据存储**: Supabase (PostgreSQL + Realtime)
- **交互**: React DnD (拖拽支持)

## 快速开始

1.  **安装依赖**:
    ```bash
    npm install
    ```

2.  **配置环境变量**:
    创建 `.env` 文件并填入你的 Supabase 凭据 (参考 `SUPABASE_SETUP.md`)。

3.  **运行**:
    ```bash
    npm run dev
    ```

## 愿景

打造一个属于开发者的“全知法典” (The Codex)，记录从入门到精通的每一个脚印。