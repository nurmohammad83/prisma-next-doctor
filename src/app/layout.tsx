import Footer from "@/components/ui/Footer/Footer";
import "./globals.css";
import Providers from "@/lib/Providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <html lang="en">
      <Providers>
        <body>
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
