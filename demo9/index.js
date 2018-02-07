
const Koa = require('koa');
const app = new Koa();

app.use( async (ctx) => {
  console.log(ctx.url)
  if(ctx.url === '/') {
    ctx.cookies.set(
      'ptcid',
      'Carlton092312312',
      {
        domain: 'localhost', // 写 cookie 所在的域名
        path: '/', // 写 cookie 所在的路径
        maxAge: 10 * 60 * 1000, // cookie 有效时长
        expires: new Date('2017-02-15'), // cookie 失效时间
        httpOnly: false, // 是否只用于http请求
        overwrite: false, // 是否允许重新
      }
    )
    ctx.body= 'cookie is ready'
  } else {
    ctx.body = 'cookie has not been ready yet !'
  }
})

app.listen(3009, () => {
  console.log('[demo9] cookie is running at port 3009 !')
})