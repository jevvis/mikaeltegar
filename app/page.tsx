import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WorkGallery from '@/components/WorkGallery'
import {
  AboutSection,
  EducationSection,
  AwardsSection,
  SkillsSection,
  PersonalSkillsSection,
} from '@/components/Sections'
import AcademicOrg from '@/components/AcademicOrg'
import ProjectsSection from '@/components/ProjectsSection'
import Contact from '@/components/Contact'
import FadeInSection from '@/components/FadeInSection'
import Intro from '@/components/Intro'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Intro />
      <Navbar />
      <Hero />
      <FadeInSection>
        <AboutSection />
      </FadeInSection>
      <FadeInSection>
        <EducationSection />
      </FadeInSection>
      <FadeInSection>
        <WorkGallery />
      </FadeInSection>
      <FadeInSection>
        <ProjectsSection />
      </FadeInSection>
      <FadeInSection>
        <AcademicOrg />
      </FadeInSection>
      <FadeInSection>
        <AwardsSection />
      </FadeInSection>
      <FadeInSection>
        <SkillsSection />
      </FadeInSection>
      <FadeInSection>
        <PersonalSkillsSection />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)]">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Mikael Tegar Aryanta Putra. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
