import './globals.css';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export const metadata = {
  title: 'KeenKeeper',
  description: 'Keep your friendships alive with timely check-ins and interaction tracking.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-[calc(100vh-80px)]">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2200,
            style: {
              background: '#0f172a',
              color: '#fff',
              borderRadius: '16px',
              padding: '14px 16px'
            }
          }}
        />
      </body>
    </html>
  );
}
