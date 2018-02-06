const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();

// 静态资源相对于入口文件index.js的路径
const staticPath = './static';

app.use( static(
  path.join(__dirname, staticPath)
))

app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})

app.listen(3008, () => {
  console.log('[demo8] is running at port 3008!')
})