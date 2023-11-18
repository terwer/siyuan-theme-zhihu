[English](https://github.com/terwer/siyuan-theme-zhihu/blob/main/README.md)

# 知乎主题

一款知乎风格的思源笔记主题

![](https://raw.githubusercontent.com/terwer/siyuan-theme-zhihu/main/icon.png)

> ⚠️ 特别提醒: 此主题当前为前期可用版本，功能上尚不全面，欢迎 [新建issue](https://github.com/terwer/siyuan-theme-zhihu/issues/new) 提出宝贵意见。 。

## 核心特色

主题灵感源自于知乎但不限于知乎风格，外观优化包括不限于：

- [X] 字体样式美化，英文以 `Open Sans` 为主， 中文以 `落霞孤鹜` 为主
- [X] 背景色优化，整体布局、间距优化
- [X] 代码块美化，类似 `Mac` 窗口风格
- [ ] 编辑器（核心优化点）
  - [X] 间距优化
  - [X] HR 水平线
  - [X] 引述
- [ ] 工具栏
- [ ] 标签栏，模仿 Chrome 风格
- [ ] 文档树
- [ ] 左侧面板、右侧面板、底部面板
- [ ] 集市
- [ ] 闪卡
  - [X] 闪卡标记样式
  - [X] 列表制卡
  - [X] 超级块制卡
- [X] 移动端
- [ ] 更多特性持续开发中...

<hr/>

👻 咳咳，以下是彩蛋功能 👻

- 临时开启护眼模式

  打开开发者工具，输入下列js代码回车，可以临时切换到护眼模式

  ```js
  document.querySelector("html").setAttribute("data-theme-mode", "green")
  ```

- 永久开启护眼模式

  注：目前主题 100% 纯 css 构成，因此自定义模式不能自动切换。如果想永久默认是护眼模式，可把上面的 js 代码加入 js 片段即可。

  把下列 js 代码加入 js 片段，可以切换到护眼模式

  ```js
  document.querySelector("html").setAttribute("data-theme-mode", "green")
  ```

  如需取消，禁用此 js 片段，重启思源即可。

## 捐赠

如果您认可这个项目，请我喝一杯咖啡吧，这将鼓励我持续更新，并创作出更多好用的工具~

### 微信

<div>
<img src="https://static-rs-terwer.oss-cn-beijing.aliyuncs.com/donate/wechat.jpg" alt="wechat" style="width:280px;height:375px;" />
</div>

### 支付宝

<div>
<img src="https://static-rs-terwer.oss-cn-beijing.aliyuncs.com/donate/alipay.jpg" alt="alipay" style="width:280px;height:375px;" />
</div>
