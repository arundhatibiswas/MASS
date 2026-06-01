import { HeroSection }   from '@/components/home/HeroSection'
import { StatsBar }       from '@/components/home/StatsBar'
import { WorkPreview }    from '@/components/home/WorkPreview'
import { ServicePillars } from '@/components/home/ServicePillars'
import { Testimonials }   from '@/components/home/Testimonials'
import { CtaBanner }      from '@/components/home/CtaBanner'

export const metadata = {
  title:       'MASS — AI Automation & Software Agency',
  description:
    'Custom AI agents and software for US & EU businesses. Delivered in weeks, not months. AI automation, web development, mobile apps.',
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — split layout, left-aligned headline */}
      <HeroSection />

      {/* 2. Stats strip — social proof immediately after hero */}
      <StatsBar />

      {/* 3. Work grid — 2×2 project cards */}
      <WorkPreview />

      {/* 4. Services — sticky scroll, one service per viewport */}
      <ServicePillars />

      {/* 5. Testimonials — dual-row auto-scrolling marquee */}
      <Testimonials />

      {/* 6. CTA — left-aligned text link */}
      <CtaBanner />
    </>
  )
}
