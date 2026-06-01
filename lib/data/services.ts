import { Bot, Globe, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  slug:        string
  icon:        LucideIcon
  title:       string
  tagline:     string
  description: string
  bullets:     string[]
  href:        string
  color:       string  // CSS custom property or hex
}

export const SERVICES: Service[] = [
  {
    slug:        'ai-automation',
    icon:        Bot,
    title:       'AI Automation',
    tagline:     'Stop doing it manually.',
    description:
      'We build AI workflows that replace repetitive tasks — from inbox management to document processing to social media publishing. You describe the process; we automate it.',
    bullets: [
      'AI Chatbots & Virtual Assistants',
      'Document Processing & Extraction',
      'Social Media Automation',
      'Custom AI Workflow Agents',
      'Recommendation Engines',
    ],
    href:  '/services/ai-automation',
    color: '#3B82F6',
  },
  {
    slug:        'web-development',
    icon:        Globe,
    title:       'Web Development',
    tagline:     'Software that earns its keep.',
    description:
      'From landing pages to full SaaS platforms. We build with Next.js, React, and modern stacks — delivered fast, designed to scale, and measurably better for your business.',
    bullets: [
      'SaaS Platforms & Web Apps',
      'MVP Development (6-week avg)',
      'React / Next.js Applications',
      'Custom CMS & Admin Dashboards',
      'API Design & Integrations',
    ],
    href:  '/services/web-development',
    color: '#2563EB',
  },
  {
    slug:        'mobile-apps',
    icon:        Smartphone,
    title:       'Mobile Apps',
    tagline:     'One build. iOS + Android.',
    description:
      'Cross-platform apps that feel native. React Native and Flutter for teams who need to ship fast without building two separate codebases. Submitted to the App Store and Play Store.',
    bullets: [
      'Cross-Platform iOS + Android',
      'React Native & Flutter',
      'Native-Feel UI/UX',
      'Backend & API Integration',
      'App Store Submission',
    ],
    href:  '/services/mobile-apps',
    color: '#1D4ED8',
  },
]

export const STATS = [
  { value: 50,  suffix: '+', label: 'Products Shipped'      },
  { value: 6,   suffix: ' Wks', label: 'Average Delivery'  },
  { value: 10,  suffix: '+', label: 'Clients Served'        },
  { value: 3,   suffix: '',  label: 'Countries'              },
]
