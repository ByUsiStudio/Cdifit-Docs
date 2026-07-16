# 文件管理

Cdifit 提供完整的文件管理 API，支持文件的增删改查、上传下载、权限管理等操作。

## URI 格式

Cloudreve V4 使用 URI 来标识文件和目录，格式为：

```
cloudreve://<user>/<path>
```

例如：
- `cloudreve://my/文档/报告.pdf` - 当前用户的文档目录下的报告.pdf
- `cloudreve://trash/<uuid>` - 回收站中的文件

## 搜索条件

在 URI 中可以添加搜索条件：

| 参数 | 说明 |
|-----|------|
| `name` | 文件名匹配（支持通配符） |
| `case_folding` | 是否忽略大小写 |
| `size_gte` | 文件大小下限 |
| `size_lte` | 文件大小上限 |

示例：
```
cloudreve://my/?name=.docx&size_gte=1048576&size_lte=1047527424
```