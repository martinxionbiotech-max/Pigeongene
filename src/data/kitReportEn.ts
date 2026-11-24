// Product-specific reporting/procurement notes. Kept concise and non-promotional;
// batch documents and the current IFU remain the authoritative source.
export const kitReportEn: Record<string, string> = {
  'bird-sex-id':
    'Report the species, sample type and control status with the sex call; CHD primers are not universal across birds. For colony records, store the result with the bird ID and a note on the assay, and repeat a weak or ambiguous call rather than assigning a sex from a single poor amplification. For multi-species work, keep a short validation note for each species: sample type, primer set and a known male/female control. Do not assume a call transfer just because the bird is related to a validated species. Keep the control result with the report for future audits.',
  'pigeon-sex-id':
    'Check the ring number and sample ID before pairing decisions. The report should state the assay and control result; if the call is weak, re-sample before changing a pairing plan. Use the result with pedigree and performance records rather than as a stand-alone breeding score. For a breeding programme, a sex result is most useful when it is entered into the same record as the ring number, hatch date and pairing plan. That prevents a later mismatch between a laboratory report and a bird that has been moved or re-paired. A repeat sample is cheaper than a wrong pairing decision, especially for a young breeder. Record the repeat result alongside the original.',
  'seno-bird-dna':
    'Record the sample type, extraction method, yield and purity with the DNA. Downstream users should know whether inhibitors were checked and how the DNA was stored; this product does not supply target-specific primers or a diagnostic interpretation. For the laboratory, document the extraction input, elution volume and storage buffer; these details matter more than a kit brand when the downstream assay is sensitive to inhibitors or low DNA yield. If the DNA is intended for long-term storage, aliquot it to avoid repeated freeze–thaw and record the date. Record the extraction batch and operator as well, because downstream troubleshooting is much faster when the pre-analytical history is visible. If a downstream result is unexpected, review this pre-analytical record with the laboratory before changing the assay or re-extracting the sample.',
  pihv:
    'State whether the sample was acute or latent-phase and which site was swabbed. A negative result during latency is not proof of freedom; if the bird was stressed or exposed, repeat sampling and interpret with the clinical timeline.',
  picv:
    'Include age, flock history and any secondary infections in the report. A positive cloacal swab should be linked to the bird’s clinical status; a negative result does not rule out tissue infection, so necropsy or repeat sampling may be appropriate.',
  salmonella:
    'Report the sample site and whether culture was also performed. Because shedding can be intermittent and the organism can be zoonotic, a single PCR result should not be used as a herd clearance certificate or as a substitute for susceptibility testing.',
  piadv:
    'Record the syndrome and sampling site, and note whether other enteric pathogens were tested. If the assay claims type specificity, report the type; a positive result in a mixed outbreak should be interpreted with the full pathogen panel.',
  'ppmv-1':
    'Record paired oral/cloacal sampling where available and note the bird’s vaccination and contact history. Any positive must be handled under local animal-health rules; the laboratory report supports isolation and investigation, not official confirmation by itself.',
  'chlamydia-psittaci':
    'Note the sample site and any human exposure. Because this is a zoonotic agent, the report should prompt appropriate personal protection and veterinary follow-up; a positive PCR is not a treatment prescription.',
  'candida-albicans':
    'Describe the lesion and recent antifungal/antibiotic use. A positive PCR or culture should be read with the oral examination; a negative result from an old crust does not exclude Candida deeper in the crop. If antifungal treatment has already started, state the drug and duration on the submission form; this context matters when a negative result is used to rule out Candida.',
  pitg:
    'Record whether the sample was fresh oral/crop material and how quickly it was processed. A positive result should trigger review of water, feeders and new birds; treatment decisions remain with the veterinarian.',
  pipv:
    'Note the lesion type and vaccination history. A positive result supports poxvirus detection but does not distinguish vaccine from field strain without sequencing; interpret with the lesion and flock history. Note the lesion stage and sample site.',
  pirv:
    'Record the bird’s age, sampling time and any maternal vaccination. A negative result from a dry or delayed sample should be repeated in a suspected outbreak; a positive result does not exclude co-infection with other enteric pathogens.',
  apv:
    'Record the bird’s age, origin and quarantine status. A positive result should be managed with isolation and veterinary assessment; a negative result in a new bird does not replace quarantine or a repeat test after stress.',
  pbfdv:
    'Record the sample type (blood or plucked feather) and the bird’s age. A single negative result does not prove freedom; repeat testing after quarantine and have positive birds assessed by a veterinarian rather than disposing of them without advice.',
};
