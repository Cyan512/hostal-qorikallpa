import {hasLocale, NextIntlClientProvider} from "next-intl";
import "react-datepicker/dist/react-datepicker.css";
import {routing} from "@/src/i18n/routing";
import {notFound} from "next/navigation";
import React from "react";
import "./globals.css"

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function RootLayout({children, params}: Props) {
    const {locale} = await params;

    if (!hasLocale(routing.locales, locale)) return notFound();

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
