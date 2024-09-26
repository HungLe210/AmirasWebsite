
export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className='sup_layout'>
            {children}
        </section>
    )
}