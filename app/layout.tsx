import type { Metadata, Viewport } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from '@/lib/theme/ThemeProvider'
import { LenisProvider } from '@/components/layout/LenisProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { IntroScreen } from '@/components/layout/IntroScreen'
import { CustomCursor } from '@/components/ui/CustomCursor'
import './globals.css'

/* ── Google Fonts ── */
const dmSans = DM_Sans({
  subsets:  ['latin'],
  variable: '--font-dm-sans',
  display:  'swap',
  weight:   ['300', '400', '500', '600', '700'],  // 300 = brandium's headline weight
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

/* ── Site-wide metadata ── */
export const metadata: Metadata = {
  title: {
    default: 'MASS — AI Automation & Software Agency',
    template: '%s | MASS',
  },
  description:
    'We build AI automations and custom software for US & EU businesses. From $499 workflow automations to full SaaS platforms. Delivered in weeks, not months.',
  keywords: [
    'AI automation agency',
    'web development agency for startups',
    'AI workflow automation',
    'SaaS MVP development',
    'mobile app development agency',
    'custom software development',
    'AI chatbot for website',
    'business process automation with AI',
  ],
  authors: [{ name: 'MASS LLC' }],
  creator: 'MASS LLC',
  metadataBase: new URL('https://mass.llc'),
  icons: {
    icon: [
      { url: '/assets/logo-icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/assets/logo-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mass.llc',
    siteName: 'MASS',
    title: 'MASS — AI Automation & Software Agency',
    description:
      'We build AI automations and custom software for US & EU businesses. Delivered in weeks, not months.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MASS — AI Automation & Software Agency',
    description: 'We build AI automations and custom software for US & EU businesses.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFCFF' },
    { media: '(prefers-color-scheme: dark)',  color: '#060A12' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID      = process.env.NEXT_PUBLIC_GA_ID       // G-S0TWT8QTLL
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID  // set after approval

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable}`}
      suppressHydrationWarning // needed: ThemeProvider sets data-theme on mount
    >
      <head />
      <body>
        <ThemeProvider>
          <IntroScreen />
          <CustomCursor />
          <LenisProvider />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>

        {/* ── Google Analytics 4 ── */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* ── Microsoft Clarity (slot — user provides ID post-approval) ── */}
        {CLARITY_ID && (
          <Script id="clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","${CLARITY_ID}");
            `}
          </Script>
        )}
      </body>
    </html>
  )
}
