import type { Project } from '@/types';

export const mockProjects: Project[] = [
  {
    id: 'proj_001',
    name: 'Summer Campaign 2024',
    description: 'Summer sale promotion across all channels with focus on new customer acquisition',
    status: 'active',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-20T14:45:00Z',
    thumbnail: undefined,
    metrics: {
      spend: 2450,
      impressions: 125000,
      clicks: 3200,
      conversions: 89,
      roas: 4.2,
    },
  },
  {
    id: 'proj_002',
    name: 'Brand Awareness Q1',
    description: 'Expanding brand reach to new demographics and building top-of-mind awareness',
    status: 'active',
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-01-19T16:20:00Z',
    thumbnail: undefined,
    metrics: {
      spend: 5200,
      impressions: 450000,
      clicks: 8500,
      conversions: 156,
      roas: 6.8,
    },
  },
  {
    id: 'proj_003',
    name: 'Product Launch - Widget Pro',
    description: 'Launch campaign for our new flagship product with exclusive early-bird offers',
    status: 'draft',
    createdAt: '2024-01-18T09:15:00Z',
    updatedAt: '2024-01-18T09:15:00Z',
    thumbnail: undefined,
    metrics: {
      spend: 0,
      impressions: 0,
      clicks: 0,
      conversions: 0,
      roas: 0,
    },
  },
  {
    id: 'proj_004',
    name: 'Retargeting Campaign',
    description: 'Re-engage visitors who viewed products but did not complete purchase',
    status: 'paused',
    createdAt: '2023-12-01T11:00:00Z',
    updatedAt: '2024-01-05T10:30:00Z',
    thumbnail: undefined,
    metrics: {
      spend: 1800,
      impressions: 95000,
      clicks: 4200,
      conversions: 178,
      roas: 8.5,
    },
  },
  {
    id: 'proj_005',
    name: 'Holiday Special 2023',
    description: 'Black Friday and Cyber Monday promotional campaign',
    status: 'completed',
    createdAt: '2023-11-15T08:00:00Z',
    updatedAt: '2023-12-15T23:59:00Z',
    thumbnail: undefined,
    metrics: {
      spend: 15000,
      impressions: 2500000,
      clicks: 85000,
      conversions: 2340,
      roas: 12.3,
    },
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return mockProjects.find((p) => p.id === id);
};

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return mockProjects.filter((p) => p.status === status);
};
