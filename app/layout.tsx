import type { Metadata, Viewport } from 'next'
import { TailwindIndicator } from '~/components/tailwind-indicator'
import { ThemeProvider } from '~/components/theme-provider'
import { ThemeToggle } from '~/components/theme-toggle'
import { cn, constructMetadata } from '~/lib/utils'
import '~/styles/globals.css'

export const metadata: Metadata = constructMetadata({})

export const viewport: Viewport = {
   colorScheme: 'dark',
   themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
   ],
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <head>
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
         </head>
         <body
            className={cn(
               'mx-auto min-h-screen w-full scroll-smooth bg-background antialiased',
            )}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem={false}
            >
               {children}
               <ThemeToggle />
               <TailwindIndicator />
            </ThemeProvider>
         </body>
      </html>
   )
}
