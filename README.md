# http-logger-cli
a http logger cli for easy debugging | 用于调试的 http 请求日志服务

## usage | 使用 

```
npx http-logger-cli

// or

npm i http-logger-cli -g
http-logger-cli
```

default port 3000, to change port use ENV | 默认 3000 端口服务，修改端口使用环境变量

```
PORT=3001 http-logger-cli 

// or 

cross-env PORT=3001 http-logger-cli 
```

## mock 

default return json `{}`, to mock api, just put files with extension `json/txt/html` to relative path under `CWD`

默认返回 json `{}`，要 mock 接口的话只需将 `json/txt/html` 文件放到 `CWD` 下的对应目录即可

```
// example|示例

CWD/api/info.json => /api/info
```