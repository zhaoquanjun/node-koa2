const Koa = require('koa');
const app = new Koa();

// koa-bodyparser中间件, 用来解析POST表单里的数据 -> 对应于demo5中的原生node解析
const bodyParser = require('koa-bodyparser'); 


app.use(bodyParser())

app.use(async(ctx) => {
  if(ctx.url === '/' &&ctx.method === 'GET') {
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  } else if ( ctx.url === '/' && ctx.method === 'POST' ) {
    // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
    let postData = ctx.request.body
    ctx.body = postData
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

app.listen(3006, () => {
  console.log('[demo6] is running at port 3006!')
})