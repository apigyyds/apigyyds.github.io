// 配置
window.Config = {

  // 站点名
  SiteName: 'StarCraft监控站',

  // 站点链接
  SiteUrl: '',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm791663591-5ae066e87dbab3c7e6986259',
    'm791664557-7254aef93d18834260781f41',
    'm791666074-60a3d06849ebd91b77f6c950',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 导航栏菜单
  Navi: [
    {
      text: '博客',
      url: 'http://zjaapig.orgs.ml/'
    },
//    {
//      text: 'GitHub',
//      url: 'https://github.com/yb/uptime-status'
//    }
  ]
};
