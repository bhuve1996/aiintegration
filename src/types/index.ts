/**
 * Global Type Definitions
 */

// Common utility types
export type PropsWithClassName<P = unknown> = P & { className?: string };

export type PropsWithChildren<P = unknown> = P & { children?: React.ReactNode };

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

// Input variants
export type InputVariant = 'default' | 'filled' | 'outline';
export type InputSize = 'sm' | 'md' | 'lg';

// Badge variants
export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'info' | 'outline';

// Card variants
export type CardVariant = 'default' | 'elevated' | 'bordered' | 'interactive';

// Common component props
export interface BaseComponentProps {
  className?: string;
  id?: string;
  'data-testid'?: string;
}

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  subscription: 'free' | 'starter' | 'growth' | 'enterprise';
  createdAt: string;
}

// Project types
export interface Project {
  id: string;
  name: string;
  description?: string;
  status: 'draft' | 'active' | 'paused' | 'completed';
  createdAt: string;
  updatedAt: string;
  thumbnail?: string;
  metrics?: ProjectMetrics;
}

export interface ProjectMetrics {
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  roas: number;
}

// Asset types
export interface Asset {
  id: string;
  name: string;
  type: 'image' | 'video' | 'document';
  url: string;
  thumbnailUrl?: string;
  size: number;
  mimeType: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  favorite: boolean;
}

// Campaign types
export interface Campaign {
  id: string;
  projectId: string;
  name: string;
  status: 'draft' | 'pending' | 'active' | 'paused' | 'completed';
  objective: string;
  budget: {
    daily: number;
    total: number;
  };
  schedule: {
    startDate: string;
    endDate?: string;
  };
  targeting: CampaignTargeting;
  creatives: CampaignCreative[];
  metrics?: CampaignMetrics;
}

export interface CampaignTargeting {
  locations: string[];
  ageRange: { min: number; max: number };
  genders: ('male' | 'female' | 'all')[];
  interests: string[];
  behaviors: string[];
}

export interface CampaignCreative {
  id: string;
  type: 'image' | 'video' | 'carousel';
  headline: string;
  description: string;
  callToAction: string;
  media: string[];
}

export interface CampaignMetrics {
  spend: number;
  impressions: number;
  reach: number;
  clicks: number;
  ctr: number;
  conversions: number;
  cpc: number;
  cpa: number;
  roas: number;
}

// Analytics types
export interface AnalyticsData {
  date: string;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  revenue: number;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}
