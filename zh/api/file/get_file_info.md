# 获取文件信息

获取指定文件的详细信息，支持扩展信息和文件夹统计。

## 请求

```http
GET /api/v4/file/info
Authorization: Bearer <AccessToken>
```

## 查询参数

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| uri | string | 否 | 文件 URI（与 id 二选一） |
| id | string | 否 | 文件 ID（与 uri 二选一） |
| extended | boolean | 否 | 是否获取扩展信息 |
| folder_summary | boolean | 否 | 是否计算文件夹大小（仅文件夹） |

## 响应

### 文件信息（含扩展信息）

```json
{
  "code": 0,
  "data": {
    "type": 0,
    "id": "98XDX8Sr",
    "name": "melk-abbey-library.jpg",
    "size": 1682177,
    "metadata": {
      "exif:camera_make": "NIKON",
      "exif:camera_model": "E5700"
    },
    "path": "cloudreve://my/Inspirations/images/melk-abbey-library.jpg",
    "capability": "39/9AQ==",
    "owned": true,
    "primary_entity": "mxB6SM",
    "extended_info": {
      "storage_policy": {
        "id": "eVtl",
        "name": "OneDrive",
        "type": "onedrive"
      },
      "entities": [{
        "id": "mxB6SM",
        "size": 1682177,
        "type": 0,
        "created_by": {
          "id": "bnUn",
          "nickname": "Luke Skywalker"
        }
      }],
      "direct_links": [{
        "id": "xMxIa",
        "url": "http://localhost:5173/f/xMxIa/melk-abbey-library.jpg"
      }]
    }
  },
  "msg": ""
}
```

### 文件夹信息（含统计）

```json
{
  "code": 0,
  "data": {
    "type": 1,
    "id": "98XDe8sr",
    "name": "Inspirations",
    "path": "cloudreve://my/Inspirations",
    "folder_summary": {
      "size": 3231226838,
      "files": 18,
      "folders": 10,
      "completed": true
    },
    "extended_info": {
      "shares": [...]
    }
  },
  "msg": ""
}
```