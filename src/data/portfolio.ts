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
    title: 'Form Submission Workflow',
    description: 'Automated form processing with email and Slack notifications',
    image: '/projects/form-submission-workflow.jpg',
    tags: ['GoHighLevel', 'Gmail', 'Slack'],
  },
  {
    title: 'AI-Powered Appointment Scheduling',
    description: 'Intelligent scheduling system with Google Calendar integration',
    image: '/projects/ai-appointment-scheduling.jpg',
    tags: ['n8n', 'AI Agent', 'Google Calendar'],
    featured: true,
    problem:
      'Booking requests came in through multiple channels and had to be checked against calendar availability by hand before anyone could confirm a time.',
    approach:
      'Built an n8n workflow with an AI agent that reads incoming requests, checks Google Calendar in real time, and proposes or books an open slot without back-and-forth.',
    result:
      'Prospects get a confirmed time in the first reply instead of waiting on a manual back-and-forth.',
  },
  {
    title: 'Xero to Asana Integration',
    description: 'Bank transaction CSV automation with task management',
    image: '/projects/xero-asana-integration.jpg',
    tags: ['Make', 'Xero', 'Asana', 'Google Sheets'],
    featured: true,
    problem:
      'The team was manually copying transactions out of Xero-exported CSVs into Asana tasks every week, checking each line against a spreadsheet by hand to catch anything already processed.',
    approach:
      'Built a Make scenario that parses the CSV export, cross-checks each transaction against a Google Sheets ledger, and creates or updates the matching Asana task automatically.',
    result:
      'Transaction reconciliation runs without anyone opening a spreadsheet, and nothing gets double-entered or missed between exports.',
  },
  {
    title: 'Asana Email Leads Automation',
    description: 'Multi-path lead management with automated email workflows',
    image: '/projects/asana-email-leads.jpg',
    tags: ['GoHighLevel', 'Asana', 'Gmail', 'Google Drive'],
  },
  {
    title: 'Lead Enrichment System',
    description: 'Automated lead data enrichment with Slack notifications',
    image: '/projects/lead-enrichment.jpg',
    tags: ['GoHighLevel', 'Webhooks', 'Google Sheets', 'Slack'],
  },
  {
    title: 'Monday.com Workflow Management',
    description: 'Tenant relations and property management automation',
    image: '/projects/monday-workflow.jpg',
    tags: ['Monday.com', 'Automation'],
  },
  {
    title: 'Facebook Messenger AI Agent',
    description: 'Customer support automation with AI-powered responses',
    image: '/projects/facebook-messenger-agent.jpg',
    tags: ['n8n', 'AI Agent', 'Facebook Messenger'],
  },
  {
    title: 'Gmail Labeling AI Agent',
    description: 'Intelligent email categorization and draft creation',
    image: '/projects/gmail-labeling-agent.jpg',
    tags: ['n8n', 'Google Gemini', 'Gmail'],
  },
  {
    title: 'Social Media Content Planner',
    description: 'Automated social media scheduling and management',
    image: '/projects/social-media-planner.jpg',
    tags: ['GoHighLevel', 'Social Platforms'],
  },
]

export const experience = [
  {
    title: 'Workflow Automation Specialist',
    meta: 'Freelance | Upwork & OnlineJobs.ph • Current',
    points: [
      'Designed and implemented automation workflows, reducing manual processes by 80%',
      'Integrated Google Sheets, Google Calendar, and Gmail for improved task management',
      'Delivered custom automation solutions for diverse client needs',
    ],
  },
  {
    title: 'Property Management Virtual Assistant',
    meta: 'Press Haven Homes | OnlineJobs.ph • Long-term Rental',
    points: [
      'Supported CEO with administrative tasks and property management',
      'Coordinated tenant relations, lease management, and operational workflows',
      'Ensured smooth daily operations for mid/long-term rentals and sober living homes',
    ],
  },
  {
    title: 'Property Management Specialist',
    meta: 'Stay Classy Homes | Short-term Rental',
    points: [
      'Managed guest communication, reservations, and check-in/check-out coordination',
      'Oversaw property maintenance, cleaning, and vendor/contractor scheduling',
      'Processed invoices and resolved discrepancies with vendors',
    ],
  },
  {
    title: 'Product Research Specialist',
    meta: 'Gencor Marketing | OnlineJobs.ph • Freelance',
    points: [
      'Conducted market/product research for Amazon online arbitrage opportunities',
      'Analyzed product demand, competition, and profitability metrics',
    ],
  },
  {
    title: 'General Virtual Assistant',
    meta: 'Print-on-Demand Business | OnlineJobs.ph • Freelance',
    points: [
      'Managed order processing, product uploads, and data entry',
      'Provided customer support and social media management',
      'Created marketing materials using Canva',
    ],
  },
]

export const skillGroups = [
  {
    group: 'Automation Tools',
    items: [
      'Zapier',
      'Make (Integromat)',
      'n8n',
      'GoHighLevel',
      'API Integrations',
      'Webhooks',
    ],
  },
  {
    group: 'CRM & Marketing',
    items: [
      'HubSpot',
      'GoHighLevel',
      'Email Marketing',
      'Client Lifecycle Management',
    ],
  },
  {
    group: 'Data Management',
    items: [
      'Google Sheets',
      'Airtable',
      'Monday',
      'Data Entry',
      'Process Documentation',
    ],
  },
  {
    group: 'Property Management',
    items: ['Airbnb', 'VRBO', 'Doorloop', 'Tenant Management', 'Scheduling'],
  },
  {
    group: 'Communication & Tools',
    items: ['Slack', 'Email', 'Customer Support', 'SOP Creation', 'Canva'],
  },
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
