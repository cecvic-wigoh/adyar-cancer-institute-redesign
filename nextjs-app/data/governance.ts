// Governance data for the Cancer Institute (WIA)

export interface LeadershipMember {
  name: string;
  designation: string;
  quote: string;
  image?: string;
}

export interface GoverningBodyMember {
  name: string;
  designation: string;
  affiliation: string;
  image?: string;
}

export interface HODEntry {
  name: string;
  department: string;
  designation?: string;
  image?: string;
}

export interface CommitteeMember {
  name: string;
  designation: string;
  affiliation?: string;
  image?: string;
}

export function getInitials(name: string): string {
  const cleaned = name
    .replace(/^(Dr\.?|Shri\.?|Mrs?\.?|Prof\.?|Joint|Secretary|Director)\s*/gi, "")
    .trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const leadershipHighlights: LeadershipMember[] = [
  {
    name: "Shri. N.L. Rajah",
    designation: "Chairman",
    quote:
      "Our mission is to make world-class cancer care accessible to every individual, regardless of their background.",
  },
  {
    name: "Dr. E. Hemanth Raj",
    designation: "Vice Chairman",
    quote:
      "Through innovation and compassion, we continue to push the boundaries of oncology care and research.",
  },
  {
    name: "Dr. Kalpana Balakrishnan",
    designation: "CEO & Director",
    quote:
      "We are committed to fostering a culture of excellence, research, and patient-centered care at every level.",
  },
];

export const governingBody: GoverningBodyMember[] = [
  {
    name: "Shri. N.L. Rajah",
    designation: "Chairman",
    affiliation:
      "Senior Advocate & Chairman, Cancer Institute (WIA), Adyar, Chennai – 600020",
  },
  {
    name: "Dr. E. Hemanth Raj",
    designation: "Vice Chairman",
    affiliation:
      "Vice Chairman, Cancer Institute (WIA), Adyar, Chennai – 600020",
  },
  {
    name: "Shri. Vijay Sankar",
    designation: "Vice Chairman",
    affiliation: "The Sankar Group, Chennai",
  },
  {
    name: "Dr. Kalpana Balakrishnan",
    designation: "Member",
    affiliation:
      "CEO & Director, Cancer Institute (WIA), Adyar, Chennai – 600020",
  },
  {
    name: "Shri. Venugopal V",
    designation: "Secretary",
    affiliation:
      "CFO & Secretary, Cancer Institute (WIA), Adyar, Chennai – 600020",
  },
  {
    name: "Dr. T. Gnana Sagar",
    designation: "Member",
    affiliation:
      "DKFL I-C Colony, 3rd Street, Thiruvanmiyur, Chennai – 600041",
  },
  {
    name: "Shri. Vinod Kumar Jain",
    designation: "Member",
    affiliation:
      "Siyat House, No.81, Poonamallee High Road, Purasawakkam, Chennai – 600084",
  },
  {
    name: "Shri. Srivats Ram",
    designation: "Member",
    affiliation: "Managing Director, Wheels India Ltd., Chennai",
  },
  {
    name: "Mrs. Girija Vaidyanathan",
    designation: "Member",
    affiliation:
      "New No. 15/56 No. 8, Central Avenue, Karpagampalayam, Chennai – 600106",
  },
  {
    name: "Dr. T.S. Ravikumar",
    designation: "Member",
    affiliation: "131-C, Kilpauk Garden Road, Chennai – 600010",
  },
  {
    name: "Shri. C.N. Raghavendran",
    designation: "Member",
    affiliation:
      "C.N Narayana Rao (Consultants) Private Limited No.10, Karpagambal Nagar, Mylapore, Chennai – 600004",
  },
  {
    name: "Shri. R. Shankar Raman",
    designation: "Member",
    affiliation:
      "Flat No. 125, Kalpana Royale, 13th Floor, Door No. 23, Near Sun Circle Don East, Mumbai – 400022",
  },
  {
    name: "Dr. S. Suresh",
    designation: "Member",
    affiliation: "Director, Mediscan Systems, Chennai",
  },
  {
    name: "Dr. Krishnamurthy Sundaram",
    designation: "Member",
    affiliation:
      "Clinical Professor, Department of Otolaryngology, SUNY Downstate Medical Center, Brooklyn, NY 11203, USA",
  },
  {
    name: "Secretary, Department of Health Research & Director General",
    designation: "Member",
    affiliation:
      "Indian Council of Medical Research, New Delhi – 110029",
  },
  {
    name: "Dr. Mayil Vahanan Natarajan",
    designation: "Member",
    affiliation: "Orthopaedic Surgeon, M/s Orthopaedic Hospital",
  },
  {
    name: "Joint Secretary & Financial Adviser",
    designation: "Member",
    affiliation:
      "Govt. of India, Ministry of Health & Family Welfare, Nirman Bhawan, New Delhi – 110011",
  },
  {
    name: "Director of Medical Education",
    designation: "Member",
    affiliation:
      "Govt. of Tamil Nadu, 142, Poonamallee High Road, Chennai – 600010",
  },
  {
    name: "Mr. Vardhaman Jain",
    designation: "Member",
    affiliation: "",
  },
];

export const hodIncharges: HODEntry[] = [
  { name: "Arvind Krishnamurthy", department: "Surgical Oncology" },
  { name: "Deepa Devi G", department: "Blood Bank" },
  { name: "Karthigaiselvi M", department: "Radio Diagnosis & Imaging" },
  { name: "Krishna Kumar R", department: "Nuclear Medicine" },
  { name: "Malliga JS", department: "Preventive Oncology" },
  { name: "Priya Iyer", department: "Radiation Oncology" },
  { name: "Rajesh K", department: "IT" },
  { name: "Srinivasan Vijay", department: "Physiotherapy" },
  { name: "Venkatraman R", department: "Medical Oncology" },
  { name: "Punitha C", department: "Anaesthesia & Pain Management" },
  { name: "Ujwala Prakash Wakpaijan", department: "Gynec-Oncology" },
  { name: "Pakiya Nancy", department: "Microbiology" },
  { name: "Ajitha S", department: "HR & Communication" },
  { name: "Swaminathan R", department: "Tumour Registry" },
  { name: "Shirley S", department: "Oncopathology" },
  { name: "Thuthi B", department: "Clinical Biochemistry" },
  { name: "Surendran V", department: "Psycho-Oncology & Resource Center for Tobacco Control (RCTC)" },
  { name: "Rama R", department: "Epidemiology and Dietetics" },
  { name: "Sabitha K", department: "Molecular-Oncology" },
  { name: "Vijayalakshmi R", department: "CBMD - Cancer Biology" },
  {
    name: "Sridevi V",
    department: "CTSU",
    designation: "Incharge",
  },
  { name: "Meenakshi V V", department: "Palliative Medicine" },
  { name: "Venugopal Vaidyanathan", department: "Finance and Accounts" },
  {
    name: "Srividya Shankar",
    department: "Purchase",
    designation: "Incharge",
  },
  { name: "Thirumoorthy N", department: "Medical Gastroenterology" },
  { name: "Varalakshmi V", department: "Electrical and Quality Control" },
  { name: "Vivekanandan N", department: "Medical Physics" },
  { name: "Alexander John", department: "OPD" },
  {
    name: "Gayathri / Priya Jovita",
    department: "Stores",
    designation: "Incharge",
  },
  { name: "Vasanthavalli S", department: "Biomedical Engineering" },
  {
    name: "Ravichandran",
    department: "Library",
    designation: "Incharge",
  },
  {
    name: "Shirley S",
    department: "Academics",
    designation: "Dean",
  },
  { name: "Rajsekhar R", department: "CSR" },
];

export const executiveCommittee: CommitteeMember[] = [
  { name: "Shri. N.L. Rajah", designation: "Chairman" },
  { name: "Dr. Kalpana Balakrishnan", designation: "CEO & Director" },
  { name: "Mr. V. Venugopal", designation: "CFO & Secretary" },
  { name: "Dr. T.S. Ravikumar", designation: "Member" },
  { name: "Dr. K. Sundaram", designation: "Member" },
  { name: "Dr. E. Hemanth Raj", designation: "Member" },
  { name: "Dr. T.G. Sagar", designation: "Member" },
  { name: "Mr. Vijay Shankar", designation: "Member" },
  { name: "Shri. Srivats Ram", designation: "Member" },
  { name: "Mr. Vardhaman Jain", designation: "Member" },
  { name: "Dr. Vijaysnand Pandurangan", designation: "Member" },
  { name: "Dr. R. Swaminathan", designation: "Member" },
  { name: "Dr. Arvind Krishnamurthy", designation: "Member" },
  { name: "Mrs. Varalakshmi Vijayakumar", designation: "Member" },
];

export const financeCommittee: CommitteeMember[] = [
  {
    name: "Shri. N.L. Rajah",
    designation: "Chairman",
    affiliation: "Cancer Institute (WIA)",
  },
  {
    name: "Dr. E. Hemanth Raj",
    designation: "Vice Chairman",
    affiliation: "Cancer Institute (WIA), Adyar, Chennai – 600020",
  },
  {
    name: "Dr. Kalpana Balakrishnan",
    designation: "CEO & Director",
    affiliation: "Cancer Institute (WIA)",
  },
  {
    name: "Shri. V. Venugopal",
    designation: "Chief Financial Officer (CFO)",
    affiliation: "Cancer Institute (WIA)",
  },
  {
    name: "Shri. Vijay Shankar",
    designation: "Chairman",
    affiliation: "The Sansar Group, Chennai",
  },
  {
    name: "Shri. Shankar Raman",
    designation: "Member",
  },
  {
    name: "Shri. Srinivas Acharya",
    designation: "Member",
  },
  {
    name: "Shri. Srivats Ram",
    designation: "Managing Director",
    affiliation: "Wheels India Ltd., Chennai",
  },
  {
    name: "Mr. Vardhaman Jain",
    designation: "Member",
  },
];
