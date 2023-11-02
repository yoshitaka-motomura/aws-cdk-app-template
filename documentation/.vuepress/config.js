import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'ja-JP',
  title: 'AWS CDK App Template',
  description: 'AWS CDK App Template',
  dest: './docs',
  base: '/aws-cdk-app-template/', // for github pages repository name
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api/' },
    ],
    repo: 'https://github.com/yoshitaka-motomura/aws-cdk-app-template',
    sidebar: [
      {
        text: 'about',
        link: '/about/',
      },
    ],
  }),
})
