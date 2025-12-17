import { generatePageMetadata } from '@/lib/seo';
import { ProjectsContent } from './ProjectsContent';

export const metadata = generatePageMetadata('projects');

export default function ProjectsPage() {
  return <ProjectsContent />;
}
