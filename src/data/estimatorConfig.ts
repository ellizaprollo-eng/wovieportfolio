/**
 * All editable inputs for the Project Estimate Calculator live here.
 * Change a number or a label and the calculator (src/lib/estimator.ts)
 * picks it up automatically — no UI code needs to change.
 */

export type ProjectType =
  | 'website'
  | 'ghl'
  | 'automation'
  | 'ai'
  | 'integration'
  | 'leadSystem'
  | 'custom'

export const PROJECT_TYPES: { value: ProjectType; label: string }[] = [
  { value: 'website', label: 'Website or Landing Page' },
  { value: 'ghl', label: 'GoHighLevel CRM Setup' },
  { value: 'automation', label: 'Workflow Automation' },
  { value: 'ai', label: 'AI Chat or Voice Agent' },
  { value: 'integration', label: 'API or Third-Party Integration' },
  { value: 'leadSystem', label: 'Complete Lead Conversion System' },
  { value: 'custom', label: 'Custom Project' },
]

export type WebsiteScope = 'single' | 'small' | 'medium' | 'large'

export const WEBSITE_SCOPES: { value: WebsiteScope; label: string }[] = [
  { value: 'single', label: 'Single landing page' },
  { value: 'small', label: '2–5 pages' },
  { value: 'medium', label: '6–10 pages' },
  { value: 'large', label: '11+ pages' },
]

export type CrmNeed =
  | 'crmSetup'
  | 'pipelineSetup'
  | 'leadForms'
  | 'emailAutomation'
  | 'smsAutomation'
  | 'appointmentBooking'
  | 'leadRouting'
  | 'followUp'
  | 'reportingDashboard'

export const CRM_NEEDS: { value: CrmNeed; label: string; scopeLine: string }[] = [
  { value: 'crmSetup', label: 'CRM setup', scopeLine: 'GoHighLevel CRM setup' },
  { value: 'pipelineSetup', label: 'Pipeline setup', scopeLine: 'Pipeline and stage configuration' },
  { value: 'leadForms', label: 'Lead capture forms', scopeLine: 'Lead capture forms' },
  { value: 'emailAutomation', label: 'Email automation', scopeLine: 'Email follow-up automation' },
  { value: 'smsAutomation', label: 'SMS automation', scopeLine: 'SMS follow-up automation' },
  { value: 'appointmentBooking', label: 'Appointment booking', scopeLine: 'Calendar booking integration' },
  { value: 'leadRouting', label: 'Lead routing', scopeLine: 'Automated lead routing' },
  { value: 'followUp', label: 'Follow-up sequences', scopeLine: 'Multi-step follow-up sequences' },
  { value: 'reportingDashboard', label: 'Reporting dashboard', scopeLine: 'Reporting dashboard' },
]

export type AiNeed = 'none' | 'chatbot' | 'voice' | 'both' | 'qualification'

export const AI_NEEDS: { value: AiNeed; label: string }[] = [
  { value: 'none', label: 'No AI' },
  { value: 'chatbot', label: 'AI chatbot' },
  { value: 'voice', label: 'AI voice agent' },
  { value: 'both', label: 'AI chatbot and voice agent' },
  { value: 'qualification', label: 'AI qualification and appointment booking' },
]

export const AI_SCOPE_LINE: Record<Exclude<AiNeed, 'none'>, string> = {
  chatbot: 'AI chatbot for lead qualification',
  voice: 'AI voice agent for inbound and outbound calls',
  both: 'AI chatbot and voice agent, working together',
  qualification: 'AI-driven lead qualification and appointment booking',
}

export type IntegrationCount = 'none' | 'few' | 'several' | 'many'

export const INTEGRATION_COUNTS: { value: IntegrationCount; label: string }[] = [
  { value: 'none', label: 'No integrations' },
  { value: 'few', label: '1–2 integrations' },
  { value: 'several', label: '3–5 integrations' },
  { value: 'many', label: '6+ integrations' },
]

export const INTEGRATION_SCOPE_LINE: Record<Exclude<IntegrationCount, 'none'>, string> = {
  few: 'A couple of core integrations (e.g. Calendly, Google Sheets)',
  several: 'Several integrations across your tool stack (Zapier, Make, n8n, etc.)',
  many: 'A larger integration footprint across multiple platforms',
}

export type Complexity = 'basic' | 'standard' | 'advanced' | 'enterprise'

export const COMPLEXITIES: { value: Complexity; label: string }[] = [
  { value: 'basic', label: 'Basic' },
  { value: 'standard', label: 'Standard' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'enterprise', label: 'Enterprise-level' },
]

export type Timeline = 'flexible' | 'normal' | 'priority' | 'urgent'

export const TIMELINES: { value: Timeline; label: string }[] = [
  { value: 'flexible', label: 'Flexible timeline' },
  { value: 'normal', label: 'Normal delivery' },
  { value: 'priority', label: 'Priority delivery' },
  { value: 'urgent', label: 'Urgent delivery' },
]

export type SupportLevel = 'none' | 'basic' | 'monitoring' | 'optimization'

export const SUPPORT_LEVELS: { value: SupportLevel; label: string }[] = [
  { value: 'none', label: 'No ongoing support' },
  { value: 'basic', label: 'Basic maintenance' },
  { value: 'monitoring', label: 'Automation monitoring' },
  { value: 'optimization', label: 'Ongoing optimization' },
]

// ---------------------------------------------------------------------------
// PRICING — every number below is safe to tune. Ranges are [min, max] USD.
// ---------------------------------------------------------------------------

export const PROJECT_TYPE_SCOPE_LINE: Record<ProjectType, string> = {
  website: 'Conversion-focused website or landing page',
  ghl: 'GoHighLevel CRM setup and configuration',
  automation: 'Custom workflow automation build',
  ai: 'AI chat or voice agent build',
  integration: 'API and third-party integration work',
  leadSystem: 'End-to-end lead conversion system',
  custom: 'Custom-scoped project',
}

/** Starting price range per project type, before add-ons. */
export const PROJECT_BASE_PRICE: Record<ProjectType, [number, number]> = {
  website: [500, 2500],
  ghl: [500, 2000],
  automation: [300, 1500],
  ai: [800, 2000],
  integration: [300, 2000],
  leadSystem: [2000, 6000],
  custom: [800, 3000],
}

/** Added to price based on how many pages/screens the project touches. */
export const WEBSITE_SCOPE_PRICE_ADDON: Record<WebsiteScope, [number, number]> = {
  single: [0, 0],
  small: [300, 600],
  medium: [700, 1300],
  large: [1300, 2400],
}

/** Added to price per selected CRM/automation requirement. */
export const CRM_NEED_PRICE_ADDON: [number, number] = [120, 250]

/** Added to price based on AI requirement. When project type is already
 *  "AI Chat or Voice Agent", this REPLACES the base price instead of
 *  stacking on top of it, so the specific AI choice drives the number. */
export const AI_PRICE_ADDON: Record<AiNeed, [number, number]> = {
  none: [0, 0],
  chatbot: [800, 2000],
  voice: [1200, 3500],
  both: [1800, 5000],
  qualification: [900, 2200],
}

/** Added to price based on integration count. */
export const INTEGRATION_PRICE_ADDON: Record<IntegrationCount, [number, number]> = {
  none: [0, 0],
  few: [200, 500],
  several: [600, 1200],
  many: [1500, 2500],
}

/** Multiplies the running price total. */
export const COMPLEXITY_PRICE_MULTIPLIER: Record<Complexity, number> = {
  basic: 1,
  standard: 1.15,
  advanced: 1.35,
  enterprise: 1.6,
}

/** Multiplies the running price total (rush work costs more). */
export const TIMELINE_PRICE_MULTIPLIER: Record<Timeline, number> = {
  flexible: 0.95,
  normal: 1,
  priority: 1.15,
  urgent: 1.3,
}

/** Monthly support price range, shown separately from the project price. */
export const SUPPORT_PRICE: Record<SupportLevel, [number, number]> = {
  none: [0, 0],
  basic: [300, 600],
  monitoring: [500, 900],
  optimization: [900, 1500],
}

// ---------------------------------------------------------------------------
// TIMELINE — everything below is in weeks.
// ---------------------------------------------------------------------------

export const PROJECT_BASE_WEEKS: Record<ProjectType, [number, number]> = {
  website: [1, 3],
  ghl: [1, 2],
  automation: [1, 2],
  ai: [2, 4],
  integration: [1, 2],
  leadSystem: [4, 8],
  custom: [2, 6],
}

export const WEBSITE_SCOPE_WEEKS: Record<WebsiteScope, number> = {
  single: 0,
  small: 1,
  medium: 2,
  large: 3,
}

export const CRM_NEED_WEEKS_PER_ITEM = 0.4

export const AI_WEEKS: Record<AiNeed, number> = {
  none: 0,
  chatbot: 1,
  voice: 2,
  both: 3,
  qualification: 1.5,
}

export const INTEGRATION_WEEKS: Record<IntegrationCount, number> = {
  none: 0,
  few: 0.5,
  several: 1.5,
  many: 3,
}

export const COMPLEXITY_WEEKS: Record<Complexity, number> = {
  basic: 0,
  standard: 1,
  advanced: 2,
  enterprise: 4,
}

/** Rush timelines compress the week count instead of stretching it. */
export const TIMELINE_WEEKS_MULTIPLIER: Record<Timeline, number> = {
  flexible: 1,
  normal: 1,
  priority: 0.75,
  urgent: 0.55,
}

export const DEFAULT_SELECTIONS = {
  projectType: 'leadSystem' as ProjectType,
  websiteScope: 'small' as WebsiteScope,
  crmNeeds: ['crmSetup', 'emailAutomation', 'appointmentBooking'] as CrmNeed[],
  aiNeed: 'qualification' as AiNeed,
  integrations: 'few' as IntegrationCount,
  complexity: 'standard' as Complexity,
  timeline: 'normal' as Timeline,
  support: 'basic' as SupportLevel,
}
