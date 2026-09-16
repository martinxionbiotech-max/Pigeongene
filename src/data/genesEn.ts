export interface GeneMarkerEn {
  code: string;
  name: string;
  function: string;
  benefit: string;
  association: string;
  markerType: string;
  reference: string;
}

export const geneMarkersEn: GeneMarkerEn[] = [
  {
    code: 'LDHA',
    name: 'Lactate Dehydrogenase A',
    function:
      'Involved in anaerobic glycolysis — a key enzyme supplying energy during high-intensity flight. Genotype differences may influence energy-metabolism efficiency.',
    benefit:
      'Flags candidate genotypes associated with racing survival in published pigeon research — a genetic reference for breeding selection, not a speed guarantee.',
    association:
      'A pigeon-specific study (Ramadan 2018, PLOS ONE) reported a statistical association between LDHA polymorphism and racing survival rate. This is a candidate-gene association, not causation, and not equivalent to speed.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Ramadan 2018, PLOS ONE | PMID: 29775483 | DOI: 10.1371/journal.pone.0195121',
  },
  {
    code: 'DRD4',
    name: 'Dopamine Receptor D4',
    function:
      'Dopamine receptor D4 participates in neural signalling and is a candidate gene for racing performance in pigeons.',
    benefit:
      'A candidate locus for racing performance, supporting breeding and training reference alongside other loci and race records.',
    association:
      'A pigeon-specific study (Proskura 2015, Animal Genetics) reported a statistical association between DRD4 polymorphism and racing performance. Exploratory association — read together with multiple genes and environment.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Proskura 2015, Animal Genetics | PMID: 26202371 | DOI: 10.1111/age.12328',
  },
  {
    code: 'CRY1',
    name: 'Cryptochrome 1',
    function:
      'A core circadian-clock component regulating day/night rhythm. Note: magnetoreception research focuses on CRY4 — a different cryptochrome from CRY1.',
    benefit:
      'A candidate locus for rhythm and racing-performance reference, used together with other loci and race records.',
    association:
      'A pigeon-specific study (Dybus 2021, Animals) reported a statistical association between CRY1 polymorphism and racing performance. CRY1 must not be claimed as the "magnetoreception gene".',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Dybus 2021, Animals | PMID: 34573598 | DOI: 10.3390/ani11092632',
  },
  {
    code: 'MSTN',
    name: 'Myostatin',
    function:
      'Myostatin negatively regulates skeletal-muscle growth; loss-of-function variants cause muscle hypertrophy in mammals. One of the most-studied muscle-regulatory genes.',
    benefit:
      'Provides polymorphism reference across pigeon breeds; racing-performance evidence in pigeons is limited — interpret cautiously.',
    association:
      'A pigeon study (Dybus 2013) reported MSTN polymorphism in domestic pigeons — a polymorphism survey without racing-performance analysis. Functional background: Rodgers & Garikipati 2008.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Dybus 2013, Vet Med | DOI: 10.17221/6654-VETMED; Rodgers & Garikipati 2008, PMID: 18591260',
  },
  {
    code: 'F-KER',
    name: 'Feather Keratin Gene',
    function:
      'Feather keratin is the major structural protein of feathers; related gene variants may affect feather structure and mechanical traits — the link to flight performance is indirect.',
    benefit:
      'Provides plumage-related polymorphism reference; racing-performance evidence in pigeons is limited — interpret cautiously.',
    association:
      'A pigeon study (Dybus & Haase 2011) reported F-KER polymorphism in domestic pigeons — a polymorphism survey without racing-performance analysis.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Dybus & Haase 2011, Br Poult Sci | PMID: 21491240 | DOI: 10.1080/00071668.2010.549666',
  },
  {
    code: 'LRP8',
    name: 'Lipoprotein Receptor-Related Protein 8',
    function:
      'Involved in lipid metabolism and energy transport — a candidate gene in racing-performance research.',
    benefit:
      'A candidate locus for racing performance, used together with GSR and other loci plus race records.',
    association:
      'A pigeon-specific study (Kulig 2025) reported the structural impact of GSR and LRP8 polymorphisms on protein function and their role in racing performance. Candidate-gene association.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Kulig 2025, Int J Biol Macromol | PMID: 40246119 | DOI: 10.1016/j.ijbiomac.2025.143181',
  },
  {
    code: 'GSR',
    name: 'Glutathione Reductase',
    function:
      'A key antioxidant-defence enzyme related to oxidative-stress clearance and recovery — a candidate gene in racing-performance research.',
    benefit:
      'A candidate locus for racing performance, used together with LRP8 and other loci plus race records.',
    association:
      'A pigeon-specific study (Kulig 2025) reported the structural impact of GSR and LRP8 polymorphisms on protein function and their role in racing performance. Candidate-gene association.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Kulig 2025, Int J Biol Macromol | PMID: 40246119 | DOI: 10.1016/j.ijbiomac.2025.143181',
  },
  {
    code: 'CASK',
    name: 'Calcium/Calmodulin-Dependent Serine Protein Kinase',
    function:
      'Participates in synaptic development and signalling — a cognition-related candidate gene studied in pigeons.',
    benefit:
      'A candidate locus related to nervous-system function; performance-association evidence is preliminary.',
    association:
      'A pigeon study (Dybus 2023, Animals) reported CASK polymorphism in pigeons, with performance association as secondary content. Preliminary evidence — interpret cautiously.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Dybus 2023, Animals | PMID: 37443867 | DOI: 10.3390/ani13132070',
  },
];
