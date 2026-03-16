export interface DepartmentHOD {
  name: string;
  credentials: string;
  initial: string;
  designation: string;
  message?: { quote: string; body: string[] };
}

export interface DepartmentStat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  credentials: string;
  designation: string;
  tags?: string[];
}

export interface Condition {
  category: string;
  items: string[];
}

export interface Facility {
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  text: string;
}

export interface Achievement {
  text: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Department {
  slug: string;
  title: string;
  metaDescription: string;
  accentColor: string;
  accentDark: string;
  accentLight: string;
  accentPale: string;
  heroTagline: string;
  heroDesc: string;
  stats: DepartmentStat[];
  hod: DepartmentHOD;
  about: string[];
  team: TeamMember[];
  conditions: Condition[];
  facilities: Facility[];
  timeline: TimelineItem[];
  achievements: Achievement[];
  gallery: GalleryItem[];
  faq: FAQItem[];
  contactEmail: string;
  contactPhone?: string;
  ctaTitle: string;
}

export const departments: Department[] = [
  // ── 1. Surgical Oncology ──────────────────────────────────────────────
  {
    slug: "surgical-oncology",
    title: "Surgical Oncology",
    metaDescription:
      "Surgical Oncology at Cancer Institute WIA, Chennai — expert cancer surgery including robotic da Vinci, HIPEC, breast, head & neck, GI, and limb salvage procedures. Established 1954.",
    accentColor: "#2E7D52",
    accentDark: "#1E5C3A",
    accentLight: "#B8DCC8",
    accentPale: "#E8F5EE",
    heroTagline: "Surgical Oncology · Robotic Surgery",
    heroDesc:
      "Surgical Oncology focuses on treating cancer using advanced precision surgery—incorporating robotic and minimally invasive techniques—to achieve optimal tumor removal while preserving form and function.",
    stats: [
      { value: "1954", label: "Established" },
      { value: "2021", label: "Robotic Surgery Launch" },
      { value: "da Vinci", label: "Xi Robotic System" },
      { value: "HIPEC", label: "Available" },
    ],
    hod: {
      name: "Arvind Krishnamurthy",
      credentials: "",
      initial: "A",
      designation: "Head of Department",
      message: {
        quote:
          "The Surgical Oncology Department at the Cancer Institute (WIA), Adyar, Chennai, is guided by a clear and compassionate vision: to deliver world-class, ethical surgical care that gives every patient the best possible chance at cure, control of their disease, and a life of quality and dignity—regardless of background or resources.",
        body: [
          "Building on our institute's legacy since 1954 as pioneers in comprehensive cancer care, we envision a future where advanced precision surgery, including minimally invasive and robotic techniques, combined with organ preservation and reconstructive approaches, helps eliminate unnecessary suffering from cancer.",
        ],
      },
    },
    about: [
      "The Surgical Oncology department at the Cancer Institute (WIA), Chennai, is a cornerstone of the institute's comprehensive cancer care. Established as part of India's pioneering comprehensive cancer center since 1954, surgical oncology here specializes in the surgical management of solid tumours including breast, thoracic, gastrointestinal tract, head and neck, gynecological sites, urological systems, musculo-skeletal and neuro-oncology.",
      "It incorporates advanced minimally invasive and robotic approaches where appropriate, while emphasizing preservation of form and function to optimize patient quality of life. The department introduced one of India's first MCh programs in Surgical Oncology in 1984 and continues as a premier training hub.",
    ],
    team: [
      {
        name: "Arvind Krishnamurthy",
        credentials: "",
        designation: "Head of Department",
        tags: ["Breast Surgery", "Head & Neck", "Robotic Surgery"],
      },
    ],
    conditions: [
      {
        category: "Surgical Specialties",
        items: [
          "Breast Surgery",
          "Head & Neck Surgery",
          "GI Cancer Surgery",
          "Robotic Surgery",
          "HIPEC",
          "Limb Salvage Surgery",
        ],
      },
    ],
    facilities: [
      {
        title: "da Vinci Xi Robotic System",
        description:
          "Highly precise, minimally invasive cancer surgery with smaller incisions and faster recovery.",
      },
      {
        title: "Laparoscopic Surgery Suite",
        description:
          "Minimally invasive surgical procedures for reduced post-operative pain.",
      },
      {
        title: "HIPEC Machine",
        description:
          "Hyperthermic Intraperitoneal Chemotherapy for peritoneal cancers.",
      },
      {
        title: "CUSA",
        description:
          "Cavitron Ultrasonic Surgical Aspirator for precise tissue dissection.",
      },
    ],
    timeline: [
      { year: "1954", text: "Inception of the department" },
      {
        year: "1982",
        text: "Jasudben Chamanlal Kothari Surgical Oncology Complex opened",
      },
      {
        year: "1984",
        text: "Live relay operative surgical workshop 'Frontiers in Surgical Oncology'",
      },
      {
        year: "1985",
        text: "First centre in India to perform Endoscopic and open laser surgery with ND-YAG Surgical Laser",
      },
      {
        year: "1988",
        text: "First successful Limb Salvage Surgery for Bony Sarcomas in India, pioneered by Prof. Mayilvahanan N",
      },
      {
        year: "1992",
        text: "Intra-operative Electron Therapy first practiced; D2 Gastrectomy introduced",
      },
    ],
    achievements: [
      { text: "2020: Diamond Jubilee Block OT Complex opened" },
      {
        text: "2021: Start of Robotic Surgeries using the da Vinci Robotic Platform",
      },
    ],
    gallery: [
      { src: "", alt: "da Vinci Robotic Surgery Launch" },
      { src: "", alt: "HIPEC Programme Inauguration" },
      { src: "", alt: "Surgical Oncology CME" },
      { src: "", alt: "Cancer Awareness Walk" },
      { src: "", alt: "Head & Neck Cancer Camp" },
      { src: "", alt: "Annual Surgeons' Meet" },
    ],
    faq: [
      {
        question:
          "What cancer surgeries does the Surgical Oncology department perform?",
        answer:
          "We offer the full spectrum of oncological surgery — breast cancer surgery, head & neck resections, gastrointestinal cancer procedures, robotic-assisted and laparoscopic surgery, HIPEC for peritoneal cancers, and limb salvage surgery for bone and soft tissue tumours.",
      },
      {
        question: "What is HIPEC and who is it suitable for?",
        answer:
          "HIPEC (Hyperthermic Intraperitoneal Chemotherapy) combines surgical removal of visible abdominal tumours with heated chemotherapy delivered directly into the abdomen. It is offered to carefully selected patients with peritoneal metastases from ovarian, colorectal, or gastric cancers.",
      },
      {
        question:
          "Is robotic surgery available for cancer operations at Cancer Institute WIA?",
        answer:
          "Yes. We are equipped with the da Vinci Xi Robotic Surgical System — enabling highly precise, minimally invasive cancer surgery with smaller incisions, significantly less blood loss, reduced post-operative pain, and faster return to normal life.",
      },
      {
        question:
          "How do doctors decide between surgery and other treatments like chemotherapy?",
        answer:
          "Every treatment decision is made by a multidisciplinary team (MDT) comprising surgical, medical, and radiation oncologists who review your individual case.",
      },
      {
        question:
          "What is the typical recovery time after cancer surgery?",
        answer:
          "Recovery depends on the type of surgery and your overall health. Minimally invasive procedures often allow return to daily activities within 2-4 weeks, while major open surgeries may take 6-8 weeks.",
      },
    ],
    contactEmail: "sog@cancerinstitutewia.org",
    ctaTitle: "Consult Our Surgical Oncology Team",
  },

  // ── 2. Medical Oncology ───────────────────────────────────────────────
  {
    slug: "medical-oncology",
    title: "Medical Oncology & Paediatric Oncology",
    metaDescription:
      "Expert cancer treatment at Cancer Institute (WIA) Chennai. Medical & Paediatric Oncology — chemotherapy, immunotherapy, CAR-T therapy & stem cell transplant since 1954.",
    accentColor: "#457B9D",
    accentDark: "#2D5A7B",
    accentLight: "#A8C8DB",
    accentPale: "#E3EFF5",
    heroTagline: "Clinical Oncology · Paediatric Oncology",
    heroDesc:
      "Medical Oncology and Pediatric Oncology focuses on treating cancer using chemotherapy, immunotherapy, targeted therapies, hematopoietic stem cell transplant, and cellular therapy.",
    stats: [
      { value: "1954", label: "Established" },
      { value: "1st", label: "DM Oncology in India" },
      { value: "1960", label: "First Paediatric Unit" },
      { value: "CAR-T", label: "Cellular Therapy" },
    ],
    hod: {
      name: "Dr. Venkatraman Radhakrishnan",
      credentials: "MD",
      initial: "V",
      designation: "Head of Department",
      message: {
        quote:
          "Our vision is to provide compassionate, high-quality, and equitable cancer care for every patient, guided by science, empathy, and integrity.",
        body: [
          "We are committed to delivering evidence-based treatments that meet the needs of each individual, while recognizing the physical, emotional, and social challenges that cancer brings to patients and their families.",
        ],
      },
    },
    about: [
      "The Department of Medical and Pediatric Oncology is dedicated to comprehensive care of patients with cancer across the age spectrum. Medical oncology focuses on systemic treatment of solid and hematological malignancies using chemotherapy, targeted therapy, immunotherapy, and hormonal therapy.",
      "Pediatric oncology is a highly specialized discipline addressing cancers in children and adolescents, which are biologically distinct from adult cancers. Advanced therapeutic services, including hematopoietic stem cell transplantation and CAR-T cell therapy, form an integral part of the department's clinical scope.",
    ],
    team: [
      {
        name: "Dr. Venkatraman Radhakrishnan",
        credentials: "MD",
        designation: "Head of Department",
        tags: ["Chemotherapy", "Immunotherapy", "CAR-T"],
      },
    ],
    conditions: [
      {
        category: "Solid Tumours",
        items: [
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
        ],
      },
      {
        category: "Blood Cancers",
        items: [
          "Multiple myeloma",
          "Acute leukemias (ALL, AML)",
          "Chronic leukemias (CLL, CML)",
          "Hodgkin lymphoma",
          "Non-Hodgkin lymphoma",
          "Myelodysplastic syndromes",
          "Myeloproliferative neoplasms",
        ],
      },
      {
        category: "Paediatric",
        items: [
          "Solid tumors in children and adolescents",
          "Pediatric leukemias and lymphomas",
        ],
      },
    ],
    facilities: [
      {
        title: "Chemotherapy Day Care",
        description:
          "Dedicated chemotherapy day care and inpatient units.",
      },
      {
        title: "Pediatric Oncology Unit",
        description: "Age-appropriate care for childhood cancers.",
      },
      {
        title: "Cellular Therapy Facility",
        description: "CAR-T cell therapy for relapsed blood cancers.",
      },
      {
        title: "Stem Cell Transplant Unit",
        description: "Autologous and allogeneic transplantation.",
      },
    ],
    timeline: [
      {
        year: "1954",
        text: "Department established as part of India's first comprehensive cancer centre",
      },
      { year: "1960", text: "First Paediatric Oncology unit started" },
      {
        year: "",
        text: "First DM Medical Oncology program in the country, training future leaders",
      },
      {
        year: "",
        text: "Pioneered multicenter collaborative clinical trials in India",
      },
    ],
    achievements: [
      {
        text: "University Gold Medal in DM Medical Oncology Examination – 2024",
      },
      {
        text: "ISMPO Gold Medal – 2024 – Indian Society of Medical & Paediatric Oncology",
      },
      { text: "ISMPO Gold Medal – 2025" },
      { text: "Best Postgraduate Institute Award – 2025 – ICON" },
      {
        text: "Chennai Population-Based Childhood Cancer Registry established – 2022",
      },
      {
        text: "Tamil Nadu Population-Based Childhood Cancer Registry expanded – 2024",
      },
    ],
    gallery: [
      { src: "", alt: "Annual Oncology Conference" },
      { src: "", alt: "World Cancer Day Awareness" },
      { src: "", alt: "Paediatric Cancer Camp" },
      { src: "", alt: "Research Symposium" },
      { src: "", alt: "Stem Cell Transplant Milestone" },
      { src: "", alt: "CAR-T Therapy Launch" },
    ],
    faq: [
      {
        question:
          "What types of cancer does the Medical Oncology department treat?",
        answer:
          "Our department treats all solid tumours and blood cancers — including leukaemia, lymphoma, breast, lung, gastrointestinal, and head & neck cancers. Our dedicated Paediatric Oncology unit specialises in childhood cancers with age-appropriate, compassionate care.",
      },
      {
        question:
          "Is CAR-T cell therapy available at Cancer Institute WIA?",
        answer:
          "Yes. Cancer Institute WIA is one of the very few centres in India offering CAR-T therapy through our dedicated Cellular Therapy Facility — a breakthrough treatment for certain relapsed blood cancers.",
      },
      {
        question:
          "What is the difference between chemotherapy and immunotherapy?",
        answer:
          "Chemotherapy uses drugs to target fast-dividing cancer cells throughout the body. Immunotherapy harnesses your own immune system to recognise and fight cancer — often with more durable responses.",
      },
      {
        question: "Does Cancer Institute WIA offer second opinions?",
        answer:
          "Absolutely. We strongly encourage patients to seek clarity. Our multidisciplinary tumour board reviews complex cases and provides expert guidance.",
      },
      {
        question: "How do I book an appointment?",
        answer:
          "Walk in to our OPD Monday to Saturday, 9am-4pm, or request a teleconsultation. Call +91 44 2491 0754 or email our department.",
      },
    ],
    contactEmail: "r.venkatraman@cancerinstitutewia.org",
    ctaTitle: "Consult Our Medical Oncology Team",
  },

  // ── 3. Radiology ──────────────────────────────────────────────────────
  {
    slug: "radiology",
    title: "Radiology",
    metaDescription:
      "Diagnostic & Interventional Radiology at Cancer Institute WIA, Chennai — 1.5T MRI, 128-slice CT, mammography, image-guided biopsy & interventional procedures.",
    accentColor: "#F4A261",
    accentDark: "#D4822E",
    accentLight: "#FCCF99",
    accentPale: "#FFF3E0",
    heroTagline: "Diagnostic & Interventional Radiology · Onco-Imaging",
    heroDesc:
      "The Department of Radiology focuses on advanced imaging and image-guided diagnostic and therapeutic procedures for accurate cancer diagnosis, staging, and treatment planning.",
    stats: [
      { value: "1.5T", label: "MRI Scanner" },
      { value: "128-Slice", label: "CT Scanner" },
      { value: "DNB", label: "Training Program" },
      { value: "FRCR", label: "Qualified HOD" },
    ],
    hod: {
      name: "Dr. M. Karthigaiselvi",
      credentials: "MBBS, DMRD, DNB, FRCR(UK)",
      initial: "K",
      designation: "Head of Department",
      message: {
        quote:
          "The Department of Radiology is committed to delivering accurate, timely, and safe imaging services that form the foundation of effective cancer care.",
        body: [
          "Working in close collaboration with medical, surgical, and radiation oncology teams, the department plays a vital role in diagnosis, staging, treatment planning, and follow-up.",
        ],
      },
    },
    about: [
      "The Department of Radiology specializes in medical imaging that helps detect, diagnose, and monitor cancer. Using technologies such as X-rays, mammography, ultrasound, CT and MRI, we provide detailed images and expert reports that guide doctors in making accurate treatment decisions.",
      "What sets our department apart is our comprehensive imaging services, including state-of-the-art MRI, advanced mammography techniques such as tomosynthesis and contrast-enhanced mammography, along with image-guided biopsies and interventional procedures.",
    ],
    team: [
      {
        name: "Dr. M. Karthigaiselvi",
        credentials: "MBBS, DMRD, DNB, FRCR(UK)",
        designation: "Head of Department",
        tags: ["Onco-Imaging", "Mammography"],
      },
      {
        name: "Dr. R. Thanraj",
        credentials: "MBBS, DMRD",
        designation: "Radiologist",
      },
      {
        name: "Dr. Pushparajan S.",
        credentials: "MBBS, DMRD, DNB",
        designation: "Radiologist",
      },
      {
        name: "Dr. Anusuya",
        credentials: "MBBS, DMRD",
        designation: "Radiologist",
      },
      {
        name: "Dr. Swapna",
        credentials: "MBBS, DNB",
        designation: "Radiologist",
      },
    ],
    conditions: [
      {
        category: "Imaging & Procedures",
        items: [
          "Breast Cancer",
          "Lung Cancer",
          "Brain Tumors",
          "Liver Cancer",
          "Pancreatic Cancer",
          "Prostate Cancer",
          "Ovarian Cancer",
          "Colorectal Cancer",
          "Bone Tumors",
          "Lymphoma",
          "Thyroid Cancer",
          "Kidney Cancer",
        ],
      },
    ],
    facilities: [
      {
        title: "1.5T MRI Scanner",
        description: "Siemens Sempra high-resolution MRI imaging.",
      },
      {
        title: "128-Slice CT Scanner",
        description: "Two GE Revolution multi-detector CT scanners.",
      },
      {
        title: "Digital Mammography",
        description:
          "3D Tomosynthesis and contrast-enhanced mammography for early breast cancer detection.",
      },
      {
        title: "Ultrasound Systems",
        description:
          "Six 2D and 3D ultrasound systems for real-time imaging.",
      },
      {
        title: "Interventional Suite",
        description:
          "Cathlab suite for diagnostic and therapeutic vascular procedures.",
      },
      {
        title: "Stereotactic Biopsy",
        description:
          "Precise breast tissue sampling and vacuum-assisted biopsy.",
      },
    ],
    timeline: [
      {
        year: "",
        text: "The Department of Radiology has been a vital component of the Institute's cancer care services since its formative years.",
      },
      {
        year: "1960s",
        text: "Early adoption of mammography, contributing to improved early breast cancer detection in India.",
      },
      {
        year: "",
        text: "Evolved into a comprehensive diagnostic hub with MRI, CT, digital mammography, and interventional radiology.",
      },
    ],
    achievements: [
      { text: "NATBOARD Recognition for DNB Radiology Training Programme" },
      { text: "ICRI Fellowship in Onco-Imaging – 2024" },
      { text: "ICRI Fellowship in Breast Imaging – 2024" },
      {
        text: "1st Prize – Oral Paper Presentation – 2024 – National IRIA Conference",
      },
      { text: "Prize Winner – RITE National Conference – 2025" },
    ],
    gallery: [
      { src: "", alt: "AI in Radiology Symposium" },
      { src: "", alt: "Mammography Awareness Camp" },
      { src: "", alt: "DNB Radiology Orientation" },
      { src: "", alt: "Interventional Radiology Workshop" },
      { src: "", alt: "Radiology Open Day" },
      { src: "", alt: "Equipment Commissioning Ceremony" },
    ],
    faq: [
      {
        question: "What imaging services are available?",
        answer:
          "We provide 1.5T MRI, 128-slice CT, digital mammography, ultrasound, fluoroscopy, and interventional radiology procedures — including image-guided biopsies, drainage, and minimally invasive tumour treatments.",
      },
      {
        question: "What is image-guided biopsy?",
        answer:
          "It uses real-time ultrasound or CT imaging to direct a needle precisely into a suspicious lesion, obtaining tissue for diagnosis without open surgery.",
      },
      {
        question: "How long does an MRI or CT scan take?",
        answer:
          "Most oncology MRI scans take 30-60 minutes; CT scans are typically 10-20 minutes. Some scans require fasting or contrast.",
      },
      {
        question: "What is interventional radiology?",
        answer:
          "It uses imaging guidance to perform minimally invasive procedures — placing chemotherapy ports, draining fluid, or performing tumour ablation.",
      },
      {
        question: "Does the Institute offer mammography screening?",
        answer:
          "Yes. Our digital mammography service is available for screening and diagnostic purposes. Women aged 40+ are encouraged to discuss regular screening.",
      },
    ],
    contactEmail: "radiology@cancerinstitutewia.org",
    ctaTitle: "Consult Our Radiology Team",
  },

  // ── 4. Gynaecological Oncology ────────────────────────────────────────
  {
    slug: "gynaecological-oncology",
    title: "Gynaecological Oncology",
    metaDescription:
      "Gynaecological Oncology at Cancer Institute (WIA), Chennai — comprehensive care for cervical, ovarian, and uterine cancers with robotic surgery and HIPEC.",
    accentColor: "#E76F51",
    accentDark: "#C4502F",
    accentLight: "#F5B8A8",
    accentPale: "#FDECE7",
    heroTagline: "Gynaecological Oncology · Robotic Surgery · Prevention",
    heroDesc:
      "Comprehensive Care for the Whole Woman Through Every Stage of Gynaecological Cancer from Prevention to Palliation.",
    stats: [
      { value: "7+ Decades", label: "Of Service" },
      { value: "da Vinci", label: "Robotic System" },
      { value: "10,000+", label: "Women Reached" },
      { value: "Comprehensive", label: "Cancer to Palliation" },
    ],
    hod: {
      name: "Dr. Ujwala Prakash Wakpaijan",
      credentials: "MD",
      initial: "U",
      designation: "Head of Department",
      message: {
        quote:
          "We are committed to providing the highest standard of care for women facing gynaecological cancers.",
        body: [
          "Our team of dedicated gynaecological oncologists focuses exclusively on the complex needs of women with cancer, ensuring expert evaluation, individualized treatment planning, and continuity of care.",
        ],
      },
    },
    about: [
      "The Department of Gynaecological Oncology provides comprehensive care across the entire spectrum of gynaecological cancers — from awareness and prevention through screening, diagnosis, treatment, follow-up, survivorship, and palliation.",
      "The department manages cancers of the cervix, ovary, uterus, vulva, vagina, and other related gynaecological malignancies through a structured and evidence-based approach.",
    ],
    team: [
      {
        name: "Dr. Ujwala Prakash Wakpaijan",
        credentials: "MD",
        designation: "Head of Department",
        tags: ["Cervical Cancer", "Robotic Surgery"],
      },
      {
        name: "Dr (Maj) Jayashree Natarajan",
        credentials:
          "MS, DNB, Post Doctoral Fellowship in Gynaec Oncology",
        designation: "Associate Professor",
      },
      {
        name: "Dr. Amy Jose",
        credentials:
          "MS (Gold Medalist), DNB, Post Doctoral Fellowship",
        designation: "Assistant Professor",
      },
      {
        name: "Dr. Kavin Nilavu L",
        credentials: "MBBS, MD Obstetrics & Gynaecology",
        designation: "Assistant Professor",
      },
    ],
    conditions: [
      {
        category: "Gynaecological Cancers",
        items: [
          "Cervical Cancer",
          "Ovarian Cancer",
          "Uterine/Endometrial Cancer",
          "Vulvar Cancer",
          "Vaginal Cancer",
          "Gestational Trophoblastic Disease",
        ],
      },
    ],
    facilities: [
      {
        title: "da Vinci Robotic Surgery",
        description:
          "Minimally invasive robotic procedures for gynaecological cancers.",
      },
      {
        title: "HIPEC",
        description:
          "Hyperthermic Intraperitoneal Chemotherapy for advanced ovarian cancer.",
      },
      {
        title: "Genetic Counselling",
        description: "Risk assessment and hereditary cancer testing.",
      },
      {
        title: "Colposcopy Suite",
        description:
          "Screening and early detection of cervical abnormalities.",
      },
    ],
    timeline: [
      { year: "", text: "Over seven decades of dedicated gynaecological cancer care, building on the legacy of Dr. Shantha V and the institute's founding vision." },
      { year: "", text: "Exclusive staffing by qualified gynaecological oncologists ensuring focused subspecialty care." },
      { year: "", text: "Adoption of robotic surgery, HIPEC, and genetic counselling for comprehensive modern care." },
    ],
    achievements: [
      { text: "Seven decades of continuous gynaecological oncology service" },
      { text: "10,000+ women reached through screening and awareness programmes" },
      { text: "Academic training programmes in gynaecological oncology" },
      { text: "HPV vaccination and cervical cancer prevention initiatives" },
      { text: "Active research publications in national and international journals" },
      { text: "Collaboration with state government for cancer screening programmes" },
    ],
    gallery: [
      { src: "", alt: "Cervical Cancer Awareness Camp" },
      { src: "", alt: "Robotic Surgery Training" },
      { src: "", alt: "Women's Health Symposium" },
      { src: "", alt: "HPV Vaccination Drive" },
      { src: "", alt: "Department Day" },
      { src: "", alt: "Cancer Survivors Meet" },
    ],
    faq: [
      {
        question:
          "What gynaecological cancers does this department treat?",
        answer:
          "We treat all cancers of the female reproductive system — cervical, ovarian, uterine, vulvar, and vaginal cancers, as well as gestational trophoblastic disease.",
      },
      {
        question:
          "Is robotic surgery available for gynaecological cancers?",
        answer:
          "Yes. We use the da Vinci Robotic Surgical System for minimally invasive procedures with faster recovery.",
      },
      {
        question: "What is HIPEC and when is it used?",
        answer:
          "HIPEC involves delivering heated chemotherapy directly into the abdomen during surgery, used for advanced ovarian cancer with peritoneal spread.",
      },
      {
        question: "Does the department offer cancer screening?",
        answer:
          "Yes, we offer cervical cancer screening including Pap smears, HPV testing, and colposcopy.",
      },
      {
        question: "Is genetic counselling available?",
        answer:
          "Yes. We offer genetic risk assessment and hereditary cancer testing for patients with family history of gynaecological cancers.",
      },
    ],
    contactEmail: "ujwala@cancerinstitutewia.org",
    ctaTitle: "Consult Our Gynaecological Oncology Team",
  },

  // ── 5. Anaesthesia & Pain Management ──────────────────────────────────
  {
    slug: "anaesthesia-pain",
    title: "Anaesthesia & Pain Management",
    metaDescription:
      "Onco-Anaesthesia, Critical Care & Pain Management at Cancer Institute WIA, Chennai — 24/7 ICU, robotic surgery anaesthesia, and interventional pain management.",
    accentColor: "#2A9D8F",
    accentDark: "#1A7A6E",
    accentLight: "#A8DDD7",
    accentPale: "#E0F5F2",
    heroTagline: "Onco-Anaesthesia · Critical Care · Pain Management",
    heroDesc:
      "Comprehensive, precise, personalised, patient-centric care from pre-procedural phase through recovery and rehabilitation: focusing on safety, comfort and enhanced outcomes.",
    stats: [
      { value: "7+ Decades", label: "Of Service" },
      { value: "14+", label: "Faculty Members" },
      { value: "24/7", label: "ICU Support" },
      { value: "National", label: "Conference Host" },
    ],
    hod: {
      name: "Dr Punitha C",
      credentials: "DNB(Anes), DESA, EDPM",
      initial: "P",
      designation: "Head of Department",
    },
    about: [
      "The Department of Anaesthesia offers comprehensive care for oncology patients, encompassing pre-surgical assessment and optimization, anaesthesia administration, critical care support, acute pain management, and interventional pain management.",
      "Our involvement starts by keeping patients calm and pain free, aiding the expert team in early diagnosis. We care for the critically ill in the ICU through post-operative rehabilitation, extending constant support across the patient's cancer journey.",
    ],
    team: [
      {
        name: "Dr Punitha C",
        credentials: "DNB(Anes), DESA, EDPM",
        designation: "Head of Department",
        tags: ["Onco-Anaesthesia", "Pain Management"],
      },
      {
        name: "Dr Subramanian",
        credentials: "",
        designation: "Associate Professor",
      },
      {
        name: "Dr Aravind Narayanan",
        credentials: "",
        designation: "Associate Professor",
      },
      {
        name: "Dr Nivedhyaa",
        credentials: "MD",
        designation: "Associate Professor",
      },
      {
        name: "Dr Nairita Das",
        credentials: "MD",
        designation: "Assistant Professor",
      },
    ],
    conditions: [
      {
        category: "Services",
        items: [
          "Onco-Anaesthesia for all surgical procedures",
          "Robotic surgery anaesthesia",
          "Paediatric sedation",
          "Airway management",
          "ICU & Critical Care",
          "Acute pain management",
          "Interventional pain management",
          "Chronic cancer pain treatment",
        ],
      },
    ],
    facilities: [
      {
        title: "Modern Operating Theatres",
        description:
          "Fully equipped OTs supporting robotic, laparoscopic, and open surgeries.",
      },
      {
        title: "Intensive Care Unit",
        description:
          "24/7 ICU with advanced monitoring and ventilation.",
      },
      {
        title: "Pain Clinic",
        description:
          "Interventional procedures for chronic cancer pain relief.",
      },
    ],
    timeline: [
      { year: "", text: "Over seven decades supporting oncological surgery with specialised anaesthesia and critical care services." },
    ],
    achievements: [
      { text: "National Conference on Onco-Anaesthesia hosted in 2025" },
      { text: "VAST (Vital Anaesthesia Simulation Training) instructors" },
      { text: "Faculty invited to national and international anaesthesia conferences" },
      { text: "Prize-winning poster presentations at national conferences" },
      { text: "Textbook authorship contributions in onco-anaesthesia" },
      { text: "Quality improvement projects in perioperative patient safety" },
    ],
    gallery: [
      { src: "", alt: "National Anaesthesiology Conference" },
      { src: "", alt: "ICU Team" },
      { src: "", alt: "Pain Management Workshop" },
      { src: "", alt: "Simulation Training" },
      { src: "", alt: "Department Day" },
      { src: "", alt: "CME Programme" },
    ],
    faq: [
      {
        question:
          "What types of anaesthesia are provided for cancer surgery?",
        answer:
          "We provide general anaesthesia, regional anaesthesia, and sedation tailored to each surgical procedure and patient's needs.",
      },
      {
        question: "Does the department manage cancer pain?",
        answer:
          "Yes. We offer both acute post-surgical pain management and long-term interventional pain management for chronic cancer pain.",
      },
      {
        question: "Is there 24/7 ICU support?",
        answer:
          "Yes. Our ICU provides round-the-clock critical care support for oncology patients.",
      },
      {
        question:
          "Can children receive anaesthesia for procedures?",
        answer:
          "Yes. We have expertise in paediatric sedation and anaesthesia for imaging, biopsies, and surgical procedures.",
      },
      {
        question: "What is interventional pain management?",
        answer:
          "It involves minimally invasive procedures like nerve blocks, epidural injections, and neurolytic procedures to control severe cancer pain.",
      },
    ],
    contactEmail: "anesthesia@cancerinstitutewia.org",
    ctaTitle: "Consult Our Anaesthesia Team",
  },

  // ── 6. Nuclear Medicine ───────────────────────────────────────────────
  {
    slug: "nuclear-medicine",
    title: "Nuclear Medicine & Molecular Imaging",
    metaDescription:
      "Nuclear Medicine at Cancer Institute WIA, Chennai — PET-CT imaging, bone scans, thyroid cancer treatment, PRRT, Lu-177 PSMA therapy. Established 1957.",
    accentColor: "#6A4C93",
    accentDark: "#4A3470",
    accentLight: "#C4B5DB",
    accentPale: "#EDE8F5",
    heroTagline: "Nuclear Medicine · Molecular Imaging · Theranostics",
    heroDesc:
      "Nuclear medicine focuses on diagnosing and treating cancer using radioactive substances for precise molecular-level imaging and targeted therapy.",
    stats: [
      { value: "1957", label: "Established" },
      { value: "1st", label: "Nuclear Medicine in South India" },
      { value: "PET-CT", label: "Molecular Imaging" },
      { value: "Theranostics", label: "Targeted Therapy" },
    ],
    hod: {
      name: "Dr. Ashok Kumar",
      credentials: "",
      initial: "A",
      designation: "Head of Department",
    },
    about: [
      "Nuclear medicine is a specialized branch of radiology using small amounts of radioactive materials to diagnose, manage, and treat various diseases including cancer. It offers early detection by imaging internal bodily processes rather than just anatomy, with procedures like PET and SPECT scans.",
      "The department provides theranostic services for thyroid cancer, prostate cancer, and neuroendocrine tumors, as well as diagnostic services for organ function evaluation.",
    ],
    team: [
      {
        name: "Dr. Ashok Kumar",
        credentials: "",
        designation: "Head of Department",
        tags: ["PET-CT", "Theranostics"],
      },
      {
        name: "Dr. R. Krishnakumar",
        credentials: "DMRT, MD(RT), DRM, PhD",
        designation: "Professor",
      },
    ],
    conditions: [
      {
        category: "Diagnostic Services",
        items: [
          "PET-CT scanning",
          "Bone scans",
          "Thyroid scans",
          "SPECT imaging",
          "Organ function evaluation",
        ],
      },
      {
        category: "Therapeutic Services",
        items: [
          "Thyroid cancer treatment (I-131)",
          "PRRT for neuroendocrine tumors",
          "Lu-177 PSMA therapy for prostate cancer",
          "Radionuclide therapy",
        ],
      },
    ],
    facilities: [
      {
        title: "PET-CT Scanner",
        description:
          "State-of-the-art molecular imaging for cancer staging and response assessment.",
      },
      {
        title: "Gamma Camera",
        description: "SPECT imaging for nuclear medicine diagnostics.",
      },
      {
        title: "Radionuclide Therapy Suite",
        description:
          "Dedicated facility for therapeutic nuclear medicine procedures.",
      },
      {
        title: "Gamma Ray Spectroscopy",
        description: "Advanced radiation measurement equipment.",
      },
    ],
    timeline: [
      {
        year: "1957",
        text: "Nuclear Medicine department established — first in South India",
      },
      {
        year: "",
        text: "Progressive expansion of diagnostic and therapeutic capabilities",
      },
      {
        year: "",
        text: "Introduction of PET-CT and theranostics services",
      },
    ],
    achievements: [
      { text: "Established November 1957 — one of India's first nuclear medicine departments" },
      { text: "Pioneered radioactive iodine therapy and gold-198 treatment before national isotope supply" },
    ],
    gallery: [
      { src: "", alt: "PET-CT Suite" },
      { src: "", alt: "Nuclear Medicine Conference" },
      { src: "", alt: "Thyroid Cancer Camp" },
      { src: "", alt: "Research Presentation" },
      { src: "", alt: "Department Anniversary" },
      { src: "", alt: "Training Workshop" },
    ],
    faq: [
      {
        question: "What is PET-CT and why is it important?",
        answer:
          "PET-CT combines functional and anatomical imaging to detect cancer, assess staging, and monitor treatment response at the molecular level.",
      },
      {
        question: "What is nuclear medicine therapy?",
        answer:
          "It uses targeted radioactive substances to treat specific cancers like thyroid cancer (I-131), neuroendocrine tumors (PRRT), and prostate cancer (Lu-177 PSMA).",
      },
      {
        question: "Is PET-CT safe?",
        answer:
          "Yes. The radiation dose is carefully controlled and comparable to a standard CT scan. The benefits far outweigh the minimal risks.",
      },
      {
        question: "What is theranostics?",
        answer:
          "Theranostics combines diagnostic imaging and targeted therapy using the same molecular pathway — first imaging to identify the target, then treating it.",
      },
      {
        question: "How should I prepare for a PET-CT scan?",
        answer:
          "Typically you should fast for 6 hours before the scan and avoid strenuous exercise for 24 hours prior. Our team will provide specific instructions.",
      },
    ],
    contactEmail: "nuclearmedicine@cancerinstituteadyar.org",
    ctaTitle: "Consult Our Nuclear Medicine Team",
  },

  // ── 7. Quality Control ────────────────────────────────────────────────
  {
    slug: "quality-control",
    title: "Quality Control",
    metaDescription:
      "Quality Control at Cancer Institute WIA, Chennai — NABH accredited since 2019, 639 quality objectives, comprehensive patient safety and quality assurance.",
    accentColor: "#1D3557",
    accentDark: "#0F2038",
    accentLight: "#A4B8D0",
    accentPale: "#E3EAF3",
    heroTagline: "Quality Assurance · Patient Safety · NABH Compliance",
    heroDesc:
      "Compliance, Continuous Improvement leading to Excellence & safeguarding Quality across every level of patient care.",
    stats: [
      { value: "NABH", label: "Accredited Institute" },
      { value: "2015", label: "Quality Journey Start" },
      { value: "639", label: "NABH Objectives" },
      { value: "6", label: "Quality Dimensions" },
    ],
    hod: {
      name: "Mrs. V. Varalakshmi",
      credentials: "",
      initial: "V",
      designation: "Head of Department",
    },
    about: [
      "Cancer Institute (WIA) believes that Clinical Excellence and Delivery of High Quality Care are fundamental criteria. Implementation of clinical practice guidelines based on the best available scientific evidence, together with measuring quality monitors and indicators, are ongoing processes.",
      "The Cancer Institute (WIA) has been NABH accredited since July 2019. The Quality Department plays a pivotal role in overseeing all quality-related activities with emphasis on process improvement, cost effectiveness, and performance enhancement.",
    ],
    team: [
      {
        name: "Mrs. V. Varalakshmi",
        credentials: "",
        designation: "Head of Department",
        tags: ["NABH", "Quality Assurance"],
      },
    ],
    conditions: [],
    facilities: [],
    timeline: [
      { year: "2015", text: "Quality improvement journey initiated" },
      { year: "2019", text: "NABH Accreditation achieved" },
    ],
    achievements: [
      { text: "NABH Accreditation since July 2019" },
      {
        text: "639 quality objectives monitored across 6 quality dimensions",
      },
      {
        text: "Structured quality improvement programme with 40+ staff members",
      },
    ],
    gallery: [
      { src: "", alt: "NABH Accreditation Ceremony" },
      { src: "", alt: "Quality Audit Session" },
      { src: "", alt: "Staff Training Programme" },
      { src: "", alt: "Patient Safety Week" },
      { src: "", alt: "Quality Team Meeting" },
      { src: "", alt: "Awards Ceremony" },
    ],
    faq: [
      {
        question: "What is NABH accreditation?",
        answer:
          "NABH (National Accreditation Board for Hospitals) is India's premier healthcare quality standard, ensuring hospitals meet rigorous patient safety and care quality benchmarks.",
      },
      {
        question: "How does Quality Control benefit patients?",
        answer:
          "It ensures standardized clinical protocols, infection control, patient safety measures, and continuous improvement of care delivery.",
      },
      {
        question: "When was Cancer Institute WIA accredited?",
        answer:
          "The Institute achieved NABH accreditation in July 2019 and continues to maintain and enhance its quality standards.",
      },
      {
        question: "What are the six quality dimensions?",
        answer:
          "Safe, effective, efficient, equitable, timely, and patient-centered care — aligned with WHO standards.",
      },
      {
        question: "How is quality monitored?",
        answer:
          "Through regular clinical audits, quality indicators tracking, patient satisfaction surveys, and structured improvement programmes.",
      },
    ],
    contactEmail: "nabhoffice@cancerinstitutewia.org",
    ctaTitle: "Contact Our Quality Team",
  },

  // ── 8. Palliative Medicine ────────────────────────────────────────────
  {
    slug: "palliative-medicine",
    title: "Palliative Medicine",
    metaDescription:
      "Palliative Medicine at Cancer Institute WIA, Chennai — pain management, symptom control, psychosocial support, home care, and free hospice facility.",
    accentColor: "#F28482",
    accentDark: "#D45E5C",
    accentLight: "#F8BDB8",
    accentPale: "#FDE8E7",
    heroTagline:
      "Palliative Medicine · Supportive Oncology · Hospice Care",
    heroDesc: "Integrating Comfort with Cancer Care.",
    stats: [
      { value: "DNB", label: "Training Programme" },
      { value: "Free", label: "Hospice Facility" },
      { value: "Home", label: "Palliative Care" },
      { value: "MDT", label: "Approach" },
    ],
    hod: {
      name: "Dr. V. V. Meenakshi",
      credentials: "",
      initial: "M",
      designation: "Head of Department",
    },
    about: [
      "The Department of Palliative Medicine provides specialized, patient-centered care aimed at improving the quality of life of patients and families facing cancer and other serious illnesses.",
      "Our multidisciplinary team focuses on comprehensive symptom management, psychosocial support, communication about goals of care, and support during advanced illness and end-of-life care. Care is delivered across outpatient clinics, inpatient services, ICUs, and home-based care.",
    ],
    team: [
      {
        name: "Dr. V. V. Meenakshi",
        credentials: "",
        designation: "Head of Department",
        tags: ["Pain Management", "Hospice", "Home Care"],
      },
    ],
    conditions: [
      {
        category: "Supportive Care",
        items: [
          "Severe or refractory pain",
          "Breathlessness and respiratory distress",
          "Nausea, vomiting, constipation",
          "Fatigue and weakness",
          "Anxiety, depression, psychological distress",
          "End-of-life care",
          "Psychosocial needs",
          "Home visit and hospice planning",
        ],
      },
    ],
    facilities: [
      {
        title: "DNB Training Programme",
        description:
          "Postgraduate training in Palliative Medicine with 2 trainees per year.",
      },
      {
        title: "Home-Based Palliative Care",
        description:
          "Palliative care services within Chennai for home-bound patients.",
      },
      {
        title: "Hospice Facility",
        description:
          "Dedicated free-of-cost hospice at Sriperumbudur for end-of-life care.",
      },
    ],
    timeline: [
      { year: "2014", text: "Established integrated palliative care service within the cancer care continuum." },
    ],
    achievements: [
      { text: "Integrated palliative care service from diagnosis through end-of-life" },
      { text: "DNB Palliative Medicine training programme established" },
      { text: "Home-based palliative care services across Chennai" },
      { text: "Mahaveer Ashray Hospice at Sriperumbudur — free end-of-life care" },
      { text: "National leadership in palliative care education via Academy of Palliative Medicine" },
      { text: "Active publications and research in palliative oncology" },
    ],
    gallery: [
      { src: "", alt: "Palliative Care Workshop" },
      { src: "", alt: "Home Care Team" },
      { src: "", alt: "Hospice Facility" },
      { src: "", alt: "Pain Management CME" },
      { src: "", alt: "Patient Support Group" },
      { src: "", alt: "IAPC Conference" },
    ],
    faq: [
      {
        question: "What is palliative care?",
        answer:
          "Palliative care focuses on relieving pain, managing symptoms, and improving quality of life for patients with serious illness — it works alongside curative treatment.",
      },
      {
        question: "Is palliative care only for end-of-life?",
        answer:
          "No. Palliative care can begin at any stage of illness and works alongside active cancer treatment to improve comfort and quality of life.",
      },
      {
        question: "Does the department provide home care?",
        answer:
          "Yes. We offer home-based palliative care services within Chennai for patients who cannot travel to the hospital.",
      },
      {
        question: "Is the hospice facility free?",
        answer:
          "Yes. Our hospice at Sriperumbudur provides free end-of-life care for patients in need.",
      },
      {
        question: "How can I be referred to palliative care?",
        answer:
          "Ask your treating oncologist for a referral, or contact our department directly. Early referral is encouraged for best outcomes.",
      },
    ],
    contactEmail: "ppc@cancerinstitutewia.org",
    ctaTitle: "Consult Our Palliative Care Team",
  },

  // ── 9. Microbiology ───────────────────────────────────────────────────
  {
    slug: "microbiology",
    title: "Microbiology",
    metaDescription:
      "Microbiology at Cancer Institute WIA, Chennai — NABL accredited diagnostic lab, 90K clinical samples/year, MALDI-TOF automation, infection control & surveillance.",
    accentColor: "#06D6A0",
    accentDark: "#049E76",
    accentLight: "#A0EED8",
    accentPale: "#E0FBF3",
    heroTagline: "Diagnostic Microbiology · Infection Control",
    heroDesc:
      "Identification of pathogens and antimicrobial patterns with advanced precision diagnostics for better patient outcomes.",
    stats: [
      { value: "NABL", label: "Accredited Lab" },
      { value: "90K", label: "Clinical Samples/Year" },
      { value: "20K", label: "Surveillance Samples" },
      { value: "MALDI-TOF", label: "Automation" },
    ],
    hod: {
      name: "Dr. R. Packia Nancy",
      credentials: "MBBS, DLO, MD(Micro), PhD",
      initial: "P",
      designation: "Head of Department & IPCO",
    },
    about: [
      "The Microbiology Department is an NABL accredited multidisciplinary lab consisting of bacteriology, mycology, virology, mycobacteriology, serological and Hospital Infection Control laboratory, playing a pivotal role in preventing and treating infections in cancer patients.",
      "Around 90,000 clinical samples and 20,000 surveillance samples are processed per year. The department uses advanced automation including MALDI-TOF, BacT/ALERT blood culture systems, and Vitek 2 Compact for rapid identification and susceptibility testing.",
    ],
    team: [
      {
        name: "Dr. R. Packia Nancy",
        credentials: "MBBS, DLO, MD(Micro), PhD",
        designation: "Head of Department & IPCO",
        tags: ["Infection Control", "NABL"],
      },
      {
        name: "Dr. Akshen Sundaresen",
        credentials: "MBBS, MD(Micro)",
        designation: "Senior Resident",
      },
    ],
    conditions: [
      {
        category: "Diagnostic Services",
        items: [
          "Bacteriology",
          "Mycology",
          "Virology",
          "Mycobacteriology (AFB/TB)",
          "Serology",
          "Antimicrobial susceptibility testing",
        ],
      },
      {
        category: "Infection Control",
        items: [
          "Hospital infection surveillance",
          "Antibiotic resistance monitoring",
          "Theatre & ICU surveillance",
          "Hand hygiene compliance",
          "CLABSI, VAP, SSI & CAUTI surveillance",
        ],
      },
    ],
    facilities: [
      {
        title: "MALDI-TOF System",
        description:
          "Rapid microorganism identification using mass spectrometry.",
      },
      {
        title: "BacT/ALERT Blood Culture",
        description:
          "240-cell automated blood culture system for adults and paediatric patients.",
      },
      {
        title: "Vitek 2 Compact",
        description:
          "Automated identification and susceptibility testing.",
      },
      {
        title: "Abbott CMIA System",
        description:
          "Fully automated immunoassay analyzer for viral marker detection.",
      },
      {
        title: "PCR & Molecular Testing",
        description:
          "Polymerase chain reaction for rapid pathogen detection.",
      },
    ],
    timeline: [],
    achievements: [
      { text: "NABL Accreditation for diagnostic laboratory" },
      { text: "Processing 90,000+ clinical samples annually" },
      { text: "20,000+ surveillance samples for infection control" },
    ],
    gallery: [
      { src: "", alt: "MALDI-TOF Lab" },
      { src: "", alt: "Infection Control Training" },
      { src: "", alt: "Blood Culture Facility" },
      { src: "", alt: "Lab Quality Audit" },
      { src: "", alt: "Hand Hygiene Day" },
      { src: "", alt: "Microbiology CME" },
    ],
    faq: [
      {
        question:
          "What diagnostic tests does the Microbiology lab perform?",
        answer:
          "We perform culture and sensitivity testing for bacteria, fungi, and mycobacteria, along with viral marker testing, molecular diagnostics, and antimicrobial susceptibility testing.",
      },
      {
        question: "How does the lab help cancer patients?",
        answer:
          "Cancer patients are immunocompromised and prone to infections. Rapid, accurate identification of pathogens helps start the right antibiotics quickly, reducing complications.",
      },
      {
        question: "What is MALDI-TOF?",
        answer:
          "MALDI-TOF is a rapid identification technology that can identify bacteria from blood cultures in hours instead of days, enabling faster treatment decisions.",
      },
      {
        question: "Is the laboratory accredited?",
        answer:
          "Yes. Our laboratory is NABL (National Accreditation Board for Testing and Calibration Laboratories) accredited.",
      },
      {
        question:
          "What infection control measures are in place?",
        answer:
          "We conduct comprehensive surveillance of hospital infections, monitor antibiotic resistance patterns, ensure hand hygiene compliance, and audit infection control practices across all hospital areas.",
      },
    ],
    contactEmail: "microbiology@cancerinstitutewia.org",
    ctaTitle: "Contact Our Microbiology Team",
  },
];

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}

export function getAllDepartmentSlugs(): string[] {
  return departments.map((d) => d.slug);
}
