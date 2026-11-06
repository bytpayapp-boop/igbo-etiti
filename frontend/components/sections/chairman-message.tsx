'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Facebook, X, Youtube } from 'lucide-react'

export function ChairmanMessage() {
  return (
    <article className="relative min-h-[32rem] overflow-hidden bg-[var(--ink)] text-white">
      <Image
        src="/images/staff/Ugo-Ferdinand3.png"
        alt="Chairman Igbo-Etiti"
        fill
        className="object-cover object-top opacity-70"
        sizes="(max-width: 960px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
      <div className="relative z-10 flex h-full min-h-[32rem] flex-col justify-end p-8 md:p-12">
        <p className="eyebrow mb-3">A message from</p>
        <h2 className="max-w-md text-3xl leading-tight md:text-4xl">
          Hon. Barr. Ugo-Ferdinand Ukwueze
        </h2>
        <p className="mt-2 font-medium text-[var(--gold)]">Executive Chairman</p>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
          Welcome to the official portal of our local government. We are committed to serving our community with integrity, transparency, and dedication. This e-governance platform makes services more accessible and keeps citizens informed about development across our jurisdiction.
        </p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
          Collaborative governance is our standard. Engage through our services and forums. This commitment aligns with the vision of His Excellency, <b>Dr. Peter Ndubuisi Mbah</b>.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link href="/staff">
            <Button className="rounded-sm bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold)]/90">
              View staff organogram
            </Button>
          </Link>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/ugoferdinand.ukwueze" target="_blank" rel="noopener noreferrer" className="text-white/80 transition hover:text-[var(--gold)]">
              <Facebook size={20} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white/80 transition hover:text-[var(--gold)]">
              <X size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/80 transition hover:text-[var(--gold)]">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
