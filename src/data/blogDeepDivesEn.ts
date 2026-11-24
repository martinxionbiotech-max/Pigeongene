// English long-form decision sections, appended to both the HTML page and the
// Markdown variant. Written independently of the Chinese copy.
export type BlogDeepDiveEn = { heading: string; body: string[] };

export const blogDeepDivesEn: Record<string, BlogDeepDiveEn> = {
  'adenovirus-testing': {
    heading: 'From sample to action: a practical adenovirus sequence',
    body: [
      'When several birds vomit or pass watery droppings within days of basketing, separate affected, exposed and healthy birds before assuming one diagnosis. Record the onset, feed/water changes and medication, then sample affected birds early, before widespread treatment, and include Newcastle disease, rotavirus and Salmonella in the differential panel.',
      'The result does not replace supportive care and biosecurity. There is no universal antiviral “cure”; do not treat the whole loft on one positive report, and do not let a negative report override clinical signs when the sample was late or dried out. Keep the outbreak record — dates, ages, samples and actions — so the next season’s prevention is based on your own data.',
    ],
  },
  'circovirus-immune': {
    heading: 'A circovirus positive is not a flock-wide verdict',
    body: [
      'Circovirus is often part of an immunosuppression picture, especially in young, newly introduced or densely housed birds. Before acting, ask how old the bird is, whether it was clinical at sampling, and what else is circulating. A single positive youngster without signs may call for isolation, observation and husbandry review rather than culling the whole clutch or all breeders.',
      'If wasting, secondary infection or mortality is present, combine PCR with necropsy, histopathology and a broader pathogen panel. There is no simple “clear the virus” protocol; the practical levers are stress reduction, secondary-infection control and avoiding direct mixing of new birds with youngsters. Set the retest interval from age and exposure risk, not a universal calendar.',
    ],
  },
  'dna-id-kinship': {
    heading: 'Using DNA ID in sales and disputes',
    body: [
      'A DNA ID is best at answering “is this the same bird?”, not “what is this bird worth?”. Before a sale, both parties should confirm sampling, sealing and numbering, and keep photos and signatures. If a bird is swapped, mis-shipped or a pedigree is disputed, the DNA result can sit alongside the ring number, stud book and transport record. A broken sample chain cannot be repaired by a better assay.',
      'Parentage testing distinguishes exclusion from support. A mismatch is usually a strong exclusion; a match still depends on marker number, exclusion probability and population background. With only an offspring and no candidate parent, DNA cannot reconstruct a full pedigree. Treat the report as part of the evidence, not a replacement for inspection and a written contract.',
    ],
  },
  'dna-sexing-guide': {
    heading: 'Sexing young birds: when to test and when to wait',
    body: [
      'In monomorphic species, early sex information can shape pairing and grouping, but juvenile feathers vary in DNA quantity and quill integrity. Pluck feathers with an intact quill rather than clipping the vane; if the bird is moulting or the sample is contaminated, re-sample instead of forcing a call. CHD primers are not universal, so confirm species coverage before submitting.',
      'Record the sex result with the ring number, photo and behavioural notes. For a high-value sale or race entry, keep a second sample or a repeat-test option; for routine grouping, one reliable result is usually enough. Reporting “failed” separately from “male/female” reduces later disputes.',
    ],
  },
  'flight-gene-report-guide': {
    heading: 'What a flight-gene report can and cannot tell you',
    body: [
      'A useful report separates the assay from the interpretation: which markers were tested, what genotype was called, whether controls passed, and what evidence grade supports each marker. A list of eight genotypes without study population, trait definition or limitations is difficult to use responsibly, even if the laboratory work was technically valid.',
      'The panel is a set of candidate markers, not a ranking. Several “favourable” genotypes do not guarantee racing success, and a bird with fewer favourable calls can still perform. Use the report to ask better questions about pairing, then check the answers against race records, progeny performance, health and training.',
    ],
  },
  'inbreeding-depression': {
    heading: 'Inbreeding management: pedigree, DNA and performance',
    body: [
      'An inbreeding coefficient is a pedigree measure; DNA markers are a reality check. With a complete pedigree, calculate common ancestors and the change in inbreeding over generations. With missing records, DNA can reveal unexpected relationships but cannot reconstruct a stud book. Do not turn “markers look similar” into “this is a confirmed inbred line”.',
      'The real outcome is in reproduction: fertility, hatchability, squab survival, growth and breeding lifespan. If those decline, revisit pairings and effective population size. A single DNA result is a poor reason to cull a breeder; increasing genetic distance, using verified outcross lines and recording each generation is more defensible.',
    ],
  },
  'ldha-gene-sprint': {
    heading: 'LDHA: the gap between association and causation',
    body: [
      'LDHA has relatively consistent pigeon evidence, but “associated with racing survival” is not “determines speed”. Study population, race distance, training and statistical model all affect the result; a report that gives only “good/bad” without a source and effect size cannot tell you what it means for your loft.',
      'Use LDHA inside the multi-marker panel, with pedigree, race records, recovery and health. Pricing a bird or culling it on one LDHA call carries more risk than benefit. To test a pairing decision, look at progeny across multiple seasons, not just the parents’ genotypes.',
    ],
  },
  'pathogen-testing-practical-guide': {
    heading: 'Choosing a pathogen test: question first, method second',
    body: [
      'Start with the question: is this bird shedding, has it been exposed, or is the flock in an outbreak? PCR is strong for active nucleic acid detection, but it does not measure protective immunity or prove that a pathogen caused the signs. Culture, serology and pathology answer different questions and are not interchangeable.',
      'Sample site and timing decide much of the result. Respiratory signs point to oral/pharyngeal and conjunctival samples; enteric signs to cloacal swabs or fresh faeces; systemic or dead birds may need tissue. A negative result from the wrong site or the wrong week is not evidence of absence, and a positive result still needs clinical context.',
    ],
  },
  'performance-genes-explained': {
    heading: 'Eight markers, not one championship score',
    body: [
      'Adding eight genotypes into a single score looks tidy but mixes strong and weak evidence. LDHA, DRD4 and CRY1 have pigeon association studies; MSTN, F-KER and CASK are more preliminary or indirect. Equal weighting gives weak evidence the same influence as stronger evidence, which is hard to defend in a breeding decision.',
      'Pairing also depends on genetic background and performance records. Two “good” genotypes do not guarantee a good pair: effects may overlap, epistasis matters, and environment changes outcomes. Use the panel as a question generator — which markers deserve attention? — not as a guaranteed ranking of birds.',
    ],
  },
  'pmv-virus-testing': {
    heading: 'PPMV-1: early isolation matters more than early medication',
    body: [
      'Pigeon paramyxovirus type 1 is related to Newcastle disease. With respiratory, neurological signs or unexpected mortality, isolate and reduce contact first; do not self-medicate. Sample oral and cloacal sites, add tissue where appropriate, and record vaccination, basketing dates and contact history because they change interpretation.',
      'This is an important avian disease, so positives must be handled under local animal-health rules. PCR supports early detection and reduced spread; it does not replace official diagnosis. For the rest of the flock, use a risk assessment to decide observation, retesting or movement restrictions rather than treating only the positive bird.',
    ],
  },
  'qpcr-biosafety': {
    heading: 'qPCR contamination: start with the negative control',
    body: [
      'When a negative control amplifies, the dangerous move is to explain it away and report the samples anyway. Stop the batch, check the controls, review the run and cleaning records, and look for amplified-product carry-over, positive-control leaks or pipette contamination. If several batches fail at once, suspect the workflow, not one sample.',
      'Contamination control is mostly about space and direction, not stronger disinfectant. Separate reagent preparation, sample handling, amplification and product analysis; keep personnel, consumables and pipettes dedicated where possible; never open amplified tubes in the clean area. Log every anomaly so recurring steps become visible.',
    ],
  },
  'sampling-guide': {
    heading: 'Five sampling failures that beat a good assay',
    body: [
      'Too little material, a dry swab, an illegible label, pooled birds and a broken cold chain are the usual reasons a good kit produces an unhelpful result. Prepare individual sterile consumables, label the tube before sampling, check every ID, and use a separate swab for each site.',
      'Sample type follows the target: respiratory pathogens favour oral/conjunctival sites, enteric pathogens favour cloaca or fresh faeces, and tissue must not be allowed to decompose. Confirm the laboratory’s storage and shipping requirements; if you cannot ship promptly, chill or freeze as instructed and avoid repeated freeze–thaw.',
    ],
  },
  'virus-surveillance-plan': {
    heading: 'Surveillance is about trends, not one positive',
    body: [
      'Start with a baseline and priority scenarios: new birds, youngsters, race returns and symptomatic birds. Record date, age, signs, vaccination and medication with every sample, then review positive rates, retests and outcomes each quarter. A single result cannot tell you whether an infection is incidental, imported or spreading within the loft.',
      'Frequency should follow flock size, racing intensity and local disease pressure, not someone else’s fixed table. Increase sampling in high-risk windows and reduce disturbance in low-risk periods. The aim is earlier detection and less loss, not more reports for their own sake.',
    ],
  },
};
