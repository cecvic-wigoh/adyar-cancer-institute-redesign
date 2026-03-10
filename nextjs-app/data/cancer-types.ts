export interface CancerType {
  slug: string;
  title: string;
  shortDesc: string;
  metaDescription: string;
  heroDesc: string;
  understanding: string[];
  symptoms: string[];
  riskFactors: string[];
  treatments: { title: string; description: string }[];
  relatedDepartments: { slug: string; title: string; description: string }[];
  specialists: { slug: string; name: string; specialty: string; designation: string }[];
  ctaTitle: string;
}

export const cancerTypes: CancerType[] = [
  {
    slug: 'breast-cancer',
    title: 'Breast Cancer',
    shortDesc: 'Comprehensive diagnosis, surgery, targeted therapy & reconstruction',
    metaDescription: 'Breast cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'The most common cancer among women in India. Early detection through screening and self-examination significantly improves treatment outcomes.',
    understanding: [
      'Breast cancer develops when cells in the breast tissue grow abnormally and form a tumour. It is the most frequently diagnosed cancer among women worldwide and in India.',
      'At Cancer Institute (WIA), we have been at the forefront of breast cancer research and treatment for over seven decades.',
      'With advances in early detection, surgical techniques, targeted therapies, and immunotherapy, breast cancer survival rates have improved considerably.',
    ],
    symptoms: ['A new lump or mass in the breast or underarm area', 'Change in the size, shape, or appearance of the breast', 'Dimpling, puckering, or thickening of breast skin', 'Nipple retraction, discharge, or scaling', 'Redness, swelling, or warmth over the breast', 'Persistent pain in the breast or nipple area'],
    riskFactors: ['Female gender and increasing age (over 50)', 'Family history of breast or ovarian cancer', 'BRCA1/BRCA2 gene mutations', 'Early menarche or late menopause', 'Obesity, physical inactivity, and alcohol consumption', 'Prolonged hormone replacement therapy'],
    treatments: [
      { title: 'Surgery', description: 'Breast-conserving surgery (lumpectomy) or mastectomy with sentinel lymph node biopsy.' },
      { title: 'Chemotherapy', description: 'Neoadjuvant or adjuvant chemotherapy using evidence-based regimens.' },
      { title: 'Radiation Therapy', description: 'External beam radiation or brachytherapy after surgery.' },
      { title: 'Hormonal & Targeted Therapy', description: 'Anti-oestrogen agents and HER2-targeted drugs like trastuzumab.' },
      { title: 'Supportive & Palliative Care', description: 'Nutrition counselling, psycho-oncology, physiotherapy, and pain management.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Breast-conserving and reconstructive surgeries.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Chemotherapy and targeted therapy protocols.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Advanced radiotherapy techniques.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialty: 'Surgical Oncology', designation: 'Senior Consultant' },
      { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialty: 'Medical Oncology', designation: 'Senior Consultant' },
      { slug: 'dr-anbalagan', name: 'Dr. P. Anbalagan', specialty: 'Radiation Oncology', designation: 'Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Breast Cancer Care',
  },
  {
    slug: 'cervical-cancer', title: 'Cervical Cancer', shortDesc: 'HPV screening, colposcopy, surgery & radiation therapy',
    metaDescription: 'Cervical cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'One of the most preventable cancers through HPV vaccination and regular screening.',
    understanding: ['Cervical cancer develops in the cells of the cervix. It is almost always caused by persistent HPV infection.', 'At CI(WIA), we run one of India\'s oldest cervical cancer screening programmes.', 'With regular screening and HPV vaccination, cervical cancer is largely preventable.'],
    symptoms: ['Abnormal vaginal bleeding', 'Unusual vaginal discharge', 'Pelvic pain unrelated to menstruation', 'Pain during intercourse', 'Unexplained weight loss and fatigue', 'Leg swelling (in advanced cases)'],
    riskFactors: ['Persistent HPV infection (types 16 and 18)', 'Multiple sexual partners', 'Weakened immune system', 'Smoking', 'Long-term use of oral contraceptives', 'Not having regular Pap smear screening'],
    treatments: [
      { title: 'Surgery', description: 'Conization, radical hysterectomy, or pelvic exenteration.' },
      { title: 'Radiation Therapy', description: 'External beam radiation combined with brachytherapy.' },
      { title: 'Chemotherapy', description: 'Concurrent chemoradiation using cisplatin-based regimens.' },
      { title: 'Immunotherapy', description: 'Immune checkpoint inhibitors for recurrent disease.' },
      { title: 'Supportive Care', description: 'Rehabilitation, psycho-oncology, and follow-up care.' },
    ],
    relatedDepartments: [
      { slug: 'gynaecological-oncology', title: 'Gynaecological Oncology', description: 'Specialised care for cervical cancers.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Advanced brachytherapy and radiation.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Chemotherapy and immunotherapy.' },
    ],
    specialists: [
      { slug: 'dr-vijayalakshmi', name: 'Dr. K. Vijayalakshmi', specialty: 'Gynaec Oncology', designation: 'Consultant' },
      { slug: 'dr-anbalagan', name: 'Dr. P. Anbalagan', specialty: 'Radiation Oncology', designation: 'Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Cervical Cancer Care',
  },
  {
    slug: 'lung-cancer', title: 'Lung Cancer', shortDesc: 'Expert thoracic oncology, targeted therapy & immunotherapy',
    metaDescription: 'Lung cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'One of the most common cancers worldwide. Advances in targeted therapy are transforming outcomes.',
    understanding: ['Lung cancer is one of the leading causes of cancer death globally.', 'At CI(WIA), our thoracic oncology team provides comprehensive diagnosis and treatment.', 'With advances in molecular profiling and immunotherapy, treatment options are improving.'],
    symptoms: ['Persistent cough that worsens', 'Coughing up blood', 'Chest pain during deep breathing', 'Shortness of breath and wheezing', 'Unexplained weight loss', 'Recurrent respiratory infections'],
    riskFactors: ['Tobacco smoking', 'Exposure to radon or asbestos', 'Family history', 'Air pollution', 'Previous radiation to chest', 'COPD'],
    treatments: [
      { title: 'Surgery', description: 'Lobectomy, pneumonectomy, or wedge resection.' },
      { title: 'Chemotherapy', description: 'Platinum-based doublet chemotherapy.' },
      { title: 'Radiation Therapy', description: 'SBRT or conventional radiation.' },
      { title: 'Targeted Therapy', description: 'EGFR/ALK inhibitors based on tumour profiling.' },
      { title: 'Immunotherapy', description: 'Immune checkpoint inhibitors for advanced disease.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Thoracic surgery for lung cancer.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Chemotherapy and targeted therapy.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Advanced radiation techniques.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialty: 'Surgical Oncology', designation: 'Director & Senior Consultant' },
      { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialty: 'Medical Oncology', designation: 'Senior Oncologist' },
    ],
    ctaTitle: 'Get Expert Lung Cancer Care',
  },
  {
    slug: 'colorectal-cancer', title: 'Colorectal Cancer', shortDesc: 'Minimally invasive surgery, chemotherapy & bowel conservation',
    metaDescription: 'Colorectal cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'A common but treatable cancer. Early screening through colonoscopy can detect and prevent it.',
    understanding: ['Colorectal cancer affects the colon or rectum and is one of the most common cancers globally.', 'At CI(WIA), our team specialises in minimally invasive procedures.', 'Regular screening through colonoscopy is recommended for adults aged 45+.'],
    symptoms: ['Changes in bowel habits', 'Blood in stool', 'Persistent abdominal discomfort', 'Feeling of incomplete bowel emptying', 'Unexplained weight loss', 'Weakness or fatigue'],
    riskFactors: ['Age over 45', 'Family history of colorectal cancer', 'Inflammatory bowel disease', 'High-fat low-fibre diet', 'Sedentary lifestyle', 'Smoking and alcohol'],
    treatments: [
      { title: 'Surgery', description: 'Minimally invasive colectomy or anterior resection.' },
      { title: 'Chemotherapy', description: 'FOLFOX or CAPOX regimens.' },
      { title: 'Radiation Therapy', description: 'Neoadjuvant chemoradiation for rectal cancer.' },
      { title: 'Targeted Therapy', description: 'Anti-VEGF and anti-EGFR agents.' },
      { title: 'Supportive Care', description: 'Stoma care and nutrition support.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Minimally invasive colorectal surgery.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Chemotherapy and targeted therapy.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Neoadjuvant chemoradiation.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialty: 'Surgical Oncology', designation: 'Director & Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Colorectal Cancer Care',
  },
  {
    slug: 'blood-cancer', title: 'Blood Cancer', shortDesc: 'Haematology, bone marrow transplant & immunotherapy',
    metaDescription: 'Blood cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Leukaemia, lymphoma, and myeloma — comprehensive diagnosis and cutting-edge treatment.',
    understanding: ['Blood cancers include leukaemia, lymphoma, and myeloma.', 'At CI(WIA), our haematology department has advanced diagnostic facilities.', 'Treatment options have expanded with targeted therapies and bone marrow transplant.'],
    symptoms: ['Frequent infections', 'Unexplained fever or night sweats', 'Persistent fatigue', 'Easy bruising or bleeding', 'Swollen lymph nodes', 'Bone pain'],
    riskFactors: ['Previous chemotherapy exposure', 'Genetic disorders', 'Family history', 'Benzene exposure', 'Certain viral infections', 'Weakened immune system'],
    treatments: [
      { title: 'Chemotherapy', description: 'Intensive induction and consolidation protocols.' },
      { title: 'Bone Marrow Transplant', description: 'Autologous and allogeneic stem cell transplantation.' },
      { title: 'Targeted Therapy', description: 'Tyrosine kinase inhibitors and monoclonal antibodies.' },
      { title: 'Immunotherapy', description: 'CAR-T cell therapy and checkpoint inhibitors.' },
      { title: 'Supportive Care', description: 'Blood product support and infection management.' },
    ],
    relatedDepartments: [
      { slug: 'haematology', title: 'Haematology', description: 'Specialised blood cancer care.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Chemotherapy and immunotherapy.' },
      { slug: 'paediatric-oncology', title: 'Paediatric Oncology', description: 'Childhood leukaemia treatment.' },
    ],
    specialists: [
      { slug: 'dr-balasubramanian', name: 'Dr. M. Balasubramanian', specialty: 'Haematology', designation: 'Consultant Haematologist' },
      { slug: 'dr-shanta', name: 'Dr. V. Shanta', specialty: 'Paediatric Oncology', designation: 'Chairperson' },
    ],
    ctaTitle: 'Get Expert Blood Cancer Care',
  },
  {
    slug: 'head-neck-cancer', title: 'Head & Neck Cancer', shortDesc: 'Organ-preservation surgery, radiation & speech rehabilitation',
    metaDescription: 'Head and neck cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Cancers of the oral cavity, throat, larynx, and sinuses. Focus on organ preservation.',
    understanding: ['Head and neck cancers include cancers of the oral cavity, pharynx, larynx, and salivary glands.', 'At CI(WIA), our team is experienced in organ-preserving treatments.', 'Early-stage disease can often be treated with surgery or radiation alone.'],
    symptoms: ['Non-healing ulcer in the mouth', 'Persistent sore throat or hoarseness', 'Difficulty swallowing', 'A lump in the neck', 'Ear pain or hearing changes', 'Unexplained weight loss'],
    riskFactors: ['Tobacco use (smoking, chewing)', 'Heavy alcohol consumption', 'HPV infection', 'Poor oral hygiene', 'Occupational chemical exposure', 'Previous radiation to head/neck'],
    treatments: [
      { title: 'Surgery', description: 'Wide excision, glossectomy, or laryngectomy with reconstruction.' },
      { title: 'Radiation Therapy', description: 'IMRT for precise, organ-sparing treatment.' },
      { title: 'Chemotherapy', description: 'Concurrent chemoradiation for organ preservation.' },
      { title: 'Targeted Therapy', description: 'Cetuximab and other targeted agents.' },
      { title: 'Rehabilitation', description: 'Speech therapy, swallowing rehabilitation, and prosthetics.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Head and neck surgery.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'IMRT and brachytherapy.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Chemotherapy and targeted therapy.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialty: 'Surgical Oncology', designation: 'Director & Senior Consultant' },
      { slug: 'dr-anbalagan', name: 'Dr. P. Anbalagan', specialty: 'Radiation Oncology', designation: 'Head, Radiation Oncology' },
    ],
    ctaTitle: 'Get Expert Head & Neck Cancer Care',
  },
  {
    slug: 'prostate-cancer', title: 'Prostate Cancer', shortDesc: 'Precision biopsy, robotic surgery & brachytherapy options',
    metaDescription: 'Prostate cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'The most common cancer in men over 50. Early detection ensures excellent outcomes.',
    understanding: ['Prostate cancer develops in the prostate gland and is one of the most common cancers in men.', 'At CI(WIA), we use a risk-stratified approach.', 'Treatment decisions consider grade, stage, PSA levels, age, and preferences.'],
    symptoms: ['Difficulty urinating', 'Frequent urination at night', 'Blood in urine or semen', 'Pain in hips, back, or pelvis', 'Erectile dysfunction', 'Often asymptomatic in early stages'],
    riskFactors: ['Age over 50', 'African descent', 'Family history', 'BRCA2 mutations', 'High-fat diet', 'Chemical exposure'],
    treatments: [
      { title: 'Active Surveillance', description: 'Monitoring with regular PSA tests for low-risk cancers.' },
      { title: 'Surgery', description: 'Radical prostatectomy for localised disease.' },
      { title: 'Radiation Therapy', description: 'External beam radiation or brachytherapy.' },
      { title: 'Hormonal Therapy', description: 'Androgen deprivation therapy for advanced disease.' },
      { title: 'Chemotherapy', description: 'Docetaxel-based chemotherapy for resistant disease.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Radical prostatectomy.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Brachytherapy and IMRT.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Hormonal therapy and chemotherapy.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialty: 'Surgical Oncology', designation: 'Director & Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Prostate Cancer Care',
  },
  {
    slug: 'thyroid-cancer', title: 'Thyroid Cancer', shortDesc: 'Minimally invasive surgery & radioiodine ablation therapy',
    metaDescription: 'Thyroid cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'One of the most treatable cancers with excellent survival rates.',
    understanding: ['Thyroid cancer develops in the thyroid gland and is one of the most treatable forms of cancer.', 'At CI(WIA), our endocrine surgery team provides expert thyroidectomy.', 'Thyroid cancer has one of the highest survival rates among all cancers.'],
    symptoms: ['A painless lump in the neck', 'Difficulty swallowing', 'Hoarseness or voice changes', 'Persistent cough', 'Swollen lymph nodes', 'Pain in neck or throat'],
    riskFactors: ['Female gender', 'Age 25-65', 'Childhood radiation exposure', 'Family history', 'MEN syndromes', 'Iodine deficiency'],
    treatments: [
      { title: 'Surgery', description: 'Total or near-total thyroidectomy with lymph node dissection.' },
      { title: 'Radioiodine Therapy', description: 'Post-operative I-131 ablation.' },
      { title: 'TSH Suppression', description: 'Levothyroxine therapy to reduce recurrence.' },
      { title: 'External Radiation', description: 'For radioiodine-refractory disease.' },
      { title: 'Targeted Therapy', description: 'Tyrosine kinase inhibitors for advanced disease.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Expert thyroidectomy.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Radioiodine therapy.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Targeted therapy.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialty: 'Surgical Oncology', designation: 'Director & Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Thyroid Cancer Care',
  },
];

export function getCancerBySlug(slug: string): CancerType | undefined {
  return cancerTypes.find(c => c.slug === slug);
}
