const fs = require('fs')
const path = require('path')

// 写入 log
function writeLog(writeStream, log) {
  writeStream.write(log + '\n')
}

// 创建 writeStream 对象
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName)
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: 'a',
  })
  return writeStream
}

// 写 访问日志
const accessWriteStream = createWriteStream('access.log')
function access(log) {
  writeLog(accessWriteStream, log)
}

module.exports = { access }
