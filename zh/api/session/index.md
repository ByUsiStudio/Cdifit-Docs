# 会话认证

Cdifit 提供多种认证方式，包括密码登录、OAuth、Passkey 和 OpenID 等。

## 认证类型

| 类型 | 说明 |
|-----|------|
| **Auth: None** | 不需要认证，无需携带 Authorization 头 |
| **Auth: JWT Required** | 需要认证，需携带 `Bearer <AccessToken>` |
| **Auth: JWT Optional** | 可选认证，携带则以认证用户身份执行，否则以匿名用户身份执行 |

## 获取 AccessToken

推荐使用 OAuth 2.0 授权码流程获取 AccessToken。