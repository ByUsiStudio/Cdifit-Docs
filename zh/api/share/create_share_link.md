# 创建分享链接

为文件或文件夹创建分享链接，仅文件所有者或管理员可操作。

## 请求

```http
PUT /api/v4/share
Authorization: Bearer <AccessToken>
Content-Type: application/json
```

## 请求体

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| uri | string | 是 | 分享文件或文件夹的 URI |
| permissions | object | 是 | 权限设置（Pro 版） |
| is_private | boolean | 否 | 是否为私有分享（需要密码） |
| password | string | 否 | 自定义分享密码（is_private 为 true 时） |
| share_view | boolean | 否 | 是否暴露文件夹视图设置 |
| expire | integer | 否 | 过期时间（秒），空值表示永久 |
| price | integer | 否 | 付费分享价格（积分），Pro 版 |
| show_readme | boolean | 否 | 是否自动显示 README.md |

```json
{
  "uri": "cloudreve://my/Inspirations",
  "permissions": {
    "anonymous": "AQ==",
    "everyone": "AQ=="
  },
  "is_private": true,
  "password": "123456",
  "expire": 604800,
  "price": 20
}
```

## 响应

### 私有分享（带密码）

```json
{
  "code": 0,
  "data": "http://localhost:5173/s/g2guA/gcqzfaze",
  "msg": ""
}
```

### 公开分享

```json
{
  "code": 0,
  "data": "http://localhost:5173/s/g2guA",
  "msg": ""
}
```