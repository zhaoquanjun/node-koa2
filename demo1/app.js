// 引入koa2，相比于koa1，他是一个class，所以要是大写的
const Koa = require('koa');

// 创建一个koa对象表示 web app 本身
const app = new Koa();

app.use(async(ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h2>This is a test for koa2 with async</h2>'
})

app.listen(3001);
console.log('demo1 start at port 3001');