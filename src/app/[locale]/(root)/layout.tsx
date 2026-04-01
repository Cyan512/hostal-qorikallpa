import Footer from "@/src/components/organisms/footer"
import Header from "@/src/components/organisms/header"
import React from "react";

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header/>
            <main className="flex-1">
                {children}
            </main>
            <Footer/>
        </div>
    )
}
