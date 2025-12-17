import { Header, Footer } from '@/components/layout';
import { ChatWidget } from '@/components/chat';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ChatWidget />
    </>
  );
}

