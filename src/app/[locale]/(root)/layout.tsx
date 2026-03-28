import Footer from "@/src/components/organisms/footer"
import Header from "@/src/components/organisms/header"

export default function RootLayout({ children, }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}
