[中文](https://github.com/terwer/zhihu-theme/blob/main/README_zh_CN.md)

# zhihu-theme

A siyuan-note theme inspired by zhihu

![](https://raw.githubusercontent.com/terwer/zhihu-theme/main/icon.png)

> ⚠️ WARNING: Current version in the early stage, and the function is not comprehensive yet. Valuable opinions through [issue](https://github.com/terwer/zhihu-theme/issues/new) is welcome. Please refer to [Core Features](#core-features) for this version's characteristics.

## Core Features

The theme is inspired by `Zhihu` but not limited to its style. The appearance optimization includes but is not limited
to:

- [X] Font style beautification, using `Open Sans` for English and `LXGW WenKai` for Chinese
- [ ] Background color optimization, overall layout and spacing optimization
- [ ] Code block beautification, similar to the Mac window style
- [ ] Other features is on the way...
- [ ] Editor (core optimization point)
- [ ] Toolbar
- [ ] Tab bar, mimicking Chrome style
- [ ] Document tree
- [ ] Left panel, Right panel, Bottom panel
- [ ] Market
- [ ] Flash card
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