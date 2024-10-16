import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '../context/ThemeContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>

    );
}

export default MyApp;