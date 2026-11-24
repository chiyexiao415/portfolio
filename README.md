# 陈宇萱 · PLAYER FILE

游戏行业求职用的作品集网站，纯静态 HTML / CSS / JS，无框架、无构建步骤。

## 文件结构

```
portfolio/
├─ index.html      页面骨架（启动画面、主菜单、内容弹层、图片放大层）
├─ style.css       全部样式，深浅两套主题在文件顶部集中定义
├─ script.js       所有文字内容在 DATA 对象里，改内容只需要改这里
└─ assets/         简历图片、游戏截图等
```

## 怎么打开

- 直接双击 `index.html` 就能看，不需要服务器。
- 或者在文件夹里起一个本地服务（图片和字体加载更稳）：
  ```
  npx serve .
  ```

## 页面结构

- 主界面：6 个入口（角色档案 / 游戏经历 / 经历 / 作品 / 技能树 / 组队邀请）
- 每个入口点击后打开整页内容，URL 带 hash，例如 `#games`、`#profile`，可以直接分享到某一页
- 右上角按钮切换深浅主题，选择存在 localStorage
- 网址加 `?noboot` 可跳过启动动画，加 `?theme=light` / `?theme=dark` 可指定主题

## 改内容

打开 `script.js`，找到 `DATA`，每个板块的 HTML 都在对应对象里（`profile` / `games` / `quest` / `works` / `skill` / `contact`）。图片放进 `assets/`，文件名和代码里写的一致即可。

## 部署到线上（GitHub Pages）

1. 在 GitHub 新建一个仓库，把 `portfolio` 里的文件传到仓库根目录
2. 仓库 Settings → Pages → Source 选 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`
3. 等一两分钟，访问 `https://<用户名>.github.io/<仓库名>/`

仓库名如果是 `<用户名>.github.io`，网址就是 `https://<用户名>.github.io/`。

## 交接说明

这是纯静态站点，不依赖任何账号或后端。换人/换工具继续改，只需要这三个文件和 `assets/` 文件夹。
