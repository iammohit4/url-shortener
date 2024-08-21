import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
    title: "URL Shortener",
    description: "A basic URL shortener",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-theme="pastel">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
