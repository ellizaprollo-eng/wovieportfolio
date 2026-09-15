/**
 * Every piece of copy on the site lives here so sections stay presentational.
 */

export const profile = {
  name: 'Wovie Prollo',
  shortName: 'Wovie Prollo',
  role: 'Workflow & AI Automation Specialist',
  headline: 'I take the busywork out of your operations.',
  intro:
    'I design and build automations on GoHighLevel, Zapier, Make, and n8n, connecting the tools you already use so the work happens without anyone touching it.',
  avatar: '/profile.jpg',
  location: 'Butuan City, Philippines',
  locationNote: 'Available for remote work across all time zones',
  responseTime: 'Usually responds within 24 hours',
}

/** Grounded in real figures already stated in the experience/project data below. */
export const heroStats = [
  { value: '80%', label: 'Less manual work for clients' },
  { value: '4', label: 'Core platforms: GHL, Zapier, Make, n8n' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
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

export const services: Array<{
  icon: ServiceIcon
  title: string
  description: string
}> = [
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
    icon: 'message',
    title: 'CRM Automation',
    description:
      'Streamline customer relationship management with HubSpot and GoHighLevel automations for better client engagement.',
  },
  {
    icon: 'calendar',
    title: 'Property Management',
    description:
      'Automate property operations including tenant onboarding, scheduling, and communication for short and long-term rentals.',
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
  },
  {
    title: 'Proposal Agent',
    description: 'Drafts and assembles client proposals straight from intake data',
    image: '/projects/proposal-agent.png',
    tags: ['n8n', 'AI Agent', 'Documents'],
  },
  {
    title: 'Form Submission Lead Routing',
    description: 'Routes form submissions to the right owner and follow-up sequence in real time',
    image: '/projects/form-submission-lead.png',
    tags: ['n8n', 'Webhook', 'CRM'],
  },
  {
    title: 'Survey Intake Automation',
    description: 'Processes survey responses and syncs structured answers into the CRM',
    image: '/projects/form-survey-neuro.png',
    tags: ['n8n', 'Forms', 'CRM'],
  },
  {
    title: 'Outbound Call Automation',
    description: 'Queues outbound calls from a lead list and logs outcomes automatically',
    image: '/projects/outbound-call.png',
    tags: ['n8n', 'Voice', 'CRM'],
  },
  {
    title: 'Coaching Business Pipeline',
    description: 'Intake and follow-up pipeline routing new leads into the right nurture sequence',
    image: '/projects/fl-coaches-workflow.png',
    tags: ['n8n', 'CRM', 'Lead Nurture'],
  },
  {
    title: 'Coaching Business Pipeline v2',
    description: 'Expanded version of the coaching pipeline with added branching and follow-up logic',
    image: '/projects/fl-coaches-workflow-2.png',
    tags: ['n8n', 'CRM', 'Lead Nurture'],
  },
  {
    title: 'Auto Article to WordPress',
    description: 'Generates long-form articles and publishes them to WordPress on a schedule',
    image: '/projects/auto-article-wordpress.png',
    tags: ['n8n', 'WordPress', 'Content'],
  },
  {
    title: 'Daily Posting Automation',
    description: 'Queues and publishes daily social content on schedule across channels',
    image: '/projects/daily-posting-automation.png',
    tags: ['n8n', 'Social Media', 'Scheduling'],
  },
  {
    title: 'Zapier Social Posting',
    description: 'Pushes new content to social channels the moment it is ready',
    image: '/projects/zap-social-posting.png',
    tags: ['Zapier', 'Social Media'],
  },
  {
    title: 'Payments Tracking & Audit',
    description: 'Logs incoming payments, reconciles them against records, and flags mismatches',
    image: '/projects/payments-received-tracking-audit.png',
    tags: ['n8n', 'Finance', 'Reporting'],
  },
  {
    title: 'Post-Purchase Review Request',
    description: 'Triggers a timed review request after purchase and tracks the response',
    image: '/projects/post-purchase-review-request.png',
    tags: ['n8n', 'Customer Experience'],
  },
  {
    title: 'Review Workflow',
    description: 'Collects and routes incoming reviews so the team only sees ones needing a response',
    image: '/projects/review-workflow.png',
    tags: ['n8n', 'Customer Experience'],
  },
  {
    title: 'Voice AI Booking Workflow',
    description: 'Backend n8n workflow behind a voice agent that checks calendar availability and confirms appointments',
    image: '/projects/voice-inbound-booking-workflow.png',
    tags: ['n8n', 'Voice AI', 'Booking'],
  },
  {
    title: 'Voice AI Inbound Call Flow',
    description: 'Conversation flow for an inbound voice receptionist that greets callers and qualifies the lead in one call',
    image: '/projects/voice-lead-cart-inbound.png',
    tags: ['Retell AI', 'Voice Agent', 'Conversation Design'],
  },
  {
    title: 'Voice AI Outbound Call Flow',
    description: 'Conversation flow for an outbound voice agent that runs demo calls and books a follow-up on the spot',
    image: '/projects/voice-lead-cart-outbound.png',
    tags: ['Retell AI', 'Voice Agent', 'Conversation Design'],
  },
  {
    title: 'AI Lead Qualifier Voice Agent',
    description: 'Voice receptionist configured to collect business info, gauge interest, and book a demo call',
    image: '/projects/voice-sara-lead-qualifier.png',
    tags: ['Retell AI', 'Voice Agent', 'Lead Qualification'],
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
    title: 'System Bulder | Automation Expert ',
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
  {
    title: 'Product Research Specialist',
    meta: 'Gencor Marketing | OnlineJobs.ph • Freelance',
    points: [
      'Ran a repeatable research process to evaluate Amazon online arbitrage opportunities at scale',
      'Analyzed product demand, competition, and profitability metrics to guide sourcing decisions',
    ],
  },
  {
    title: 'General Virtual Assistant',
    meta: 'Print-on-Demand Business | OnlineJobs.ph • Freelance',
    points: [
      'Managed order processing, product uploads, and data entry as a consistent daily pipeline',
      'Provided customer support and ran social media management alongside it',
      'Created marketing materials using Canva',
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
