# 数据库升级脚本 (V2)

为了支持新的看板布局（紧急、长期、进行中、已完成），我们需要修改数据库结构。

请在 Supabase 的 SQL Editor 中运行以下命令：

```sql
-- 1. 添加 status 字段，默认为 'inbox' (收件箱/默认区域)
ALTER TABLE todos 
ADD COLUMN status TEXT DEFAULT 'inbox';

-- 2. 迁移旧数据：如果之前是 completed=true，则设为 'completed'
UPDATE todos 
SET status = 'completed' 
WHERE completed = true;

-- 3. 建立索引以优化查询
CREATE INDEX idx_todos_status ON todos(status);
```

> **注意**：运行此脚本后，您的应用才能正常保存拖拽后的状态。
