# 用户信息获取

使用 `POST` 请求进行，请求例子如下

```http
POST https://www.cdifit.cn/api/v4/session/oauth/userinfo
Authorization: Bearer <AccessToken>
......
```

响应

```json
{
    "sub": "lpua",
    "name": "Aaron",
    "preferred_username": "Aaron",
    "picture": "https://demo.cloudreve.org/api/v4/user/avatar/lpra",
    "updated_at": 0,
    "email": "admin@cloudreve.org",
    "email_verified": true
}
```