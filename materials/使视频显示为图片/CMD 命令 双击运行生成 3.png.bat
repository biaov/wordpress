copy /b 1.png + 2.zip 3.png

@REM 还原方法 更改后缀名为 zip，7-zip 打开压缩包到 zip
@REM 命令还原 假设知道图片大小 dir 1.png  // 90014
@REM copy /b 3.png+,,+90014 recovered.zip // 待定
@REM copy /b 3.png+,,+90014 recovered.png // 待定
