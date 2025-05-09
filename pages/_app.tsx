import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { Navbar } from '@/components/Navbar/Navbar';
import { AuthProvider } from '@/contexts/AuthContext';
import { poppins } from '@/fonts';
import { queryClient } from '@/lib/react-query';
import { theme } from '@/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <AuthProvider>
          <Head>
            <title>Kaju Promo Sender</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
            <link rel="shortcut icon" href="/favicon.svg" />
          </Head>
          <main className={poppins.className}>
            <Navbar />
            <Component {...pageProps} />
          </main>
        </AuthProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
