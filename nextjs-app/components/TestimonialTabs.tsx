'use client';

import { useState } from 'react';

const QuoteIcon = () => (
  <div className="quote-icon" aria-hidden="true">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#23CDC0" xmlns="http://www.w3.org/2000/svg"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
  </div>
);

const Stars = ({ label }: { label: string }) => (
  <div className="testimonial-stars" aria-label={label}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
);

export default function TestimonialTabs() {
  const [lang, setLang] = useState<'en' | 'ta'>('en');

  return (
    <>
      <div className="lang-tabs" role="tablist" aria-label="Testimonial language">
        <button className={`lang-tab${lang === 'en' ? ' active' : ''}`} role="tab" aria-selected={lang === 'en'} onClick={() => setLang('en')}>English</button>
        <button className={`lang-tab${lang === 'ta' ? ' active' : ''}`} role="tab" aria-selected={lang === 'ta'} onClick={() => setLang('ta')}>தமிழ் (Tamil)</button>
      </div>

      {lang === 'en' && (
        <div className="testimonial-group active" role="tabpanel">
          <div className="testimonial-card">
            <QuoteIcon />
            <Stars label="5 out of 5 stars" />
            <p className="testimonial-text">&ldquo;I was diagnosed with breast cancer at stage 2. The team at CI(WIA) not only treated me with cutting-edge techniques but also held my hand through every anxious moment. I am cancer-free for 3 years now.&rdquo;</p>
            <div className="testimonial-author">
              <strong>Meena Raghunathan</strong>
              <span>Breast Cancer Survivor &middot; Chennai</span>
            </div>
          </div>
          <div className="testimonial-card">
            <QuoteIcon />
            <Stars label="5 out of 5 stars" />
            <p className="testimonial-text">&ldquo;The doctors here are brilliant, but what sets CI(WIA) apart is the compassion. The nursing staff remembered my name every day. It felt like family, not just a hospital. My son&rsquo;s blood cancer is now in remission.&rdquo;</p>
            <div className="testimonial-author">
              <strong>Rajagopalan Iyer</strong>
              <span>Parent of Paediatric Oncology Patient &middot; Coimbatore</span>
            </div>
          </div>
          <div className="testimonial-card">
            <QuoteIcon />
            <Stars label="5 out of 5 stars" />
            <p className="testimonial-text">&ldquo;Affordable. Accessible. Absolutely world-class. As a patient under the government scheme, I received the same quality of care as any private patient. CI(WIA) changed my life.&rdquo;</p>
            <div className="testimonial-author">
              <strong>Lakshmi Devi</strong>
              <span>Cervical Cancer Survivor &middot; Madurai</span>
            </div>
          </div>
        </div>
      )}

      {lang === 'ta' && (
        <div className="testimonial-group active" role="tabpanel">
          <div className="testimonial-card">
            <QuoteIcon />
            <Stars label="5 நட்சத்திரங்கள் 5 இல்" />
            <p className="testimonial-text" lang="ta">&ldquo;மார்பக புற்றுநோய் கண்டறியப்பட்டபோது மிகவும் பயந்தேன். ஆனால் CI(WIA) மருத்துவர்களும் செவிலியர்களும் என்னை குடும்பமாகவே நடத்தினார்கள். இப்போது நான் முழுமையாக குணமடைந்துள்ளேன். நன்றி!&rdquo;</p>
            <div className="testimonial-author">
              <strong>சுமித்ரா வேலுசாமி</strong>
              <span>மார்பக புற்றுநோய் தப்பிப்பினர் &middot; திருவண்ணாமலை</span>
            </div>
          </div>
          <div className="testimonial-card">
            <QuoteIcon />
            <Stars label="5 நட்சத்திரங்கள் 5 இல்" />
            <p className="testimonial-text" lang="ta">&ldquo;அரசு திட்டத்தின் கீழ் சிகிச்சை பெற்றேன். தனியார் மருத்துவமனை போன்ற தரமான சேவை கிடைத்தது. CI(WIA) ஒரு மிகப்பெரிய வரம்.&rdquo;</p>
            <div className="testimonial-author">
              <strong>முருகன் பாலசுப்பிரமணி</strong>
              <span>நுரையீரல் புற்றுநோய் தப்பிப்பினர் &middot; சேலம்</span>
            </div>
          </div>
          <div className="testimonial-card">
            <QuoteIcon />
            <Stars label="5 நட்சத்திரங்கள் 5 இல்" />
            <p className="testimonial-text" lang="ta">&ldquo;என் மகனுக்கு ரத்த புற்றுநோய் வந்தது. CI(WIA) இல் சிகிச்சை பெற்றதால் இப்போது ஆரோக்கியமாக உள்ளான். மருத்துவர்களுக்கு என் இதய நன்றி.&rdquo;</p>
            <div className="testimonial-author">
              <strong>கவிதா செந்தில்நாதன்</strong>
              <span>குழந்தை புற்றுநோய் நோயாளியின் தாய் &middot; கோயம்புத்தூர்</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
