import { Globe, Linkedin, Mail } from 'lucide-react'
import { contactChannels, profile } from '@/data/portfolio'

const SOCIALS = [
  { icon: Linkedin, label: 'LinkedIn', key: 'linkedin' },
  { icon: Mail, label: 'Email', key: 'mail' },
  { icon: Globe, label: 'Upwork', key: 'Upwork' },
  { icon: Globe, label: 'OnlineJobs.ph', key: 'OnlineJobs.ph' },
] as const

function hrefFor(key: string) {
  return (
    contactChannels.find((c) => c.icon === key || c.label === key)?.href ?? '#'
  )
}

export function Footer() {
  return (
    <footer className="border-t border-fg/[0.06] bg-ink-2 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-xs text-body-dim">
          © 2023 {profile.name}. All rights reserved.
        </p>

        <ul className="flex items-center gap-5">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={hrefFor(social.key)}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="block text-body-dim transition-colors hover:text-accent-bright"
              >
                <social.icon className="size-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
