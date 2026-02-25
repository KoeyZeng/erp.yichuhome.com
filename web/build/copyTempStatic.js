require('shelljs/global')

// 将打包后的文件复制到 php server 资源目录

// 强制递归删除`/server/public/admin/目录`
rm('-rf', '../serve/public/static')
rm('-rf', '../serve/public/index.html')
rm('-rf', '../serve/public/favicon.ico')
// 复制” server/public/admin“ 文件夹下的内容
cp('-R', './dist/static', '../serve/public/static')
cp('-R', './dist/index.html', '../serve/public/index.html')
cp('-R', './dist/favicon.ico', '../serve/public/favicon.ico')
