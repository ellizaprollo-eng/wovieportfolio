/**
 * Case-study content for every project, keyed by slug (slugify(project.title)).
 * Every line here is derived only from that project's own problem/approach/result
 * in src/data/portfolio.ts — nothing invented, no stats, no clients not already listed.
 */

export type CaseStudyContent = {
  operationalValue: string[]
  overview: string
  workflowProcess: string[]
  automationSolution: string[]
  businessChallenges: string[]
  keyFeatures: string[]
}

export const caseStudies: Record<string, CaseStudyContent> = {
  'ai-chat-agent': {
    operationalValue: [
      "Cuts the time spent triaging every incoming message by hand, since routine messages get an instant, on-brand reply without anyone reading them first.",
      'Frees the team to focus only on the messages that actually need a human, instead of scanning every conversation to find them.',
    ],
    overview:
      'Built for a business handling a steady stream of inbound chat messages, this AI agent reads each one, understands its intent, and decides what should happen next, all without a person reading it first.',
    workflowProcess: [
      'A new chat message arrives and triggers the n8n workflow.',
      'The AI agent reads the message and checks it against vector-store memory for context.',
      'A classification step tags the message as routine, a booking request, or urgent/escalation.',
      'A switch node routes the message down the matching path: automatic reply, booking flow, or a flagged alert to a human.',
    ],
    automationSolution: [
      'n8n as the workflow engine connecting every step.',
      'An AI agent with vector-store memory for message classification and context-aware replies.',
      'A webhook trigger to catch new messages the moment they arrive.',
      'A switch/router node to send each message down the correct path.',
    ],
    businessChallenges: [
      'Every incoming message required a human to read it before anything could happen, creating a bottleneck during busy periods.',
      'There was no consistent way to tell a routine question apart from something urgent, so response time depended on who was available.',
    ],
    keyFeatures: [
      'Automatic message classification (routine, booking, urgent).',
      'Vector-store memory for context-aware responses.',
      'Instant, on-brand replies for routine messages.',
      'Escalation flagging so urgent messages reach a human immediately.',
    ],
  },

  'lead-enrichment-engine': {
    operationalValue: [
      'Removes the manual list-building step entirely, so the sales team receives ready-to-contact leads instead of a raw export to clean up.',
      'Improves lead quality upfront by scoring every contact before it reaches outreach, instead of finding out later which leads were worth the time.',
    ],
    overview:
      'Built for a sales process that depends on a steady flow of qualified leads, this engine turns a plain-language request into a scored, ready-to-contact list without anyone touching Apollo or a spreadsheet.',
    workflowProcess: [
      'A plain-language request describes the kind of lead being searched for.',
      'An AI agent converts that request into an Apollo search URL.',
      'An Apify scraper pulls the search results automatically.',
      'Each lead is scored on industry, company size, and title.',
      'Only leads with a real score, email, and website are pushed to the outreach tool.',
    ],
    automationSolution: [
      'n8n as the workflow engine.',
      'An AI agent to translate plain-language requests into structured Apollo searches.',
      'Apollo for lead sourcing.',
      'Apify for scraping search results.',
      'A scoring step based on industry, company size, and title.',
    ],
    businessChallenges: [
      'Building a lead list meant manually running Apollo searches and exporting results one at a time.',
      'Every contact had to be scored by hand, so lead quality depended on how much time was available to review the list.',
    ],
    keyFeatures: [
      'Plain-language request turned into a structured search automatically.',
      'Automated scraping via Apify.',
      'Lead scoring on industry, company size, and title.',
      'Only qualified leads (with score, email, and website) reach the outreach tool.',
    ],
  },

  'onboarding-agent': {
    operationalValue: [
      'Shortens the time between signing a new client and actually starting work, since intake no longer depends on back-and-forth email.',
      'Reduces the risk of missing information, since the structured conversation captures everything needed in one pass.',
    ],
    overview:
      'Built for a business that onboards new clients regularly, this chat-based AI agent replaces email back-and-forth with a single guided intake conversation.',
    workflowProcess: [
      'A new client starts the chat-based intake conversation.',
      'The AI agent asks a structured set of onboarding questions.',
      'Responses are captured and organized automatically as the conversation progresses.',
      'A complete, structured onboarding record is ready as soon as the conversation ends.',
    ],
    automationSolution: [
      'n8n as the workflow engine.',
      'A chat-based AI agent that conducts the intake conversation.',
      'Structured data capture that organizes responses without manual entry.',
    ],
    businessChallenges: [
      'Onboarding depended on back-and-forth emails or calls, which delayed the start of actual work.',
      'Information arrived scattered across messages instead of in one organized record.',
    ],
    keyFeatures: [
      'Guided, conversational intake instead of a static form.',
      'Automatic structuring of captured information.',
      'Consistent onboarding experience for every new client.',
    ],
  },

  'proposal-agent': {
    operationalValue: [
      'Cuts the repetitive writing work out of every new proposal, so the team reviews a draft instead of starting from a blank page.',
      'Speeds up how quickly a proposal reaches the prospect, which matters most while their interest is fresh.',
    ],
    overview:
      'Built for a business that sends a proposal to every new prospect, this AI agent drafts a formatted, client-ready document straight from the intake data already on file.',
    workflowProcess: [
      'Intake data for a new prospect becomes available.',
      'The AI agent pulls that data into the workflow.',
      'A formatted proposal document is drafted automatically from the intake details.',
      'The draft is ready for a final human review before sending.',
    ],
    automationSolution: [
      'n8n as the workflow engine.',
      'An AI agent for drafting the proposal document.',
      'Document generation built directly from structured intake data.',
    ],
    businessChallenges: [
      'Writing a proposal from scratch for every prospect was repetitive and time-consuming.',
      'Reusing old proposals by copy-pasting risked leaving in details that did not match the new prospect.',
    ],
    keyFeatures: [
      'Automatic draft generation from existing intake data.',
      'Consistent, formatted proposal output every time.',
      'Built-in review step before a proposal is sent.',
    ],
  },

  'form-submission-lead-routing': {
    operationalValue: [
      'Removes the delay between a form submission and someone actually seeing it, since leads no longer wait in a shared inbox.',
      'Makes sure every lead has a clear owner and a follow-up sequence, instead of depending on someone noticing it.',
    ],
    overview:
      'Built for a business collecting leads through web forms, this workflow makes sure every submission reaches the right person and the right follow-up sequence the moment it arrives.',
    workflowProcess: [
      'A form submission triggers a webhook.',
      'The n8n workflow reads the submission details.',
      'The lead is routed to the correct owner based on those details.',
      'The matching follow-up sequence starts in the CRM immediately.',
    ],
    automationSolution: [
      'n8n as the workflow engine.',
      'A webhook trigger to catch form submissions in real time.',
      'CRM integration for owner assignment and follow-up sequencing.',
    ],
    businessChallenges: [
      'Submissions landed in a single shared inbox with no clear owner.',
      'Leads sat untouched until someone happened to notice them.',
    ],
    keyFeatures: [
      'Real-time routing triggered by webhook.',
      'Automatic owner assignment based on submission details.',
      'Immediate enrollment into the right CRM follow-up sequence.',
    ],
  },

  'survey-intake-automation': {
    operationalValue: [
      "Removes the manual data-entry step entirely, since survey answers sync into the CRM the moment they're submitted.",
      'Makes survey data usable immediately, instead of waiting for someone to review and enter it.',
    ],
    overview:
      'Built for a business using surveys to collect structured information from leads or clients, this workflow turns raw form data into usable CRM records with no manual review step.',
    workflowProcess: [
      'A survey response is submitted.',
      'The n8n workflow reads the raw response data.',
      'Each answer is structured into the matching CRM field.',
      'The structured record syncs into the CRM automatically.',
    ],
    automationSolution: [
      'n8n as the workflow engine.',
      'Forms integration to capture survey responses.',
      'CRM sync for structured answer storage.',
    ],
    businessChallenges: [
      'Survey responses arrived as raw data that needed manual review before it meant anything.',
      'Entering that data into the CRM by hand was a repetitive, error-prone step.',
    ],
    keyFeatures: [
      'Automatic structuring of raw survey answers.',
      'Real-time sync into the CRM.',
      'No manual re-entry required.',
    ],
  },

  'outbound-call-automation': {
    operationalValue: [
      'Removes the manual dialing and logging work from working an outbound list, freeing that time for actual conversations.',
      'Keeps the CRM accurate automatically, since every call outcome is logged the moment it happens.',
    ],
    overview:
      'Built for a business running outbound call campaigns, this workflow queues the call list and keeps the CRM updated automatically as calls are completed.',
    workflowProcess: [
      'The lead list loads into the queue in order.',
      'The n8n workflow triggers each call in sequence.',
      'The outcome of each call is captured as it completes.',
      'That outcome logs back to the CRM automatically.',
    ],
    automationSolution: [
      'n8n as the workflow engine.',
      'A queuing system for working through the call list in order.',
      'CRM integration for automatic outcome logging.',
    ],
    businessChallenges: [
      'Dialing through a call list by hand was slow and easy to lose track of.',
      'Logging outcomes afterward was a separate manual step, prone to being skipped or delayed.',
    ],
    keyFeatures: [
      'Automatic call queuing in order.',
      'Real-time outcome logging to the CRM.',
      'No manual follow-up needed to keep records accurate.',
    ],
  },

  'coaching-business-pipeline': {
    operationalValue: [
      'Removes the manual sorting step, so every new lead starts their follow-up sequence immediately instead of waiting.',
      "Makes sure each lead gets a nurture sequence that actually matches their intake answers, improving how leads are handled from day one.",
    ],
    overview:
      "Built for a coaching business bringing in new leads regularly, this pipeline reads each lead's intake answers and enrolls them into the right nurture sequence automatically.",
    workflowProcess: [
      'A new coaching lead submits their intake answers.',
      'The n8n pipeline reads those answers.',
      'The lead is matched to the appropriate nurture sequence.',
      'Enrollment into that sequence happens automatically in the CRM.',
    ],
    automationSolution: [
      'n8n as the pipeline engine.',
      'CRM integration for sequence enrollment.',
      'Lead nurture logic based on intake answers.',
    ],
    businessChallenges: [
      'New leads had to be manually reviewed and sorted before follow-up could start.',
      'Sorting by hand meant delays between a lead coming in and receiving any follow-up.',
    ],
    keyFeatures: [
      'Automatic lead sorting based on intake answers.',
      'Immediate enrollment into the matching nurture sequence.',
      'No manual review step before follow-up starts.',
    ],
  },

  'coaching-business-pipeline-v2': {
    operationalValue: [
      'Reduces the number of leads falling through the cracks, since every lead type now has a matching follow-up path instead of one default sequence.',
      'Improves how leads are handled as the business grows and lead types become more varied.',
    ],
    overview:
      "Built as an expansion of the original coaching pipeline, this version adds branching logic so leads who don't fit the standard profile still get a follow-up sequence that fits them.",
    workflowProcess: [
      "A new lead's intake answers are read, same as the original pipeline.",
      'Branching logic evaluates the specific answers instead of matching a single default profile.',
      'The lead is routed down the follow-up path that matches their actual answers.',
      'Enrollment happens automatically in the CRM, same as before.',
    ],
    automationSolution: [
      'n8n as the pipeline engine, expanded from the original version.',
      'Branching logic for multiple follow-up paths.',
      'CRM integration for sequence enrollment.',
    ],
    businessChallenges: [
      'The original single-path pipeline could not account for leads outside the standard profile.',
      'Leads that did not fit the default profile fell through the cracks with no follow-up at all.',
    ],
    keyFeatures: [
      'Branching logic for multiple nurture paths.',
      'Follow-up sequences matched to specific intake answers, not just a default profile.',
      'Built directly on top of the original pipeline rather than replacing it.',
    ],
  },

  'auto-article-to-wordpress': {
    operationalValue: [
      'Removes the manual posting step from a content schedule that used to depend on someone logging into WordPress.',
      'Keeps a publishing schedule consistent, since content goes live on time without relying on someone remembering to post it.',
    ],
    overview:
      'Built for a business that needs long-form content published on a regular schedule, this workflow generates and publishes articles to WordPress without anyone touching the dashboard.',
    workflowProcess: [
      'The workflow runs on a set publishing schedule.',
      'Article content is generated for that scheduled slot.',
      'The generated article is formatted for WordPress.',
      'The workflow publishes the article directly, live on schedule.',
    ],
    automationSolution: [
      'n8n as the workflow engine.',
      'WordPress integration for direct publishing.',
      'Scheduled triggers to keep a consistent posting cadence.',
    ],
    businessChallenges: [
      'Publishing on a consistent schedule meant writing and manually posting every article.',
      'A missed manual step meant a missed publishing date.',
    ],
    keyFeatures: [
      'Scheduled, automatic article generation.',
      'Direct publishing to WordPress, no manual step.',
      'Consistent posting cadence with no dashboard access needed.',
    ],
  },

  'daily-posting-automation': {
    operationalValue: [
      'Removes the daily manual posting task across every social channel, saving that time every single day.',
      'Keeps the posting schedule reliable, since it no longer depends on someone remembering to publish.',
    ],
    overview:
      "Built for a business posting daily across multiple social channels, this workflow queues and publishes each day's content automatically, on schedule, everywhere it needs to go.",
    workflowProcess: [
      "The day's content is queued into the workflow.",
      'A scheduled trigger fires at the set posting time.',
      'The workflow publishes the content across every connected channel.',
      'The cycle repeats automatically the next day.',
    ],
    automationSolution: [
      'n8n as the workflow engine.',
      'Social media integrations for multi-channel publishing.',
      'Scheduled triggers for daily automatic posting.',
    ],
    businessChallenges: [
      'Posting daily across multiple platforms meant repeating the same manual task on each one.',
      'Missing a day meant a gap in the posting schedule.',
    ],
    keyFeatures: [
      'Automatic daily content queuing.',
      'Multi-channel publishing in one workflow.',
      'Fully schedule-driven, no manual trigger needed.',
    ],
  },

  'zapier-social-posting': {
    operationalValue: [
      'Removes the waiting period between content being ready and it actually going live.',
      "Frees up the manual posting task entirely, so content publishing no longer depends on someone's availability.",
    ],
    overview:
      "Built for a business that wants content live the moment it's ready, this Zapier automation removes the manual step between marking content ready and publishing it.",
    workflowProcess: [
      'Content is marked as ready.',
      'That status change triggers the Zapier automation.',
      'The automation pushes the content to the connected social channels.',
      'The post goes live immediately, no manual action needed.',
    ],
    automationSolution: [
      'Zapier as the automation platform.',
      'Social media integrations triggered by a status change.',
    ],
    businessChallenges: [
      'Content sat waiting for someone to have time to post it manually.',
      'There was a gap between content being ready and actually reaching the audience.',
    ],
    keyFeatures: [
      'Instant publishing triggered by a status change.',
      'No manual posting step required.',
      'Simple, lightweight automation built on Zapier.',
    ],
  },

  'payments-tracking-audit': {
    operationalValue: [
      'Catches payment discrepancies right away instead of during a manual audit weeks later, reducing financial risk.',
      'Removes the manual reconciliation work, so records stay accurate without someone cross-checking every entry by hand.',
    ],
    overview:
      'Built for a business that needs to keep incoming payments reconciled against its records, this workflow logs, checks, and flags every payment automatically as it comes in.',
    workflowProcess: [
      'An incoming payment is received.',
      'The n8n workflow logs the payment automatically.',
      'The payment is reconciled against existing records.',
      'Any mismatch is flagged immediately for review.',
    ],
    automationSolution: [
      'n8n as the workflow engine.',
      'Finance and reporting integration for logging and reconciliation.',
      'Automatic mismatch detection and flagging.',
    ],
    businessChallenges: [
      'Reconciling payments by hand was a manual process prone to missed or mismatched entries.',
      'Discrepancies often were not caught until a manual audit happened weeks later.',
    ],
    keyFeatures: [
      'Automatic payment logging.',
      'Real-time reconciliation against existing records.',
      'Immediate flagging of mismatches.',
    ],
  },

  'post-purchase-review-request': {
    operationalValue: [
      'Makes sure every customer gets asked for a review at the right moment, improving review volume without extra manual effort.',
      'Removes the need to track and remember follow-up timing for every individual order.',
    ],
    overview:
      'Built for a business that wants consistent post-purchase reviews, this workflow times and sends a review request after every order and tracks whether the customer responds.',
    workflowProcess: [
      'A purchase is completed.',
      'The workflow starts a timer for the right follow-up moment.',
      'The review request is sent automatically at that moment.',
      "The customer's response is tracked.",
    ],
    automationSolution: [
      'n8n as the workflow engine.',
      'Timed triggers for review-request timing.',
      'Response tracking built into the workflow.',
    ],
    businessChallenges: [
      'Asking for a review after every purchase meant remembering to follow up at the right time, every time.',
      'Manual follow-up meant inconsistent timing and missed requests.',
    ],
    keyFeatures: [
      'Automatic, timed review requests after every purchase.',
      'Response tracking with no manual monitoring.',
      'Consistent customer experience on every order.',
    ],
  },

  'review-workflow': {
    operationalValue: [
      'Saves the team from scanning through every review, since only the ones needing a response reach them.',
      "Improves response time on reviews that matter, since they're surfaced automatically instead of buried in the full list.",
    ],
    overview:
      'Built for a business collecting customer reviews, this workflow filters incoming reviews so the team only sees the ones that actually need a reply.',
    workflowProcess: [
      'A new review comes in.',
      'The n8n workflow evaluates whether it needs a response.',
      'Reviews needing attention are routed to the team.',
      "The rest are filtered out of the team's queue automatically.",
    ],
    automationSolution: [
      'n8n as the workflow engine.',
      'Filtering logic to separate reviews needing a response from the rest.',
    ],
    businessChallenges: [
      'All incoming reviews landed in one place with no way to prioritize them.',
      'The team had to scan through everything to find the reviews that actually needed a reply.',
    ],
    keyFeatures: [
      'Automatic filtering of incoming reviews.',
      'Only reviews needing a response reach the team.',
      'Reduces time spent scanning through reviews that do not need action.',
    ],
  },

  'voice-ai-booking-workflow': {
    operationalValue: [
      'Lets a voice agent book real, confirmed appointments without a human checking the calendar, extending booking availability beyond business hours.',
      'Reduces booking errors, since every appointment is checked against the real calendar instead of a placeholder slot.',
    ],
    overview:
      'Built as the backend for a voice booking agent, this n8n workflow checks real calendar availability and confirms appointments directly during the call, with no human input needed.',
    workflowProcess: [
      'A caller requests an appointment during the voice call.',
      'The workflow checks real-time calendar availability.',
      'An available slot is confirmed directly on the call.',
      'The appointment is booked into the calendar automatically.',
    ],
    automationSolution: [
      'n8n as the backend workflow engine.',
      'Real-time calendar integration for availability checks.',
      'Voice AI integration to confirm the booking during the call.',
    ],
    businessChallenges: [
      'A voice agent taking booking calls had no reliable way to check real calendar availability.',
      'Confirming appointments without human input risked booking a placeholder slot instead of a real one.',
    ],
    keyFeatures: [
      'Real-time calendar availability checks.',
      'On-call appointment confirmation.',
      'No human input required to complete a booking.',
    ],
  },

  'voice-ai-inbound-call-flow': {
    operationalValue: [
      'Makes sure every inbound caller gets greeted and qualified, even outside business hours or when no live receptionist is available.',
      'Creates a consistent first impression on every call, instead of quality depending on who happens to answer.',
    ],
    overview:
      "Built for a business that can't guarantee a live receptionist on every call, this Retell AI conversation flow greets and qualifies every inbound caller the same way, every time.",
    workflowProcess: [
      'An inbound call connects to the Retell AI voice receptionist.',
      'The designed conversation flow greets the caller.',
      'The agent asks qualifying questions within the same call.',
      'The qualified lead information is captured for follow-up.',
    ],
    automationSolution: [
      'Retell AI as the voice agent platform.',
      'A designed conversation flow for consistent greeting and qualification.',
    ],
    businessChallenges: [
      'Inbound calls did not get a consistent greeting or qualification process.',
      'Call quality depended on whether a live receptionist happened to be available.',
    ],
    keyFeatures: [
      'Consistent greeting on every inbound call.',
      'Lead qualification built into the same conversation.',
      'No dependency on a live receptionist being available.',
    ],
  },

  'voice-ai-outbound-call-flow': {
    operationalValue: [
      'Runs demo calls through the list automatically, removing the need for a live rep to work through it one call at a time.',
      'Books follow-ups on the spot during the call, instead of requiring a separate scheduling step afterward.',
    ],
    overview:
      'Built for a business running outbound demo calls at scale, this Retell AI conversation flow runs the demo and books the follow-up in the same call, without a live rep on the line.',
    workflowProcess: [
      'The outbound call connects to a contact from the list.',
      'The designed conversation flow runs the demo call.',
      'Interest is gauged during the conversation.',
      'A follow-up is booked directly on the call if the contact is interested.',
    ],
    automationSolution: [
      'Retell AI as the voice agent platform.',
      'A designed conversation flow for the outbound demo and booking.',
    ],
    businessChallenges: [
      'Running outbound demo calls at scale required a live rep working through the list one call at a time.',
      'Booking follow-ups was a separate step after the call instead of happening on the spot.',
    ],
    keyFeatures: [
      'Automated outbound demo calls at scale.',
      'On-call follow-up booking.',
      'Consistent demo delivery without a live rep.',
    ],
  },

  'ai-lead-qualifier-voice-agent': {
    operationalValue: [
      'Qualifies and books leads in the same call, removing the need for a rep to run through the same script manually on every call.',
      'Frees up rep time for calls that actually need a human, since routine qualification now happens automatically.',
    ],
    overview:
      'Built for a business that qualifies inbound leads by phone, this Retell AI voice receptionist collects business info, gauges interest, and books a demo call, all in one conversation.',
    workflowProcess: [
      'An inbound lead calls in.',
      'The voice receptionist collects business information.',
      "The agent gauges the caller's interest level.",
      'If qualified, a demo call is booked directly on the same call.',
    ],
    automationSolution: [
      'Retell AI as the voice agent platform.',
      'Configured conversation logic for info collection and interest gauging.',
      'Direct booking integration within the call.',
    ],
    businessChallenges: [
      'Qualifying leads by phone meant a rep manually asking the same questions on every call.',
      'Rep time went into repetitive qualification instead of calls that actually needed a human.',
    ],
    keyFeatures: [
      'Automatic business-info collection.',
      'Interest gauging built into the conversation.',
      'Same-call demo booking for qualified leads.',
    ],
  },
}
