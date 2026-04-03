# 用户的分享列表获取

使用 `GET` 发起请求，实例如下

```http
GET https://www.cdifit.cn/api/v4/user/shares/{user-id}
Authorization: Bearer <AccessToken>
......
```

一下为支持的查询参数

| 参数名 | 类型 | 值 | 是否为必要参数 |
|-------|------|-----|--------------|
| page_size | 整数 | `>= 10` `<= 100` 页码，可以自定义 | 是 |
| order_by | enum\<string\> | views ==> **View count.**<br>downloads ==> **Download counts.**<br>price ==> **Price in points.**<br>remain_downloads ==> **Remain download count for auto-expired shares.**<br>id ==> **Date of creation.** | 否 |
| order_direction | enum\<string\> | asc ==> **Ascending (a-z).**<br>desc ==> **Descending (z-a).** | 否 |
| next_page_token | string | 用于请求下一页的令牌。空值表示请求第一页。 | 否 |

响应如下

```json
{
    "code": 0,
    "data": {
        "shares": [
            {
                "id": "VoMFL",
                "name": "BrNJdjbgi1mvqBf7zycSCskw6ky8nle0",
                "visited": 1,
                "unlocked": true,
                "source_type": 1,
                "owner": {
                    "id": "lpua",
                    "email": "admin@cloudreve.org",
                    "nickname": "Aaron Liu2",
                    "avatar": "file",
                    "created_at": "2023-08-06T19:21:59+08:00"
                },
                "created_at": "2025-04-27T16:12:13+08:00",
                "expired": false,
                "url": "http://localhost:5173/s/VoMFL/2rje2bdj",
                "permission_setting": {
                    "same_group": null,
                    "everyone": "AQ==",
                    "other": null,
                    "anonymous": "AQ==",
                    "group_explicit": {},
                    "user_explicit": {}
                },
                "is_private": true,
                "password": "2rje2bdj"
            },
            {
                "id": "KDVIn",
                "name": "使用协议.txt",
                "visited": 6,
                "downloaded": 2,
                "price": 1000,
                "unlocked": true,
                "source_type": 0,
                "owner": {
                    "id": "lpua",
                    "email": "admin@cloudreve.org",
                    "nickname": "Aaron Liu2",
                    "avatar": "file",
                    "created_at": "2023-08-06T19:21:59+08:00"
                },
                "created_at": "2025-04-22T17:12:52+08:00",
                "expired": false,
                "url": "http://localhost:5173/s/KDVIn",
                "permission_setting": {
                    "same_group": null,
                    "everyone": "AQ==",
                    "other": null,
                    "anonymous": "AQ==",
                    "group_explicit": {},
                    "user_explicit": {}
                }
            }
        ],
        "pagination": {
            "page": 0,
            "page_size": 50,
            "is_cursor": true,
            "next_token": "eyJpZCI6Im1LTmxTRCJ9"
        }
    },
    "msg": ""
}
```