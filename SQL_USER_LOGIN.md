# 创建用户表及初始用户 SQL 语句

为了实现登录功能，我们需要创建一个 `users` 表并插入一个初始用户。

请在 Supabase 的 SQL Editor 中运行以下 SQL 代码：

```sql
-- 1. 创建 users 表
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL, -- 注意：实际生产中应存储哈希值，此处为教学演示使用明文
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 2. 插入初始用户 mogo
-- 如果用户已存在则不做任何操作 (基于 username 唯一性)
INSERT INTO users (username, password)
VALUES ('mogo', '1234')
ON CONFLICT (username) DO NOTHING;

-- 3. 验证数据
SELECT * FROM users;
```

## 说明
- **username**: 用户名，设为唯一。
- **password**: 密码。**安全提示**：在真实生产环境中，密码绝对不能明文存储，必须使用 bcrypt 等算法加密。本项目仅作为演示使用明文。
