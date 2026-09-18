import {
  AI_PRICE_ADDON,
  AI_SCOPE_LINE,
  AI_WEEKS,
  CRM_NEEDS,
  CRM_NEED_PRICE_ADDON,
  CRM_NEED_WEEKS_PER_ITEM,
  COMPLEXITY_PRICE_MULTIPLIER,
  COMPLEXITY_WEEKS,
  INTEGRATION_PRICE_ADDON,
  INTEGRATION_SCOPE_LINE,
  INTEGRATION_WEEKS,
  PROJECT_BASE_PRICE,
  PROJECT_BASE_WEEKS,
  PROJECT_TYPE_SCOPE_LINE,
  SUPPORT_PRICE,
  TIMELINE_PRICE_MULTIPLIER,
  TIMELINE_WEEKS_MULTIPLIER,
  WEBSITE_SCOPES,
  WEBSITE_SCOPE_PRICE_ADDON,
  WEBSITE_SCOPE_WEEKS,
  type AiNeed,
  type Complexity,
  type CrmNeed,
  type IntegrationCount,
  type ProjectType,
  type SupportLevel,
  type Timeline,
  type WebsiteScope,
} from '@/data/estimatorConfig'

export type EstimatorSelections = {
  projectType: ProjectType
  websiteScope: WebsiteScope
  crmNeeds: CrmNeed[]
  aiNeed: AiNeed
  integrations: IntegrationCount
  complexity: Complexity
  timeline: Timeline
  support: SupportLevel
}

export type EstimateResult = {
  priceMin: number
  priceMax: number
  weeksMin: number
  weeksMax: number
  supportMin: number
  supportMax: number
  scopeLines: string[]
}

function roundTo(value: number, step: number) {
  return Math.round(value / step) * step
}

export function calculateEstimate(s: EstimatorSelections): EstimateResult {
  let [priceMin, priceMax] = PROJECT_BASE_PRICE[s.projectType]

  // A dedicated AI project type is fully defined by the specific AI choice,
  // so it replaces the generic base instead of stacking on top of it.
  if (s.projectType === 'ai') {
    ;[priceMin, priceMax] = AI_PRICE_ADDON[s.aiNeed]
  } else if (s.aiNeed !== 'none') {
    const [aMin, aMax] = AI_PRICE_ADDON[s.aiNeed]
    priceMin += aMin
    priceMax += aMax
  }

  const [scopeMin, scopeMax] = WEBSITE_SCOPE_PRICE_ADDON[s.websiteScope]
  priceMin += scopeMin
  priceMax += scopeMax

  const crmCount = s.crmNeeds.length
  priceMin += crmCount * CRM_NEED_PRICE_ADDON[0]
  priceMax += crmCount * CRM_NEED_PRICE_ADDON[1]

  const [intMin, intMax] = INTEGRATION_PRICE_ADDON[s.integrations]
  priceMin += intMin
  priceMax += intMax

  const priceMultiplier =
    COMPLEXITY_PRICE_MULTIPLIER[s.complexity] * TIMELINE_PRICE_MULTIPLIER[s.timeline]
  priceMin = roundTo(priceMin * priceMultiplier, 50)
  priceMax = roundTo(priceMax * priceMultiplier, 50)
  if (priceMax < priceMin) priceMax = priceMin

  let [weeksMin, weeksMax] = PROJECT_BASE_WEEKS[s.projectType]
  weeksMin += WEBSITE_SCOPE_WEEKS[s.websiteScope]
  weeksMax += WEBSITE_SCOPE_WEEKS[s.websiteScope]
  weeksMin += crmCount * CRM_NEED_WEEKS_PER_ITEM
  weeksMax += crmCount * CRM_NEED_WEEKS_PER_ITEM
  weeksMin += AI_WEEKS[s.aiNeed]
  weeksMax += AI_WEEKS[s.aiNeed]
  weeksMin += INTEGRATION_WEEKS[s.integrations]
  weeksMax += INTEGRATION_WEEKS[s.integrations]
  weeksMin += COMPLEXITY_WEEKS[s.complexity]
  weeksMax += COMPLEXITY_WEEKS[s.complexity]

  const weeksMultiplier = TIMELINE_WEEKS_MULTIPLIER[s.timeline]
  weeksMin = Math.max(1, Math.round(weeksMin * weeksMultiplier))
  weeksMax = Math.max(weeksMin, Math.round(weeksMax * weeksMultiplier))

  const [supportMin, supportMax] = SUPPORT_PRICE[s.support]

  const scopeLines: string[] = [PROJECT_TYPE_SCOPE_LINE[s.projectType]]
  if (s.websiteScope !== 'single') {
    const scope = WEBSITE_SCOPES.find((w) => w.value === s.websiteScope)
    if (scope) scopeLines.push(`${scope.label} website build`)
  }
  for (const need of s.crmNeeds) {
    const match = CRM_NEEDS.find((c) => c.value === need)
    if (match) scopeLines.push(match.scopeLine)
  }
  if (s.aiNeed !== 'none') scopeLines.push(AI_SCOPE_LINE[s.aiNeed])
  if (s.integrations !== 'none') scopeLines.push(INTEGRATION_SCOPE_LINE[s.integrations])
  scopeLines.push('Testing and documentation')

  return { priceMin, priceMax, weeksMin, weeksMax, supportMin, supportMax, scopeLines }
}

export function formatCurrency(value: number) {
  return `$${value.toLocaleString('en-US')}`
}
