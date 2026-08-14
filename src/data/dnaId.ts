export interface DnaIdFeature {
  icon: string;
  title: string;
  desc: string;
}

export const dnaIdApplications = [
  { icon: '🏆', title: '种鸽身份认证', desc: '为名贵种鸽建立唯一 DNA 身份档案，防止顶替、调包与冒充。' },
  { icon: '👨‍👩‍👧', title: '亲缘关系确认', desc: '科学确认父母子代亲缘关系，杜绝血统造假，保障育种价值。' },
  { icon: '📜', title: '血统证书背书', desc: '为血统书、种鸽档案提供权威 DNA 佐证，提升交易可信度。' },
  { icon: '🛒', title: '交易防伪', desc: '买卖、拍卖、引种时提供 DNA 身份核验，降低交易风险。' },
  { icon: '🧾', title: '丢失寻回', desc: '建立 DNA 档案，赛鸽走失或被盗后可用于身份比对与认领。' },
  { icon: '📊', title: '育种管理', desc: '精准掌握血缘关系，科学规划配对，避免近亲衰退。' },
];

export const dnaIdMarkers = [
  { code: 'STR', name: '微卫星标记（STR）', desc: '采用国际通用的短串联重复序列标记，构建每只赛鸽独一无二的 DNA 指纹图谱。' },
  { code: 'SNP', name: '单核苷酸多态性（SNP）', desc: '高密度 SNP 位点辅助识别，提升个体区分度与亲缘判断准确性。' },
  { code: '性别', name: '性别鉴定', desc: '通过性染色体特异标记精准判定雌雄，解决幼鸽外观难辨性别的问题。' },
];

export const dnaIdProcess = [
  { n: '①', t: '样本采集', d: '采集带完整羽根的羽毛或血卡样本。' },
  { n: '②', t: 'DNA 提取', d: '提取高质量基因组 DNA。' },
  { n: '③', t: 'STR 分型', d: '对多个 STR 位点进行 PCR 扩增与基因分型。' },
  { n: '④', t: '比对分析', d: '构建 DNA 指纹并比对亲缘关系。' },
  { n: '⑤', t: '出具报告', d: '生成含 DNA 身份证编号与亲缘结论的规范报告。' },
];
