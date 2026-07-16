# 完成 2FA 登录

当密码登录返回需要 2FA 时，使用此接口完成 2FA 验证并获取令牌。

## 请求

```http
POST /api/v4/session/token/2fa
Content-Type: application/json
```

## 请求体

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| session | string | 是 | 密码登录返回的 2FA session ID |
| code | string | 是 | 2FA 验证码 |

```json
{
  "session": "1728791b-4e6a-4ac5-adf5-fa717a6b0919",
  "code": "123456"
}
```

## 响应

成功响应与 [密码登录](password_sign_in.md) 成功响应相同。