// PubMed-indexed background references for pathogen pages. These support the
// pathogen background, not a claim about kit sensitivity/specificity. Every entry
// was resolved through NCBI E-utilities on 2026-11-24; PMIDs are clickable.
export type PathogenRef = {
  pmid: string;
  title: string;
  journal: string;
  year: string;
};

export const pathogenRefs: Record<string, PathogenRef[]> = {
  'ge-yuanhuan-bingdu': [
    { pmid: '35891478', title: 'Pigeon Circovirus over Three Decades of Research: Bibliometrics, Scoping Review, and Perspectives', journal: 'Viruses', year: '2022' },
    { pmid: '40058004', title: 'Epidemiology, genetic diversity and evolution of pigeon circovirus', journal: 'Poultry Science', year: '2025' },
  ],
  'ge-paozhen-bingdu': [
    { pmid: '6274925', title: 'Pathogenesis of pigeon herpesvirus infection', journal: 'Journal of Comparative Pathology', year: '1981' },
    { pmid: '6321730', title: 'Pigeon herpesvirus confirmed in South Africa', journal: 'Journal of the South African Veterinary Association', year: '1983' },
  ],
  'ge-xian-bingdu': [
    { pmid: '38843610', title: 'Rapid detection of pigeon adenovirus 2 using a TaqMan real-time PCR assay', journal: 'Poultry Science', year: '2024' },
    { pmid: '37383649', title: 'Phylogenetic analysis of pigeon adenovirus 1 in clinical specimens of domestic pigeons in Iran', journal: 'Veterinary Research Forum', year: '2023' },
  ],
  'ge-dou-bingdu': [
    { pmid: '41185643', title: 'Isolation and Molecular Detection of Pigeonpox Virus in a Pigeon With Cutaneous and Diphtheritic Forms of Pigeon Pox Disease', journal: 'Veterinary Medicine International', year: '2025' },
    { pmid: '38866926', title: 'Isolation and identification of a pigeonpox virus strain and integration of reticuloendotheliosis virus sequence', journal: 'Virus Genes', year: '2024' },
  ],
  'ge-lunzhuang-bingdu': [
    { pmid: '36067771', title: 'Pigeon Rotavirus A as the cause of systemic infection in juvenile pigeons (young pigeon disease)', journal: 'Avian Pathology', year: '2022' },
    { pmid: '33588462', title: 'Pigeon rotavirus A genotype G18P[17]-associated disease outbreaks after fancy pigeon shows in Germany', journal: 'Avian Pathology', year: '2021' },
  ],
  'xinchengyi-bingdu': [
    { pmid: '35866972', title: 'Molecular detection of pigeon paramyxovirus type 1', journal: 'Veterinary Record', year: '2022' },
    { pmid: '36055029', title: 'A pigeon paramyxovirus type 1 isolated from a racing pigeon as an inactivated vaccine candidate', journal: 'Poultry Science', year: '2022' },
  ],
  'shamen-shijun': [
    { pmid: '33091215', title: 'Can domestic pigeon be a potential carrier of zoonotic Salmonella?', journal: 'Transboundary and Emerging Diseases', year: '2021' },
    { pmid: '40096063', title: 'A genomic and phenotypic investigation of pigeon-adaptive Salmonella', journal: 'PLoS Pathogens', year: '2025' },
  ],
  'baise-nianzhujun': [
    { pmid: '38628645', title: 'Effect of Cymbopogon martini essential oil on pigeons infected by Candida albicans', journal: 'Frontiers in Pharmacology', year: '2024' },
    { pmid: '6348978', title: 'Isolation of Cryptococcus neoformans, Candida albicans and other yeasts from pigeon droppings', journal: 'Sabouraudia', year: '1983' },
  ],
  'ge-maodichong': [
    { pmid: '39035104', title: 'Epidemiological investigation of Trichomonas gallinae in Beijing, China', journal: 'Poultry Science', year: '2024' },
    { pmid: '31819885', title: 'Prevalence of Trichomonas gallinae infection in pigeons of Jessore District, Bangladesh', journal: 'Veterinary World', year: '2019' },
  ],
  'yingwure-yiyuanti': [
    { pmid: '25244602', title: 'Epidemiology of Chlamydia psittaci infection in racing pigeons and pigeon fanciers in Beijing, China', journal: 'Zoonoses and Public Health', year: '2015' },
    { pmid: '40850222', title: 'Isolation of “pigeon-type” Chlamydia psittaci from Indian ring-necked parakeets in Japan', journal: 'Veterinary Microbiology', year: '2025' },
  ],
  'ge-duoliu-bingdu': [
    { pmid: '30863821', title: 'Complete Genome Sequence of an Avian Polyomavirus Strain First Isolated from a Pigeon in China', journal: 'Microbiology Resource Announcements', year: '2019' },
  ],
  zhiyuanti: [
    { pmid: '29327955', title: 'Co-occurrence of Mycoplasma Species and Pigeon Herpesvirus-1 Infection in Racing Pigeons', journal: 'Journal of Comparative Pathology', year: '2017' },
    { pmid: '25843324', title: 'Mycoplasma columbinum isolated from a racing pigeon with arthritis', journal: 'Journal of Veterinary Diagnostic Investigation', year: '2014' },
  ],
};
