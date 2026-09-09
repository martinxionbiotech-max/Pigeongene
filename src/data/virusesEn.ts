export interface VirusEn {
  slug: string;
  name: string;
  type: string;
  desc: string;
}

export const virusTestsEn: VirusEn[] = [
  {
    slug: 'ge-yuanhuan-bingdu',
    name: 'Pigeon Circovirus (PiCV)',
    type: 'Virus',
    desc: 'An immunosuppressive virus and a core surveillance target in loft health management. It depresses immunity and opens the door to secondary bacterial, fungal and viral infections.',
  },
  {
    slug: 'ge-paozhen-bingdu',
    name: 'Pigeon Herpesvirus (PHV)',
    type: 'Virus',
    desc: 'Attacks the upper respiratory tract and conjunctiva, causing breathing difficulty and ocular discharge; spreads quickly in densely housed lofts.',
  },
  {
    slug: 'ge-xian-bingdu',
    name: 'Pigeon Adenovirus',
    type: 'Virus',
    desc: 'The main cause of "adenovirus disease" (vomiting, diarrhoea, watery droppings), especially after basketing and transport stress. A major threat to race form.',
  },
  {
    slug: 'ge-dou-bingdu',
    name: 'Pigeon Poxvirus',
    type: 'Virus',
    desc: 'Transmitted by biting insects or wounds, producing skin- and mucosal-type pox lesions that affect appearance, feeding and, in severe cases, survival.',
  },
  {
    slug: 'ge-lunzhuang-bingdu',
    name: 'Pigeon Rotavirus',
    type: 'Virus',
    desc: 'A leading cause of diarrhoea and gut dysfunction in young pigeons, affecting growth and development during the rearing period.',
  },
  {
    slug: 'xinchengyi-bingdu',
    name: 'Newcastle Disease Virus (NDV)',
    type: 'Virus',
    desc: 'A notifiable avian pathogen causing nervous signs, respiratory distress and high mortality. A priority target for biosecurity and import quarantine.',
  },
  {
    slug: 'shamen-shijun',
    name: 'Salmonella spp.',
    type: 'Bacteria',
    desc: 'A common bacterial pathogen causing joint swelling, diarrhoea and wasting, with zoonotic risk — a must-test item for breeder screening.',
  },
  {
    slug: 'baise-nianzhujun',
    name: 'Candida albicans',
    type: 'Fungus',
    desc: 'An opportunistic fungus that overgrows under immunosuppression or antibiotic overuse, causing oral and crop candidiasis.',
  },
  {
    slug: 'ge-maodichong',
    name: 'Trichomonas gallinae',
    type: 'Parasite',
    desc: 'The most common protozoan pathogen — "canker". It affects the mouth, throat and crop, and is a constant concern during rearing and racing.',
  },
  {
    slug: 'yingwure-yiyuanti',
    name: 'Chlamydia psittaci',
    type: 'Bacteria',
    desc: 'Causes respiratory infection, conjunctivitis and systemic disease, with zoonotic (psittacosis) risk to handlers. A key public-health monitoring item.',
  },
  {
    slug: 'ge-duoliu-bingdu',
    name: 'Pigeon Polyomavirus (PiAPV)',
    type: 'Virus',
    desc: 'A multi-organ viral pathogen of concern, most harmful in squabs and young pigeons, linked to immunosuppression and secondary infection.',
  },
  {
    slug: 'zhiyuanti',
    name: 'Mycoplasma spp.',
    type: 'Bacteria',
    desc: 'A leading cause of chronic respiratory disease (CRD) — sneezing, nasal discharge and rales — that erodes respiratory function and race performance.',
  },
];
