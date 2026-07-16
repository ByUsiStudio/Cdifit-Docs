# 创建文件

创建新文件或更新现有文件内容。

## 请求

```http
POST /api/v4/file/create
Authorization: Bearer <AccessToken>
Content-Type: application/json
```

## 请求体

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| uri | string | 是 | 文件 URI |
| content | string | 是 | 文件内容 |
| overwrite | boolean | 否 | 是否覆盖现有文件 |

```json
{
  "uri": "cloudreve://my/notes.txt",
  "content": "Hello, Cloudreve!",
  "overwrite": false
}
```

## 响应

```json
{
  "code": 0,
  "data": {
    "type": 0,
    "id": "abc123",
    "name": "notes.txt",
    "size": 16,
    "path": "cloudreve://my/notes.txt"
  },
  "msg": ""
}
```