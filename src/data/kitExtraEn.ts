// Additional English technical copy for kit pages. Each entry is product-specific;
// the shared laboratory notes live in the page template. No unverified performance
// numbers are included: batch COA/validation documents remain authoritative.
export const kitExtraEn: Record<string, string> = {
  'bird-sex-id':
    'The CHD assay compares Z- and W-linked intron fragments rather than a single point mutation, so a clean amplification curve and a valid internal control matter more than a single band. Confirm primer compatibility for the species before testing, and report the result with the sample type, because feather and blood can differ in DNA quality.',
  'pigeon-sex-id':
    'For racing pigeons, the practical advantage is early sex confirmation before pairing, when behaviour and morphology are still ambiguous. A dried blood card or quill sample is sufficient; the laboratory should report the extraction method and control status so a weak result is not mistaken for a female call.',
  'seno-bird-dna':
    'This workflow is aimed at the pre-analytical step: sample lysis, nucleic-acid capture and elution. Yield and purity vary with feather quill, blood-card age and swab preservative, so downstream PCR should use a validated extraction input. It is not a stand-alone diagnostic and does not include target-specific primers.',
  pihv:
    'Pigeon herpesvirus can remain latent in nervous tissue and recur after stress. An acute oral/conjunctival swab is more informative than a single blood sample, and a negative result during latency should be interpreted with the timing of exposure. The assay should include an internal control to flag extraction failure or PCR inhibition.',
  picv:
    'Circovirus testing is most useful in young birds and after introduction, when subclinical carriage can precede wasting or secondary infections. Interpret a positive with age, flock history and necropsy; a negative cloacal swab does not prove that tissue is free of virus. Repeat sampling may be needed during an outbreak.',
  salmonella:
    'Salmonella can be shed intermittently, so a single PCR-negative swab is weaker than a culture programme with repeated sampling. The assay detects nucleic acid, not viable organisms or antimicrobial resistance; culture and susceptibility testing remain essential when treatment decisions are being made, especially because pigeon-associated Salmonella can be zoonotic.',
  piadv:
    'Adenovirus sampling is most informative when linked to the syndrome: vomiting and watery droppings after basketing point to cloacal/fresh faecal sampling, while systemic or hepatic cases may need tissue. The assay should distinguish the target from other adenovirus types where the kit claims type specificity, and results should be read with the internal control.',
  'ppmv-1':
    'PPMV-1 testing supports early isolation during respiratory or neurological incidents. Oral and cloacal swabs can differ in positivity, so paired sampling is preferred; a negative result does not rule out infection if the bird is early or late in the course. Any positive must be handled under local animal-health rules, with confirmatory testing as required.',
  'chlamydia-psittaci':
    'Chlamydia psittaci is a zoonotic risk, so sample handling should follow heightened biosafety precautions. PCR on respiratory/conjunctival swabs or faeces detects nucleic acid, not protective immunity; a positive result should be interpreted with exposure history and veterinary assessment, and treatment decisions should not be based on PCR alone.',
  'candida-albicans':
    'Oral plaques are a clinical sign, not a diagnosis. Candida albicans can be cultured or detected by PCR, but trichomonas and pigeonpox can look similar; the report should state the sample site and method. Antifungal use before sampling may reduce detection, so record recent medication and interpret a negative result with the lesion appearance.',
  pitg:
    'Trichomonas gallinae is best detected in fresh oral/crop material; swabs should be kept moist and processed promptly because the organism is fragile outside the host. PCR is useful for carrier screening, but a positive result should be linked to lesions and bird management, and drinking water/fomites should be addressed alongside individual treatment.',
  pipv:
    'Pigeonpox lesions can be cutaneous or diphtheritic, and sampling the edge of a fresh lesion is more useful than swabbing old crusts. Vaccination history can complicate interpretation, so record it on the submission form. PCR supports differentiation from trichomonas and Candida; it does not by itself prove that a lesion is vaccine-related or wild-type.',
  pirv:
    'Pigeon rotavirus A is a major cause of young-pigeon disease, and fresh faeces or intestinal content is preferred over a dry swab. The assay should be interpreted with age, maternal antibodies and co-infections; a negative result from a late or poorly preserved sample can be false-negative, so repeat sampling may be justified in an outbreak.',
  apv:
    'Avian polyomavirus testing is most useful in young birds, new introductions and immunosuppressed individuals. Feather or cloacal samples may be appropriate depending on the syndrome; a positive result should be combined with age, clinical signs and quarantine history. The assay is a research/professional tool, not a guarantee that a carrier will remain healthy.',
  pbfdv:
    'Psittacine beak and feather disease virus can persist in feather follicles and blood, so sample type affects detection. PCR on plucked feathers or blood can support screening, but a single negative result does not prove freedom; quarantine and repeat testing are important for new parrots, and positive birds need veterinary assessment rather thandisposing of them yourself.',
};
