import { createFileRoute, redirect } from '@tanstack/react-router'

/** The booking calendar now lives on the home page; keep old /contact links working. */
export const Route = createFileRoute('/contact')({
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'contact', replace: true })
  },
})
