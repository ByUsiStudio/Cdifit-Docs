# 重命名文件

重命名文件或文件夹。

## 请求

```http
PATCH /api/v4/file
Authorization: Bearer <AccessToken>
Content-Type: application/json
```

## 请求体

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| uri | string | 是 | 当前文件 URI |
| name | string | 是 | 新名称 |

```json
{
  "uri": "cloudreve://my/old_name.txt",
  "name": "new_name.txt"
}
```

## 响应

```json
{
  "code": 0,
  "data": {
    "type": 0,
    "id": "abc123",
    "name": "new_name.txt",
    "path": "cloudreve://my/new_name.txt"
  },
  "msg": ""
}
```