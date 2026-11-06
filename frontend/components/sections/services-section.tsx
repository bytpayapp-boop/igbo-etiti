import Link from 'next/link'
import {
  FileText,
  Baby,
  Archive,
  Image,
  Newspaper,
  Users,
} from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: 'Local Government ID',
      description: 'Apply for official local government identification with simplified online processing.',
      href: '/services/identification',
      index: '01',
    },
    {
      icon: Baby,
      title: 'Birth Certificate',
      description: 'Register and obtain certified birth certificates for vital records.',
      href: '/services/birth-certificate',
      index: '02',
    },
    {
      icon: Archive,
      title: 'Government Archive',
      description: 'Access historical records, reports, and official government documents.',
      href: '/archive',
      index: '03',
    },
    {
      icon: Image,
      title: 'Gallery',
      description: 'View community events, celebrations, and government activities.',
      href: '/gallery',
      index: '04',
    },
    {
      icon: Newspaper,
      title: 'News & Updates',
      description: 'Stay informed with latest announcements and development updates.',
      href: '/blog',
      index: '05',
    },
    {
      icon: Users,
      title: 'Staff Directory',
      description: 'Connect with government officials and department heads.',
      href: '/staff',
      index: '06',
    },
  ]

  return (
    <section className="landing-band paper-panel py-16 md:py-20">
      <div className="landing-wrap">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="eyebrow">Citizen services</p>
            <h2 className="text-3xl text-foreground md:text-5xl">What you can do here</h2>
            <div className="gold-rule" />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
            Essential records, public information, and staff contact — structured for a faster visit to government.
          </p>
        </div>

        <div className="landing-services overflow-hidden rounded-sm">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex min-h-[11rem] flex-col justify-between bg-background p-6 transition hover:bg-[color-mix(in_oklch,var(--gold)_10%,white)]"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-6 w-6 text-[var(--gold)] transition group-hover:scale-110" />
                  <span className="font-display text-sm tracking-widest text-muted-foreground group-hover:text-[var(--gold)]">
                    {service.index}
                  </span>
                </div>
                <div className="mt-8 space-y-2">
                  <h3 className="font-sans text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
