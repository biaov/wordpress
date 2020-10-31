/**
 * @file ftp 配置文件
 * @author biaov<biaov@qq.com>
 * @date 2020-10-31 11:20
 */
const { SiteFtp } = require("site-ftp"); // 引入ftp模块
SiteFtp.connect({
  host: "", // 需要上传的IP地址
  port: 21, // 开放的端口号，ftp 默认端口号为 21
  username: "", // ftp 账号
  password: "", // ftp 密码
  type: "ftp",
  from: ["dist/**"], // 你要上传的文件路径
  to: "/wordpress/", // 需要上传到服务器的文件路径
  rm: true // 允许 rm 操作
});
