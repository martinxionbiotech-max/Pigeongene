# PIGEONGENE ECOSYSTEM ARCHITECTURE
> 分析日期：2026-08-14 · 状态：待用户确认后进入编码

---

## 一、当前现状扫描

### 1. 线上站点（https://senopigeon.com）
- **现状**：英文 WordPress 原版，标题 "Racing Pigeon DNA Test | Performance Genetics Lab"
- **定位**：商业检测主站（英文），尚未中文转化
- **注意**：本地 Astro 中文版尚未部署到该域名（Cloudflare 绑定待用户操作）

### 2. 本地主站项目（pigeongene-astro）
- **技术栈**：Astro 5 + TypeScript + Tailwind + Content Collections
- **页面**：37 页（含 12 病毒详情、6 博客、知识中心 3 页、404）
- **数据文件**：genes.ts(8位点) / viruses.ts(12病原) / kits.ts(15试剂盒) / dnaId.ts
- **Schema 已覆盖**：Organization/WebSite/Service/Product/MedicalWebPage/FAQPage/BlogPosting/ScholarlyArticle/TechArticle/BreadcrumbList 等 20+ 类型

### 3. 已存在的子站雏形（pigeongene-docs）
- MkDocs Material 知识子站（`docs.senopigeon.com`），28 页，**已搁置等指令**
- 该雏形与新四站计划中的 genetics/health 有内容重叠，需决策整合

---

## 二、当前内容分类（可复用资产）

| 资产 | 数量 | 复用去向 |
|---|---|---|
| 8 大基因位点（LDHA/DRD4/CRY1/MSTN/LRP8/GSR/CASK/F-KER） | 8 | → genetics（Gene Encyclopedia 核心） |
| 12 病原检测数据（含传播/危害/症状/鉴别/预防） | 12 | → health（Disease/Virus Encyclopedia 核心） |
| 15 款试剂盒 | 15 | → 主站商业 + tools 关联 |
| 6 篇博客文章 | 6 | → 分发到 genetics/health 对应板块 |
| 6 篇真实科研文献（可追溯 DOI/PubMed） | 6 | → research（唯一真实来源，绝不伪造） |
| 技术原理（PCR/qPCR/STR/SNP） | 4 项 | → genetics + health + research 共享 |
| 28 张图片（含专利设备/认证/大学合作） | 28 | → 主站为主，子站复用科学类 |

### 真实科研文献清单（research 站唯一可追溯来源）
1. Dybus 等 2013 — MSTN 家鸽多态性（DOI: 10.17221/6654-VETMED）
2. Kolvenbag 等 2022 — 基因型谱与赛绩（PMCID: PMC9365715）
3. Gazda MA 等 2018 — 赛鸽遗传变异自然选择（DOI: 10.1093/molbev/msy030）
4. NCBI 2004 — 鸟类呼吸系统生物学（PMID: 15249475）
5. Proskura 2014 — LDHA SNP 与信鸽赛绩（J. Poultry Sci.）
6. Falconer & Mackay — 数量遗传学导论（教科书）

> ⚠️ 这 6 篇是唯一可追溯来源。research 站不得新增无法验证的论文。

---

## 三、SEO 现状

**优势**：主站 Schema 覆盖全面（20+ 类型）、无品牌重复、无死图、无 11 项口径残留、llms.txt 已建。
**缺口**：
1. 线上域名仍是英文站（中文版未上线）
2. 子站未建（Topical Authority 无法形成）
3. 缺 RSS、缺站内搜索、缺统一 Entity（sameAs 链路未打通四站）
4. 图片未 WebP 化、部分图片 500KB+（性能待优化）

---

## 四、四站建议信息架构

### 1. genetics.senopigeon.com — 遗传学知识库
```
/（首页：遗传学 Pillar）
/genes/（Gene Encyclopedia 入口）
/genes/ldha/ ... /genes/f-ker/（8 基因，统一模板）
/genetic-markers/（标记类型 STR/SNP/基因分型）
/pigeon-dna/（赛鸽 DNA 基础）
/breeding-genetics/（育种遗传）
/inheritance/（遗传规律：显隐/孟德尔）
/genotype-phenotype/（基因型-表型）
/performance-genetics/（性能遗传）
/homing-genetics/（归巢遗传）
/endurance-genetics/（耐力遗传）
/muscle-genetics/（肌肉遗传）
/glossary/（术语表）
/faq/
```

### 2. health.senopigeon.com — 健康/疾病知识库
```
/（首页：健康 Pillar）
/diseases/（疾病百科入口）
/viruses/（7 病毒）
/bacteria/（3 细菌）
/parasites/（1 寄生虫）
/pcr-testing/（PCR 检测知识）
/diagnostics/（诊断方法）
/symptoms/（症状索引）
/biosecurity/（生物安全）
/loft-health/（鸽舍健康）
/prevention/（预防）
/glossary/ /faq/
```

### 3. research.senopigeon.com — 科研中心
```
/（首页：Research Pillar）
/research/（研究方向）
/papers/（真实文献库，仅 6 篇可追溯）
/genetics/ /performance/ /homing/ /endurance/ /muscle-physiology/
/genetic-markers/ /dna-testing/ /methodology/
/scientific-references/（引用规范）
/glossary/ /research-notes/
```

### 4. tools.senopigeon.com — 在线工具
```
/（首页：工具总览）
/gene-lookup/（基因查询）
/genetics-calculator/（遗传计算器）
/breeding-calculator/（育种计算器）
/parentage-calculator/（亲缘计算器，Phase 2）
/dna-certificate-verification/（DNA 证书验证）
/glossary/
```

---

## 五、四站内链关系（语义网络）

```
            PIGEONGENE（商业转化）
           /    |    |     \
     genetics  health  research  tools
         |       |       |        |
     Gene ─── Disease ── Evidence ── Calculator
         |       |       |        |
     8位点 ── 12病原 ── 6文献 ── 结果解释
         \       \       /        /
          └────── 全部回链主站检测服务 ──────┘
```

**内链规则**：
- genetics Gene 页 → research 对应研究 → 主站基因检测
- health Disease 页 → research 病原研究 → 主站病毒检测
- tools 工具结果 → genetics 知识解释 → 主站检测
- 商业链接自然，不强塞

---

## 六、开发优先级（严格 Phase 顺序）

| Phase | 站点 | 内容 | 状态 |
|---|---|---|---|
| Phase 0 | 主站中文版 | 已完成（37 页，待部署） | ✅ |
| Phase 1 | genetics | 首页+Gene 百科(8)+Pillar+Glossary+FAQ+llms.txt | ⏸ 待建 |
| Phase 2 | health | 首页+疾病百科(12)+PCR+生物安全+Glossary+FAQ+llms.txt | ⏸ 待建 |
| Phase 3 | research | 首页+6 真实文献+方法论+Glossary+llms.txt | ⏸ 待建 |
| Phase 4 | tools | Gene Lookup+遗传/育种计算器+DNA证书验证+llms.txt | ⏸ 待建 |
| Phase 5 | 四站统一 | 内链+Schema+Sitemap+Robots+Canonical+OG+RSS+搜索+404 | ⏸ 待建 |

---

## 七、关键决策点（需用户拍板）

1. **四站技术栈**：文档要求 Astro 统一。但 genetics/health/research 是纯知识库（内容密集、500+ 页目标），MkDocs 更适合程序化生成。**建议**：knowledge 类站用 Astro（文档要求 + 与主站统一），或 knowledge 用 MkDocs（快、SEO 成熟）？需确认。
2. **与已有 pigeonengene-docs 雏形关系**：该雏形内容与新四站重叠。**建议**：废弃 docs 雏形，内容并入 genetics/health。
3. **域名与 repo**：4 个新子域 + 4 个新 repo，均需用户创建（PAT 无 createRepository 权限）。
4. **内容语言**：文档要求"中文为主，英文术语辅助"，与主站中文版一致。
5. **首批规模**：Phase 1 每站 10-20 核心页（非 500+ 一次性铺开）。

---

## 八、执行原则（已内化）

1. 不破坏现有主站
2. 不伪造论文/数据/DOI/统计
3. 遗传关联用"可能关联/研究提示"，不写确定性结论
4. 症状≠确诊，需"实验室检测确认"
5. 计算可复现、有边界条件、有错误处理
6. 每站独立视觉识别，不复制模板换标题
7. 每阶段 build→SEO→链接→Schema→移动端 检查后再下一阶段
