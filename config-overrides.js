const { override, fixBabelImports,addWebpackAlias} = require('customize-cra');
const path = require('path')
module.exports = override(
 // 在这里使用 customize-cra 里的一些函数来修改配置
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css' //或者true, true代表运用less
  }),
  addWebpackAlias({
      ['@']: path.resolve(__dirname,"src")
  })
);
