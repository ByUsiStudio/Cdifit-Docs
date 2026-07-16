# 站点信息

获取站点相关信息和配置。

## Ping

检查服务状态和版本。

```http
GET /api/v4/ping
```

响应：

```json
{
  "code": 0,
  "data": {
    "version": "4.0.0",
    "build": "20250101"
  },
  "msg": ""
}
```

## 获取站点配置

```http
GET /api/v4/site/settings
```

## 获取验证码

```http
GET /api/v4/site/captcha
```

响应：

```json
{
  "code": 0,
  "data": {
    "ticket": "4qXv7KmbYajJ0yFDKcmJ",
    "image": "data:image/png;base64,..."
  },
  "msg": ""
}
```