const fs = require('fs');
const path = require('path');

// 定义文件路径
const baseConfigPath = path.resolve(__dirname, '../src/config/base.js');

// 读取文件内容
fs.readFile(baseConfigPath, 'utf8', (err, data) => {
    if (err) {
        console.error('读取配置文件失败：', err);
        process.exit(1);
    }

    // 替换地址：测试地址 → 生产地址
    const modifiedContent = data.replace(
        /http:\/\/erp\.yichuhome\.test\//,
        'https://erp.yichuhome.com/'
    );

    // 写入修改后的内容
    fs.writeFile(baseConfigPath, modifiedContent, 'utf8', (err) => {
        if (err) {
            console.error('写入配置文件失败：', err);
            process.exit(1);
        }
        console.log('✅ 已将接口地址替换为生产环境地址');
    });
});