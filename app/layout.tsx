import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Three.js 3D Model Viewer',
  description: 'Visualizador de modelo 3D com Three.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
