import { createFileRoute, redirect } from '@tanstack/react-router'

/** The site is one page now; keep old /case-study links working. */
export const Route = createFileRoute('/case-study')({
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'case-study', replace: true })
  },
})
