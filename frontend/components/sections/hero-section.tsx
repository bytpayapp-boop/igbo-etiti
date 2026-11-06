'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FileText, FileUser, GlobeIcon, MessageCircle, SearchCheck } from 'lucide-react'

export function HeroSection() {
  const router = useRouter()

  const features = [
    {
      icon: GlobeIcon,
      title: 'E-Governance',
      description: 'Services delivered through a modern digital portal.',
    },
    {
      icon: SearchCheck,
      title: 'Transparent Progress',
      description: 'Track past, current, and upcoming development.',
    },
    {
      icon: FileText,
      title: 'Vital Documents',
      description: 'Birth certificates and identification, online.',
    },
    {
      icon: MessageCircle,
      title: 'Citizen Voice',
      description: 'Send a confidential message to the administration.',
    },
  ]

  return (
    <section className="landing-band ink-panel relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 82% 12%, color-mix(in oklch, var(--gold) 32%, transparent), transparent 52%), radial-gradient(ellipse at 8% 88%, color-mix(in oklch, var(--faded-green) 28%, transparent), transparent 48%)',
        }}
      />
      <div className="landing-wrap relative">
        <div className="landing-hero">
          <div className="flex flex-col justify-center gap-8">
            <div className="space-y-5">
              <p className="eyebrow">
                <span className="h-px w-8 bg-[var(--gold)]" />
                Official portal
              </p>
              <h1 className="max-w-xl text-5xl leading-[0.95] text-foreground md:text-6xl lg:text-7xl">
                Igbo-Etiti
                <span className="mt-2 block text-[var(--gold)]">Local Government</span>
              </h1>
              <div className="gold-rule" />
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                Progress Agenda. Tomorrow is here — access services, follow development, and engage your local administration.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/birth-certificate"
                className="inline-flex items-center gap-2 rounded-sm bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-[#111] transition hover:brightness-110"
              >
                <FileText className="h-4 w-4" />
                Birth Certificate
              </Link>
              <Link
                href="/services/identification"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                <FileUser className="h-4 w-4" />
                ID Certificate
              </Link>
              <button
                type="button"
                onClick={() => router.push('/anonymous-message')}
                className="inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:text-[var(--gold)]"
              >
                <MessageCircle className="h-4 w-4" />
                Drop a message
              </button>
            </div>
          </div>

          <div className="landing-bento">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <article key={feature.title} className="glass-card">
                  <Icon className="h-6 w-6 text-[var(--gold)]" />
                  <div className="mt-8">
                    <h3 className="glass-card__title">{feature.title}</h3>
                    <p className="glass-card__body">{feature.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
