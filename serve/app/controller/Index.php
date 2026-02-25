<?php
namespace app\controller;
use think\Response;
use think\facade\View;
class Index{
    public function index(){
        // 定义静态HTML文件的路径
        $htmlPath = public_path() . 'index.html';

        // 检查文件是否存在，避免报错
        if (!file_exists($htmlPath)) {
            // 文件不存在时返回友好提示
            return Response::create('首页文件不存在，请检查路径：' . $htmlPath, 'html', 404);
        }

        // 读取HTML文件内容
        $htmlContent = file_get_contents($htmlPath);

        // 输出HTML内容，设置正确的响应头
        return Response::create($htmlContent, 'html', 200);

    }
}