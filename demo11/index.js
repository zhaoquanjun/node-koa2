const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))


app.use( async ( ctx ) => {
  let title = 'koa2 ejs'
  await ctx.render('index', {
    title
  })
})


app.listen(3011, () => {
  console.log('[demo11] koa2 ejs is running at port 3011 !')
})