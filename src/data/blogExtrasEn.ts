// English article-specific practical sections. Mirrors blogExtras but is written
// independently so the two language versions are useful rather than literal copies.
export type BlogExtraEn = {
  heading: string;
  body: string[];
  bullets: string[];
};

export const blogExtrasEn: Record<string, BlogExtraEn> = {
  'adenovirus-testing': {
    heading: 'Practical checklist: when adenovirus sampling is most useful',
    body: [
      'Vomiting and watery droppings linked to adenovirus often appear shortly after basketing, transport or a feed change. The most useful window is early in the signs, before widespread medication; collect a cloacal swab and fresh faeces from the same bird, and add tissue from dead birds where appropriate.',
      'Never pool swabs from several birds or use one swab for the mouth and cloaca. Pooling dilutes a positive signal, while cross-contamination can make a negative bird look positive.',
    ],
    bullets: [
      'Record when signs began, the basketing date and recent medication.',
      'Submit fresh samples, individually sealed and labelled, at the recommended temperature.',
      'A positive result does not prove clinical adenovirus disease; read it with signs and other pathogens.',
      'During a flock outbreak, isolate and support affected birds and consult a veterinarian rather than culling on one PCR result.',
    ],
  },
  'circovirus-immune': {
    heading: 'Practical checklist: what to do after a circovirus positive',
    body: [
      'Circovirus is often found alongside immunosuppression and secondary infections, particularly in young, newly introduced or densely housed birds. Before acting on a positive, confirm the sample type, age and whether the bird is clinically affected.',
      'One positive does not prove that the whole flock is infected, nor does it predict a bird’s racing performance. A safer response is to isolate the positive bird, review density, ventilation, nutrition and co-infections, and retest after a risk-based interval.',
    ],
    bullets: [
      'Isolate positive birds away from youngsters and breeders.',
      'Do not cull an entire flock or all breeders on one PCR result.',
      'Check for trichomonas, coccidia and respiratory pathogens at the same time.',
      'Agree the retest interval and sample type with the laboratory or veterinarian.',
    ],
  },
  'dna-id-kinship': {
    heading: 'Practical checklist: using DNA ID and parentage testing',
    body: [
      'A DNA ID is a stable identity record for one bird, not an absolute pedigree label. Before sampling, check the ring number, plumage, sex and photo; after sampling, have the sampler sign the record. This sharply reduces the risk of a sample-to-bird mix-up.',
      'Parentage testing needs the offspring plus the candidate parents. With only one parent, or only the offspring, the conclusion is weaker. A useful report should state the markers tested and the exclusion probability or parentage index, not merely “matches” or “does not match”.',
    ],
    bullets: [
      'One bird, one sample; re-check the ring number before sealing.',
      'Provide both parents where possible, or at least one candidate parent.',
      'Contamination, pooling or poor storage can make a sample unreadable.',
      'Treat the report as a breeding and trading reference, not a substitute for the stud book, race record or physical inspection.',
    ],
  },
  'dna-sexing-guide': {
    heading: 'Practical checklist: reducing repeat sexing samples',
    body: [
      'A feather sample needs an intact quill; the vane alone usually contains too little DNA. Blood cards should be dried and shipped at ambient temperature, avoiding repeated freeze–thaw. Juvenile birds, moulting birds and different species can amplify differently, so confirm that the method covers the species before testing.',
      'CHD results must be read with the species in mind; one primer set does not fit every bird. If the internal control is weak or the sample quality is poor, re-sample rather than forcing a male/female call.',
    ],
    bullets: [
      'Collect 2–3 feathers with intact quills, or use a dedicated blood card.',
      'Package each bird separately to avoid feather-dust cross-contamination.',
      'Record species, ring number, age and sample type on the form.',
      'Use the result for pairing and grouping, not as an absolute guarantee outside the validated species range.',
    ],
  },
  'flight-gene-report-guide': {
    heading: 'Practical checklist: reading a flight-gene report',
    body: [
      'Start with the sample identity and the assay’s internal controls, then read each marker’s genotype and evidence grade. A report that lists eight genotypes but gives no study population, trait definition or limitations is difficult to use responsibly.',
      'The panel is a set of candidate markers, not a scoreboard. A bird with several “favourable” genotypes can still be a poor racer, and a bird with fewer favourable markers can perform well. Training, health, age and pairing matter.',
    ],
    bullets: [
      'Check that the report covers all eight markers and names the assay method.',
      'Look for an evidence grade and a citation for each marker.',
      'Do not add genotypes into a single “champion score”.',
      'Compare the result with race records, progeny performance and health data.',
    ],
  },
  'inbreeding-depression': {
    heading: 'Practical checklist: assessing inbreeding without overclaiming',
    body: [
      'An inbreeding coefficient comes from the pedigree; DNA markers can check realised relatedness and identity. When records are incomplete, DNA can reveal unexpected relationships, but it cannot reconstruct a full pedigree from nothing.',
      'Assess inbreeding risk using common ancestors, effective population size, the change in inbreeding over generations, offspring health and reproductive performance. A single test is a poor basis for culling or a high-value sale.',
    ],
    bullets: [
      'Build at least a three-generation pedigree and mark repeated ancestors.',
      'Use DNA parentage to check the pedigree, not to replace it.',
      'Pair to increase genetic distance rather than chasing one “good gene”.',
      'Investigate fertility or squab problems with veterinary and environmental input.',
    ],
  },
  'ldha-gene-sprint': {
    heading: 'Practical checklist: interpreting LDHA',
    body: [
      'The pigeon LDHA evidence is a candidate-gene association graded B: a peer-reviewed study reported an association with racing survival, not a proven “speed gene”. Read the study population, trait definition and effect size rather than a single genotype label.',
      'LDHA is most useful inside the eight-marker panel and alongside pedigree, training and health records. If a report gives only “good/bad” without an evidence grade or limitations, treat it as lower-level information.',
    ],
    bullets: [
      'Confirm the marker, genotype and nomenclature used in the report.',
      'Use LDHA as a tendency, not a reason to cull on one gene.',
      'Compare with race results, training load, recovery and health.',
      'Be cautious about pricing a bird on an association alone.',
    ],
  },
  'pathogen-testing-practical-guide': {
    heading: 'Practical checklist: choosing a pathogen test',
    body: [
      'Choose the test by the question you need to answer: is this bird shedding a pathogen, has it been exposed, or is a flock outbreak ongoing? PCR detects nucleic acid and is strong for active infection/shedding; it does not measure protective immunity or prove causation by itself.',
      'Sample site matters. Respiratory signs point to oral/pharyngeal and conjunctival samples; enteric signs to cloacal swabs or fresh faeces; systemic or dead birds may need tissue. A negative result from the wrong site or the wrong time is not evidence of absence.',
    ],
    bullets: [
      'Define the question before choosing PCR, culture, serology or pathology.',
      'Match the sample site to the syndrome and the pathogen’s tropism.',
      'Submit fresh, individually labelled samples with a cold chain where required.',
      'Interpret positives and negatives with clinical signs, epidemiology and repeat testing.',
    ],
  },
  'performance-genes-explained': {
    heading: 'Practical checklist: using the eight-marker panel',
    body: [
      'The eight markers are a candidate panel, not a championship score. Their evidence strength, study populations and traits differ; adding them into one number gives weak evidence the same weight as stronger evidence.',
      'A defensible workflow is: read the evidence grade first, check whether markers overlap functionally, then return to pedigree, race records and training. Grade-C markers should be exploratory, not a hard culling criterion.',
    ],
    bullets: [
      'Ask for a per-marker evidence grade and citation.',
      'Do not add genotypes into a single ranking score.',
      'Validate pairing decisions with multi-generation race and progeny records.',
      'Be sceptical of strong claims for a single marker without pigeon-specific evidence.',
    ],
  },
  'pmv-virus-testing': {
    heading: 'Practical checklist: PPMV-1 surveillance',
    body: [
      'Pigeon paramyxovirus type 1 is related to Newcastle disease; respiratory signs, neurological signs and unusual mortality all warrant investigation. Introduction, basketing and the days after a race are key windows. Sample oral/cloacal swabs and add tissue where needed.',
      'Because this is an important avian disease, positive results must be handled under local animal-health rules. PCR supports early isolation and reduced spread; it does not replace official diagnosis or veterinary management.',
    ],
    bullets: [
      'Quarantine new birds and sample according to risk.',
      'Record respiratory/neurological signs, mortality and contact history.',
      'Isolate positives and follow local reporting requirements.',
      'Do not use human medicines or self-vaccinate in place of a veterinary plan.',
    ],
  },
  'qpcr-biosafety': {
    heading: 'Practical checklist: preventing qPCR contamination',
    body: [
      'False positives in qPCR usually come from amplified products, positive controls or sample cross-contamination. The strongest control is not more surface wiping but a unidirectional workflow with separate areas for reagent preparation, sample handling, amplification and product analysis.',
      'Include a negative control, positive control and internal control in each batch, and record batch numbers, operators and anomalies. If the negative control amplifies, stop and investigate the run rather than reporting the samples as positive.',
    ],
    bullets: [
      'Keep reagents and pipettes out of the amplification/product area.',
      'One swab per bird; spin tubes before opening to reduce aerosols.',
      'Run negative, positive and internal controls every batch and record Ct values.',
      'Seal and dispose of amplified products; decontaminate coats and surfaces on a schedule.',
    ],
  },
  'sampling-guide': {
    heading: 'Practical checklist: sample quality beats test choice',
    body: [
      'A poor sample defeats the best assay. Wash hands, wear gloves and prepare individual sterile swabs; use separate swabs for the oropharynx and cloaca instead of one swab for the whole bird.',
      'Insufficient material, drying, heat, delayed shipping and illegible labels are common failure points. Check every tube against the bird ID before shipping and keep a sampling record or photo.',
    ],
    bullets: [
      'One bird, one set of consumables; never pool or reuse swabs.',
      'Chill fresh faeces or tissue promptly and avoid repeated freeze–thaw.',
      'Write the ring number on the tube and again on the outer bag.',
      'Use the laboratory’s required ambient/cold-chain shipping method.',
    ],
  },
  'virus-surveillance-plan': {
    heading: 'Practical checklist: building a flock surveillance plan',
    body: [
      'Start with a flock baseline: understand the current pathogen and immune background before deciding what to monitor. New birds, youngsters, race returns and symptomatic birds deserve priority over random sampling.',
      'Frequency depends on flock size, racing intensity and local disease pressure; do not copy a fixed table. Record date, age, signs and recent medication with every sample so you can see a trend rather than a single point.',
    ],
    bullets: [
      'Keep a flock record: origin, age, vaccination and prior tests.',
      'Set separate observation and sampling points for new and returning birds.',
      'Run clinical and laboratory surveillance together, not PCR alone.',
      'Review positive rates, retests and outcomes every quarter.',
    ],
  },
};
