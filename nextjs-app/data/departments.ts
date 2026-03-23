// ────────────────────────────────────────────────────────────────────────────
// Department data model – 3-template system (clinical / diagnostic / support)
// ────────────────────────────────────────────────────────────────────────────

export type DepartmentCategory = 'clinical' | 'diagnostic' | 'support';

export interface Department {
  slug: string;
  title: string;
  category: DepartmentCategory;
  metaDescription: string;
  tagline: string;
  overview: string[];
  hod: {
    name: string;
    credentials: string;
    designation: string;
    message: string;
    image?: string;
  };
  contactEmail: string;
  spoc?: string;
  departmentPhoto?: string;
  experts: DepartmentExpert[];
  achievements: string[];
  legacy: string[];
  conditionsTreated?: string[];
  treatmentOptions?: string[];
  preventiveMeasures?: string[];
  whenToVisit?: string[];
  diagnosticServices?: DiagnosticServiceCategory[];
  therapeuticServices?: TherapeuticService[];
  equipment?: EquipmentItem[];
  missionPhilosophy?: string[];
  accreditations?: Accreditation[];
  qualityDimensions?: QualityDimension[];
  services?: string[];
  facilities?: string[];
}

export interface DepartmentExpert {
  name: string;
  credentials: string;
  designation: string;
  slug?: string;
}

export interface DiagnosticServiceCategory {
  category: string;
  services: string[];
}

export interface TherapeuticService {
  name: string;
  description: string;
}

export interface EquipmentItem {
  name: string;
  description: string;
  badge?: string;
}

export interface Accreditation {
  name: string;
  description: string;
  status: string;
}

export interface QualityDimension {
  name: string;
  description: string;
}

// ────────────────────────────────────────────────────────────────────────────
// Department entries
// ────────────────────────────────────────────────────────────────────────────

export const departments: Department[] = [
  // ── 1. Surgical Oncology ──────────────────────────────────────────────
  {
    slug: "surgical-oncology",
    category: "clinical",
    title: "Surgical Oncology",
    metaDescription:
      "Surgical Oncology at Cancer Institute WIA, Chennai — expert cancer surgery including robotic da Vinci, HIPEC, breast, head & neck, GI, and limb salvage procedures. Established 1954.",
    tagline: "Surgical Oncology focuses on treating cancer using advanced precision surgery—incorporating robotic and minimally invasive techniques—to achieve optimal tumor removal while preserving form and function.",
    overview: [
      "Surgical Oncology focuses on treating cancer using advanced precision surgery—incorporating robotic and minimally invasive techniques—to achieve optimal tumor removal while preserving form and function.",
      "The Surgical Oncology department at the Cancer Institute (WIA), Chennai, is a cornerstone of the institute's comprehensive cancer care. Established as part of India's pioneering comprehensive cancer center since 1954, surgical oncology here specializes in the surgical management of solid tumours including breast, thoracic, gastrointestinal tract, head and neck, gynecological sites, urological systems, musculo-skeletal and Neuro-oncology. It incorporates advanced minimally invasive and robotic approaches where appropriate, while emphasizing preservation of form and function to optimize patient quality of life. Surgical oncology is critically important because it provides the most effective means of local control and potential cure for many early and locally advanced solid cancers, significantly improving survival rates and offering symptom relief in advanced cases.",
      "At the Cancer Institute (WIA), the department supports holistic patient care through seamless multidisciplinary collaboration with medical oncologists, radiation oncologists, pathologists, radiologists, and palliative care teams. This integrated, patient-centered model ensures personalized treatment plans, reduced complications, faster recovery, and enhanced outcomes, all delivered with the institute's ethos of ethical, compassionate, and accessible care—particularly serving a large volume of patients from diverse socioeconomic backgrounds.",
      "The department's unique strengths lie in its status as a national leader in training and innovation: it introduced one of India's first MCh programs in Surgical Oncology in 1984 and continues as a premier training hub, with a large faculty mentoring 9 residents every year.",
    ],
    hod: {
      name: "Arvind Krishnamurthy",
      credentials: "",
      designation: "Head of Department",
      message:
        "The Surgical Oncology Department at the Cancer Institute (WIA), Adyar, Chennai, is guided by a clear and compassionate vision: to deliver world-class, ethical surgical care that gives every patient the best possible chance at cure, control of their disease, and a life of quality and dignity—regardless of background or resources. Building on our institute's legacy since 1954 as pioneers in comprehensive cancer care, we envision a future where advanced precision surgery, including minimally invasive and robotic techniques, combined with organ preservation and reconstructive approaches, helps eliminate unnecessary suffering from cancer. Our goal is to ensure that no one endures avoidable hardship from treatable or manageable disease, aligning with the institute's overarching vision that every individual deserves freedom from cancer's burden through prevention, early intervention, or effective treatment.\nOur unwavering commitment to patient care means putting you—the patient—at the heart of everything we do. We provide personalized, multidisciplinary treatment plans ensuring surgery is timed and tailored to your unique needs for the best outcomes. With a team of highly experienced, fellowship-trained surgeons, high-volume expertise in complex procedures, and a focus on compassionate, accessible services, we strive to minimize complications, preserve form and function, support faster recovery, and offer hope through every stage of your journey. Whether through curative resection, staging, or palliative relief, we are dedicated to treating you with respect, empathy, and excellence—because at the Cancer Institute (WIA), every life matters, and every battle against cancer is fought with unwavering dedication.",
    },
    contactEmail: "sog@cancerinstitutewia.org",
    spoc: "Arvind Krishnamurthy",
    experts: [
      {
        name: "Arvind Krishnamurthy",
        credentials: "",
        designation: "Head of Department",
        slug: "dr-arvind-krishnamurthy",
      },
      {
        name: "Dr. Balaji S",
        credentials: "",
        designation: "Faculty",
        slug: "dr-balaji-s",
      },
      {
        name: "Dr. Kunal Nandy",
        credentials: "",
        designation: "Faculty",
        slug: "dr-kunal-nandy",
      },
      {
        name: "Dr. Raksha R",
        credentials: "",
        designation: "Faculty",
        slug: "dr-raksha-r",
      },
      {
        name: "Dr. Chandra Kumar Krishnan",
        credentials: "",
        designation: "Faculty",
        slug: "dr-chandra-kumar-krishnan",
      },
      {
        name: "Dr. Ashik A Bary",
        credentials: "",
        designation: "Faculty",
        slug: "dr-ashik-a-bary",
      },
      {
        name: "Dr. K Shalini Shree",
        credentials: "",
        designation: "Faculty",
        slug: "dr-k-shalini-shree",
      },
      {
        name: "Dr. V Nandhini",
        credentials: "",
        designation: "Faculty",
        slug: "dr-vnandhini",
      },
      {
        name: "Dr. Pavithra S",
        credentials: "",
        designation: "Faculty",
        slug: "dr-pavithras",
      },
      {
        name: "Dr. Diana Niranjani Raj",
        credentials: "",
        designation: "Faculty",
        slug: "dr-diana-niranjani-raj",
      },
      {
        name: "Dr. Anjali A B",
        credentials: "",
        designation: "Faculty",
        slug: "dr-anjali-a-b",
      },
    ],
    conditionsTreated: [
      "Breast cancer",
      "Thoracic cancers",
      "Gastrointestinal tract cancers (stomach, colorectal, liver, pancreas)",
      "Head and neck cancers",
      "Gynecological oncology",
      "Urological oncology",
      "Musculo-skeletal cancers",
      "Neuro-oncology",
    ],
    treatmentOptions: [
      "Advanced precision surgery incorporating robotic and minimally invasive techniques",
      "Minimally invasive laparoscopic, thoracoscopic, and robotic surgeries",
      "Limb-salvage surgeries and isolated limb perfusion",
      "Breast oncoplastic surgeries and sentinel node biopsies",
      "Cytoreductive surgeries with or without HIPEC/HITOC",
      "Skull base surgeries",
      "Novel regional and microvascular reconstructions",
      "Parenchyma preserving lung resections and complex tracheal resections",
    ],
    preventiveMeasures: [
      "Avoid all forms of tobacco (smoking, chewing paan/gutkha, or betel quid), as it is a major cause of head and neck, oral, and lung-related cancers.",
      "Limit alcohol consumption, eat a balanced diet rich in fruits, vegetables, and whole grains, and maintain a healthy weight through regular physical activity (at least 30 minutes most days).",
      "Get vaccinated against HPV (for prevention of cervical and many other cancers), use protection during sexual activity, and protect your skin from excessive sun exposure.",
      "For women, breastfeeding (if applicable) can help lower breast cancer risk.",
      "Follow screening recommendations: start monthly breast self-examination from age 20; clinical breast exams every 1–3 years from age 30–39, and annually thereafter.",
      "Regular cervical cancer screening with Pap smear/HPV testing.",
    ],
    whenToVisit: [
      "You have been diagnosed with (or are suspected of having) a solid tumor or localized cancer that may require surgical management",
      "Breast cancer",
      "Gastrointestinal cancers (stomach, colorectal, liver, pancreas etc)",
      "Head and neck cancers",
      "Gynecological cancers (ovarian, cervical, endometrial)",
      "Urological cancers",
      "Soft tissue sarcomas, bone tumors, skin cancer",
      "Thoracic cancer (lung/esophagus etc)",
    ],
    achievements: [
      "2020: Diamond Jubilee Block OT Complex opened",
      "2021: Start of Robotic Surgeries using the da Vinci Robotic Platform",
    ],
    legacy: [
      "1954: Inception of the department",
      "1982: Jasudben Chamanlal Kothari Surgical Oncology Complex opened",
      "1984: Live relay operative surgical workshop 'Frontiers in Surgical Oncology'",
      "1985: First centre in India to perform Endoscopic and open laser surgery with ND-YAG Surgical Laser",
      "1988: First successful Limb Salvage Surgery for Bony Sarcomas in India, pioneered by Prof. Mayilvahanan N",
      "1992: Intra-operative Electron Therapy first practiced; D2 Gastrectomy introduced",
    ],
  },

  // ── 2. Medical Oncology ───────────────────────────────────────────────
  {
    slug: "medical-oncology",
    category: "clinical",
    title: "Medical Oncology & Paediatric Oncology",
    metaDescription:
      "Expert cancer treatment at Cancer Institute (WIA) Chennai. Medical & Paediatric Oncology — chemotherapy, immunotherapy, CAR-T therapy & stem cell transplant since 1954.",
    tagline: "Medical Oncology and Pediatric Oncology focuses on treating cancer using chemotherapy, immunotherapy, targeted therapies, hematopoietic stem cell transplant, and cellular therapy.",
    overview: [
      "Medical Oncology and Pediatric Oncology focuses on treating cancer using chemotherapy, immunotherapy, targeted therapies, hematopoietic stem cell transplant, and cellular therapy.",
      "The Department of Medical and Pediatric Oncology is dedicated to the comprehensive care of patients with cancer across the age spectrum, from children and adolescents to adults. Medical oncology focuses on the systemic treatment of solid and hematological malignancies using chemotherapy, targeted therapy, immunotherapy, and hormonal therapy, delivered through evidence-based protocols. Pediatric oncology is a highly specialized discipline addressing cancers in children and adolescents, which are biologically distinct from adult cancers and require age-appropriate treatment strategies, intensive supportive care, and long-term follow-up.",
      "The department supports patient care through a multidisciplinary approach, working closely with multiple clinical and diagnostic services to ensure seamless care across the cancer continuum. Advanced therapeutic services, including hematopoietic stem cell transplantation and emerging cellular therapies such as CAR-T cell therapy, form an integral part of the department's clinical scope.",
      "Unique strengths of the department include a strong focus on evidence generation and implementation in resource-limited settings, with active involvement in clinical trials, implementation research, and collaborative studies.",
    ],
    hod: {
      name: "Dr. Venkatraman Radhakrishnan",
      credentials: "MD DM MSc",
      designation: "Head of Department",
      message:
        "Our vision is to provide compassionate, high-quality, and equitable cancer care for every patient, guided by science, empathy, and integrity. We are committed to delivering evidence-based treatments tailored to each individual, while recognizing the physical, emotional, and social challenges that cancer brings to patients and their families. Patient safety, dignity, and quality of life remain at the heart of everything we do.\n\nWe believe that excellent cancer care goes beyond treatment alone. Our team works collaboratively to ensure timely diagnosis, comprehensive therapy, strong supportive care, and careful follow-up, from the time of diagnosis through survivorship or end-of-life care when needed. We are equally committed to advancing care through research, innovation, and continuous learning, so that our patients benefit from the latest proven approaches.\n\nAbove all, we strive to walk alongside our patients and families at every step of their journey—listening, supporting, and partnering with them in decision-making. Our department remains dedicated to building trust, improving outcomes, and offering hope through compassionate and responsible cancer care.",
    },
    contactEmail: "r.venkatraman@cancerinstitutewia.org",
    experts: [
      {
        name: "Dr. Venkatraman Radhakrishnan",
        credentials: "MD DM MSc",
        designation: "Head of Department",
        slug: "dr-venkatraman-radhakrishnan",
      },
      {
        name: "Dr. Karthik Rengaraj",
        credentials: "",
        designation: "Faculty",
        slug: "dr-karthik-rengaraj",
      },
      {
        name: "Dr. Parathan Karunakaran",
        credentials: "",
        designation: "Faculty",
        slug: "dr-parathan-karunakaran",
      },
      {
        name: "Dr. Priya Jovita Mary Martin Daniel",
        credentials: "",
        designation: "Faculty",
        slug: "dr-priya-jovita-mary-martin-daniel",
      },
      {
        name: "Dr. Pragadeesh T",
        credentials: "",
        designation: "Faculty",
        slug: "dr-pragadeesh-t",
      },
      {
        name: "Dr. Gangothri Selvarajan",
        credentials: "",
        designation: "Faculty",
        slug: "dr-gangothri-selvarajan",
      },
      {
        name: "Dr. Gargi Das",
        credentials: "",
        designation: "Faculty",
        slug: "dr-gargi-das",
      },
      {
        name: "Dr. Dinesh R",
        credentials: "",
        designation: "Faculty",
        slug: "dr-dinesh-r",
      },
      {
        name: "Dr. Prasanth S",
        credentials: "",
        designation: "Faculty",
        slug: "dr-prasanth-s",
      },
    ],
    conditionsTreated: [
      "Breast cancer",
      "Lung cancer",
      "Colorectal cancer",
      "Gastrointestinal cancers",
      "Head and neck cancers",
      "Gynecological cancers",
      "Genitourinary cancers",
      "Sarcomas",
      "Central nervous system tumors",
      "Neuroendocrine tumors",
      "Multiple myeloma",
      "Plasma cell disorders",
      "Acute leukemias (Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia)",
      "Chronic leukemias (Chronic Lymphoblastic Leukemia, Chronic Myeloid Leukemia)",
      "Hodgkin lymphoma",
      "Non-Hodgkin lymphoma",
      "Myelodysplastic syndromes",
      "Myeloproliferative neoplasms",
      "Solid tumors in children and adolescents",
      "Pediatric leukemias and lymphomas",
      "Pediatric brain tumors",
      "Relapsed and refractory cancers",
      "Hematopoietic stem cell transplantation",
      "Cellular therapies including CAR-T cell therapy",
      "Supportive oncology care",
      "Cancer survivorship care",
      "Palliative and end-of-life care",
    ],
    treatmentOptions: [
      "Chemotherapy",
      "Targeted therapy",
      "Immunotherapy",
      "Hormonal therapy",
      "Oral cancer therapies",
      "Hematopoietic stem cell transplantation",
      "Cellular therapies including CAR-T cell therapy",
      "Precision medicine–based treatment",
      "Supportive and symptom-directed care",
      "Palliative care",
      "Survivorship care and long-term follow-up",
    ],
    preventiveMeasures: [
      "Maintaining a healthy lifestyle with a balanced diet, regular physical activity, adequate sleep, and avoidance of tobacco and excessive alcohol can help reduce the risk of several cancers.",
      "Participating in recommended cancer screening programs, such as breast, cervical, colorectal, and oral cancer screening, helps detect cancer at an early and more treatable stage.",
      "Seeking medical attention promptly for warning signs such as unexplained weight loss, persistent fever, unusual bleeding, new lumps, prolonged pain, or non-healing sores can lead to earlier diagnosis.",
      "For children, early evaluation of persistent symptoms like prolonged fever, pallor, recurrent infections, unexplained bruising, bone pain, or swelling is important for timely detection of childhood cancers.",
      "During cancer treatment, patients should follow infection-prevention practices, including good hand hygiene, safe food habits, and timely reporting of fever or other symptoms to the care team.",
      "Adhering to prescribed treatments, attending follow-up visits, and maintaining open communication with the healthcare team support better outcomes and recovery.",
      "Emotional well-being, adequate nutrition, physical activity as advised, and family support are essential components of self-care during and after cancer treatment.",
    ],
    whenToVisit: [
      "Unexplained weight loss or loss of appetite",
      "Persistent fever without an obvious cause",
      "New or persistent lump or swelling anywhere in the body",
      "Unusual or abnormal bleeding or bruising",
      "Persistent pain that does not improve",
      "Chronic fatigue or weakness",
      "Changes in bowel or bladder habits lasting more than two weeks",
      "Persistent cough, breathlessness, or chest discomfort",
      "Non-healing ulcers or sores",
      "Difficulty swallowing or persistent hoarseness",
      "Recurrent infections or prolonged illness",
      "Severe anemia or abnormal blood test results",
      "Bone pain or unexplained fractures",
      "Headaches with vomiting, vision changes, or seizures",
      "Unexplained pallor, bruising, or bleeding in children",
      "Persistent fever, bone pain, or swelling in children",
    ],
    achievements: [
      "University Gold Medal in DM Medical Oncology Examination – 2024",
      "ISMPO Gold Medal – 2024 – Indian Society of Medical & Paediatric Oncology",
      "ISMPO Gold Medal – 2025",
      "Best Postgraduate Institute Award – 2025 – ICON",
      "Chennai Population-Based Childhood Cancer Registry established – 2022",
      "Tamil Nadu Population-Based Childhood Cancer Registry expanded – 2024",
      "Pioneering multicenter collaborative clinical trials",
      "Leadership in childhood cancer registration and capacity building",
      "Development of protocol-based, resource-adapted oncology care models",
    ],
    legacy: [
      "First DM Medical Oncology program in the country, playing a foundational role in training generations of medical oncologists who have shaped cancer care nationally and internationally.",
      "First dedicated pediatric oncology unit in India established in 1960, marking a historic milestone in recognizing the unique needs of children with cancer.",
      "Alumni leading major cancer centers, academic institutions, and national programs across India and abroad.",
      "Pioneered multicenter collaborative clinical trials, fostering a culture of research, collaboration, and innovation.",
      "Contributed to practice-changing evidence, strengthened national and international research networks.",
    ],
  },

  // ── 3. Radiology ──────────────────────────────────────────────────────
  {
    slug: "radiology",
    category: "diagnostic",
    title: "Radiology",
    metaDescription:
      "Diagnostic & Interventional Radiology at Cancer Institute WIA, Chennai — 1.5T MRI, 128-slice CT, mammography, image-guided biopsy & interventional procedures.",
    tagline: "The Department of Radiology focuses on advanced imaging and image-guided diagnostic and therapeutic procedures for accurate cancer diagnosis, staging, and treatment planning.",
    overview: [
      "The Department of Radiology focuses on advanced imaging and image-guided diagnostic and therapeutic procedures for accurate cancer diagnosis, staging, and treatment planning.",
      "The Department of Radiology specializes in medical imaging that helps detect, diagnose, and monitor cancer. Using technologies such as X-rays, mammography, ultrasound, CT and MRI, we provide detailed images and expert reports that guide doctors in making accurate treatment decisions.",
      "Radiology plays a crucial role in every stage of cancer care — from early detection and diagnosis to treatment planning and follow-up. Our radiologists work closely with medical oncologists, surgical oncologists, radiation oncologists, and other specialists to ensure coordinated and timely patient care.",
      "What sets our department apart is our comprehensive imaging services, including state-of-the-art MRI, advanced mammography techniques such as tomosynthesis and contrast-enhanced mammography, along with image-guided biopsies and interventional procedures. We combine precision technology with patient-centered care to ensure safety, comfort, and diagnostic accuracy.",
    ],
    hod: {
      name: "Dr. M. Karthigaiselvi",
      credentials: "MBBS, DMRD, DNB, FRCR(UK)",
      designation: "Senior Consultant and Head, Department of Radiology",
      message:
        "The Department of Radiology is committed to delivering accurate, timely, and safe imaging services that form the foundation of effective cancer care. Working in close collaboration with medical, surgical, and radiation oncology teams, the department plays a vital role in diagnosis, staging, treatment planning, and follow-up.\nWith a strong emphasis on precision, safety, and patient comfort, the team integrates advanced imaging technology with evidence-based practice to support the Cancer Institute's mission of comprehensive and compassionate cancer care.",
    },
    contactEmail: "radiology@cancerinstitutewia.org",
    spoc: "Mr. Vikram Babu N.C",
    experts: [
      {
        name: "Dr. M. Karthigaiselvi",
        credentials: "MBBS, DMRD, DNB, FRCR(UK)",
        designation: "Senior Consultant Radiologist and H.O.D",
        slug: "dr-karthigaiselvi-murugesan",
      },
      {
        name: "Dr. R. Thanraj",
        credentials: "MBBS, DMRD",
        designation: "Consultant Radiologist",
      },
      {
        name: "Dr. Pushparajan S.",
        credentials: "MBBS, DMRD, DNB",
        designation: "Interventional Radiologist",
      },
      {
        name: "Dr. Anusuya",
        credentials: "MBBS, DMRD",
        designation: "Consultant Radiologist",
      },
      {
        name: "Dr. Swapna",
        credentials: "MBBS, DNB",
        designation: "Consultant Radiologist",
      },
      {
        name: "Dr. Revathy P.",
        credentials: "MBBS, MD",
        designation: "Consultant Radiologist",
      },
      {
        name: "Dr. Vignesh M.",
        credentials: "MBBS, MD",
        designation: "Part-Time Consultant Radiologist",
      },
      {
        name: "Dr. Jagadesh K.",
        credentials: "MBBS, MD",
        designation: "Senior Resident",
      },
      {
        name: "Dr. S. Ranjith Kumar",
        credentials: "MBBS, DNB",
        designation: "Senior Resident",
      },
    ],
    diagnosticServices: [
      {
        category: "MRI & CT Imaging",
        services: [
          "MRI (Magnetic Resonance Imaging) – Detailed imaging of the brain, spine, breast, abdomen, pelvis, head and neck, extremities, and bone and soft tissue tumors",
          "CT Scan (Contrast and Non-Contrast) – Detects tumors and evaluates cancer spread in the chest, abdomen, and pelvis, includes CT angiography, pulmonary angiography, coronary angioplasty support imaging",
        ],
      },
      {
        category: "X-ray & Ultrasound",
        services: [
          "X-ray – Identifies bone tumors and mimics, fractures, and lung metastasis and other abnormalities",
          "Ultrasonography (USG) – Evaluates abdominal organs, pelvis, thyroid, and soft tissues for pathologies",
          "Transvaginal Ultrasound (TVS) – Detailed imaging of uterus and ovaries",
          "Transrectal Ultrasound (TRUS) – Imaging of the prostate and rectal region",
          "Thyroid Ultrasound – Evaluation of thyroid nodules and swellings",
        ],
      },
      {
        category: "Mammography",
        services: [
          "Mammography – Early detection of breast cancer",
          "Digital Breast Tomosynthesis (Tomo) – 3D mammography for improved detection of small breast lesions",
          "Contrast-Enhanced Mammography (CE Mammography) – Highlights suspicious breast lesions using contrast dye",
        ],
      },
      {
        category: "Image-Guided Procedures",
        services: [
          "Stereotactic Biopsy – Image-guided breast biopsy and precise tissue sampling for microcalcifications",
          "Ultrasound-Guided Procedures – Includes biopsies, FNAC, aspirations, thoracocentesis, paracentesis, pigtail catheter placement",
          "Vacuum-Assisted Biopsy (VAB) – Removes small lesions in toto for accurate sampling and diagnosis",
          "CT-Guided Procedures – Biopsy, drainage, and interventional procedures guided by CT imaging",
          "Fiducial Marker Placement – Placement of markers to guide chemo and radiation therapy",
          "J-Wire Localization – Pre-surgical localization of breast lesions",
        ],
      },
      {
        category: "Interventional Radiology",
        services: [
          "Cathlab Diagnostic Procedures – Image-guided vascular and non-vascular procedures",
          "Cathlab Therapeutic Procedures – Minimally invasive treatments including tumor embolization, microwave ablation, nephrostomy, stent placements",
        ],
      },
    ],
    therapeuticServices: [
      {
        name: "Image-Guided Biopsies",
        description: "Precise tissue sampling using real-time ultrasound, CT, or stereotactic guidance for accurate cancer diagnosis without open surgery.",
      },
      {
        name: "Tumor Embolization",
        description: "Minimally invasive blocking of blood supply to tumors, reducing tumor size and controlling bleeding.",
      },
      {
        name: "Microwave Ablation",
        description: "Targeted destruction of tumors using microwave energy, particularly for liver and lung metastases.",
      },
      {
        name: "Drainage Procedures",
        description: "Image-guided drainage of fluid collections, abscesses, and pleural effusions.",
      },
      {
        name: "Stent Placements",
        description: "Insertion of stents to open blocked blood vessels, bile ducts, or other tubular structures.",
      },
      {
        name: "Vascular Access Procedures",
        description: "Placement of chemotherapy ports, PICC lines, and other vascular access devices for cancer treatment.",
      },
    ],
    equipment: [
      {
        name: "MRI Scanner – 1.5 Tesla Siemens Sempra",
        description: "High-resolution imaging for detailed anatomical and functional assessment.",
      },
      {
        name: "CT Scanner – Two 128-slice GE Revolution",
        description: "High resolution multi-detector CT scanners for advanced cross-sectional imaging.",
        badge: "Dual Scanner",
      },
      {
        name: "Digital X-ray System",
        description: "Quick imaging for chest and bone evaluation.",
      },
      {
        name: "Ultrasound Systems",
        description: "Six state-of-the-art 2D and 3D ultrasound systems for real-time imaging.",
      },
      {
        name: "Digital Mammography Unit with 3D Tomosynthesis",
        description: "Breast cancer screening and diagnosis with improved detection of early breast cancer.",
      },
      {
        name: "Contrast-Enhanced Mammography System",
        description: "Functional breast imaging for better lesion characterization.",
      },
      {
        name: "Stereotactic Biopsy System",
        description: "Precise breast tissue sampling.",
      },
      {
        name: "Vacuum-Assisted Biopsy (VAB) Device",
        description: "Advanced tissue sampling for accurate diagnosis.",
      },
      {
        name: "Cathlab Suite",
        description: "Diagnostic and therapeutic image-guided vascular procedures.",
      },
    ],
    achievements: [
      "NATBOARD Recognition for DNB Radiology Training Programme",
      "ICRI Fellowship in Onco-Imaging – 2024",
      "ICRI Fellowship in Breast Imaging – 2024",
      "1st Prize – Oral Paper Presentation – 2024 – National IRIA Conference, Vijayawada",
      "Prize Winner – RITE National Conference – 2025",
      "Multiple paper and poster presentations at state, national, and international radiology conferences",
      "Publications in peer-reviewed national and international journals",
    ],
    legacy: [
      "The Department of Radiology has been a vital component of the Institute's cancer care services since its formative years.",
      "1960s: Early adoption of mammography, contributing to improved early breast cancer detection in India.",
      "Evolved into a comprehensive imaging and interventional specialty, incorporating ultrasound, CT, MRI, advanced mammography techniques, and image-guided diagnostic and therapeutic procedures.",
      "Supported academic training and multidisciplinary tumor board discussions, reinforcing commitment to precision diagnosis, patient safety, and collaborative cancer care.",
    ],
  },

  // ── 4. Gynaecological Oncology ────────────────────────────────────────
  {
    slug: "gynaecological-oncology",
    category: "clinical",
    title: "Gynaecological Oncology",
    metaDescription:
      "Gynaecological Oncology at Cancer Institute (WIA), Chennai — comprehensive care for cervical, ovarian, and uterine cancers with robotic surgery and HIPEC.",
    tagline: "Comprehensive Care for the Whole Woman Through Every Stage of Gynaecological Cancer from Prevention to Palliation.",
    overview: [
      "Comprehensive Care for the Whole Woman Through Every Stage of Gynaecological Cancer from Prevention to Palliation.",
      "The Department of Gynaecological Oncology provides comprehensive care across the entire spectrum of gynaecological cancers, encompassing cancer awareness, prevention, screening, diagnosis, treatment, follow-up, survivorship, and palliation. The department manages cancers of the cervix, ovary, uterus, vulva, vagina, and other related gynaecological malignancies through a structured and evidence-based approach.",
      "Gynaecological oncologists play a central and coordinating role in delivering this continuum of care. Working closely with medical oncology, radiation oncology, pathology, radiology, anesthesiology, nursing, and palliative care teams, the department ensures integrated, multidisciplinary management.",
      "Care for women with gynaecological cancers presents unique clinical, emotional, and social challenges. A diagnosis of gynaecological cancer often impacts not only physical health but also body image, fertility, sexuality, family roles, and psychosocial well-being. An exclusive gynaecological oncology service provides the time, focus, and depth required to address these complex aspects.",
    ],
    hod: {
      name: "Dr. Ujwala Prakash Wakpaijan",
      credentials: "MD, Fellowship in Gynaecological Oncology (TMH Mumbai), Da Vinci Certified Robotic Console Surgeon, CCEPC, Six Sigma Certification (USA)",
      designation: "Associate Professor & Head of the Department",
      message:
        "Our department is committed to providing compassionate, ethical, and evidence-based care to women with gynaecological cancers. Through teamwork, research, and patient-centred care, we strive to achieve the best possible outcomes for our patients.",
    },
    contactEmail: "ujwala@cancerinstitutewia.org",
    spoc: "Dr (Maj) Jayashree Natarajan",
    experts: [
      {
        name: "Dr. Ujwala Prakash Wakpaijan",
        credentials: "MD, Fellowship in Gynaecological Oncology (TMH Mumbai), Da Vinci Certified Robotic Console Surgeon, CCEPC",
        designation: "Associate Professor & Head of the Department",
        slug: "dr-ujwala-prakash-wakpaijan",
      },
      {
        name: "Dr (Maj) Jayashree Natarajan",
        credentials: "MS (Obstet & Gynae), DNB (Obstet & Gynae), Post Doctoral Fellowship in Gynaecological Oncology, MCh Gynaecological Oncology (AIIMS New Delhi), CCEPC",
        designation: "Associate Professor, Academic and Research In-Charge",
        slug: "dr-jayashree-n",
      },
      {
        name: "Dr. Amy Jose",
        credentials: "MS (Obstet & Gynae, Gold Medalist), DNB (Obstet & Gynae), Post Doctoral Fellowship in Gynaecological Oncology (CMC Vellore), CCEPC, FMAS, DMAS",
        designation: "Assistant Professor",
        slug: "dr-amy-jose",
      },
      {
        name: "Dr. Kavin Nilavu L",
        credentials: "MBBS, MD Obstetrics & Gynaecology (PGIMER Chandigarh), MCh Gynaecological Oncology, CCEPC",
        designation: "Assistant Professor",
        slug: "dr-kavin-nilavu-l",
      },
    ],
    conditionsTreated: [
      "Cervical Cancer",
      "Ovarian and Primary Peritoneal Cancer",
      "Endometrial (Uterine) Cancer",
      "Vulvar Cancer",
      "Vaginal Cancer",
      "Gestational Trophoblastic Disease",
      "Paediatric age group with Gynaecological cancers",
      "Precancerous conditions of the cervix and vulva",
    ],
    treatmentOptions: [
      "Surgery for gynaecological cancers as per the standard of care",
      "Minimally invasive cancer surgery by advanced laparoscopy/Da Vinci Xi robotic system",
      "Radical hysterectomy and staging procedures",
      "Cytoreductive surgery for ovarian cancer",
      "Sentinel lymph node mapping",
      "Hyperthermic intraperitoneal chemotherapy (HIPEC) for advanced ovarian cancer",
      "Hysteroscopy and hysteroscopic procedures",
      "Treating precancerous conditions (CIN 1/2/3) with conservative approaches (LEEP/cone biopsy)",
      "Chemotherapy (in coordination with Medical Oncology)",
      "Radiation therapy (in coordination with Radiation Oncology)",
      "Combined modality treatment (chemoradiation)",
      "Palliative and supportive care",
      "Psycho-oncology services",
      "Hereditary Cancer Clinic and familial cancer counselling",
    ],
    preventiveMeasures: [
      "Avoid tobacco use in all forms.",
      "Maintain a healthy weight and active lifestyle.",
      "Follow a balanced diet rich in fruits and vegetables.",
      "Regular HPV test once every 5 years or PAP smear for women aged 21–65 years.",
      "Clinical Breast Examination for women above 30 years.",
      "Mammography for women above 40 years or earlier in high-risk women.",
      "Watch for abnormal vaginal discharge (blood-stained or foul-smelling).",
      "Watch for postcoital bleeding, intermenstrual bleeding, postmenopausal bleeding.",
      "Watch for persistent pelvic or abdominal pain.",
      "Watch for non-healing ulcers or growths in the genital area.",
    ],
    whenToVisit: [
      "Any warning symptoms such as abnormal vaginal discharge, postcoital or postmenopausal bleeding",
      "For cancer screening and HPV vaccination",
      "If any screening test done elsewhere is abnormal",
      "Persistent pelvic or abdominal pain",
      "Non-healing ulcers or growths in the genital area",
    ],
    achievements: [
      "Long-standing contribution to gynaecological cancer care in India for more than 7 decades",
      "Active involvement in academic training and research",
      "Contributing to publications of national relevance",
      "Participation in gynaecological cancer awareness and prevention activities, addressing more than 10,000 girls and women in the target age group in the last one year",
      "Striving to achieve WHO call for cervical cancer elimination goals 90-70-90",
      "Implementing the free HPV vaccination program at Villupuram and Chennai Districts, providing more than 6,000 doses of HPV vaccine",
      "Active collaboration with the State Government for planning and implementation of HPV vaccination programs",
      "Education program for strengthening cervical cancer elimination goals",
    ],
    legacy: [
      "The legacy is deeply rooted in the vision and lifelong dedication of Dr. Shantha V, whose commitment to cancer care—especially for women—laid the foundation for compassionate, ethical, and accessible oncology services.",
      "Truth, transparency, and ethical decision-making in patient care form the cornerstone of the department's philosophy.",
      "Every patient is treated with dignity, humanity, and grace, ensuring that clinical excellence is matched with empathy and respect.",
      "This enduring legacy continues to guide the department in its mission to serve women with gynaecological cancers and to train future leaders in oncology.",
    ],
  },

  // ── 5. Anaesthesia & Pain Management ──────────────────────────────────
  {
    slug: "anaesthesia-pain",
    category: "support",
    title: "Anaesthesia & Pain Management",
    metaDescription:
      "Onco-Anaesthesia, Critical Care & Pain Management at Cancer Institute WIA, Chennai — 24/7 ICU, robotic surgery anaesthesia, and interventional pain management.",
    tagline: "Department of Anaesthesia prioritises comprehensive, precise, personalised, patient-centric care from preprocedural phase through recovery and rehabilitation: focusing on safety, comfort and enhanced recovery adhering to global standards.",
    overview: [
      "Department of Anaesthesia prioritises comprehensive, precise, personalised, patient-centric care from preprocedural phase through recovery and rehabilitation: focusing on safety, comfort and enhanced recovery adhering to global standards.",
      "The Department of Anaesthesia offers comprehensive care for oncology patients, encompassing a diverse range of services, including pre-surgical patient assessment and optimization, anaesthesia administration, critical care support, acute pain management, and interventional pain management.",
      "Our patient care goes beyond anaesthetising patients for surgery inside the Operating room. This involves carefully tailoring the anaesthesia approach to the patient's specific health needs, factoring in the potential risks and complications during complex cancer procedures done for various cancer types.",
      "Our involvement starts by keeping patients calm and pain free, aiding the expert team arrive at an early diagnosis. By caring for the critically ill in the ICU, till their post operative rehabilitation, we extend our constant support, across the entirety of the patient's cancer journey. We also address the chronic cancer pain which occurs in survivors, after few months by cutting edge intervention modalities.",
    ],
    hod: {
      name: "Dr Punitha C",
      credentials: "DNB(Anes), DESA, EDPM",
      designation: "Associate Professor & Head of Department",
      message:
        "Our department's vision is to provide excellent perioperative care to all patients in line with the Institute's motto of \"Service to all\". The mission is to administer evidence-based, secure, and all-encompassing anaesthesia care to each and every patient, driven by our unwavering dedication to inter-professional communication and pioneering research endeavours.",
    },
    contactEmail: "anesthesia@cancerinstitutewia.org",
    spoc: "Dr Aravind Narayanan",
    experts: [
      {
        name: "Dr Punitha C",
        credentials: "DNB(Anes), DESA, EDPM",
        designation: "Head of the Department",
      },
      {
        name: "Dr Subramanian",
        credentials: "MD",
        designation: "Associate Professor",
        slug: "dr-subramanian-h-a",
      },
      {
        name: "Dr Aravind Narayanan",
        credentials: "MD, DESA, FCAI",
        designation: "Associate Professor",
        slug: "dr-aravind-narayanan",
      },
      {
        name: "Dr Nivedhyaa",
        credentials: "MD",
        designation: "Associate Professor",
        slug: "dr-nivedhyaa-srinivasaraghavan",
      },
      {
        name: "Dr Nairita Das",
        credentials: "MD",
        designation: "Assistant Professor",
        slug: "dr-nairita-das",
      },
      {
        name: "Dr Kausalya V",
        credentials: "MD",
        designation: "Assistant Professor",
        slug: "dr-kausalya-v",
      },
      {
        name: "Dr Poorna MS",
        credentials: "MD, FIPM",
        designation: "Assistant Professor",
        slug: "dr-poorna-m-s",
      },
      {
        name: "Dr Hariesh A",
        credentials: "MD",
        designation: "Assistant Professor",
        slug: "dr-a-hariesh",
      },
      {
        name: "Dr Sahithya",
        credentials: "MD, DESA",
        designation: "Assistant Professor",
      },
      {
        name: "Dr Prita Raj",
        credentials: "MD",
        designation: "Assistant Professor",
        slug: "dr-pritha-raj",
      },
      {
        name: "Dr Priyadarshini R",
        credentials: "MD, DrNB, EDIC",
        designation: "Intensivist",
      },
      {
        name: "Dr Vallary Gowtham Krishna",
        credentials: "MD",
        designation: "Assistant Professor",
      },
      {
        name: "Dr Priyadarshini R",
        credentials: "MD",
        designation: "Assistant Professor",
      },
      {
        name: "Dr Karthikeyan",
        credentials: "MD",
        designation: "Assistant Professor",
      },
    ],
    missionPhilosophy: [
      "Our department's vision is to provide excellent perioperative care to all patients in line with the Institute's motto of \"Service to all\".",
      "The mission is to administer evidence-based, secure, and all-encompassing anaesthesia care to each and every patient.",
      "Driven by our unwavering dedication to inter-professional communication and pioneering research endeavours.",
    ],
    services: [
      "Pre-Anesthesia patient assessment and optimization",
      "Anaesthesia for major oncologic surgeries (HIPEC, HITHOC, PIPAC, ILP, robotic surgeries)",
      "Special neurosurgical procedures (awake craniotomy and intraoperative neuromonitoring)",
      "Procedural sedation (Brachytherapy and paediatric radiotherapy)",
      "Paediatric sedation (diagnostic and therapeutic procedures)",
      "Anaesthesia for interventional radiology procedures",
      "Anaesthesia for interventional pulmonology procedures",
      "Anaesthesia for medical gastroenterology procedures",
      "Sedation for diagnostic imaging and biopsies",
      "Interventional pain management procedures (celiac plexus block, ganglion impar block, epidural steroid injections)",
      "Acute Pain services: Imaging/Robotic arm assisted Interventional Pain procedures",
    ],
    facilities: [
      "Advanced Anaesthesia Workstation",
      "Multipara monitor",
      "BIS/Entropy monitoring",
      "Advanced Hemodynamic monitor",
      "Fibreoptic Bronchoscopy",
      "Video Laryngoscope",
      "TCI/TIVA Pump",
      "USG for regional anaesthesia",
      "Infusion pump",
      "NMT (Neuromuscular Transmission monitor)",
      "Mechanical ventilators",
      "HFNC",
      "BIPAP",
      "ABG analyzer",
      "Forced Air warming Devices",
      "Fluid Warming cabinet",
    ],
    achievements: [
      "Organised Onco Anaesthesia National Conference – 2025",
      "Annual Onco Anesthesia CME – OASyS 2022 & 2023",
      "Airway workshop – 2024",
      "Pain and POCUS workshop – 2024, 2025",
      "Communication Workshop – 2025",
      "Two faculty members are VAST instructors",
      "Faculty invited to national and international anaesthesia conferences (Indian Cancer Congress, ISACON, ISSPCON, SOAPCCON, WAD)",
      "Poster presentations at WFSA 2024, NAC 2025, ISSPCON, ISACON and Royal College of Psychiatrist International Congress 2021",
      "Authors of oncoanaesthesia textbooks",
      "Quality Improvement Project in collaboration with NCG and Stanford University",
      "Pioneered Oncoanaesthesia super speciality training through National Board of Examinations from 2022",
      "University accredited OT and Anesthesia Technologist course initiated from 2013",
    ],
    legacy: [
      "The inception of the Department of Anaesthesia dates back to the initial decade of establishment of the institute, marking the beginning of a remarkable journey.",
      "Throughout the last seven decades, this department has undergone a phenomenal metamorphosis — from a solitary operation theatre manned by a single anaesthetist to nine major multispecialty theatres with a passionate cohort of anaesthesia professionals.",
    ],
  },

  // ── 6. Nuclear Medicine ───────────────────────────────────────────────
  {
    slug: "nuclear-medicine",
    category: "diagnostic",
    title: "Nuclear Medicine & Molecular Imaging",
    metaDescription:
      "Nuclear Medicine at Cancer Institute WIA, Chennai — PET-CT imaging, bone scans, thyroid cancer treatment, PRRT, Lu-177 PSMA therapy. Established 1957.",
    tagline: "Nuclear medicine focuses on diagnosing and treating cancer and other diseases using radioactive substances.",
    overview: [
      "Nuclear medicine focuses on diagnosing and treating cancer and other diseases using radioactive substances.",
      "Nuclear medicine is a specialized branch of radiology using small amounts of radioactive materials, or radiopharmaceuticals, to diagnose, manage, and treat various diseases, including cancer and heart disease, by evaluating molecular and physiological function. It offers early detection of illnesses by imaging internal bodily processes rather than just anatomy, with procedures like PET and SPECT scans.",
      "The department helps in initial diagnosis and staging of cancers, treatment planning and response assessment. It provides theranostic services for the treatment of thyroid cancer, prostate cancer, and neuroendocrine tumors, as well as diagnostic services for evaluation of organ function.",
    ],
    hod: {
      name: "Dr. Ashok Kumar",
      credentials: "MD, DNB, FEBNM, RSO",
      designation: "Consultant & HOD, Department of Nuclear Medicine",
      message:
        "As the Head of the Department of Nuclear Medicine, I carry forward a legacy that began in 1957 when our founding pioneer, Dr. V.M. Sivaramakrishnan, established one of India's first nuclear medicine centers. Today, we honor that vision by combining our six decades of experience with cutting-edge molecular imaging and therapeutic technologies. Our department stands at the unique intersection of physics, chemistry, and medicine—using the power of radiopharmaceuticals to see what others cannot see and treat what others cannot reach. Every nuclear medicine scan, every radionuclide therapy, and every diagnostic procedure we perform is driven by one commitment: to provide our patients with the most accurate diagnosis and effective treatment possible. I am privileged to lead a dedicated team of physicians, physicists, and technologists who work tirelessly to ensure that each patient receives personalized, evidence-based care with compassion and dignity.",
    },
    contactEmail: "nuclearmedicine@cancerinstituteadyar.org",
    spoc: "Dr. Ashok Kumar",
    experts: [
      {
        name: "Dr. R. Krishnakumar",
        credentials: "DMRT, MD(RT), DRM, PhD",
        designation: "Professor, Department of Nuclear Medicine",
        slug: "dr-r-krishnakumar",
      },
      {
        name: "Dr. Ashok Kumar",
        credentials: "MD, DNB, FEBNM, RSO",
        designation: "Consultant & HOD, Department of Nuclear Medicine",
        slug: "dr-ashok-kumar",
      },
    ],
    diagnosticServices: [
      {
        category: "PET & Molecular Imaging",
        services: [
          "PET-CT Scan (F-18 FDG) – Detects cancer spread throughout the body and monitors treatment response, molecular guided biopsy",
          "SPECT Imaging – Provides three-dimensional functional imaging of organs",
        ],
      },
      {
        category: "Bone & Organ Scans",
        services: [
          "Bone Scan (Tc-99m) – Identifies bone metastases and skeletal abnormalities",
          "Thyroid Scan (I-131) – Evaluates thyroid function and detects thyroid cancer",
          "Hepatobiliary Scan (Tc-99m) – Assesses liver and bile duct function",
          "Renal Scan (Tc-99m DTPA/MAG3) – Evaluates kidney function and urinary tract",
        ],
      },
      {
        category: "Specialized Scans",
        services: [
          "Gamma Camera Imaging – Visualizes organ function and tumor localization",
          "Cardiac Imaging – Assesses heart function before chemotherapy",
          "Lymphoscintigraphy – Maps lymphatic drainage for surgical planning",
          "Tumor Markers with Radionuclides – Detects specific cancer types using targeted tracers",
        ],
      },
    ],
    therapeuticServices: [
      {
        name: "Radioiodine Therapy (I-131)",
        description: "Treatment for thyroid cancer and hyperthyroidism.",
      },
      {
        name: "PRRT (Peptide Receptor Radionuclide Therapy)",
        description: "Targeted therapy for neuroendocrine tumors.",
      },
      {
        name: "Radium-223 Therapy",
        description: "Treatment for bone metastases in prostate cancer.",
      },
      {
        name: "Lu-177 PSMA Therapy",
        description: "Advanced treatment for metastatic prostate cancer.",
      },
      {
        name: "Samarium-153 Therapy",
        description: "Pain relief from widespread bone metastases.",
      },
      {
        name: "Selective Internal Radiation Therapy (SIRT)",
        description: "Targeted liver cancer treatment.",
      },
      {
        name: "Radiosynovectomy",
        description: "Relief of joint pain from cancer.",
      },
    ],
    equipment: [
      {
        name: "Gamma Camera",
        description: "SPECT imaging for nuclear medicine diagnostics and organ function evaluation.",
      },
      {
        name: "PET-CT Scanner",
        description: "State-of-the-art molecular imaging for cancer staging and response assessment.",
        badge: "Advanced Imaging",
      },
      {
        name: "Gamma Probe",
        description: "Intraoperative detection of sentinel lymph nodes and radioactive lesions.",
      },
      {
        name: "Gamma Ray Spectroscopy",
        description: "Advanced radiation measurement and quality assurance equipment.",
      },
      {
        name: "Radiation Protection Equipment",
        description: "Multiple radiation protection devices ensuring safety of patients, staff, and visitors.",
      },
      {
        name: "Precision Theranostics Facility",
        description: "Dedicated suite for targeted radionuclide therapy procedures.",
      },
    ],
    achievements: [
      "Established November 1957 – One of India's first nuclear medicine departments",
      "Pioneered use of radioactive iodine and gold before national isotope supply began (1961)",
      "Influenced the establishment of Atomic Energy Establishment's Isotope Division",
      "Groundbreaking research in radioisotope applications and metabolic pathways by Dr. V.M. Sivaramakrishnan",
      "First centre to start I-131 therapy in Tamil Nadu",
      "Treated thousands of cancer patients with nuclear medicine over 65+ years",
    ],
    legacy: [
      "1957: Department established under the visionary leadership of Dr. V.M. Sivaramakrishnan — operations began even before the Atomic Energy Establishment at Trombay started their Isotope Division.",
      "Early years: Imported radioactive iodine and radioactive gold from Harwell, United Kingdom, and routinely used them for diagnosis and treatment before national isotope supply began in 1961.",
      "Dr. Sivaramakrishnan initiated major research programs involving various radioisotopes with chelating agents to study metabolic pathways in biological systems.",
      "The department has witnessed the evolution from simple radioisotope applications to sophisticated molecular imaging and advanced targeted radionuclide therapies.",
      "Trained generations of nuclear medicine physicians and technologists who now serve across India and beyond.",
    ],
  },

  // ── 7. Quality Control ────────────────────────────────────────────────
  {
    slug: "quality-control",
    category: "support",
    title: "Quality Control",
    metaDescription:
      "Quality Control at Cancer Institute WIA, Chennai — NABH accredited since 2019, 639 quality objectives, comprehensive patient safety and quality assurance.",
    tagline: "Compliance, Continuous Improvement leading to Excellence & safeguarding Quality across every level of patient care.",
    overview: [
      "Compliance, Continuous Improvement leading to Excellence & safeguarding Quality across every level of patient care.",
      "Cancer Institute (WIA) believes that Clinical Excellence and Delivery of High Quality of Care are fundamental criteria of a successful destination of choice for Cancer treatment in the country. Implementation of clinical practice guidelines based on the best available scientific evidence guidelines, together with measuring quality monitors and indicators are ongoing processes to ensure clinical excellence.",
      "Quality Management at Cancer Institute (WIA) meets the requirements of NABH Quality Standards, which provides guidelines to healthcare administrators and also facilitates the overall hospital functions to remain exceptional and patient-friendly.",
      "The Cancer Institute (WIA) has been NABH accredited since July 2019, having attained this coveted status in recognition of its commitment to quality and patient safety. The Institute remains steadfast in its pursuit of sustaining this accreditation while continuously striving to achieve excellence.",
    ],
    hod: {
      name: "Mrs. V. Varalakshmi",
      credentials: "",
      designation: "Head of Department",
      message:
        "At the Cancer Institute (WIA), we understand that every patient who walks through our doors brings not just a medical need, but hope, courage, and trust. Quality, for us, means honouring that trust through safe, compassionate, and respectful care at every step of the patient journey.\nFor us Quality is both a responsibility we lead and a promise we make to every patient and family who entrust us with their care. We recognize that behind every process and protocol is a human life, and our vision is to ensure that safety, compassion, and dignity are consistently reflected in every patient experience.\nThe Quality Department strives in building a culture of continuous improvement, working closely with clinical and support teams to strengthen systems, standardize best practices, and enhance patient safety. Through data-driven monitoring, learning from outcomes, and listening to patient voices, we continuously work towards improvement.\nOur promise is unwavering—to stand beside our patients and families with care that is not only clinically excellent, but also humane and heartfelt.",
    },
    contactEmail: "nabhoffice@cancerinstitutewia.org",
    spoc: "Jayapradha T",
    experts: [
      {
        name: "Mrs. V. Varalakshmi",
        credentials: "",
        designation: "Head of Department",
      },
      {
        name: "Dr. Deepa Devi G",
        credentials: "",
        designation: "Faculty",
        slug: "dr-deepa-devi-g",
      },
      {
        name: "Dr. Rama R",
        credentials: "",
        designation: "Faculty",
        slug: "dr-rama-r",
      },
      {
        name: "Dr. R. Swaminathan",
        credentials: "",
        designation: "Faculty",
        slug: "dr-r-swaminathan",
      },
      {
        name: "Dr. R. Sabitha",
        credentials: "",
        designation: "Faculty",
        slug: "dr-r-sabitha",
      },
    ],
    missionPhilosophy: [
      "Quality is a starting point of a journey called 'EXCELLENCE' and the road to Excellence is paved with continuous improvement.",
      "We believe in the six dimensions to Quality Healthcare: Safe, Effective, Efficient, Equitable, Timely and Patient Centered.",
      "In the implementation of the 639 objectives, with total commitment and the unwavering urge to achieve excellence, there are no shortcuts.",
      "Quality is a never ending cyclical process of setting, achieving and resetting the goals for continuous improvement.",
    ],
    services: [
      "Development and implementation of policies, procedures, and protocols",
      "Safe medical and nursing practices",
      "Practice of evidence-based medicine",
      "Safe medication practices",
      "Infection control guidelines",
      "Identification, reporting, and prevention of errors",
      "Monitoring Key Performance Indicators",
      "Surgical case review",
      "Medical record review",
      "Internal audits",
      "Clinical audits, Nursing Audits and Prescription Audits",
      "Medication management (includes medication errors)",
      "Monitoring antibiotic use",
      "Diagnostic Services Quality Assurance",
      "Respect and protection of Patient Rights",
      "Monitoring Patient Experience and Patient Reported Outcome",
      "Encouraging patient and family participation in treatment process and safety",
      "Continuous on-job training on quality and safety drills",
      "Safety management activities",
    ],
    accreditations: [
      {
        name: "NABH",
        description: "National Accreditation Board for Hospitals and Healthcare Providers — comprehensive hospital quality standards covering patient safety, clinical care, and governance.",
        status: "Accredited since July 2019",
      },
      {
        name: "NABL",
        description: "National Accreditation Board for Testing and Calibration Laboratories — quality standards for diagnostic laboratory services.",
        status: "Laboratory accredited",
      },
    ],
    qualityDimensions: [
      {
        name: "Safe",
        description: "Avoiding harm to patients from the care that is intended to help them.",
      },
      {
        name: "Effective",
        description: "Providing services based on scientific knowledge to all who could benefit.",
      },
      {
        name: "Efficient",
        description: "Avoiding waste of equipment, supplies, ideas, and energy.",
      },
      {
        name: "Equitable",
        description: "Providing care that does not vary in quality because of personal characteristics.",
      },
      {
        name: "Timely",
        description: "Reducing waits and sometimes harmful delays for both those who receive and give care.",
      },
      {
        name: "Patient-Centered",
        description: "Providing care that is respectful of and responsive to individual patient preferences, needs, and values.",
      },
    ],
    achievements: [
      "NABH Accreditation since July 2019",
      "639 quality objectives monitored across 6 quality dimensions",
      "Smooth sail of accreditation and re-accreditation process demonstrating dedicated commitment to quality",
      "Quality culture embedded across the entire workforce of around 1,000 staff",
    ],
    legacy: [
      "2015: Formal quality journey started, approaching NABH for independent external peer assessment on quality and patient safety.",
      "2019: NABH accreditation achieved — a coveted status in recognition of commitment to quality and patient safety.",
      "Smooth sail of accreditation and re-accreditation process is proof of a dedicated commitment to quality by both the Management and the entire workforce.",
    ],
  },

  // ── 8. Palliative Medicine ────────────────────────────────────────────
  {
    slug: "palliative-medicine",
    category: "clinical",
    title: "Palliative Medicine",
    metaDescription:
      "Palliative Medicine at Cancer Institute WIA, Chennai — pain management, symptom control, psychosocial support, home care, and free hospice facility.",
    tagline: "Integrating Comfort with Cancer Care.",
    overview: [
      "Integrating Comfort with Cancer Care.",
      "The Department of Palliative Medicine provides specialized, patient-centered care aimed at improving the quality of life of patients and families facing cancer and other serious illnesses. As an integral part of a tertiary cancer institute, the department works alongside oncology teams to address pain, distressing symptoms, psychological concerns, and supportive care needs throughout the course of illness.",
      "Our multidisciplinary team—including physicians, nurses, psychologists, social workers, and allied health professionals—focuses on comprehensive symptom management, psychosocial support, communication about goals of care, and support for patients and families during advanced illness and end-of-life care.",
      "Care is delivered across multiple settings including outpatient clinics, inpatient services, intensive care units, and home-based care, ensuring continuity and accessibility of support. The department also contributes actively to education, training, research, and quality improvement initiatives to advance palliative care practice.",
      "By integrating palliative care early in the cancer care pathway, the department aims to relieve suffering, enhance dignity, and support patients and families in making informed decisions aligned with their values and goals.",
    ],
    hod: {
      name: "Dr. V. V. Meenakshi",
      credentials: "",
      designation: "Professor and Head",
      message:
        "The team at the Department of Palliative Medicine leave no stone unturned to deliver compassionate care best aligned to the preferences of patients and their families. We are able to do this by our collaboration with the oncology team who share the same vision.\nWe aspire to provide a continuum of care to all patients with cancer who seek treatment at our institution, no matter the stage of the disease and its final outcome.",
    },
    contactEmail: "ppc@cancerinstitutewia.org",
    spoc: "Vinutha Suresh",
    experts: [
      {
        name: "Dr. V. V. Meenakshi",
        credentials: "",
        designation: "Professor and Head",
        slug: "dr-meenakshi-v-v",
      },
      {
        name: "Dr. Daniel Raj Joseph Thangasamy",
        credentials: "",
        designation: "Faculty",
        slug: "dr-daniel-raj-joseph-thangasamy",
      },
    ],
    conditionsTreated: [
      "Severe or refractory pain",
      "Breathlessness and respiratory distress",
      "Nausea, vomiting, constipation and anorexia",
      "Fatigue and weakness",
      "Anxiety, depression, and psychological distress",
      "End-of-life care needs",
      "Diagnosis of advanced cancer",
      "Psycho-social needs",
      "Assistance with decision making",
      "Request for hastened death",
      "Plan or requiring home visit/hospice",
    ],
    treatmentOptions: [
      "Pharmacological management of cancer pain using WHO analgesic ladder",
      "Opioid therapy including morphine and other strong opioids",
      "Adjuvant medications for neuropathic and refractory pain",
      "Interventional pain procedures in collaboration with relevant specialties",
      "Management of symptoms such as breathlessness, nausea, vomiting, constipation, delirium, fatigue, and anxiety",
      "Nutritional and hydration support when appropriate",
      "Management of malignant wounds, pressure ulcers, and other distressing physical symptoms",
      "Psychological counselling for patients and caregivers",
      "Social work support for financial, family, and community-related concerns",
      "Spiritual care and emotional support",
      "Advance care planning and goals-of-care discussions",
      "End-of-life care and comfort-focused treatment",
      "Bereavement support for families",
      "Outpatient palliative care consultations",
      "Inpatient supportive care",
      "Hospice and home-based palliative care services",
      "Telephone and tele-consultation follow-up for symptom monitoring",
    ],
    preventiveMeasures: [
      "Screening for palliative care needs in outpatient and inpatient oncology services",
      "Early referral of patients with advanced or complex symptoms",
      "Routine symptom assessment to detect and address distress early",
      "Proactive management of pain and other distressing symptoms",
      "Prevention and management of treatment-related side effects",
      "Pressure ulcer prevention through regular assessment and skin care",
      "Constipation prevention in patients receiving opioid therapy",
      "Prevention of delirium through careful medication review and supportive care",
      "Opioid stewardship and safe opioid dispensing systems",
      "Routine psycho-social assessment for patients and caregivers",
      "Education for caregivers on symptom monitoring and home care practices",
    ],
    whenToVisit: [
      "Uncontrolled pain or distressing symptoms such as breathlessness, nausea, vomiting, fatigue, or loss of appetite",
      "Advanced or metastatic cancer, where additional supportive care is required alongside ongoing oncological treatment",
      "Side effects from cancer treatments affecting comfort or daily functioning",
      "Emotional or psychological distress experienced by patients or family members",
      "Need for guidance on goals of care, treatment decisions, or advance care planning",
      "Requirement for home-based care, supportive care planning, or end-of-life care",
      "Support for caregivers who need assistance in managing symptoms and providing care at home",
    ],
    achievements: [
      "Established an integrated palliative care service within the tertiary cancer institute across outpatient, inpatient, home care, and hospice settings",
      "Initiation of DNB in Palliative Medicine training program, with an intake of two postgraduate trainees each year",
      "Development of home-based palliative care services within Chennai",
      "Establishment of the hospice facility – Mahaveer Ashray at Sriperumbudur, providing free inpatient hospice and end-of-life care",
      "Active involvement in national palliative care education and training through the Indian Association of Palliative Care and the Academy of Palliative Medicine",
      "Contribution to academic activities and research in palliative care",
      "Capacity building of healthcare professionals through training programs, workshops, and mentorship",
    ],
    legacy: [
      "The comprehensive palliative care service began as part of the Department of Anaesthesia, later evolving into the Department of Anaesthesia, Pain and Palliative Care.",
      "2010: Palliative care outpatient service initiated, initially operating two days per week, now expanded to six days a week.",
      "2014: Home-based palliative care services introduced for patients unable to frequently visit the hospital.",
      "2015: Daily outpatient services began.",
      "2017: Dedicated hospice facility Mahaveer Ashray established at Sriperumbudur, providing inpatient hospice and end-of-life care.",
      "Today the palliative care team has grown to nearly 20 members — physicians, nurses, psychiatrists, psychologists, medical social workers, volunteers, and a data management team.",
      "Outpatient palliative care services are subsidized and free for general ward patients; home-based care and hospice services are provided entirely free of cost.",
    ],
  },

  // ── 9. Microbiology ───────────────────────────────────────────────────
  {
    slug: "microbiology",
    category: "diagnostic",
    title: "Microbiology",
    metaDescription:
      "Microbiology at Cancer Institute WIA, Chennai — NABL accredited diagnostic lab, 90K clinical samples/year, MALDI-TOF automation, infection control & surveillance.",
    tagline: "Department of Microbiology focuses on identification of pathogens and its antimicrobial pattern and curbing the infection with advanced precision diagnostics for better clinical decisions.",
    overview: [
      "Department of Microbiology focuses on identification of pathogens and its antimicrobial pattern and curbing the infection with advanced precision diagnostics for better clinical decisions.",
      "The Microbiology Department is an NABL accredited multidisciplinary lab consisting of bacteriology, mycology, virology, mycobacteriology, serological and Hospital Infection Control laboratory, playing a pivotal role in diagnostic service helping in preventing and treatment of cancer patients with infection.",
      "A wide range of samples like blood, body fluids, urine, pus, tissue, sputum, throat swabs, respiratory secretions, pre-op swabs, stool etc are received for staining and culture — around 90,000 clinical samples and around 20,000 surveillance samples per year.",
    ],
    hod: {
      name: "Dr. R. Packia Nancy",
      credentials: "MBBS, DLO, MD(Micro), PhD",
      designation: "Assistant Professor & HOD, IPCO",
      message:
        "I, as the Head of the Department, take pride in leading a dedicated team focused on delivering high-quality, accurate, ethical, and patient-centered diagnosis in infection for cancer patients using advanced technologies.",
    },
    contactEmail: "microbiology@cancerinstitutewia.org",
    spoc: "Mrs. Harini",
    experts: [
      {
        name: "Dr. R. Packia Nancy",
        credentials: "MBBS, DLO, MD(Micro), PhD",
        designation: "Assistant Professor and HOD, IPCO",
        slug: "dr-rpackia-nancy",
      },
      {
        name: "Dr. Akshen Sundaresan",
        credentials: "MBBS, MD(Micro)",
        designation: "Senior Resident",
        slug: "dr-akshen-sundaresan",
      },
      {
        name: "Dr. Thuthi Mohan",
        credentials: "",
        designation: "Faculty",
        slug: "dr-thuthi-mohan",
      },
    ],
    diagnosticServices: [
      {
        category: "Microbiology",
        services: [
          "Aerobic culture and sensitivity – Manual method – All samples",
          "Automated ID by MALDI-TOF – All samples",
          "Automated AST by VITEK 2C – All samples",
          "Automated BacT Alert Aerobic Blood culture",
          "Grams stain",
          "AFB Stain",
          "Fungal KOH stain",
          "India ink staining for Cryptococcus species",
          "AFB culture",
          "Fungal Culture",
          "Stool for hanging drop",
          "Rapid test for Carbapenamase gene",
          "Test for Colistin resistance",
        ],
      },
      {
        category: "Infectious Disease Serology",
        services: [
          "WIDAL (Tube agglutination)",
          "Anti-Streptolysin O titer (Latex agglutination)",
          "Rheumatoid Factor (Latex agglutination)",
          "Mantoux skin test",
          "Stool for Clostridium difficile GDH Toxin A & B detection test",
          "Viral markers (HBsAg, Anti-HCV, HIV Ag/Ab)",
          "Dengue Duo Rapid Card Test",
        ],
      },
      {
        category: "Surveillance Cultures",
        services: [
          "Operation theatre, ICU, BMT, isolation rooms and wards surveillance at both campus",
          "Postnasal cultures of OT staff, hand cultures of all nursing staff",
          "Sterility check of blood bank",
          "Sterility check of Autoclaves from other laboratories",
          "CSSD sterility check of autoclave and ETO",
          "Water analysis",
        ],
      },
    ],
    equipment: [
      {
        name: "BacT Alert Automated Blood Culture System",
        description: "240-cell automated system for adults and paediatric patients, reducing turnaround time to four hours instead of conventional 24 hours. Includes 60-cell mycobacterial culture.",
        badge: "Rapid Detection",
      },
      {
        name: "MALDI-TOF Biotyper System",
        description: "Early identification of bacteria using Matrix-Assisted Laser Desorption/Ionization Time of Flight mass spectrometry for unique proteomic fingerprinting.",
        badge: "Mass Spectrometry",
      },
      {
        name: "Vitek 2 Compact System",
        description: "Automated identification and susceptibility testing of bacteria and fungus with Advanced Expert System for validation.",
      },
      {
        name: "Bio-safety Cabinet Class II B",
        description: "Safety cabinet for handling infectious specimens with HEPA filtration.",
      },
      {
        name: "PCR System",
        description: "Polymerase Chain Reaction for rapid molecular pathogen detection.",
      },
      {
        name: "ELISA Reader and Washer",
        description: "Enzyme-linked immunosorbent assay for serological testing.",
      },
      {
        name: "Pneumatic Chute System",
        description: "Rapid sample transport from wards to laboratory via pneumatic tube system.",
      },
    ],
    achievements: [
      "NABL accredited laboratory",
      "Processing 90,000+ clinical samples annually",
      "20,000+ surveillance samples for infection control",
    ],
    legacy: [
      "The Department shares the legacy of sampling around 90,000 clinical samples of cancer patients and 20,000 surveillance samples per year.",
    ],
  },

  // ── 10. Nuclear Medicine and Theranostics ──────────────────────────────
  {
    slug: "nuclear-medicine-and-theranostics",
    category: "clinical",
    title: "Nuclear Medicine and Theranostics",
    metaDescription: "Nuclear Medicine and Theranostics at Cancer Institute WIA, Chennai — expert image-guided diagnostics and targeted radionuclide therapy.",
    tagline: "Precision diagnostics and targeted molecular therapies for tailored cancer treatment.",
    overview: [
      "The Department of Nuclear Medicine and Theranostics offers advanced molecular imaging and targeted radionuclide therapy.",
      "Theranostics is a highly personalized approach that combines a diagnostic test that identifies a specific molecular target on cancer cells with a matched therapeutic agent that delivers localized radiation directly to those cells."
    ],
    hod: {
      name: "Placeholder HOD",
      credentials: "MD",
      designation: "Head of Department",
      message: "Our vision is to deliver targeted, precision oncological care through the latest developments in nuclear medicine."
    },
    contactEmail: "info@cancerinstitutewia.org",
    experts: [],
    achievements: [],
    legacy: [],
    conditionsTreated: ["Thyroid Cancer", "Neuroendocrine Tumors", "Prostate Cancer", "Bone Metastases"],
    treatmentOptions: ["Radioiodine Therapy", "PRRT (Peptide Receptor Radionuclide Therapy)", "Lutetium-177 PSMA Therapy", "Bone Pain Palliation"],
    preventiveMeasures: [],
    whenToVisit: ["Referred by an oncologist for functional imaging", "Referred for targeted radionuclide therapy"],
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Helper functions
// ────────────────────────────────────────────────────────────────────────────

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}

export function getAllDepartmentSlugs(): string[] {
  return departments.map((d) => d.slug);
}
