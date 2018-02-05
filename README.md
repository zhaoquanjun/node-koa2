## Koa 
Koa 是由 Express 原班人马打造的更小、更健壮、更富有表现力的 node 后台服务框架

## demo 结构
  - demo1 认知 Koa
  - demo2 Koa 原生实现路由
  - demo3 Koa-router 路由中间件
  - demo4 请求数据获取(GET)
  > 在koa中，获取GET请求数据源头是koa中request对象中的query方法或querystring方法，query返回是格式化好的参数对象，querystring返回的是请求字符串，由于ctx对request的API有直接引用的方式，所以获取GET请求数据有两个途径。
  - 1. 是从上下文中直接获取
        - 请求对象ctx.query，返回如 { a:1, b:2 }
        - 请求字符串 ctx.querystring，返回如 a=1&b=2
  - 2. 是从上下文的request对象中获取
        - 请求对象ctx.request.query，返回如 { a:1, b:2 }
        - 请求字符串 ctx.request.querystring，返回如 a=1&b=2

  
  