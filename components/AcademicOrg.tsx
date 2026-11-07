'use client'

import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'

// Klien hanya mengirim satu gambar untuk organisasi: sertifikat peserta The Perfection (kartu 1). Kartu lain berupa teks.
const orgs: { n: number; image?: string }[] = [
  { n: 1, image: '/projects/org-perfection-1.jpg' },
  { n: 2 },
  { n: 3 },
]

export default function AcademicOrg() {
  const { t } = useLanguage()

  return (
    <section id="trainings" className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('trainings.label')}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <TypewriterTitle text={t('trainings.title')} />
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-xs font-semibold tracking-wider text-[var(--muted)] shrink-0 w-max">
            {t('trainings.campus')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {orgs.map(({ n, image }) => (
            <div
              key={n}
              className="group rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-emerald-500/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm flex flex-col overflow-hidden"
            >
              {image && (
                <a href="/projects/cert-perfection-1.jpg" target="_blank" rel="noopener noreferrer" className="block aspect-[16/10] w-full overflow-hidden bg-white border-b border-[var(--card-border)]">
                  <img src={image} alt={t(`org.${n}.inst`)} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                </a>
              )}
              <div className="p-6 sm:p-7 flex flex-col grow">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-wider px-2.5 py-1 rounded-full border bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)] font-medium shrink-0">
                    {t(`org.${n}.period`)}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug mb-1 group-hover:text-emerald-500 transition-colors">{t(`org.${n}.inst`)}</h3>
                <p className="text-sm font-semibold text-emerald-500 mb-5">{t(`org.${n}.role`)}</p>
                <div className="flex flex-wrap gap-1.5 pt-3 mt-auto border-t border-[var(--card-border)]/50">
                  {t(`org.${n}.tags`).split('|').map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md border font-medium bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
