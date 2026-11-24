// Evidence grades used on gene pages. These reflect the strength of published
// pigeon-specific evidence, not commercial importance or a guarantee for an
// individual bird. A = multiple independent studies + functional/cohort support;
// B = at least one peer-reviewed pigeon association study; C = preliminary/single
// study or polymorphism-only evidence; D = hypothesis/background only.
export type EvidenceGrade = 'A' | 'B' | 'C' | 'D';

export const geneEvidence: Record<string, { grade: EvidenceGrade; note: string }> = {
  LDHA: {
    grade: 'B',
    note: '鸽类同行评审研究报道 LDHA 多态性与竞翔存活率存在统计关联；属于候选基因关联，不是因果，也不等于速度。',
  },
  DRD4: {
    grade: 'B',
    note: '鸽类同行评审研究报道 DRD4 与竞翔表现存在统计关联；需结合多基因、训练与环境综合判断。',
  },
  CRY1: {
    grade: 'B',
    note: '鸽类研究报道 CRY1 与竞翔表现存在关联；不能据此把 CRY1 称为“磁感应基因”（磁感应候选研究聚焦 CRY4）。',
  },
  MSTN: {
    grade: 'C',
    note: '现有鸽类研究主要是品种间多态性鉴定，缺少竞翔表现关联分析；功能背景来自其他物种，解读需谨慎。',
  },
  'F-KER': {
    grade: 'C',
    note: '现有鸽类研究主要是 F-KER 多态性鉴定，未包含竞翔性能关联分析；与飞行性能的关系属于间接推断。',
  },
  LRP8: {
    grade: 'B',
    note: '鸽类研究报道 GSR/LRP8 多态性与竞翔表现存在关联；属于候选基因关联，需独立重复验证。',
  },
  GSR: {
    grade: 'B',
    note: '鸽类研究报道 GSR/LRP8 多态性与竞翔表现存在关联；属于候选基因关联，需独立重复验证。',
  },
  CASK: {
    grade: 'C',
    note: '鸽类研究报道 CASK 多态性，性能关联属初步/次级证据；不能作为结论性育种依据。',
  },
};

export const geneEvidenceEn: Record<string, { grade: EvidenceGrade; note: string }> = {
  LDHA: {
    grade: 'B',
    note: 'A peer-reviewed pigeon study reported a statistical association between LDHA polymorphism and racing survival; this is a candidate-gene association, not causation and not a speed guarantee.',
  },
  DRD4: {
    grade: 'B',
    note: 'A peer-reviewed pigeon study reported an association between DRD4 and racing performance; read it with multiple genes, training and environment.',
  },
  CRY1: {
    grade: 'B',
    note: 'Pigeon research reported an association between CRY1 and racing performance; CRY1 should not be called a “magnetoreception gene” (the magnetoreception candidate is CRY4).',
  },
  MSTN: {
    grade: 'C',
    note: 'Pigeon studies mainly report breed-level polymorphism, without a racing-performance association; functional background comes from other species, so interpretation is cautious.',
  },
  'F-KER': {
    grade: 'C',
    note: 'Pigeon studies mainly report F-KER polymorphism without a racing-performance association; the link to flight is indirect.',
  },
  LRP8: {
    grade: 'B',
    note: 'LRP8 lies in the GSR/LRP8 region; a pigeon study reported an association between this region and racing performance. Candidate-gene evidence requiring independent replication, not a causal claim. When reading a report, confirm whether the assay targets LRP8 itself or a linked GSR marker; the two are often reported together but are not interchangeable.',
  },
  GSR: {
    grade: 'B',
    note: 'GSR encodes glutathione reductase, an antioxidant enzyme involved in redox balance; the same pigeon study reported an association across the GSR/LRP8 region and racing performance. Treat it as candidate-gene evidence, not a causal claim. A GSR result should not be used alone to rank birds or set a sale price.',
  },
  CASK: {
    grade: 'C',
    note: 'Pigeon research reports CASK polymorphism; performance association is preliminary/secondary and should not be treated as conclusive.',
  },
};
