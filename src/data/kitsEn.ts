export interface KitEn {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  target: string;
  tech: string;
  spec: string;
  storage: string;
  intro: string;
}

export const dnaKitsEn: KitEn[] = [
  {
    slug: 'bird-sex-id',
    shortName: 'Bird Sex Identification PCR Kit',
    name: 'Bird Sex Identification Fluorescent PCR Kit',
    category: 'Sex Identification',
    target: 'Sex of parrots and other bird species',
    tech: 'Fluorescent probe PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'Specific primers and probes are designed against the CHD gene on the avian sex chromosomes; after fluorescent PCR amplification the sex is determined from the product pattern. Suitable for sex identification in parrots, pigeons and many other bird species, and a reliable solution when the sex of a young bird cannot be told from its appearance.',
  },
  {
    slug: 'pigeon-sex-id',
    shortName: 'Pigeon Sex Identification PCR Kit',
    name: 'Pigeon Sex Identification Fluorescent PCR Kit',
    category: 'Sex Identification',
    target: 'Pigeon sex (CHD gene amplification)',
    tech: 'Fluorescent probe PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'A sex-identification kit designed for racing pigeons. It uses the difference in the CHD gene between the Z and W sex chromosomes and determines sex accurately by fluorescent PCR. No wait for sexual maturity — it also applies to nestlings, helping fanciers establish the sex of an individual bird early in the breeding programme.',
  },
  {
    slug: 'seno-bird-dna',
    shortName: 'SENO Bird DNA Test Kit',
    name: 'SENO Bird DNA Test Kit',
    category: 'Sex Identification',
    target: 'Avian DNA collection and testing',
    tech: 'PCR / qPCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Collection cards at room temperature; reagents at -20°C',
    intro:
      'An integrated avian DNA collection-and-testing kit, supplied with several sampling options — feathers, blood cards and oral swabs — covering sex identification and basic DNA analysis needs. Intended for avian molecular-diagnostic laboratories and breeding organisations.',
  },
  {
    slug: 'pihv',
    shortName: 'Pigeon Herpesvirus (PiHV) PCR Kit',
    name: 'Pigeon Herpes Virus (PiHV) Nucleic Acid Detection Kit',
    category: 'Pathogen Detection',
    target: 'Pigeon herpesvirus',
    tech: 'UNG fluorescent probe PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'Specific primers and probes are designed against the conserved region of pigeon herpesvirus (PiHV), with a built-in UNG anti-contamination system that removes false positives caused by residual PCR aerosol. For early screening and confirmation of herpesvirus infection in pigeon lofts.',
  },
  {
    slug: 'picv',
    shortName: 'Pigeon Circovirus (PiCV) PCR Kit',
    name: 'Pigeon Circovirus (PiCV) Nucleic Acid Detection Kit',
    category: 'Pathogen Detection',
    target: 'Pigeon circovirus (immunosuppression)',
    tech: 'Fluorescent probe PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'A high-sensitivity fluorescent probe PCR kit designed for pigeon circovirus (PiCV). Circovirus is a silent driver of immunosuppression in racing pigeons; this kit can detect latently infected carriers and is used for loft health screening, quarantine of newly introduced birds and investigation of immunosuppression.',
  },
  {
    slug: 'salmonella',
    shortName: 'Salmonella PCR Detection Kit',
    name: 'Salmonella Nucleic Acid Detection Kit',
    category: 'Pathogen Detection',
    target: 'Salmonella',
    tech: 'PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'Primers are designed against Salmonella-specific nucleic acid sequences to detect Salmonella in faeces and cloacal swabs by PCR. For early diagnosis of Salmonella infection (paratyphoid) in racing pigeons and for screening carrier birds within a loft.',
  },
  {
    slug: 'piadv',
    shortName: 'Pigeon Adenovirus (PiADV) PCR Kit',
    name: 'Pigeon Adenovirus (PiADV) Nucleic Acid Detection Kit',
    category: 'Pathogen Detection',
    target: 'Pigeon adenovirus',
    tech: 'Fluorescent probe PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'A fluorescent probe PCR assay designed for pigeon adenovirus (PiADV), able to discriminate adenoviral infection. Adenovirus is a common cause of crop disease and vomiting disease in racing pigeons; this kit is intended for rapid screening and confirmation after basketing during the racing season.',
  },
  {
    slug: 'ppmv-1',
    shortName: 'Pigeon Paramyxovirus (PPMV-1) RT-PCR Kit',
    name: 'Pigeon Paramyxovirus Type 1 (PPMV-1) RT-PCR Kit',
    category: 'Pathogen Detection',
    target: 'Pigeon paramyxovirus (Newcastle disease)',
    tech: 'Fluorescent probe RT-PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'An RT-PCR fluorescent assay designed for pigeon paramyxovirus type 1 (PPMV-1, the pigeon Newcastle disease virus). Newcastle disease is one of the most important notifiable diseases in racing pigeons; this kit detects viral nucleic acid to support clinical diagnosis and disease monitoring.',
  },
  {
    slug: 'chlamydia-psittaci',
    shortName: 'Chlamydia psittaci PCR Detection Kit',
    name: 'Chlamydia psittaci Nucleic Acid Detection Kit',
    category: 'Pathogen Detection',
    target: 'Chlamydia psittaci',
    tech: 'Fluorescent probe PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'A fluorescent probe PCR assay designed for Chlamydia psittaci. Chlamydia psittaci is a zoonotic pathogen; this kit is used to screen pigeon lofts for chlamydial infection, and appropriate human-infection precautions must be taken throughout testing and sample handling.',
  },
  {
    slug: 'candida-albicans',
    shortName: 'Candida albicans PCR Detection Kit',
    name: 'Candida albicans Nucleic Acid Detection Kit',
    category: 'Pathogen Detection',
    target: 'Candida albicans',
    tech: 'PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'Specific primers are designed against Candida albicans to detect it by PCR in oral and crop swabs. For molecular diagnosis of candidiasis (thrush) in pigeons, helping distinguish fungal from bacterial infection.',
  },
  {
    slug: 'pitg',
    shortName: 'Pigeon Trichomonad (PiTG) PCR Kit',
    name: 'Pigeon Trichomonas (PiTG) Nucleic Acid Detection Kit',
    category: 'Pathogen Detection',
    target: 'Pigeon trichomonad',
    tech: 'PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'A PCR assay designed for pigeon trichomonad (PiTG). Trichomonads are a common cause of canker (yellow button disease) in racing pigeons; molecular detection of trichomonad nucleic acid is more sensitive than conventional microscopy and suits early screening.',
  },
  {
    slug: 'pipv',
    shortName: 'Pigeon Poxvirus (PiPV) PCR Kit',
    name: 'Pigeon Pox Virus (PiPV) Nucleic Acid Detection Kit',
    category: 'Pathogen Detection',
    target: 'Pigeon poxvirus',
    tech: 'Fluorescent probe PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'A fluorescent probe PCR assay designed for pigeon poxvirus (PiPV). The virus spreads through biting insects or breaks in the skin; this kit confirms poxvirus infection and helps distinguish it from conditions such as skin fungal infection.',
  },
  {
    slug: 'pirv',
    shortName: 'Pigeon Rotavirus (PiRV) PCR Kit',
    name: 'Pigeon Rotavirus (PiRV) Nucleic Acid Detection Kit',
    category: 'Pathogen Detection',
    target: 'Pigeon rotavirus',
    tech: 'Fluorescent probe PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'A fluorescent probe PCR assay designed for pigeon rotavirus (PiRV). Rotavirus is a common cause of viral diarrhoea in racing pigeons and mainly affects young birds; this kit detects rotavirus nucleic acid in faecal samples rapidly.',
  },
  {
    slug: 'apv',
    shortName: 'Avian Polyomavirus (APV) PCR Kit',
    name: 'Avian Polyomavirus (APV) Nucleic Acid Detection Kit',
    category: 'Pathogen Detection',
    target: 'Avian polyomavirus (with internal control)',
    tech: 'Fluorescent probe PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'A fluorescent probe PCR assay designed for avian polyomavirus (APV) with a built-in internal control to ensure reliable results. For screening and confirmation of polyomavirus infection in young pigeons and other bird species.',
  },
  {
    slug: 'pbfdv',
    shortName: 'PBFDV Beak & Feather Disease PCR Kit',
    name: 'Psittacine Beak and Feather Disease Virus (PBFDV) Detection Kit',
    category: 'Pathogen Detection',
    target: 'Psittacine beak and feather disease virus',
    tech: 'PCR',
    spec: '48T/kit, 96T/kit',
    storage: 'Store at -20°C, protected from light',
    intro:
      'A PCR assay designed for psittacine beak and feather disease virus (PBFDV). PBFDV is a significant pathogen of parrots; this kit detects PBFDV nucleic acid and is used in parrot breeding and pet-bird health management.',
  },
];

export const kitTechEn = [
  { icon: '📦', title: 'Multiple sizes', desc: 'Supplied as 48T/kit and 96T/kit to suit different throughput requirements.' },
  {
    icon: '🎛️',
    title: 'Channel compatible',
    desc: 'Optimised for FAM, HEX/VIC and ROX (internal control) channels; compatible with mainstream qPCR instruments.',
  },
  {
    icon: '🔧',
    title: 'Platform compatible',
    desc: 'Compatible with ABI 7500/QuantStudio, Bio-Rad CFX96, Roche LightCycler and other mainstream platforms.',
  },
  {
    icon: '🛡️',
    title: 'Anti-contamination',
    desc: 'Built-in dUTP/UNG system removes residual PCR aerosol and prevents false positives.',
  },
];
