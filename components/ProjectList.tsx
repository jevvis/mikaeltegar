'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Magang Marketing Communication", en: "Marketing Communication Internship" },
    description: { id: "Konten media sosial, desain digital, dan pengolahan data perusahaan (Agu 2025 — Jun 2026).", en: "Social media content, digital design, and company data processing (Aug 2025 — Jun 2026)." },
    framework: "TELKOMEDIKA",
    techStack: ["Konten", "Media Sosial"],
  },
  {
    number: '02',
    title: { id: "Admin Finance Operasional (Paruh Waktu)", en: "Operational Finance Admin (Part-Time)" },
    description: { id: "Daftar kebutuhan operasional, faktur, dan berkas pembelian (Jul 2023 — sekarang).", en: "Operational needs list, invoices, and purchase files (Jul 2023 — present)." },
    framework: "PT SRIKANDI PODOMULYO",
    techStack: ["Administrasi", "Arsip"],
  },
  {
    number: '03',
    title: { id: "Analisis Situasional Krisis PT Sinar Sosro", en: "Sinar Sosro Situational Crisis Analysis" },
    description: { id: "Wawancara, transkrip, dan presentasi analisis krisis (2024).", en: "Interview, transcript, and crisis analysis presentation (2024)." },
    framework: "MANAJEMEN REPUTASI DAN KRISIS",
    techStack: ["Krisis", "Wawancara"],
  },
  {
    number: '04',
    title: { id: "Media Monitoring", en: "Media Monitoring" },
    description: { id: "Excel media monitoring akun media sosial dan presentasi hasilnya (2024).", en: "Excel media monitoring of social media accounts and a presentation of results (2024)." },
    framework: "OPINI PUBLIK",
    techStack: ["Monitoring", "Excel"],
  },
  {
    number: '05',
    title: { id: "Analisis Media Sosial Brand Wuling", en: "Wuling Social Media Analysis" },
    description: { id: "Analisis dengan Brand 24 dan AMEC, termasuk analisis konten dan KPI (2024).", en: "Analysis with Brand 24 and AMEC, including content and KPI analysis (2024)." },
    framework: "RISET PENGUKURAN HUMAS",
    techStack: ["Brand 24", "AMEC"],
  },
  {
    number: '06',
    title: { id: "Agensi Kreatif", en: "Creative Agency" },
    description: { id: "Membuat agensi kreatif, konten, media sosial, dan script konten (2025).", en: "Built a creative agency, content, social media, and content scripts (2025)." },
    framework: "INDUSTRI KREATIF",
    techStack: ["Konten", "Script"],
  },
  {
    number: '07',
    title: { id: "Pendampingan UMKM", en: "MSME Mentoring" },
    description: { id: "Empat kali pendampingan dan presentasi hasil bersama kelompok (2025).", en: "Four mentoring meetings and a group presentation of results (2025)." },
    framework: "KOMUNIKASI PERUBAHAN SOSIAL",
    techStack: ["UMKM", "Pendampingan"],
  },
  {
    number: '08',
    title: { id: "Project Bring Your Tumbler bersama Kalaswara", en: "Bring Your Tumbler Project with Kalaswara" },
    description: { id: "Identitas merek, perilaku ramah lingkungan, dan cerita kopi lokal (2025).", en: "Brand identity, eco-friendly behavior, and local coffee stories (2025)." },
    framework: "MANAJEMEN PORTOFOLIO",
    techStack: ["Branding", "Kampanye"],
  },
  {
    number: '09',
    title: { id: "Staf Logistik The Perfection", en: "Logistics Staff, The Perfection" },
    description: { id: "Himpunan Mahasiswa Digital Public Relations (2023 — 2024).", en: "Digital Public Relations Student Association (2023 — 2024)." },
    framework: "HIMA DIGITAL PR",
    techStack: ["Logistik"],
  },
  {
    number: '10',
    title: { id: "Ketua OMK Wilayah", en: "Head of OMK Region" },
    description: { id: "Orang Muda Katolik wilayah (2021 — 2026).", en: "Regional Catholic Youth (2021 — 2026)." },
    framework: "OMK",
    techStack: ["Ketua", "Kepemimpinan"],
  },
  {
    number: '11',
    title: { id: "Staf Dekorasi Digital Nation Ambassador", en: "Decoration Staff, Digital Nation Ambassador" },
    description: { id: "Himpunan Mahasiswa Digital Public Relations (2024).", en: "Digital Public Relations Student Association (2024)." },
    framework: "HIMA DIGITAL PR",
    techStack: ["Dekorasi"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'PUBLIC RELATIONS PORTFOLIO & EXPERIENCE' : 'PORTOFOLIO PUBLIC RELATIONS & PENGALAMAN'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Work, Project & Organizational Experience' : 'Pengalaman Kerja, Proyek & Organisasi'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of work, project, and organizational experience in public relations.'
              : 'Rekam jejak pengalaman kerja, proyek, dan organisasi di bidang public relations.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
