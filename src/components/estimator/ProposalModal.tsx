import { useEffect, useState } from 'react'
import { CheckCircle2, Loader2, X } from 'lucide-react'

const FORM_NAME = 'proposal-request'

const fieldClass =
  'w-full rounded-lg border border-fg/10 bg-fg/[0.04] px-3.5 py-2.5 text-sm text-fg placeholder:text-body-dim/70 outline-none transition-colors focus:border-accent/60 focus:bg-fg/[0.06]'
const labelClass = 'mb-1.5 block text-xs font-semibold tracking-wide text-body'

const EMPTY = { name: '', email: '', company: '', goals: '', startDate: '' }

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

export function ProposalModal({
  scopeSummary,
  estimateSummary,
  onClose,
}: {
  scopeSummary: string
  estimateSummary: string
  onClose: () => void
}) {
  const [fields, setFields] = useState(EMPTY)
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>(
    'idle',
  )

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': FORM_NAME,
          ...fields,
          scope: scopeSummary,
          estimate: estimateSummary,
        }),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Request my exact proposal"
    >
      <div
        className="content-fade max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg border border-fg/[0.07] bg-card p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="heading-display text-xl font-bold text-fg">
              Request My Exact Proposal
            </h3>
            <p className="mt-1.5 text-sm text-body-dim">
              Send over your details and I&rsquo;ll follow up with a proposal
              built around what you selected.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-8 shrink-0 items-center justify-center rounded-full border border-fg/15 text-fg transition hover:border-accent/50 hover:text-accent"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="mt-5 rounded-lg border border-accent/20 bg-accent/[0.06] p-4 text-xs leading-relaxed text-body-dim">
          <p className="font-semibold text-accent-soft">Attached to this request</p>
          <p className="mt-1">{estimateSummary}</p>
          <p className="mt-1">{scopeSummary}</p>
        </div>

        {status === 'done' ? (
          <div className="mt-6 flex flex-col items-center gap-3 rounded-lg border border-accent/25 bg-accent/[0.07] px-6 py-12 text-center">
            <CheckCircle2 className="size-8 text-accent-bright" />
            <p className="font-semibold text-fg">Request sent</p>
            <p className="text-sm text-body-dim">
              Thanks — I&rsquo;ll review your selections and follow up shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 text-sm font-semibold text-accent-bright underline-offset-4 hover:underline"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="hidden">
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label className={labelClass} htmlFor="proposal-name">
                Name <span className="text-accent">*</span>
              </label>
              <input
                id="proposal-name"
                className={fieldClass}
                name="name"
                placeholder="Your name"
                value={fields.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="proposal-email">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="proposal-email"
                  className={fieldClass}
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={fields.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="proposal-company">
                  Company
                </label>
                <input
                  id="proposal-company"
                  className={fieldClass}
                  name="company"
                  placeholder="Your company"
                  value={fields.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="proposal-goals">
                Project goals <span className="text-accent">*</span>
              </label>
              <textarea
                id="proposal-goals"
                className={`${fieldClass} min-h-24 resize-y`}
                name="goals"
                placeholder="What are you trying to accomplish?"
                value={fields.goals}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="proposal-start">
                Preferred start date
              </label>
              <input
                id="proposal-start"
                className={fieldClass}
                type="date"
                name="startDate"
                value={fields.startDate}
                onChange={handleChange}
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-300">
                Something went wrong sending that. Please try again, or email
                me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center"
            >
              {status === 'sending' && (
                <Loader2 className="size-4 animate-spin" />
              )}
              {status === 'sending' ? 'Sending…' : 'Send Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
