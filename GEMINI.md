# 待办事项项目 (React + Vite + Supabase)

## 项目概览

这是一个使用 React 19、Vite 7 和 Tailwind CSS 构建的现代待办事项 (Todo List) 应用程序，并使用 Supabase 作为后端服务。该项目具有简洁的响应式 UI、任务拖拽排序功能以及实时数据同步。

**当前状态：** 功能性原型，正在进行优化计划。

## 技术栈

- **前端：** React 19, Vite 7
- **样式：** Tailwind CSS, PostCSS
- **后端：** Supabase (PostgreSQL 数据库, 实时订阅)
- **拖拽功能：** `react-dnd`, `react-dnd-html5-backend`
- **代码规范：** ESLint

## 架构与核心功能

- **组件化：** 应用程序拆分为位于 `src/components/` 的模块化组件 (`TodoForm`, `TodoList`, `TodoItem`)。
- **数据管理：**
  - 使用 React 的 `useState` 和 `useEffect` 进行本地状态管理。
  - 从 Supabase 的 `todos` 表中获取数据。
  - 包含降级机制：如果 Supabase 连接失败，将使用模拟数据。
  - **实时同步 (Realtime)：** 订阅 Supabase 数据库更改，实现跨客户端的即时 UI 更新。
- **拖拽排序：** 实现了任务的拖拽排序功能（目前主要更新本地状态）。

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