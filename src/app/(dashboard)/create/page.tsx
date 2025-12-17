import { generatePageMetadata } from '@/lib/seo';
import { CreateCampaignForm } from './CreateCampaignForm';

export const metadata = generatePageMetadata('create');

export default function CreateCampaignPage() {
  return <CreateCampaignForm />;
}
