[中文](https://github.com/terwer/siyuan-theme-zhihu/blob/main/README_zh_CN.md)

# Zhihu

![](https://raw.githubusercontent.com/terwer/siyuan-theme-zhihu/main/icon.png)

A siyuan-note theme inspired by zhihu

> ⚠️ WARNING: Current version in the early stage, and the function is not comprehensive yet. Valuable opinions through [issue](https://github.com/terwer/siyuan-theme-zhihu/issues/new) is welcome. 

## Core Features

The theme is inspired by `Zhihu` but not limited to its style. The appearance optimization includes but is not limited
to:

- [X] Font style beautification, using `Open Sans` for English and `LXGW WenKai` for Chinese
- [X] Background color optimization, overall layout and spacing optimization
- [X] Code block beautification, similar to the Mac window style
- [ ] Editor (core optimization point)
  - [X] Spacing optimization
  - [X] HR horizontal line
  - [X] Blockquote
- [ ] Toolbar
- [ ] Tab bar, mimicking Chrome style
- [ ] Document tree
- [ ] Left panel, Right panel, Bottom panel
- [ ] Market
- [ ] Flash card
  - [X] Flash card marker style
  - [X] List business card printing
  - [X] Super block business card printing
- [X] Mobile
- [ ] More features are under continuous development...

<hr/>

👻 Ahem, here are the easter egg functions 👻

- Temporarily turn on eye protection mode

  Open the developer tool, enter the following js code and press Enter, you can temporarily switch to the eye protection mode

  ```js
  document.querySelector("html").setAttribute("data-theme-mode", "green")
  ```

- Permanently turn on eye protection mode

  Note: The current theme is 100% pure css, so the custom mode cannot be switched automatically. If you want to permanently default to the eye protection mode, you can add the above js code to the js fragment.

  Add the following js code to the js fragment to switch to eye protection mode

  ```js
  document.querySelector("html").setAttribute("data-theme-mode", "green")
  ```

  If you need to cancel, disable this js fragment and restart Siyuan.

## Donate

If you approve of this project, invite me to have a cup of coffee, which will encourage me to keep updating and create
more useful tools~

### Wechat

<div>
<img src="https://static-rs-terwer.oss-cn-beijing.aliyuncs.com/donate/wechat.jpg" alt="wechat" style="width:280px;height:375px;" />
</div>

### Alipay

<div>
<img src="https://static-rs-terwer.oss-cn-beijing.aliyuncs.com/donate/alipay.jpg" alt="alipay" style="width:280px;height:375px;" />
</div>