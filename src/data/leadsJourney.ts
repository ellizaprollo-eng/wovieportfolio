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
  /** Smaller automations that run as part of this step. */
  systems?: { title: string; text: string }[]
}

export const journeyIntro = {
  eyebrow: 'Case Study',
  title: 'The Leads Journey',
  subtitle: 'How one system takes a lead from first click to closed deal.',
  description:
    'This is one connected system built with GoHighLevel and AI. It catches leads from a funnel, lets an AI bot check if they are a good fit, and books them on a call. After that, it keeps them moving with reminders, follow-ups, and nurture messages. From the first form to the final deal, no lead gets forgotten.',
  stack: ['GoHighLevel', 'AI Bot', 'Calendar', 'Email', 'SMS'],
}

export const journeySteps: JourneyStep[] = [
  {
    id: 'lead-capture',
    title: 'Lead Capture',
    summary:
      'Someone visits the funnel and fills out the form. GoHighLevel saves them as a contact, adds them to the pipeline, and tags them so they are ready for the next step. Nobody has to type anything or keep checking the inbox.',
    image: '/case-study/01-lead-capture.png',
    imageLabel: 'New lead entry, GoHighLevel workflow',
    stages: ['New Lead'],
    tags: ['source: funnel', 'channel: web', 'status: waiting for review'],
    trigger: 'A form is filled out on the funnel',
    actions: [
      'Save the lead as a new contact',
      'Add the lead to the pipeline',
      'Tag where the lead came from',
      'Start the AI bot to check the lead',
    ],
  },
  {
    id: 'qualification',
    title: 'Qualification with an AI Bot',
    summary:
      'An AI bot starts chatting with the lead by chat or SMS right away. It asks simple questions to find out if the lead is a good fit and ready to buy. Good leads move forward. Leads that are not a fit get a kind "not right now" message, so nobody wastes time.',
    image: '/case-study/02-qualification.png',
    imageLabel: 'Lead qualification to booking, full workflow',
    stages: ['New Lead', 'Qualified'],
    tags: ['score: 1 to 10', 'interest: hot / warm / cold', 'good fit: yes / no'],
    trigger: 'The AI bot gets the new lead from step 1',
    actions: [
      'Ask the lead a few simple questions',
      'Give the lead a score based on the answers',
      'Send good leads to booking',
      'Send a polite reply to leads that are not a fit',
    ],
  },
  {
    id: 'appointment',
    title: 'Appointment Booking with an AI Bot',
    summary:
      'When the lead is a good fit, the bot shows open times from the GoHighLevel calendar and books the call right in the chat. The lead gets a confirmation by SMS and email, with any helpful files, before they even close the chat.',
    image: '/case-study/03-booking-reminders.png',
    imageLabel: 'Calendar booking and confirmation',
    stages: ['Qualified', 'Booked'],
    tags: ['calendar: GoHighLevel', 'confirmation: SMS + email', 'booked by: bot'],
    trigger: 'The lead picks a time in the chat',
    actions: [
      'Book the call in the GoHighLevel calendar',
      'Send a confirmation SMS and email',
      'Let the team know about the new call',
      'Move the lead to Booked in the pipeline',
    ],
  },
  {
    id: 'post-booking',
    title: 'After the Booking',
    summary:
      'Booking the call is only half the job. Two automations run in the background to make sure the lead actually shows up and stays interested in the days before the call.',
    image: '/case-study/04-no-show-recovery.png',
    imageLabel: 'Reminders and pre-call messages',
    stages: ['Booked', 'Confirmed', 'Showed Up'],
    tags: ['reminder: 1 day before', 'reminder: 1 hour before', 'pre-call messages'],
    trigger: 'A call is booked on the calendar',
    actions: [
      'Send reminders before the call',
      'Share helpful info so the lead comes prepared',
      'Check if the lead showed up',
      'Help the lead rebook if they missed the call',
    ],
    systems: [
      {
        title: 'Call reminders',
        text: 'SMS and email reminders go out 1 day, 1 hour, and 15 minutes before the call, so fewer people miss it.',
      },
      {
        title: 'Pre-call messages',
        text: 'A few short messages with useful info, results from past clients, and a simple plan for the call.',
      },
    ],
  },
  {
    id: 'post-call',
    title: 'After the Call',
    summary:
      'After the call, the lead goes into one of three paths based on how it went. Ready to buy? They move toward the sale. Need more time? They get nurture messages. Went quiet? They are saved for a check-in later. No lead is forgotten.',
    image: '/case-study/05-lead-nurture.png',
    imageLabel: 'Lead nurture, after-call sequence',
    stages: ['Showed Up', 'Won / Not Yet / Lost'],
    tags: ['result: won / not yet / lost', 'nurture: on', 'check-in: planned'],
    trigger: 'The call result is updated in the pipeline',
    actions: [
      'Send a thank-you with a short recap',
      'Pick the right path based on the call result',
      'Send monthly SMS and email to leads who need time',
      'Bring old leads back with a check-in',
    ],
    systems: [
      {
        title: 'After-call follow-up',
        text: 'A thank-you, a short recap, and a clear next step, based on how the call went.',
      },
      {
        title: 'Lead nurture',
        text: 'Monthly messages for leads who are not ready yet, with tips, results, and offers to keep them warm.',
      },
      {
        title: 'Win-back',
        text: 'Every few months, old or cold leads get a check-in. If they reply, they go back into the pipeline.',
      },
    ],
  },
]
