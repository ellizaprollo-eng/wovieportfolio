import { createFileRoute, redirect } from '@tanstack/react-router'

/** The site is one page now; keep old /case-studies/$slug links working. */
export const Route = createFileRoute('/case-studies/$slug')({
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'sample-works', replace: true })
  },
})
