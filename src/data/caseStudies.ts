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
      'Contacts every new lead within minutes by email, SMS, and an AI voice call, instead of waiting for someone to notice the submission.',
      'Sorts leads by outcome (booked, engaged, or no answer) so follow-up effort goes where it is needed.',
    ],
    overview:
      'Built for a business collecting leads through web forms, this GoHighLevel workflow starts working the moment a form is submitted, reaching out on several channels and routing each lead by how the conversation goes.',
    workflowProcess: [
      'A form submission triggers the GoHighLevel workflow.',
      'The contact is tagged and an opportunity is created or updated.',
      'An initial email and SMS go out right away.',
      'After a short wait, a webhook step triggers an AI voice agent to call the lead.',
      'A condition checks the result: booked an appointment, engaged but declined to book, or no answer.',
      'Each outcome is tagged and routed, with a follow-up call attempted once for contacts who did not answer.',
    ],
    automationSolution: [
      'GoHighLevel workflows for triggers, tagging, opportunities, email, and SMS.',
      'A webhook step to hand the lead to an AI voice agent.',
      'Condition branches to route contacts by call outcome.',
    ],
    businessChallenges: [
      'Submissions landed in a single shared inbox with no clear owner.',
      'Leads sat untouched until someone happened to notice them.',
    ],
    keyFeatures: [
      'Instant multi-channel outreach (email, SMS, AI voice call).',
      'Outcome-based routing: booked, engaged, or no answer.',
      'A single automatic retry for leads who did not pick up.',
      'Opportunities and tags kept up to date at every step.',
    ],
  },

  'survey-intake-automation': {
    operationalValue: [
      'Keeps survey respondents moving toward a booking without anyone manually chasing them.',
      'Stops reminders automatically once a contact books, so nobody gets nudged after they have already committed.',
    ],
    overview:
      'Built for a business using a survey to bring in leads, this GoHighLevel workflow follows up with each respondent on a schedule and checks whether they have already booked before every message.',
    workflowProcess: [
      'A survey submission starts the workflow for that contact.',
      'The workflow waits a day.',
      'A condition checks whether the contact is tagged as having booked an appointment.',
      'If they have booked, the workflow ends. If not, the next follow-up email goes out.',
      'The wait, check, and send cycle repeats for the following messages.',
    ],
    automationSolution: [
      'GoHighLevel workflows for the survey trigger, waits, and email sends.',
      'Tag-based conditions to detect a booked appointment.',
    ],
    businessChallenges: [
      'Respondents who had not booked needed consistent follow-up, but doing it by hand was easy to forget.',
      'Reminding people who had already booked wasted their time and looked out of touch.',
    ],
    keyFeatures: [
      'Timed follow-up emails after a survey submission.',
      'Booking check before every message.',
      'Automatic stop once an appointment is booked.',
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
      'The Make automation triggers each call in sequence.',
      'The outcome of each call is captured as it completes.',
      'That outcome logs back to the CRM automatically.',
    ],
    automationSolution: [
      'Make as the automation engine.',
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
      'Removes the manual sorting step, so a new contact starts the right sequence immediately.',
      'Delivers a consistent, structured program to every enrolled contact without anyone sending each item by hand.',
    ],
    overview:
      'Built for a coaching business bringing in contacts through different programs, this GoHighLevel workflow routes each contact into the matching branch and then delivers a structured series of weekly content and strategy prompts.',
    workflowProcess: [
      'A new contact enters the workflow through their program trigger.',
      'A condition checks which program trigger applies.',
      'The contact is routed into the matching branch.',
      'Numbered prompts and content items are delivered in sequence across a 12-week cycle.',
    ],
    automationSolution: [
      'GoHighLevel workflows for triggers, conditions, and timed delivery.',
      'AI prompt steps that generate the weekly strategy content.',
      'Branching so each program follows its own sequence.',
    ],
    businessChallenges: [
      'New coaching contacts had to be sorted by hand before follow-up could start.',
      'Delivering a long, structured program manually was slow and easy to get out of order.',
    ],
    keyFeatures: [
      'Automatic routing by program trigger.',
      'A structured 12-week delivery sequence.',
      'No manual sorting before follow-up starts.',
    ],
  },

  'coaching-business-pipeline-v2': {
    operationalValue: [
      'Reduces the number of contacts falling through the cracks, since more lead types have a matching path instead of one default sequence.',
      'Keeps the pipeline workable as the business adds more programs and lead types.',
    ],
    overview:
      "Built as an expansion of the original coaching pipeline, this GoHighLevel version adds more branches so contacts who don't fit the standard profile still get a sequence that fits them.",
    workflowProcess: [
      'A contact enters the workflow, same as the original pipeline.',
      'Branching logic evaluates their specific details instead of matching one default profile.',
      'The contact is routed down the matching follow-up path.',
      'The structured content sequence for that path is delivered automatically.',
    ],
    automationSolution: [
      'GoHighLevel workflows, expanded from the original version.',
      'Additional conditional branches for multiple follow-up paths.',
      'AI prompt steps for the content each path delivers.',
    ],
    businessChallenges: [
      'The original single-path pipeline could not account for contacts outside the standard profile.',
      'Contacts that did not fit the default profile fell through the cracks with no follow-up.',
    ],
    keyFeatures: [
      'More branches for more lead types.',
      'Follow-up sequences matched to each contact instead of a single default.',
      'Built on top of the original pipeline rather than replacing it.',
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
      'Make as the automation engine.',
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

  'multi-path-document-generator': {
    operationalValue: [
      'Turns each incoming request into a finished Google Doc without anyone assembling it by hand.',
      'Keeps every kind of request on its own dedicated path, so each one is handled the same way every time.',
    ],
    overview:
      'A Zapier automation that starts from a webhook, sorts each request into one of five paths, runs a long chain of Python code steps on that path, and finishes by creating a Google Doc from the result.',
    workflowProcess: [
      'A webhook catches the incoming request and starts the Zap.',
      'A Paths step checks the data and sends it down the matching branch, one of five.',
      'Each branch opens with its own path conditions, so only the right requests enter it.',
      'A chain of Python code steps processes the data and builds up the text, about sixteen steps on each path.',
      'The final step creates a Google Doc from the finished text.',
    ],
    automationSolution: [
      'Zapier as the automation platform.',
      'Webhooks by Zapier to catch the incoming request.',
      'Paths to split the flow into five separate sequences.',
      'Code by Zapier (Python) for the processing steps.',
      'Google Docs to create the finished document.',
    ],
    businessChallenges: [
      'Different kinds of requests needed different handling, which is hard to keep consistent by hand.',
      'Assembling a finished document from raw input was a repetitive manual job.',
    ],
    keyFeatures: [
      'Five parallel paths, each with its own conditions.',
      'A long chain of Python code steps on every path.',
      'Automatic document creation in Google Docs.',
      'Webhook trigger, so other tools can start it.',
    ],
  },

  'payments-tracking-audit': {
    operationalValue: [
      'Catches payment discrepancies right away instead of during a manual audit weeks later.',
      'Keeps the deal log spreadsheet updated automatically, so nobody cross-checks entries by hand.',
    ],
    overview:
      'Built for a business that needs incoming payments and deals recorded accurately, this GoHighLevel workflow updates a deal log spreadsheet automatically as payments and deal changes come in.',
    workflowProcess: [
      'A payment or deal update triggers the workflow.',
      'Conditions check the details of the update.',
      'The matching branch creates or updates the record in the deal log spreadsheet.',
      'Mismatches are flagged instead of passing silently.',
    ],
    automationSolution: [
      'GoHighLevel workflows with multiple triggers and conditional branches.',
      'Spreadsheet updates for the deal log.',
    ],
    businessChallenges: [
      'Reconciling payments by hand was manual and prone to missed or mismatched entries.',
      'Discrepancies often were not caught until a manual audit happened weeks later.',
    ],
    keyFeatures: [
      'Automatic deal log updates.',
      'Branching logic for different payment and deal situations.',
      'Mismatch flagging as records are updated.',
    ],
  },

  'post-purchase-review-request': {
    operationalValue: [
      'Sends the review request only to customers who actually showed up and paid, so it lands at the right moment.',
      'Keeps opportunity status and ad conversion data accurate without manual updates.',
    ],
    overview:
      'Built for a business that books appointments and wants reviews from paying customers, this GoHighLevel workflow tracks what each contact does after the appointment and requests a review at the right time.',
    workflowProcess: [
      'The workflow waits for the contact to click a confirmation link.',
      'A condition checks which link they clicked (showed and paid, showed but was not ready, or no show).',
      'For a paying customer, it waits until the purchase amount is entered, then marks the opportunity as won.',
      'A conversion event is sent to Facebook.',
      'The review request goes out.',
    ],
    automationSolution: [
      'GoHighLevel workflows with trigger-link tracking.',
      'Conditional branches by link clicked.',
      'Opportunity status updates and a Facebook Conversion API step.',
      'A built-in review request action.',
    ],
    businessChallenges: [
      'Asking for a review after every purchase meant remembering to follow up at the right time.',
      'Requests sent to people who did not buy, or did not show, were wasted or awkward.',
    ],
    keyFeatures: [
      'Link-click tracking to identify the outcome.',
      'Review request only after a confirmed purchase.',
      'Automatic opportunity-won update and conversion event.',
    ],
  },

  'review-workflow': {
    operationalValue: [
      'Makes sure 30, 60, and 90-day account reviews happen on schedule without anyone tracking dates by hand.',
      'Keeps the assigned account manager informed and prompted to act.',
    ],
    overview:
      'Built for a business that reviews client accounts at fixed milestones, this GoHighLevel workflow triggers each review, sends the review email or form, and notifies the assigned account manager.',
    workflowProcess: [
      'One of three triggers fires: the 30-day, 60-day, or 90-day review.',
      'A condition checks which milestone applies.',
      'The review email or form is sent.',
      'The assigned account manager is notified.',
      'After a wait, the account manager is notified again if it has not been actioned.',
    ],
    automationSolution: [
      'GoHighLevel workflows with multiple triggers and a condition split.',
      'Account manager assignment and notification steps.',
      'Timed waits between reminders.',
    ],
    businessChallenges: [
      'Milestone reviews depended on someone remembering to send them.',
      'Account managers were not always looped in at the right time.',
    ],
    keyFeatures: [
      'Separate 30, 60, and 90-day review paths.',
      'Automatic account manager assignment and notification.',
      'A follow-up reminder after a wait.',
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
