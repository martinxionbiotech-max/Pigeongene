# senopigeon.com 复审报告（R2）

> **后续进展（2026-11-24）**：本报告记录的是优化前快照。随后已执行商业页去模板化、证据等级/PubMed/DOI、页内免责声明、资质核验说明、主图 WebP/srcset 等优化；最新数据见 `docs/optimization-2026-11.md`。本报告中的 P0 内容数据不应再作为当前状态引用。

- **复审日期**：2026-11-24
- **复审对象**：`github.com/martinxionbiotech-max/Pigeongene`（线上 `https://senopigeon.com`）
- **代码版本**：`main` / `b7f0f16`
- **构建**：`npm run build` 成功，139 HTML（含 404），sitemap **138**
- **线上**：sitemap **138/138 返回 200**；旧中文博客 URL 301；安全头、`llms.txt` 已上线
- **方法**：本地构建 + 线上抓取；`site-audit.py`、`verify-hreflang.py`、自定义正文/JSON-LD/同语言重复检测；未接入 GSC、Analytics、外链工具，未核验证书/专利/ICP 原件

---

## 结论

**综合得分：56 / 100（较首轮 46 分 +10）**

技术 SEO、AIO、合规页深度明显改善；但**商业页内容厚度、同语言重复、证据链、资质证据**仍是主瓶颈。现在不是“站不可用”，而是“技术底座已合格，内容与信任还不够支撑扩量”。

| 维度 | 首轮 | R2 | 权重 | 加权 |
|---|---:|---:|---:|---:|
| 内容质量与原创性 | 28 | 30 | 25% | 7.5 |
| E-E-A-T / 信任 | 30 | 32 | 20% | 6.4 |
| 技术 SEO | 72 | 88 | 15% | 13.2 |
| AIO / GEO | 55 | 85 | 10% | 8.5 |
| 转化 / UX | 45 | 50 | 10% | 5.0 |
| 合规 / 法律 | 40 | 72 | 10% | 7.2 |
| 性能 / 安全 | 78 | 84 | 10% | 8.4 |
| **合计** | **46** | **56** |  | **56.2** |

---

## 一、本轮确实修好的部分

### 1. 技术 SEO 已基本达标

- **138 页**：中文 68、英文 70；sitemap 138。
- **138/138 线上 200**；无断链、无孤儿页；点击深度 0:1 / 1:33 / 2:67 / 3:37。
- **0 个 title >60**（解码后最大 60）；中文描述 **0 个 <70**，全部 **70–120 字**；英文描述 **0 个 >160**。
- **0 重复 title / description / canonical**；H1 唯一；0 noindex。
- **BreadcrumbList 138/138**。
- **hreflang**：270 个互链对，`verify-hreflang.py` **0 issues**；`x-default` 分组 **0 冲突**。4 个英文-only 页面（2 个 hub + 2 篇英文-only 博客）使用自指 `x-default`，没有伪造中文对应页。
- 英文 hub `/en/genes/`、`/en/pathogens/` 已上线，接入导航、Footer、sitemap。
- 旧中文博客 `/blog/flight-gene-report-guide/`、`/blog/pathogen-testing-practical-guide/` 已 301 到英文页；404 正常。

### 2. AIO 覆盖已从 19% 提升到 100% HTML

- `llms.txt`：**138/138 HTML URL**，另列 **98 个 Markdown 变体**；由 `postbuild` 从 sitemap 自动生成。
- 100 个 md 端点线上返回 `text/markdown`；`Link: rel="llms"` 已配置。
- robots 允许 GPTBot、OAI-SearchBot、ClaudeBot、PerplexityBot、Google-Extended。
- 结构化数据：Product 32、Service 10、FAQPage 12、MedicalWebPage/MedicalCondition 24、Article 16、BlogPosting 26、BreadcrumbList 138；无伪造 Review/AggregateRating。
- 页面级 Article/BlogPosting/TechArticle/MedicalWebPage 均有 `datePublished` + `dateModified`；公司作者已改为 `Organization`；Product `offerCount` 修正为 2。
- 外部 `ScholarlyArticle` 条目**没有伪造日期**（保留无日期，避免把站点日期当成论文发表日）。

### 3. 合规页深度已补上

- `/yinsi/` 约 **2,786 个汉字**；`/en/privacy-policy/` 约 **1,512 词**：控制者、数据类型、PIPL/GDPR 法律依据、Cookies、共享/委托处理、跨境、保存期限、安全、权利、未成年人、投诉。
- `/tiaokuan/` 约 **3,077 个汉字**；`/en/terms/` 约 **1,741 词**：订单、价格税费、样本寄送/保存/处置、周期、取消退款、报告边界、知识产权、出口制裁、责任限制、不可抗力、争议解决；明确 RUO/IVD 边界。
- 新增 `/mianze-shengming/`（约 1,292 汉字）与 `/en/disclaimer/`（约 722 词）：非人体使用、非兽医诊断、基因/病原局限、RUO、第三方依赖、责任限制。
- 内容与证据政策扩至约 **1,815 个汉字 / 1,086 词**：编辑独立性、作者/审稿、A/B/C/D 分级、引用核验、方法学、报告边界、AI 使用、更正/撤稿。
- 电话标签统一为“电话 | 微信：”/“Phone | WeChat:”，号码不变，`tel:` 全站可拨；WhatsApp 文案已移除；按用户要求**不设表单**（全站表单数 0）。

### 4. 性能与安全底子

- 首页 TTFB 约 **0.145 s**，HTML 约 **39 KB**；无 JS bundle；CSS 约 41.8 KB。
- CSP、HSTS、X-Frame-Options、Referrer-Policy、Permissions-Policy、COOP 线上均生效。
- 所有图片有 alt 与宽高；无缺失 alt/尺寸。
- 404 正常；HTTP→HTTPS 301；`www` 仍无法解析（见 P1）。

---

## 二、P0：仍然阻碍内容扩量的问题

### 1. 商业页仍然薄，合规页的增量没有解决商业页

全站正文：

- 中文 68 页：约 **43,358 个汉字**，平均约 638 字/页。
- 英文 70 页：约 **33,577 个英文词**，平均约 480 词/页。
- **中文 56 页 <800 字；英文 51 页 <500 词。**

按商业页面族：

| 页面族 | 中文中位数 | 英文中位数 | 判断 |
|---|---:|---:|---|
| 检测试剂盒 `/shijihe/`、`/en/kits/` | 347 字 | 235 词 | 严重偏薄；15 页高度模板化 |
| 病原检测 `/bingdu-jiance/`、`/en/pathogens/` | 582 字 | 351 词 | 偏薄；缺参考文献与鉴别深度 |
| 基因位点 `/jiyin-jiance/`、`/en/genes/` | 372 字 | 229 词 | 偏薄；证据展示不足 |
| 博客 `/blog/`、`/en/blog/` | 762 字 | 552 词 | 中文仍偏短，英文可读但未到深度文 |
| 关于 `/guanyu/`、`/en/about/` | 228 字 | 129 词 | 中文关于页明显偏薄 |
| 联系 `/lianxi/`、`/en/contact/` | 63 字 | 104 词 | 只有联系信息，无询盘字段（用户要求不设表单） |

> 说明：合规页把总量拉高了（隐私 2,786 字、条款 3,077 字），但 15 个试剂盒、12 个病原、8 个基因、15 篇博客仍是原内容。

### 2. 试剂盒/基因页同语言重复仍然严重

同语言 8 字中文 n-gram / 5 词英文 n-gram Jaccard：

| 范围 | 对数 | 中位相似度 | ≥0.60 | 最高 |
|---|---:|---:|---:|---:|
| 中文试剂盒 15 页 | 105 | 0.610 | 72 | 0.678（APV/PIHV） |
| 英文试剂盒 15 页 | 105 | 0.659 | 98 | 0.731（PIPV/PIRV） |
| 中文基因 8 页 | 28 | 0.479 | 1 | 0.781（GSR/LRP8） |
| 英文基因 8 页 | 28 | 0.343 | 1 | 0.668（GSR/LRP8） |

**结论**：15 个试剂盒页仍是“同一模板换病原名”；这不是“略薄”，而是产品页层面的重复内容。GSR/LRP8 也共享大段句式。

### 3. 证据链仍未落到页面

内容政策已经写了“证据优先、A/B/C/D、PMID/DOI 核验”，但页面实现仍不足：

- **正文内 0 个外部权威引用链接**；只有 `/cankao/` 与 `/en/references/` 有 7 个外部链接。
- 8 个基因页均**没有显示 A/B/C/D 证据等级**；`PMID/DOI` 仍是纯文本，不能点击。
- 12 个病原页没有参考文献；博客没有 References 区块。
- schema 中 `reviewedBy` **0**、`citation` **0**；`Person` 仅有张一雯/ Zhang Yiwen 两个实体，没有审稿人字段。
- 内容政策自己已写“历史页面正在分批补齐可点击链接”，这是诚实的，但用户看到基因页时仍无法一键核验。

### 4. 资质与主体信任证据仍不足

`/guanyu/` 与 schema 仍有强声明：

- 国家高新技术企业
- 张家口市重点基因检测实验室（2021）
- ISO 9001 质量管理体系
- 20+ 自主专利
- 100 万美元设备
- 15 人团队、2 名博士、2 名硕士
- “2024 年获相关领域荣誉”

当前页面没有：

- 高新证书编号、认定年度、有效期/复审状态
- 重点实验室认定文件/有效期
- ISO 9001 证书编号、认证机构、范围、有效期；措辞“严格遵循 ISO 9001 质量管理标准”容易被读成“已认证”
- 专利清单（专利号/名称/状态）
- 设备清单或实验室实拍
- 团队成员完整履历/公开主页
- “2024 年荣誉”的具体名称与颁发机构
- ISO/IEC 17025 的明确状态（有/没有；不能用 ISO 9001 代替）

同时：

- 没有 ICP 备案号、统一社会信用代码/营业执照信息。
- 全站 12 个页面仍使用个人邮箱 `martin@senobiocorp.com`；对外角色邮箱/隐私邮箱未建立。
- `www.senopigeon.com` 仍无法解析。

---

## 三、P1：高优先级但非阻塞

1. **图片没有响应式 srcset**：282 个 `<img>`，0 个 `srcset`；27 JPG + 3 PNG，无 WebP/AVIF。`/guanyu/` 与 `/en/about/` 的 `SENO-Location.jpg` 线上约 859 KB，是明确 LCP 风险。
2. **`npm audit` 15 个漏洞**：1 critical、9 high、3 moderate、2 low，集中在构建/开发依赖（sharp/libvips、Vite、SVGO、undici 等）。静态输出没有运行时 JS，但仍应升级并回归。
3. **页面级免责声明仍不够显眼**：免责声明已全站页脚链接，但基因/病原详情页没有页内“非兽医诊断/不保证成绩”提示条；对 YMYL 内容建议每页加 1 个短提示。
4. **内容政策与页面实现不一致**：政策写了 A/B/C/D 与可点击 PMID/DOI，但基因页没有等级、引用不是链接；要么补实现，要么把政策措辞进一步降级。
5. **`/en/genes/`、`/en/pathogens/` 是英文-only hub**：`x-default` 自指，不伪造中文对应页；这是有意的，但中文用户从语言切换只能到对应服务页，不是 hub。若希望完全对称，可后续增加中文 hub 对应关系。
6. **`site-audit.py` 报 83 个 description 越界**：这是脚本按英文 140–155 规则统计中文导致的误报；实际中文 70–120、英文 ≤160。建议在报告/CI 中按语言分开阈值，避免团队被假红灯干扰。
7. **`www` 未解析**：如品牌物料/邮件签名使用 `www`，会打不开；应加 CNAME + 301，或全渠道只用裸域。

---

## 四、P2：优化项

1. `llms.txt` HTML 覆盖 100%，但 Markdown 变体只有 98/138（合规页、hub 无 md）；若希望 AI 抓取法律/信任页，可补 `.md`。
2. 282 个 `<img>` 中 278 个没有 `loading="lazy"`，其中大部分是重复 LOGO；LOGO 不需要 lazy，但 About/内容图应统一 lazy + `decoding="async"`。
3. 首页 TTFB 145 ms 很好；但中国访问受 Cloudflare 边缘影响，建议后续以 GSC/CrUX 的现场 CWV 为准，而不是只看本机 curl。
4. 内容页没有“最近审核/审稿人/更新记录”可见字段；schema 有日期，但读者看不到。
5. 没有独立的 `/methodology/`、`/corrections/`、`/accessibility/` 页面；内容政策已覆盖部分规则，但独立页面更利于 E-E-A-T 与合规审计。
6. 个人邮箱仍出现在 12 个页面；建议建立 `sales@` / `privacy@` 角色别名，减少个人依赖与爬虫风险。

---

## 五、仍然值得保留的好底子

- **138/138 线上 200**；0 断链、0 孤儿；点击深度 3 以内。
- **0 title >60**；中文描述 70–120；英文 ≤160；0 重复 title/description/canonical。
- **hreflang 0 issues / x-default 0 conflicts**；Breadcrumb 138/138。
- **llms 138/138 HTML + 98 md**；AI crawler 全部 Allow。
- **安全头完整**；无 JS；HTML 39 KB；TTFB 145 ms。
- **电话可拨、标签正确**；全站 0 表单（符合本轮要求）；英文页 0 中文字符。
- **合规页已达到可执行政策级别**：隐私/条款/免责声明/内容政策都有实质内容。
- **旧 URL 301**、404 正常、HTTP→HTTPS 正常。
- 没有伪造 Review/Rating；外部 ScholarlyArticle 没被强行加日期。

---

## 六、建议的下一阶段

### 阶段 A（2–4 周，最高 ROI）

1. **15 个试剂盒页全部重写**：靶标、方法学、组分、样本、质控、判读、局限、储存/运输、48T/96T、MOQ/OEM、交期、参考文献；性能数字没有验证就写 `[待实验室确认]` 或“见批次 COA”。
2. **12 个病原页扩到 900–1,300 英文词 / 1,500–2,000 中文字**：传播、症状、鉴别、样本、qPCR 判读、防治、兽医免责、参考文献。
3. **8 个基因页补证据表 + A/B/C/D + 可点击 PMID/DOI**：候选基因边界、研究人群、表型、局限；统一“候选性能相关”措辞。
4. **中文博客 13 篇补到 1,500–2,000 字，英文 13 篇补到 800–1,200 词**；每篇至少 3 条可点击来源。
5. 验收：同语言 Jaccard ≥0.60 的页面对数降到 0；商业页正文达到上述下限。

### 阶段 B（1–2 周，信任）

1. 做“声明—证据”台账：高新、重点实验室、ISO 9001、专利、设备、团队、2024 荣誉逐条对应证书/编号/有效期；不能提供就降级措辞。
2. 若未取得 ISO/IEC 17025，明确写“未申请/未获得”，不要用 ISO 9001 替代；若已取得，展示认可范围。
3. 建立 `reviewedBy` / `citation` schema；为基因、病原、博客加页内免责声明条。
4. 建立 `sales@` / `privacy@` 角色邮箱；补 ICP/USCC（如适用）。
5. 补独立方法论页/更正页/无障碍页，至少把内容政策中的承诺落到可访问页面。

### 阶段 C（1–2 天，工程）

1. 图片 WebP/AVIF + srcset；About 地图压到 <200 KB；hero preload。
2. `www` CNAME + 301，或全渠道只用裸域。
3. `npm audit fix`，构建后回归；不要 `--force` 升 Astro 7。
4. 给合规页补 `.md`，让 `llms` 的 md 覆盖从 98/138 提升。
5. CI 中按语言分开 description 阈值，避免 `site-audit` 的中文误报。

---

## 七、复审数据附录

### 页面与索引

- 138 HTML（不含 404）；中文 68 / 英文 70。
- sitemap 138；`llms.txt` 138 HTML + 98 md。
- 404 正常；旧中文博客 301；`www` 无法解析。
- 0 断链、0 孤儿；click depth 0:1 / 1:33 / 2:67 / 3:37。

### 元数据

- title >60：0，最大 60。
- 中文 description：最小 70，最大 120，<70 为 0。
- 英文 description：最大 160，>160 为 0。
- 重复 title/description/canonical：0/0/0。

### 结构化数据

- BreadcrumbList 138/138。
- Product 32、AggregateOffer 32、Service 10、FAQPage 12、Article 16、BlogPosting 26、MedicalWebPage 24、TechArticle 6。
- 页面级 Article/BlogPosting/TechArticle/MedicalWebPage 日期缺失：0。
- `reviewedBy` 0、`citation` 0；Person 仅张一雯/ Zhang Yiwen。
- 无 Review/AggregateRating。

### 内容

- 中文 43,358 字；英文 33,577 词。
- 中文 <800 字：56 页；英文 <500 词：51 页。
- 试剂盒同语言中位 Jaccard：中文 0.610 / 英文 0.659；≥0.60 分别 72/105、98/105。
- 正文外链：仅 `/cankao/` 与 `/en/references/` 各 7 条；商业页正文 0 条。

### 性能/安全

- 首页 TTFB 0.145 s；HTML 39,406 bytes；无 JS；CSS 41.8 KB。
- 图片 282 个：27 JPG + 3 PNG；0 srcset；0 缺失 alt/宽高；About 地图 859 KB。
- 安全头：CSP/HSTS/X-Frame/Referrer/Permissions/COOP 全部线上生效。
- `npm audit --omit=dev`：15 个漏洞（1 critical、9 high、3 moderate、2 low），构建/开发依赖为主。

### 本轮未覆盖

- 未接 GSC/Analytics/外链工具；未验证收录、排名、真实 CWV、证书/专利/ICP 原件。
- 未评估法律意见；合规页建议律师按实际主体与目的国复核。
