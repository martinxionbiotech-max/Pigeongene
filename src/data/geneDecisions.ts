// Marker-specific interpretation guards. These keep a candidate-gene association
// from being presented as a causal or selection-grade claim.
export const geneDecisions: Record<string, string> = {
  LDHA:
    '如果报告把 LDHA 直接称为“速度基因”，要求给出鸽类研究、性状定义和效应量；没有这些，只能按 B 级候选关联解读，不能据此淘汰或高价交易。',
  DRD4:
    'DRD4 与神经递质/行为相关，鸽类证据是竞翔关联；不要把它当作训练服从性或性格的确定预测。',
  CRY1:
    'CRY1 是生物钟相关基因；磁感应候选研究主要聚焦 CRY4，报告中不要把两者混为一谈。',
  MSTN:
    'MSTN 的鸽类证据主要是品种间多态性，缺少竞翔性能关联；不能推断肌肉量、速度或比赛名次。',
  'F-KER':
    'F-KER 是羽毛角蛋白相关标记，鸽类研究以多态性为主；与飞行性能的关系是间接推断，证据等级 C。',
  LRP8:
    'LRP8 与 GSR 位于同一研究区域，报告要写明检测的是哪个位点；不要把两个位点重复计分或当作独立强证据。',
  GSR:
    'GSR 参与氧化还原平衡，鸽类关联研究来自同一 GSR/LRP8 区域；结果只能作为候选参考，不能单独定价。',
  CASK:
    'CASK 的鸽类证据为初步/次级，适合探索性解读；不应进入硬性淘汰标准，也不应对外做确定性宣传。',
};

export const geneDecisionsEn: Record<string, string> = {
  LDHA:
    'If a report calls LDHA a “speed gene”, ask for the pigeon study, trait definition and effect size. Without them, treat it as a grade-B candidate association — not a reason to cull or price a bird.',
  DRD4:
    'DRD4 is linked to neurotransmitter/behaviour biology; the pigeon evidence is a racing association. Do not present it as a deterministic predictor of trainability or temperament.',
  CRY1:
    'CRY1 is a circadian-clock gene; magnetoreception research mainly concerns CRY4. Reports should not conflate the two.',
  MSTN:
    'The pigeon MSTN evidence is mainly breed-level polymorphism without a racing-performance association. It cannot establish muscle mass, speed or race placement.',
  'F-KER':
    'F-KER is a feather-keratin marker; pigeon studies are mainly polymorphism reports. Its link to flight is indirect and graded C.',
  LRP8:
    'LRP8 sits in the same study region as GSR. A report must state which marker was assayed; do not double-count the two or treat them as independent strong evidence.',
  GSR:
    'GSR is involved in redox balance, and the pigeon association comes from the shared GSR/LRP8 region. Use it as candidate evidence, not as a stand-alone pricing criterion.',
  CASK:
    'The pigeon CASK evidence is preliminary/secondary and suitable for exploratory reading. It should not enter a hard culling rule or a deterministic marketing claim.',
};
