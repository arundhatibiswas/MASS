export interface Project {
  slug:      string
  name:      string
  client:    string
  industry:  string
  location:  string
  services:  string[]
  challenge: string
  results:   { metric: string; value: string }[]
  liveUrl?:  string
  featured:  boolean
}

export const PROJECTS: Project[] = [
  {
    slug:     'dr-vijay-plastic-surgery',
    name:     "Dr. Vijay's Plastic & Cosmetic Surgery Center",
    client:   'Dr. B. Vijay (MCh)',
    industry: 'Healthcare',
    location: 'Vijayawada, India',
    services: ['SEO Website', 'Google My Business', 'Social Presence'],
    challenge:
      'No digital presence — patients were unable to find the clinic online despite the surgeon holding international fellowship credentials.',
    results: [
      { metric: 'Conversion Rate',   value: '+45%' },
      { metric: 'Brand Awareness',   value: '+38%' },
      { metric: 'Online Visibility', value: 'From 0' },
    ],
    liveUrl: 'https://www.drvijayplasticsurgery.com/',
    featured: true,
  },
  {
    slug:     'inventrics-technologies',
    name:     'Inventrics Technologies',
    client:   'Venkat Kurmana (Director)',
    industry: 'IT Staffing & Consulting',
    location: 'Hyderabad, India',
    services: ['Website', 'SEO', 'Local Digital Strategy'],
    challenge:
      'No digital presence — the company was spending budget on physical brochures and newspaper ads with no measurable ROI.',
    results: [
      { metric: 'Conversion Rate',         value: '+43%' },
      { metric: 'Local Awareness',         value: '+57%' },
      { metric: 'International Awareness', value: '+14%' },
      { metric: 'Delivery Time',           value: '<10 days' },
      { metric: 'Marketing Cost',          value: '-65%' },
    ],
    liveUrl: 'https://inventricstechnologies.com/',
    featured: true,
  },
]

/** Projects shown on the /work grid as teasers (unlocked via Sanity) */
export const TEASER_PROJECTS = [
  { slug: 'logistics-ai-automation',  name: 'Logistics Automation',    industry: 'Logistics',       location: 'Hyderabad, India',     services: ['AI Automation', 'Workflow'] },
  { slug: 'retail-saas-mvp',          name: 'Retail SaaS MVP',         industry: 'Retail',          location: 'Bangalore, India',     services: ['SaaS MVP', 'Web App'] },
  { slug: 'staffing-ai-chatbot',      name: 'Staffing AI Chatbot',     industry: 'US Staffing',     location: 'Texas, USA',           services: ['AI Chatbot', 'Automation'] },
  { slug: 'finance-mobile-app',       name: 'Finance Mobile App',      industry: 'Finance',         location: 'Chicago, USA',         services: ['Mobile App', 'iOS + Android'] },
  { slug: 'education-tools',          name: 'Education Automation',    industry: 'Education',       location: 'Andhra Pradesh, India', services: ['AI Automation', 'Teacher Tools'] },
  { slug: 'retail-london',            name: 'Retail Brand Website',    industry: 'Retail',          location: 'London, UK',           services: ['SaaS MVP', 'Web'] },
  { slug: 'it-services-virginia',     name: 'IT Services Platform',    industry: 'IT Services',     location: 'Virginia, USA',        services: ['Web App', 'AI Features'] },
  { slug: 'saas-austin',              name: 'SaaS + Mobile Platform',  industry: 'SaaS',            location: 'Austin, USA',          services: ['Mobile App', 'AI Automation'] },
]
