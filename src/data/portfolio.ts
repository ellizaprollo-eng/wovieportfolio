/**
 * Every piece of copy on the site lives here so sections stay presentational.
 */

export const profile = {
  name: 'Wovie Prollo',
  shortName: 'Wovie Prollo',
  role: 'Workflow and AI Automation Specialist',
  intro:
    'Transforming business processes through intelligent automation. Specialized in Zapier, Make, n8n, and API integrations to streamline workflows and boost efficiency.',
  avatar: '/profile.jpg',
  location: 'Butuan City, Philippines',
  locationNote: 'Available for remote work across all time zones',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
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

export const projects = [
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
  },
  {
    title: 'Xero to Asana Integration',
    description: 'Bank transaction CSV automation with task management',
    image: '/projects/xero-asana-integration.jpg',
    tags: ['Make', 'Xero', 'Asana', 'Google Sheets'],
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
      "Working with Wovie has been an absolute relief—he's incredibly reliable, detail-oriented, and always delivers with professionalism and integrity. He adapts quickly to any task, communicates proactively, and consistently proves himself as a trusted, high-performing partner.",
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
