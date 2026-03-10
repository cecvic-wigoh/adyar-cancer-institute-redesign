'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

const faqData: FaqCategory[] = [
  {
    id: 'faq-visit',
    label: 'Before Your Visit',
    items: [
      { question: 'How do I book an appointment at CI(WIA)?', answer: 'You can book an appointment by calling 044-2491 0754 (Monday–Saturday, 8am–5pm), by visiting our OPD registration counter in person, or by submitting an online request via the Book Appointment form on this website. For emergencies, our emergency line is available 24/7.' },
      { question: 'What should I bring for my first visit?', answer: 'Please bring: a valid photo ID (Aadhaar card, passport, or driving licence), all previous medical records including scan reports (CT, MRI, PET-CT), biopsy reports, prescription histories, and any referral letters. If you are a government scheme beneficiary, bring your scheme card (CMCHIS, Ayushman Bharat).' },
      { question: 'How long will I have to wait to see a doctor?', answer: 'For scheduled appointments, most patients are seen within 30–45 minutes of their appointed time. Walk-in patients may wait 1–3 hours depending on the day. We recommend booking in advance to minimise waiting. Urgent cases referred by a doctor are usually seen the same day.' },
      { question: 'Is parking available at the campus?', answer: 'Yes. Paid parking is available within the CI(WIA) campus for two-wheelers and four-wheelers. Parking rates are nominal. We also recommend using public transport — the Adyar bus terminus is a short walk away, and auto-rickshaws are readily available.' },
    ],
  },
  {
    id: 'faq-procedures',
    label: 'Procedures',
    items: [
      { question: 'Is a CT scan or MRI safe? How much radiation is involved?', answer: 'CT scans use a small, controlled dose of X-ray radiation. Modern scanners at CI(WIA) are designed to minimise exposure while delivering clear, diagnostic-quality images. MRI scans use magnetic fields and do not involve any radiation at all. Both are safe when ordered by a doctor who has weighed the benefits against any risks. Always inform us if you are pregnant.' },
      { question: 'What happens during a biopsy? Is it painful?', answer: 'A biopsy involves removing a small sample of tissue for laboratory analysis. Most biopsies are performed under local anaesthesia, so you will feel little to no pain during the procedure. You may feel mild discomfort, pressure, or soreness afterward for 1–2 days. Our doctors will explain exactly what to expect before the procedure begins.' },
      { question: 'Is radiation therapy safe for my family members?', answer: 'External beam radiation therapy — the most common type — does not make you radioactive. You can safely be around family members, including children, immediately after treatment sessions. If you receive certain types of internal radiation (brachytherapy or radioiodine), your team will give you specific temporary precautions to follow.' },
    ],
  },
  {
    id: 'faq-financial',
    label: 'Insurance & Costs',
    items: [
      { question: 'Does CI(WIA) accept government health insurance schemes?', answer: 'Yes. CI(WIA) is empanelled under the Chief Minister\'s Comprehensive Health Insurance Scheme (CMCHIS) for Tamil Nadu residents and also accepts Ayushman Bharat (PM-JAY) for eligible patients. Additionally, we work with ESIC, Central Government Health Scheme (CGHS), and various private health insurance providers. Please bring your scheme card on your first visit.' },
      { question: 'What if I cannot afford treatment?', answer: 'CI(WIA) believes that no patient should be denied cancer care due to financial hardship. We have a dedicated Medical Social Work department that can help you access free or subsidised treatment through government schemes, charitable funds, and CI(WIA)\'s own patient welfare fund. Please speak to our social work team on your first visit.' },
      { question: 'Which private insurance plans are accepted?', answer: 'We accept most major private health insurance plans including Star Health, National Insurance, New India Assurance, HDFC Ergo, Niva Bupa, and several others. Please contact our billing desk or call us to confirm whether your specific insurer and policy are covered before your visit.' },
    ],
  },
  {
    id: 'faq-treatment',
    label: 'During Treatment',
    items: [
      { question: 'What side effects should I expect from chemotherapy?', answer: 'Side effects vary depending on the drugs used, but common ones include fatigue, nausea, hair loss, and increased susceptibility to infection. Not every patient experiences all side effects, and our supportive care team is available to manage them. We will give you a detailed written guide before your first session explaining what to expect and who to call if you have concerns.' },
      { question: 'Can I eat normally during chemotherapy?', answer: 'A registered dietician will guide you on nutrition throughout treatment. In general, we recommend small frequent meals, staying well-hydrated, and avoiding raw or undercooked foods to reduce infection risk. Some foods and supplements may interact with chemotherapy drugs — always check with your oncologist before taking any herbal or alternative remedies.' },
      { question: 'Is counselling or psychological support available?', answer: 'Absolutely. CI(WIA) has a dedicated Psycho-Oncology department offering individual counselling, group therapy, and family support sessions. We also have volunteer support groups led by cancer survivors. No one needs to face a cancer diagnosis alone — support services are available to all patients at no additional charge.' },
    ],
  },
];

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState('faq-visit');
  const [openItem, setOpenItem] = useState<string | null>(null);

  const activeCategory = faqData.find(c => c.id === activeTab);

  const toggleItem = (q: string) => {
    setOpenItem(openItem === q ? null : q);
  };

  return (
    <>
      <div className="faq-category-tabs" role="tablist" aria-label="FAQ categories">
        {faqData.map((cat) => (
          <button
            key={cat.id}
            className={`faq-tab${activeTab === cat.id ? ' active' : ''}`}
            role="tab"
            aria-selected={activeTab === cat.id}
            onClick={() => { setActiveTab(cat.id); setOpenItem(null); }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {activeCategory && (
        <div className="faq-panel active" role="tabpanel">
          <div className="faq-list">
            {activeCategory.items.map((item, i) => {
              const isOpen = openItem === `${activeCategory.id}-${i}`;
              return (
                <div className="faq-item" key={i}>
                  <button
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(`${activeCategory.id}-${i}`)}
                  >
                    {item.question}
                    <span className="faq-icon" aria-hidden="true" style={{ transform: isOpen ? 'rotate(45deg)' : 'none', background: isOpen ? 'var(--color-primary)' : undefined, color: isOpen ? 'white' : undefined }}>+</span>
                  </button>
                  <div className="faq-a" style={{ maxHeight: isOpen ? '500px' : '0' }}>
                    <div className="faq-a-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
