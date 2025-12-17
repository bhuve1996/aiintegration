'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout';
import { PageHeader } from '@/components/layout';
import {
  Button,
  Input,
  Dropzone,
  EmptyState,
  Select,
  Checkbox,
  Modal,
  type SelectOption,
} from '@/components/ui';
import { Search, Upload } from 'lucide-react';

const filterOptions: SelectOption[] = [
  { value: 'all', label: 'All Types' },
  { value: 'image', label: 'Images' },
  { value: 'video', label: 'Videos' },
  { value: 'document', label: 'Documents' },
];

export function AssetsContent() {
  const [assets] = useState<unknown[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectAll, setSelectAll] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const hasAssets = assets.length > 0;

  const handleDrop = (files: File[]) => {
    setUploadedFiles(files);
    setShowUploadModal(true);
  };

  const handleUploadConfirm = () => {
    // Handle file upload
    console.warn('Uploading files:', uploadedFiles);
    setShowUploadModal(false);
    setUploadedFiles([]);
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Page Header with PageHeader component */}
        <PageHeader
          title="All Assets"
          description="Manage your creative assets in one place"
          actions={
            <Button leftIcon={<Upload className="h-4 w-4" />} onClick={() => setShowUploadModal(true)}>
              Upload Assets
            </Button>
          }
        />

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Checkbox
              label="Select All"
              checked={selectAll}
              onChange={(e) => setSelectAll(e.target.checked)}
            />
          </div>
          <div className="flex-1 flex gap-3">
            <div className="relative flex-1 max-w-md">
              <Input
                placeholder="Search assets..."
                inputSize="md"
                leftIcon={<Search className="h-4 w-4" />}
              />
            </div>
            <Select
              options={filterOptions}
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="w-40"
            />
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
              onDrop={handleDrop}
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
                  onClick: () => setShowUploadModal(true),
                }}
              />
            </div>
          </div>
        )}

        {/* Upload Confirmation Modal */}
        <Modal
          isOpen={showUploadModal}
          onClose={() => setShowUploadModal(false)}
          title="Upload Assets"
          description={`You're about to upload ${uploadedFiles.length} file(s)`}
          size="md"
        >
          <div className="space-y-4">
            {uploadedFiles.length > 0 ? (
              <div className="space-y-2">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-background-secondary)]"
                  >
                    <span className="text-sm text-[var(--color-text-primary)] truncate">
                      {file.name}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <Dropzone
                onDrop={setUploadedFiles}
                title="Select files to upload"
                subtitle="Drag and drop or click to browse"
                helperText="Supports images and videos up to 50MB"
              />
            )}

            <div className="flex gap-3 justify-end pt-4">
              <Button variant="outline" onClick={() => setShowUploadModal(false)}>
                Cancel
              </Button>
              <Button onClick={handleUploadConfirm} disabled={uploadedFiles.length === 0}>
                Upload {uploadedFiles.length > 0 && `(${uploadedFiles.length})`}
              </Button>
            </div>
          </div>
        </Modal>
      </main>
    </div>
  );
}
