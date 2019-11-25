# Mac Alfred Workflow 图片/文件上传工具  

通过截图工具截图，将图片上传至<strong>七牛</strong>，返回图片URL。

## 依赖  
工具依赖于 `node` 环境 和 `pngpaste`  
`pngpaste` 使用 `brew install pngpaste` 安装

## 下载&安装
1. 点击下载：<a href="https://ffx0s.github.io/MacWorkflowUploader/Uploader.alfredworkflow">Uploader.alfredworkflow</a>  
2. 双击安装：`Uploader.alfredworkflow`  
3. 安装后打开 Alfred 的 Workflows，左侧栏选择`Uploader`，再在右侧点击此处打开变量配置：  
<img src="http://static.webfed.cn/Fuu2GjeiXjy3EgJVh5Lofu6qwlDO" width="300">  
4. 输入七牛相关密钥：
`QINIU_DOMAIN` 域名后面需要加 `/` 斜杆  
<img src="http://static.webfed.cn/Fp2lhqsAuQCVhrQ_j7c5PtuHfCLa" width="300"> 

5. 完成配置和安装 

## 使用 
两种上传方式： 
1. 截图后，在 `Alfred` 输入 `pic` 命令后回车，等待上传完成。
2. 在 `Alfred` 输入 `pic` 命令后，填入文件路径，等待上传完成。  

上传成功后，通过 `ctrl + v` 即可获取上传图片/文件的URL。

