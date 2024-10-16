import React from "react";
import "../styles/globals.css";
import ThemeManagerWrapper from "@/components/ThemeManager";
import Head from "next/head";
import type {Metadata} from "next";

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'WMSolutions - Agência de Desenvolvimento de Software',
    description: 'WMSolutions é uma agência de desenvolvimento de software especializada em criar soluções personalizadas para empresas de diversos setores.',
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <>
        <Head>
            <link
                rel="stylesheet"
                href="./fonts/GeistVF.woff"
                type="font/woff"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="./fonts/GeistMonoVF.woff"
                type="font/woff"
                crossOrigin="anonymous"
            />
        </Head>
        <html lang="pt-BR">
        <ThemeManagerWrapper>
            {children}
        </ThemeManagerWrapper>
        </html>
        </>
    );
}

export default RootLayout;