import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import { JetBrains_Mono, Montserrat, Roboto } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gabriel Arruda.',
  icons: {
    icon: '/favicon.ico',
  },
};

import { LoadingProvider } from './context/LoadingContext';
import Preloader from './components/Preloader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jetbrainsMono.variable} ${montserrat.variable} ${roboto.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>
        <LoadingProvider>
          <Preloader />
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
