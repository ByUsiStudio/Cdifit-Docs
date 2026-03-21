# Cdifit的OAuth接口 {#authentication-methods}

## 基本信息
- **Base URL**: `https://api.www.cdifit.cn/oauth/`
- **数据存储**: JSON 文件缓存
- **字符编码**: UTF-8
- **返回格式**: JSON

---

## 1. 获取授权 Token 接口

### `GET /oauth/token.php`

获取用于 OAuth 授权的本地 token 和 Cdifit 授权 URL。

**请求示例**：
```http
GET https://api.www.cdifit.cn/oauth/token.php
```

**成功响应** (200 OK)：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "token": "a1b2c3d4e5f67890abcdef1234567890",
        "oauth_url": "https://www.cdifit.cn/session/authorize?response_type=code&client_id=393a1839-f52e-498e-9972-e77cc2241eee&redirect_uri=https://api.www.cdifit.cn/oauth/oauth.php&scope=openid%20profile%20offline_access%20Files.Write&state=xyz789..."
    }
}
```

| 字段 | 类型 | 描述 |
|------|------|------|
| `token` | string | 本地 token，用于后续查询 |
| `oauth_url` | string | 跳转到 Cdifit 的授权 URL |

---

## 2. OAuth 回调接口

### `GET /oauth/oauth.php`

**此接口由 Cdifit 调用**，接收授权码并缓存。

**请求参数** (由 Cdifit 自动追加)：
| 参数 | 类型 | 描述 |
|------|------|------|
| `code` | string | Cdifit 返回的授权码 |
| `state` | string | 状态码，用于验证 |

**处理流程**：
1. 验证 state
2. 缓存 code 并关联到本地 token
3. 302 重定向到 `/callback.php?token={local_token}`

**响应**：无直接返回，自动重定向。

---

## 3. 回调显示界面

### `GET /oauth/callback.php`

显示 OAuth 授权完成的 HTML 界面。

**请求参数**：
| 参数 | 类型 | 描述 |
|------|------|------|
| `token` | string | 本地 token |

**响应**：HTML 页面

---

## 4. 查询授权码接口

### `GET /oauth/check.php`

查询并获取缓存的 Cdifit 授权码。

**请求参数**：
| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| `token` | string | 是 | 从 `/token.php` 获取的本地 token |

**请求示例**：
```http
GET https://api.www.cdifit.cn/oauth/check.php?token=a1b2c3d4e5f67890abcdef1234567890
```

**成功响应** (200 OK)：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "code": "e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9",
        "received_at": "2026-03-14 15:30:45",
        "expires_at": "2026-03-14 15:35:45"
    }
}
```

**错误响应**：

| HTTP 状态码 | 响应示例 | 说明 |
|-------------|----------|------|
| 400 | `{"code":400,"message":"Missing token parameter"}` | 缺少 token 参数 |
| 404 | `{"code":404,"message":"Code not found or already retrieved"}` | token 不存在或 code 已被领取 |
| 410 | `{"code":410,"message":"Code expired"}` | code 已过期（5分钟有效期） |

---

## 完整调用流程

1. **获取授权URL**: 调用 `/token.php` 获取 `token` 和 `oauth_url`
2. **用户授权**: 将用户浏览器重定向到 `oauth_url` (Cdifif 登录页)
3. **Cdifit 回调**: 用户授权后，Cdifit 重定向到 `/oauth.php?code=xxx&state=yyy`
4. **缓存 Code**: `/oauth.php` 缓存 code，重定向到 `/callback.php?token=xxx`
5. **显示界面**: 用户看到 `/callback.php` 的完成界面
6. **获取 Code**: 调用 `/check.php?token=xxx` 获取缓存的 code

---

## 交换令牌接口文档

### 接口概述
通过授权码交换访问令牌和刷新令牌。

### 请求信息
- **URL**: `https://www.cdifit.cn/api/v4/session/oauth/token`
- **方法**: POST
- **Content-Type**: application/x-www-form-urlencoded

### 请求参数
| 参数名 | 类型 | 必填 | 描述 |
|--------|------|------|------|
| grant_type | string | 是 | 固定值 `authorization_code` |
| client_id | string | 是 | 客户端ID，官方提供ID：`c3a6ce58-43d4-4151-84c9-ee8ed4c37017` |
| client_secret | string | 是 | 客户端密钥，联系管理员获得 <admin@work.cdifit.cn> |
| code | string | 是 | 上一步返回的 `code` 的值 |
| code_verifier | string | 否 | 如果使用了 `code_challenge`，则必须提供 |

### 请求示例
```http
POST https://www.cdifit.cn/api/v4/session/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
client_id=YOUR_CLIENT_ID&
client_secret=YOUR_CLIENT_SECRET&
code=AUTHORIZATION_CODE&
code_verifier=YOUR_CODE_VERIFIER
``` 


### 成功响应示例
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token_expires_in": 7776000
}
```

## 注意事项

1. **一次性使用**：每个 code 只能通过 `/check.php` 查询一次，查询后自动删除
2. **过期时间**：code 缓存有效期 5 分钟
3. 授权码使用后即失效，不能重复使用
4. 返回的access_token有效期为3600秒（1小时）
5. refresh_token有效期为7776000秒（90天）

## 刷新 AccessToken

::: warning
要获取 `refresh_token`，必须在授权请求中包含 `offline_access` scope。如果没有此 scope，将只返回 `access_token`。
:::

当 `AccessToken` 过期时，使用 `RefreshToken` 获取一对新的令牌。

```http
POST https://www.cdifit.cn/api/v4/session/token/refresh
Content-Type: application/json

{
  "refresh_token": "YOUR_REFRESH_TOKEN"
}
```

响应：

```json
{
  "code": 0,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
    "access_expires": "2025-04-26T16:19:38.833494+08:00",
    "refresh_expires": "2025-10-23T15:19:38.833495+08:00"
  },
  "msg": ""
}
```

当 `RefreshToken` 过期，或者刷新请求失败时，客户端应引导用户重新授权应用程序。

## 通过登录获取 AccessToken {#get-access-token-by-login}

### 登录

通过 **Password sign-in** 或其他登录接口登录成功后，会得到一组 `AccessToken` 和 `RefreshToken`，以及它们的有效期：

```json
{
  "code": 0,
  "data": {
    "user": ...,
    "token": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwic3ViIjoibHB1YSIsImV4cCI6MTc0NTY1NTU3OCwibmJmIjoxNzQ1NjUxOTc4fQ.L1ETHHBNImNevze00QAgrrY1maZO2nefyIwdT4cb68c",
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsInN1YiI6ImxwdWEiLCJleHAiOjE3NjEyMDM5NzgsIm5iZiI6MTc0NTY1MTk3OCwic3RhdGVfaGFzaCI6Ikk1OCtSbmsrTHVpTkxBbjBqek9KNG45OUorV3hqL0pzbjJoRVYrUXBhelE9In0.Q2s75zxPVA3bzZyIIBau3TBvqSxIdzbiEmK1zCd-_zk",
      "access_expires": "2025-04-26T16:19:38.833494+08:00",
      "refresh_expires": "2025-10-23T15:19:38.833495+08:00"
    }
  },
  "msg": ""
}
```

客户端应将 `AccessToken` 和 `RefreshToken` 安全保存到本地。在请求需要认证的 API 时，将 `AccessToken` 添加到请求头中：

```http
POST https://www.cdifit.cn/api/v4/xxx
Authorization: Bearer <AccessToken>
......
```

### 刷新 AccessToken

当 `AccessToken` 过期时，客户端应使用 `RefreshToken` 获取一对新的 `AccessToken` 和 `RefreshToken`。

当 `RefreshToken` 过期，或者 **Refresh token** 请求失败时，客户端应引导用户重新登录。