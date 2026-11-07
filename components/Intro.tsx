'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Layar pembuka: kapsul tergambar garis demi garis, nama muncul, lalu layar terbelah ke atas-bawah
 * dan hero terungkap bertahap (lihat .hero-anim di globals.css).
 * - Tampil di setiap muat ulang dan kunjungan baru; dilewati hanya bila datang dari halaman lain di situs ini (skrip di <head> di layout.tsx menyembunyikannya sebelum cat pertama).
 * - Bisa dilewati: klik, Esc, atau Enter.
 * - Pengaman: bila JavaScript gagal, CSS menyembunyikan layar ini sendiri setelah beberapa detik.
 */
const OPEN_AT_MS = 1900 // kapan layar mulai terbelah (setelah kapsul + nama selesai)
const HERO_AFTER_MS = 200 // hero mulai terungkap sesaat setelah layar mulai terbelah
const DONE_AFTER_MS = 1100 // layar disembunyikan setelah animasi belah selesai

export default function Intro() {
  const { lang } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.documentElement
    if (root.classList.contains('intro-done')) return // sudah dilihat di sesi ini

    root.classList.add('intro-lock')
    const timers: number[] = []
    let opened = false

    const open = () => {
      if (opened) return
      opened = true
      ref.current?.classList.add('is-open')
      timers.push(window.setTimeout(() => root.classList.add('hero-go'), HERO_AFTER_MS))
      timers.push(
        window.setTimeout(() => {
          root.classList.add('intro-done')
          root.classList.remove('intro-lock')
        }, DONE_AFTER_MS)
      )
    }

    const openTimer = window.setTimeout(open, OPEN_AT_MS)
    const skip = () => {
      window.clearTimeout(openTimer)
      open()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') skip()
    }
    window.addEventListener('keydown', onKey)
    const el = ref.current
    el?.addEventListener('click', skip)

    return () => {
      window.clearTimeout(openTimer)
      timers.forEach((t) => window.clearTimeout(t))
      window.removeEventListener('keydown', onKey)
      el?.removeEventListener('click', skip)
      root.classList.remove('intro-lock')
    }
  }, [])

  return (
    <div ref={ref} data-intro className="intro" role="presentation" aria-hidden="true">
      <div className="intro-panel intro-top" />
      <div className="intro-panel intro-bottom" />

      <div className="intro-content">
        <svg className="intro-capsule" viewBox="0 0 160 124" fill="none" aria-hidden="true">
          <path className="intro-cap-fill-left" d="M22 46h30L112 14v96L52 78H22a8 8 0 0 1-8-8V54a8 8 0 0 1 8-8z" />
          <path className="intro-cap-line" d="M22 46h30L112 14v96L52 78H22a8 8 0 0 1-8-8V54a8 8 0 0 1 8-8z" pathLength="100" />
          <path className="intro-cap-mid" d="M128 42c9 9 9 29 0 38M142 28c15 17 15 51 0 68M54 80l8 28h14l-6-28" pathLength="100" />
        </svg>
        <p className="intro-name">Mikael Tegar Aryanta Putra</p>
        <p className="intro-role">PUBLIC RELATIONS</p>
      </div>

      <p className="intro-skip">{lang === 'en' ? 'Click to skip' : 'Klik untuk melewati'}</p>
    </div>
  )
}
