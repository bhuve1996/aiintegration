import type { Asset } from '@/types';

export const mockAssets: Asset[] = [
  {
    id: 'asset_001',
    name: 'Summer Banner 1200x628',
    type: 'image',
    url: '/mock/assets/summer-banner.jpg',
    thumbnailUrl: '/mock/assets/summer-banner-thumb.jpg',
    size: 245000,
    mimeType: 'image/jpeg',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
    tags: ['summer', 'banner', 'promotion'],
    favorite: true,
  },
  {
    id: 'asset_002',
    name: 'Product Video 15s',
    type: 'video',
    url: '/mock/assets/product-video.mp4',
    thumbnailUrl: '/mock/assets/product-video-thumb.jpg',
    size: 15000000,
    mimeType: 'video/mp4',
    createdAt: '2024-01-14T14:00:00Z',
    updatedAt: '2024-01-14T14:00:00Z',
    tags: ['product', 'video', 'demo'],
    favorite: true,
  },
  {
    id: 'asset_003',
    name: 'Brand Logo PNG',
    type: 'image',
    url: '/mock/assets/brand-logo.png',
    thumbnailUrl: '/mock/assets/brand-logo.png',
    size: 45000,
    mimeType: 'image/png',
    createdAt: '2024-01-10T09:00:00Z',
    updatedAt: '2024-01-10T09:00:00Z',
    tags: ['logo', 'brand'],
    favorite: false,
  },
  {
    id: 'asset_004',
    name: 'Customer Testimonial',
    type: 'video',
    url: '/mock/assets/testimonial.mp4',
    thumbnailUrl: '/mock/assets/testimonial-thumb.jpg',
    size: 25000000,
    mimeType: 'video/mp4',
    createdAt: '2024-01-12T11:30:00Z',
    updatedAt: '2024-01-12T11:30:00Z',
    tags: ['testimonial', 'video', 'social-proof'],
    favorite: false,
  },
];

export const getAssetById = (id: string): Asset | undefined => {
  return mockAssets.find((a) => a.id === id);
};

export const getAssetsByType = (type: Asset['type']): Asset[] => {
  return mockAssets.filter((a) => a.type === type);
};

export const getFavoriteAssets = (): Asset[] => {
  return mockAssets.filter((a) => a.favorite);
};

export const getAssetsByTag = (tag: string): Asset[] => {
  return mockAssets.filter((a) => a.tags.includes(tag));
};

export const getAssetCounts = () => ({
  all: mockAssets.length,
  favorites: mockAssets.filter((a) => a.favorite).length,
  images: mockAssets.filter((a) => a.type === 'image').length,
  videos: mockAssets.filter((a) => a.type === 'video').length,
});
