import { defineConfig } from 'dumi';

export default defineConfig({
  title: '状态管理',
  favicon:
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/favicon.ico',
  logo: 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/favicon.ico',
  outputPath: 'docs-dist',
  history: { type: 'hash' },
  hash: false,
  theme: {
    '@c-primary': '#165dff',
  },
  styles: [
    `
    div,
    span,
    td,
    th,
    a,
    button,
    p,
    label {
      font-size: 12px;
      font-weight: 500;
    }

    h2 {
      font-size: 18px !important;
    }

    li,
    input,
    label {
      font-weight: 500 !important;
      font-size: 12px !important;
    }
    h2{
      font-size: 18px !important;
    }
    .__dumi-default-alert{
      font-size: 12px !important;
    }
    .__dumi-default-menu-list
      > li
      > a {
        font-size: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .__dumi-default-menu-list
      > a
      > span {
        font-size: 12px;
      }
  `,
  ],
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/yunliang-ding/lyr-store',
    },
  ],
  // more config: https://d.umijs.org/config
});
