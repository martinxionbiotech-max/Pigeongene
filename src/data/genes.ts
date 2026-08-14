export interface GeneMarker {
  code: string;
  name: string;
  en: string;
  function: string;
  benefit: string;
}

export const geneMarkers: GeneMarker[] = [
  {
    code: 'LDHA',
    name: '乳酸脱氢酶 A',
    en: 'Lactate Dehydrogenase A',
    function: '被称为"速度基因"，影响无氧代谢能力和短距离爆发力。',
    benefit: '筛选具有精英级短距离速度与爆发力的赛鸽。',
  },
  {
    code: 'DRD4',
    name: '多巴胺受体 D4',
    en: 'Dopamine Receptor D4',
    function: '与导航能力、认知功能和归巢本能相关。',
    benefit: '评估赛鸽方向感与适应能力，优化训练方案。',
  },
  {
    code: 'CRY1',
    name: '隐花色素 1',
    en: 'Cryptochrome 1',
    function: '参与昼夜节律调控，影响归巢时间与时间感知。',
    benefit: '预测对长距离及恶劣天气的适应能力。',
  },
  {
    code: 'MSTN',
    name: '肌肉生长抑制素',
    en: 'Myostatin',
    function: '影响肌肉生长、力量与整体耐力水平。',
    benefit: '识别拥有卓越肌肉力量与持续飞行潜力的赛鸽。',
  },
  {
    code: 'F-KER',
    name: '羽角蛋白基因',
    en: 'Feather Keratin Gene',
    function: '与羽毛质量、结构及空气动力学效率相关。',
    benefit: '评估翅膀结构的空气动力学表现与韧性。',
  },
  {
    code: 'LRP8',
    name: '脂蛋白受体相关蛋白 8',
    en: 'Lipoprotein Receptor-Related Protein 8',
    function: '与能量代谢和脂肪酸利用相关。',
    benefit: '预测长途飞行中能量储存与利用效率。',
  },
  {
    code: 'GSR',
    name: '谷胱甘肽还原酶',
    en: 'Glutathione Reductase',
    function: '影响抗氧化能力与比赛中的应激反应。',
    benefit: '评估赛鸽在高压比赛条件下保持健康与快速恢复的能力。',
  },
  {
    code: 'CASK',
    name: '钙/钙调蛋白依赖性丝氨酸蛋白激酶',
    en: 'Calcium/Calmodulin-Dependent Serine Protein Kinase',
    function: '潜在关联神经功能与学习能力。',
    benefit: '综合评估赛鸽的稳定性与认知特征。',
  },
];
