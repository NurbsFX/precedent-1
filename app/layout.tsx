import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ui/theme-provider"

export const metadata = {
  title: "Clinique véterinaire du Marché de Neuilly-sur-Seine",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-blue-100" />
          <Suspense fallback="...">
            <Nav />
          </Suspense>
          <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">

            {children}
          </main>
          <Footer />
          <VercelAnalytics />
        </ThemeProvider>
      </body >
    </html >
  );
}
