import { Metadata } from 'next';
import { seoConfig } from '@/config';
import { ProjectsContent } from './ProjectsContent';

export const metadata: Metadata = {
  title: seoConfig.pages.projects.title,
  description: seoConfig.pages.projects.description,
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
