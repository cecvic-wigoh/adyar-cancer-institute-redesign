export interface DiagnosticTest {
  id: string;
  testName: string;
  department: string;
  tat: string; // Turnaround Time
  requirements: string; // Sample/Preparation requirements
  method: string;
  accreditation: string;
}

export const directoryOfServices: DiagnosticTest[] = [
  {
    id: "TEST-001",
    testName: "Complete Blood Count (CBC)",
    department: "Clinical Biochemistry",
    tat: "4 Hours",
    requirements: "3ml EDTA Whole Blood. No fasting required.",
    method: "Automated Hematology Analyzer",
    accreditation: "NABL"
  },
  {
    id: "TEST-002",
    testName: "Histopathology - Large Specimen",
    department: "Oncopathology",
    tat: "5-7 Working Days",
    requirements: "Tissue fixed in 10% Neutral Buffered Formalin. Requires clinical history.",
    method: "Routine H&E Staining, Microscopy",
    accreditation: "NABL, CAP"
  },
  {
    id: "TEST-003",
    testName: "BCR-ABL1 Quantitative PCR",
    department: "Molecular Oncology",
    tat: "3 Working Days",
    requirements: "4ml EDTA Peripheral Blood or 2ml Bone Marrow.",
    method: "Real-Time Polymerase Chain Reaction (RT-PCR)",
    accreditation: "NABL"
  },
  {
    id: "TEST-004",
    testName: "Blood Culture & Sensitivity",
    department: "Microbiology",
    tat: "5 Days (Negative), Positive as detected",
    requirements: "10ml blood in continuous monitoring culture bottle. Collect prior to antibiotics.",
    method: "Automated Culture System, VITEK 2",
    accreditation: "NABL"
  },
  {
    id: "TEST-005",
    testName: "Whole Body PET-CT Scan",
    department: "Nuclear Medicine and Theranostics",
    tat: "24-48 Hours",
    requirements: "Fasting for 4-6 hours. Normal blood sugar levels required.",
    method: "18F-FDG Positron Emission Tomography",
    accreditation: "AERB"
  },
  {
    id: "TEST-006",
    testName: "Karyotyping - Bone Marrow",
    department: "Cytogenetics",
    tat: "10-14 Working Days",
    requirements: "2ml Bone Marrow aspirate in Heparin.",
    method: "G-Banding & Microscopic Analysis",
    accreditation: "NABL"
  }
];
