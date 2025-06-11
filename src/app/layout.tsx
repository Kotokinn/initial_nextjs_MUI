import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { NextAppProvider } from '@toolpad/core/nextjs';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import * as React from 'react';
import { NAVIGATION } from '../components/Navigation';
import "@/src/app/globals.css";

const BRANDING = {
  title: 'This is title',
};



export default function RootLayout(props: { children: React.ReactNode }) {

  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider>
          <NextAppProvider
            navigation={NAVIGATION}
            branding={BRANDING}
          // session={session}
          // authentication={AUTHENTICATION}
          // theme={theme}
          >
            {props.children}
          </NextAppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
