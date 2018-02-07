const inspect = require('util').inspect;
const path = require('path');
const fs = require('fs');
const Busboy = require('busboy');

// req 为 node 原生请求
const busboy = new Busboy({headers: req.headers})


// 监听文件解析事件
busboy.on('file', function(fieldname, file, filename, encoding, mimetype) { 
  console.log(`File [${fileldname}]: filename: ${filename}`)

  // 文件保存到特定的路径
  file.pipe(fs.createWriteStream('./upload'))

  // 开始解析文件流
  file.on('data', function(data) {
    console.log(`FILE [${fieldname}] got ${$data} bytes`)
  })

  // 解析文件结束
  file.on('end', function() {
    console.log(`File [${fieldname}] finished`)
  })
})

busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
  console.log(`Field [${fieldname}]: value: ${inspect(val)}`)
})

// 监听结束事件
busboy.on('finish', function() {
  console.log('Done parsing form !')
  res.writeHead(303, {Connection: 'close', Location: '/'})
  res.end()
} )

erq.pipe(busboy)