import { defineConfig } from 'dumi';

export default defineConfig({
  title: '状态管理',
  favicon:
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/favicon.ico',
  logo: 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/favicon.ico',
  outputPath: 'docs-dist',
  history: { type: 'hash' },
  hash: false,
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/yunliang-ding/lyr-store',
    },
  ],
  // more config: https://d.umijs.org/config
});
