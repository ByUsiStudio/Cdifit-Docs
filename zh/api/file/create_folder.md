# 创建文件夹

创建新文件夹，父级目录不存在时会自动创建。

## 请求

```http
PUT /api/v4/file
Authorization: Bearer <AccessToken>
Content-Type: application/json
```

## 请求体

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| uri | string | 是 | 文件夹 URI |
| type | integer | 是 | 类型，固定为 1 |

```json
{
  "uri": "cloudreve://my/新建文件夹",
  "type": 1
}
```

## 响应

```json
{
  "code": 0,
  "data": {
    "type": 1,
    "id": "abc123",
    "name": "新建文件夹",
    "path": "cloudreve://my/新建文件夹"
  },
  "msg": ""
}
```