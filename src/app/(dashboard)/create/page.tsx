import { Metadata } from 'next';
import { seoConfig } from '@/config';
import { CreateCampaignForm } from './CreateCampaignForm';

export const metadata: Metadata = {
  title: seoConfig.pages.create.title,
  description: seoConfig.pages.create.description,
};

export default function CreateCampaignPage() {
  return <CreateCampaignForm />;
}
