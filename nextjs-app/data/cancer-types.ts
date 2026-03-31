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
  specialists: { slug: string; name: string; specialties: string[]; designation: string }[];
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
      { title: 'Supportive & Palliative Care', description: 'Nutrition counselling, Psycho-Oncology & Resource Center for Tobacco Control (RCTC), physiotherapy, and pain management.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Breast-conserving and reconstructive surgeries.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Chemotherapy and targeted therapy protocols.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Advanced radiotherapy techniques.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialties: ['Surgical Oncology'], designation: 'Senior Consultant' },
      { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialties: ['Medical Oncology'], designation: 'Senior Consultant' },
      { slug: 'dr-anbalagan', name: 'Dr. P. Anbalagan', specialties: ['Radiation Oncology'], designation: 'Senior Consultant' },
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
      { title: 'Supportive Care', description: 'Rehabilitation, Psycho-Oncology & Resource Center for Tobacco Control (RCTC), and follow-up care.' },
    ],
    relatedDepartments: [
      { slug: 'gynaecological-oncology', title: 'Gynaecological Oncology', description: 'Specialised care for cervical cancers.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Advanced brachytherapy and radiation.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Chemotherapy and immunotherapy.' },
    ],
    specialists: [
      { slug: 'dr-vijayalakshmi', name: 'Dr. K. Vijayalakshmi', specialties: ['Gynaec Oncology'], designation: 'Consultant' },
      { slug: 'dr-anbalagan', name: 'Dr. P. Anbalagan', specialties: ['Radiation Oncology'], designation: 'Senior Consultant' },
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
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialties: ['Surgical Oncology'], designation: 'Director & Senior Consultant' },
      { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialties: ['Medical Oncology'], designation: 'Senior Oncologist' },
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
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialties: ['Surgical Oncology'], designation: 'Director & Senior Consultant' },
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
      { slug: 'dr-balasubramanian', name: 'Dr. M. Balasubramanian', specialties: ['Haematology'], designation: 'Consultant Haematologist' },
      { slug: 'dr-shanta', name: 'Dr. V. Shanta', specialties: ['Paediatric Oncology'], designation: 'Chairperson' },
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
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialties: ['Surgical Oncology'], designation: 'Director & Senior Consultant' },
      { slug: 'dr-anbalagan', name: 'Dr. P. Anbalagan', specialties: ['Radiation Oncology'], designation: 'Head, Radiation Oncology' },
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
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialties: ['Surgical Oncology'], designation: 'Director & Senior Consultant' },
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
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialties: ['Surgical Oncology'], designation: 'Director & Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Thyroid Cancer Care',
  },
  {
    slug: 'brain-tumour', title: 'Brain Tumour', shortDesc: 'Neuro-oncology, surgery planning, radiation, and long-term rehabilitation',
    metaDescription: 'Brain tumour care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Brain tumours require fast diagnosis, careful staging, and coordinated neuro-oncology care.',
    understanding: ['Brain tumours can arise in the brain itself or spread from cancers elsewhere in the body. Symptoms depend on the size and location of the tumour.', 'At CI(WIA), treatment planning is multidisciplinary, combining imaging, pathology, surgery, radiation oncology, and systemic therapy where needed.', 'Care also focuses on preserving neurological function, mobility, speech, and quality of life throughout treatment.'],
    symptoms: ['Persistent or worsening headaches', 'Seizures or blackouts', 'Vomiting unrelated to stomach illness', 'Changes in vision, speech, or balance', 'Weakness on one side of the body', 'Personality or memory changes'],
    riskFactors: ['Previous radiation exposure to the head', 'Certain inherited syndromes', 'History of other cancers', 'Increasing age for some tumour types', 'Occupational chemical exposure in selected cases', 'Weakened immune status'],
    treatments: [
      { title: 'Surgery', description: 'Maximal safe resection when feasible to reduce pressure and confirm diagnosis.' },
      { title: 'Radiation Therapy', description: 'Focused external beam radiation planned to protect normal brain tissue.' },
      { title: 'Chemotherapy', description: 'Temozolomide or other regimens depending on tumour biology.' },
      { title: 'Targeted & Supportive Therapy', description: 'Steroids, anti-seizure medication, and molecularly guided therapy where appropriate.' },
      { title: 'Rehabilitation', description: 'Speech, mobility, cognitive, and occupational rehabilitation after treatment.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Tumour biopsy and operative planning.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Precision radiation for brain tumours.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Systemic therapy and supportive care.' },
    ],
    specialists: [
      { slug: 'dr-anbalagan', name: 'Dr. P. Anbalagan', specialties: ['Radiation Oncology'], designation: 'Senior Consultant' },
      { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialties: ['Medical Oncology'], designation: 'Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Brain Tumour Care',
  },
  {
    slug: 'stomach-cancer', title: 'Stomach Cancer', shortDesc: 'GI oncology care with staging, surgery, and perioperative treatment',
    metaDescription: 'Stomach cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Stomach cancer treatment combines timely diagnosis, staging, surgery, and systemic therapy.',
    understanding: ['Stomach cancer begins in the lining of the stomach and may present late unless symptoms are evaluated early.', 'At CI(WIA), our multidisciplinary team plans treatment based on tumour stage, nutrition status, and overall fitness for surgery.', 'Modern care often combines surgery with chemotherapy before or after the operation to improve long-term outcomes.'],
    symptoms: ['Persistent indigestion or acidity', 'Early fullness after small meals', 'Unexplained weight loss', 'Vomiting or vomiting blood', 'Black stools or anaemia', 'Upper abdominal pain or bloating'],
    riskFactors: ['Helicobacter pylori infection', 'High-salt preserved diets', 'Smoking', 'Family history of gastric cancer', 'Chronic gastritis or intestinal metaplasia', 'Obesity'],
    treatments: [
      { title: 'Endoscopy & Staging', description: 'Upper GI endoscopy, biopsy, imaging, and nutritional assessment.' },
      { title: 'Surgery', description: 'Subtotal or total gastrectomy with lymph node dissection when indicated.' },
      { title: 'Chemotherapy', description: 'Perioperative or palliative chemotherapy based on stage.' },
      { title: 'Radiation Therapy', description: 'Selected use in multimodality treatment plans.' },
      { title: 'Supportive Care', description: 'Dietitian support, symptom relief, and recovery-focused follow-up.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Gastrectomy and GI cancer surgery.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Perioperative and advanced-stage chemotherapy.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Selected combined-modality treatment.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialties: ['Surgical Oncology'], designation: 'Director & Senior Consultant' },
      { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialties: ['Medical Oncology'], designation: 'Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Stomach Cancer Care',
  },
  {
    slug: 'liver-cancer', title: 'Liver Cancer', shortDesc: 'Hepatobiliary assessment with surgery, ablation, and systemic therapy',
    metaDescription: 'Liver cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Liver cancer care depends on tumour size, liver function, and the overall health of the patient.',
    understanding: ['Liver cancer may arise in the liver itself or involve the organ secondarily from another cancer. Many patients also have cirrhosis or chronic liver disease.', 'Treatment planning requires careful imaging, liver function testing, and multidisciplinary review.', 'At CI(WIA), decisions are tailored to whether the goal is curative treatment, disease control, or symptom relief.'],
    symptoms: ['Pain or heaviness in the upper abdomen', 'Loss of appetite', 'Unexplained weight loss', 'Jaundice or yellowing of eyes', 'Abdominal swelling', 'Fatigue and weakness'],
    riskFactors: ['Chronic hepatitis B or C infection', 'Cirrhosis', 'Alcohol-related liver disease', 'Fatty liver disease', 'Aflatoxin exposure', 'Diabetes and obesity'],
    treatments: [
      { title: 'Imaging & Staging', description: 'Triphasic imaging, tumour markers, and liver function evaluation.' },
      { title: 'Surgery', description: 'Resection for selected localised tumours with adequate liver reserve.' },
      { title: 'Local Therapies', description: 'Ablation or liver-directed procedures for appropriate cases.' },
      { title: 'Systemic Therapy', description: 'Targeted therapy or immunotherapy for advanced disease.' },
      { title: 'Supportive Care', description: 'Liver-focused symptom management and nutritional support.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Hepatobiliary surgery for liver tumours.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Targeted therapy and immunotherapy.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Selected radiation planning where appropriate.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialties: ['Surgical Oncology'], designation: 'Director & Senior Consultant' },
      { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialties: ['Medical Oncology'], designation: 'Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Liver Cancer Care',
  },
  {
    slug: 'ovarian-cancer', title: 'Ovarian Cancer', shortDesc: 'Gynaec oncology care with staging surgery and chemotherapy',
    metaDescription: 'Ovarian cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Ovarian cancer is often diagnosed after symptoms become persistent, making early evaluation important.',
    understanding: ['Ovarian cancer may present with subtle abdominal symptoms that are easily mistaken for routine digestive complaints.', 'At CI(WIA), gynaec oncology specialists coordinate surgery, systemic therapy, and follow-up surveillance.', 'Care is individualised based on stage, pathology, fertility considerations, and recovery goals.'],
    symptoms: ['Bloating or abdominal swelling', 'Pelvic discomfort', 'Early satiety', 'Frequent urination', 'Unexplained weight loss', 'Persistent fatigue'],
    riskFactors: ['Increasing age', 'Family history of breast or ovarian cancer', 'BRCA mutations', 'Endometriosis', 'Never having been pregnant in selected cases', 'Hormonal and reproductive factors'],
    treatments: [
      { title: 'Surgery', description: 'Staging or debulking surgery performed by gynaec oncology teams.' },
      { title: 'Chemotherapy', description: 'Platinum-based regimens before or after surgery as indicated.' },
      { title: 'Targeted Therapy', description: 'Maintenance or recurrent-disease therapy guided by tumour biology.' },
      { title: 'Monitoring', description: 'Imaging, tumour marker review, and structured follow-up.' },
      { title: 'Supportive Care', description: 'Nutrition, pain relief, and survivorship support.' },
    ],
    relatedDepartments: [
      { slug: 'gynaecological-oncology', title: 'Gynaecological Oncology', description: 'Specialised surgery and comprehensive ovarian cancer care.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Chemotherapy and maintenance therapy.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Selected local control strategies where needed.' },
    ],
    specialists: [
      { slug: 'dr-vijayalakshmi', name: 'Dr. K. Vijayalakshmi', specialties: ['Gynaec Oncology'], designation: 'Consultant' },
      { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialties: ['Medical Oncology'], designation: 'Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Ovarian Cancer Care',
  },
  {
    slug: 'kidney-cancer', title: 'Kidney Cancer', shortDesc: 'Renal tumour care with surgery, surveillance, and targeted treatment',
    metaDescription: 'Kidney cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Kidney cancer is often discovered on scans, and treatment depends on size, spread, and renal function.',
    understanding: ['Kidney cancer begins in the tissues of the kidney and may be found incidentally or after symptoms such as blood in urine.', 'At CI(WIA), treatment planning balances cancer control with preservation of kidney function wherever possible.', 'Some patients may need surgery alone, while others benefit from targeted therapy or immunotherapy.'],
    symptoms: ['Blood in urine', 'Pain in the side or back', 'A lump in the abdomen', 'Unexplained fever', 'Weight loss', 'Tiredness or anaemia'],
    riskFactors: ['Smoking', 'Obesity', 'High blood pressure', 'Family history', 'Long-term kidney disease', 'Certain inherited syndromes'],
    treatments: [
      { title: 'Imaging & Biopsy', description: 'Renal imaging and selected tissue diagnosis to define the lesion.' },
      { title: 'Surgery', description: 'Partial or radical nephrectomy depending on tumour location and size.' },
      { title: 'Active Surveillance', description: 'Monitoring selected small renal masses in carefully chosen patients.' },
      { title: 'Targeted Therapy & Immunotherapy', description: 'Systemic therapy for advanced or recurrent disease.' },
      { title: 'Follow-up', description: 'Structured surveillance to monitor for recurrence and kidney function.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Kidney tumour surgery and operative planning.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Targeted therapy and immunotherapy.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Selected palliative radiation where needed.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialties: ['Surgical Oncology'], designation: 'Director & Senior Consultant' },
      { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialties: ['Medical Oncology'], designation: 'Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Kidney Cancer Care',
  },
  {
    slug: 'pancreatic-cancer', title: 'Pancreatic Cancer', shortDesc: 'Multidisciplinary GI oncology care for complex pancreatic tumours',
    metaDescription: 'Pancreatic cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Pancreatic cancer care requires precise staging, symptom control, and coordinated treatment planning.',
    understanding: ['Pancreatic cancer often presents late and needs careful imaging to assess whether surgery is possible.', 'At CI(WIA), patients are reviewed by surgical, medical, and radiation oncology teams to sequence treatment safely.', 'Early nutrition support and symptom management are essential parts of care from the outset.'],
    symptoms: ['Jaundice', 'Upper abdominal or back pain', 'Loss of appetite', 'Rapid weight loss', 'New-onset diabetes in selected cases', 'Fatigue and weakness'],
    riskFactors: ['Smoking', 'Chronic pancreatitis', 'Family history', 'Diabetes', 'Obesity', 'Increasing age'],
    treatments: [
      { title: 'Staging', description: 'High-quality imaging and tumour marker assessment before treatment decisions.' },
      { title: 'Surgery', description: 'Resection for selected localised tumours after multidisciplinary review.' },
      { title: 'Chemotherapy', description: 'Neoadjuvant, adjuvant, or palliative chemotherapy based on stage.' },
      { title: 'Radiation Therapy', description: 'Selected use in local control and symptom management.' },
      { title: 'Supportive Care', description: 'Pain, nutrition, jaundice management, and pancreatic enzyme support.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Pancreatic surgery and complex GI oncology care.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Chemotherapy and advanced-disease management.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Selected combined-modality treatment.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialties: ['Surgical Oncology'], designation: 'Director & Senior Consultant' },
      { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialties: ['Medical Oncology'], designation: 'Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Pancreatic Cancer Care',
  },
  {
    slug: 'gallbladder-cancer', title: 'Gallbladder Cancer', shortDesc: 'Biliary tract workup with hepatobiliary surgery and systemic care',
    metaDescription: 'Gallbladder cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Gallbladder cancer needs early assessment because symptoms may overlap with gallstone disease.',
    understanding: ['Gallbladder cancer can be difficult to detect early and may first present during evaluation for abdominal pain or jaundice.', 'At CI(WIA), treatment decisions depend on resectability, spread, and overall liver and digestive function.', 'Coordinated care is essential because surgery, systemic therapy, and symptom relief may all be required at different stages.'],
    symptoms: ['Upper abdominal pain', 'Jaundice', 'Nausea or vomiting', 'Loss of appetite', 'Weight loss', 'Abdominal swelling'],
    riskFactors: ['Gallstones', 'Chronic gallbladder inflammation', 'Porcelain gallbladder', 'Biliary tract abnormalities', 'Obesity', 'Increasing age'],
    treatments: [
      { title: 'Imaging & Diagnosis', description: 'Abdominal imaging and pathology review to confirm the extent of disease.' },
      { title: 'Surgery', description: 'Extended gallbladder surgery for selected localised tumours.' },
      { title: 'Chemotherapy', description: 'Systemic treatment for advanced or post-operative settings.' },
      { title: 'Biliary Drainage & Symptom Control', description: 'Relief of jaundice and digestive symptoms when needed.' },
      { title: 'Follow-up Care', description: 'Nutritional support, recovery monitoring, and recurrence surveillance.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Hepatobiliary and biliary tract cancer surgery.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Systemic therapy planning for biliary cancers.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Selected local-control strategies where indicated.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialties: ['Surgical Oncology'], designation: 'Director & Senior Consultant' },
      { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialties: ['Medical Oncology'], designation: 'Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Gallbladder Cancer Care',
  },
  {
    slug: 'oesophageal-cancer', title: 'Oesophageal Cancer', shortDesc: 'Swallowing-focused cancer care with chemoradiation and surgery',
    metaDescription: 'Oesophageal cancer care at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Oesophageal cancer often presents with swallowing difficulty and requires timely, structured evaluation.',
    understanding: ['Oesophageal cancer affects the food pipe and may interfere with swallowing, nutrition, and general strength.', 'At CI(WIA), care is built around accurate staging, nutritional optimisation, and sequencing of surgery with chemoradiation where needed.', 'Restoring nutrition and comfort is a central part of treatment planning from the first consultation.'],
    symptoms: ['Difficulty swallowing', 'Pain while swallowing', 'Weight loss', 'Persistent reflux or chest discomfort', 'Regurgitation of food', 'Hoarseness or chronic cough'],
    riskFactors: ['Tobacco use', 'Alcohol consumption', 'Long-standing acid reflux', 'Barrett oesophagus', 'Poor nutrition', 'Increasing age'],
    treatments: [
      { title: 'Endoscopy & Staging', description: 'Endoscopy, biopsy, and imaging to determine tumour extent.' },
      { title: 'Chemoradiation', description: 'Pre-operative or definitive combined treatment for selected patients.' },
      { title: 'Surgery', description: 'Oesophageal resection where tumour stage and patient fitness allow.' },
      { title: 'Nutritional Support', description: 'Feeding support and swallowing care throughout treatment.' },
      { title: 'Supportive Care', description: 'Pain relief, symptom control, and rehabilitation after therapy.' },
    ],
    relatedDepartments: [
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Upper GI and oesophageal cancer surgery.' },
      { slug: 'radiation-oncology', title: 'Radiation Oncology', description: 'Precision chemoradiation planning.' },
      { slug: 'medical-oncology', title: 'Medical Oncology', description: 'Systemic therapy and coordinated supportive care.' },
    ],
    specialists: [
      { slug: 'dr-krishnamurthy', name: 'Dr. S. Krishnamurthy', specialties: ['Surgical Oncology'], designation: 'Director & Senior Consultant' },
      { slug: 'dr-anbalagan', name: 'Dr. P. Anbalagan', specialties: ['Radiation Oncology'], designation: 'Senior Consultant' },
    ],
    ctaTitle: 'Get Expert Oesophageal Cancer Care',
  },
  {
    slug: 'heredity', title: 'Hereditary Cancer', shortDesc: 'Genetic counselling, risk assessment & family screening protocols',
    metaDescription: 'Hereditary cancer genetic counselling and risk assessment at Cancer Institute (WIA), Chennai.',
    heroDesc: 'Understanding your genetic risk is the first step in proactive cancer prevention for you and your family.',
    understanding: [
      'Hereditary cancers are caused by inherited genetic mutations passed from parents to children.',
      'At CI(WIA), our clinical genetics team provides comprehensive risk assessment for families with a strong history of cancer.',
      'Identifying a genetic predisposition allows for tailored screening, early detection, and preventive strategies that can save lives.'
    ],
    symptoms: ['Multiple family members with the same type of cancer', 'Cancer occurring at an unusually young age (under 50)', 'More than one type of cancer in the same person', 'Cancers in both of a pair of organs (e.g., both breasts or kidneys)', 'Family members with rare cancers'],
    riskFactors: ['Family history of breast, ovarian, or colorectal cancer', 'Known BRCA1/BRCA2 mutations in the family', 'Lynch syndrome or other inherited cancer syndromes', 'Multiple generations affected by cancer', 'Ashkenazi Jewish ancestry (higher risk for some mutations)'],
    treatments: [
      { title: 'Genetic Counselling', description: 'Expert guidance to understand family risk and the implications of genetic testing.' },
      { title: 'Genetic Testing', description: 'Advanced molecular analysis for inherited mutations using blood or saliva samples.' },
      { title: 'Risk-Reduced Screening', description: 'Customised, high-frequency surveillance plans based on your genetic profile.' },
      { title: 'Preventive Interventions', description: 'Medical or surgical options to reduce risk in high-predisposition individuals.' },
      { title: 'Family Tree Analysis', description: 'Detailed pedigree mapping to identify inheritance patterns across generations.' },
    ],
    relatedDepartments: [
      { slug: 'preventive-oncology', title: 'Preventive Oncology', description: 'Risk assessment and screening programmes.' },
      { slug: 'molecular-oncology', title: 'Molecular Oncology', description: 'Advanced genetic and genomic testing.' },
      { slug: 'surgical-oncology', title: 'Surgical Oncology', description: 'Risk-reducing surgical options.' },
    ],
    specialists: [
      { slug: 'dr-anbalagan', name: 'Dr. P. Anbalagan', specialties: ['Preventive Oncology'], designation: 'Head, Preventive Oncology' },
      { slug: 'dr-swaminathan', name: 'Dr. R. Swaminathan', specialties: ['Molecular Oncology'], designation: 'Medical Oncologist' },
    ],
    ctaTitle: 'Assess Your Genetic Risk',
  },
];

export function getCancerBySlug(slug: string): CancerType | undefined {
  return cancerTypes.find(c => c.slug === slug);
}
