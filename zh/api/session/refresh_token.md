# 刷新令牌

使用有效的 refresh token 刷新 access token。

## 请求

```http
PUT /api/v4/session/token
Authorization: Bearer <RefreshToken>
Content-Type: application/json
```

## 请求体

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| refresh_token | string | 是 | 刷新令牌 |

```json
{
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## 响应

```json
{
  "code": 0,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "access_expires": "2025-04-26T17:19:38+08:00",
    "refresh_expires": "2025-10-23T15:19:38+08:00"
  },
  "msg": ""
}
```