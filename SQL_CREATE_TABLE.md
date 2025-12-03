# 创建 todos 表的 SQL 语句

您可以使用以下 SQL 语句在 Supabase 中创建 todos 表：

```sql
CREATE TABLE todos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

## 如何执行 SQL 语句

1. 在 Supabase 项目仪表盘左侧，点击 "Database"（数据库）
2. 点击 "SQL Editor"（SQL 编辑器）
3. 将上述 SQL 语句粘贴到编辑器中
4. 点击 "Run"（运行）按钮
5. 您将看到 "Success. 0 rows affected." 的提示，表明表已成功创建

## 表结构说明

- **id**: 唯一标识符，使用 UUID 类型，自动生成
- **title**: 待办事项内容，文本类型，不能为空
- **created_at**: 创建时间，带时区的时间戳，自动生成

执行此 SQL 语句后，您的 todos 表将创建完成，并且可以立即使用。