import './globals.css';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'KeenKeeper',
  description: 'Keep your friendships alive'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2200,
            style: {
              background: '#255845',
              color: '#fff',
              borderRadius: '10px',
              padding: '12px 14px'
            }
          }}
        />
      </body>
    </html>
  );
}