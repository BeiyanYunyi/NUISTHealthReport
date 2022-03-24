# 南京信息工程大学 每日健康申报

这是一个浏览器脚本。

你可以用如下方式进行开发：

```bash
pnpm dev # 启动开发服务器
```

## 使用方法

使用如下方式构建：

```bash
pnpm i
pnpm build
```

使用该脚本前，请先确保你已填写过一次健康申报，因为签到内容需要根据最近一次签到生成。

打开[打卡页面](http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/*default/index.do#/)，按 F12，选择 Console（控制台），然后把 [bundle.user.js](https://github.com/lixiang810/NUISTHealthReport/releases/download/1.0.0/bundle.user.js) 里的东西**全部**复制，粘贴到控制台并回车。这以后先是会输出这么一段话：

> 官吏和常备军是资产阶级社会身上的“寄生物”，是使这个社会分裂的内部矛盾所产生的寄生物，而且正是“堵塞”生命的毛孔的寄生物。  
> ——列宁《国家与革命》

然后会输出一些运行过程中获得的数据，最后会输出“签到完成”。刷新页面就会发现，你本月的签到已全部完成。这个脚本相当于给每天设置了一个“正常”的默认值，如果有特殊情况，你可以在每天修改当天的记录，因此这个脚本与防疫不违背，符合我“免除不正当的苦难”的初衷。

这个脚本运行一次就能签完一个月，每个月初重复运行一次即可。

## 目前可用的类似项目推荐

[此项目](https://github.com/InfinityWei/NUIST_HealthyReport_NEW)是每日自动签到，对安全性有顾虑的同学可以一试。
