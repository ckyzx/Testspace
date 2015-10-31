<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
</head>
<body>
<p style="color:orangered;">
    注意：应设置 ckfinder 的配置文件 config.php，添加权限检查操作，增加上传安全。
    在 config.php 的 CheckAuthentication()函数中做出判断。
</p>
<?php

require_once "ckeditor/ckeditor.php";
require_once "ckfinder/ckfinder.php";
$_SESSION["UploadURL"]="/Test/ckeditorAndCKFinder/Upload/";
$CKEditor = new CKEditor();
$CKEditor->returnOutput = true; //设置输出可用变量的情况
$CKEditor->basePath = '/Test/ckeditorAndCKFinder/ckeditor/';//设置路径

CKFinder::SetupCKEditor($CKEditor, '/Test/ckeditorAndCKFinder/ckfinder/') ;//注意这里是相对路径，相对于根目录，不能用绝对路径
$contentarea = $CKEditor->editor("pcontent",'test'); //生成一个以name为content的textarea
echo $contentarea;

?>
</body>
</html>