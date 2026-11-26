/* ============ 作品集内容 ============ */
const DATA = {
  profile: {
    en: "CHARACTER",
    title: "角色档案",
    html: `
      <div class="resume-layout">
        <aside class="resume-side">
          <h3 class="resume-name">陈宇萱</h3>
          <p class="resume-tagline">2024 级 · 金融工程 / 内容营销</p>
          <div class="resume-facts">
            <div><span>学校</span><b>广东工业大学</b></div>
            <div><span>专业</span><b>金融工程</b></div>
            <div><span>电话</span><b>19066712893</b></div>
            <div><span>邮箱</span><b>2825641638@qq.com</b></div>
            <div><span>毕业</span><b>2028.06</b></div>
          </div>
          <div class="resume-strength"><b>核心优势</b>内容营销、活动策划、数据运营、AIGC 创作</div>
          <a class="resume-link" href="assets/resume.pdf" target="_blank" rel="noopener noreferrer">查看完整简历 PDF →</a>
        </aside>

        <div class="resume-main">
          <section class="resume-sec">
            <header class="resume-sec-head"><h3>教育背景</h3><em>EDUCATION</em></header>
            <div class="resume-item">
              <div class="resume-date">2024.09 — 2028.06</div>
              <div>
                <h4>广东工业大学 · 金融工程 · 本科</h4>
                <p>主修计量经济学、金融数据分析、量化投资、风险管理；具备数据复盘分析能力，可迁移至内容、活动数据分析。</p>
                <p>技能：MATLAB、Python、Excel；CET-6（524），计算机二级。</p>
              </div>
            </div>
          </section>

          <section class="resume-sec">
            <header class="resume-sec-head"><h3>关于我</h3><em>ABOUT</em></header>
            <div class="resume-item">
              <div class="resume-date">兴趣</div>
              <div>
                <h4>玩了十年游戏，也一直在做内容</h4>
                <p>深度游戏爱好者，覆盖 PC / 手游 / 主机，熟悉 MMO、竞技、剧情类游戏。<strong>独立运营抖音 cos 账号</strong>，全流程自主产出内容，<strong>累计曝光 5w+，点赞收藏 5k+</strong>。</p>
                <p>熟悉 B 站、抖音、小红书平台调性，对内容热点、用户反馈感知敏锐，擅长把爱好转化为落地内容。</p>
              </div>
            </div>
          </section>

          <section class="resume-sec">
            <header class="resume-sec-head"><h3>个人技能</h3><em>SKILLS</em></header>
            <div class="resume-item">
              <div class="resume-date">能力</div>
              <div>
                <ul class="resume-list">
                  <li><b>内容营销：</b>选题、预热稿、商品图与 KV，官网、公众号、网易大神、抖音多平台发布。</li>
                  <li><b>达人合作：</b>游戏直播博主、coser 建联，参与 KOC 活动框架和激励机制调整。</li>
                  <li><b>数据运营：</b>多源数据清洗、判定口径沉淀成 SOP，会用 Excel 模板和脚本处理重复工作。</li>
                  <li><b>工具：</b>Claude、ChatGPT、Kimi、Codex、豆包、即梦、剪映、Python、MATLAB、Excel。</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="resume-sec">
            <header class="resume-sec-head"><h3>简历</h3><em>RESUME</em></header>
            <a class="resume-figure" href="assets/resume.pdf" target="_blank" rel="noopener noreferrer">
              <img src="assets/previews/resume.webp" data-original-src="assets/resume.png" alt="陈宇萱简历" width="1200" height="1698" loading="lazy" decoding="async" />
            </a>
            <p class="resume-caption">点击图片可查看原始 PDF，也可以 <a href="assets/resume.pdf" download="陈宇萱-简历.pdf">下载简历</a></p>
          </section>
        </div>
      </div>
    `,
  },

  games: {
    en: "GAME EXPERIENCE",
    title: "游戏经历",
    html: `
      <div class="games-intro">
        <p>按品类整理，每个品类挑有代表性的几款放进表格，其余收在「其他玩过」。截图都是游戏内真实记录，点开可以放大看。</p>
        <div class="games-overview">
          <div><b>1 万小时+</b><span>累计游戏时长</span></div>
          <div><b>7 类</b><span>游戏品类</span></div>
          <div><b>12 张</b><span>游戏内截图</span></div>
        </div>
      </div>

      <section class="games-section">
        <header class="games-heading">
          <div class="games-title-row">
            <span class="games-index">01</span>
            <div class="games-title-main">
              <h3>ARPG <span>&amp; 动作</span></h3>
              <p>魂类、动作冒险与二次元动作</p>
            </div>
          </div>
          <div class="games-totals"><span class="games-badge games-badge-inline">时长取自游戏内记录</span></div>
        </header>

        <div class="games-table" role="table" aria-label="ARPG 游戏经历">
          <div class="games-row games-table-head" role="row"><span role="columnheader">游戏</span><span role="columnheader">角色 / 进度</span><span role="columnheader">游戏时长</span></div>
          <div class="games-row" role="row"><strong role="cell">原神</strong><span role="cell">冒险等阶 58 · 世界等级 8 · 成就 769</span><span role="cell">600h+</span></div>
          <div class="games-row" role="row"><strong role="cell">永劫无间</strong><span role="cell">Lv.238</span><span role="cell">590h+</span></div>
          <div class="games-row" role="row"><strong role="cell">黑神话：悟空</strong><span role="cell">国产动作冒险</span><span role="cell">94h+</span></div>
          <div class="games-row" role="row"><strong role="cell">赛博朋克 2077</strong><span role="cell">开放世界 RPG</span><span role="cell">91h+</span></div>
          <div class="games-row" role="row"><strong role="cell">鸣潮</strong><span role="cell">开放世界动作</span><span role="cell">90h+</span></div>
        </div>

        <div class="games-gallery games-gallery-3" aria-label="游戏截图">
          <figure class="game-shot game-shot-wide">
            <a href="assets/game-wukong.jpg" data-shot><img src="assets/previews/game-wukong.webp" data-original-src="assets/game-wukong.jpg" alt="黑神话悟空与赛博朋克2077游戏时长" width="1200" height="506" loading="eager" decoding="async" /></a>
            <figcaption>黑神话：悟空 94.4h ｜ 赛博朋克 2077 91.7h</figcaption>
          </figure>
          <figure class="game-shot">
            <a href="assets/game-naraka.jpg" data-shot><img src="assets/previews/game-naraka.webp" data-original-src="assets/game-naraka.jpg" alt="永劫无间账号数据" width="1000" height="1227" loading="lazy" decoding="async" /></a>
            <figcaption>永劫无间 · Lv.238 · 591 小时</figcaption>
          </figure>
          <figure class="game-shot">
            <a href="assets/game-genshin.png" data-shot><img src="assets/previews/game-genshin.webp" data-original-src="assets/game-genshin.png" alt="原神角色展柜" width="1000" height="620" loading="lazy" decoding="async" /></a>
            <figcaption>原神 · 冒险等阶 58 · 多名 90 级角色</figcaption>
          </figure>
        </div>

        <div class="games-more">
          <span class="games-kicker">ALSO PLAYED / 其他玩过</span>
          <div class="tags"><span class="tag">塞尔达传说</span><span class="tag">古墓丽影</span><span class="tag">艾尔登法环</span><span class="tag">只狼</span></div>
        </div>

        <div class="games-reflection">
          <span class="games-kicker">PLAYER'S NOTE</span>
          <h4>关于 ARPG</h4>
          <p>ARPG 的魅力，根植于<strong>战斗反馈与角色养成</strong>的内在循环。玩家持续投入的动力，来源于在反复挑战、刷取试错的过程里收获变强的成就感，以及在技能博弈、连招闪避带来利落的即时打击感，同时，装备、天赋、BD 体系也给玩家留出充足的探索空间~</p>
        </div>
      </section>

      <section class="games-section tone-ember">
        <header class="games-heading">
          <div class="games-title-row">
            <span class="games-index">02</span>
            <div class="games-title-main">
              <h3>COMPETITIVE <span>&amp; 派对</span></h3>
              <p>竞技对抗与多人派对</p>
            </div>
          </div>
          <div class="games-totals"><span>竞技累计时长 <strong>5000h+</strong></span><span>竞技累计充值 <strong>约 7500 元</strong></span><span class="games-badge">段位为历史最高</span></div>
        </header>

        <div class="games-table" role="table" aria-label="竞技游戏经历">
          <div class="games-row games-table-head" role="row"><span role="columnheader">游戏</span><span role="columnheader">段位 / 经历</span><span role="columnheader">游戏时长</span></div>
          <div class="games-row" role="row"><strong role="cell">王者荣耀</strong><span role="cell">荣耀王者</span><span role="cell">1000h+</span></div>
          <div class="games-row" role="row"><strong role="cell">第五人格</strong><span role="cell">五阶</span><span role="cell">1000h+</span></div>
          <div class="games-row" role="row"><strong role="cell">蛋仔派对</strong><span role="cell">超级凤凰蛋</span><span role="cell">200h+</span></div>
        </div>

        <div class="games-gallery" aria-label="竞技游戏截图">
          <figure class="game-shot">
            <a href="assets/game-wangzhe.jpg" data-shot><img src="assets/previews/game-wangzhe.webp" data-original-src="assets/game-wangzhe.jpg" alt="王者荣耀账号数据" width="840" height="386" loading="lazy" decoding="async" /></a>
            <figcaption>王者荣耀 · 账号数据</figcaption>
          </figure>
          <figure class="game-shot">
            <a href="assets/game-jinchanchan.jpg" data-shot><img src="assets/previews/game-jinchanchan.webp" data-original-src="assets/game-jinchanchan.jpg" alt="金铲铲之战对局结算画面" width="1000" height="459" loading="lazy" decoding="async" /></a>
            <figcaption>金铲铲之战 · 标准排位第 1 名</figcaption>
          </figure>
        </div>

        <div class="games-more">
          <span class="games-kicker">ALSO PLAYED / 其他玩过</span>
          <div class="tags">
            <span class="tag">黎明杀机</span>
            <span class="tag">决战平安京</span>
            <span class="tag">金铲铲 / 云顶</span>
            <span class="tag">糖豆人</span>
            <span class="tag">猛兽派对</span>
            <span class="tag">人类一败涂地</span>
            <span class="tag">太空杀</span>
            <span class="tag">鹅鸭杀</span>
            <span class="tag">猫和老鼠</span>
            <span class="tag">恐鬼症</span>
            <span class="tag">超级动物大逃杀</span>
            <span class="tag">Liar's Bar</span>
          </div>
        </div>

        <div class="games-reflection">
          <span class="games-kicker">PLAYER'S NOTE</span>
          <h4>关于竞技 / 派对</h4>
          <p>竞技类最直接的反馈来自胜负和段位，玩家会在一次次对局里把操作、意识和心态磨出来。非对称对抗和 MOBA 的节奏完全不一样：前者靠<strong>信息差和心理博弈</strong>，后者靠<strong>资源分配和团战决策</strong>；派对类则把门槛压下来，用随机性和社交把一局游戏变成一次多人聚会。</p>
        </div>
      </section>

      <section class="games-section">
        <header class="games-heading">
          <div class="games-title-row">
            <span class="games-index">03</span>
            <div class="games-title-main">
              <h3>MMO <span>&amp; 江湖</span></h3>
              <p>武侠世界里的剧情、门派与帮派玩法</p>
            </div>
          </div>
          <div class="games-totals"><span>MMO 累计时长 <strong>2000h+</strong></span><span>MMO 累计充值 <strong>3000 元+</strong></span><span class="games-badge">以下为其中 4 款</span></div>
        </header>

        <div class="games-table" role="table" aria-label="MMO 游戏经历">
          <div class="games-row games-table-head" role="row"><span role="columnheader">游戏</span><span role="columnheader">角色 / 经历</span><span role="columnheader">游戏时长</span></div>
          <div class="games-row" role="row"><strong role="cell">燕云十六声</strong><span role="cell">天泉 · 金风细雨楼 · 星华</span><span role="cell">790h+</span></div>
          <div class="games-row" role="row"><strong role="cell">大唐无双</strong><span role="cell">50 级 · 经典服 凌云寨 ｜ 黄金服 百花蛊</span><span role="cell">200h+</span></div>
          <div class="games-row" role="row"><strong role="cell">逆水寒</strong><span role="cell">姑苏绮罗 · 碎梦 · 65 级</span><span role="cell">100h+</span></div>
          <div class="games-row" role="row"><strong role="cell">一梦江湖</strong><span role="cell">云梦 · 60 级</span><span role="cell">100h+</span></div>
        </div>

        <div class="games-gallery" aria-label="游戏截图">
          <figure class="game-shot">
            <a href="assets/game-nishuihan.jpg" data-shot><img src="assets/previews/game-nishuihan.webp" data-original-src="assets/game-nishuihan.jpg" alt="逆水寒角色界面" width="840" height="322" loading="lazy" decoding="async" /></a>
            <figcaption>逆水寒 · 姑苏绮罗 碎梦 65 级</figcaption>
          </figure>
          <figure class="game-shot">
            <a href="assets/game-yanyun.jpg" data-shot><img src="assets/previews/game-yanyun.webp" data-original-src="assets/game-yanyun.jpg" alt="燕云十六声角色数据" width="750" height="532" loading="lazy" decoding="async" /></a>
            <figcaption>燕云十六声 · 天泉 金风细雨楼 星华 · 797.1h</figcaption>
          </figure>
        </div>

        <div class="games-more">
          <span class="games-kicker">ALSO PLAYED / 其他玩过</span>
          <div class="tags"><span class="tag">梦幻西游</span><span class="tag">魔兽世界</span></div>
        </div>

        <div class="games-reflection">
          <span class="games-kicker">PLAYER'S NOTE</span>
          <h4>关于 MMO</h4>
          <p>在我看来，<strong>MMO 的核心根基是社交</strong>。完整的剧情与充满烟火气的江湖世界观，撑起了玩家的代入感，门派战斗则带来酣畅直接的对抗爽感。副本、帮战、门派角逐这些玩法，不只是数值成长的途径，更是承载玩家协作、博弈与冲突的舞台，让玩家在并肩闯荡、交锋对抗的过程里建立长久羁绊，而不是陷入单调的刷数值循环。</p>
        </div>
      </section>

      <section class="games-section tone-ember">
        <header class="games-heading">
          <div class="games-title-row">
            <span class="games-index">04</span>
            <div class="games-title-main">
              <h3>FPS <span>&amp; 射击</span></h3>
              <p>战术射击与多人竞技</p>
            </div>
          </div>
        </header>

        <div class="games-table" role="table" aria-label="射击游戏经历">
          <div class="games-row games-table-head" role="row"><span role="columnheader">游戏</span><span role="columnheader">段位 / 经历</span><span role="columnheader">游戏时长</span></div>
          <div class="games-row" role="row"><strong role="cell">无畏契约</strong><span role="cell">黄金 I · Lv.111</span><span role="cell">220h+</span></div>
          <div class="games-row" role="row"><strong role="cell">和平精英</strong><span role="cell">战术竞技</span><span role="cell">200h+</span></div>
          <div class="games-row" role="row"><strong role="cell">CS2</strong><span role="cell">白银精英</span><span role="cell">130h+</span></div>
        </div>

        <div class="games-gallery" aria-label="射击游戏截图">
          <figure class="game-shot">
            <a href="assets/game-valorant.jpg" data-shot><img src="assets/previews/game-valorant.webp" data-original-src="assets/game-valorant.jpg" alt="无畏契约账号数据" width="1000" height="1489" loading="lazy" decoding="async" /></a>
            <figcaption>无畏契约 · 账号数据</figcaption>
          </figure>
          <figure class="game-shot">
            <a href="assets/game-cs2.jpg" data-shot><img src="assets/previews/game-cs2.webp" data-original-src="assets/game-cs2.jpg" alt="CS2 游戏时长 136.2 小时" width="840" height="162" loading="lazy" decoding="async" /></a>
            <figcaption>CS2 · 136.2h</figcaption>
          </figure>
        </div>

        <div class="games-more">
          <span class="games-kicker">ALSO PLAYED / 其他玩过</span>
          <div class="tags"><span class="tag">三角洲行动（100h+）</span><span class="tag">Apex 英雄</span></div>
        </div>

        <div class="games-reflection">
          <span class="games-kicker">PLAYER'S NOTE</span>
          <h4>关于 FPS / 射击</h4>
          <p>射击游戏吸引我的不只是瞄准和反应，也有<strong>搜集信息、判断位置和与队友配合</strong>的过程。CS2 和无畏契约里，一次报点、道具使用或站位选择都可能影响整局；在和平精英和三角洲行动里，地形、路线和物资也让每一场对局有不同的节奏。</p>
        </div>
      </section>

      <section class="games-section tone-violet">
        <header class="games-heading">
          <div class="games-title-row">
            <span class="games-index">05</span>
            <div class="games-title-main">
              <h3>OTOME <span>&amp; 女性向</span></h3>
              <p>乙女恋爱与换装养成</p>
            </div>
          </div>
          <div class="games-totals"><span class="games-badge games-badge-inline">以下为其中 3 款</span></div>
        </header>

        <div class="games-table" role="table" aria-label="女性向游戏经历">
          <div class="games-row games-table-head" role="row"><span role="columnheader">游戏</span><span role="columnheader">类型 / 经历</span><span role="columnheader">游戏时长</span></div>
          <div class="games-row" role="row"><strong role="cell">代号鸢</strong><span role="cell">三国群像 · 乙女</span><span role="cell">300h+</span></div>
          <div class="games-row" role="row"><strong role="cell">奇迹暖暖</strong><span role="cell">换装养成</span><span role="cell">200h+</span></div>
          <div class="games-row" role="row"><strong role="cell">世界之外</strong><span role="cell">无限流恋爱</span><span role="cell">50h+</span></div>
        </div>

        <div class="games-gallery" aria-label="女性向游戏截图">
          <figure class="game-shot">
            <a href="assets/game-shijie.jpg" data-shot><img src="assets/previews/game-shijie.webp" data-original-src="assets/game-shijie.jpg" alt="世界之外个人界面" width="1000" height="462" loading="lazy" decoding="async" /></a>
            <figcaption>世界之外 · 个人界面</figcaption>
          </figure>
        </div>

        <div class="games-more">
          <span class="games-kicker">ALSO PLAYED / 其他玩过</span>
          <div class="tags">
            <span class="tag">无限暖暖（100h+）</span>
            <span class="tag">恋与制作人（100h+）</span>
            <span class="tag">闪耀暖暖</span>
            <span class="tag">光与夜之恋</span>
            <span class="tag">未定事件簿</span>
            <span class="tag">魔鬼恋人</span>
            <span class="tag">失忆症</span>
          </div>
        </div>

        <div class="games-reflection">
          <span class="games-kicker">PLAYER'S NOTE</span>
          <h4>关于女性向 / 乙女</h4>
          <p>女性向游戏的核心吸引力，根植于细腻的人物塑造与长线叙事框架。角色人设、剧情走向、分镜文案是它最主要的表达载体，卡牌养成、解谜、战斗等玩法，更多作为叙事的配套循环，承接剧情更新节奏。我更偏向以旁观者视角去品读故事脉络，观察它如何通过角色关系、剧情抉择搭建情绪钩子，研究<strong>卡池、活动与叙事联动</strong>的留存设计。它的驱动力并不来自操作或者数值碾压，而是依靠持续的故事更新、角色魅力，维系玩家长期的关注与期待。</p>
        </div>
      </section>

      <section class="games-section tone-violet">
        <header class="games-heading">
          <div class="games-title-row">
            <span class="games-index">06</span>
            <div class="games-title-main">
              <h3>NARRATIVE <span>&amp; 剧情向</span></h3>
              <p>视觉小说、推理与互动叙事</p>
            </div>
          </div>
          <div class="games-totals"><span class="games-badge games-badge-inline">时长与进度取自游戏内记录</span></div>
        </header>

        <div class="games-table" role="table" aria-label="剧情向游戏经历">
          <div class="games-row games-table-head" role="row"><span role="columnheader">游戏</span><span role="columnheader">通关 / 进度</span><span role="columnheader">游戏时长</span></div>
          <div class="games-row" role="row"><strong role="cell">女神异闻录 5 皇家版</strong><span role="cell">全成就</span><span role="cell">100h+</span></div>
          <div class="games-row" role="row"><strong role="cell">百日战纪</strong><span role="cell">已通关</span><span role="cell">79h+</span></div>
          <div class="games-row" role="row"><strong role="cell">命运石之门</strong><span role="cell">已通关</span><span role="cell">17h+</span></div>
          <div class="games-row" role="row"><strong role="cell">山河旅探</strong><span role="cell">全成就</span><span role="cell">12h+</span></div>
        </div>

        <div class="games-gallery is-tall" aria-label="剧情向游戏截图">
          <figure class="game-shot">
            <a href="assets/game-narrative.jpg" data-shot><img src="assets/previews/game-narrative.webp" data-original-src="assets/game-narrative.jpg" alt="剧情向游戏时长记录" width="880" height="1339" loading="lazy" decoding="async" /></a>
            <figcaption>百日战纪、底特律、山河旅探、奇异人生、命运石之门、P5R 等</figcaption>
          </figure>
        </div>

        <div class="games-more">
          <span class="games-kicker">ALSO PLAYED / 其他玩过</span>
          <div class="tags">
            <span class="tag">底特律：变人（12h+）</span>
            <span class="tag">奇异人生（9h+）</span>
            <span class="tag">重返蓝鲸岛（全成就 · 9h+）</span>
            <span class="tag">妄想症：Deliver Me（9h+）</span>
            <span class="tag">弹丸论破 1/2/3</span>
            <span class="tag">人狼村之谜</span>
            <span class="tag">你去死吧！多数表决游戏</span>
            <span class="tag">小小梦魇 1/2/3</span>
            <span class="tag">Inside</span>
          </div>
        </div>

        <div class="games-reflection">
          <span class="games-kicker">PLAYER'S NOTE</span>
          <h4>关于剧情向</h4>
          <p>文字游戏对我来说更像在读一本会动的书，推进节奏自己控制，靠好奇心和想验证某个猜想往下走。我比较在意<strong>信息怎么给</strong>：线索是直接摊开，还是藏在对话和场景里让玩家自己拼；<strong>分支是不是真的会改变结局</strong>，而不是走个过场。推理类我会先把所有人的证词过一遍再下判断，多周目也愿意把没走的线补完。</p>
        </div>
      </section>

      <section class="games-section">
        <header class="games-heading">
          <div class="games-title-row">
            <span class="games-index">07</span>
            <div class="games-title-main">
              <h3>OTHER <span>&amp; 其他</span></h3>
              <p>经营、合作与开放世界</p>
            </div>
          </div>
          <div class="games-totals"><span class="games-badge games-badge-inline">时长与进度取自游戏内记录</span></div>
        </header>

        <div class="games-table" role="table" aria-label="其他游戏经历">
          <div class="games-row games-table-head" role="row"><span role="columnheader">游戏</span><span role="columnheader">进度 / 经历</span><span role="columnheader">游戏时长</span></div>
          <div class="games-row" role="row"><strong role="cell">我的世界</strong><span role="cell">长期在玩</span><span role="cell">3000h+</span></div>
          <div class="games-row" role="row"><strong role="cell">星露谷物语</strong><span role="cell">全成就</span><span role="cell">303h+</span></div>
          <div class="games-row" role="row"><strong role="cell">空洞骑士</strong><span role="cell">成就 46/63</span><span role="cell">294h+</span></div>
          <div class="games-row" role="row"><strong role="cell">空洞骑士：丝之歌</strong><span role="cell">成就 12/52</span><span role="cell">66h+</span></div>
          <div class="games-row" role="row"><strong role="cell">双人成行</strong><span role="cell">已通关</span><span role="cell">34h+</span></div>
          <div class="games-row" role="row"><strong role="cell">双影奇境</strong><span role="cell">已通关</span><span role="cell">14h+</span></div>
        </div>

        <div class="games-gallery is-tall" aria-label="其他游戏截图">
          <figure class="game-shot">
            <a href="assets/game-other.jpg" data-shot><img src="assets/previews/game-other.webp" data-original-src="assets/game-other.jpg" alt="幻兽帕鲁、双人成行、双影奇境、星露谷、空洞骑士时长记录" width="880" height="1029" loading="lazy" decoding="async" /></a>
            <figcaption>幻兽帕鲁、双人成行、双影奇境、星露谷物语、空洞骑士</figcaption>
          </figure>
        </div>

        <div class="games-more">
          <span class="games-kicker">ALSO PLAYED / 其他玩过</span>
          <div class="tags">
            <span class="tag">幻兽帕鲁（52h+）</span>
            <span class="tag">明日方舟：终末地（100h+）</span>
            <span class="tag">东方夜雀食堂（90h+）</span>
            <span class="tag">人类一败涂地（50h+）</span>
            <span class="tag">房产达人（15h+）</span>
            <span class="tag">Peak</span>
            <span class="tag">森林 1/2</span>
            <span class="tag">荒野大镖客 2</span>
            <span class="tag">博德之门 3</span>
            <span class="tag">霍格沃兹之遗</span>
            <span class="tag">女神异闻录 3 Reload</span>
          </div>
        </div>

        <div class="games-reflection">
          <span class="games-kicker">PLAYER'S NOTE</span>
          <h4>关于经营 / 合作</h4>
          <p>经营和合作类吸引我的是<strong>慢慢把东西做起来</strong>的过程：星露谷种田、我的世界搭建筑、双人成行两个人配合通关，节奏不快，但很容易一直玩下去。合作类更看配合，<strong>谁负责什么、什么时候等对方</strong>，比单打独斗有意思。</p>
        </div>
      </section>
    `,
  },
  quest: {
    en: "EXPERIENCE",
    title: "经历",
    html: `
      <section class="resume-sec">
        <header class="resume-sec-head"><h3>实习经历</h3><em>INTERNSHIP</em></header>

        <div class="resume-item">
          <div class="resume-date">2026.09 — 2026.12</div>
          <div>
            <h4>网易互娱 · 产品营销实习</h4>
            <div class="resume-stats tone-ember" role="group" aria-label="网易互娱实习成果">
              <span><b>50+</b>商品图</span>
              <span><b>20+</b>套 KV</span>
              <span><b>100w+</b>直播观看</span>
              <span><b>2000w+</b>抖音曝光</span>
            </div>
            <ul class="resume-list">
              <li><b>双十一直播预热：</b>写预热稿、整理素材、制作商品图和 KV，跟进提审，发布到官网、公众号和网易大神。产出 50+ 张商品图、20+ 套 KV，覆盖 3 个平台。</li>
              <li><b>5v5 赛事传播：</b>跟进线下预选赛、淘汰赛到总决赛，负责赛制落地、选手对接、赛程排期和现场预案，产出赛事规则图解和专题页预热。直播累计观看 100w+，增长 10%。</li>
              <li><b>达人对接与 KOC：</b>对接游戏直播博主、coser 等创作者，参与 KOC 活动框架与激励机制调整，跟进直播排期和礼包码结算。抖音总曝光 2000w+，参与量提升 15%，曝光提升 25%。</li>
            </ul>
          </div>
        </div>

        <div class="resume-item">
          <div class="resume-date">2026.06 — 2026.09</div>
          <div>
            <h4>广东赢商网 · 数据运营实习</h4>
            <div class="resume-stats tone-blue" role="group" aria-label="赢商网实习成果">
              <span><b>6.8w</b>条数据</span>
              <span><b>95%</b>有效保留率</span>
              <span><b>7h→4.9h</b>单批时长</span>
              <span><b>0.8%</b>差错率</span>
            </div>
            <ul class="resume-list">
              <li><b>多源数据清洗：</b>处理商业选址咨询的地理、人口、消费三类原始数据，负责去重、缺失值分级、异常值校验、字段标准化和抽样复核，并把判定口径整理成 SOP 和四类模板，供同组复用。累计处理 6.8 万余条，有效保留率 95%。</li>
              <li><b>效率与复核：</b>把批量转换、去重、单位换算固化成脚本和 Excel 模板，按 12% 比例抽样复核，差错率超标的字段全量重检。单批次处理时长 7h → 4.9h，差错率控制在 0.8% 以内，新人上手周期缩短 30%。</li>
            </ul>
          </div>
        </div>
      </section>
    `,
  },

  works: {
    en: "WORKS",
    title: "作品",
    html: `
      <p class="works-intro">三个案例：官方内容、达人合作、数据运营。每个都能看到我写的稿、做出来的物料，和最后跑出来的结果。</p>

      <nav class="work-index tone-ember" aria-label="作品分类">
        <a class="work-entry" href="#officialContent" data-goto="officialContent">
          <div class="work-entry-copy">
            <span class="work-kicker">CASE 01 / OFFICIAL CHANNELS</span>
            <h3>官方内容与社媒运营</h3>
            <p>资料片与赛事 · 双十一直播 · 互动 H5 · 日常内容</p>
            <div class="work-entry-stats">
              <span><b>100w+</b>赛事直播观看</span>
              <span><b>50 万+</b>双十一观看</span>
              <span><b>100+</b>端手游商品</span>
            </div>
            <span class="work-action">4 个项目 · 查看 <span aria-hidden="true">↗</span></span>
          </div>
        </a>
        <a class="work-entry" href="#creatorWork" data-goto="creatorWork">
          <div class="work-entry-copy">
            <span class="work-kicker">CASE 02 / KOL &amp; SOCIAL</span>
            <h3>达人合作与账号运营</h3>
            <p>星推计划 · 招募物料 · 内容抽审</p>
            <div class="work-entry-stats">
              <span><b>2000w+</b>抖音曝光</span>
              <span><b>5.01%</b>抽审比例</span>
              <span><b>5w+</b>个人号曝光</span>
            </div>
            <span class="work-action">2 个部分 · 查看 <span aria-hidden="true">↗</span></span>
          </div>
        </a>
        <a class="work-entry" href="#dataWork" data-goto="dataWork">
          <div class="work-entry-copy">
            <span class="work-kicker">CASE 03 / DATA OPERATIONS</span>
            <h3>数据运营</h3>
            <p>礼包码核算 · 异常识别 · 选址清洗</p>
            <div class="work-entry-stats">
              <span><b>12,687</b>行激活明细</span>
              <span><b>13.7%</b>异常识别</span>
              <span><b>6.8w</b>条选址数据</span>
            </div>
            <span class="work-action">2 个案例 · 查看 <span aria-hidden="true">↗</span></span>
          </div>
        </a>
      </nav>
    `,
  },
  officialContent: {
    caseNumber: "01",
    en: "OFFICIAL CHANNELS",
    title: "官方内容与社媒运营",
    html: `
      <a class="case-back" href="#works" data-goto="works">← 返回作品</a>
      <section class="work-map" aria-labelledby="work-map-title">
        <header class="work-map-head">
          <div>
            <span class="work-kicker">CONTENT MAP</span>
            <h3 id="work-map-title">官号项目坐标</h3>
          </div>
          <p>按内容形式和项目类型归类，不代表排名。</p>
        </header>
        <div class="work-map-plot">
          <div class="work-map-axes" aria-hidden="true">
            <span class="work-map-axis is-x"></span>
            <span class="work-map-axis is-y"></span>
            <span class="work-map-origin">O</span>
            <span class="work-map-label is-north">主线项目</span>
            <span class="work-map-label is-south">日常与配套</span>
            <span class="work-map-label is-west">图文与设计</span>
            <span class="work-map-label is-east">直播与互动</span>
          </div>
          <div class="project-grid work-map-grid">
            <a class="project-card tone-blue" href="#caseContent" data-goto="caseContent">
              <div class="project-card-heading has-preview">
                <div>
                  <span class="work-kicker"><span class="work-quadrant" aria-hidden="true">I</span>资料片与赛事</span>
                  <h4>万国霸业 · 资料片与赛事</h4>
                </div>
                <img class="project-preview" src="assets/previews/thumb.webp" data-original-src="assets/case/thumb.jpg" alt="" width="740" height="570" loading="eager" fetchpriority="high" decoding="async" />
              </div>
              <p>为《万国霸业》写图文框架、首曝长图和官网新闻；为潜龙争霸赛写赛程文案，跟进线下视觉物料。</p>
              <span class="work-action">查看案例 <span aria-hidden="true">↗</span></span>
            </a>

            <a class="project-card tone-ember" href="#caseDouble11" data-goto="caseDouble11">
              <div class="project-card-heading has-preview">
                <div>
                  <span class="work-kicker"><span class="work-quadrant" aria-hidden="true">II</span>直播宣推</span>
                  <h4>双十一官方直播</h4>
                </div>
                <img class="project-preview" src="assets/previews/double11-kv.webp" data-original-src="assets/case/double11-kv.jpg" alt="" width="1000" height="563" loading="lazy" decoding="async" />
              </div>
              <p>独立撰写手游直播预热新闻稿，跟进预告、开播准备和播后数据复盘。</p>
              <span class="work-action">查看案例 <span aria-hidden="true">↗</span></span>
            </a>

            <a class="project-card" href="#officialDaily" data-goto="officialDaily">
              <div class="project-card-heading">
                <span class="work-kicker"><span class="work-quadrant" aria-hidden="true">III</span>日常内容</span>
                <h4>日常官号内容</h4>
              </div>
              <p>官网新闻、公众号撰稿与平面设计、抖音官号视频，按发布渠道整理。</p>
              <span class="work-action">查看内容分类 <span aria-hidden="true">↗</span></span>
            </a>

            <article class="project-card tone-violet">
              <div class="project-card-heading">
                <span class="work-kicker"><span class="work-quadrant" aria-hidden="true">IV</span>版本与互动</span>
                <h4>手游年末资料片 + H5</h4>
              </div>
              <p>年末资料片的配套 H5 互动还在制作，上线后补作品和复盘。</p>
              <span class="project-status">制作中</span>
            </article>
          </div>
        </div>
      </section>
    `,
  },
  officialDaily: {
    en: "DAILY CONTENT",
    title: "日常官号内容",
    html: `
      <a class="case-back" href="#officialContent" data-goto="officialContent">← 返回官方内容与社媒运营</a>
      <p class="works-intro">按发布渠道整理，具体稿件截图和视频链接待补。</p>

      <section class="resume-sec">
        <header class="resume-sec-head"><h3>官网新闻</h3><em>NEWS</em></header>
        <p class="case-detail-text">官网日常新闻稿撰写与发布。</p>
      </section>

      <section class="resume-sec">
        <header class="resume-sec-head"><h3>公众号图文</h3><em>WECHAT</em></header>
        <p class="case-detail-text">公众号文章撰稿、配图与平面设计。</p>
      </section>

      <section class="resume-sec">
        <header class="resume-sec-head"><h3>抖音官号视频</h3><em>DOUYIN</em></header>
        <p class="case-detail-text">日常官号视频发布。</p>
      </section>
    `,
  },
  creatorWork: {
    caseNumber: "02",
    en: "KOL & SOCIAL",
    title: "达人合作与账号运营",
    html: `
      <a class="case-back" href="#works" data-goto="works">← 返回作品</a>
      <p class="works-intro">一边跟产品和供应商把达人激励落地，一边运营自己的 cos 账号。</p>
      <div class="project-grid">
        <a class="project-card tone-violet" href="#caseStarPlan" data-goto="caseStarPlan">
          <div class="project-card-heading">
            <div>
              <span class="work-kicker">星推计划 · 第十六期</span>
              <h3>达人激励计划与投放</h3>
            </div>
          </div>
          <p>定本期的激励结构，写 brief 和招募文案，跟长图出稿、发礼包码，结束后核算和抽审。</p>
          <div class="case-stats">
            <span><b>2000w+</b>抖音曝光</span>
            <span><b>5.01%</b>抽审比例</span>
            <span><b>272</b>个礼包码</span>
          </div>
          <span class="work-action">查看案例 <span aria-hidden="true">↗</span></span>
        </a>
        <article class="project-card tone-ember">
          <div class="project-card-heading">
            <span class="work-kicker">个人 · 抖音</span>
            <h3>cos 账号运营</h3>
          </div>
          <p>选题、脚本、拍摄、剪辑都自己来，做泛二次元内容，持续更新。</p>
          <div class="case-stats">
            <span><b>5w+</b>累计曝光</span>
            <span><b>5k+</b>点赞收藏</span>
          </div>
          <p class="case-detail-text" style="margin-top:14px;font-size:13px;">账号截图和作品还在整理，素材到位后补进这一块。</p>
        </article>
      </div>
    `,
  },
  dataWork: {
    caseNumber: "03",
    en: "DATA OPERATIONS",
    title: "数据运营",
    html: `
      <a class="case-back" href="#works" data-goto="works">← 返回作品</a>
      <p class="works-intro">两段实习都有一半时间在跟数据打交道：网易核礼包码，赢商网洗商业选址。</p>
      <div class="project-grid">
        <a class="project-card tone-blue" href="#caseCodeData" data-goto="caseCodeData">
          <div class="project-card-heading">
            <div>
              <span class="work-kicker">网易互娱 · 礼包码核销</span>
              <h3>5 个批次、1.2 万行数据清洗</h3>
            </div>
          </div>
          <p>先把分层和异常口径定死，再把原始激活流水洗成一张能对账的汇总表，配一份交接用的 SOP。</p>
          <div class="case-stats">
            <span><b>12,687</b>行有效激活</span>
            <span><b>13.7%</b>异常识别</span>
            <span><b>8</b>个 sheet</span>
          </div>
          <span class="work-action">查看案例 <span aria-hidden="true">↗</span></span>
        </a>
        <article class="project-card tone-ember">
          <div class="project-card-heading">
            <span class="work-kicker">赢商网</span>
            <h3>商业选址多源数据清洗</h3>
          </div>
          <p>地理、人口、消费三类数据的去重、缺失值分级、异常值校验，判定口径整理成 SOP 和模板。</p>
          <div class="case-stats">
            <span><b>6.8w</b>条数据</span>
            <span><b>95%</b>保留率</span>
            <span><b>7h→4.9h</b>单批时长</span>
          </div>
        </article>
      </div>
    `,
  },
  caseContent: {
    en: "VERSION & EVENT",
    title: "万国霸业 · 资料片与赛事",
    html: `
      <a class="case-back" href="#officialContent" data-goto="officialContent">← 返回官方内容与社媒运营</a>

      <p class="case-detail-kicker">网易互娱《大唐无双》· 2026 年末</p>
      <h3 class="case-detail-title">资料片宣发与赛事内容</h3>
      <p class="case-detail-lead">《万国霸业》资料片和潜龙争霸赛同期推进。我跟进两条内容线：资料片讲玩法更新、新区和开服福利；赛事讲怎么报名、每一轮怎么打，以及总决赛现场的信息。</p>

      <section class="case-meta" aria-label="资料片与赛事关键日期">
        <div><span><time datetime="2026-10-20">10.20</time></span><b>潜龙争霸赛开赛</b></div>
        <div><span><time datetime="2026-11-02">11.02</time></span><b>资料片首曝</b></div>
        <div><span><time datetime="2026-11-13">11.13</time></span><b>资料片及新区上线</b></div>
        <div><span><time datetime="2026-11-22">11.22</time></span><b>赛事线下总决赛</b></div>
      </section>

      <h4 class="case-subhead">我的分工</h4>
      <ul class="resume-list">
        <li><b>前期对接：</b>和产品、赛事团队确认玩法改动、上线时间、赛制和赛程。</li>
        <li><b>资料片宣发：</b>拆图文框架，写首曝长图、官网新闻稿和新服招募文案，跟进发布。</li>
        <li><b>潜龙争霸赛：</b>按轮次写赛程视频文案，跟进活动封面、场馆主视觉、对阵大屏和冠军 KV。</li>
      </ul>

      <figure class="case-hero">
        <img src="assets/previews/hero.webp" data-original-src="assets/case/hero.jpg" alt="大唐无双「万国霸业」资料片主视觉" width="1000" height="542" loading="eager" fetchpriority="high" decoding="async" />
      </figure>

      <h4 class="case-subhead">项目时间线</h4>

      <div class="case-milestones">
        <section class="case-milestone">
          <header class="case-milestone-head">
            <time class="case-node-date" datetime="2026-10-20">10.20</time>
            <h4>潜龙争霸赛开赛</h4>
          </header>
          <p class="case-detail-text">开赛文案先交代 5V5 的组队和报名方式，再列出预热赛、淘汰赛、双败赛和总决赛的日期。</p>
          <a class="case-doc" href="assets/case/video-5v5.png" data-shot>
            <img src="assets/previews/video-5v5.webp" data-original-src="assets/case/video-5v5.png" alt="潜龙争霸赛 5V5 赛程视频文案" width="250" height="187" loading="lazy" decoding="async" />
            <span><b>5V5 赛程视频 · 文案</b><em>报名方式与关键赛程</em></span>
          </a>
        </section>

        <section class="case-milestone">
          <header class="case-milestone-head">
            <time class="case-node-date" datetime="2026-10-31">10.31</time>
            <h4>淘汰赛</h4>
          </header>
          <p class="case-detail-text">淘汰赛图解逐轮标出 64 强到 8 强的种子队避让规则，也提醒玩家：种子队仍要赢下每轮才能晋级。</p>
          <a class="case-doc" href="assets/case/event-seed-protection.jpg" data-shot>
            <img src="assets/previews/event-seed-protection.webp" data-original-src="assets/case/event-seed-protection.jpg" alt="潜龙争霸赛淘汰赛种子保护图解：从 64 强到 8 强的对阵规则" width="186" height="330" loading="lazy" decoding="async" />
            <span><b>种子保护图解</b><em>种子队怎么定、每轮怎么排对阵</em></span>
          </a>
        </section>
      </div>

      <section class="case-node focus-panel is-version" aria-labelledby="version-focus-title">
        <header class="case-node-head">
          <span class="focus-kicker"><time datetime="2026-11-02">11.02</time> / 版本首曝</span>
          <div>
            <h4 id="version-focus-title">从图文框架到首曝长图</h4>
            <p>首曝先回答玩家「这次改了什么」。<strong>我在图文框架里分开经典服、黄金服和赛事安排，再把各自的重点写进首曝长图。</strong>玩家可以按服查更新，也能直接找到赛事信息。</p>
          </div>
        </header>
        <div class="case-media is-pair">
          <figure class="case-shot is-scroll">
            <div class="shot-box">
              <div class="shot-frame" tabindex="0" role="region" aria-label="图文框架，可上下滚动">
                <img src="assets/previews/framework.webp" data-original-src="assets/case/framework.jpg" alt="大唐无双万国霸业图文框架文档" width="780" height="5460" loading="lazy" decoding="async" />
              </div>
              <span class="shot-hint">图内可上下滚动</span>
            </div>
            <figcaption>
              <span class="focus-step" aria-hidden="true">01</span>
              <b>图文框架</b>
              <span>按经典服、黄金服、赛事拆分要讲的信息</span>
              <a class="shot-open" href="assets/case/framework.jpg" target="_blank" rel="noopener">原图 ↗</a>
            </figcaption>
          </figure>
          <figure class="case-shot is-scroll">
            <div class="shot-box">
              <div class="shot-frame" tabindex="0" role="region" aria-label="版本内容长图，可上下滚动">
                <img src="assets/previews/keyvisual.webp" data-original-src="assets/case/keyvisual.jpg" alt="大唐无双万国霸业资料片更新内容长图" width="780" height="4534" loading="lazy" decoding="async" />
              </div>
              <span class="shot-hint">图内可上下滚动</span>
            </div>
            <figcaption>
              <span class="focus-step" aria-hidden="true">02</span>
              <b>成品 · 版本内容长图</b>
              <span>玩家可以按服查国战、赛季玩法等改动，再单独看赛事安排</span>
              <a class="shot-open" href="assets/case/keyvisual.jpg" target="_blank" rel="noopener">原图 ↗</a>
            </figcaption>
          </figure>
        </div>
        <div class="case-docs">
          <a class="case-doc" href="assets/case/news-1102.png" data-shot>
            <img src="assets/previews/news-1102.webp" data-original-src="assets/case/news-1102.png" alt="万国霸业更新首曝新闻稿" width="250" height="271" loading="lazy" decoding="async" style="width: 64px; height: 82px; flex: none;" />
            <span><b>官网首曝新闻稿</b><em>国战与赛季玩法改动</em></span>
          </a>
        </div>
      </section>

      <div class="case-milestones">
        <section class="case-milestone">
          <header class="case-milestone-head">
            <time class="case-node-date" datetime="2026-11-07">11.07</time>
            <h4>双败赛</h4>
          </header>
          <p class="case-detail-text">四强阶段的赛程视频文案讲清三件事：五局三胜、两败出局，最后两支队伍进入线下总决赛。</p>
          <a class="case-doc" href="assets/case/video-dual.png" data-shot>
            <img src="assets/previews/video-dual.webp" data-original-src="assets/case/video-dual.png" alt="双败赛开战视频文案" width="250" height="172" loading="lazy" decoding="async" />
            <span><b>双败赛开战视频 · 文案</b><em>四强对抗与晋级规则</em></span>
          </a>
        </section>

        <section class="case-milestone">
          <header class="case-milestone-head">
            <time class="case-node-date" datetime="2026-11-12">11.12</time>
            <h4>官网开战预告</h4>
          </header>
          <p class="case-detail-text">官网稿先交代资料片和黄金战服新区「森罗万象」在 11.13 开启，再说明新玩法和开服福利。</p>
          <a class="case-doc" href="assets/case/news-1112.png" data-shot>
            <img src="assets/previews/news-1112.webp" data-original-src="assets/case/news-1112.png" alt="万国霸业开战预告新闻稿" width="250" height="264" loading="lazy" decoding="async" />
            <span><b>官网开战稿</b><em>上线时间、新区与福利</em></span>
          </a>
        </section>
      </div>

      <section class="case-node">
        <header class="case-node-head">
          <time class="case-node-date" datetime="2026-11-13">11.13</time>
          <div>
            <h4>资料片上线 · 新玩法图解</h4>
            <p>资料片与新区「森罗万象」上线时，社媒图解接着讲「具体怎么玩」：新赛季用一张图做总览，国战报名、冰原战场计分和武经套装各用一张。</p>
            <p><b>拿冰原战场来说：</b>上半张用「15V15」和「四塔争夺、中央夺旗」交代这局打什么，底下再讲怎么得分、怎么赢：占塔持续得分，夺旗回塔加分；20 分钟决胜，先达 3000 分获胜。点图可放大。</p>
          </div>
        </header>
        <div class="case-media is-narrow" style="grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));">
          <div class="case-media is-pair" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
            <figure class="case-shot">
              <a class="shot-frame play-preview" href="assets/case/play-season.jpg" data-shot>
                <img src="assets/previews/play-season.webp" data-original-src="assets/case/play-season.jpg" alt="新赛季三大重点：任务链、战阶、赛事" width="560" height="995" loading="lazy" decoding="async" />
              </a>
              <figcaption><b>新赛季总览</b><span>任务链、战阶奖励、1V1 / 5V5 每周轮换</span></figcaption>
            </figure>
            <figure class="case-shot">
              <a class="shot-frame play-preview" href="assets/case/play-nation-war.jpg" data-shot>
                <img src="assets/previews/play-nation-war.webp" data-original-src="assets/case/play-nation-war.jpg" alt="万国霸业国战玩法与报名安排" width="560" height="995" loading="lazy" decoding="async" />
              </a>
              <figcaption><b>万国霸业 · 国战</b><span>一国三帮，每周报名、周五开战</span></figcaption>
            </figure>
          </div>
          <div class="case-media is-pair" style="grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 0;">
            <figure class="case-shot">
              <a class="shot-frame play-preview" href="assets/case/play-icefield.jpg" data-shot>
                <img src="assets/previews/play-icefield.webp" data-original-src="assets/case/play-icefield.jpg" alt="冰原战场四塔争夺、中央夺旗和获胜条件" width="560" height="995" loading="lazy" decoding="async" />
              </a>
              <figcaption><b>冰原战场</b><span>15V15：占塔持续得分，夺旗回塔加分</span></figcaption>
            </figure>
            <figure class="case-shot">
              <a class="shot-frame play-preview" href="assets/case/play-wujing.jpg" data-shot>
                <img src="assets/previews/play-wujing.webp" data-original-src="assets/case/play-wujing.jpg" alt="武经赛季套装：一经统御，六略成套" width="560" height="995" loading="lazy" decoding="async" />
              </a>
              <figcaption><b>武经套装</b><span>1 经统御、6 略成套</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="case-node">
        <header class="case-node-head">
          <time class="case-node-date" datetime="2026-11-22">11.22</time>
          <div>
            <h4>线下总决赛</h4>
            <p>5V5 总决赛在广州网易园区举行。我跟进场馆主视觉、对阵大屏，以及赛后展示胜利队伍和冠军的 KV。</p>
          </div>
        </header>
        <div style="max-width: 680px; margin-bottom: 20px; --photo-height: clamp(175px, 35vw, 260px);">
          <div style="display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 4px 12px; margin-bottom: 10px;">
            <h5 id="finale-photos-title" class="case-tag">总决赛现场 · 3 张</h5>
            <span class="case-detail-text" style="font-size: 12px;">← 左右滑动 → · 点图放大</span>
          </div>
          <div role="region" aria-labelledby="finale-photos-title" tabindex="0" style="display: flex; gap: 12px; overflow-x: auto; overscroll-behavior-x: contain; scroll-snap-type: x mandatory; padding-bottom: 8px; scrollbar-width: thin; scrollbar-color: var(--line-strong) transparent;">
            <figure class="case-shot" style="flex: 0 0 82%; max-width: 460px; scroll-snap-align: start;">
              <a class="shot-frame" href="assets/case/finale-stage.jpg" data-shot>
                <img src="assets/previews/finale-stage.webp" data-original-src="assets/case/finale-stage.jpg" alt="潜龙争霸赛总决赛舞台全景与大屏主视觉" width="1000" height="563" loading="lazy" decoding="async" style="height: var(--photo-height); object-fit: contain; background: #0b1117;" />
              </a>
              <figcaption><b>01 / 03</b><span>舞台全景</span></figcaption>
            </figure>
            <figure class="case-shot" style="flex: 0 0 82%; max-width: 460px; scroll-snap-align: start;">
              <a class="shot-frame" href="assets/case/finale-trophy.jpg" data-shot>
                <img src="assets/previews/finale-trophy.webp" data-original-src="assets/case/finale-trophy.jpg" alt="潜龙争霸赛现场奖杯特写" width="1000" height="1333" loading="lazy" decoding="async" style="height: var(--photo-height); object-fit: contain; background: #0b1117;" />
              </a>
              <figcaption><b>02 / 03</b><span>奖杯特写</span></figcaption>
            </figure>
            <figure class="case-shot" style="flex: 0 0 82%; max-width: 460px; scroll-snap-align: start;">
              <a class="shot-frame" href="assets/case/finale-champion.jpg" data-shot>
                <img src="assets/previews/finale-champion.webp" data-original-src="assets/case/finale-champion.jpg" alt="总决赛冠军揭晓时的大屏和舞台烟雾效果" width="1000" height="750" loading="lazy" decoding="async" style="height: var(--photo-height); object-fit: contain; background: #0b1117;" />
              </a>
              <figcaption><b>03 / 03</b><span>冠军揭晓</span></figcaption>
            </figure>
          </div>
        </div>
        <div class="case-media is-narrow" style="max-width: min(680px, 90%);">
          <figure class="case-shot is-scroll">
            <div class="shot-box">
              <div class="shot-frame" tabindex="0" role="region" aria-label="线下场馆与主视觉，可上下滚动" style="max-height: clamp(380px, 46vw, 480px);">
                <img src="assets/previews/offline.webp" data-original-src="assets/case/offline.jpg" alt="潜龙争霸赛线下总决赛场馆与主视觉" width="1000" height="1687" loading="lazy" decoding="async" />
              </div>
              <span class="shot-hint">图内可上下滚动</span>
            </div>
            <figcaption>
              <b>线下总决赛物料</b>
              <span>场馆主视觉、对阵大屏、冠军与胜利 KV</span>
              <a class="shot-open" href="assets/case/offline.jpg" target="_blank" rel="noopener">原图 ↗</a>
            </figcaption>
          </figure>
        </div>
      </section>

      <h4 class="case-subhead">新服配套物料</h4>
      <div class="case-docs">
        <a class="case-doc" href="assets/case/cover-commander.png" data-shot>
          <img src="assets/previews/cover-commander.webp" data-original-src="assets/case/cover-commander.png" alt="最强指挥招募封面与文案" width="250" height="248" loading="lazy" decoding="async" style="width: 64px; height: 82px; flex: none;" />
          <span><b>「最强指挥」招募</b><em>黄金战服 11 月新服 · 标题、文案与封面</em></span>
        </a>
      </div>

      <h4 class="case-subhead">赛事产出与结果</h4>
      <div class="case-stats">
        <span><b>3</b>支赛程视频</span>
        <span><b>1</b>套线下主视觉</span>
        <span><b>100w+</b>赛事直播累计观看</span>
      </div>

      <h4 class="case-subhead">复盘</h4>
      <p class="case-detail-text">两条内容线的顺序不一样：资料片首曝先讲改动，上线前把时间和福利说明白，上线阶段再讲具体玩法；赛事开赛先讲报名，开打后按轮次更新规则和对阵。写每份物料之前，先看玩家在这个节点最需要哪条信息。</p>

      <a class="case-back" href="#officialContent" data-goto="officialContent">← 返回官方内容与社媒运营</a>
    `,
  },
  caseDouble11: {
    en: "LIVESTREAM PROMOTION",
    title: "双十一 · 官方直播",
    html: `
      <a class="case-back" href="#officialContent" data-goto="officialContent">← 返回官方内容与社媒运营</a>

      <p class="case-detail-kicker">网易互娱《大唐无双》· 2026 双十一</p>
      <h3 class="case-detail-title">从直播预热到播后复盘</h3>
      <p class="case-detail-lead">我独立撰写手游双十一新闻稿，也跟进端手游的商品与库存整理、上架测试和预告发布。开播时同步跟进现场，结束后继续跟进礼物寄出和数据汇总。</p>
      <div class="case-stats">
        <span><b>50万+</b>直播观看</span>
        <span><b>1</b>份可复用测试 SOP</span>
        <span><b>100+</b>端手游商品</span>
      </div>

      <section class="case-node focus-panel is-live" aria-labelledby="live-focus-title">
        <header class="case-node-head">
          <span class="focus-kicker">预热 / LIVESTREAM PROMO</span>
          <div>
            <h4 id="live-focus-title">独立撰写手游双十一预热稿</h4>
            <p>对接产品确认游戏内玩法和道具规则，再<strong>独立写手游新闻稿</strong>。稿件先给开播时间和主推商品，再讲折扣、道具用途和游戏内同步活动；同时联系平面出主视觉与商品图，发布端游和手游的预告视频。</p>
          </div>
        </header>
        <div class="case-media is-pair" style="align-items: start;">
          <figure class="case-shot is-scroll">
            <div class="shot-box">
              <div class="shot-frame" tabindex="0" role="region" aria-label="手游预热新闻稿，可上下滚动">
                <img src="assets/previews/double11-article.webp" data-original-src="assets/case/double11-article.jpg" alt="独立撰写的手游双十一新闻稿，从开播预告、商品介绍到游戏内福利" width="720" height="5855" loading="eager" fetchpriority="high" decoding="async" />
              </div>
              <span class="shot-hint">图内可上下滚动</span>
            </div>
            <figcaption>
              <span class="focus-step" aria-hidden="true">01</span>
              <b>手游预热新闻稿</b><span>稿件截图拼接</span>
              <a class="shot-open" href="assets/case/double11-article.jpg" target="_blank" rel="noopener">查看长图 ↗</a>
            </figcaption>
          </figure>
          <div class="case-media">
            <figure class="case-shot">
              <a class="shot-frame" href="assets/case/double11-kv.jpg" data-shot>
                <img src="assets/previews/double11-kv.webp" data-original-src="assets/case/double11-kv.jpg" alt="大唐无双手游双十一直播福利节主视觉" width="1000" height="563" loading="lazy" decoding="async" />
              </a>
              <figcaption><span class="focus-step" aria-hidden="true">02</span><b>手游直播主视觉</b><span>对接平面出图</span></figcaption>
            </figure>
            <figure class="case-shot">
              <a class="shot-frame" href="assets/case/double11-teasers.jpg" data-shot>
                <img src="assets/previews/double11-teasers.webp" data-original-src="assets/case/double11-teasers.jpg" alt="左为端游、右为手游的预告文案和视频画面" width="840" height="536" loading="lazy" decoding="async" />
              </a>
              <figcaption><span class="focus-step" aria-hidden="true">03</span><b>端手游预告</b><span>左：端游 / 右：手游。发布文案与视频画面节选。</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="case-node">
        <header class="case-node-head">
          <span class="case-node-date">开播前</span>
          <div>
            <h4>整理商品库存，跟进上架测试</h4>
            <p>端手游累计整理 100+ 件商品，核对道具、价格、库存和限购。跟进 QA 先跑通一笔下单到道具到账的流程，再逐款核对上架结果。</p>
            <p>把每一步的交付物、通过标准、每日同步内容和卡点处理写进测试 SOP，下次开播前可以照着检查。</p>
          </div>
        </header>
        <div class="case-media is-pair">
          <figure class="case-shot is-scroll">
            <div class="shot-box">
              <div class="shot-frame" tabindex="0" role="region" aria-label="端手游商品清单，可上下滚动">
                <img src="assets/previews/double11-inventory.webp" data-original-src="assets/case/double11-inventory.jpg" alt="端游礼包与手游配图商品清单节选，包含商品名、图标、分区和道具说明" width="930" height="1559" loading="lazy" decoding="async" />
              </div>
              <span class="shot-hint">图内可上下滚动</span>
            </div>
            <figcaption>
              <b>端手游商品清单</b><span>节选，省略内部编号和价格列</span>
              <a class="shot-open" href="assets/case/double11-inventory.jpg" target="_blank" rel="noopener">查看长图 ↗</a>
            </figcaption>
          </figure>
          <figure class="case-shot is-scroll">
            <div class="shot-box">
              <div class="shot-frame" tabindex="0" role="region" aria-label="直播测试 SOP，可上下滚动">
                <img src="assets/previews/double11-qa-sop.webp" data-original-src="assets/case/double11-qa-sop.jpg?v=author" alt="手游直播测试 SOP，署名陈宇萱，其他人员的姓名已打码" width="850" height="2245" loading="lazy" decoding="async" />
              </div>
              <span class="shot-hint">图内可上下滚动</span>
            </div>
            <figcaption>
              <b>直播测试 SOP</b><span>署名陈宇萱，其他姓名已打码</span>
              <a class="shot-open" href="assets/case/double11-qa-sop.jpg?v=author" target="_blank" rel="noopener">查看长图 ↗</a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section class="case-node">
        <header class="case-node-head">
          <span class="case-node-date">直播</span>
          <div><h4>现场跟进与播后收尾</h4></div>
        </header>
        <div class="case-media is-pair">
          <article class="case-card">
            <span class="case-tag">直播中</span>
            <h4 class="case-subhead" style="margin: 8px 0;">同步跟进直播现场</h4>
            <p>开播后同步跟进现场进度。本次直播观看量 50 万+。</p>
          </article>
          <article class="case-card">
            <span class="case-tag">直播后</span>
            <h4 class="case-subhead" style="margin: 8px 0;">礼物寄出与数据复盘</h4>
            <p>继续跟进直播礼物寄出，汇总直播数据、核算指标，整理本次直播复盘。</p>
          </article>
        </div>
        <div style="max-width: 470px; margin-top: 20px; --photo-height: clamp(190px, 55vw, 320px);">
          <div style="display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 4px 12px; margin-bottom: 10px;">
            <h5 id="double11-photos-title" class="case-tag">双十一直播现场 · 2 张</h5>
            <span class="case-detail-text" style="font-size: 12px;">← 左右滑动 → · 点图放大</span>
          </div>
          <div role="region" aria-labelledby="double11-photos-title" tabindex="0" style="display: flex; gap: 12px; overflow-x: auto; overscroll-behavior-x: contain; scroll-snap-type: x mandatory; padding-bottom: 8px; scrollbar-width: thin; scrollbar-color: var(--line-strong) transparent;">
            <figure class="case-shot" style="flex: 0 0 78%; max-width: 300px; scroll-snap-align: start;">
              <a class="shot-frame" href="assets/case/double11-live-control.jpg" data-shot>
                <img src="assets/previews/double11-live-control.webp" data-original-src="assets/case/double11-live-control.jpg" alt="双十一直播的导播工作区与布景，屏幕和纸面细节已遮挡" width="1000" height="1331" loading="lazy" decoding="async" style="height: var(--photo-height); object-fit: contain; background: #0b1117;" />
              </a>
              <figcaption><b>01 / 02</b><span>导播工作区</span></figcaption>
            </figure>
            <figure class="case-shot" style="flex: 0 0 78%; max-width: 300px; scroll-snap-align: start;">
              <a class="shot-frame" href="assets/case/double11-live-stage.jpg" data-shot>
                <img src="assets/previews/double11-live-stage.webp" data-original-src="assets/case/double11-live-stage.jpg" alt="从侧上方拍摄的双十一直播舞台和布景" width="1000" height="1331" loading="lazy" decoding="async" style="height: var(--photo-height); object-fit: contain; background: #0b1117;" />
              </a>
              <figcaption><b>02 / 02</b><span>直播舞台</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <a class="case-back" href="#officialContent" data-goto="officialContent">← 返回官方内容与社媒运营</a>
    `,
  },
  caseStarPlan: {
    en: "STAR PLAN",
    title: "星推计划 · 达人激励与投放",
    html: `
      <a class="case-back" href="#creatorWork" data-goto="creatorWork">← 返回达人合作与账号运营</a>

      <p class="case-detail-kicker">网易互娱《大唐无双》 · 星推计划第十六期 / 2026.12</p>
      <h3 class="case-detail-title">把下个月的产品重点，<br />翻成一期达人激励</h3>
      <p class="case-detail-lead">星推计划是《大唐无双》做给主播和创作者的月度激励，一期 30 天，报名、投稿、发奖、结算全在线上跑完。第十六期我跟的是完整一轮：这个月推什么、档位怎么切、brief 和文案怎么写、长图什么时候上线、码发给谁、结束后怎么验算。奖励金额和内部结算口径不对外，这里只讲这一期是怎么被做出来的。</p>

      <section class="case-stats" aria-label="这一期的三个数字">
        <span><b>2000w+</b> 抖音话题曝光</span>
        <span><b>5 类</b> 赛道与档位</span>
        <span><b>272</b> 个礼包码</span>
      </section>

      <section class="case-node">
        <header class="case-node-head">
          <span class="case-node-date">01</span>
          <div>
            <h4>这个月主推新区</h4>
            <p>期次的侧重不是拍脑袋定的，跟着产品当月的宣发节奏走。<strong>资料片和新区</strong>是这一期的重点，所以原来的直播、短视频两条赛道不动，另外加了一条新区打卡——所有内容挂同一个话题标签收口，不然投稿散在几十个话题里，既统计不了，也判断不出这一期到底跑没跑起来。</p>
          </div>
        </header>
        <figure class="case-longfig">
          <a href="assets/case/koc-long.png" data-shot aria-label="查看招募长图原尺寸">
            <img src="assets/previews/koc-long.webp" data-original-src="assets/case/koc-long.png" alt="星推计划第十六期招募长图（结构示意）" width="750" height="2193" loading="lazy" decoding="async" />
          </a>
          <figcaption><b>招募长图</b> 整期对外只发这一张：先讲这是干什么的、能拿到什么，再讲三条赛道各自怎么算达标，最后是参与须知。金额、二维码与投稿入口不在此展示，点开可看原尺寸。</figcaption>
        </figure>
      </section>

      <section class="case-node">
        <header class="case-node-head">
          <span class="case-node-date">02</span>
          <div>
            <h4>文案的顺序是写死的</h4>
            <p>这份文案同时给达人和他们的粉丝看。<strong>先一句话说清能拿到什么</strong>，再逐个讲赛道怎么算达标，最后才是参与须知。达人最常问的两句——「必须播满多少天」「一条视频算不算」——都压在前两屏，不用翻到最后才找到。</p>
            <div class="case-docs">
              <a class="case-doc" href="assets/case/koc-copy.png" data-shot>
                <img src="assets/previews/koc-copy-thumb.webp" data-original-src="assets/case/koc-copy-thumb.png" alt="招募文案文档首屏" width="612" height="662" loading="lazy" decoding="async" style="width: 64px; height: 82px; flex: none;" />
                <span><b>招募文案</b><em>5 页 · 活动介绍与直播激励</em></span>
              </a>
              <a class="case-doc" href="assets/case/koc-notice.png" data-shot>
                <img src="assets/previews/koc-notice-thumb.webp" data-original-src="assets/case/koc-notice-thumb.png" alt="参与须知页" width="660" height="630" loading="lazy" decoding="async" style="width: 64px; height: 82px; flex: none;" />
                <span><b>参与须知</b><em>5 条 · 原创、反刷量、违规处理</em></span>
              </a>
            </div>
          </div>
        </header>
      </section>

      <section class="case-node focus-panel is-version">
        <header class="case-node-head">
          <span class="focus-kicker">INCENTIVE / 档位</span>
          <div>
            <h4>每一条档位，后台都能直接判</h4>
            <p>奖励不分档没人愿意多播，分太细结算又算不清。所以每条赛道的判定口径都落成后台能读的字段：开播天数、日均时长、总场观、平均在线人数（ACU）、单条播放量、账号期总播放量。<strong>能取高的地方取高不叠加，能做上限的地方都设了单人上限</strong>，避免一条爆款把整月预算吃掉。</p>
          </div>
        </header>
        <div class="case-grid is-3">
          <article class="case-cell">
            <span class="case-tag">01 / 直播</span>
            <h5>三条线同时达标才定档</h5>
            <p>有效开播天数、日均时长、总场观三项一起达标才进档；排名榜按平均在线人数（ACU）取前 40；新人首次参与且有效开播满 7 天，另有新人档。</p>
          </article>
          <article class="case-cell">
            <span class="case-tag">02 / 短视频</span>
            <h5>单条看播放，账号看总量</h5>
            <p>单条作品按播放量分两档，每天最多算 2 条；账号期内总播放量与单条<strong>取高不叠加</strong>；分发到快手、视频号与 7 日破 1.5 万另有加奖，都设单人上限。</p>
          </article>
          <article class="case-cell">
            <span class="case-tag">03 / 新区打卡</span>
            <h5>这期新增的第三条赛道</h5>
            <p>新区开服期内发布打卡内容、带统一话题标签，按有效投稿结算。目的是把内容往新区导，而不是又开出几十个零散话题。</p>
          </article>
        </div>
      </section>

      <section class="case-node focus-panel is-live">
        <header class="case-node-head">
          <span class="focus-kicker">AFTER LAUNCH / 上线之后</span>
          <div>
            <h4>上线只是一半，抽审和巡场在后面</h4>
            <p>投稿按 5% 比例抽审：内容类型对不对、话题标签带没带、播放量跟后台是否一致。这一期抽了 151 条，2 条按规则打回。同时每天按话题刷最新，看玩家在聊什么——吐槽集中的点会记进下一期的选题。</p>
          </div>
        </header>
        <figure class="case-shot">
          <div class="shot-box">
            <div class="shot-frame">
              <img src="assets/previews/koc-review.webp" data-original-src="assets/case/koc-review.png" alt="稿件审核后台" width="1832" height="780" loading="lazy" decoding="async" />
            </div>
          </div>
          <figcaption><b>稿件审核台</b> 通过 / 不通过、话题标签、播放量在同一屏对完；作者与账号信息已打码。</figcaption>
        </figure>
        <div class="case-stats">
          <span><b>5.01%</b> 实际抽审比例</span>
          <span><b>151</b> 条抽审稿件</span>
          <span><b>2</b> 条按规则打回</span>
        </div>
      </section>

      <h4 class="case-subhead">这一期最费时间的，是把「有效」写清楚</h4>
      <p class="case-detail-text">不是写文案，是定规则。规则写模糊，结算时就要一条条吵；写太死，达人又觉得不值得播。分档、上限、并列取高，本质上是在「算得清」和「有人愿意来」之间找平衡——这也是做完这一期最直接的收获。</p>

      <h4 class="case-subhead">结算那一段在哪</h4>
      <p class="case-detail-text">这一期发出去的 272 个码，激活数据我单独洗了一版：5 个批次、1.2 万行，异常账号 13.7%。过程和交付物在 <a href="#caseCodeData" data-goto="caseCodeData">CASE 03 · 礼包码数据清洗</a> 里。</p>

      <a class="case-back" href="#creatorWork" data-goto="creatorWork">← 返回达人合作与账号运营</a>
    `,
  },
  caseCodeData: {
    en: "REDEEM DATA",
    title: "礼包码数据清洗",
    html: `
      <a class="case-back" href="#dataWork" data-goto="dataWork">← 返回数据运营</a>

      <p class="case-detail-kicker">网易互娱《大唐无双》 · 星推计划结算</p>
      <h3 class="case-detail-title">1.2 万行激活流水，<br />最后交出去是一张能对账的表</h3>
      <p class="case-detail-lead">每期达人激励结束都要按规则核算，前提是先把礼包码的激活数据洗干净。原始过来的是一个账号一行的流水：同一条码一分钟内挤进好几条激活、同一个注册日批量冒出来的空号、尾号连号的脚本账号。我要交出去的不是一张更漂亮的表，而是别人能直接拿去对账、还能自己复算的数。</p>

      <section class="case-stats" aria-label="这套数据的三个数字">
        <span><b>12,687</b> 行有效激活</span>
        <span><b>13.7%</b> 异常行</span>
        <span><b>8</b> 个 sheet</span>
      </section>

      <section class="case-node">
        <header class="case-node-head">
          <span class="case-node-date">01</span>
          <div>
            <h4>原始数据长这样</h4>
            <p>一行一个账号，16 列：批次、礼包码、激活时间、注册时间、分层、aid、urs、消费。看上去很规整，问题都藏在字段之间的组合里——单看哪一列都正常，连起来才看得出是同一批机器号。</p>
          </div>
        </header>
        <figure class="case-shot">
          <div class="shot-box">
            <div class="shot-frame">
              <img src="assets/previews/koc-raw.webp" data-original-src="assets/case/koc-raw.png" alt="礼包码原始明细节选" width="1445" height="340" loading="lazy" decoding="async" />
            </div>
          </div>
          <figcaption><b>原始明细</b> uid、urs、消费与付费列已打码，只留结构。</figcaption>
        </figure>
      </section>

      <section class="case-node">
        <header class="case-node-head">
          <span class="case-node-date">02</span>
          <div>
            <h4>五个批次横着比，才看出问题在哪</h4>
            <p>6-7 月和 9-10 月是两波高峰，其中 6-7 月的新用户占比 <strong>55.6%</strong>，是资料片带量的那批；8 月只有 11 行有效激活——回头查是码根本没发出去，不是数据脏。这一层如果不画出来，光看汇总表是看不出的。</p>
          </div>
        </header>
        <div class="case-media is-pair">
          <figure class="case-shot">
            <div class="shot-box">
              <div class="shot-frame">
                <img src="assets/previews/chart-batch.webp" data-original-src="assets/case/chart-batch.png" alt="五个批次的有效激活与新用户占比" width="1353" height="824" loading="lazy" decoding="async" />
              </div>
            </div>
            <figcaption><b>批次对比</b> 柱是有效激活行，折线是新用户占比。</figcaption>
          </figure>
          <figure class="case-shot">
            <div class="shot-box">
              <div class="shot-frame">
                <img src="assets/previews/chart-tier.webp" data-original-src="assets/case/chart-tier.png" alt="有效激活的分层构成" width="1304" height="643" loading="lazy" decoding="async" />
              </div>
            </div>
            <figcaption><b>分层构成</b> 新用户与活跃老用户几乎对半，回流占三成。</figcaption>
          </figure>
        </div>
      </section>

      <section class="case-node">
        <header class="case-node-head">
          <span class="case-node-date">03</span>
          <div>
            <h4>口径先定死，五个批次才能比</h4>
            <p>分层只看两个字段：<strong>注册时间</strong>和「区间内有没有登录过」。口径定下来，后面换批次不用改逻辑，五个月的数据才能放在一张图里横着看。</p>
          </div>
        </header>
        <div class="case-grid is-4">
          <article class="case-cell">
            <span class="case-tag">新用户</span>
            <h5>4,483</h5>
            <p>注册时间 ≥ 本批次查询区间开始日</p>
          </article>
          <article class="case-cell">
            <span class="case-tag">活跃老用户</span>
            <h5>4,454</h5>
            <p>区间前已注册，两周内登录 = 1</p>
          </article>
          <article class="case-cell">
            <span class="case-tag">轻度回流</span>
            <h5>2,686</h5>
            <p>两周内没登录，过去一年登录过</p>
          </article>
          <article class="case-cell">
            <span class="case-tag">重度回流</span>
            <h5>1,064</h5>
            <p>两周内没登录，过去一年也没登录</p>
          </article>
        </div>
      </section>

      <section class="case-node focus-panel is-live">
        <header class="case-node-head">
          <span class="focus-kicker">ANOMALY / 异常</span>
          <div>
            <h4>异常不删，单独拎出来给人确认</h4>
            <p>三条规则取并集，一条都不删——删了就没有复核的余地。明细里单独标「命中规则」，一个账号可以同时命中多条，这样才不会漏看。</p>
          </div>
        </header>
        <div class="case-grid is-3">
          <article class="case-cell">
            <span class="case-tag">A</span>
            <h5>一分钟内挤激活</h5>
            <p>同一礼包码、1 分钟内 ≥5 个账号激活。正常玩家激活时间是散的，一分钟挤进来 5 个以上不正常。</p>
          </article>
          <article class="case-cell">
            <span class="case-tag">C</span>
            <h5>同注册日的空号</h5>
            <p>同一码、同一注册日 ≥3 个账号，且消费点数全为 0，对应「一批相似账号都没消费」。</p>
          </article>
          <article class="case-cell">
            <span class="case-tag">G</span>
            <h5>连号脚本注册</h5>
            <p>同一码、账号前缀相同、尾号连号 ≥3 个，脚本批量注册的典型特征。</p>
          </article>
        </div>
        <figure class="case-shot">
          <div class="shot-box">
            <div class="shot-frame">
              <img src="assets/previews/chart-abn.webp" data-original-src="assets/case/chart-abn.png" alt="各批次异常占比" width="1135" height="717" loading="lazy" decoding="async" />
            </div>
          </div>
          <figcaption><b>异常占比</b> 各批形态不一样：4 月三种都有，5 月以连号为主。8 月 45.5% 看着最脏，其实分母只有 11 行。</figcaption>
        </figure>
      </section>

      <section class="case-node focus-panel is-version">
        <header class="case-node-head">
          <span class="focus-kicker">DELIVERY / 交付</span>
          <div>
            <h4>交出去是 8 个 sheet，不是一个文件</h4>
            <p>同一个文件里按用途拆开：给人看结论的、给人核明细的、说明口径的。谁拿到表先看哪一页很明确，不用再问「这个数怎么来的」。</p>
          </div>
        </header>
        <div class="case-grid is-3">
          <article class="case-cell">
            <span class="case-tag">看结论</span>
            <h5>3 张汇总</h5>
            <p>按批次、按月、按码。按码那张正好 272 行，跟发出去的码一一对应，谁用了多少一查就有。</p>
          </article>
          <article class="case-cell">
            <span class="case-tag">核明细</span>
            <h5>3 张明细</h5>
            <p>全部 12,687 行、异常 1,732 行，加一张按规则统计的异常分布，逐行可追溯。</p>
          </article>
          <article class="case-cell">
            <span class="case-tag">对口径</span>
            <h5>2 张说明</h5>
            <p>说明与口径 47 行，待确认事项 6 条——把「我一个人定不了的」写在明面上。</p>
          </article>
        </div>
      </section>

      <h4 class="case-subhead">洗完看出三件事</h4>
      <p class="case-detail-text"><strong>55.6%</strong>：6-7 月那一批的新用户占比最高，资料片带来的量最实；<strong>78 / 80</strong>：8 月 80 个码里 78 个零激活，问题在发码流程，不在数据；<strong>13.7%</strong>：整体异常率不低，而且形态随批次变，说明每批的渠道不一样，规则不能一套用到底。</p>

      <h4 class="case-subhead">怎么确认自己没算错</h4>
      <p class="case-detail-text">随机抽 30 行手算分层，跟脚本结果对；三条异常规则单独跑一遍，看有没有互相吃掉；最后拿「按码」汇总跟产品给的 272 个码对数量。前两遍查出两处口径写反，第三遍确认一个码都没少。</p>

      <a class="case-back" href="#dataWork" data-goto="dataWork">← 返回数据运营</a>
    `,
  },
  skill: {
    en: "SKILL TREE",
    title: "技能树",
    html: `
      <div class="skill-grid">
        <section class="skill-card skill-lead">
          <header class="resume-sec-head"><h3>内容 × AI</h3><em>CONTENT × AI</em></header>
          <p class="skill-text">B 站、抖音、小红书长期深度用户，熟悉平台内容和热点。能独立完成<strong>选题、AIGC 素材生产到多平台发布</strong>。</p>
        </section>
        <section class="skill-card skill-lead tone-blue">
          <header class="resume-sec-head"><h3>营销 × 数据</h3><em>MARKETING × DATA</em></header>
          <p class="skill-text">做过内容营销和数据运营，习惯<strong>用数据看内容和投放效果</strong>。熟悉预热、达人合作到直播的流程。</p>
        </section>
        <section class="skill-card tone-violet">
          <header class="resume-sec-head"><h3>达人合作</h3><em>KOL &amp; KOC</em></header>
          <p class="skill-text">对接游戏直播博主、coser 等创作者，参与 <strong>KOC 活动框架和激励机制调整</strong>。</p>
        </section>
        <section class="skill-card tone-ember">
          <header class="resume-sec-head"><h3>赛事执行</h3><em>LIVE EVENT</em></header>
          <p class="skill-text">跟过 5v5 赛事从预选赛到总决赛，负责<strong>赛制落地、选手对接、赛程排期和现场预案</strong>。</p>
        </section>
      </div>

      <section class="resume-sec skill-tools">
        <header class="resume-sec-head"><h3>工具</h3><em>TOOLS</em></header>
        <p class="skill-text">AI / AIGC：Claude、ChatGPT、Kimi、Codex、豆包、即梦（生图 / 生视频）<br />数据 / 剪辑：MATLAB、Python、Excel、剪映<br />证书：CET-6（524）、计算机二级</p>
        <div class="tags">
          <span class="tag">Claude</span>
          <span class="tag">ChatGPT</span>
          <span class="tag">Kimi</span>
          <span class="tag">Codex</span>
          <span class="tag">豆包</span>
          <span class="tag">即梦</span>
          <span class="tag">剪映</span>
          <span class="tag">Python</span>
          <span class="tag">MATLAB</span>
          <span class="tag">Excel</span>
        </div>
      </section>
    `,
  },

  contact: {
    en: "CONTACT",
    title: "组队邀请",
    html: `
      <div class="contact-panel">
        <a class="contact-row contact-email" href="mailto:2825641638@qq.com"><span>EMAIL / 邮箱</span><span>2825641638@qq.com</span></a>
        <a class="contact-row" href="tel:19066712893"><span>PHONE / 电话</span><span>19066712893</span></a>
      </div>
      <div class="contact-row"><span>LOCATION / 城市</span><span>广州</span></div>
      <div class="tags" style="margin-top:24px;">
        <span class="tag">抖音 · cosplay</span>
        <span class="tag">B 站</span>
        <span class="tag">小红书</span>
      </div>
    `,
  },
};

/* ============ 启动画面 ============ */
const boot = document.getElementById("boot");
const bootFill = document.getElementById("bootFill");
const bootPct = document.getElementById("bootPct");
const app = document.getElementById("app");
const pageParams = new URLSearchParams(location.search);
const dockLayout = pageParams.get("layout") !== "classic";
const initial = location.hash.slice(1);
const hasInitialView = Object.hasOwn(DATA, initial);
app.classList.toggle("dock-layout", dockLayout);

const skipBoot = pageParams.has("noboot");
function startBoot() {
  function revealApp() {
    boot.classList.add("done");
    app.classList.add("show");
    if (!hasInitialView && pet.classList.contains("is-docked")
        && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      petBody.classList.add("arrive");
    }
  }

  if (skipBoot) {
    revealApp();
    return;
  }

  let pct = 0;
  const timer = setInterval(() => {
    pct = Math.min(100, pct + Math.random() * 14 + 4);
    bootFill.style.width = pct + "%";
    bootPct.textContent = Math.floor(pct);
    if (pct === 100) {
      clearInterval(timer);
      setTimeout(revealApp, 280);
    }
  }, 90);
}

/* ============ 卡片数字动画 ============ */
function runCounters() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = +el.dataset.count;
    const dur = 1200;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* ============ 菜单交互 ============ */
const items = [...document.querySelectorAll(".menu-item")];
const view = document.getElementById("view");
const viewEn = document.getElementById("viewEn");
const viewTitle = document.getElementById("viewTitle");
const viewBody = document.getElementById("viewBody");
const viewIdx = document.getElementById("viewIdx");
const viewScroll = document.querySelector(".view-scroll");
const viewUp = document.getElementById("viewUp");

const VIEW_PARENTS = {
  officialContent: "works",
  creatorWork: "works",
  dataWork: "works",
  officialDaily: "officialContent",
  caseContent: "officialContent",
  caseDouble11: "officialContent",
  caseStarPlan: "creatorWork",
  caseCodeData: "dataWork",
};
const VIEW_PARENT_LABEL = {
  works: "返回作品",
  officialContent: "返回官方内容",
  creatorWork: "返回达人合作",
  dataWork: "返回数据运营",
};
let active = 0;
let renderedView;

function setActive(i) {
  items.forEach((el, k) => el.classList.toggle("active", k === i));
  active = i;
}

items.forEach((el, i) => {
  el.addEventListener("mouseenter", () => setActive(i));
  el.addEventListener("click", () => {
    setActive(i);
    openView(el.dataset.view, i);
  });
});

function openView(key, index) {
  const d = DATA[key];
  if (!d) return;
  if (index === undefined) {
    index = items.findIndex((el) => el.dataset.view === key);
  }
  viewEn.textContent = d.en;
  viewTitle.textContent = d.title;
  const isCase = key.startsWith("case");
  const isWorkCategory = Boolean(d.caseNumber);
  viewIdx.textContent = index >= 0
    ? String(index + 1).padStart(2, "0") + " / " + String(items.length).padStart(2, "0")
    : isWorkCategory ? "CASE " + d.caseNumber : "WORKS";
  view.classList.toggle("wide", key === "profile" || isWorkCategory || isCase);
  view.classList.toggle("case-view", isCase);
  view.classList.toggle("work-category-view", isWorkCategory || key === "officialDaily");
  view.classList.add("open");
  if (renderedView !== key || viewBody.querySelector("img[data-load-failed]")) {
    viewBody.innerHTML = d.html;
    renderedView = key;
  }
  viewScroll.scrollTop = 0;
  document.title = d.title + " · 陈宇萱";
  if (location.hash.slice(1) !== key) history.replaceState(null, "", "#" + key);
  const parentKey = VIEW_PARENTS[key];
  viewUp.hidden = !parentKey;
  viewUp.dataset.up = parentKey || "";
  if (parentKey) {
    viewUp.textContent = "← " + (VIEW_PARENT_LABEL[parentKey] || "返回上一级");
  }
  setPetContext(key);
}
viewUp.addEventListener("click", () => {
  const parentKey = viewUp.dataset.up;
  if (parentKey && DATA[parentKey]) openView(parentKey);
});

function closeView() {
  view.classList.remove("open");
  document.title = "陈宇萱 · PLAYER FILE";
  history.replaceState(null, "", location.pathname + location.search);
  setPetContext("home");
}
document.getElementById("viewClose").addEventListener("click", closeView);
viewBody.addEventListener("error", (event) => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement)) return;
  const originalSrc = image.dataset.originalSrc;
  if (!originalSrc) {
    image.dataset.loadFailed = "true";
    return;
  }
  delete image.dataset.originalSrc;
  image.src = originalSrc;
}, true);

/* 图片点击放大 */
const lightbox = document.getElementById("lightbox");
const lightboxStatus = document.getElementById("lightboxStatus");
let lightboxImg = document.getElementById("lightboxImg");
let lightboxRequest;

function setLightboxStatus(text) {
  lightboxStatus.textContent = text;
  lightboxStatus.hidden = !text;
}

function openLightbox(src, thumbnail) {
  const image = new Image();
  image.id = "lightboxImg";
  image.alt = thumbnail?.alt || "";
  image.decoding = "async";
  lightboxRequest = image;

  const preview = thumbnail?.complete && thumbnail.naturalWidth > 0
    && thumbnail.currentSrc !== src ? thumbnail.currentSrc : "";
  if (preview) {
    lightboxImg.alt = image.alt;
    lightboxImg.src = preview;
  } else {
    lightboxImg.replaceWith(image);
    lightboxImg = image;
  }

  setLightboxStatus("正在加载原图…");
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  image.addEventListener("load", () => {
    if (lightboxRequest !== image) return;
    if (lightboxImg !== image) {
      lightboxImg.replaceWith(image);
      lightboxImg = image;
    }
    setLightboxStatus("");
  }, { once: true });
  image.addEventListener("error", () => {
    if (lightboxRequest !== image) return;
    setLightboxStatus(preview ? "原图暂未加载，当前显示预览。" : "图片加载失败，可以关闭后再试。");
  }, { once: true });
  image.src = src;
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  setLightboxStatus("");
  if (lightboxRequest && lightboxRequest !== lightboxImg) lightboxRequest.removeAttribute("src");
  lightboxRequest = null;
  lightboxImg.removeAttribute("src");
}
lightbox.addEventListener("click", (event) => {
  if (event.target !== lightboxImg) closeLightbox();
});
viewBody.addEventListener("click", (e) => {
  const go = e.target.closest("[data-goto]");
  if (go) {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    openView(go.dataset.goto);
    viewTitle.focus({ preventScroll: true });
    return;
  }
  const link = e.target.closest("a[data-shot]");
  if (!link) return;
  e.preventDefault();
  openLightbox(link.href, link.querySelector("img"));
});

/* 键盘 */
window.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("open")) {
    if (e.key === "Escape") closeLightbox();
    return;
  }
  if (view.classList.contains("open")) {
    if (e.key === "Escape") closeView();
    return;
  }
  if (e.key === "ArrowDown") {
    e.preventDefault();
    setActive((active + 1) % items.length);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    setActive((active - 1 + items.length) % items.length);
  } else if (e.key === "Enter" && !e.target.closest?.("a[href], button")) {
    openView(items[active].dataset.view, active);
  }
});

setActive(0);

/* 主题切换 */
const themeToggle = document.getElementById("themeToggle");
const rootEl = document.documentElement;
function updateThemeToggle() {
  const isLight = rootEl.dataset.theme === "light";
  themeToggle.textContent = isLight ? "◑ 暗色" : "◐ 亮色";
  themeToggle.setAttribute("aria-label", isLight ? "切换到暗色主题" : "切换到亮色主题");
}
updateThemeToggle();
themeToggle.addEventListener("click", () => {
  const theme = rootEl.dataset.theme === "light" ? "dark" : "light";
  rootEl.dataset.theme = theme;
  updateThemeToggle();
  try { localStorage.setItem("portfolio-theme", theme); } catch (e) {}
});

/* ============ 桌宠向导 ============ */
const pet = document.getElementById("pet");
const petBubble = document.getElementById("petBubble");
const petText = document.getElementById("petText");
const petBody = document.getElementById("petBody");
const petDock = document.getElementById("petDock");

const PET_LINES = {
  home: [
    "可以拖我换个位置，点一下我就说话。",
    "↑↓ 选菜单，ENTER 进去，ESC 回来。",
    "这里是陈宇萱的 PLAYER FILE，随便逛逛。",
    "右上角可以切换亮色和暗色。",
  ],
  profile: [
    "左边是个人信息，右边是教育背景和自我介绍。",
    "广东工业大学 · 金融工程，2024 级。",
    "完整简历可以发邮件索取。",
  ],
  games: [
    "游戏经历分七个品类，从 ARPG 开始往下滑。",
    "表格里是玩得久的，其他都在「其他玩过」。",
    "截图都能点开放大，数据看得清。",
    "我的世界 3000h+，这个是真的。",
    "剧情向那几款时间不长，但都认真通关了。",
  ],
  quest: [
    "两段实习：网易互娱产品营销，赢商网数据运营。",
    "网易那段做直播预热和赛事传播，结果都写在卡片里。",
  ],
  works: [
    "这页按能力分块，每块下面是做过的项目。",
    "点开三个案例，可以分别看项目和结果。",
  ],
  officialContent: [
    "左边偏图文，右边偏直播和互动。",
    "万国霸业和双十一都能点开看具体物料。",
  ],
  officialDaily: [
    "日常内容按官网、公众号和抖音官号来整理。",
  ],
  creatorWork: [
    "这里一边是达人合作，一边是我自己做的账号。",
  ],
  dataWork: [
    "数据清洗后，把判定口径做成了 SOP 和模板。",
  ],
  caseContent: [
    "这里有两条线：万国霸业资料片宣发、潜龙争霸赛。",
    "首曝框架和长图可以直接在图里上下滚动。",
    "往下还能看赛程文案和总决赛现场物料。",
  ],
  caseDouble11: [
    "手游预热新闻稿是独立撰写的，可以点开看长图。",
  ],
  caseStarPlan: [
    "这页讲的是激励怎么定，不是稿子怎么写。",
    "金额不对外，表里只写结构和口径。",
    "长图能点开看原图。",
  ],
  caseCodeData: [
    "1.2 万行明细，全靠口径统一才洗得动。",
    "异常账号单独拎出来，一条没删。",
    "表格可以左右滑，手机上也看得清。",
  ],
  skill: [
    "技能树：内容营销、数据、达人、赛事，还有工具。",
    "点旁边的菜单能换页，不用一直停在这。",
  ],
  contact: [
    "想聊就从这页拿联系方式。",
    "电话、邮箱、城市都在这了。",
  ],
};

const PET_CLICKS = [
  "别戳我，我在带路。",
  "……在呢。",
  "又见面了。",
  "点得挺勤。",
  "要不要先看看游戏经历？",
];

let petCtx = "home";
let petIdx = 0;
let petClickIdx = 0;
let petPosition;
let petDrag;
let petDragged = false;

function petSay(text) {
  if (!petText || !petBubble) return;
  petText.textContent = text;
  petBubble.classList.add("show");
  clearTimeout(petSay._timer);
  petSay._timer = setTimeout(() => petBubble.classList.remove("show"), 8000);
}

function setPetContext(key) {
  if (!PET_LINES[key]) key = "home";
  petCtx = key;
  syncPetDock();
  if (dockLayout && !view.classList.contains("open")) {
    petIdx = -1;
    petBubble.classList.remove("show");
    return;
  }
  petIdx = 0;
  petSay(PET_LINES[key][0]);
}

function syncPetDock() {
  const docked = dockLayout && !petPosition && !view.classList.contains("open");
  pet.classList.toggle("is-docked", docked);
  if (!docked) {
    pet.classList.remove("dock-offscreen");
    petBody.classList.remove("arrive");
    return;
  }
  const { left, top, width, height } = petDock.getBoundingClientRect();
  const centerY = top + height / 2;
  const halfHeight = pet.offsetHeight / 2;
  pet.style.setProperty("--dock-x", `${left + width / 2}px`);
  pet.style.setProperty("--dock-y", `${centerY}px`);
  pet.classList.toggle("dock-offscreen", centerY - halfHeight < 0 || centerY + halfHeight > rootEl.clientHeight);
}

function movePet(left, top) {
  const width = pet.offsetWidth;
  const height = pet.offsetHeight;
  const viewportWidth = rootEl.clientWidth;
  const viewportHeight = rootEl.clientHeight;
  const x = Math.max(10, Math.min(left, viewportWidth - width - 10));
  const y = Math.max(22, Math.min(top, viewportHeight - height - 10));

  petPosition = { x, y };
  pet.style.left = `${x}px`;
  pet.style.top = `${y}px`;
  pet.classList.remove("is-docked", "dock-offscreen");
  pet.classList.add("is-positioned");
  pet.classList.toggle("bubble-right", x + width / 2 < viewportWidth / 2);
  pet.classList.toggle("bubble-below", y < viewportHeight / 2);
}

if (petBody) {
  petBody.addEventListener("pointerdown", (e) => {
    if (e.button !== 0 || !e.isPrimary || petDrag) return;
    petBody.classList.remove("arrive");
    const { left, top } = pet.getBoundingClientRect();
    petDragged = false;
    petDrag = { id: e.pointerId, left, top, startX: e.clientX, startY: e.clientY };
    petBody.setPointerCapture(e.pointerId);
  });

  petBody.addEventListener("pointermove", (e) => {
    if (petDrag?.id !== e.pointerId) return;
    const dx = e.clientX - petDrag.startX;
    const dy = e.clientY - petDrag.startY;
    if (!petDragged && Math.hypot(dx, dy) < 6) return;
    if (!petDragged) {
      petDragged = true;
      pet.classList.add("is-dragging");
      petBody.classList.remove("jump");
    }
    movePet(petDrag.left + dx, petDrag.top + dy);
  });

  function finishPetDrag(e) {
    if (petDrag?.id !== e.pointerId) return;
    petDrag = null;
    pet.classList.remove("is-dragging");
  }
  petBody.addEventListener("pointerup", finishPetDrag);
  petBody.addEventListener("pointercancel", finishPetDrag);
  petBody.addEventListener("lostpointercapture", finishPetDrag);
  window.addEventListener("resize", () => {
    if (petPosition) movePet(petPosition.x, petPosition.y);
    else syncPetDock();
  });
  if (dockLayout) app.addEventListener("scroll", syncPetDock, { passive: true });

  petBody.addEventListener("animationend", (e) => {
    if (e.animationName === "petArrive") petBody.classList.remove("arrive");
    if (e.animationName === "petJump") petBody.classList.remove("jump");
  });
  petBody.addEventListener("click", (e) => {
    if (petDragged && e.detail > 0) return;
    petBody.classList.remove("arrive", "jump");
    void petBody.offsetWidth;
    petBody.classList.add("jump");
    const lines = PET_LINES[petCtx] || PET_LINES.home;
    petIdx = (petIdx + 1) % lines.length;
    const text = petIdx !== 0 && Math.random() < 0.3
      ? PET_CLICKS[petClickIdx++ % PET_CLICKS.length]
      : lines[petIdx];
    petSay(text);
  });
}

if (dockLayout) setPetContext("home");
else {
  setTimeout(() => {
    if (!view.classList.contains("open")) setPetContext("home");
  }, skipBoot ? 600 : 2600);
}

/* 支持 #profile / #quest 等直达链接 */
function openLinkedView() {
  const key = location.hash.slice(1);
  if (Object.hasOwn(DATA, key)) openView(key);
  else if (!key && view.classList.contains("open")) closeView();
}

window.addEventListener("hashchange", openLinkedView);
if (hasInitialView) {
  if (skipBoot) openLinkedView();
  else setTimeout(openLinkedView, 900);
}

startBoot();

