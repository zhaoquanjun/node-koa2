const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
  let url = ctx.url
  // 从上下文的request对象中获取
  let request = ctx.request;
  let req_query = request.query;
  let req_querystring = request.querystring

  // 从上下文直接获取
  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring


  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

app.listen(3004, () => {
  console.log('[demo4] get 获取数据 is starting at port 3004')
})