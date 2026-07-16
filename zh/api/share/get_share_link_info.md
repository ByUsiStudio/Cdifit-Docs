# 获取分享链接信息

根据分享 ID 获取分享链接详细信息。

## 请求

```http
GET /api/v4/share/{id}
```

## 路径参数

| 参数 | 类型 | 说明 |
|-----|------|------|
| id | string | 分享链接 ID |

## 响应

```json
{
  "code": 0,
  "data": {
    "id": "VoMFL",
    "name": "分享文件",
    "visited": 1,
    "downloaded": 0,
    "price": 0,
    "unlocked": true,
    "source_type": 1,
    "owner": {
      "id": "lpua",
      "email": "admin@cloudreve.org",
      "nickname": "Aaron Liu",
      "avatar": "file",
      "created_at": "2023-08-06T19:21:59+08:00"
    },
    "created_at": "2025-04-27T16:12:13+08:00",
    "expired": false,
    "url": "http://localhost:5173/s/VoMFL",
    "permission_setting": {
      "same_group": null,
      "everyone": "AQ==",
      "anonymous": "AQ==",
      "group_explicit": {},
      "user_explicit": {}
    },
    "is_private": false
  },
  "msg": ""
}
```