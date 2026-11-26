# 交接文档 · 陈宇萱作品集

给下一个接手的 AI / 人的说明。看完这份就能接着改。

---

## 1. 在哪

| 项目 | 路径 / 地址 |
|---|---|
| 本地文件夹 | `C:\Users\chenyuxuan17\Documents\portfolio` |
| 线上（GitHub Pages） | https://chiyexiao415.github.io/portfolio/ |
| Git 仓库 | https://github.com/chiyexiao415/portfolio （分支 `main`） |
| 私密备份 | `C:\Users\chenyuxuan17\Documents\portfolio-private`（原图、含联系方式的原始简历） |

纯静态站，没有框架、没有构建步骤。改完 `git push` 就发布，GitHub Pages 约 1 分钟重建。

## 2. 怎么跑

- 直接双击 `index.html` 也能看
- 建议起本地服务（图片和字体路径更稳）：在文件夹里执行 `npx serve .` 或任意静态服务器
- 改完先 `node --check script.js`，语法错会让整站白屏

## 3. 文件结构

```
portfolio/
├─ index.html      骨架：启动画面、主菜单、内容弹层、桌宠、放大层
├─ style.css       全部样式，深浅两套主题
├─ script.js       所有文字内容在 DATA 对象里 + 交互逻辑
├─ assets/         简历、游戏截图（已打码）
│  └─ case/        大唐无双案例图（长图、新闻稿、赛程图、线下物料）
├─ README.md
└─ HANDOFF.md      本文件
```

**改内容只动 `script.js` 里的 `DATA`**，每个板块是 `{ en, title, html }`，html 直接写标签。

## 4. 页面与路由

主菜单 6 项：`#profile` `#games` `#quest` `#works` `#skill` `#contact`。
作品分类是 `#officialContent`（CASE 01）、`#creatorWork`（CASE 02）和 `#dataWork`（CASE 03）。CASE 01 下有 `#officialDaily`（日常官号）、`#caseContent`（万国霸业）和 `#caseDouble11`（双十一直播）。这些子页不另占作品分类编号。

页面现状：

- **主界面**：6 个入口，桌前有桌宠向导，每页有不同台词
- **角色档案**：左信息卡（学校/专业/电话/邮箱/毕业/核心优势/简历链接），右教育背景、关于我、个人技能、简历图
- **游戏经历**：7 个品类（ARPG / 竞技对抗 / MMO / FPS / 女性向 / 剧情向 / 其他），表格 + 截图 + 其他玩过 + note
- **经历**：网易互娱 2026.09—2026.12、赢商网 2026.06—2026.09
- **作品**：3 个案例用同款暖色入口和项目卡片。官号页用直角坐标区分内容形式与项目类型，含万国霸业、双十一直播、手游年末资料片 + H5（制作中）、日常官号内容（物料待补）；手机切换为单列。
- **技能树**：内容×AI、营销×数据、达人合作、赛事执行、工具
- **组队邀请**：手机 19066712893、邮箱 2825641638@qq.com、城市广州（**微信不要写在这页**）
- **万国霸业案例**：资料片宣发与潜龙争霸赛同期推进。资料片 11.02 首曝、11.13 上线；赛事 10.20 开赛、11.22 线下总决赛。

## 5. 写内容的规矩（重要）

- **不编数据**。所有数字都来自她给的文档、截图或简历，拿不准就问
- **不要 AI 味**。别写「赋能」「闭环」「不仅仅是…更是…」这类。她明确说过「内容很ai味」
- **用她的原话**。她给过成段文字的地方（教育背景、关于我、兴趣）直接用原文，不要润色
- 简历式排版：左边日期/信息，右边内容；短句、动词开头
- 不写「不走金融了」这类评价性的话

## 6. 隐私规则（已确认过）

- 手机号、邮箱、简历 PDF **可以公开**（求职用）
- **组队邀请页不要放微信**
- 游戏截图里的 UID / 玩家名**必须打码**（世界之外、原神、无畏契约已处理；原图在 `portfolio-private/originals`）
- 不要出现学号

## 7. 技术要点

- 深浅主题：`html[data-theme="dark"|"light"]`，存 localStorage，支持 `?theme=light|dark`；`<head>` 里有内联脚本防闪白
- `?noboot` 跳过启动画面（截图调试用）
- 图片放大：`<a href="原图" data-shot><img></a>`，点击走 `#lightbox`
- 页内跳转：任意元素加 `data-goto="caseContent"`，`viewBody` 里统一拦截
- 长图：`.case-shot.is-scroll` + `.shot-frame`，固定高度，鼠标、键盘和触摸都可在框内滚动；图注「原图 ↗」保留原尺寸链接
- 大图：`assets/previews/` 是页面使用的 WebP 预览；`data-original-src` 是预览失败时的备用地址，`href` 保留原图。更新截图时，预览和原图要一起更新
- 左右配对：`.case-media.is-pair`，同一行两张卡底边对齐；`.case-media.is-narrow` 限宽 800
- 案例页会加 `#view.case-view` 和 `wide` 类，版头比普通页小
- 桌宠台词在 `PET_LINES`，key 跟视图 key 一致，**新增视图记得加一条**

## 8. 发布

```bash
cd "C:/Users/chenyuxuan17/Documents/portfolio"
node --check script.js
git add -A && git commit -m "说明"
git push
gh api repos/chiyexiao415/portfolio/pages/builds/latest --jq .status  # building → built
```

`gh` 已登录（账号 chiyexiao415）。推完大约 1 分钟生效。

**缓存坑**：GitHub Pages 缓存 10 分钟，浏览器也会缓存 `script.js`/`style.css`。用户说「没变化」时，先让ta用 `?v=数字` 打开或 `Ctrl+F5`，别急着重推。

## 9. 图片处理（Windows / PowerShell）

用 `System.Drawing` 做裁剪、拼接、打码，脚本放临时目录，别放进仓库。常用套路：`[System.Drawing.Bitmap]::new(w,h)` + `Graphics.DrawImage`，JPEG 用 `EncoderParameters` 设质量。长图压到宽 1000–1400、质量 84–88，单张控制在 1.5MB 内。

## 10. 待办

1. **手游年末资料片 + H5**：她正在做，上线后单独开案例（最有价值的新素材）
2. **双十一**：现在只有卡片。拿到预热稿、商品图/KV、三个渠道发布截图后可做成小案例
3. **达人 KOC/KOL**：需要建联记录、活动页、数据后台截图
4. **数据运营**：需要清洗前后对比、SOP 模板截图
5. 大唐无双线下的**总决赛新闻稿**还没给，出来后补进案例「赛事与线下」
6. 游戏截图里无畏契约的头像照片要不要处理，一直没定

## 11. 最近改动（2026-11-25）

- 作品页改成按能力分组，卡片封面 + 能力说明
- 万国霸业并成一个完整案例（版本内容 + 赛事与线下），拆掉单独的赛事页
- 补了赛程规则图、内容长图、框架文档、新闻稿、赛程视频、线下物料
- 案例页版头缩小，正文和卡片字号放大；线下物料限宽
- 日期统一按文档：资料片 11.13 上线，赛事 10.20 开赛、11.22 线下总决赛
