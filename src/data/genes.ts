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
    function: '参与无氧糖酵解过程，是短距离冲刺阶段能量供应的关键酶，其基因型差异可能影响赛鸽在高强度飞行中的能量代谢效率。',
    benefit: '筛选具有精英级短距离速度与爆发力的赛鸽，为速度型种鸽选配提供遗传参考。',
    association: '研究提示 LDHA 基因多态性可能与赛鸽无氧运动能力及短距离速度表现相关，属于候选基因关联，尚未建立确定性因果。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: 'NCBI dbSNP；家禽能量代谢相关候选基因研究',
  },
  {
    code: 'DRD4',
    name: '多巴胺受体 D4',
    en: 'Dopamine Receptor D4',
    function: '多巴胺受体 D4 参与神经系统信号传导，与探索行为、空间认知及归巢倾向相关，是导航能力的重要候选基因。',
    benefit: '评估赛鸽方向感、探索性与适应能力，为归巢型赛鸽选育与训练方案优化提供依据。',
    association: '研究提示 DRD4 基因多态性可能与赛鸽归巢能力及行为特质相关，属探索性关联，需结合多基因与环境因素综合判断。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: 'Murayama 等（家鸽行为遗传学）；Proskura 2014（赛鸽归巢候选基因）',
  },
  {
    code: 'CRY1',
    name: '隐花色素 1',
    en: 'Cryptochrome 1',
    function: '隐花色素 1 是生物钟核心组分，参与昼夜节律调控，可能影响赛鸽对光周期变化的感知、归巢时间判断与比赛状态的时间节律。',
    benefit: '预测赛鸽对长距离飞行及恶劣天气的适应能力，辅助制定科学的训放与比赛计划。',
    association: '研究提示 CRY1 基因可能与赛鸽昼夜节律及归巢导航的时间感知相关，属探索性候选基因关联。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: '家鸽磁感应与生物钟研究（C. Mora 等）',
  },
  {
    code: 'MSTN',
    name: '肌肉生长抑制素',
    en: 'Myostatin',
    function: '肌肉生长抑制素（MSTN）负调控骨骼肌生长，其基因变异可影响肌肉质量、力量与整体耐力水平，是肌肉表型的经典候选基因。',
    benefit: '识别拥有卓越肌肉力量与持续飞行潜力的赛鸽，为耐力型与力量型种鸽选育提供遗传依据。',
    association: '研究提示 MSTN 基因多态性可能与赛鸽肌肉发育及耐力表现相关，属候选基因关联，实际表现受训练与营养显著影响。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: 'Dybus 2013（DOI: 10.17221/6654-VETMED，赛鸽 MSTN 多态性研究）',
  },
  {
    code: 'F-KER',
    name: '羽角蛋白基因',
    en: 'Feather Keratin Gene',
    function: '羽角蛋白是羽毛主要结构蛋白，其基因影响羽毛质量、结构完整性与空气动力学效率，与赛鸽飞行性能密切相关。',
    benefit: '评估翅膀羽毛结构的空气动力学表现与韧性，为羽质优良种鸽的选育提供参考。',
    association: '研究提示羽角蛋白基因可能与羽毛结构质量相关，进而间接影响飞行空气动力学表现，属间接关联。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: '禽类羽毛角蛋白基因家族研究',
  },
  {
    code: 'LRP8',
    name: '脂蛋白受体相关蛋白 8',
    en: 'Lipoprotein Receptor-Related Protein 8',
    function: '脂蛋白受体相关蛋白 8 参与脂质代谢与能量运输，可能影响赛鸽长途飞行中的能量储存与脂肪酸利用效率。',
    benefit: '预测长途飞行中能量储存与利用效率，为长距离耐力赛鸽选育提供遗传参考。',
    association: '研究提示 LRP8 基因可能与能量代谢及脂肪利用相关，属候选基因关联，需进一步验证。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: '脂蛋白受体家族代谢相关候选基因研究',
  },
  {
    code: 'GSR',
    name: '谷胱甘肽还原酶',
    en: 'Glutathione Reductase',
    function: '谷胱甘肽还原酶是抗氧化防御系统的关键酶，影响赛鸽在比赛应激下的氧化应激清除能力与恢复速度。',
    benefit: '评估赛鸽在高压比赛条件下保持健康与快速恢复的能力，为抗应激型种鸽选育提供依据。',
    association: '研究提示 GSR 基因多态性可能与抗氧化能力及应激恢复相关，属探索性候选基因关联。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: '禽类氧化应激与抗氧化酶基因研究',
  },
  {
    code: 'CASK',
    name: '钙/钙调蛋白依赖性丝氨酸蛋白激酶',
    en: 'Calcium/Calmodulin-Dependent Serine Protein Kinase',
    function: 'CASK 参与神经突触发育与信号传导，潜在关联神经功能、学习记忆与行为稳定性，是认知相关候选基因。',
    benefit: '综合评估赛鸽的神经稳定性与认知特征，为行为表现与训练适应性提供参考。',
    association: '研究提示 CASK 基因可能与神经系统功能相关，属探索性关联，证据尚不充分，需谨慎解读。',
    markerType: 'SNP（单核苷酸多态性）',
    reference: '神经发育相关基因家族研究（NCBI Gene）',
  },
];
