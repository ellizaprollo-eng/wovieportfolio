import { useMemo, useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { OptionGroup } from '@/components/estimator/OptionGroup'
import { EstimatorSummaryCard } from '@/components/estimator/EstimatorSummaryCard'
import { ProposalModal } from '@/components/estimator/ProposalModal'
import { calculateEstimate, formatCurrency } from '@/lib/estimator'
import {
  AI_NEEDS,
  COMPLEXITIES,
  CRM_NEEDS,
  DEFAULT_SELECTIONS,
  INTEGRATION_COUNTS,
  PROJECT_TYPES,
  SUPPORT_LEVELS,
  TIMELINES,
  WEBSITE_SCOPES,
  type AiNeed,
  type Complexity,
  type CrmNeed,
  type IntegrationCount,
  type ProjectType,
  type SupportLevel,
  type Timeline,
  type WebsiteScope,
} from '@/data/estimatorConfig'

export function Estimator() {
  const [projectType, setProjectType] = useState(DEFAULT_SELECTIONS.projectType)
  const [websiteScope, setWebsiteScope] = useState(DEFAULT_SELECTIONS.websiteScope)
  const [crmNeeds, setCrmNeeds] = useState<CrmNeed[]>(DEFAULT_SELECTIONS.crmNeeds)
  const [aiNeed, setAiNeed] = useState(DEFAULT_SELECTIONS.aiNeed)
  const [integrations, setIntegrations] = useState(DEFAULT_SELECTIONS.integrations)
  const [complexity, setComplexity] = useState(DEFAULT_SELECTIONS.complexity)
  const [timeline, setTimeline] = useState(DEFAULT_SELECTIONS.timeline)
  const [support, setSupport] = useState(DEFAULT_SELECTIONS.support)
  const [showModal, setShowModal] = useState(false)

  const result = useMemo(
    () =>
      calculateEstimate({
        projectType,
        websiteScope,
        crmNeeds,
        aiNeed,
        integrations,
        complexity,
        timeline,
        support,
      }),
    [projectType, websiteScope, crmNeeds, aiNeed, integrations, complexity, timeline, support],
  )

  function reset() {
    setProjectType(DEFAULT_SELECTIONS.projectType)
    setWebsiteScope(DEFAULT_SELECTIONS.websiteScope)
    setCrmNeeds(DEFAULT_SELECTIONS.crmNeeds)
    setAiNeed(DEFAULT_SELECTIONS.aiNeed)
    setIntegrations(DEFAULT_SELECTIONS.integrations)
    setComplexity(DEFAULT_SELECTIONS.complexity)
    setTimeline(DEFAULT_SELECTIONS.timeline)
    setSupport(DEFAULT_SELECTIONS.support)
  }

  const estimateSummary = `Estimated project price: ${formatCurrency(result.priceMin)}–${formatCurrency(result.priceMax)} · Timeline: ${result.weeksMin}–${result.weeksMax} weeks${result.supportMax ? ` · Monthly support: ${formatCurrency(result.supportMin)}–${formatCurrency(result.supportMax)}/mo` : ''}`
  const scopeSummary = `Scope: ${result.scopeLines.join('; ')}`

  return (
    <section id="estimator" className="relative bg-ink py-24 sm:py-28">
      <div className="container-x">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
          Plan Your Project
        </p>
        <SectionHeading
          title="Estimate Your Project"
          subtitle="Get a preliminary idea of the scope, budget, and timeline before we discuss the details."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10">
          <Reveal className="flex flex-col gap-7 rounded-lg border border-fg/[0.07] bg-card/60 p-6 sm:p-8">
            <OptionGroup
              label="Project type"
              options={PROJECT_TYPES}
              value={projectType}
              onChange={(v) => setProjectType(v as ProjectType)}
            />
            <OptionGroup
              label="Website scope"
              options={WEBSITE_SCOPES}
              value={websiteScope}
              onChange={(v) => setWebsiteScope(v as WebsiteScope)}
            />
            <OptionGroup
              label="CRM and automation requirements"
              options={CRM_NEEDS}
              value={crmNeeds}
              onChange={(v) => setCrmNeeds(v as CrmNeed[])}
              multi
            />
            <OptionGroup
              label="AI requirements"
              options={AI_NEEDS}
              value={aiNeed}
              onChange={(v) => setAiNeed(v as AiNeed)}
            />
            <OptionGroup
              label="Number of integrations"
              options={INTEGRATION_COUNTS}
              value={integrations}
              onChange={(v) => setIntegrations(v as IntegrationCount)}
            />
            <OptionGroup
              label="Project complexity"
              options={COMPLEXITIES}
              value={complexity}
              onChange={(v) => setComplexity(v as Complexity)}
            />
            <OptionGroup
              label="Timeline preference"
              options={TIMELINES}
              value={timeline}
              onChange={(v) => setTimeline(v as Timeline)}
            />
            <OptionGroup
              label="Monthly support"
              options={SUPPORT_LEVELS}
              value={support}
              onChange={(v) => setSupport(v as SupportLevel)}
            />
          </Reveal>

          <Reveal delay={80} className="lg:sticky lg:top-24">
            <EstimatorSummaryCard
              result={result}
              onRequestProposal={() => setShowModal(true)}
              onReset={reset}
            />
          </Reveal>
        </div>
      </div>

      {showModal && (
        <ProposalModal
          scopeSummary={scopeSummary}
          estimateSummary={estimateSummary}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  )
}
