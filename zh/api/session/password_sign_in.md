# 密码登录

使用邮箱和密码登录，获取访问令牌。

## 请求

```http
POST /api/v4/session/token
Content-Type: application/json
```

## 请求体

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| email | string | 是 | 用户邮箱 |
| password | string | 是 | 用户密码 |
| captcha | string | 否 | 图形验证码输入值（当启用验证码时必填） |
| ticket | string | 否 | 验证码票据（当启用验证码时必填） |

```json
{
  "email": "user@cloudreve.org",
  "password": "P@ssw0rd"
}
```

## 响应

### 成功（无 2FA）

```json
{
  "code": 0,
  "data": {
    "user": {
      "id": "lpua",
      "email": "admin@cloudreve.org",
      "nickname": "Aaron Liu",
      "status": "active",
      "avatar": "file",
      "created_at": "2023-08-06T19:21:59+08:00",
      "credit": 23000,
      "group": {
        "id": "z4u4",
        "name": "管理员",
        "permission": "/f8B",
        "direct_link_batch_size": 999,
        "trash_retention": 604800
      },
      "pined": ["cloudreve://my/1"],
      "language": "zh-CN"
    },
    "token": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "access_expires": "2025-04-26T16:19:38+08:00",
      "refresh_expires": "2025-10-23T15:19:38+08:00"
    }
  },
  "msg": ""
}
```

### 需要 2FA

```json
{
  "code": 203,
  "data": "1728791b-4e6a-4ac5-adf5-fa717a6b0919",
  "msg": ""
}
```

使用返回的 2FA session ID 调用 [完成 2FA 登录](finish_sign_in_with_2fa.md) 接口完成认证。