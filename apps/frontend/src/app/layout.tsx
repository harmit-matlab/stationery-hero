import './global.css';
import { QueryProvider } from '@/components/providers/QueryProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import { SonnerToaster, Toaster } from '@/components';

export const metadata = {
  title: 'PenCraft Stationery',
  description: 'Premium stationery for every occasion. Quality paper, pens, and office supplies.',
  icons: {
    icon: ['/icons/favicon.ico', '/icon.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <LanguageProvider>
            {children}
            <SonnerToaster />
            <Toaster />
          </LanguageProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
