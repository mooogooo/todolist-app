# 数据库升级脚本 (技能分类版)

既然我们将应用转型为技能栈看板，需要清理旧的状态数据。

请在 Supabase 的 SQL Editor 中运行以下命令：

```sql
-- 1. 将旧的分类状态重置为 'inbox'，以便您重新整理到新的技能分类中
UPDATE todos 
SET status = 'inbox' 
WHERE status IN ('urgent', 'longterm', 'in_progress', 'completed');

-- 2. (可选) 如果你想严格限制状态值，可以添加约束 (建议先运行上面的更新)
-- 注意：如果表里还有其他奇怪的状态值，这步会失败
ALTER TABLE todos 
ADD CONSTRAINT check_valid_status 
CHECK (status IN ('inbox', 'web', 'ai', 'video', '3d', 'ppt', 'tools', 'design', 'misc'));

-- 3. 查看当前的数据分布
SELECT status, COUNT(*) 
FROM todos 
GROUP BY status;
```
