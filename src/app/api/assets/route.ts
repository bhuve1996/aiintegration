import { NextResponse } from 'next/server';
import { mockAssets, getAssetCounts } from '@/mock/data';

export async function GET(request: Request) {
  // Parse query parameters
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const filter = searchParams.get('filter');
  const tag = searchParams.get('tag');

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  let assets = [...mockAssets];

  // Apply filters
  if (type) {
    assets = assets.filter((a) => a.type === type);
  }

  if (filter === 'favorites') {
    assets = assets.filter((a) => a.favorite);
  }

  if (tag) {
    assets = assets.filter((a) => a.tags.includes(tag));
  }

  return NextResponse.json({
    success: true,
    data: assets,
    counts: getAssetCounts(),
    pagination: {
      page: 1,
      pageSize: 50,
      total: assets.length,
      totalPages: 1,
    },
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
    }

    // Mock file upload response
    const newAsset = {
      id: `asset_${Date.now()}`,
      name: file.name,
      type: file.type.startsWith('video/') ? 'video' : 'image',
      url: `/uploads/${file.name}`,
      thumbnailUrl: `/uploads/thumb_${file.name}`,
      size: file.size,
      mimeType: file.type,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: [],
      favorite: false,
    };

    return NextResponse.json({
      success: true,
      data: newAsset,
      message: 'Asset uploaded successfully',
    });
  } catch {
    return NextResponse.json({ success: false, error: 'Upload failed' }, { status: 500 });
  }
}
