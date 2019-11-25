const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec
const qiniu = require('qiniu')

class Uploader {
  constructor (ak, sk, bucket) {
    this.mac = new qiniu.auth.digest.Mac(ak, sk)
    this.putPolicy = new qiniu.rs.PutPolicy({
      scope: bucket
    })

    this.config = new qiniu.conf.Config()
    this.formUploader = new qiniu.form_up.FormUploader(this.config)
    this.putExtra = new qiniu.form_up.PutExtra()
  }
  getToken () {
    return this.putPolicy.uploadToken(this.mac)
  }
  upload (localFile) {
    const self = this
    const token = self.getToken()

    return new Promise((resolve, reject) => {
      self.formUploader.putFile(token, null, localFile, self.putExtra, function(respErr,
        respBody, respInfo) {
        if (respErr) {
          reject(respErr)
        }
  
        if (respInfo.statusCode == 200) {
          resolve(respBody)
        } else {
          reject(new Error('上传出错：' + respInfo.statusCode))
          console.warn(respInfo.statusCode)
          console.warn(respBody)
        }
      })
    })
  }
}

function notification (title, content) {
  console.log(JSON.stringify({"alfredworkflow": {"variables": {title, content}}}))
}

function getClipboardImage(callback) {
  const imagePath = path.join(__dirname, './temp.png')

  exec(`/usr/local/bin/pngpaste temp.png`, function(err, stdout, stderr) {
    if (err || stderr) return callback(err || new Error(stderr))
    callback(null, imagePath)
  })
}

function copy (text) {
  exec(`echo ${text} | pbcopy`)
}

function uploadSuccess ({ key }) {
  const url = process.env.QINIU_DOMAIN + key
  notification('上传成功', url)
  copy(url)
}

function uploadError (err) {
  notification('上传失败', err.message)
}

const uploader = new Uploader(
  process.env.QINIU_ACCESS_KEY,
  process.env.QINIU_SECRET_KEY,
  process.env.QINIU_BUCKET
)

const filePath = process.argv[2]

if (filePath) {
  if (fs.statSync(filePath).isFile()) {
    uploader.upload(filePath)
      .then(uploadSuccess)
      .catch(uploadError)
  } else {
    notification('路径错误：', filePath)
  }
} else {
  getClipboardImage((err, imagePath) => {
    if (err) {
      notification('获取图片失败', err.message)
      throw err
    }

    uploader.upload(imagePath)
      .then(uploadSuccess)
      .catch(uploadError)
  })
}

