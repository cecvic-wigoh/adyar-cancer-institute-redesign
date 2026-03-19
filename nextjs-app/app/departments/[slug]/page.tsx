import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { departments, getDepartmentBySlug } from '@/data/departments';
import DepartmentClinical from '@/components/DepartmentClinical';
import DepartmentDiagnostic from '@/components/DepartmentDiagnostic';
import DepartmentSupport from '@/components/DepartmentSupport';

export async function generateStaticParams() {
  return departments.map((dept) => ({ slug: dept.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) return {};
  return {
    title: `${dept.title} | Cancer Institute (WIA)`,
    description: dept.metaDescription,
  };
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dept = getDepartmentBySlug(slug);
  if (!dept) notFound();

  switch (dept.category) {
    case 'clinical':
      return <DepartmentClinical department={dept} />;
    case 'diagnostic':
      return <DepartmentDiagnostic department={dept} />;
    case 'support':
      return <DepartmentSupport department={dept} />;
    default:
      return <DepartmentClinical department={dept} />;
  }
}
