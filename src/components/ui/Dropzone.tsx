'use client';

import { useCallback, useState, type DragEvent } from 'react';
import { cn } from '@/lib/utils';
import { Upload, FileImage, FileVideo, File } from 'lucide-react';

export interface DropzoneProps {
  onDrop: (files: File[]) => void;
  accept?: string[];
  maxSize?: number;
  maxFiles?: number;
  title?: string;
  subtitle?: string;
  helperText?: string;
  className?: string;
  disabled?: boolean;
}

export function Dropzone({
  onDrop,
  accept = ['image/*', 'video/*'],
  maxSize = 50 * 1024 * 1024, // 50MB
  maxFiles = 10,
  title = 'Drop files here',
  subtitle = 'or click to browse',
  helperText = 'Supports images and videos up to 50MB',
  className,
  disabled = false,
}: DropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (!disabled) {
        setIsDragging(true);
      }
    },
    [disabled]
  );

  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);

      if (disabled) return;

      const files = Array.from(e.dataTransfer.files);
      const validFiles = files
        .filter((file) => {
          // Check file type
          const isValidType = accept.some((type) => {
            if (type.endsWith('/*')) {
              return file.type.startsWith(type.replace('/*', ''));
            }
            return file.type === type;
          });

          // Check file size
          const isValidSize = file.size <= maxSize;

          return isValidType && isValidSize;
        })
        .slice(0, maxFiles);

      if (validFiles.length > 0) {
        onDrop(validFiles);
      }
    },
    [accept, disabled, maxFiles, maxSize, onDrop]
  );

  const handleClick = useCallback(() => {
    if (disabled) return;

    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = maxFiles > 1;
    input.accept = accept.join(',');

    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      const files = Array.from(target.files || []).slice(0, maxFiles);
      if (files.length > 0) {
        onDrop(files);
      }
    };

    input.click();
  }, [accept, disabled, maxFiles, onDrop]);

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      className={cn(
        'relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 transition-all cursor-pointer',
        isDragging
          ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5'
          : 'border-[var(--color-border)] bg-[var(--color-background-secondary)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-background-tertiary)]',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      <div className="mb-4 flex items-center gap-2">
        <FileImage className="h-6 w-6 text-[var(--color-text-muted)]" />
        <FileVideo className="h-6 w-6 text-[var(--color-text-muted)]" />
        <File className="h-6 w-6 text-[var(--color-text-muted)]" />
      </div>

      <div className="mb-2 rounded-full bg-[var(--color-primary)]/10 p-3">
        <Upload className="h-6 w-6 text-[var(--color-primary)]" />
      </div>

      <h4 className="mb-1 text-base font-semibold text-[var(--color-text-primary)]">{title}</h4>
      <p className="mb-3 text-sm text-[var(--color-text-secondary)]">{subtitle}</p>
      <p className="text-xs text-[var(--color-text-muted)]">{helperText}</p>
    </div>
  );
}

export default Dropzone;
