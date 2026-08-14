# PigeonGene 生态 · 内容深化 & AIO/SEO/EEAT/Entity 强化方案

> 2026-08-14 | 基于 5 站全面扫描后的深化执行方案

## 一、现状扫描结论

### 5 站技术形态
| 站 | 技术栈 | 页面 | schema 现状 |
|---|---|---|---|
| 主站 pigeonGene.com | Astro | 37 | ✅ Organization/WebSite/Service/FAQ/MedicalWebPage/Breadcrumb/ScholarlyArticle/AboutPage/Product/BlogPosting/CollectionPage/TechArticle |
| genetics | MkDocs | 22 | ⚠️ 仅 Organization+WebSite（无页面级 schema） |
| health | MkDocs | 27 | ⚠️ 仅 Organization+WebSite（无 MedicalCondition 等） |
| research | MkDocs | 19 | ⚠️ 仅 Organization+WebSite（丢 ScholarlyArticle） |
| tools | Astro | 8 | 部分（WebApplication/DefinedTermSet） |

### 核心短板（按优先级）
1. **Entity 图谱浅**：Organization 缺 sameAs(社交)/numberOfEmployees/award/hasCredential/knowsAbout/生态 isPartOf；无 Person(专家) 实体；基因/病原无独立 DefinedTerm/MedicalCondition 实体
2. **EEAT 弱**：专家团队纯文本无 schema；文章 author 是 Organization 非 Person；无 dateModified/reviewedBy
3. **AIO 结构缺失**：MkDocs 三站无页面级 schema；提问式 H2 不系统
4. **内容专业化不足**：genes.ts 仅 4 字段（缺关联证据/文献/标记类型）；病毒缺潜伏期/诊断/处理

## 二、深化执行方案

### Phase A — 全站共享 Entity 强化（统一）
Organization schema 全站统一增强：
- `sameAs`：社交/百科（保持 5 站生态链）
- `numberOfEmployees`、`foundingDate`(已有)
- `award`：国家高新技术企业、市级重点实验室
- `hasCredential`：ISO 9001
- `knowsAbout`：赛鸽遗传学、分子诊断、病毒检测等
- `isPartOf`/`parentOrganization`：生态关系（子站 isPartOf 主站）

### Phase B — 主站深化（商业核心，最高优先）
1. **genes.ts 扩展**：新增 `association`(关联证据)、`markerType`(标记类型)、`reference`(文献)、`relatedTests`
2. **病毒数据扩展**：新增 `incubation`(潜伏期)、`diagnosis`(诊断)、`treatment`(处理)
3. **Person schema**：专家团队（张一雯博士等）建立 Person 实体
4. **blog author 改 Person** + 新增 `dateModified`、`image`
5. **病毒详情页**：MedicalCondition 完整实体 + mainEntityOfPage
6. **采样流程**：HowTo schema

### Phase C — 四站深化
1. **MkDocs 三站补页面级 schema**：在 overrides/main.html 用 Jinja 按 page.meta 注入（Article/MedicalCondition/ScholarlyArticle/DefinedTermSet/FAQPage/BreadcrumbList）
2. **tools 站**：补 BreadcrumbList + 工具页面细化

### Phase D — 全站 AIO/SEO 收尾
1. 提问式 H2 系统化（How/What/Why）
2. llms.txt 补全
3. 内链强化（相关检测/相关文章互链）
4. 构建验证 + 推送

## 三、执行顺序
1. Phase A（共享 Entity，改 1 处主站 BaseLayout + 4 站 overrides/entity.ts）
2. Phase B（主站数据扩展 + schema 强化）
3. Phase C（四站 schema 补齐）
4. Phase D（AIO 收尾 + 验证 + 推送）
