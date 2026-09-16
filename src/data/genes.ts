export interface GeneMarker {
  code: string;
  name: string;
  en: string;
  function: string;
  benefit: string;
  association: string;
  markerType: string;
  reference: string;
}

export const geneMarkers: GeneMarker[] = [
  {
    code: 'LDHA',
    name: '乳酸脱氢酶 A',
    en: 'Lactate Dehydrogenase A',
    function: '参与无氧糖酵解过程，为短距离冲刺阶段供能的关键酶，其基因型差异可能影响赛鸽在高强度飞行中的能量代谢效率。',
    benefit: '筛选与竞翔存活表现相关的候选基因型赛鸽，为种鸽选配提供遗传参考。',
    association: '赛鸽专属研究（Ramadan 2018，PLOS ONE）报道 LDHA 多态性与竞翔存活率存在统计学关联；属候选基因关联，不是因果，也≠速度。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: 'Ramadan 2018，PLOS ONE ｜ PMID: 29775483 ｜ DOI: 10.1371/journal.pone.0195121',
  },
  {
    code: 'DRD4',
    name: '多巴胺受体 D4',
    en: 'Dopamine Receptor D4',
    function: '多巴胺受体 D4 参与神经系统信号传导，与动机、探索行为相关，是赛鸽竞翔表现的候选基因。',
    benefit: '作为竞翔表现候选位点，为种鸽选育与训练方案提供遗传参考。',
    association: '赛鸽专属研究（Proskura 2015，Animal Genetics）报道 DRD4 多态性与竞翔表现存在统计学关联；属候选基因关联，需结合多基因与环境综合判断。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: 'Proskura 2015，Animal Genetics ｜ PMID: 26202371 ｜ DOI: 10.1111/age.12328',
  },
  {
    code: 'CRY1',
    name: '隐花色素 1',
    en: 'Cryptochrome 1',
    function: '隐花色素 1 是生物钟核心组分，参与昼夜节律调控。注意：磁感应分子候选研究聚焦的是 CRY4，与 CRY1 不同。',
    benefit: '作为节律与竞翔表现相关候选位点，与其他位点及赛绩结合参考。',
    association: '赛鸽专属研究（Dybus 2021，Animals）报道 CRY1 多态性与竞翔表现存在统计学关联；不能据此声称 CRY1 是「磁感应基因」。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: 'Dybus 2021，Animals ｜ PMID: 34573598 ｜ DOI: 10.3390/ani11092632',
  },
  {
    code: 'MSTN',
    name: '肌肉生长抑制素',
    en: 'Myostatin',
    function: '肌肉生长抑制素（MSTN）负调控骨骼肌生长，功能缺失型变异在哺乳动物中可致肌肉肥大，是研究最深入的肌肉调控基因之一。',
    benefit: '提供家鸽品种间多态性参考；赛鸽竞翔关联证据有限，解读需谨慎。',
    association: '鸽类研究（Dybus 2013）报道家鸽 MSTN 多态性，属多态性鉴定，不含竞翔表现关联分析；功能背景见 Rodgers & Garikipati 2008。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: 'Dybus 2013，Vet Med ｜ DOI: 10.17221/6654-VETMED；Rodgers & Garikipati 2008，PMID: 18591260',
  },
  {
    code: 'F-KER',
    name: '羽角蛋白基因',
    en: 'Feather Keratin Gene',
    function: '羽角蛋白是羽毛主要结构蛋白，相关基因变异可能影响羽毛结构与力学特征，与飞行性能的关系属间接推断。',
    benefit: '提供羽质相关多态性参考；赛鸽竞翔关联证据有限，解读需谨慎。',
    association: '鸽类研究（Dybus & Haase 2011）报道家鸽 F-KER 多态性，属多态性鉴定，不含竞翔性能关联分析。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: 'Dybus & Haase 2011，Br Poult Sci ｜ PMID: 21491240 ｜ DOI: 10.1080/00071668.2010.549666',
  },
  {
    code: 'LRP8',
    name: '脂蛋白受体相关蛋白 8',
    en: 'Lipoprotein Receptor-Related Protein 8',
    function: '脂蛋白受体相关蛋白 8 参与脂质代谢与能量运输，是赛鸽竞翔表现研究的候选基因之一。',
    benefit: '作为竞翔表现候选位点，与 GSR 等位点及赛绩结合参考。',
    association: '赛鸽专属研究（Kulig 2025）报道 GSR 与 LRP8 多态性对蛋白功能的结构影响及其与竞翔表现的关系；属候选基因关联。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: 'Kulig 2025，Int J Biol Macromol ｜ PMID: 40246119 ｜ DOI: 10.1016/j.ijbiomac.2025.143181',
  },
  {
    code: 'GSR',
    name: '谷胱甘肽还原酶',
    en: 'Glutathione Reductase',
    function: '谷胱甘肽还原酶是抗氧化防御系统的关键酶，与氧化应激清除及恢复相关，是赛鸽竞翔表现研究的候选基因之一。',
    benefit: '作为竞翔表现候选位点，与 LRP8 等位点及赛绩结合参考。',
    association: '赛鸽专属研究（Kulig 2025）报道 GSR 与 LRP8 多态性对蛋白功能的结构影响及其与竞翔表现的关系；属候选基因关联。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: 'Kulig 2025，Int J Biol Macromol ｜ PMID: 40246119 ｜ DOI: 10.1016/j.ijbiomac.2025.143181',
  },
  {
    code: 'CASK',
    name: '钙/钙调蛋白依赖性丝氨酸蛋白激酶',
    en: 'Calcium/Calmodulin-Dependent Serine Protein Kinase',
    function: 'CASK 参与神经突触发育与信号传导，与神经系统功能相关，是鸽类研究中的认知相关候选基因。',
    benefit: '作为神经系统功能相关候选位点提供参考；性能关联证据属初步级别。',
    association: '鸽类研究（Dybus 2023，Animals）报道鸽类 CASK 多态性，性能关联为次级内容；属初步证据，需谨慎解读。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: 'Dybus 2023，Animals ｜ PMID: 37443867 ｜ DOI: 10.3390/ani13132070',
  },
];
