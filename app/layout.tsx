import type {Metadata} from 'next'
import {Noto_Sans_Armenian} from 'next/font/google'
import {Analytics} from '@vercel/analytics/next'
import './globals.css'

const noto = Noto_Sans_Armenian({
    subsets: ['armenian'],
    weight: ['400', '500', '700'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Վեբ մշակում - Ուսուցողական ներկայացում',
    description: 'Ինտերակտիվ ներկայացում վեբ մշակման հիմունքների վերաբերյալ',
    generator: 'Gevorg Kartshikyan',

    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-icon.png',
    },

    openGraph: {
        title: 'Վեբ մշակում - Ուսուցողական ներկայացում',
        description: 'Ինտերակտիվ ներկայացում վեբ մշակման հիմունքների վերաբերյալ',
        url: 'https://presentation-gevorg-web.vercel.app/',
        siteName: 'Վեբ ուսուցում',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Վեբ մշակում'
            }
        ],
        locale: 'hy_AM',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Վեբ մշակում - Ուսուցողական ներկայացում',
        description: 'Ինտերակտիվ ներկայացում վեբ մշակման հիմունքների վերաբերյալ',
        images: ['/og-image.png'],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="hy">
        <body className={`${noto.className} antialiased`}>
        {children}
        <Analytics/>
        </body>
        </html>
    )
}
