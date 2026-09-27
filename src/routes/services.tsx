import { createFileRoute, redirect } from '@tanstack/react-router'

/** The site is one page now; keep old /services links working. */
export const Route = createFileRoute('/services')({
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'services', replace: true })
  },
})
