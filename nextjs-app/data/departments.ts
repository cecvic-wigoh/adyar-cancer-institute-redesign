export interface Department {
  slug: string;
  title: string;
  metaDescription: string;
  heroDesc: string;
  about: string[];
  capabilities: { title: string; description: string }[];
  relatedCancers: { slug: string; title: string; description: string }[];
  specialists: { slug: string; name: string; specialty: string; designation: string }[];
  ctaTitle: string;
}

export const departments: Department[] = [
  {
    slug: 'surgical-oncology', title: 'Surgical Oncology',
    metaDescription: 'Surgical Oncology at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Expert cancer surgery with organ-preserving techniques and reconstructive options.',
    about: ['The Department of Surgical Oncology at Cancer Institute (WIA) is one of the most experienced cancer surgery units in India.', 'We specialise in organ-preserving, minimally invasive, and reconstructive surgeries.'],
    capabilities: [
      { title: 'Breast Surgery', description: 'Breast-conserving surgery, mastectomy, oncoplastic procedures.' },
      { title: 'Head & Neck Surgery', description: 'Organ-preserving surgery, microvascular reconstruction.' },
      { title: 'Gastrointestinal Surgery', description: 'Minimally invasive colorectal and gastric cancer surgery.' },
      { title: 'Thoracic Surgery', description: 'Lobectomy, pneumonectomy, chest wall resections.' },
      { title: 'Urological Surgery', description: 'Radical prostatectomy, nephrectomy, cystectomy.' },
    ],
    relatedCancers: [
      { slug: 'breast-cancer', title: 'Breast Cancer', description: 'Comprehensive surgical care.' },
      { slug: 'head-neck-cancer', title: 'Head & Neck Cancer', description: 'Organ-preserving surgery.' },
      { slug: 'colorectal-cancer', title: 'Colorectal Cancer', description: 'Minimally invasive surgery.' },
    ],
    specialists: [{ slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialty: 'Surgical Oncology', designation: 'Director & Senior Consultant' }],
    ctaTitle: 'Consult Our Surgical Oncology Team',
  },
  {
    slug: 'medical-oncology', title: 'Medical Oncology',
    metaDescription: 'Medical Oncology at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Chemotherapy, targeted therapy, immunotherapy, and clinical trials.',
    about: ['The Department of Medical Oncology provides drug-based cancer treatments.', 'Our medical oncologists participate in national and international clinical trials.'],
    capabilities: [
      { title: 'Chemotherapy', description: 'Standard and dose-dense protocols for all cancer types.' },
      { title: 'Targeted Therapy', description: 'Molecularly targeted agents based on tumour profiling.' },
      { title: 'Immunotherapy', description: 'Immune checkpoint inhibitors.' },
      { title: 'Clinical Trials', description: 'Access to clinical trials for eligible patients.' },
      { title: 'Supportive Care', description: 'Anti-emetic protocols and side-effect management.' },
    ],
    relatedCancers: [
      { slug: 'breast-cancer', title: 'Breast Cancer', description: 'Chemotherapy and targeted therapy.' },
      { slug: 'lung-cancer', title: 'Lung Cancer', description: 'Targeted therapy and immunotherapy.' },
      { slug: 'blood-cancer', title: 'Blood Cancer', description: 'Intensive chemotherapy.' },
    ],
    specialists: [{ slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialty: 'Medical Oncology', designation: 'Senior Oncologist' }],
    ctaTitle: 'Consult Our Medical Oncology Team',
  },
  {
    slug: 'radiation-oncology', title: 'Radiation Oncology',
    metaDescription: 'Radiation Oncology at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Advanced radiation therapy including IMRT, brachytherapy, and stereotactic radiosurgery.',
    about: ['The Department offers state-of-the-art radiation therapy.', 'Our team delivers curative and palliative radiation therapy.'],
    capabilities: [
      { title: 'IMRT / IGRT', description: 'Intensity-modulated and image-guided radiation therapy.' },
      { title: 'Brachytherapy', description: 'Internal radiation for cervical and other cancers.' },
      { title: 'Stereotactic Radiosurgery', description: 'High-precision radiation for brain tumours.' },
      { title: '3D Conformal RT', description: 'Three-dimensional conformal radiation therapy.' },
      { title: 'Palliative Radiation', description: 'Pain relief through targeted radiation.' },
    ],
    relatedCancers: [
      { slug: 'cervical-cancer', title: 'Cervical Cancer', description: 'Chemoradiation and brachytherapy.' },
      { slug: 'breast-cancer', title: 'Breast Cancer', description: 'Post-operative radiation.' },
      { slug: 'head-neck-cancer', title: 'Head & Neck Cancer', description: 'IMRT treatment.' },
    ],
    specialists: [{ slug: 'dr-anbalagan', name: 'Dr. P. Anbalagan', specialty: 'Radiation Oncology', designation: 'Head, Radiation Oncology' }],
    ctaTitle: 'Consult Our Radiation Oncology Team',
  },
  {
    slug: 'paediatric-oncology', title: 'Paediatric Oncology',
    metaDescription: 'Paediatric Oncology at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Compassionate cancer care for children and adolescents.',
    about: ['We provide comprehensive cancer care for children and adolescents.', 'We focus on achieving cure while minimising long-term side effects.'],
    capabilities: [
      { title: 'Childhood Leukaemia', description: 'Intensive chemotherapy with excellent cure rates.' },
      { title: 'Solid Tumours', description: 'Treatment of Wilms tumour, neuroblastoma, retinoblastoma.' },
      { title: 'Lymphoma', description: 'Hodgkin and non-Hodgkin lymphoma treatment.' },
      { title: 'Bone Marrow Transplant', description: 'Stem cell transplantation for high-risk cancers.' },
      { title: 'Supportive Care', description: 'Play therapy, schooling, and family support.' },
    ],
    relatedCancers: [{ slug: 'blood-cancer', title: 'Blood Cancer', description: 'Childhood leukaemia and lymphoma.' }],
    specialists: [{ slug: 'dr-shanta', name: 'Dr. V. Shanta', specialty: 'Paediatric Oncology', designation: 'Chairperson & Senior Consultant' }],
    ctaTitle: 'Consult Our Paediatric Oncology Team',
  },
  {
    slug: 'haematology', title: 'Haematology',
    metaDescription: 'Haematology at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Expert diagnosis and treatment of blood cancers.',
    about: ['The Department provides comprehensive care for all blood cancers.', 'Our laboratory has flow cytometry, cytogenetics, and molecular diagnostics.'],
    capabilities: [
      { title: 'Diagnostic Services', description: 'Flow cytometry, bone marrow biopsy, molecular testing.' },
      { title: 'Leukaemia Treatment', description: 'Intensive chemotherapy protocols.' },
      { title: 'Lymphoma Treatment', description: 'R-CHOP, ABVD, and other protocols.' },
      { title: 'Myeloma Treatment', description: 'Novel agent-based treatment.' },
      { title: 'Bone Marrow Transplant', description: 'Autologous and allogeneic transplantation.' },
    ],
    relatedCancers: [{ slug: 'blood-cancer', title: 'Blood Cancer', description: 'Comprehensive blood cancer care.' }],
    specialists: [{ slug: 'dr-balasubramanian', name: 'Dr. M. Balasubramanian', specialty: 'Haematology', designation: 'Consultant Haematologist' }],
    ctaTitle: 'Consult Our Haematology Team',
  },
  {
    slug: 'gynaecological-oncology', title: 'Gynaecological Oncology',
    metaDescription: 'Gynaecological Oncology at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Specialised care for cervical, ovarian, and endometrial cancers.',
    about: ['We provide specialised care for all cancers of the female reproductive system.', 'Our team performs radical hysterectomy, ovarian debulking, and fertility-preserving surgery.'],
    capabilities: [
      { title: 'Cervical Cancer Surgery', description: 'Radical hysterectomy and pelvic exenteration.' },
      { title: 'Ovarian Cancer', description: 'Optimal cytoreductive surgery and chemotherapy.' },
      { title: 'Endometrial Cancer', description: 'Hysterectomy, staging, and adjuvant treatment.' },
      { title: 'Screening & Prevention', description: 'HPV vaccination, Pap smear, colposcopy.' },
      { title: 'Fertility Preservation', description: 'Fertility-sparing surgery for young patients.' },
    ],
    relatedCancers: [{ slug: 'cervical-cancer', title: 'Cervical Cancer', description: 'Comprehensive cervical cancer care.' }],
    specialists: [{ slug: 'dr-vijayalakshmi', name: 'Dr. K. Vijayalakshmi', specialty: 'Gynaec Oncology', designation: 'Consultant Gynaec Oncologist' }],
    ctaTitle: 'Consult Our Gynaecological Oncology Team',
  },
];

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find(d => d.slug === slug);
}
