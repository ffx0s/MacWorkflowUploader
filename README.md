# Mac Alfred Workflow 图片上传工具  

从剪贴板获取图片，并上传至<strong>七牛</strong>，并返回上传图片URL，适合写文章或者 Markdown 时图片的快速上传，提高工作效率。  

## 依赖  
工具依赖于 `node` 环境 和 `pngpaste`  
`pngpaste` 使用 `brew install pngpaste` 安装

## 下载&安装
1. 点击下载：<a href="https://ffx0s.github.io/MacWorkflowUploader/Uploader.alfredworkflow">Uploader.alfredworkflow</a>  
2. 双击安装：`Uploader.alfredworkflow`  
3. 安装后打开 Alfred 的 Workflows，左侧栏选择`Uploader`，再在右侧点击此处打开变量配置：  
<img src="http://7u2s0a.com1.z0.glb.clouddn.com/Fuu2GjeiXjy3EgJVh5Lofu6qwlDO" width="300">  
4. 输入七牛相关密钥：
`QINIU_DOMAIN` 域名后面需要加 `/` 斜杆  
<img src="http://7u2s0a.com1.z0.glb.clouddn.com/Fp2lhqsAuQCVhrQ_j7c5PtuHfCLa" width="300"> 

5. 完成配置和安装 

## 使用  
截图后(粘贴板有图片时)，在 `Alfred` 输入 `pic` 命令后回车，等待上传完成，上传成功后，通过 `Ctrl + v` 即可获取上传图片的URL。
