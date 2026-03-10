export interface Doctor {
  slug: string;
  name: string;
  specialty: string;
  designation: string;
  department: { slug: string; title: string };
  experience: string;
  metaDescription: string;
  about: string[];
  qualifications: string[];
  areasOfExpertise: string[];
  conditionsTreated: string[];
}

export const doctors: Doctor[] = [
  {
    slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialty: 'Surgical Oncology', designation: 'Director & Senior Consultant',
    department: { slug: 'surgical-oncology', title: 'Surgical Oncology' }, experience: '30+ Years Experience',
    metaDescription: 'Dr. S. Krishnamurthy — Director, Surgical Oncology at Cancer Institute (WIA), Chennai.',
    about: ['Dr. S. Krishnamurthy is the Director and Senior Consultant in Surgical Oncology at Cancer Institute (WIA).', 'He specialises in breast cancer surgery, head and neck oncology, and gastrointestinal surgical oncology.'],
    qualifications: ['MBBS', 'MS (General Surgery)', 'MCh (Surgical Oncology)', 'Fellowship in Oncoplastic Surgery'],
    areasOfExpertise: ['Breast Cancer Surgery', 'Head & Neck Oncology', 'Gastrointestinal Oncosurgery', 'Oncoplastic Surgery', 'Minimally Invasive Surgery'],
    conditionsTreated: ['Breast Cancer', 'Head & Neck Cancer', 'Colorectal Cancer', 'Prostate Cancer', 'Thyroid Cancer', 'Lung Cancer'],
  },
  {
    slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialty: 'Medical Oncology', designation: 'Senior Oncologist',
    department: { slug: 'medical-oncology', title: 'Medical Oncology' }, experience: '25+ Years Experience',
    metaDescription: 'Dr. R. Swaminathan — Senior Oncologist at Cancer Institute (WIA), Chennai.',
    about: ['Dr. R. Swaminathan is a Senior Oncologist in Medical Oncology at Cancer Institute (WIA).', 'He has extensive experience in chemotherapy, targeted therapy, and immunotherapy.'],
    qualifications: ['MBBS', 'MD (Internal Medicine)', 'DM (Medical Oncology)'],
    areasOfExpertise: ['Breast Cancer Chemotherapy', 'Lung Cancer Targeted Therapy', 'GI Oncology', 'Immunotherapy', 'Clinical Trials'],
    conditionsTreated: ['Breast Cancer', 'Lung Cancer', 'Colorectal Cancer', 'Blood Cancer', 'Ovarian Cancer'],
  },
  {
    slug: 'dr-anbalagan', name: 'Dr. P. Anbalagan', specialty: 'Radiation Oncology', designation: 'Head, Radiation Oncology',
    department: { slug: 'radiation-oncology', title: 'Radiation Oncology' }, experience: '20+ Years Experience',
    metaDescription: 'Dr. P. Anbalagan — Head, Radiation Oncology at Cancer Institute (WIA), Chennai.',
    about: ['Dr. P. Anbalagan is the Head of Radiation Oncology at Cancer Institute (WIA).', 'He is an expert in IMRT, brachytherapy, and stereotactic radiosurgery.'],
    qualifications: ['MBBS', 'MD (Radiation Oncology)', 'Fellowship in Brachytherapy'],
    areasOfExpertise: ['IMRT & IGRT', 'Brachytherapy', 'Stereotactic Radiosurgery', 'Head & Neck Radiation', 'Cervical Cancer Radiation'],
    conditionsTreated: ['Cervical Cancer', 'Head & Neck Cancer', 'Breast Cancer', 'Prostate Cancer', 'Brain Tumours'],
  },
  {
    slug: 'dr-shanta', name: 'Dr. V. Shanta', specialty: 'Paediatric Oncology', designation: 'Chairperson & Senior Consultant',
    department: { slug: 'paediatric-oncology', title: 'Paediatric Oncology' }, experience: '50+ Years Experience',
    metaDescription: 'Dr. V. Shanta — Chairperson at Cancer Institute (WIA), Chennai.',
    about: ['Dr. V. Shanta is the Chairperson at Cancer Institute (WIA).', 'Her pioneering contributions have shaped cancer care in India.'],
    qualifications: ['MBBS', 'DMRT', 'Honorary Doctorates'],
    areasOfExpertise: ['Paediatric Oncology', 'Cancer Epidemiology', 'Cancer Registry', 'Public Health Oncology', 'Cancer Prevention'],
    conditionsTreated: ['Childhood Leukaemia', 'Paediatric Solid Tumours', 'Lymphoma in Children', 'Retinoblastoma'],
  },
  {
    slug: 'dr-balasubramanian', name: 'Dr. M. Balasubramanian', specialty: 'Haematology', designation: 'Consultant Haematologist',
    department: { slug: 'haematology', title: 'Haematology' }, experience: '15+ Years Experience',
    metaDescription: 'Dr. M. Balasubramanian — Consultant Haematologist at Cancer Institute (WIA), Chennai.',
    about: ['Dr. M. Balasubramanian is a Consultant Haematologist at Cancer Institute (WIA).', 'He specialises in leukaemia, lymphoma, and myeloma treatment.'],
    qualifications: ['MBBS', 'MD (Pathology)', 'DM (Clinical Haematology)'],
    areasOfExpertise: ['Acute & Chronic Leukaemia', 'Lymphoma', 'Multiple Myeloma', 'Bone Marrow Transplant', 'Haematological Diagnostics'],
    conditionsTreated: ['Acute Leukaemia', 'Chronic Leukaemia', 'Hodgkin Lymphoma', 'Non-Hodgkin Lymphoma', 'Multiple Myeloma'],
  },
  {
    slug: 'dr-vijayalakshmi', name: 'Dr. K. Vijayalakshmi', specialty: 'Gynaec Oncology', designation: 'Consultant Gynaec Oncologist',
    department: { slug: 'gynaecological-oncology', title: 'Gynaecological Oncology' }, experience: '18+ Years Experience',
    metaDescription: 'Dr. K. Vijayalakshmi — Consultant Gynaec Oncologist at Cancer Institute (WIA), Chennai.',
    about: ['Dr. K. Vijayalakshmi is a Consultant Gynaecological Oncologist at Cancer Institute (WIA).', 'She specialises in cervical, ovarian, and endometrial cancer management.'],
    qualifications: ['MBBS', 'MS (Obstetrics & Gynaecology)', 'Fellowship in Gynaecological Oncology'],
    areasOfExpertise: ['Cervical Cancer Surgery', 'Ovarian Cancer Debulking', 'Radical Hysterectomy', 'HPV Screening', 'Fertility-Preserving Surgery'],
    conditionsTreated: ['Cervical Cancer', 'Ovarian Cancer', 'Endometrial Cancer', 'Vulval Cancer', 'Gestational Trophoblastic Disease'],
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find(d => d.slug === slug);
}
