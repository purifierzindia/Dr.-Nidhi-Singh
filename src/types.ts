export interface ConsultationLocation {
  id: string;
  name: string;
  role: string;
  tag: string;
  address: string;
  sector: string;
  city: string;
  timings: string;
  phone: string;
  phoneDisplay: string;
  secondaryPhone?: string;
  mapQuery: string;
  features: string[];
  imageUrl?: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  category: 'obstetrics' | 'gynecology';
  summary: string;
  highlights: string[];
}

export interface PatientReview {
  id: string;
  patientInitial: string;
  reviewDate: string;
  source: 'Verified Practo Patient' | 'Verified Google Review';
  tag: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppointmentFormState {
  fullName: string;
  phone: string;
  locationId: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  notes?: string;
}
