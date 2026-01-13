# SkillTree (原 Todolist)

## 项目概览

这是一个使用 React 19、Vite 7 和 Tailwind CSS 构建的**个人技能管理系统**，名为 **SkillTree**。它受 RPG 游戏启发，旨在帮助用户像管理游戏技能树一样管理自己的技术栈。用户可以将技能（Todo 项）在不同的领域（Zone）之间拖拽，组合出应对不同项目的“技术军火库”。

**当前状态：** 功能性原型，正在进行 UI/UX 优化。

## 技术栈

- **前端：** React 19, Vite 7
- **样式：** Tailwind CSS, PostCSS (Glassmorphism 风格)
- **后端：** Supabase (PostgreSQL 数据库, 实时订阅)
- **拖拽功能：** `react-dnd`, `react-dnd-html5-backend`
- **代码规范：** ESLint

## 架构与核心功能

- **核心概念：**
    - **Skill Pool (技能池):** 相当于 Inbox，存放新获取或未分类的技能/工具。
    - **Skill Zones (技能领域):** 如 WEB, AI, VIDEO, 3D 等，用于分类已掌握的技能。
- **组件化：** 模块化组件 (`TodoForm`, `TodoList`, `TodoItem`, `TodoZone`)。
- **数据管理：**
  - 使用 React 的 `useState` 和 `useEffect` 进行本地状态管理。
  - 从 Supabase 的 `todos` 表中获取数据。
  - **实时同步 (Realtime)：** 订阅 Supabase 数据库更改。
- **拖拽排序：** 实现了在不同 Skill Zone 之间拖拽技能的功能。

## 快速上手

### 前置条件

- 已安装 Node.js 和 npm。
- 拥有 Supabase 账号并创建了项目。

### 安装步骤

1.  **安装依赖：**
    ```bash
    npm install
    ```

2.  **环境变量设置：**
    - 根据 Supabase 凭据创建 `.env` 文件。
    - 必需变量：`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`。
    - 详见 `SUPABASE_SETUP.md`。

3.  **数据库设置：**
    - 在 Supabase 中创建 `todos` 表。
    - SQL 架构参考 `SQL_CREATE_TABLE.md`。

### 运行项目

-   **开发服务器：**
    ```bash
    npm run dev
    ```
-   **生产构建：**
    ```bash
    npm run build
    ```
-   **代码检查：**
    ```bash
    npm run lint
    ```

## 项目结构

```
/
├── src/
│   ├── components/         # React 组件 (TodoForm, TodoItem, TodoList)
│   ├── App.jsx            # 应用主逻辑 (状态、数据获取、处理函数)
│   ├── main.jsx           # 入口文件
│   ├── supabaseClient.js  # Supabase 客户端初始化
│   ├── index.css          # 全局样式和 Tailwind 指令
│   └── App.css            # 组件特定样式
├── .trae/documents/       # 项目文档和优化计划
├── SUPABASE_SETUP.md      # Supabase 配置指南
├── SQL_CREATE_TABLE.md    # 数据库建表 SQL
├── tailwind.config.js     # Tailwind CSS 配置
└── vite.config.js         # Vite 配置
```

## 开发规范

-   **样式：** 使用 Tailwind CSS 原子类进行样式编写。
-   **状态管理：** 尽量保持状态局部化。目前 `App.jsx` 持有主要的 `todos` 状态。
-   **异步操作：** 使用 `async/await` 处理 Supabase 交互。优雅地处理错误（目前记录到控制台）。
-   **优化路线：** 参考 `.trae/documents/项目优化计划.md` 了解 UI/UX 改进、代码重构和性能优化的后续步骤。

## AI 助手注意事项

-   修改数据库结构时，请同步更新 `SQL_CREATE_TABLE.md`。
-   如果 Supabase 无法连接，应用会自动回退到模拟数据。确保 `.env` 中的凭据正确以实现真实数据持久化。
-   拖拽功能使用 `react-dnd` 实现；确保 `DndProvider` 包裹了相关组件（目前在 `App.jsx` 中）。