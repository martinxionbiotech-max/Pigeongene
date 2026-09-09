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
      'Involved in anaerobic glycolysis — the key enzyme supplying energy during the sprint phase of a race. Genotype differences may influence energy-metabolism efficiency under high-intensity flight.',
    benefit:
      'Flags pigeons with elite-level short-distance speed and burst power, giving sprint-fanciers a genetic reference when selecting velocity-type breeders.',
    association:
      'Research suggests LDHA polymorphism may associate with anaerobic capacity and short-distance speed in racing pigeons; this is a candidate-gene association, not an established causal link.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'NCBI dbSNP; candidate-gene studies on avian energy metabolism',
  },
  {
    code: 'DRD4',
    name: 'Dopamine Receptor D4',
    function:
      'Dopamine receptor D4 participates in neural signalling and is linked to exploratory behaviour, spatial cognition and homing tendency — a candidate gene for navigation ability.',
    benefit:
      'Helps assess orientation, exploratory drive and adaptability, supporting homing-type selection and training-programme optimisation.',
    association:
      'Studies suggest DRD4 polymorphism may relate to homing ability and behavioural traits; this is an exploratory association and must be read together with multiple genes and environment.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Murayama et al. (pigeon behavioural genetics); Proskura 2014 (homing candidate genes)',
  },
  {
    code: 'CRY1',
    name: 'Cryptochrome 1',
    function:
      'A core circadian-clock component that regulates day/night rhythm and may influence how pigeons perceive photoperiod change, homing timing and race-day condition.',
    benefit:
      'Helps predict adaptability to long-distance flights and poor weather, supporting scheduling of training and race plans.',
    association:
      'Research suggests CRY1 may relate to circadian rhythm and time perception in homing navigation; an exploratory candidate-gene association.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Pigeon magnetoreception and circadian-clock studies (C. Mora et al.)',
  },
  {
    code: 'MSTN',
    name: 'Myostatin',
    function:
      'Myostatin negatively regulates skeletal-muscle growth; variation in this gene can affect muscle mass, power and overall endurance — a classic muscle-phenotype candidate gene.',
    benefit:
      'Identifies pigeons with superior muscle strength and sustained-flight potential, informing endurance- and power-type breeder selection.',
    association:
      'Research suggests MSTN polymorphism may associate with muscle development and endurance; a candidate-gene association strongly modulated by training and nutrition.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Dybus 2013 (DOI: 10.17221/6654-VETMED, racing pigeon MSTN polymorphism)',
  },
  {
    code: 'F-KER',
    name: 'Feather Keratin Gene',
    function:
      'Feather keratin is the major structural protein of the feather; the gene affects feather quality, structural integrity and aerodynamic efficiency — closely tied to flight performance.',
    benefit:
      'Helps evaluate wing-feather aerodynamic performance and resilience when selecting for superior plumage quality.',
    association:
      'Research suggests feather-keratin genes may relate to feather structure and, indirectly, flight aerodynamics; an indirect association.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Avian feather-keratin gene-family studies',
  },
  {
    code: 'LRP8',
    name: 'Lipoprotein Receptor-Related Protein 8',
    function:
      'Involved in lipid metabolism and energy transport; may influence energy storage and fatty-acid utilisation during long-distance flight.',
    benefit:
      'Helps predict energy storage and utilisation efficiency, informing long-distance endurance breeder selection.',
    association:
      'Research suggests LRP8 may relate to energy metabolism and fat utilisation; a candidate-gene association requiring further validation.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Lipoprotein-receptor family metabolic candidate-gene studies',
  },
  {
    code: 'GSR',
    name: 'Glutathione Reductase',
    function:
      'A key antioxidant-defence enzyme affecting oxidative-stress clearance and recovery speed under race stress.',
    benefit:
      'Helps assess a pigeon\u2019s ability to stay healthy and recover quickly under high-pressure racing conditions, supporting stress-resilient breeder selection.',
    association:
      'Research suggests GSR polymorphism may associate with antioxidant capacity and stress recovery; an exploratory candidate-gene association.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Avian oxidative-stress and antioxidant-enzyme gene studies',
  },
  {
    code: 'CASK',
    name: 'Calcium/Calmodulin-Dependent Serine Protein Kinase',
    function:
      'Participates in synaptic development and signalling, with potential links to neural function, learning, memory and behavioural stability — a cognition-related candidate gene.',
    benefit:
      'Supports a holistic view of neural stability and cognition, informing behavioural and training-adaptability assessment.',
    association:
      'Research suggests CASK may relate to nervous-system function; an exploratory association with limited evidence, to be read cautiously.',
    markerType: 'SNP (single nucleotide polymorphism)',
    reference: 'Neurodevelopmental gene-family studies (NCBI Gene)',
  },
];
