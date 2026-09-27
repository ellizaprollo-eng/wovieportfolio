/**
 * "The Leads Journey" case study: one GoHighLevel system, five workflows.
 * Screenshots live in /public/case-study and are shown in step order.
 */
export type JourneyStep = {
  id: string
  title: string
  summary: string
  image: string
  imageLabel: string
  /** Pipeline stages the lead moves through during this step. */
  stages: string[]
  tags: string[]
  trigger: string
  actions: string[]
}

export const journeyIntro = {
  eyebrow: 'Case Study',
  title: 'The Leads Journey',
  subtitle: 'From first form fill to closed deal, one connected system.',
  description:
    'Five GoHighLevel workflows that capture every lead, let an AI bot qualify and book them, confirm and remind them before the call, rescue no-shows, and keep cold leads warm with monthly nurture. Nobody copies data by hand and no lead is left waiting.',
  stack: ['GoHighLevel', 'Conversation AI', 'Calendars', 'SMS', 'Email', 'Pipelines'],
}

export const journeySteps: JourneyStep[] = [
  {
    id: 'lead-capture',
    title: 'Lead Capture',
    summary:
      'Every lead lands in one place, no matter where it came from. Website forms, Facebook lead ads, live chat replies, inbound calls and manual referrals all fire the same workflow. It tags the lead, records the source, creates the opportunity in the pipeline, sends a starter SMS and hands the conversation to the AI bot.',
    image: '/case-study/01-lead-capture.png',
    imageLabel: 'Step 1: Lead Capture',
    stages: ['New Lead'],
    tags: ['new lead', 'lead source', 'conversation ai: on'],
    trigger: 'Website form, Facebook lead form, live chat reply, inbound call, or manual add',
    actions: [
      'Tag the contact as a new lead',
      'Branch by trigger and tag the lead source',
      'Create or update the pipeline opportunity',
      'Send a starter SMS and switch on the AI bot',
    ],
  },
  {
    id: 'qualification',
    title: 'Qualification with an AI Bot',
    summary:
      'The AI bot picks up the conversation over chat or SMS in real time. It asks the qualifying questions, branches on every answer and routes the lead. Qualified leads move straight toward booking. Leads that are not a fit get a polite reply and are tagged so nobody spends time chasing them.',
    image: '/case-study/02-qualification.png',
    imageLabel: 'Lead qualification to booking, end-to-end',
    stages: ['New Lead', 'Qualified'],
    tags: ['qualified', 'not a fit', 'bot status'],
    trigger: 'AI bot conversation started by the capture workflow',
    actions: [
      'Ask qualifying questions over chat or SMS',
      'Branch on each answer and update contact fields',
      'Move qualified leads to booking',
      'Tag and close out leads that are not a fit',
    ],
  },
  {
    id: 'booking',
    title: 'Booking Confirmation and Reminders',
    summary:
      'The moment a call is booked, the lead gets a confirmation SMS and email and the team is notified. The opportunity moves to Booked, then a reminder sequence runs one day before, two hours before and one hour before the call so the lead actually shows up.',
    image: '/case-study/03-booking-reminders.png',
    imageLabel: 'Calendar booking confirmation + reminders',
    stages: ['Qualified', 'Booked'],
    tags: ['booked', 'reminder: 1 day', 'reminder: 2 hours'],
    trigger: 'Customer booked appointment',
    actions: [
      'Send confirmation SMS and email',
      'Notify the team and tag the contact',
      'Move the opportunity to Booked',
      'Send reminders 1 day, 2 hours and 1 hour before',
    ],
  },
  {
    id: 'no-show',
    title: 'No-Show Recovery',
    summary:
      'If the lead misses the call, the system tries to win them back on its own. Fifteen minutes after the no-show it sends a reschedule SMS and email, then checks at 24 and 72 hours whether they rebooked. Leads that never come back are tagged as cold and handed to nurture.',
    image: '/case-study/04-no-show-recovery.png',
    imageLabel: 'No-show, reschedule sequence',
    stages: ['Booked', 'No Show', 'Rebooked or Nurture'],
    tags: ['no show', 'needs rebook', 'cold lead'],
    trigger: 'Appointment status changed to no-show',
    actions: [
      'Tag No Show and Needs Rebook, remove Discovery Scheduled',
      'Send a reschedule SMS and email after 15 minutes',
      'Check for a new booking at 24 and 72 hours',
      'Tag as cold lead and move to nurture if still not booked',
    ],
  },
  {
    id: 'nurture',
    title: 'Lead Nurture',
    summary:
      'Leads that are not ready yet stay warm for months without anyone lifting a finger. Every 30 days the workflow checks the current month and sends that month’s SMS and email, with fresh context loaded into the AI bot so any reply picks the conversation right back up.',
    image: '/case-study/05-lead-nurture.png',
    imageLabel: 'A. Lead Nurture, monthly sequence',
    stages: ['Nurture', 'Re-engaged'],
    tags: ['nurture: active', 'stop bot removed'],
    trigger: 'Opportunity created or moved to the nurture stage in the marketing pipeline',
    actions: [
      'Remove the lead from other active workflows',
      'Wait 30 days, then branch by current month',
      'Send that month’s nurture SMS and email',
      'Update the AI bot conversation history for replies',
    ],
  },
]
