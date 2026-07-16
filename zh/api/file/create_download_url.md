# 创建下载链接

创建临时匿名下载链接，支持批量下载和服务器端归档。

## 请求

```http
POST /api/v4/file/url
Authorization: Bearer <AccessToken>
Content-Type: application/json
```

## 请求体

| 参数 | 类型 | 必填 | 说明 |
|-----|------|-----|------|
| uris | array | 是 | 文件 URI 列表 |
| download | boolean | 否 | 是否强制下载（而非预览） |
| redirect | boolean | 否 | 是否直接 302 重定向（仅单个文件） |
| entity | string | 否 | 指定文件版本 ID |
| use_primary_site_url | boolean | 否 | 是否强制使用主站点 URL |
| skip_error | boolean | 否 | 是否跳过错误返回部分成功结果 |
| archive | boolean | 否 | 是否使用服务器端批量下载（生成 zip） |
| no_cache | boolean | 否 | 是否禁用 URL 缓存 |

## 响应

### 多个文件下载链接

```json
{
  "code": 0,
  "data": {
    "urls": [
      {
        "url": "http://localhost:5173/api/v4/file/content/DprI3/0/file.mp3?download=true&sign=...",
        "stream_saver_display_name": "file.mp3"
      }
    ],
    "expires": "2025-06-10T12:06:55+08:00"
  },
  "msg": ""
}
```

### 服务器端批量下载

```json
{
  "code": 0,
  "data": {
    "urls": [
      {
        "url": "http://localhost:5173/api/v4/file/archive/56bb8329-.../archive.zip?sign=..."
      }
    ],
    "expires": "2025-06-10T11:15:01+08:00"
  },
  "msg": ""
}
```