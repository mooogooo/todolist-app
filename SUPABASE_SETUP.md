# Supabase 设置指南

要使用本待办事项应用，您需要在 Supabase 上创建一个项目并设置相应的表。以下是详细步骤：

## 1. 创建 Supabase 账户

1. 访问 [Supabase 官网](https://supabase.com/)
2. 点击右上角的 "Start your project" 按钮
3. 使用邮箱或 GitHub 账号注册并登录

## 2. 创建新项目

1. 登录后，点击 "New Project" 按钮
2. 填写以下信息：
   - **Project Name**: 输入项目名称（例如：todolist）
   - **Password**: 设置数据库密码
   - **Region**: 选择离您最近的区域
3. 点击 "Create Project" 按钮

## 3. 获取环境变量

项目创建完成后，您需要获取以下环境变量：

1. 在项目仪表盘左侧，点击 "Settings"（设置）
2. 点击 "API" 选项卡
3. 复制以下两个值：
   - **Project URL**: 复制到 `.env` 文件的 `VITE_SUPABASE_URL` 变量中
   - **Anon Key**: 复制到 `.env` 文件的 `VITE_SUPABASE_ANON_KEY` 变量中

## 4. 创建 todos 表

1. 在项目仪表盘左侧，点击 "Database"（数据库）
2. 点击 "Tables and Views"（表和视图）
3. 点击 "New Table"（新建表）按钮
4. 填写表名：`todos`
5. 添加以下列：
   - **id**: 类型为 `uuid`，勾选 "Primary"（主键），设置默认值为 `gen_random_uuid()`
   - **title**: 类型为 `text`，必填
   - **created_at**: 类型为 `timestamp with time zone`，设置默认值为 `now()`
6. 点击 "Save"（保存）按钮

## 5. 更新环境变量

打开 `.env` 文件，将您从 Supabase 获取的环境变量粘贴进去：

```
VITE_SUPABASE_URL=您的项目URL
VITE_SUPABASE_ANON_KEY=您的Anon Key
```

## 6. 启动应用

现在您可以启动应用并开始使用了：

```bash
npm run dev
```

访问 http://localhost:5173 即可使用您的待办事项应用。

## 注意事项

- 确保您的 Supabase 项目的访问控制设置允许匿名访问（默认情况下是允许的）
- 如果您遇到连接问题，请检查环境变量是否正确设置
- 您可以根据需要扩展 todos 表，添加更多列（例如：`completed` 列用于标记完成状态）