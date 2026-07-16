# 列出文件

列出指定目录下的文件，支持搜索和分页。

## 请求

```http
GET /api/v4/file
Authorization: Bearer <AccessToken>
```

## 查询参数

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| uri | string | 是 | 目录 URI，可包含搜索条件 |
| page | integer | 是 | 页码（offset 分页），从 0 开始 |
| page_size | integer | 是 | 每页大小，不能超过 `max_page_size` |
| order_by | string | 否 | 排序字段：`name`, `size`, `updated_at`, `created_at` |
| order_direction | string | 否 | 排序方向：`asc`, `desc` |
| next_page_token | string | 否 | 下一页令牌（cursor 分页） |
| X-Cr-Purchase-Ticket | string | 否 | 付费分享票证 |

## 响应

```json
{
  "code": 0,
  "data": {
    "files": [
      {
        "type": 1,
        "id": "N93dL8ig",
        "name": "Takeout",
        "permission": null,
        "created_at": "2025-02-13T20:14:15+08:00",
        "updated_at": "2025-02-13T20:17:36+08:00",
        "size": 0,
        "metadata": {},
        "path": "cloudreve://my/Luke's%20AMA/Takeout",
        "capability": "39/9",
        "owned": true,
        "primary_entity": "zOie"
      },
      {
        "type": 0,
        "id": "8zXBp3UL",
        "name": "sample.psd",
        "size": 3285099,
        "path": "cloudreve://my/Luke's%20AMA/sample.psd",
        "capability": "39/9",
        "owned": true,
        "primary_entity": "jYOAc8"
      }
    ],
    "parent": {
      "type": 1,
      "id": "0OmpAGUn",
      "name": "Luke's AMA",
      "path": "cloudreve://my/Luke's%20AMA"
    },
    "pagination": {
      "page": 0,
      "page_size": 100,
      "is_cursor": true
    },
    "props": {
      "capability": "39/9",
      "max_page_size": 2000,
      "order_by_options": ["name", "size", "updated_at", "created_at"],
      "order_direction_options": ["asc", "desc"]
    },
    "context_hint": "5c6ea8a1-86e0-4967-8d40-598c6eb78bff",
    "storage_policy": {
      "id": "Emta",
      "name": "minio",
      "type": "s3",
      "max_size": 0
    }
  },
  "msg": ""
}
```

### 文件类型

| 值 | 类型 |
|---|------|
| 0 | 文件 |
| 1 | 文件夹 |