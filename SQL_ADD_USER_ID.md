# 数据库升级：添加用户归属

为了让每个用户只能看到自己的数据，我们需要给 `todos` 表加上 `user_id` 字段。

请在 Supabase 的 **SQL Editor** 中运行以下代码：

```sql
-- 1. 给 todos 表添加 user_id 字段
-- 这里的 UUID 类型需要和 users 表里的 id 类型一致
ALTER TABLE todos 
ADD COLUMN IF NOT EXISTS user_id UUID;

-- 2. (可选) 将现有的所有数据都归属给 'mogo' 用户
-- 这样您之前创建的数据不会凭空消失
-- 注意：这需要您先确保 users 表里已经有 mogo 这个用户
UPDATE todos 
SET user_id = (SELECT id FROM users WHERE username = 'mogo' LIMIT 1)
WHERE user_id IS NULL;

-- 3. (可选) 添加外键约束，保证数据完整性
-- 这意味着 user_id 必须是 users 表里真实存在的 id
ALTER TABLE todos 
ADD CONSTRAINT fk_user 
FOREIGN KEY (user_id) 
REFERENCES users(id);
```

## 运行后的效果
1.  **现有数据**：如果您运行了第 2 步，之前的所有技能都会变成 `mogo` 的。
2.  **新数据**：稍后更新代码后，新创建的技能会自动带上当前登录用户的 ID。
