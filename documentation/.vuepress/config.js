import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'AWS CDK App Template',
  description: 'AWS CDK App Template',
  dest: './docs',
  base: '/aws-cdk-app-template/', // for your github pages repository name
  locales: {
    // for i18n see https://v2.vuepress.vuejs.org/guide/i18n.html#site-level-i18n-config
    '/': {
      lang: 'en-US',
      title: 'AWS CDK App Template',
      description: 'AWS CDK App Template',
    },
    '/ja/': {
      lang: 'ja-JP',
      title: 'AWS CDK App Template',
      description: 'AWS CDK App Template',
    },
  },
  // see https://v2.vuepress.vuejs.org/reference/config.html#theme
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/ja/': {
        selectLanguageName: '日本語',
      },
    },
    navbar: [{ text: 'Home', link: '/' }],
    repo: 'https://github.com/yoshitaka-motomura/aws-cdk-app-template', // for your github repository url
    sidebar: [],
  }),
})
