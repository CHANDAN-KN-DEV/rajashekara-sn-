import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mr. Rajashekara S N | Chief Librarian – Jyothy Institute",
  description:
    "Academic portfolio of Mr. Rajashekara S N, Chief Librarian at Jyothy Institute of Commerce and Management, Bengaluru. Library & Information Science professional with 9+ years of experience.",
  keywords: [
    "Rajashekara S N",
    "Chief Librarian",
    "Library Science",
    "Jyothy Institute",
    "Bengaluru",
    "Scientometrics",
    "Bibliometrics",
    "Academic Portfolio",
    "Information Literacy",
  ],
  authors: [{ name: "Mr. Rajashekara S N" }],
  openGraph: {
    title: "Mr. Rajashekara S N | Chief Librarian",
    description:
      "Library & Information Science professional with 9+ years of academic library experience.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
