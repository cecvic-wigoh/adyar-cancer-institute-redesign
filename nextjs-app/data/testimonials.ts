export interface Testimonial {
  id: number;
  author: string;
  role: string;
  location: string;
  quote: string;
  image: string;
}

export const testimonialsEn: Testimonial[] = [
  {
    id: 1,
    author: "Meena Raghunathan",
    role: "Breast Cancer Survivor",
    location: "Chennai",
    quote: "I was diagnosed with breast cancer at stage 2. The team at CI(WIA) not only treated me with cutting-edge techniques but also held my hand through every anxious moment. I am cancer-free for 3 years now.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face"
  },
  {
    id: 2,
    author: "Rajagopalan Iyer",
    role: "Parent of Paediatric Oncology Patient",
    location: "Coimbatore",
    quote: "The doctors here are brilliant, but what sets CI(WIA) apart is the compassion. The nursing staff remembered my name every day. It felt like family, not just a hospital. My son's blood cancer is now in remission.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face"
  },
  {
    id: 3,
    author: "Lakshmi Devi",
    role: "Cervical Cancer Survivor",
    location: "Madurai",
    quote: "Affordable. Accessible. Absolutely world-class. As a patient under the government scheme, I received the same quality of care as any private patient. CI(WIA) changed my life.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop&crop=face"
  }
];

export const testimonialsTa: Testimonial[] = [
  {
    id: 1,
    author: "சுமித்ரா வேலுசாமி",
    role: "மார்பக புற்றுநோய் தப்பிப்பினர்",
    location: "திருவண்ணாமலை",
    quote: "மார்பக புற்றுநோய் கண்டறியப்பட்டபோது மிகவும் பயந்தேன். ஆனால் CI(WIA) மருத்துவர்களும் செவிலியர்களும் என்னை குடும்பமாகவே நடத்தினார்கள். இப்போது நான் முழுமையாக குணமடைந்துள்ளேன். நன்றி!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face"
  },
  {
    id: 2,
    author: "முருகன் பாலசுப்பிரமணி",
    role: "நுரையீரல் புற்றுநோய் தப்பிப்பினர்",
    location: "சேலம்",
    quote: "அரசு திட்டத்தின் கீழ் சிகிச்சை பெற்றேன். தனியார் மருத்துவமனை போன்ற தரமான சேவை கிடைத்தது. CI(WIA) ஒரு மிகப்பெரிய வரம்.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face"
  },
  {
    id: 3,
    author: "கவிதா செந்தில்நாதன்",
    role: "குழந்தை புற்றுநோய் நோயாளியின் தாய்",
    location: "கோயம்புத்தூர்",
    quote: "என் மகனுக்கு ரத்த புற்றுநோய் வந்தது. CI(WIA) இல் சிகிச்சை பெற்றதால் இப்போது ஆரோக்கியமாக உள்ளான். மருத்துவர்களுக்கு என் இதய நன்றி.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop&crop=face"
  }
];
