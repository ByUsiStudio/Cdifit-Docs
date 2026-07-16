# 退出登录

退出当前会话并撤销 refresh token。从根令牌颁发的所有 refresh token 将被撤销。

## 请求

```http
DELETE /api/v4/session/token
Authorization: Bearer <AccessToken>
```

## 响应

```json
{
  "code": 0,
  "msg": ""
}
```