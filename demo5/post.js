
// 对于POST请求的处理，koa2没有封装获取参数的方法，需要通过解析上下文context中的原生node.js请求对象req，将POST表单数据解析成query string（例如：a=1&b=2&c=3），再将query string 解析成JSON格式（例如：{"a":"1", "b":"2", "c":"3"}）

// 注意：ctx.request是context经过封装的请求对象，ctx.req是context提供的node.js原生HTTP请求对象，同理ctx.response是context经过封装的响应对象，ctx.res是context提供的node.js原生HTTP请求对象。


// ---------------- 数据处理 -----------------------

// 解析上下文中node原生请求的POST参数
function parsePostData(ctx) {
  console.log(ctx.url)
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener('data', (data) => {
        postdata += data
      })
      ctx.req.addListener('end', function() {
        let parseData = parseQueryStr(postdata)
        resolve(parseData)
      })
    } catch (err) {
      reject(err)
    }
  })
}


// 将POST请求参数字符解析成JSON
// Object.entries  - > 对象的可枚举属性转化为数组
// decodeURIComponent可对encodeURIComponent函数编码的URI进行解码
function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split('&')
  //console.log(queryStrList)
  for(let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=');
    console.log(itemList[0],itemList[1])
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}


// ---------------------- 获取请求数据 -------------------------------------

const Koa = require('koa');
const app = new Koa()

app.use(async(ctx) => {
  if(ctx.url === '/' && ctx.method === 'GET') {
    // GET请求的时候返回表单页面
    let html =`
    <h2>Koa2 requert post demo</h2>
    <form method="POST" action='/'>
      <label>userName</label>
      <input name="username" /></br>
      <label>userPassword</label>
      <input name="userPassword" type='password' /></br>
      <label>userEmail</label>
      <input name="useremail" /></br>
      <button type='submit'>submit</button>
    </form>
    `
    ctx.body = html;
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    // 当请求是POST的时候，解析表单中的数据并且显示出来
    let postData = await parsePostData(ctx)
    ctx.body = postData
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

app.listen(3005, () => {
  console.log('[demo5] request post is starting at port 3005')
})