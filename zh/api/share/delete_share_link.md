# 删除分享链接

删除指定的分享链接，仅链接所有者或管理员可操作。

## 请求

```http
DELETE /api/v4/share/{id}
Authorization: Bearer <AccessToken>
```

## 路径参数

| 参数 | 类型 | 说明 |
|-----|------|------|
| id | string | 分享链接 ID |

## 响应

```json
{
  "code": 0,
  "msg": ""
}
```