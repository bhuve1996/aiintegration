import { Metadata } from 'next';
import { Sidebar } from '@/components/layout';
import { Button, Input, Dropzone, EmptyState } from '@/components/ui';
import { seoConfig } from '@/config';
import { Search, Filter, Upload, CheckSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: seoConfig.pages.assets.title,
  description: seoConfig.pages.assets.description,
};

export default function AssetsPage() {
  // Mock empty state - in real app, this would come from API
  const assets: unknown[] = [];
  const hasAssets = assets.length > 0;

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">All Assets</h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Manage your creative assets in one place
            </p>
          </div>
          <Button leftIcon={<Upload className="h-4 w-4" />}>Upload Assets</Button>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] rounded-lg transition-colors">
              <CheckSquare className="h-4 w-4" />
              Select All
            </button>
          </div>
          <div className="flex-1 flex gap-3">
            <div className="relative flex-1 max-w-md">
              <Input
                placeholder="Search assets..."
                inputSize="md"
                leftIcon={<Search className="h-4 w-4" />}
              />
            </div>
            <Button variant="outline" leftIcon={<Filter className="h-4 w-4" />}>
              Filter
            </Button>
          </div>
        </div>

        {/* Content Area */}
        {hasAssets ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Asset cards would go here */}
          </div>
        ) : (
          <div className="mt-8">
            <Dropzone
              onDrop={(files) => {
                // Handle file upload
                console.warn('Files to upload:', files);
              }}
              title="Drop your assets here"
              subtitle="or click to browse your files"
              helperText="Supports JPG, PNG, GIF, MP4, MOV up to 50MB"
              className="min-h-[400px]"
            />

            <div className="mt-8">
              <EmptyState
                icon="Image"
                title="No assets yet"
                description="Upload your first creative assets to get started. You can drag and drop files or use the upload button."
                action={{
                  label: 'Upload Assets',
                  onClick: () => {
                    // Trigger upload
                  },
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
