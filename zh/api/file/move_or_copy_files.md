# 移动或复制文件

移动或复制文件到指定目标位置。

## 请求

```http
POST /api/v4/file/move
Authorization: Bearer <AccessToken>
Content-Type: application/json
```

## 请求体

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| src | array | 是 | 源文件 URI 列表 |
| dst | string | 是 | 目标目录 URI |
| copy | boolean | 否 | 是否复制（默认移动） |

```json
{
  "src": ["cloudreve://my/file.txt"],
  "dst": "cloudreve://my/备份/",
  "copy": true
}
```

## 响应

```json
{
  "code": 0,
  "msg": ""
}
```