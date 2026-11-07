'use client'

import { useState } from 'react'
import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'

// Susunan seperti Template 1 (TrainingsSection): kolase di kiri, kartu organisasi di kanan.
// Klien hanya mengirim satu gambar organisasi (sertifikat peserta The Perfection); kotak lain berupa tile inisial, bukan foto.
const orgIds = [1, 2, 3]

export default function AcademicOrg() {
  const { t } = useLanguage()
  const [hoveredOrgId, setHoveredOrgId] = useState<number | null>(null)

  const wrapperClass = (ids: number[]) => {
    const isMatch = hoveredOrgId !== null && ids.includes(hoveredOrgId)
    const isDimmed = hoveredOrgId !== null && !isMatch
    if (isMatch) return 'ring-2 ring-emerald-500 shadow-2xl scale-105 z-20 border-emerald-500/60 opacity-100'
    if (isDimmed) return 'opacity-35 scale-[0.96] border-[var(--card-border)]/50'
    return 'opacity-90 scale-100 hover:opacity-100 hover:scale-105 border-[var(--card-border)] shadow-md'
  }
  const hover = (id: number) => ({ onMouseEnter: () => setHoveredOrgId(id), onMouseLeave: () => setHoveredOrgId(null) })
  const tile = 'w-full rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer relative'
  const textTile = 'flex flex-col items-center justify-center text-center p-3 bg-gradient-to-br from-emerald-500/25 via-[var(--card-bg)] to-[var(--card-bg)]'

  return (
    <section id="trainings" className="relative py-24 px-4 md:px-8 overflow-x-clip font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Kiri: kolase, tersambung ke kartu organisasi */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 pr-0 lg:pr-4 lg:sticky lg:top-24 select-none">
            <div className="flex flex-col gap-3 sm:gap-4 -translate-y-4">
              <div {...hover(1)} className={`${tile} aspect-[4/5] bg-white ${wrapperClass([1])}`} title={t('org.1.inst')}>
                <img src="/projects/org-perfection-1.jpg" alt={t('org.1.inst')} className="w-full h-full object-contain" />
              </div>
              <div {...hover(2)} className={`${tile} aspect-square ${textTile} ${wrapperClass([2])}`}>
                <span className="font-oswald text-5xl font-bold text-emerald-500 leading-none">OMK</span>
                <span className="mt-2 text-[10px] tracking-widest uppercase text-[var(--muted)] font-semibold">{t('org.2.role')}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 translate-y-3">
              <div {...hover(3)} className={`${tile} aspect-square ${textTile} ${wrapperClass([3])}`}>
                <span className="font-oswald text-4xl font-bold text-emerald-500 leading-none">DNA</span>
                <span className="mt-2 text-[10px] tracking-widest uppercase text-[var(--muted)] font-semibold">{t('org.3.role')}</span>
              </div>
              <div {...hover(1)} className={`${tile} aspect-[4/5] ${textTile} ${wrapperClass([1, 3])}`}>
                <span className="font-oswald text-4xl font-bold text-emerald-500 leading-none">HIMA</span>
                <span className="font-oswald text-2xl font-bold text-[var(--foreground)] leading-none mt-1">DIGITAL PR</span>
                <span className="mt-3 text-[10px] tracking-widest uppercase text-[var(--muted)] font-semibold">Telkom University</span>
              </div>
            </div>
          </div>

          {/* Kanan: kartu organisasi */}
          <div className="lg:col-span-7 flex flex-col gap-4 font-sans">
            {orgIds.map((n) => {
              const isSelected = hoveredOrgId === n
              const hasDesc = t(`org.${n}.desc`) !== ''
              const hasPeriod = t(`org.${n}.period`) !== ''
              return (
                <div
                  key={n}
                  {...hover(n)}
                  className={`group p-6 rounded-3xl bg-[var(--card-bg)] border transition-all duration-300 shadow-sm flex flex-col ${
                    isSelected ? 'border-emerald-500/70 shadow-lg -translate-y-1 ring-1 ring-emerald-500/30' : 'border-[var(--card-border)] hover:border-[var(--muted)]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-[var(--background)] border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'border-emerald-500/50 text-emerald-500 bg-emerald-500/10' : 'border-[var(--card-border)] text-[var(--muted)] group-hover:text-[var(--foreground)]'
                        }`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div>
                        <h3 className={`font-bold text-base sm:text-lg transition-colors ${isSelected ? 'text-emerald-500' : 'text-[var(--foreground)] group-hover:text-emerald-500'}`}>{t(`org.${n}.inst`)}</h3>
                        <p className="text-xs font-semibold text-[var(--muted)]">{t(`org.${n}.role`)}</p>
                      </div>
                    </div>
                    {hasPeriod && (
                      <span
                        className={`text-[10px] tracking-wider px-2.5 py-1 rounded-full border self-start sm:self-auto shrink-0 font-medium transition-colors ${
                          isSelected ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30' : 'bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)]'
                        }`}
                      >
                        {t(`org.${n}.period`)}
                      </span>
                    )}
                  </div>

                  {hasDesc && <p className="text-[var(--muted)] text-xs sm:text-sm leading-relaxed mb-4 mt-2">{t(`org.${n}.desc`)}</p>}

                  <div className="flex items-center justify-between pt-2 mt-2 border-t border-[var(--card-border)]/50">
                    <div className="flex flex-wrap gap-1.5">
                      {t(`org.${n}.tags`).split('|').map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] px-2 py-0.5 rounded-md border font-medium transition-colors ${
                            isSelected ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {n === 1 && (
                    <a href="/projects/cert-perfection-1.jpg" target="_blank" rel="noopener noreferrer" className="mt-4 pt-3 border-t border-[var(--card-border)]/40 w-full text-xs font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity">
                      {t('awards.viewOriginal')}
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
