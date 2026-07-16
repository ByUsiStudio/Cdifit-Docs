# 列出我的分享链接

列出当前用户创建的所有分享链接。

## 请求

```http
GET /api/v4/share
Authorization: Bearer <AccessToken>
```

## 查询参数

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| page | integer | 是 | 页码 |
| page_size | integer | 是 | 每页大小 |
| order_by | string | 否 | 排序字段 |
| order_direction | string | 否 | 排序方向 |

## 响应

```json
{
  "code": 0,
  "data": {
    "shares": [
      {
        "id": "VoMFL",
        "name": "分享文件",
        "visited": 1,
        "expired": false,
        "url": "http://localhost:5173/s/VoMFL"
      }
    ],
    "pagination": {
      "page": 0,
      "page_size": 50
    }
  },
  "msg": ""
}
```