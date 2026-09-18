/**
 * Every piece of copy on the site lives here so sections stay presentational.
 */

export const profile = {
  name: 'Wovie Prollo',
  shortName: 'Wovie Prollo',
  role: 'Gohighlevel & AI Automation Specialist',
  headline: 'I build systems that automate your business operations.',
  /** Must be an exact substring of headline — Hero.tsx colors this part. */
  headlineHighlight: 'automate your business operations.',
  intro:
    'I design and build reliable automation systems using GoHighLevel, Zapier, Make, and n8n. I connect the tools your business already uses to reduce manual work, streamline processes, and keep operations moving 24/7.',
  avatar: '/profile.jpg',
  videoIntroEmbedUrl: 'https://www.loom.com/embed/63f9d8ffb91740459ec9326c304bab69',
  location: 'Butuan City, Philippines',
  locationNote: 'Available for remote work across all time zones',
  responseTime: 'Usually responds within 24 hours',
}

/** Grounded in real figures already stated in the experience/project data below. */
export const heroStats = [
  { value: '3+', label: 'Years as a GoHighLevel & AI Automation Specialist' },
  { value: '80%', label: 'Less manual work for clients' },
  { value: '4', label: 'Core platforms: GHL, Zapier, Make, n8n' },
  { value: '19', label: 'Automations delivered across client projects' },
]

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Systems', href: '/systems' },
  { label: 'Contact', href: '/contact' },
]

export const processSteps = [
  {
    title: 'Discovery call',
    description:
      "We talk through the manual work that's costing you time and map out what a fix could look like.",
  },
  {
    title: 'Workflow mapping',
    description:
      'I document every step, tool, and handoff before building anything, so nothing gets missed.',
  },
  {
    title: 'Build & test',
    description:
      'I build the automation in a sandbox and run it against real data before it touches your systems.',
  },
  {
    title: 'Handover & support',
    description:
      "You get a walkthrough, documentation, and support after launch — not just a workflow and a goodbye.",
  },
]

export type ServiceIcon =
  | 'workflow'
  | 'zap'
  | 'database'
  | 'message'
  | 'calendar'
  | 'chart'
  | 'bot'
  | 'globe'

export const services: Array<{
  icon: ServiceIcon
  title: string
  description: string
}> = [
  {
    icon: 'message',
    title: 'GoHighLevel CRM & Pipelines',
    description:
      'Set up and automate your GoHighLevel CRM, pipelines, and lead management so every contact moves through a clear, hands-off process.',
  },
  {
    icon: 'globe',
    title: 'Funnels & Website Development',
    description:
      'Build conversion-focused funnels and websites, from a single landing page to a full multi-page site, that feed directly into your CRM and automations.',
  },
  {
    icon: 'workflow',
    title: 'Workflow Automation',
    description:
      'Design and implement end-to-end automation workflows using Zapier, Make, and n8n to eliminate manual tasks and boost productivity.',
  },
  {
    icon: 'bot',
    title: 'AI & Voice Agents',
    description:
      'Build AI chat and voice agents with Retell AI and OpenAI that qualify leads, answer inbound calls, and book appointments without a rep on the line.',
  },
  {
    icon: 'zap',
    title: 'API Integrations',
    description:
      'Seamlessly connect your apps and services with custom API integrations and webhooks for real-time data synchronization.',
  },
  {
    icon: 'database',
    title: 'Data Management',
    description:
      'Optimize data workflows with Google Sheets, Airtable, and Monday integrations for efficient information management.',
  },
  {
    icon: 'chart',
    title: 'Process Optimization',
    description:
      'Analyze and improve business processes through SOP creation, audit trails, and AI-driven automation strategies.',
  },
]

export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  featured?: boolean
  problem?: string
  approach?: string
  result?: string
}

export const projects: Project[] = [
  {
    title: 'AI Chat Agent',
    description: 'AI agent that classifies incoming messages and routes replies automatically',
    image: '/projects/ai-chat-agent.png',
    tags: ['n8n', 'AI Agent', 'Vector Store', 'Webhook'],
    featured: true,
    problem:
      'Incoming chat messages needed a human to read each one and decide whether it was urgent, a booking request, or something to escalate.',
    approach:
      'Built an n8n AI agent with vector-store memory that reads the message, classifies it, and routes the reply through a switch node to the right outcome, from an automatic reply to a flagged escalation.',
    result:
      'Routine messages get an instant, on-brand reply, and only the ones that actually need a human reach one.',
  },
  {
    title: 'Lead Enrichment Engine',
    description: 'AI-driven lead sourcing and scoring pipeline built on Apollo and Apify',
    image: '/projects/lead-enrichment-engine.png',
    tags: ['n8n', 'AI Agent', 'Apollo', 'Apify'],
    featured: true,
    problem:
      'Finding and qualifying leads meant manually running Apollo searches, exporting lists, and scoring each contact by hand.',
    approach:
      'An AI agent turns a plain-language request into an Apollo search URL, an Apify scraper pulls the results, and each lead is scored on industry, company size, and title before being pushed to the outreach tool.',
    result:
      'Only leads with a real score, an email, and a website reach the sales team, cutting the list-building step out entirely.',
  },
  {
    title: 'Onboarding Agent',
    description: 'Chat-based intake agent that structures new client onboarding',
    image: '/projects/onboarding-agent.png',
    tags: ['n8n', 'AI Agent', 'Onboarding'],
    problem:
      'New client onboarding meant manually collecting information over back-and-forth emails or calls before any real work could start.',
    approach:
      'Built a chat-based n8n AI agent that walks new clients through a structured intake conversation, capturing the details needed and organizing them automatically.',
    result:
      'Onboarding starts with a complete, structured record instead of a scattered email thread.',
  },
  {
    title: 'Proposal Agent',
    description: 'Drafts and assembles client proposals straight from intake data',
    image: '/projects/proposal-agent.png',
    tags: ['n8n', 'AI Agent', 'Documents'],
    problem:
      'Turning intake information into a client-ready proposal was a manual, repetitive writing task for every new prospect.',
    approach:
      'An n8n AI agent pulls the intake data and drafts a formatted proposal document automatically, ready for a final review before sending.',
    result:
      'Proposals go out faster, built from the same intake data every time instead of copy-pasted from an old one.',
  },
  {
    title: 'Form Submission Lead Routing',
    description: 'Routes form submissions to the right owner and follow-up sequence in real time',
    image: '/projects/form-submission-lead.png',
    tags: ['n8n', 'Webhook', 'CRM'],
    problem:
      'Form submissions landed in one inbox with no clear owner, so leads sat until someone noticed them.',
    approach:
      'A webhook-triggered n8n workflow reads each submission and routes it to the right owner and follow-up sequence in the CRM the moment it comes in.',
    result:
      'Every lead reaches the right person immediately instead of waiting in a shared inbox.',
  },
  {
    title: 'Survey Intake Automation',
    description: 'Processes survey responses and syncs structured answers into the CRM',
    image: '/projects/form-survey-neuro.png',
    tags: ['n8n', 'Forms', 'CRM'],
    problem:
      'Survey responses arrived as raw form data that had to be manually reviewed and entered into the CRM.',
    approach:
      'An n8n workflow processes each response as it comes in, structures the answers, and syncs them directly into the CRM.',
    result:
      'Survey data is usable in the CRM the moment it is submitted, with no manual re-entry.',
  },
  {
    title: 'Outbound Call Automation',
    description: 'Queues outbound calls from a lead list and logs outcomes automatically',
    image: '/projects/outbound-call.png',
    tags: ['n8n', 'Voice', 'CRM'],
    problem:
      'Working through an outbound call list meant manually dialing each contact and logging the outcome afterward.',
    approach:
      'An n8n workflow queues calls from the lead list in order and logs each outcome back to the CRM automatically as calls complete.',
    result:
      'The call list works through itself in sequence, and every outcome is recorded without manual follow-up.',
  },
  {
    title: 'Coaching Business Pipeline',
    description: 'Intake and follow-up pipeline routing new leads into the right nurture sequence',
    image: '/projects/fl-coaches-workflow.png',
    tags: ['n8n', 'CRM', 'Lead Nurture'],
    problem:
      'New coaching leads needed to be manually sorted and enrolled into the right follow-up sequence based on their intake answers.',
    approach:
      "An n8n pipeline reads each new lead's intake data and automatically enrolls them into the matching nurture sequence in the CRM.",
    result:
      'Leads start receiving the right follow-up immediately instead of waiting to be manually sorted.',
  },
  {
    title: 'Coaching Business Pipeline v2',
    description: 'Expanded version of the coaching pipeline with added branching and follow-up logic',
    image: '/projects/fl-coaches-workflow-2.png',
    tags: ['n8n', 'CRM', 'Lead Nurture'],
    problem:
      "The original pipeline could only handle one nurture path, so leads that didn't fit the standard profile fell through the cracks.",
    approach:
      'Expanded the pipeline with branching logic that routes leads down different follow-up paths based on their specific answers, not just a single default sequence.',
    result:
      'More lead types get a follow-up sequence that actually fits them, instead of one generic path for everyone.',
  },
  {
    title: 'Auto Article to WordPress',
    description: 'Generates long-form articles and publishes them to WordPress on a schedule',
    image: '/projects/auto-article-wordpress.png',
    tags: ['n8n', 'WordPress', 'Content'],
    problem:
      'Publishing long-form content on a regular schedule meant writing and manually posting every article.',
    approach:
      'An n8n workflow generates the article content and publishes it directly to WordPress on a set schedule, no manual posting required.',
    result:
      'New content goes live on schedule without anyone touching the WordPress dashboard.',
  },
  {
    title: 'Daily Posting Automation',
    description: 'Queues and publishes daily social content on schedule across channels',
    image: '/projects/daily-posting-automation.png',
    tags: ['n8n', 'Social Media', 'Scheduling'],
    problem:
      'Keeping a daily posting schedule across multiple social channels meant manually publishing on each platform every day.',
    approach:
      "An n8n workflow queues the day's content and publishes it across channels on schedule automatically.",
    result:
      'The posting schedule runs itself daily, with nothing depending on someone remembering to hit publish.',
  },
  {
    title: 'Zapier Social Posting',
    description: 'Pushes new content to social channels the moment it is ready',
    image: '/projects/zap-social-posting.png',
    tags: ['Zapier', 'Social Media'],
    problem:
      'New content sat waiting until someone had time to manually post it to social channels.',
    approach:
      "A Zapier automation pushes new content to social channels the moment it's marked ready, no manual posting step.",
    result:
      'Content goes live as soon as it is ready instead of sitting in a queue.',
  },
  {
    title: 'Payments Tracking & Audit',
    description: 'Logs incoming payments, reconciles them against records, and flags mismatches',
    image: '/projects/payments-received-tracking-audit.png',
    tags: ['n8n', 'Finance', 'Reporting'],
    problem:
      'Reconciling incoming payments against records was a manual process prone to missed or mismatched entries.',
    approach:
      'An n8n workflow logs every incoming payment, reconciles it against existing records, and flags any mismatch automatically.',
    result:
      'Payment discrepancies get caught and flagged right away instead of surfacing during a manual audit weeks later.',
  },
  {
    title: 'Post-Purchase Review Request',
    description: 'Triggers a timed review request after purchase and tracks the response',
    image: '/projects/post-purchase-review-request.png',
    tags: ['n8n', 'Customer Experience'],
    problem:
      'Asking customers for a review after purchase meant remembering to follow up at the right time for every order.',
    approach:
      'An n8n workflow triggers a timed review request after each purchase and tracks whether the customer responds.',
    result:
      'Every customer gets asked for a review at the right moment, with no manual follow-up required.',
  },
  {
    title: 'Review Workflow',
    description: 'Collects and routes incoming reviews so the team only sees ones needing a response',
    image: '/projects/review-workflow.png',
    tags: ['n8n', 'Customer Experience'],
    problem:
      'Incoming reviews landed in one place with no way to tell which ones actually needed a response from the team.',
    approach:
      'An n8n workflow collects incoming reviews and routes only the ones that need attention to the team, filtering out the rest.',
    result:
      'The team only sees the reviews that actually need a reply, instead of scanning through all of them.',
  },
  {
    title: 'Voice AI Booking Workflow',
    description: 'Backend n8n workflow behind a voice agent that checks calendar availability and confirms appointments',
    image: '/projects/voice-inbound-booking-workflow.png',
    tags: ['n8n', 'Voice AI', 'Booking'],
    problem:
      'A voice agent taking booking calls needed a reliable way to check real calendar availability and confirm appointments without human input.',
    approach:
      'Built the backend n8n workflow that checks calendar availability in real time and confirms the appointment directly from the call.',
    result:
      'Callers get a confirmed appointment on the spot, checked against the real calendar, not a placeholder slot.',
  },
  {
    title: 'Voice AI Inbound Call Flow',
    description: 'Conversation flow for an inbound voice receptionist that greets callers and qualifies the lead in one call',
    image: '/projects/voice-lead-cart-inbound.png',
    tags: ['Retell AI', 'Voice Agent', 'Conversation Design'],
    problem:
      'Inbound calls needed a consistent greeting and lead-qualification process, whether or not a live receptionist was available.',
    approach:
      'Designed the conversation flow for a Retell AI voice receptionist that greets every caller and qualifies the lead within the same call.',
    result:
      'Every inbound caller gets greeted and qualified consistently, call after call.',
  },
  {
    title: 'Voice AI Outbound Call Flow',
    description: 'Conversation flow for an outbound voice agent that runs demo calls and books a follow-up on the spot',
    image: '/projects/voice-lead-cart-outbound.png',
    tags: ['Retell AI', 'Voice Agent', 'Conversation Design'],
    problem:
      'Running outbound demo calls at scale meant a live rep working through the list one call at a time.',
    approach:
      'Designed the conversation flow for an outbound Retell AI voice agent that runs the demo call and books a follow-up directly on the call.',
    result:
      'Demo calls run through the list automatically, with follow-ups booked on the spot instead of scheduled separately later.',
  },
  {
    title: 'AI Lead Qualifier Voice Agent',
    description: 'Voice receptionist configured to collect business info, gauge interest, and book a demo call',
    image: '/projects/voice-sara-lead-qualifier.png',
    tags: ['Retell AI', 'Voice Agent', 'Lead Qualification'],
    problem:
      'Qualifying inbound leads by phone meant a rep manually asking the same set of questions on every call.',
    approach:
      'Configured a Retell AI voice receptionist to collect business info, gauge interest, and book a demo call in one conversation.',
    result:
      'Leads get qualified and booked on the same call, without a rep having to run through the script manually.',
  },
]

export const experience = [
  {
    title: 'Workflow Automation Specialist',
    meta: 'Freelance | Upwork & OnlineJobs.ph • Current',
    points: [
      'Designed and implemented n8n and Zapier automation workflows, reducing manual processes by 80%',
      'Built AI chat and voice agents (OpenAI, Retell AI) for lead qualification, appointment booking, and inbound call handling',
      'Set up lead sourcing and enrichment pipelines with Apollo and Apify, and automated content publishing to WordPress',
    ],
  },
  {
    title: 'System Builder | Automation Expert',
    meta: 'Press Haven Homes | OnlineJobs.ph • Long-term Rental',
    points: [
      'Built and ran the operational workflows behind tenant relations, lease management, and day-to-day coordination',
      'Standardized recurring admin processes for the CEO so nothing depended on manual follow-up',
      'Kept mid/long-term rentals and sober living homes running smoothly across multiple properties',
    ],
  },
  {
    title: 'Automation Specialist',
    meta: 'Stay Classy Homes | Short-term Rental',
    points: [
      'Owned the guest communication and reservation pipeline end to end, from inquiry to check-out',
      'Coordinated maintenance, cleaning, and vendor scheduling as one repeatable process across listings',
      'Processed invoices and reconciled discrepancies with vendors',
    ],
  },
]

export type TechStackItem = { name: string; logo: string }

export const techStack: TechStackItem[] = [
  { name: 'n8n', logo: '/skills/n8n.png' },
  { name: 'ChatGPT', logo: '/skills/chatgpt.png' },
  { name: 'Claude', logo: '/skills/claude.png' },
  { name: 'Claude Code', logo: '/skills/claude-code.png' },
  { name: 'Retell AI', logo: '/skills/retell.png' },
  { name: 'Zapier', logo: '/skills/zapier.png' },
  { name: 'Make', logo: '/skills/make.jpg' },
  { name: 'GoHighLevel', logo: '/skills/gohighlevel.jpg' },
  { name: 'HubSpot', logo: '/skills/hubspot.png' },
  { name: 'WordPress', logo: '/skills/wordpress.png' },
  { name: 'Google Sheets', logo: '/skills/sheets.jpg' },
  { name: 'API Integrations', logo: '/skills/api.png' },
  { name: 'Webhooks', logo: '/skills/webhook.png' },
  { name: 'Node.js', logo: '/skills/nodejs.jpg' },
  { name: 'VS Code', logo: '/skills/vscode.jpg' },
  { name: 'Google Workspace', logo: '/skills/google.jpg' },
  { name: 'Apify', logo: '/skills/apify.png' },
  { name: 'Gemini', logo: '/skills/gemini.jpg' },
  { name: 'HeyGen', logo: '/skills/heygen.jpg' },
  { name: 'Lovable', logo: '/skills/lovable.jpg' },
  { name: 'Mailchimp', logo: '/skills/mailchimp.png' },
  { name: 'Meta', logo: '/skills/meta.png' },
  { name: 'Notion', logo: '/skills/notion.png' },
  { name: 'Slack', logo: '/skills/slack.png' },
  { name: 'Grok', logo: '/skills/grok.png' },
]

/** Same grouping used on the resume's Technical Skills section. */
export const skillGroups = [
  {
    label: 'Automation Platforms',
    items: ['n8n', 'Zapier', 'Make', 'GoHighLevel'],
  },
  {
    label: 'AI & Voice',
    items: [
      'ChatGPT',
      'Claude',
      'Claude Code',
      'Retell AI',
      'Gemini',
      'HeyGen',
      'Lovable',
      'Grok',
    ],
  },
  {
    label: 'CRM & Business Tools',
    items: ['HubSpot', 'WordPress', 'Notion', 'Slack', 'Mailchimp', 'Meta'],
  },
  {
    label: 'Data & Integrations',
    items: [
      'Google Sheets',
      'API Integrations',
      'Webhooks',
      'Node.js',
      'VS Code',
      'Google Workspace',
      'Apify',
    ],
  },
]

export type ClientLogo = { name: string; logo: string }

export const clientLogos: ClientLogo[] = [
  { name: 'FinPro', logo: '/clients/finpro.svg' },
  { name: 'Texas Tires', logo: '/clients/texas-tires.webp' },
  { name: 'Tuff Tube Transition', logo: '/clients/tuff-tube-transition.webp' },
  { name: 'SCM', logo: '/clients/scm.webp' },
  { name: 'iCybernetics', logo: '/clients/icybernetics.webp' },
  { name: 'Vitality Capital Investments', logo: '/clients/vitality-capital.webp' },
  { name: 'Heavy Grind Media', logo: '/clients/heavy-grind-media.webp' },
]

export const testimonials = [
  {
    quote:
      "Working with Wovie has been an absolute relief. He's incredibly reliable, detail-oriented, and always delivers with professionalism and integrity. He adapts quickly to any task, communicates proactively, and consistently proves himself as a trusted, high-performing partner.",
    name: 'Elor Kahalanay',
    title: 'Business Owner',
  },
  {
    quote:
      'Working with Wovie on our property management automation was a game-changer. He set up seamless integrations that handle everything from guest communication to scheduling. Highly recommend!',
    name: 'John Pancerzewski',
    title: 'Property Manager',
  },
  {
    quote:
      "Wovie's attention to detail and deep understanding of automation tools is impressive. He created custom workflows that perfectly fit our business needs. Professional and results-driven.",
    name: 'Trey Pinkerman',
    title: 'Funding Business Owner',
  },
]

export type ContactIcon = 'whatsapp' | 'mail' | 'linkedin' | 'globe'

export const contactChannels: Array<{
  icon: ContactIcon
  label: string
  value: string
  href: string
}> = [
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: 'Click Me to Connect',
    href: 'https://wa.me/639063425144',
  },
  {
    icon: 'mail',
    label: 'Email',
    value: 'wovieprollo42@gmail.com',
    href: 'mailto:wovieprollo42@gmail.com',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'Wovie Prollo',
    href: 'https://www.linkedin.com/in/wovie-prollo-3102a5308/',
  },
  {
    icon: 'globe',
    label: 'Upwork',
    value: 'Wovie Prollo',
    href: 'https://www.upwork.com/freelancers/~016098766f2632c3f0',
  },
  {
    icon: 'globe',
    label: 'OnlineJobs.ph',
    value: 'Wovie Galceran Prollo',
    href: 'https://www.onlinejobs.ph/jobseekers/info/2977654',
  },
]
