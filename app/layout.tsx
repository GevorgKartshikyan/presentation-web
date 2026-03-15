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
            {url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)'},
            {url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)'},
            {url: '/icon.svg', type: 'image/svg+xml'},
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
                url: 'https://presentation-gevorg-web.vercel.app/og-image.png?v=2', // полный URL + сброс кеша
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
        images: ['https://presentation-gevorg-web.vercel.app/og-image.png?v=2'],
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {

    // @ts-ignore
    return (
        <html lang="hy">
        <head>
            {/*// @ts-ignore*/}
            <meta property="og:title" content={metadata.openGraph?.title}/>
            <meta property="og:description" content={metadata.openGraph?.description}/>
            {/*// @ts-ignore*/}
            <meta property="og:image" content={metadata.openGraph?.images?.[0].url}/>
            {/*// @ts-ignore*/}
            <meta property="og:url" content={metadata.openGraph?.url}/>
            {/*// @ts-ignore*/}
            <meta property="og:type" content={metadata.openGraph?.type}/>
            <meta name="twitter:card" content="summary_large_image"/>
            {/*// @ts-ignore*/}
            <meta name="twitter:title" content={metadata.twitter?.title}/>
            <meta name="twitter:description" content={metadata.twitter?.description}/>
            {/*// @ts-ignore*/}
            <meta name="twitter:image" content={metadata.twitter?.images?.[0]}/>
        </head>
        <body className={`${noto.className} antialiased`}>
        {children}
        <Analytics/>
        </body>
        </html>
    )
}
