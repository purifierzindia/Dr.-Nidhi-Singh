import { ConsultationLocation, ExpertiseItem, PatientReview, FaqItem } from '../types';

export const DOCTOR_PROFILE = {
  name: 'Dr. Nidhi Singh',
  specialization: 'Gynecologist & Obstetrician',
  roleTitle: 'Consultant Gynecologist & Obstetrician',
  qualifications: [
    { degree: 'MBBS', institution: 'Verified Medical Degree' },
    { degree: 'MS - Obstetrics & Gynaecology', institution: 'Post Graduate Specialization' },
    { degree: 'FMAS', institution: 'Fellowship in Minimal Access Surgery (Laparoscopy)' },
  ],
  experience: {
    overallYears: 11,
    specialistYears: 6,
    displayOverall: '11+ Years Overall Practice',
    displaySpecialist: '6+ Years Specialist Care',
  },
  primaryCity: 'Dwarka, New Delhi',
  photoUrl: '/Dr-Nidhi-Gynae.png',
  photoAltUrl: '/dr_nidhi_portrait_clean.png',
  instagramUrl: 'https://www.instagram.com/drgynaesingh?stkn=MWdqcWxpa2MwcmdsdQ==',
  instagramHandle: '@drgynaesingh',
  instagramDisplayText: 'Follow @drgynaesingh on Instagram',
  phonePrimary: '+919266283222',
  phoneDisplay: '+91 92662 83222',
  phoneAlternative: '+91 92054 81438',
  whatsappNumber: '919266283444',
  whatsappDisplay: '+91 92662 83444',
  email: 'femmemaxhospital@gmail.com',
  rating: {
    score: 4.9,
    source: 'Verified Patient Recommendations',
    totalReviewsText: 'Verified Practo & Google Feedback',
  },
  headline: "Expert Women's Healthcare, With Personal Attention",
  subheadline: 'Compassionate gynecological and obstetric care in Dwarka, with a patient-focused approach.',
  aboutHeading: 'Experienced Care. Personal Attention.',
  aboutPhilosophy:
    'Dr. Nidhi Singh brings over a decade of medical experience and specialized expertise in obstetrics, gynecology, and laparoscopic care. A safe, non-judgmental healthcare space where women feel heard, supported, and actively informed about every stage of their health and pregnancy.',
};

export const CONSULTATION_LOCATIONS: ConsultationLocation[] = [
  {
    id: 'femme-med',
    name: 'Femme Med Hospital',
    role: 'Consultant Gynecologist & Obstetrician',
    tag: 'Primary Center • 24/7 Maternity Support',
    address: 'Plot-4, Block A, Sector 8 Dwarka',
    sector: 'Sector 8',
    city: 'New Delhi – 110077',
    timings: 'Mon – Sat: Morning & Afternoon OPD (24/7 Emergency Maternity Care)',
    phone: '+919266283222',
    phoneDisplay: '+91 92662 83222',
    secondaryPhone: '+91 92662 83444',
    email: 'femmemaxhospital@gmail.com',
    mapQuery: 'Femme Med Hospital Plot 4 Block A Sector 8 Dwarka New Delhi',
    features: ['Dedicated Maternity Wing', 'High-Risk Pregnancy Unit', 'Laparoscopy & Daycare', 'Emergency OB-GYN Access'],
    imageUrl: '/assets/femme_med_hero.jpg',
  },
  {
    id: 'aj-gynae',
    name: 'Aj Gynae & Healthcare Centre',
    role: 'Visiting Consultant',
    tag: 'Evening Clinic • Outpatient Consultations',
    address: 'Pocket-02, Sector 6 Dwarka',
    sector: 'Sector 6',
    city: 'New Delhi – 110075',
    timings: 'Mon – Sat: Evening Consultations (Available up to 9:00 PM)',
    phone: '+919205481438',
    phoneDisplay: '+91 92054 81438',
    mapQuery: 'Aj Gastro And Liver Centre Pocket 2 Sector 6 Dwarka Delhi',
    features: ['Evening OPD Slots', 'Consultation & Ultrasound Guidance', 'PCOS & Routine Checkups'],
  },
  {
    id: 'ayushman-hospital',
    name: 'Ayushman Hospital & Health Services',
    role: 'Consultant (OB-GYN Department)',
    tag: 'Hospital Consultation • Sector 10',
    address: 'Sector 10, Dwarka',
    sector: 'Sector 10',
    city: 'New Delhi – 110075',
    timings: 'Mon – Sat: OPD 4:30 PM – 6:00 PM',
    phone: '+919205481438',
    phoneDisplay: '+91 92054 81438',
    secondaryPhone: '011-49495566',
    mapQuery: 'Ayushman Hospital and Health Services Sector 10 Dwarka Delhi',
    features: ['Multi-specialty Hospital Care', 'Planned Obstetric Deliveries', 'Surgical Facilities'],
    imageUrl: '/ayushman-hospital.webp',
  },
];

export const AREAS_OF_EXPERTISE: ExpertiseItem[] = [
  {
    id: 'pregnancy-antenatal',
    title: 'Pregnancy & Antenatal Care',
    category: 'obstetrics',
    summary:
      'Trimester-by-trimester monitoring, fetal development tracking, and reassuring guidance from conception to delivery.',
    highlights: ['Comprehensive antenatal screening', 'Nutritional and lifestyle counseling', 'Regular ultrasound coordination'],
  },
  {
    id: 'high-risk-pregnancy',
    title: 'High-Risk Pregnancy Care',
    category: 'obstetrics',
    summary:
      'Close clinical supervision for pregnancies complicated by hypertension, gestational diabetes, thyroid disorders, or previous complications.',
    highlights: ['Tailored surveillance protocols', 'Early detection of risk factors', 'Collaborative maternal-fetal care'],
  },
  {
    id: 'cesarean-delivery',
    title: 'Cesarean Section & Delivery Care',
    category: 'obstetrics',
    summary:
      'Meticulous clinical planning for both planned and emergency surgical deliveries, prioritizing maternal safety and smooth recovery.',
    highlights: ['Safety-first delivery planning', 'Clear communication on options', 'Postoperative pain & recovery care'],
  },
  {
    id: 'maternal-child-care',
    title: 'Maternal & Child Care',
    category: 'obstetrics',
    summary:
      'Coordinated post-delivery support for new mothers, assisting with physical healing, lactation guidance, and newborn wellbeing checks.',
    highlights: ['Postnatal recovery evaluations', 'Breastfeeding guidance', 'Emotional wellbeing check-ins'],
  },
  {
    id: 'gynecological-care',
    title: 'Gynecological Consultation',
    category: 'gynecology',
    summary:
      'Empathetic clinical evaluations for acute and chronic gynecological concerns across all stages of a woman’s life.',
    highlights: ['Pelvic exams & screening', 'Infection management & preventative care', 'Perimenopausal health support'],
  },
  {
    id: 'menstrual-health',
    title: 'Menstrual Health & Irregularities',
    category: 'gynecology',
    summary:
      'Diagnostic evaluation and personalized management of heavy bleeding, painful periods (dysmenorrhea), and cycle irregularities.',
    highlights: ['Hormonal profile assessments', 'Pelvic imaging review', 'Stepwise, non-aggressive management'],
  },
  {
    id: 'pcos-pcod',
    title: 'PCOS / PCOD Management',
    category: 'gynecology',
    summary:
      'Structured, patient-centric treatment plans addressing hormonal balance, metabolic health, cycle regularity, and symptom relief.',
    highlights: ['Holistic lifestyle & dietary alignment', 'Targeted medical therapies', 'Long-term metabolic monitoring'],
  },
  {
    id: 'pre-post-delivery',
    title: 'Pre & Post Delivery Care',
    category: 'obstetrics',
    summary:
      'Detailed birth preparation plans followed by comprehensive post-delivery rehabilitation and recovery guidance.',
    highlights: ['Birth preference discussions', 'Pelvic floor & core recovery guidance', 'Postpartum follow-up schedule'],
  },
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'rev-1',
    patientInitial: 'P. Sharma',
    reviewDate: 'Sector 8 Dwarka',
    source: 'Verified Practo Patient',
    tag: 'Antenatal & Delivery Care',
    content:
      'Dr. Nidhi Singh is exceptionally soft-spoken, patient, and thorough. She listened to all my questions during pregnancy without any rush. Her calm demeanor throughout labor and delivery gave our family immense confidence.',
    rating: 5,
  },
  {
    id: 'rev-2',
    patientInitial: 'A. Gupta',
    reviewDate: 'Sector 6 Dwarka',
    source: 'Verified Google Review',
    tag: 'PCOS Management',
    content:
      'I visited Dr. Nidhi after struggling with irregular cycles for months. She explained the root causes with diagrams and focused on realistic lifestyle steps rather than prescribing heavy pills. Truly grateful for her honest approach.',
    rating: 5,
  },
  {
    id: 'rev-3',
    patientInitial: 'R. Verma',
    reviewDate: 'Dwarka Resident',
    source: 'Verified Practo Patient',
    tag: 'High-Risk Pregnancy',
    content:
      'We consulted Dr. Nidhi Singh for a complicated pregnancy. Her prompt availability, clarity during emergency decisions, and continuous reassurance made an anxious phase so much easier for us. Highly recommended in Dwarka.',
    rating: 5,
  },
  {
    id: 'rev-4',
    patientInitial: 'S. Mehra',
    reviewDate: 'Sector 10 Dwarka',
    source: 'Verified Google Review',
    tag: 'Gynecological Care',
    content:
      'Very gentle and respectful doctor. In an era where consultations often feel rushed to 3 minutes, Dr. Nidhi takes the time to listen, review previous reports carefully, and explain every next step.',
    rating: 5,
  },
];

export const WHY_CHOOSE_POINTS = [
  {
    title: 'Personalized Consultation',
    description:
      'Every patient is given unhurried time. Consultations are structured around listening to your symptoms, history, and individual preferences.',
    badge: 'Unhurried Care',
  },
  {
    title: 'Clear Communication',
    description:
      'Complex clinical terms, test reports, and delivery procedures are explained in simple, transparent language so you make confident choices.',
    badge: 'Transparent',
  },
  {
    title: 'Experienced Women’s Healthcare',
    description:
      '11+ years of overall medical experience with 6+ years as a dedicated specialist in obstetrics and gynecological health.',
    badge: '11+ Years Exp',
  },
  {
    title: 'Convenient Dwarka Locations',
    description:
      'Available across key hubs in Dwarka including Sector 8 (Femme Med Hospital) with 24/7 maternity services, Sector 6, and Sector 10.',
    badge: 'Local Access',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How can I book an appointment?',
    answer:
      'You can request a consultation using the online booking form on this page, call the clinic directly at 092662 83222 (+91 92662 83222), or message via WhatsApp (+91 92662 83444). Our clinic coordinator will confirm your preferred timing and location.',
  },
  {
    id: 'faq-2',
    question: 'Where is Dr. Nidhi Singh available?',
    answer:
      'Dr. Nidhi Singh consults at multiple verified locations in Dwarka: Femme Med Hospital (Sector 8 Dwarka) for day and emergency maternity consultations, Aj Gynae & Healthcare Centre (Sector 6 Dwarka) for evening OPD up to 9:00 PM, and Ayushman Hospital (Sector 10 Dwarka).',
  },
  {
    id: 'faq-3',
    question: 'What should I bring for my consultation?',
    answer:
      'Please bring any previous medical records, recent ultrasound reports, blood work, current prescription lists, and your previous pregnancy or surgical summary if applicable. Having these ready helps provide a comprehensive evaluation.',
  },
  {
    id: 'faq-4',
    question: 'Can I request a preferred appointment time?',
    answer:
      'Yes, you can specify your preferred date and time slot (morning, afternoon, or evening) when reaching out. We accommodate appointment requests based on OPD schedules at your chosen Dwarka location.',
  },
  {
    id: 'faq-5',
    question: 'How can I contact the clinic?',
    answer:
      'You can call directly on 092662 83222 / +91 92662 83222, send a WhatsApp message to +91 92662 83444, or email femmemaxhospital@gmail.com. You can also visit Femme Med Hospital at Plot-4, Block A, Sector 8 Dwarka (24/7 maternity access).',
  },
];
