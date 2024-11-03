import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import { Toaster } from "@/components/Toast/Toaster";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

import { Alexandria } from "next/font/google";
// import { NextIntlClientProvider } from "next-intl";
// import { getLocale, getMessages } from "next-intl/server";
import Head from "next/head";
import Script from "next/script";
import { cn } from "@/lib/utils";

const alex = Alexandria({ subsets: ["arabic"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const locale = await getLocale();
  // const messages = await getMessages();

  return (
    <html>
      <body className={cn(alex.className, "dark")}>
        <ReactQueryProvider>
          {/* <NextIntlClientProvider messages={messages}> */}
          <NextTopLoader color="var(--brand)" />
          <Toaster />
          <div id="__next" className="min-h-screen">
            {children}
          </div>
          {/* </NextIntlClientProvider> */}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
