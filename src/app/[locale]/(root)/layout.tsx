import Header from "@/src/components/header"

export default function RootLayout({ children, }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}
