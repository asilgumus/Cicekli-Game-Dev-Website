"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function ClientLayout({ children }) {
    return (
        <LanguageProvider>
            <Navbar />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
        </LanguageProvider>
    );
}

