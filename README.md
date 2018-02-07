## Koa 
Koa 是由 Express 原班人马打造的更小、更健壮、更富有表现力的 node 后台服务框架

## demo 结构
  - demo1 认知 Koa
  - demo2 Koa 原生实现路由
  - demo3 Koa-router 路由中间件
  - demo4 请求数据获取(GET) [query || querystring]
  > 在koa中，获取GET请求数据源头是koa中request对象中的query方法或querystring方法，query返回是格式化好的参数对象，querystring返回的是请求字符串，由于ctx对request的API有直接引用的方式，所以获取GET请求数据有两个途径。
  - 1. 是从上下文中直接获取
        - 请求对象ctx.query，返回如 { a:1, b:2 }
        - 请求字符串 ctx.querystring，返回如 a=1&b=2
  - 2. 是从上下文的request对象中获取
        - 请求对象ctx.request.query，返回如 { a:1, b:2 }
        - 请求字符串 ctx.request.querystring，返回如 a=1&b=2
  - demo5 请求参数获取（POST）
  - demo6 koa-bodyparser 中间件实现 POST 请求对于 form 表单数据的解析 -> JSON 格式
  - demo7 原生koa2实现静态资源服务器
  <pre>
  - 整个结构
      ├── static # 静态资源目录
      │   ├── css/
      │   ├── image/
      │   ├── js/
      │   └── index.html
      ├── util # 工具代码
      │   ├── content.js # 读取请求内容
      │   ├── dir.js # 读取目录内容
      │   ├── file.js # 读取文件内容
      │   ├── mimes.js # 文件类型列表
      │   └── walk.js # 遍历目录内容
      └── index.js # 启动入口文件
  </pre>
  - demo8 利用 koa-static 中间件实现静态资源加载 （结构同于demo7）
  - demo9 koa2 使用 cookie
  > koa提供了从上下文直接读取、写入cookie的方法;  |  koa2 中操作的cookies是使用了npm的cookies模块,所以在读写cookie的使用参数与该模块的使用一致。
      1. ctx.cookies.get(name, [options]) 读取上下文请求中的cookie
      2.ctx.cookies.set(name, value, [options]) 在上下文中写入cookie
  - demo10 koa2 实现 session （没有数据库支持，没能完成测试）
  > koa2原生功能只提供了cookie的操作，但是没有提供session操作。session就只用自己实现或者通过第三方中间件实现。
  > 如果session数据量很小，可以直接存在内存中
  > 如果session数据量很大，则需要存储介质存放session数据
  - demo11 koa2加载模板引擎
  - demo12 busboy 模块（busboy 模块是用来解析POST请求，node原生req中的文件流）


  

  
  