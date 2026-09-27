import { createFileRoute, redirect } from '@tanstack/react-router'

/** Sample Works now lives on the home page; keep old /systems links working. */
export const Route = createFileRoute('/systems')({
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'sample-works', replace: true })
  },
})
