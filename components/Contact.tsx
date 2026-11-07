'use client'

import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  const contactChannels = [
    {
      id: '01',
      label: 'EMAIL',
      value: 'mikaeltegararyanta20031006@gmail.com',
      href: 'mailto:mikaeltegararyanta20031006@gmail.com?subject=Peluang%20Kerja%20-%20Mikael%20Tegar',
      isLink: true,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      id: '02',
      label: t('contact.phone'),
      value: '+62 821-1882-2079',
      href: 'https://wa.me/6282118822079?text=Halo%20Mikael,%20saya%20melihat%20portofolio%20Anda',
      isLink: true,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: '03',
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/mikael-tegar-a767893a1',
      href: 'https://www.linkedin.com/in/mikael-tegar-a767893a1/',
      isLink: true,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      id: '04',
      label: t('contact.instagram'),
      value: '@mikaeltegarr',
      href: 'https://www.instagram.com/mikaeltegarr/',
      isLink: true,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: '05',
      label: t('contact.location'),
      value: 'Cimahi Selatan, Jawa Barat',
      href: '#',
      isLink: false,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('contact.label')}</p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-8 tracking-tight">
              <TypewriterTitle
                text={t('contact.title')}
                className="whitespace-pre-line"
              />
            </h2>
            <p className="text-lg md:text-xl font-bold mb-3 text-[var(--foreground)]">
              {t('contact.tagline')}
            </p>
            <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-10 max-w-lg">
              {t('contact.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/CV_Mikael_Tegar.pdf"
                download
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-bold tracking-wider hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
              >
                {t('about.cv.link')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>

              <a
                href="mailto:mikaeltegararyanta20031006@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-sm font-semibold hover:border-[var(--muted)] hover:bg-[var(--foreground)]/5 transition-all"
              >
                mikaeltegararyanta20031006@gmail.com
              </a>
            </div>
          </div>

          {/* Right side - Contact channels (4 balanced cards) */}
          <div className="space-y-4">
            {contactChannels.map((item) => {
              const CardContent = (
                <div className="relative p-5 sm:p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center gap-4 sm:gap-5 hover:border-emerald-500/40 hover:shadow-lg hover:scale-[1.01] transition-all duration-200 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--foreground)] group-hover:text-emerald-500 group-hover:border-emerald-500/30 transition-colors shadow-sm">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0 pr-8">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] mb-1 font-semibold">
                      {item.label}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[var(--foreground)] truncate group-hover:text-emerald-500 transition-colors">
                      {item.value}
                    </p>
                  </div>

                  {item.isLink && (
                    <div className="text-[var(--muted)] group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l9.2-9.2M17 17V8H8" />
                      </svg>
                    </div>
                  )}

                  <span className="absolute top-3.5 right-4 text-xs font-mono font-bold text-emerald-500/80">
                    {item.id}
                  </span>
                </div>
              )

              return item.isLink ? (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="block focus:outline-none"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={item.id}>
                  {CardContent}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
