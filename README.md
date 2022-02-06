# 南京信息工程大学 每日健康申报

这是一个油猴脚本。以后会有 Node 版本的，稍安勿躁。

你可以用如下方式进行开发：

```bash
yarn dev # 启动开发服务器
```

开发完后，使用如下方式构建：

```bash
yarn build
```

把 dist 里的 bundle.user.js 拖到浏览器里面，如果你的浏览器已经安装了油猴插件，那么浏览器接下来会打开一个安装界面，安装即可。如果没有安装油猴插件，请先安装油猴插件（GreaseMonkey / TamperMonkey）。

如果懒得安装油猴插件，也可以打开[打卡页面](http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/*default/index.do#/)，按 F12，选择 Console（控制台），然后把 bundle.user.js 里的东西**全部**复制，粘贴到控制台并回车。

使用该脚本前，请先确保你已填写过一次健康申报，因为签到内容需要根据最近一次签到生成。
