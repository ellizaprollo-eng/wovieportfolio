import { ArrowRight } from 'lucide-react'
import type { EstimateResult } from '@/lib/estimator'
import { formatCurrency } from '@/lib/estimator'

export function EstimatorSummaryCard({
  result,
  onRequestProposal,
  onReset,
}: {
  result: EstimateResult
  onRequestProposal: () => void
  onReset: () => void
}) {
  return (
    <div className="rounded-lg border border-fg/[0.07] bg-card/60 p-6 sm:p-8">
      <p className="text-xs font-bold tracking-[0.14em] text-accent uppercase">
        Preliminary Estimate
      </p>
      <p className="mt-1 text-sm text-body-dim">
        Based on your selected requirements
      </p>

      <div className="content-fade mt-6" key={result.scopeLines.join('|')}>
        <p className="text-xs font-bold tracking-[0.1em] text-fg/70 uppercase">
          Project Scope
        </p>
        <ul className="mt-3 space-y-2">
          {result.scopeLines.map((line) => (
            <li key={line} className="flex gap-2 text-sm leading-relaxed text-body/90">
              <span className="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-accent/70" />
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="content-fade mt-6 border-t border-fg/10 pt-6"
        key={`${result.priceMin}-${result.priceMax}`}
      >
        <p className="text-xs font-bold tracking-[0.1em] text-fg/70 uppercase">
          Estimated Project Price
        </p>
        <p className="heading-display mt-1.5 text-2xl font-extrabold text-fg sm:text-3xl">
          {formatCurrency(result.priceMin)} – {formatCurrency(result.priceMax)}
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.1em] text-fg/70 uppercase">
            Estimated Timeline
          </p>
          <p className="mt-1.5 text-sm font-semibold text-fg">
            {result.weeksMin}–{result.weeksMax} weeks
          </p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.1em] text-fg/70 uppercase">
            Monthly Support
          </p>
          <p className="mt-1.5 text-sm font-semibold text-fg">
            {result.supportMax === 0
              ? 'Not selected'
              : `${formatCurrency(result.supportMin)}–${formatCurrency(result.supportMax)}/mo`}
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-body-dim">
        This is a preliminary estimate for planning purposes only. The final
        price and timeline may change after reviewing your exact
        requirements, existing systems, content, integrations, and technical
        scope.
      </p>

      <button
        type="button"
        onClick={onRequestProposal}
        className="btn-primary mt-6 w-full justify-center"
      >
        <span className="btn-node" aria-hidden="true" />
        Request My Exact Proposal
        <ArrowRight className="btn-arrow size-4" />
      </button>
      <button
        type="button"
        onClick={onReset}
        className="mt-3 w-full rounded-lg border border-fg/15 px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent-bright"
      >
        Start Over
      </button>
    </div>
  )
}
