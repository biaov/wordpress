const { resolve } = require('path') // 导入路径模块
/**
 * 添加CSS预编译器规则
 * @param {Object} rule - 规则
 * @returns {Void}
 */
const addStyleResource = rule => {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve(__dirname, './styles/variable.less') // 路径为你的文件路径
      ]
    })
}
module.exports = { addStyleResource }
