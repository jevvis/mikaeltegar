'use client'

import { useState } from 'react'
import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'

const imgs = (key: string, n: number) => Array.from({ length: n }, (_, i) => `/projects/proj-${key}-${i + 1}.jpg`)

// Susunan seperti Template 1 (ProjectShowcase): kartu bergaya masonry. Foto dari folder klien (screenshot dan dokumentasi).
// Proyek 2 (Media Monitoring) belum punya foto.
const works: { id: number; images: string[] }[] = [
  { id: 1, images: imgs('sosro', 1) },
  { id: 2, images: [] },
  { id: 3, images: imgs('wuling', 3) },
  { id: 4, images: imgs('agency', 3) },
  { id: 5, images: imgs('umkm', 2) },
  { id: 6, images: imgs('kalaswara', 3) },
]

function ProjectCard({ id, images }: { id: number; images: string[] }) {
  const { t } = useLanguage()
  const [idx, setIdx] = useState(0)
  const multi = images.length > 1

  return (
    <article className="group break-inside-avoid mb-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300">
      {images.length > 0 ? (
        <div
          className={`relative aspect-[4/3] w-full overflow-hidden bg-[var(--background)] ${multi ? 'cursor-pointer' : ''}`}
          onClick={() => multi && setIdx((p) => (p + 1) % images.length)}
          title={multi ? t('ui.clickChange') : undefined}
        >
          <img src={images[idx]} alt={t(`proj.${id}.inst`)} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
          {multi && (
            <>
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium pointer-events-none">
                {idx + 1}/{images.length}
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIdx(i)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === idx ? 'w-6 bg-emerald-500 shadow-md' : 'w-2 bg-white/60 hover:bg-white/90'}`}
                    aria-label={`${t('ui.viewPhoto')} ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-32 bg-gradient-to-br from-emerald-500/15 via-[var(--card-bg)] to-[var(--card-bg)] text-emerald-500">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
            <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z" />
          </svg>
        </div>
      )}
      <div className="p-5 sm:p-6">
        <p className="text-[10px] tracking-[0.2em] uppercase text-emerald-500 font-semibold mb-2">
          {t(`proj.${id}.role`)} · {t(`proj.${id}.period`)}
        </p>
        <h3 className="text-lg font-bold leading-snug mb-1">{t(`proj.${id}.inst`)}</h3>
        <p className="text-[11px] font-semibold text-[var(--muted)] mb-3">{t(`proj.${id}.course`)}</p>
        <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4">{t(`proj.${id}.desc`)}</p>
        <div className="flex flex-wrap gap-1.5">
          {t(`proj.${id}.tags`).split('|').map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md border font-medium bg-[var(--background)] border-[var(--card-border)] text-[var(--muted)]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="works" className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('proj.section.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <TypewriterTitle text={t('proj.section.title')} />
          </h2>
          <p className="text-[var(--muted)] text-sm md:text-base max-w-xl">{t('proj.section.sub')}</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {works.map((w) => (
            <ProjectCard key={w.id} id={w.id} images={w.images} />
          ))}
        </div>
      </div>
    </section>
  )
}
