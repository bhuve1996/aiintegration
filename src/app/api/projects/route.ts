import { NextResponse } from 'next/server';
import { mockProjects } from '@/mock/data';

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({
    success: true,
    data: mockProjects,
    pagination: {
      page: 1,
      pageSize: 10,
      total: mockProjects.length,
      totalPages: 1,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name) {
      return NextResponse.json(
        { success: false, error: 'Project name is required' },
        { status: 400 }
      );
    }

    // Create new project (mock)
    const newProject = {
      id: `proj_${Date.now()}`,
      name: body.name,
      description: body.description || '',
      status: 'draft' as const,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      thumbnail: null,
      metrics: {
        spend: 0,
        impressions: 0,
        clicks: 0,
        conversions: 0,
        roas: 0,
      },
    };

    return NextResponse.json({
      success: true,
      data: newProject,
      message: 'Project created successfully',
    });
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body' }, { status: 400 });
  }
}
