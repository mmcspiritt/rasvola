import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rasvola - Helados y Nieves Escarchados en Roma Norte, Ciudad de México',
  description: 'Somos una barra de helados escarchados estilo vintage en Roma Norte, Ciudad de México. Descubre nuestros deliciosos helados y nieves escarchados con sabores únicos como Nutella, mango enchilado, y horchata.',
  keywords: 'helados, nieves, escarchados, vintage, Ciudad de México, CDMX, Roma Norte, postres, Rasvola, heladerías',
  openGraph: {
    title: 'Rasvola - Helados Escarchados en Roma Norte, Ciudad de México',
    description: 'Somos una barra de helados escarchados estilo vintage en Roma Norte, Ciudad de México.',
    url: 'https://www.rasvola.com',
    siteName: 'Rasvola',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20(3)-lu6GqKAJHkRHjknaHSXunIx1KyXp7E.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rasvola - Helados Escarchados en Roma Norte, Ciudad de México',
    description: 'Somos una barra de helados escarchados estilo vintage en Roma Norte, Ciudad de México.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20(3)-lu6GqKAJHkRHjknaHSXunIx1KyXp7E.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "IceCreamShop",
              "name": "Rasvola - Helados y Nieves Escarchados",
              "description": "Heladería artesanal con helados y nieves escarchados estilo vintage en Roma Norte, Ciudad de México",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Querétaro 74",
                "addressLocality": "Roma Norte, Cuauhtémoc, Ciudad de México",
                "postalCode": "06700",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.4173",
                "longitude": "-99.1632"
              },
              "url": "https://www.rasvola.com",
              "telephone": "+525555555555", // Replace with actual phone number
              "openingHours": "Mo-Su 12:00-22:00", // Replace with actual opening hours
              "servesCuisine": "Helados, Nieves, Postres",
              "priceRange": "$$",
              "paymentAccepted": "Cash, Credit Card",
              "currenciesAccepted": "MXN",
              "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20(3)-lu6GqKAJHkRHjknaHSXunIx1KyXp7E.png"
            })
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
