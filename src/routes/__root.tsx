import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { CursorLabel } from '@/components/CursorLabel'

import '../styles.css'

const TITLE = 'Wovie Prollo | Workflow and AI Automation Specialist'
const DESCRIPTION =
  'Transforming business processes through intelligent automation. Specialized in Zapier, Make, n8n, and API integrations to streamline workflows and boost efficiency.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#02191e' },
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/profile.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico?v=2', sizes: 'any' },
      { rel: 'icon', href: '/favicon.png?v=2', type: 'image/png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png?v=2' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Set the saved theme before first paint so there's no flash of the wrong mode. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('theme')==='light'){document.documentElement.setAttribute('data-theme','light')}}catch(e){}})();",
          }}
        />
        {/* Scroll-reveal is JS driven; keep content visible if JS never runs. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<style>.reveal{opacity:1;transform:none}</style>',
          }}
        />
      </head>
<body>
  {children}
  <CursorLabel />
  <Scripts />
</body>
    </html>
  )
}
