import { DashboardNav } from '@/components/layout';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardNav />
      <div className="pt-16">{children}</div>
    </>
  );
}
