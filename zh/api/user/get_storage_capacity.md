# 获取用户存储空间信息

使用 `GET` 发起请求，例子如下

```http
GET https://www.cdifit.cn/api/v4/user/capacity
Authorization: Bearer <AccessToken>
......
```

响应

```json
{
    "code": 0,
    "data": {
        "total": 3702272294912,
        "used": 7946323095,
        "storage_pack_total": 1503249039360
    },
    "msg": ""
}
```