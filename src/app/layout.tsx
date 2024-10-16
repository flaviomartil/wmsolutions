'use client';
import React from "react";
import localFont from "next/font/local";
import { useTheme, ThemeProvider } from "../context/ThemeContext";
import Head from "next/head"; // Importação de "Head" adicionada
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
        <Head>
            <title>WMSolutions - Agência de Desenvolvimento de Software</title>
            <meta name="description" content="WMSolutions é uma agência de desenvolvimento de software especializada em criar soluções personalizadas para empresas de diversos setores." />
            <meta name="keywords" content="WMSolutions, desenvolvimento de software, soluções personalizadas, tecnologia, serviços de TI, web development, app development" />
            <meta name="author" content="WMSolutions Team" />
            {/* Adicione mais tags meta aqui conforme necessário */}
        </Head>
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