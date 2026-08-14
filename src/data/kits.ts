export interface Kit {
  name: string;
  en: string;
  category: string;
  target: string;
  tech: string;
}

export const dnaKits: Kit[] = [
  {
    name: '鸟类性别鉴定荧光 PCR 试剂盒',
    en: 'Bird Sex Identification Fluorescent PCR Kit',
    category: '性别鉴定',
    target: '鹦鹉及多种禽类的性别',
    tech: 'PCR 荧光探针',
  },
  {
    name: '鸽子性别鉴定荧光 PCR 试剂盒',
    en: 'Pigeon Sex Identification Fluorescent PCR Kit',
    category: '性别鉴定',
    target: '鸽子性别（CHD 基因扩增）',
    tech: 'PCR 荧光探针',
  },
  {
    name: 'SENO 鸟类 DNA 检测试剂盒',
    en: 'SENO Bird DNA Test Kit',
    category: '性别鉴定',
    target: '鸟类 DNA 采集与检测',
    tech: 'PCR / qPCR',
  },
  {
    name: '鸽疱疹病毒（PiHV）核酸检测试剂盒',
    en: 'Pigeon Herpes Virus (PiHV) Nucleic Acid Detection Kit',
    category: '病原检测',
    target: '鸽疱疹病毒',
    tech: 'UNG 荧光探针 PCR',
  },
  {
    name: '鸽圆环病毒（PiCV）核酸检测试剂盒',
    en: 'Pigeon Circovirus (PiCV) Nucleic Acid Detection Kit',
    category: '病原检测',
    target: '鸽圆环病毒（免疫抑制）',
    tech: '荧光探针 PCR',
  },
  {
    name: '沙门氏菌核酸检测试剂盒',
    en: 'Salmonella Nucleic Acid Detection Kit',
    category: '病原检测',
    target: '沙门氏菌',
    tech: 'PCR',
  },
  {
    name: '鸽腺病毒（PiADV）核酸检测试剂盒',
    en: 'Pigeon Adenovirus (PiADV) Nucleic Acid Detection Kit',
    category: '病原检测',
    target: '鸽腺病毒',
    tech: '荧光探针 PCR',
  },
  {
    name: '鸽副黏病毒 1 型（PPMV-1）RT-PCR 试剂盒',
    en: 'Pigeon Paramyxovirus Type 1 (PPMV-1) RT-PCR Kit',
    category: '病原检测',
    target: '鸽副黏病毒（新城疫）',
    tech: 'RT-PCR 荧光探针',
  },
  {
    name: '鹦鹉热衣原体核酸检测试剂盒',
    en: 'Chlamydia psittaci Nucleic Acid Detection Kit',
    category: '病原检测',
    target: '鹦鹉热衣原体',
    tech: '荧光探针 PCR',
  },
  {
    name: '白色念珠菌核酸检测试剂盒',
    en: 'Candida albicans Nucleic Acid Detection Kit',
    category: '病原检测',
    target: '白色念珠菌',
    tech: 'PCR',
  },
  {
    name: '鸽毛滴虫（PiTG）核酸检测试剂盒',
    en: 'Pigeon Trichomonas (PiTG) Nucleic Acid Detection Kit',
    category: '病原检测',
    target: '鸽毛滴虫',
    tech: 'PCR',
  },
  {
    name: '鸽痘病毒（PiPV）核酸检测试剂盒',
    en: 'Pigeon Pox Virus (PiPV) Nucleic Acid Detection Kit',
    category: '病原检测',
    target: '鸽痘病毒',
    tech: '荧光探针 PCR',
  },
  {
    name: '鸽轮状病毒（PiRV）核酸检测试剂盒',
    en: 'Pigeon Rotavirus (PiRV) Nucleic Acid Detection Kit',
    category: '病原检测',
    target: '鸽轮状病毒',
    tech: '荧光探针 PCR',
  },
  {
    name: '禽多瘤病毒（APV）核酸检测试剂盒',
    en: 'Avian Polyomavirus (APV) Nucleic Acid Detection Kit',
    category: '病原检测',
    target: '禽多瘤病毒（含内参）',
    tech: '荧光探针 PCR',
  },
  {
    name: '鹦鹉喙羽病病毒（PBFDV）检测试剂盒',
    en: 'Psittacine Beak and Feather Disease Virus (PBFDV) Detection Kit',
    category: '病原检测',
    target: '鹦鹉喙羽病病毒',
    tech: 'PCR',
  },
];

export const kitTech = [
  { icon: '📦', title: '多规格', desc: '提供 48T/Kit、96T/Kit 多种反应规格，满足不同通量需求。' },
  { icon: '🎛️', title: '通道兼容', desc: '优化支持 FAM、HEX/VIC、ROX（内参）通道，适配主流 qPCR 仪。' },
  { icon: '🔧', title: '平台兼容', desc: '兼容 ABI 7500/QuantStudio、Bio-Rad CFX96、Roche LightCycler 等主流平台。' },
  { icon: '🛡️', title: '防污染', desc: '内置 dUTP/UNG 系统，消除 PCR 气溶胶残留，防止假阳性。' },
];
