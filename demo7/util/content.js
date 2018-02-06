

const path = require('path');
const fs = require('fs');

// 封装读取目录内容方法
const dir = require('./dir');

// 封装读取文件内容的方法
const file = require('./file');


/**
 * 获取静态资源内容
 * @param {object} ctx koa 上下文
 * @param {string} 静态资源目录在本地的绝对路径
 * @return {string} 请求获取到的本地内容
 * 
 */

async function content(ctx, fullStatucPath) {
  // 封装请求资源的完绝路径
  let reqPath = path.join(fullStatucPath,ctx.url);

  // 判断请求路径是否是存在目录或者文件  ->  fs.existsSync(url)异步   fs.exists(url)同步
  let exist = fs.existsSync(reqPath)

  // 返回请求内容，默认是空（''）
  let content = '';

  if(!exist) {
    // 如果请求路径不存在，返回404
    content = '404 Not Found! o(╯□╰)o！'
  } else {
    // 判断访问地址是文件夹还是文件  -> 返回一个stat数组对象
    let stat = fs.statSync(reqPath); 

    if(stat.isDirectory()) { // stat.isDirectory() -> 判断是不是文件夹（目录） || stat.isFile()  ->  判断是不是文件
      // 如果是目录（文件夹），则读取目录内容
      content = dir(ctx.url, reqPath)
    } else {
      // 如果请求是文件，则读取文件内容
      content = await file(reqPath)
    }
  }
  return content
}

module.exports = content