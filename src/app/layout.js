import "./styles/globals.css";
import { ThemeProvider } from './context/ThemeContext';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "arrudagba",
  description: "Software Engineer.",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider> 
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}