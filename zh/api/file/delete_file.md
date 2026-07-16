# 删除文件

删除文件或文件夹，支持移入回收站或直接删除。

## 请求

```http
DELETE /api/v4/file
Authorization: Bearer <AccessToken>
Content-Type: application/json
```

## 请求体

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| uris | array | 是 | 文件 URI 列表 |
| unlink | boolean | 否 | 是否保留物理文件（仅高级删除选项启用时生效） |
| skip_soft_delete | boolean | 否 | 是否跳过回收站，直接删除（仅文件所有者或管理员） |

```json
{
  "uris": [
    "cloudreve://my/newfile.docx",
    "cloudreve://my/新建文件夹"
  ],
  "skip_soft_delete": false
}
```

## 响应

```json
{
  "code": 0,
  "msg": ""
}
```

### 删除回收站中的文件

```json
{
  "uris": ["cloudreve://trash/2e24002d-bbae-4345-8b92-844cc1f5e2a2"],
  "skip_soft_delete": true
}
```