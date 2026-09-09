export interface DnaIdEn {
  icon: string;
  title: string;
  desc: string;
}

export const dnaIdApplicationsEn: DnaIdEn[] = [
  {
    icon: '🏆',
    title: 'Breeder identity certification',
    desc: 'A unique DNA identity record for valuable breeders — prevents substitution, swapping and misrepresentation in the loft and at sale.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Parentage verification',
    desc: 'Scientifically confirms sire/dam/offspring relationships, ruling out pedigree fraud and protecting breeding value.',
  },
  {
    icon: '📜',
    title: 'Pedigree certificate backing',
    desc: 'Provides authoritative DNA evidence for pedigree certificates and breeder archives, raising transaction credibility.',
  },
  {
    icon: '🛒',
    title: 'Auction & sale anti-fraud',
    desc: 'DNA identity verification at purchase, auction and import reduces transaction risk for buyers and sellers.',
  },
  {
    icon: '🧾',
    title: 'Lost-bird recovery',
    desc: 'A DNA record allows identity comparison and rightful reclamation if a pigeon is lost or stolen.',
  },
  {
    icon: '📊',
    title: 'Breeding management',
    desc: 'Precise kinship mapping supports rational pairing and avoids inbreeding depression.',
  },
];

export const dnaIdMarkersEn: { code: string; name: string; desc: string }[] = [
  {
    code: 'STR',
    name: 'Microsatellite markers (STR)',
    desc: 'Internationally used short tandem repeat markers build a DNA fingerprint that is unique to each individual pigeon.',
  },
  {
    code: 'SNP',
    name: 'Single nucleotide polymorphism (SNP)',
    desc: 'High-density SNP loci assist identification, improving individual discrimination and parentage accuracy.',
  },
  {
    code: 'Sex',
    name: 'Sex determination',
    desc: 'Sex-chromosome-specific markers determine male/female, resolving the challenge of visually sexing young pigeons.',
  },
];

export const dnaIdProcessEn: { n: string; t: string; d: string }[] = [
  { n: '①', t: 'Sampling', d: 'Collect a feather with an intact root or a blood card.' },
  { n: '②', t: 'DNA extraction', d: 'Extract high-quality genomic DNA.' },
  { n: '③', t: 'STR genotyping', d: 'PCR amplification and genotyping across multiple STR loci.' },
  { n: '④', t: 'Comparison', d: 'Build the DNA fingerprint and compare parentage relationships.' },
  { n: '⑤', t: 'Reporting', d: 'Issue a report with the DNA ID number and kinship conclusion.' },
];
