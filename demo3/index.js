
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

const Router = require('koa-router');

let home = new Router();
// 子路由1
home.get('/', async(ctx) => {
  let html = `
  <ul>
    <li><a href="/page/home">/page/home</a></li>
    <li><a href="/page/404">/page/404</a></li>
  </ul>
  `
  ctx.body = html;
})

// 子路由2
let page = new Router();
// 404
page.get('/404',async(ctx) => {
  ctx.body = '<h1>404 page!</h1>'
  // home
}).get('/home', async(ctx) => {
  ctx.body = '<h1>home page!</h1>'
})

// 装载所有子路由
let router = new Router();
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())


// 加载中间件
app.use(router.routes()).use(router.allowedMethods())


app.listen(3003, () => {
  console.log('[demo3] 路由中间件 is starting at port 3003')
})








