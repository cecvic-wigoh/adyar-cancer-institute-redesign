import type { Metadata } from 'next';
import { doctors } from '@/data/doctors';
import DoctorsDirectory from './DoctorsDirectory';

export const metadata: Metadata = {
  title: 'Find a Doctor | Cancer Institute (WIA)',
  description: 'Browse and search our team of specialist oncologists, surgeons, and healthcare professionals at Cancer Institute (WIA), Adyar, Chennai.',
};

// Collect unique departments for filter
const departments = Array.from(
  new Map(doctors.map(d => [d.department.slug, d.department])).values()
).sort((a, b) => a.title.localeCompare(b.title));

export default function DoctorsPage() {
  return (
    <main id="main">
      <DoctorsDirectory doctors={doctors} departments={departments} />
    </main>
  );
}
