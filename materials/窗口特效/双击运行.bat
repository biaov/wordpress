@echo off
chcp 65001

set arr=a,4,5,6,7,8,9,B
for %%r in (%arr%) do call :hello %%r
pause

goto :eof

:hello
start cmd /k "cd / && color %1 && title 正在删除资料中... && dir /s"
goto :eof