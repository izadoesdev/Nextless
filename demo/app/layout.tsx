import type { Metadata } from "next";
import { SmartLink } from "@databuddy/nextless";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextless Components Demo",
  description: "Test environment for @databuddy/nextless components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <header className="shadow-sm">
          <nav className="container mx-auto px-4 py-3 flex items-center space-x-4">
            <SmartLink href="/" className="text-lg font-semibold hover:text-blue-600 transition-colors">
              Nextless Demo
            </SmartLink>
            <div className="flex space-x-4">
              <SmartLink href="/link-tests" className="text-gray-600 hover:text-blue-600 transition-colors">Link Tests</SmartLink>
              <SmartLink href="/og-tests" className="text-gray-600 hover:text-blue-600 transition-colors">OG Tests</SmartLink>
              <SmartLink href="/font-tests" className="text-gray-600 hover:text-blue-600 transition-colors">Font Tests</SmartLink>
              <SmartLink href="/script-tests" className="text-gray-600 hover:text-blue-600 transition-colors">Script Tests</SmartLink>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="py-4 text-center text-sm text-gray-500">
          <p>@databuddy/nextless - Component Testing Environment</p>
        </footer>
      </body>
    </html>
  );
}
