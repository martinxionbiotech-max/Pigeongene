# senopigeon.com 深度审计报告

- **审计日期**：2026-11-24
- **审计对象**：`github.com/martinxionbiotech-max/Pigeongene`（线上 `https://senopigeon.com`）
- **代码版本**：`main` / `d89ac1f`
- **本地构建**：`npm ci && npm run build` 成功，生成 137 个 HTML（含 404），sitemap 136 条
- **线上校验**：sitemap 136 个 URL 全部返回 200；本地 CSS hash 与线上一致
- **审计方式**：源码与构建产物检查、全站正文提取、schema 解析、同语言近似重复检测、hreflang 互链检查、线上状态码与响应头、PubMed 引用抽查
- **审计边界**：未接入 Google Search Console / Analytics / 外链工具；未核验营业执照、高新证书、ISO 证书、专利清单与实验室原始记录；未做 Lighthouse 现场 CWV 与真实用户测试。法律部分为内容一致性检查，不构成法律意见。

---

## 结论

**综合得分：46 / 100（D+）**

站点“能上线、能抓取、技术底子不差”，但**内容厚度、证据链、信任资产与转化路径**明显不足。当前最大风险不是“页面数量不够”，而是 **136 个页面里大量是 200–700 字的模板页**：继续扩页只会放大薄内容与重复内容，而不是建立主题权威。

**建议顺序：先修 P0（内容/证据/转化/合规），再做 P1（技术 SEO/AIO），最后做 P2（性能/安全）。在 35 个商业页完成实质扩写前，不建议新增大批页面。**

| 维度 | 得分 | 权重 | 加权 |
|---|---:|---:|---:|
| 内容质量与原创性 | 28 | 25% | 7.0 |
| E-E-A-T / 信任 | 30 | 20% | 6.0 |
| 技术 SEO | 72 | 15% | 10.8 |
| AIO / GEO | 55 | 10% | 5.5 |
| 转化 / UX | 45 | 10% | 4.5 |
| 合规 / 法律 | 40 | 10% | 4.0 |
| 性能 / 安全 | 78 | 10% | 7.8 |
| **合计** |  |  | **45.6 ≈ 46** |

---

## 修复进展（2026-11-24）

本轮已完成用户指定的技术修复批次，以下为构建后实测：

- hreflang：`verify-hreflang.py` **0 issues**；138 页、270 个互链对。
- `x-default`：按绝对 URL 分组 **0 冲突**；4 个英文-only 页面（2 个 hub + 2 篇英文-only 博客）自指，不伪造中文对应页。
- 标题：**0 个超过 60 字符**（解码后最大 60）。
- 中文描述：**0 个低于 70 字**，全部在 **70–120 字**（解码后）。
- 英文描述：**0 个超过 160 字符**。
- 注：`site-audit.py` 的 description 越界数仍按英文 140–155 规则统计中文，属口径差异；本报告按中文字符 70–120 验收。
- 英文 hub：新增 `/en/genes/`、`/en/pathogens/`，已接入导航、Footer、sitemap。
- Breadcrumb：**138/138** 页面含 `BreadcrumbList`。
- Schema：所有页面级 Article/BlogPosting/TechArticle/MedicalWebPage 均有 `datePublished` + `dateModified`（外部 ScholarlyArticle 文献条目不伪造日期）；BlogPosting 公司作者改为 Organization；Product `offerCount` 修正为 2。
- 中文博客：2 个误放中文集合的英文文件已移入 `blog-en`；旧 URL 设 301；中文-only 博客不再输出死英文 alternate。
- `llms.txt`：`postbuild` 生成，**138/138 HTML + 98 个 Markdown 变体**。
- 安全头：CSP、HSTS、X-Frame-Options、Referrer-Policy、Permissions-Policy、COOP 已写入 `_headers`。
- Skip link：138 个页面均含 `<main id="main">`。
- 英文 UI：英文页 **0 个中文字符**；语言切换标签改为 `ZH`，移动菜单 aria-label 英文化。
- 构建：`npm run build` 成功，139 HTML（含 404），sitemap 138；0 断链、0 孤儿。

**合规加强（2026-11-24 第二批）**

- 中文隐私政策扩至约 3,695 字，英文约 1,538 词；覆盖控制者、数据类型、PIPL/GDPR 法律依据、Cookies、共享/委托处理、跨境、保存期限、安全、权利、未成年人、投诉与语言版本。
- 中文服务条款扩至约 3,754 字，英文约 1,763 词；覆盖订单、价格税费、样本寄送/保存/处置、周期、取消退款、报告边界、知识产权、出口制裁、责任限制、不可抗力与争议解决；试剂盒明确 RUO/IVD 边界。
- 新增 `/mianze-shengming/` 与 `/en/disclaimer/`，覆盖非人体使用、非兽医诊断、基因/病原检测局限、RUO、第三方依赖与责任限制；Footer 全站入口。
- 内容与证据政策扩至约 2,483 字中文 / 1,134 词英文；新增编辑独立性、作者/审稿、A/B/C/D 分级、引用核验、方法学、报告边界、AI 使用、更正/撤稿。
- 电话标签统一为“电话 | 微信：”/“Phone | WeChat:”，号码不变，`tel:` 链接修复；移除 WhatsApp 文案；按用户要求**不添加表单**。
- 隐私/条款/免责声明均配置中英 hreflang；`llms.txt` 自动收录。

仍未解决：内容厚度、试剂盒重复、引用/证据等级在页面上的落地、资质证据；询盘表单按用户要求不添加。

---

## 一、P0：先修，否则不建议扩页

### 1. 内容厚度严重不足，中文站尤其薄

全站正文（按页面主内容容器提取）：

- **中文 69 页：约 36,341 个汉字，平均 527 字/页**
- **英文 67 页：约 23,530 个英文词，平均 351 词/页**
- 中文页面中，只有首页（1,577 字）和 FAQ（1,409 字）超过 1,400 字；其余绝大多数在 200–800 字。
- 英文只有 14 页超过 500 词；商业页普遍 220–350 词。
- 中文 69 个 URL 中，`/blog/flight-gene-report-guide/` 与 `/blog/pathogen-testing-practical-guide/` 实际是英文正文（见 P1 hreflang 一节），不是中文内容。

按页面族看：

| 页面族 | 中文正文中位数 | 英文正文中位数 | 判断 |
|---|---:|---:|---|
| 检测试剂盒 `/shijihe/`、`/en/kits/` | 347 字 | 242 词 | 严重偏薄，且高度模板化 |
| 病原检测 `/bingdu-jiance/`、`/en/pathogens/` | 582 字 | 342 词 | 偏薄，缺参考文献与鉴别诊断深度 |
| 基因位点 `/jiyin-jiance/`、`/en/genes/` | 372 字 | 222 词 | 偏薄，证据展示不足 |
| 博客 `/blog/`、`/en/blog/` | 714 字 | 536 词 | 英文勉强可读，中文仍偏短；其中 2 个中文 URL 实际是英文正文 |
| 知识中心 `/zhishi/`、`/en/knowledge/` | 421 字 | 279 词 | 只有 3 篇中文、2 篇英文，撑不起“知识中心” |
| 关于 `/guanyu/`、`/en/about/` | 228 字 | 581 词 | 中文关于页明显缩水 |
| 隐私政策 | 779 字 | 542 词 | 中文约为英文篇幅的 1/4 |
| 服务条款 | 800 字 | 620 词 | 中文约为英文篇幅的 1/5 |

**直接影响**：

- 商业页无法覆盖采购决策所需信息：方法学、样本类型、质控、判读、局限、储存、运输、MOQ/OEM、验证数据。
- 博客无法建立主题权威；中文博客正文中位约 714 字，低于一篇合格科普文章的下限。
- 中文站是主站，但内容显著弱于英文站；中英 hreflang 互指时，中文版本更像“摘要页”。

### 2. 试剂盒页面高度模板化，构成同语言近重复

按同语言 8 字中文 n-gram / 5 词英文 n-gram 计算 Jaccard：

| 范围 | 对数 | 中位相似度 | ≥0.60 的对数 | 最高 |
|---|---:|---:|---:|---:|
| 中文试剂盒 15 页 | 105 | 0.610 | 72 | 0.678（APV / PIHV） |
| 英文试剂盒 15 页 | 105 | 0.659 | 98 | 0.731（PIPV / PIRV） |
| 中文基因 8 页 | 28 | 0.479 | 1 | 0.781（GSR / LRP8） |
| 英文基因 8 页 | 28 | 0.343 | 1 | 0.668（GSR / LRP8） |

**结论**：15 个试剂盒页面基本是“同一模板换病原名”，15 个产品只写了 1 个产品的信息量；这不是“内容略薄”，而是**产品页层面的重复内容**。GSR/LRP8 也共享了大段相同句式。

**典型问题页**：

- `/shijihe/pipv/` vs `/shijihe/pirv/`
- `/shijihe/apv/` vs `/shijihe/pihv/`
- `/jiyin-jiance/gsr/` vs `/jiyin-jiance/lrp8/`
- `/en/kits/pipv/` vs `/en/kits/pirv/`

### 3. 证据链断裂：政策承诺了引用与证据等级，页面没有兑现

内容政策 `/zhishi/neirong-zhengce/` 明确写：

- “科学结论标注文献来源（PMID/DOI），可溯源核验”
- “证据等级（A/B/C/D）标注于基因页与科研中心”
- “发现错误引用时优先修正并记录更正过程”

实际检查：

- **所有 136 个内容页的正文内，0 个指向外部权威来源的链接**；只有 `/cankao/` 与 `/en/references/` 两个参考页有外链。
- 基因页把 `PMID: 29775483`、`DOI: 10.1371/journal.pone.0195121` 作为**纯文本**展示，不能点击核验。
- 基因页**没有显示 A/B/C/D 证据等级**；只有 `/jiyin-jiance/` 索引页在 FAQ 里承诺“报告会注明证据等级”。
- 病原页（如 `/bingdu-jiance/ge-dou-bingdu/`）给出了潜伏期、症状、处理与治疗建议，但**没有任何参考文献**。
- 博客文章没有 References 区块。
- 没有公开的更正记录页，和“记录更正过程”的政策不一致。

**公平说明**：抽查的 7 个 PMID（18591260、21491240、26202371、29775483、34573598、37443867、40246119）均可在 PubMed 解析，**引用本身不是伪造**；问题在于“有文献名、没有可点击链接、没有证据分级、没有覆盖到病原与博客”。

### 4. 信任资产不足，多个资质声明缺少可核验信息

`/guanyu/` 与 schema 中有以下强声明：

- 国家高新技术企业
- 张家口市重点基因检测实验室（2021）
- ISO 9001 质量管理体系
- 20+ 自主专利
- 100 万美元设备
- 15 人团队、2 名博士、2 名硕士
- “2024 年获相关领域荣誉”

目前页面没有提供：

- 高新证书编号、认定年度、有效期/复审状态
- 重点实验室认定文件或有效期
- ISO 9001 证书编号、认证机构、认证范围、有效期；页面措辞是“严格遵循 ISO 9001 质量管理标准”，容易被读成“已认证”
- 专利清单（专利号/名称/状态）
- 设备清单或实验室实拍
- 团队成员完整姓名、履历、公开主页；张一雯博士只有“河北农业大学遗传学博士”一句
- “2024 年荣誉”的具体名称与颁发机构

**这不是说声明一定为假**，而是说：对检测/兽医类 YMYL 内容，**不可核验的强声明会反向削弱信任**。要么补证据，要么降级措辞。

### 5. 转化路径存在硬故障

**电话链接是坏的**：

- `src/components/Footer.astro:60`
- `src/pages/lianxi/index.astro:56,71`
- `src/pages/en/contact/index.astro:61,81`

源码与线上均为：

```html
<a href="tel:+861****2623">+86 156 1237 2623</a>
```

`tel:` 里被写入了字面量 `****`，手机点击无法拨号。这是全站页脚 + 两个联系页的直接影响询盘故障。

**没有询盘表单**：

- `/lianxi/` 与 `/en/contact/` 只有邮箱、电话、WhatsApp。
- 没有姓名、国家、需求类型、样本类型、数量、留言、隐私同意的表单。
- 试剂盒页只有“咨询采购”，没有 RFQ 字段（目标病原、48T/96T、数量、OEM、目的国）。
- 主邮箱是个人邮箱 `martin@senobiocorp.com`，不是 `sales@` / `hello@` 角色邮箱；对外个人化，且易被爬虫抓取。

### 6. 中文合规页与英文不匹配，且与实际数据实践不一致

- 中文隐私政策 779 字，英文 542 词；中文服务条款 800 字，英文 620 词。中文版本不是英文版本的完整对应。
- 中文隐私政策仍描述“评论表单、用户账户、媒体上传、Cookies”，但当前站点是静态站，没有评论、账户、上传功能；政策与产品实际不一致。
- 中文隐私政策未充分展开：处理目的/法律基础、保存期限、跨境传输、删除/更正流程、投诉渠道、PIPL 下的单独同意等。
- 未展示 ICP 备案号、统一社会信用代码/营业执照信息；如果面向中国大陆访问，这是需要确认的合规项。
- 没有独立的兽医免责声明页；免责声明只出现在页脚和内容政策里。
- 页脚把“本网站检测服务仅用于赛鸽（禽类/兽用）领域，不适用于人体医学诊断”写清楚了，这是优点；但病原页的“处理与治疗”建议仍建议加页级“不构成兽医诊断/治疗建议”提示。

---

## 二、P1：高优先级技术与 SEO 问题

### 1. hreflang 有 4 个明确错误

`verify-hreflang.py` 扫描 137 个 HTML、136 个有 alternate 的页面、266 个互链对，发现：

- `/blog/flight-gene-report-guide/` 指向 `/en/blog/flight-gene-report-guide/`，但英文页没有回链中文
- `/blog/pathogen-testing-practical-guide/` 同样缺少英文回链
- `/blog/quarantine-checklist/` 指向不存在的 `/en/blog/quarantine-checklist/`
- `/blog/report-reading-guide/` 指向不存在的 `/en/blog/report-reading-guide/`

更严重的是：`/blog/flight-gene-report-guide/` 与 `/blog/pathogen-testing-practical-guide/` 这两个“中文 URL”实际渲染的是英文正文（`lang: 'en'` 的文件被放进了 `src/content/blog/`），所以它们的内容、description 与 `/en/blog/...` 完全重复，也解释了 2 组重复 description。这是内容流水线错误，不是单纯 hreflang 错误。

**修法**：把两个 `lang: 'en'` 文件移到 `src/content/blog-en/`，或在中文集合写真正的中文译文；修完后重新生成 hreflang：没有英文译文的两个中文页删掉 `en` alternate；有英文页的两个页面在英文模板补 `zh-CN` + `x-default`；两个缺译文的页面要么补翻译，要么不要输出英文 alternate。

### 2. `x-default` 实际只有一个根因：两个英文文件误放中文集合

重新按绝对 URL 核验后，`x-default` 并不是全站自指：

- 中文页 `x-default` → 中文页；英文页 `x-default` → 对应中文页，符合“中文为默认”的设计。
- 136 页里只有 **2 组冲突**：`/blog/flight-gene-report-guide/` 与 `/blog/pathogen-testing-practical-guide/`。原因是这两个 `lang: 'en'` 文件被放进 `src/content/blog/`，同时生成了中文 URL 和英文 URL，两个 URL 都把 `x-default` 指向自己。
- 修掉文件归属后，冲突消失；`verify-hreflang.py` 为 0 issues。

> 说明：审计初版用相对路径与绝对 URL 直接比较，误报为“136/136 自指”；本报告已更正。后续验收以 `verify-hreflang.py` + 绝对 URL 分组检查为准。

### 3. 英文标题 47/67 超过 60 字符，品牌后缀浪费 SERP 像素

- 英文标题最长 78 字符，47 个超过 60。
- 典型：`/en/pathogen-testing/` 78、`/en/blog/qpcr-biosafety/` 78、`/en/genes/ldha/` 76。
- 原因：模板统一追加长品牌后缀 ` - SENO PigeonGene`。
- 中文只有 2 个标题超过 60 字符，问题较小。

**修法**：标题模板按长度条件追加 `| SENO`，不要无条件追加完整品牌；英文主关键词前置；保证 ≤60 字符且不重复。

### 4. 中文描述普遍偏短，且有 2 个中文页用了英文描述

- 中文 69 页中 36 页 description <70 字符，中位 68；`/yinsi/` 仅 40 字符。
- 英文描述中位 149，整体合格。
- 重复 description 2 组，均为中文页直接复用了英文页描述：
  - `/blog/pathogen-testing-practical-guide/` 与 `/en/blog/pathogen-testing-practical-guide/`
  - `/blog/flight-gene-report-guide/` 与 `/en/blog/flight-gene-report-guide/`

**修法**：中文描述扩到 70–120 字，写清“对象 + 方法 + 结果 + 边界”；两个中文页写独立中文描述。

### 5. 英文缺少两个核心索引页，直接 404

- `https://senopigeon.com/en/genes/` → 404
- `https://senopigeon.com/en/pathogens/` → 404

中文有 `/jiyin-jiance/` 和 `/bingdu-jiance/` 两个完整索引；英文只有 8 个基因详情、12 个病原详情，没有 hub。结果是英文用户无法从导航浏览完整目录，内链权重也无法集中。

**修法**：新增 `/en/genes/`、`/en/pathogens/` 两个索引页，列出 8/12 个条目，加入导航、Footer、sitemap 和 `llms.txt`。

### 6. 16 个页面缺 BreadcrumbList

缺 BreadcrumbList 的页面：

- 中文：`/`、`/cankao/`、`/lianxi/`、`/tiaokuan/`、`/jiyin-jiance/`、`/guanyu/`、`/zhishi/`、`/yinsi/`
- 英文：`/en/`、`/en/contact/`、`/en/privacy-policy/`、`/en/about/`、`/en/references/`、`/en/flight-gene-test/`、`/en/terms/`、`/en/knowledge/`

其余 120 页有 BreadcrumbList。建议在布局层统一补齐，而不是逐页手写。

### 7. schema 有 4 类质量问题

1. **作者类型错误**：15 个 BlogPosting 的 `author` 是 `Person`，但 `name` 填的是公司名（`张家口赛诺生物科技有限公司` / `Zhangjiakou SENO Biotech Co., Ltd.`）。公司不是 Person；应改为 `Organization`，或填真实作者 Person + 职位 + 简介。
2. **文章日期缺失**：22 个 Article/TechArticle 没有 `datePublished`；18 个没有 `dateModified`。基因页、技术页缺少时间信号。
3. **Product 报价结构不一致**：试剂盒用 `AggregateOffer`，`lowPrice: 24`、`highPrice: 180`，但 `offerCount: 1`。一个 offer 不应该有价格区间；若是 48T/96T 两个规格，应 `offerCount: 2`，否则改用单个 `Offer`。
4. **缺少引用/审阅字段**：Article/BlogPosting 没有 `citation`，MedicalWebPage 没有 `reviewedBy` / `lastReviewed`；与“证据优先”的页面政策不匹配。

### 8. “深度阅读”链接名不副实，知识中心库存被夸大

- 基因页写“📚 深度阅读：LDHA 基因百科”，但链接到 `/zhishi/` 通用索引，并没有 LDHA 百科页。
- 病原页写“📚 深度阅读：鸽痘病毒 病原百科”，同样链接 `/zhishi/`。
- `/zhishi/` 卡片写“6 篇 基因检测原理”，但实际只有 `/zhishi/jishu-yuanli/` 1 篇；写“12 项病原百科”，实际链接到 `/bingdu-jiance/` 服务目录，而不是 12 篇百科。
- `/zhishi/jiyin-baike/ldha/` 不存在（404）。

**修法**：要么真的创建 8 个基因百科 + 12 个病原百科，要么把“百科”改成“检测项目页”，并把“6 篇”改成真实数量。不要用不存在的深度内容做内链锚文本。

### 9. 检测周期在条款与首页/FAQ 之间冲突

- 首页：病毒 2–3 个工作日，基因/DNA 身份证 7–14 个工作日。
- FAQ：同上。
- 服务条款 `/tiaokuan/`：只写“样本到达实验室后预计 2–3 个工作日”，没有区分基因/身份证。

这会让客户在付款前看到互相矛盾的交付承诺。**修法**：条款改为“病毒 2–3 个工作日；飞行基因/DNA 身份证 7–14 个工作日；均以样本到达实验室且质检合格起算，节假日顺延”。

### 10. AIO 覆盖不足：`llms.txt` 只收录 26/136 个 HTML

- `llms.txt` 有 31 个唯一 URL，其中 5 个是 `.md` 示例，**26 个 HTML URL**，覆盖率 19%。
- sitemap 有 136 个 URL，`llms.txt` 缺 110 个：全部英文页、全部博客、大部分试剂盒/基因/病原详情、法律页。
- 站点实际生成了 **100 个 `.md` 变体**（15 中文试剂盒 + 8 中文基因 + 12 中文病原 + 15 中文博客 + DNA 身份证 + 49 英文页），线上均返回 `200` + `text/markdown`。这是优点，但 `llms.txt` 只列了 5 个 `.md` 示例，没有全量索引。
- `_headers` 已有 `Link: </llms.txt>; rel="llms"`，方向正确。

**修法**：从 sitemap/内容集合自动生成 `llms.txt`，分 `Chinese` / `English` / `Products` / `Genes` / `Pathogens` / `Knowledge` / `Legal` 段落；每页同时列 HTML 与 `.md`；确保 136/136 覆盖。

### 11. 安全响应头缺失

线上只有 Cloudflare 自动加的 `x-content-type-options: nosniff` 和 `referrer-policy: strict-origin-when-cross-origin`；`public/_headers` 没有：

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Frame-Options` / `frame-ancestors`
- `Permissions-Policy`

站点无 JS、表单尚未接入，风险不高，但属于低成本加固项。建议先上 CSP Report-Only，确认无阻断后再强制。

### 12. 全站 skip link 指向不存在的 `#main`

`BaseLayout.astro:225` 有 `<a href="#main">跳到主要内容</a>`，但全站没有 `id="main"`，也没有 `<main>` 地标。键盘/读屏用户点击“跳到主要内容”不会跳转。建议用 `<main id="main">` 包裹主内容，Header/Footer 保持在外部。

### 13. 英文页仍含中文 UI 文本

按“英文站不出现中文”的要求检查，67 个 `/en/` 页面仍含：

- 语言切换标签 `中文`（`Header.astro:94`）
- 移动菜单 aria-label `打开菜单` / `关闭菜单`（`Header.astro:72-73,200-201`）

其中 aria-label 会被英文读屏器读成中文。建议改为 `Chinese` / `Open menu` / `Close menu`，或 `ZH` / `Open menu` / `Close menu`。

### 14. `www.senopigeon.com` 无法解析

- `https://senopigeon.com/` 正常 200。
- `https://www.senopigeon.com/` DNS 无法解析。

如果品牌物料/邮件签名使用 `www`，会直接打不开。建议在 Cloudflare 加 `www` CNAME 并 301 到裸域，或明确所有渠道只用裸域。

---

## 三、P2：性能、安全与体验

### 1. 性能底子不错，但图片仍有优化空间

实测（本机网络，Cloudflare 边缘）：

- 首页 HTML：38,852 bytes
- 首页 TTFB：0.124 s
- 首页总加载：0.124 s
- Hero 图线上：50,747 bytes
- 无 JavaScript bundle；CSS 41.6 KB；字体 8 个文件（woff2 + woff），`font-display: swap`

问题：

- 30 个本地图片全部是 JPG/PNG，没有 WebP/AVIF；`dist` 图片总量约 14 MB。
- 278 个 `<img>` 标签，**0 个有 `srcset`**；移动端可能下载桌面尺寸。
- `/guanyu/` 与 `/en/about/` 使用 `SENO-Location.jpg`，线上 859,345 bytes，是明显的 LCP 风险。
- 最大本地图片：`SENO-Location.jpg` 859 KB、`ISO9001-2-1-scaled.jpg` 796 KB、`ISO13485-2-scaled.jpg` 747 KB；ISO 图目前未在页面展示。
- 所有图片都有 alt、width、height；只有 2 个没有 lazy（hero/logo），这是合理的。

**修法**：用 Astro `<Image>` 或 `sharp` 生成 WebP/AVIF + `srcset`；About 地图压到 200 KB 以内；hero 加 `preload`；保留现有宽度/高度与 alt。

### 2. `npm audit` 15 个漏洞（构建期为主）

`npm audit --omit=dev` 报告 15 个漏洞：1 critical、9 high、3 moderate、2 low。集中在 `launch-editor`、`vite`、`zod` 等构建/开发依赖；静态输出没有运行时 JS，因此不是“线上可被直接攻击”的同等风险，但仍应处理。

**修法**：先 `npm audit fix`（不要 `--force` 升 Astro 7）；升级后跑 `npm run build` + 全站链接检查；不要把构建工具暴露到公网。

### 3. 转化体验

- 没有表单，只有邮箱/电话/WhatsApp；B2B 买家在手机上更愿意填表。
- 电话链接坏（P0）。
- 个人邮箱而非角色邮箱。
- 试剂盒页没有 MOQ/OEM/交期/认证文件下载。
- 英文缺 `/en/genes/`、`/en/pathogens/` 索引，买家浏览路径断。

---

## 四、做得好的部分

这些不是客套，是实打实的底子，修内容时不要推倒重来：

- **线上可用性**：sitemap 136 个 URL 全部 200；HTTP → HTTPS 301；404 正确返回 404。
- **抓取与索引**：136/136 有 canonical；0 个 noindex；sitemap index + robots 正常；AI crawler（GPTBot、OAI-SearchBot、ClaudeBot、PerplexityBot、Google-Extended）全部 Allow。
- **内链**：0 个断链、0 个孤儿页；点击深度 0:1、1:32、2:67、3:36，结构健康。
- **多语言基础**：136 页有 hreflang，266 个互链对，只有 4 个问题；比大多数双语站好。
- **结构化数据广度**：Product 32、Service 10、FAQPage 12、MedicalWebPage/MedicalCondition 24、Article 16、BlogPosting 28、BreadcrumbList 120；没有伪造 Review/AggregateRating。
- **机器可读**：100 个 `.md` 变体线上均为 `text/markdown`；`Link: rel="llms"` 已配置。
- **内容政策**：`/zhishi/neirong-zhengce/` 有编辑原则、引用标准、方法学、兽医免责声明；方向正确。
- **引用本身**：抽查 7 个 PMID 均可解析，说明基因页不是凭空编造文献；问题在呈现与覆盖。
- **性能**：无 JS、HTML 38 KB、TTFB 124 ms、Cloudflare 缓存；基础很好。
- **图片可访问性**：所有图片有 alt、宽高；没有缺 alt 的图。

---

## 五、建议的修复顺序

### 阶段 0：1–2 天 Quick Fix（不改内容主张）

| 项 | 动作 | 预计 |
|---|---|---|
| 电话 | 把 `tel:+861****2623` 改为 `tel:+8615612372623`，全站 3 个文件 + 页脚 | 10 分钟 |
| 询盘表单 | 联系页加姓名/邮箱/国家/需求/样本/数量/留言/隐私同意；Formspree 或 Pages Function；蜜罐 + 限流 | 2–4 小时 |
| 邮箱 | 建 `sales@` 或 `hello@` 角色别名，替换个人邮箱；隐私页留 `privacy@` | 1 小时（需域名邮箱权限） |
| hreflang | 修 4 个错误；统一 `x-default` | 2 小时 |
| 标题/描述 | 英文标题 ≤60；中文描述 70–120 字；修 2 个重复描述 | 2–3 小时 |
| 英文 hub | 新增 `/en/genes/`、`/en/pathogens/`，接导航/Footer/sitemap | 4 小时 |
| Breadcrumb | 16 个缺页统一补 | 2 小时 |
| schema | 作者改 Organization/真人；补日期；Product offerCount | 2–3 小时 |
| `llms.txt` | 自动生成 136 HTML + 100 md 全量索引 | 3–4 小时 |
| 安全头 | CSP Report-Only、HSTS、frame-ancestors、Permissions-Policy | 1–2 小时 |
| skip link | `<main id="main">` | 30 分钟 |
| 英文 UI | `中文` → `Chinese`；aria-label 英文化 | 30 分钟 |

### 阶段 1：3–6 周，先把 35 个商业页写成“可成交页”

优先级从高到低：

1. **15 个试剂盒页**（`/shijihe/*` + `/en/kits/*`）
   - 每页 800–1,200 英文词 / 1,200–1,800 中文字
   - 必填：靶标与病原学、方法学（qPCR/探针）、试剂盒组分、样本类型、质控与内参、判读规则、局限、储存/运输、规格 48T/96T、MOQ/OEM、交期、参考文献
   - **性能数字（LoD、灵敏度、特异性）没有原始验证数据就写 `[待实验室确认]` 或“见批次 COA”，不要编**
   - 15 页必须有各自不同的段落结构，不能再“换名字”
2. **12 个病原页**
   - 每页 900–1,300 英文词 / 1,500–2,000 中文字
   - 必填：病原学、传播、临床症状、鉴别诊断、样本类型、qPCR 判读、防治原则、兽医免责声明、参考文献
   - 处理/治疗段加“本页不构成兽医诊断或治疗建议”
3. **8 个基因页**
   - 每页 800–1,200 英文词 / 1,200–1,800 中文字
   - 必填：基因功能、变异/标记、研究证据表（研究、群体、表型、局限）、候选基因声明、育种解释、不能保证成绩、PMID/DOI 可点击、证据等级
   - 把首页/标题里的“8 个性能相关基因位点”统一改为“8 个候选性能相关基因位点”
4. **博客**
   - 中文 13 篇：1,500–2,000 字；英文 13 篇：800–1,200 词
   - 先把 2 个误放在中文集合的英文文件移回 `blog-en`，再补真正的中文译文或删除对应中文 URL
   - 每篇至少 3 条可点击参考文献；加“本文不构成兽医建议”
   - 先做高意图：采样、报告解读、检测周期、8 基因怎么选、病原 panel 怎么选、DNA 身份证用途
5. **Hub 与信任页**
   - `/jiyin-jiance/`、`/bingdu-jiance/`、`/shijihe/`、`/zhishi/`、`/en/genes/`、`/en/pathogens/` 各 800–1,200 字
   - 新增：方法学 `/fangfa-xue/`、免责声明 `/mianze-shengming/`、更正政策 `/gengzheng/`、无障碍 `/wuzhangai/`；英文对应页
   - 中文隐私/条款补到与英文同等覆盖：保存期限、法律基础、跨境、权利、投诉、样本处置、退款/复检、责任限制

### 阶段 2：1–2 周，补信任资产

- 做一张“声明—证据”台账：每条资质/数字对应证书编号、颁发机构、有效期、可公开的证明文件。
- ISO 9001：若已认证，展示证书编号/范围/机构/有效期；若只是“参照标准”，把卡片标题改成“参照 ISO 9001 原则”，不要暗示认证。
- 高新/重点实验室：展示证书或认定文件，注明有效期/复审状态。
- 20+ 专利：至少列出专利号/名称/状态；不能列出就改成“多项专利申请/授权”。
- 团队：张一雯博士补完整履历、研究方向、代表性论文/ORCID；其他成员至少给角色与资历；不要只写“2 名博士、2 名硕士”。
- 实验室：用真实实验室/设备照片替换纯文字；不要用 AI 图冒充实拍。
- 客户案例：只写可授权的匿名案例（样本类型、检测项目、周期、结果解读），不要编客户数量/评价。
- 第三方认可：如果未取得 ISO/IEC 17025，明确写“未申请/未获得 ISO/IEC 17025 认可”；如果已取得，展示认可范围。不要用 ISO 9001 替代 17025。

### 阶段 3：1–2 天，性能与安全收尾

- 图片转 WebP/AVIF + `srcset`；About 地图压到 <200 KB；hero preload。
- CSP/HSTS/frame-ancestors/Permissions-Policy；先 Report-Only。
- `www` CNAME + 301，或全渠道只用裸域。
- `npm audit fix`，构建后回归。
- 如接表单/分析工具，补 cookie 同意与隐私政策对应条款。

---

## 六、验收标准

内容侧：

- 35 个商业页每页 ≥800 英文词 / ≥1,200 中文字；同语言 Jaccard ≥0.60 的页面对数降到 0。
- 每个基因/病原/试剂盒页至少 2 条可点击权威参考文献；证据等级可见。
- 首页/FAQ/条款的检测周期一致。
- 中文隐私/条款覆盖与英文同等；无“评论/账户/上传”等不存在的功能描述。
- 所有资质声明有证书编号/有效期或已降级措辞。

技术侧：

- `npm run build` 无错误；sitemap 数量与页面数一致（新增 hub 后更新）。
- `verify-hreflang.py` issues = 0；`x-default` 按语言对分组一致（2 个英文-only hub 自指，属正常）。
- 英文标题 ≤60；中文描述 70–120 字；0 重复 title/description。
- 136+ 页面 200；0 断链；0 孤儿；BreadcrumbList 覆盖 100%。
- `llms.txt` 覆盖 100% sitemap URL + 100 个 `.md`。
- 联系页表单可提交并收到邮件；`tel:` 可拨号；`www` 可访问或 301。
- 安全头在 `curl -I` 可见；skip link 可跳转。

---

## 七、审计数据附录

### 1. 构建与线上

- `npm run build`：成功，137 HTML（含 404），sitemap 136。
- 线上：sitemap 136/136 返回 200；HTML 平均 24,450 bytes；首页 38,852 bytes。
- 首页 TTFB 0.124 s；Hero 线上 50,747 bytes。
- 本地/线上 CSS hash 一致：`_slug_.BGOPhAjL.css`。

### 2. 内链与索引

- 断链 0；孤儿 0；点击深度 0:1 / 1:32 / 2:67 / 3:36。
- canonical 136/136；noindex 0；404 正常；HTTP→HTTPS 301。

### 3. 标题/描述

- 英文标题 >60：47/67；最长 78。
- 中文标题 >60：2/69；最长 70。
- 中文描述 <70：36/69；最短 40。
- 英文描述 >160：0；中位 149。
- 重复 description：2 组（均为中英共用英文描述）。

### 4. 结构化数据

- Product 32、AggregateOffer 32、Service 10、FAQPage 12、Question/Answer 70、MedicalWebPage/MedicalCondition 24、MedicalSymptom 192、Article 16、BlogPosting 28、BreadcrumbList 120。
- 无 Review/AggregateRating。
- 22 个 Article/TechArticle 无 `datePublished`；18 个无 `dateModified`；15 个 BlogPosting 的 `Person` 作者名为公司。

### 5. hreflang

- 136 页有 alternate；266 个互链对；4 个 issue（见 P1）。
- 136 页 hreflang 互链；修复后 0 issue；2 个英文-only hub 使用自指 `x-default`，不伪造中文对应页。

### 6. 近似重复（同语言）

- 中文试剂盒（15 个详情页）：105 对，中位 0.610，≥0.60 72 对，最高 0.678。
- 英文试剂盒（15 个详情页）：105 对，中位 0.659，≥0.60 98 对，最高 0.731。
- 中文基因（8 个详情页）：28 对，最高 0.781（GSR/LRP8）。
- 英文基因（8 个详情页）：28 对，最高 0.668（GSR/LRP8）。

### 7. AIO

- `llms.txt`：31 个唯一 URL（26 HTML + 5 md），sitemap 136，缺 110。
- `.md` 变体：100 个，线上 200 + `text/markdown`；只列了 5 个示例。
- robots：AI crawler 全部 Allow；`Link: rel="llms"` 已配置。

### 8. 引用抽查

PubMed 可解析：18591260、21491240、26202371、29775483、34573598、37443867、40246119。引用真实，但页面未给可点击链接/证据等级。

### 9. 依赖与安全

- `npm audit --omit=dev`：15 个漏洞（1 critical、9 high、3 moderate、2 low），集中在构建/开发依赖。
- 线上安全头：有 `x-content-type-options`、`referrer-policy`；缺 CSP、HSTS、X-Frame-Options/frame-ancestors、Permissions-Policy。

---

## 八、不要做的事

- 不要为了“填满字数”编造 LoD、灵敏度、特异性、临床符合率、客户数量、检测量、专利号或认证范围。
- 不要把 ISO 9001 写成 ISO/IEC 17025，也不要在没有证书时暗示“已认证”。
- 不要用 AI 图片冒充实验室/设备实拍；用户明确不接受。
- 不要给未验证的客户评价加 `Review`/`AggregateRating` schema。
- 不要继续用同一模板批量生成 15 个试剂盒页；先写差异化内容。
- 不要把审计报告直接推到公开仓库；本报告默认只放本地 `docs/`，未提交、未推送。
