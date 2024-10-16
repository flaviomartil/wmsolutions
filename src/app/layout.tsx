'use client';
import React from "react";
import localFont from "next/font/local";
import { useTheme, ThemeProvider } from "../context/ThemeContext";
import "../styles/globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();

    return (
        <html lang="pt-BR">
        <body className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}

const Root = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <RootLayout>
                {children}
            </RootLayout>
        </ThemeProvider>
    );
}

export default Root;