# 编辑分享链接

编辑已有的分享链接设置。

## 请求

```http
POST /api/v4/share/{id}
Authorization: Bearer <AccessToken>
Content-Type: application/json
```

## 路径参数

| 参数 | 类型 | 说明 |
|-----|------|------|
| id | string | 分享链接 ID |

## 请求体

同 [创建分享链接](create_share_link.md)，仅传入需要修改的字段。

## 响应

```json
{
  "code": 0,
  "data": "http://localhost:5173/s/g2guA",
  "msg": ""
}
```