import RootLayout from 'app/layout'
import './styles.sass'
import '@styles/globals.sass';
import '@styles/color.sass';

export default function SubLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <RootLayout showNewsletter={false}>
            <section className='sup_layout'>
                {children}
            </section>
        </RootLayout>

    )
}