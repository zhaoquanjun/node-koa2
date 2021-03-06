
const Koa = require('koa');
const path = require('path');
const content = require('./util/content');
const mimes = require('./util/mimes');

const app = new Koa();

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

// 解析资源类型
// path.extname(url) -> 返回path路径文件扩展名，如果path以 ‘.' 为结尾，将返回 ‘.'，如果无扩展名 又 不以'.'结尾，将返回空值。
function parseMine(url) {
  let extName = path.extname(url);
  extName = extName ? extName.slice(1) : 'unKnow';
  return mimes[extName]
}

app.use( async ( ctx ) => {
  // 静态资源目录在本地的绝对路径
  let fullStaticPath = path.join(__dirname,staticPath)

  // 获取静态资源内容，有可能是文件内容、目录、或者404
  let _content = await content( ctx, fullStaticPath )
  
  // 解析请求内容的类型
  let _mime = parseMine(ctx.url);

  // 如果有对应的文件类型，就配置上下文类型
  if(_mime) {
    ctx.type = _mime
  }

  // 输出静态资源内容
  if(_mime && _mime.indexOf('image/') >= 0 ) {
    // 如果是图片，就用node原生res，输出二进制数据    ----   {'Content-Type':'text/html;charset=utf-8'} 编码utf-8
    ctx.res.writeHead(200);
    ctx.res.write(_content, 'binary');
    ctx.res.end();
  } else {
    // 如果不是就输出其他文本
    ctx.body = _content
  }
})

app.listen(3007, () => {
  console.log('[demo7] 静态资源加载（原生node） is running at port 3007!')
})