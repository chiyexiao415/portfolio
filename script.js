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
          <div class="resume-strength">核心优势：内容营销、活动策划、数据运营、AIGC 创作</div>
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
                <p>深度游戏爱好者，覆盖 PC / 手游 / 主机，熟悉 MMO、竞技、剧情类游戏。独立运营抖音 cos 账号，全流程自主产出内容，累计曝光 5w+，点赞收藏 5k+。</p>
                <p>熟悉 B 站、抖音、小红书平台调性，对内容热点、用户反馈感知敏锐，擅长把爱好转化为落地内容。</p>
              </div>
            </div>
          </section>

          <section class="resume-sec">
            <header class="resume-sec-head"><h3>简历</h3><em>RESUME</em></header>
            <a class="resume-figure" href="assets/resume.pdf" target="_blank" rel="noopener noreferrer">
              <img src="assets/resume.png" alt="陈宇萱简历" loading="lazy" />
            </a>
            <p class="resume-caption">点击图片可查看原始 PDF</p>
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
            <a href="assets/game-wukong.jpg" data-shot><img src="assets/game-wukong.jpg" alt="黑神话悟空与赛博朋克2077游戏时长" loading="lazy" /></a>
            <figcaption>黑神话：悟空 94.4h ｜ 赛博朋克 2077 91.7h</figcaption>
          </figure>
          <figure class="game-shot">
            <a href="assets/game-naraka.jpg" data-shot><img src="assets/game-naraka.jpg" alt="永劫无间账号数据" loading="lazy" /></a>
            <figcaption>永劫无间 · Lv.238 · 591 小时</figcaption>
          </figure>
          <figure class="game-shot">
            <a href="assets/game-genshin.png" data-shot><img src="assets/game-genshin.png" alt="原神角色展柜" loading="lazy" /></a>
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
          <p>ARPG 的魅力，根植于战斗反馈与角色养成的内在循环。玩家持续投入的动力，来源于在反复挑战、刷取试错的过程里收获变强的成就感，以及在技能博弈、连招闪避带来利落的即时打击感，同时，装备、天赋、BD 体系也给玩家留出充足的探索空间~</p>
        </div>
      </section>

      <section class="games-section">
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
            <a href="assets/game-wangzhe.jpg" data-shot><img src="assets/game-wangzhe.jpg" alt="王者荣耀账号数据" loading="lazy" /></a>
            <figcaption>王者荣耀 · 账号数据</figcaption>
          </figure>
          <figure class="game-shot">
            <a href="assets/game-jinchanchan.jpg" data-shot><img src="assets/game-jinchanchan.jpg" alt="金铲铲之战对局结算画面" loading="lazy" /></a>
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
          <p>竞技类最直接的反馈来自胜负和段位，玩家会在一次次对局里把操作、意识和心态磨出来。非对称对抗和 MOBA 的节奏完全不一样：前者靠信息差和心理博弈，后者靠资源分配和团战决策；派对类则把门槛压下来，用随机性和社交把一局游戏变成一次多人聚会。</p>
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
            <a href="assets/game-nishuihan.jpg" data-shot><img src="assets/game-nishuihan.jpg" alt="逆水寒角色界面" loading="lazy" /></a>
            <figcaption>逆水寒 · 姑苏绮罗 碎梦 65 级</figcaption>
          </figure>
          <figure class="game-shot">
            <a href="assets/game-yanyun.jpg" data-shot><img src="assets/game-yanyun.jpg" alt="燕云十六声角色数据" loading="lazy" /></a>
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
          <p>在我看来，MMO 的核心根基是社交。完整的剧情与充满烟火气的江湖世界观，撑起了玩家的代入感，门派战斗则带来酣畅直接的对抗爽感。副本、帮战、门派角逐这些玩法，不只是数值成长的途径，更是承载玩家协作、博弈与冲突的舞台，让玩家在并肩闯荡、交锋对抗的过程里建立长久羁绊，而不是陷入单调的刷数值循环。</p>
        </div>
      </section>

      <section class="games-section">
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
            <a href="assets/game-valorant.jpg" data-shot><img src="assets/game-valorant.jpg" alt="无畏契约账号数据" loading="lazy" /></a>
            <figcaption>无畏契约 · 账号数据</figcaption>
          </figure>
          <figure class="game-shot">
            <a href="assets/game-cs2.jpg" data-shot><img src="assets/game-cs2.jpg" alt="CS2 游戏时长 136.2 小时" loading="lazy" /></a>
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
          <p>射击游戏吸引我的不只是瞄准和反应，也有搜集信息、判断位置和与队友配合的过程。CS2 和无畏契约里，一次报点、道具使用或站位选择都可能影响整局；在和平精英和三角洲行动里，地形、路线和物资也让每一场对局有不同的节奏。</p>
        </div>
      </section>

      <section class="games-section">
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
            <a href="assets/game-shijie.jpg" data-shot><img src="assets/game-shijie.jpg" alt="世界之外个人界面" loading="lazy" /></a>
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
          <p>女性向游戏的核心吸引力，根植于细腻的人物塑造与长线叙事框架。角色人设、剧情走向、分镜文案是它最主要的表达载体，卡牌养成、解谜、战斗等玩法，更多作为叙事的配套循环，承接剧情更新节奏。我更偏向以旁观者视角去品读故事脉络，观察它如何通过角色关系、剧情抉择搭建情绪钩子，研究卡池、活动与叙事联动的留存设计。它的驱动力并不来自操作或者数值碾压，而是依靠持续的故事更新、角色魅力，维系玩家长期的关注与期待。</p>
        </div>
      </section>

      <section class="games-section">
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
            <a href="assets/game-narrative.jpg" data-shot><img src="assets/game-narrative.jpg" alt="剧情向游戏时长记录" loading="lazy" /></a>
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
          <p>文字游戏对我来说更像在读一本会动的书，推进节奏自己控制，靠好奇心和想验证某个猜想往下走。我比较在意信息怎么给：线索是直接摊开，还是藏在对话和场景里让玩家自己拼；分支是不是真的会改变结局，而不是走个过场。推理类我会先把所有人的证词过一遍再下判断，多周目也愿意把没走的线补完。</p>
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
            <a href="assets/game-other.jpg" data-shot><img src="assets/game-other.jpg" alt="幻兽帕鲁、双人成行、双影奇境、星露谷、空洞骑士时长记录" loading="lazy" /></a>
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
          <p>经营和合作类吸引我的是慢慢把东西做起来的过程：星露谷种田、我的世界搭建筑、双人成行两个人配合通关，节奏不快，但很容易一直玩下去。合作类更看配合，谁负责什么、什么时候等对方，比单打独斗有意思。</p>
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
      <p class="works-intro">用 AI 生成的视觉、写过的文案、剪过的视频。</p>

      <section class="work-block">
        <div class="work-block-head"><h3>AI 视觉</h3><span>即梦 / 豆包</span></div>
        <div class="work-grid">
          <figure class="work-item">
            <div class="work-thumb" style="background-image:url(assets/ai-01.jpg)"><span class="thumb-idx">01</span></div>
            <figcaption>作品标题<em>一句话说明</em></figcaption>
          </figure>
          <figure class="work-item">
            <div class="work-thumb" style="background-image:url(assets/ai-02.jpg)"><span class="thumb-idx">02</span></div>
            <figcaption>作品标题<em>一句话说明</em></figcaption>
          </figure>
          <figure class="work-item">
            <div class="work-thumb" style="background-image:url(assets/ai-03.jpg)"><span class="thumb-idx">03</span></div>
            <figcaption>作品标题<em>一句话说明</em></figcaption>
          </figure>
          <figure class="work-item">
            <div class="work-thumb" style="background-image:url(assets/ai-04.jpg)"><span class="thumb-idx">04</span></div>
            <figcaption>作品标题<em>一句话说明</em></figcaption>
          </figure>
        </div>
      </section>

      <section class="work-block">
        <div class="work-block-head"><h3>文案</h3><span>预热稿 / 活动文案 / 赛事图解</span></div>
        <div class="copy-list">
          <article class="copy-card">
            <span class="copy-tag">标题</span>
            <p class="copy-text">在这里放你写过的标题或一句话文案。</p>
            <span class="copy-note">替换成你的作品，注明投放场景</span>
          </article>
          <article class="copy-card">
            <span class="copy-tag">正文</span>
            <p class="copy-text">在这里放你写的预热稿正文节选。</p>
            <span class="copy-note">替换成你的作品，注明渠道与效果</span>
          </article>
        </div>
      </section>

      <section class="work-block">
        <div class="work-block-head"><h3>视频</h3><span>剪辑 / AI 生成</span></div>
        <div class="work-grid">
          <figure class="work-item">
            <div class="work-thumb is-video" style="background-image:url(assets/video-01.jpg)"><span class="thumb-idx">▶</span></div>
            <figcaption>视频标题<em>时长 / 平台 / 播放量</em></figcaption>
          </figure>
          <figure class="work-item">
            <div class="work-thumb is-video" style="background-image:url(assets/video-02.jpg)"><span class="thumb-idx">▶</span></div>
            <figcaption>视频标题<em>时长 / 平台 / 播放量</em></figcaption>
          </figure>
        </div>
      </section>

      <section class="work-block">
        <div class="work-block-head"><h3>个人账号</h3><span>抖音 · cosplay / 泛二次元</span></div>
        <div class="work-grid work-grid-sm">
          <figure class="work-item">
            <div class="work-thumb" style="background-image:url(assets/account-01.jpg)"><span class="thumb-idx">01</span></div>
            <figcaption>内容封面<em>选题与数据</em></figcaption>
          </figure>
          <figure class="work-item">
            <div class="work-thumb" style="background-image:url(assets/account-02.jpg)"><span class="thumb-idx">02</span></div>
            <figcaption>内容封面<em>选题与数据</em></figcaption>
          </figure>
          <figure class="work-item">
            <div class="work-thumb" style="background-image:url(assets/account-03.jpg)"><span class="thumb-idx">03</span></div>
            <figcaption>内容封面<em>选题与数据</em></figcaption>
          </figure>
        </div>
        <p class="works-note">账号累计曝光 5w+、点赞收藏 5k+，选题、脚本、拍摄、剪辑均为独立完成。</p>
      </section>

      <p class="works-hint">把图片放进 <code>assets/</code> 文件夹，文件名和页面里写的一致就会自动显示。</p>
    `,
  },

  skill: {
    en: "SKILL TREE",
    title: "技能树",
    html: `
      <section class="resume-sec">
        <header class="resume-sec-head"><h3>内容 × AI</h3><em>CONTENT × AI</em></header>
        <p class="skill-text">B 站、抖音、小红书长期深度用户，熟悉平台内容和热点。能独立完成选题、AIGC 素材生产到多平台发布。</p>
      </section>

      <section class="resume-sec">
        <header class="resume-sec-head"><h3>营销 × 数据</h3><em>MARKETING × DATA</em></header>
        <p class="skill-text">做过内容营销和数据运营，习惯用数据看内容和投放效果。熟悉预热、达人合作到直播的流程。</p>
      </section>

      <section class="resume-sec">
        <header class="resume-sec-head"><h3>达人合作</h3><em>KOL &amp; KOC</em></header>
        <p class="skill-text">对接游戏直播博主、coser 等创作者，参与 KOC 活动框架和激励机制调整。</p>
      </section>

      <section class="resume-sec">
        <header class="resume-sec-head"><h3>赛事执行</h3><em>LIVE EVENT</em></header>
        <p class="skill-text">跟过 5v5 赛事从预选赛到总决赛，负责赛制落地、选手对接、赛程排期和现场预案。</p>
      </section>

      <section class="resume-sec">
        <header class="resume-sec-head"><h3>工具</h3><em>TOOLS</em></header>
        <p class="skill-text">AI / AIGC：Claude、Codex、豆包、即梦（生图 / 生视频）<br />数据 / 剪辑：MATLAB、Python、Excel、剪映<br />证书：CET-6（524）、计算机二级</p>
        <div class="tags">
          <span class="tag">Claude</span>
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
      <div class="contact-row"><span>PHONE</span><span>19066712893</span></div>
      <div class="contact-row"><span>EMAIL</span><span>2825641638@qq.com</span></div>
      <div class="contact-row"><span>LOCATION</span><span>广州</span></div>
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

let pct = 0;
const skipBoot = new URLSearchParams(location.search).has("noboot");
if (skipBoot) {
  boot.classList.add("done");
  app.classList.add("show");
}
const timer = setInterval(() => {
  if (skipBoot) { clearInterval(timer); return; }
  pct += Math.random() * 14 + 4;
  if (pct >= 100) {
    pct = 100;
    clearInterval(timer);
    setTimeout(() => {
      boot.classList.add("done");
      app.classList.add("show");
    }, 280);
  }
  bootFill.style.width = pct + "%";
  bootPct.textContent = Math.floor(pct);
}, 90);

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
let active = 0;

function setActive(i) {
  items.forEach((el, k) => el.classList.toggle("active", k === i));
  active = i;
}

items.forEach((el, i) => {
  el.addEventListener("mouseenter", () => setActive(i));
  el.addEventListener("click", () => openView(el.dataset.view, i));
});

function openView(key, index) {
  const d = DATA[key];
  if (!d) return;
  if (index === undefined) {
    index = items.findIndex((el) => el.dataset.view === key);
  }
  viewEn.textContent = d.en;
  viewTitle.textContent = d.title;
  viewIdx.textContent = String(index + 1).padStart(2, "0") + " / " + String(items.length).padStart(2, "0");
  viewBody.innerHTML = d.html;
  view.classList.add("open");
  view.classList.toggle("wide", key === "profile");
  viewScroll.scrollTop = 0;
  document.title = d.title + " · 陈宇萱";
  if (location.hash.slice(1) !== key) history.replaceState(null, "", "#" + key);
  setPetContext(key);
}

function closeView() {
  view.classList.remove("open");
  document.title = "陈宇萱 · PLAYER FILE";
  history.replaceState(null, "", location.pathname);
  setPetContext("home");
}
document.getElementById("viewClose").addEventListener("click", closeView);

/* 图片点击放大 */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.removeAttribute("src");
}
lightbox.addEventListener("click", closeLightbox);
lightboxImg.addEventListener("click", (e) => e.stopPropagation());
viewBody.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-shot]");
  if (!link) return;
  e.preventDefault();
  const img = link.querySelector("img");
  openLightbox(link.getAttribute("href"), img ? img.alt : "");
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
  } else if (e.key === "Enter") {
    openView(items[active].dataset.view, active);
  }
});

setActive(0);

/* 主题切换 */
const themeToggle = document.getElementById("themeToggle");
const rootEl = document.documentElement;
function applyTheme(theme) {
  rootEl.setAttribute("data-theme", theme);
  if (themeToggle) themeToggle.textContent = theme === "light" ? "◑ 暗色" : "◐ 亮色";
  try { localStorage.setItem("portfolio-theme", theme); } catch (e) {}
}
const urlTheme = new URLSearchParams(location.search).get("theme");
if (urlTheme === "light" || urlTheme === "dark") applyTheme(urlTheme);
else {
  try {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) applyTheme(saved);
  } catch (e) {}
}
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    applyTheme(rootEl.getAttribute("data-theme") === "light" ? "dark" : "light");
  });
}

/* ============ 桌宠向导 ============ */
const petBubble = document.getElementById("petBubble");
const petText = document.getElementById("petText");
const petBody = document.getElementById("petBody");

const PET_LINES = {
  home: [
    "↑↓ 选菜单，ENTER 进去，ESC 回来。",
    "这里是陈宇萱的 PLAYER FILE，随便逛逛。",
    "右上角 ◐ 能切深浅色，暗色更像游戏。",
    "六个入口，先看哪个都行。",
  ],
  profile: [
    "这页是学历和简历，简历图点开能看 PDF。",
    "广东工业大学 · 金融工程，2024 级。",
    "主修课和工具都写在上面了。",
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
    "作品页还在填，图放进 assets/ 文件夹就会显示。",
    "AI 视觉、文案、视频，都在这页。",
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
  petIdx = 0;
  petSay(PET_LINES[key][0]);
}

if (petBody) {
  petBody.addEventListener("click", () => {
    petBody.classList.remove("jump");
    void petBody.offsetWidth;
    petBody.classList.add("jump");
    const lines = PET_LINES[petCtx] || PET_LINES.home;
    petIdx = (petIdx + 1) % lines.length;
    const text = Math.random() < 0.3
      ? PET_CLICKS[petClickIdx++ % PET_CLICKS.length]
      : lines[petIdx];
    petSay(text);
  });
}

setTimeout(() => {
  if (!view.classList.contains("open")) setPetContext("home");
}, skipBoot ? 600 : 2600);

/* 支持 #profile / #quest 等直达链接 */
const initial = location.hash.slice(1);
if (initial && DATA[initial]) {
  if (skipBoot) openView(initial);
  else setTimeout(() => openView(initial), 900);
}
