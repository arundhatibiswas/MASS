import { CtaBanner } from '@/components/home/CtaBanner'

export const metadata = {
  title:       'Privacy Policy — MASS',
  description: 'MASS LLC privacy policy. How we collect, use, and protect your personal data.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = '12 May 2026'

  return (
    <>
      <section
        style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)', paddingBottom: 'var(--section-py, 96px)' }}
        aria-label="Privacy Policy"
      >
        <div className="container-mass" style={{ maxWidth: '760px' }}>

          <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Legal</p>
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2rem, 4vw, 2.8rem)',
              fontWeight:    300,
              letterSpacing: '-0.06em',
              lineHeight:    1.1,
              color:         'var(--color-text)',
              marginBottom:  '16px',
            }}
          >
            Privacy Policy
          </h1>
          <p className="label" style={{ color: 'var(--color-muted)', marginBottom: '48px' }}>
            Last updated: {lastUpdated}
          </p>

          {[
            {
              title: '1. Who we are',
              body: 'MASS LLC (&ldquo;MASS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a software and AI automation agency. Our website address is mass.llc. Our primary contact email is work.ratananmol@gmail.com.',
            },
            {
              title: '2. What data we collect',
              body: `We collect the following categories of personal data:

<strong>Contact form submissions:</strong> Name, email address, company name, service interest, budget range, and message content. This data is collected when you submit our contact form.

<strong>Waitlist submissions:</strong> Name, email address, and optionally company name. Collected when you join a product waitlist.

<strong>Analytics data:</strong> We use Google Analytics 4 (GA4) to collect anonymised usage data including page views, session duration, referral sources, and device type. This data is aggregated and does not identify you personally.

<strong>Cookies:</strong> We use a single analytics cookie (Google Analytics) to understand how visitors use our site. We do not use advertising or tracking cookies.`,
            },
            {
              title: '3. How we use your data',
              body: `We use your personal data exclusively for:
<ul style="margin-top:8px;margin-left:20px;display:flex;flex-direction:column;gap:4px;">
<li>Responding to contact form enquiries</li>
<li>Notifying you when a waitlisted product becomes available</li>
<li>Understanding aggregate site usage to improve our service</li>
</ul>
We do not sell, rent, or share your personal data with third parties for marketing purposes.`,
            },
            {
              title: '4. Legal basis for processing (EU/UK visitors)',
              body: `Under GDPR and UK GDPR, we process your data on the following legal bases:

<strong>Legitimate interest:</strong> Responding to enquiries you initiate via our contact form.

<strong>Consent:</strong> Analytics cookies and waitlist signups. You can withdraw consent for analytics cookies at any time by clearing your browser cookies and not consenting again on return.

<strong>Contract:</strong> Processing data necessary to deliver services you have engaged us for.`,
            },
            {
              title: '5. Data storage and transfers',
              body: `Contact form submissions are stored in Google Sheets (Google LLC, USA). Google is certified under the EU-US Data Privacy Framework.

Waitlist submissions are stored in the same Google Sheets infrastructure.

Website analytics are processed by Google Analytics 4 (Google LLC, USA) with IP anonymisation enabled.

Our website is hosted on Hostinger (Hostinger International Ltd). All data in transit is encrypted via TLS/HTTPS.`,
            },
            {
              title: '6. How long we keep your data',
              body: `Contact form submissions: retained for 24 months from the date of submission, or until you request deletion.

Waitlist data: retained until the product launches and you receive your notification, or until you request removal.

Analytics data: Google Analytics data is retained for 14 months per our GA4 configuration.`,
            },
            {
              title: '7. Your rights',
              body: `If you are located in the EU, UK, or a jurisdiction with applicable privacy laws, you have the right to:
<ul style="margin-top:8px;margin-left:20px;display:flex;flex-direction:column;gap:4px;">
<li><strong>Access:</strong> Request a copy of the data we hold about you</li>
<li><strong>Rectification:</strong> Correct inaccurate data</li>
<li><strong>Erasure:</strong> Request deletion of your data</li>
<li><strong>Restriction:</strong> Request that we limit how we use your data</li>
<li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
<li><strong>Object:</strong> Object to processing based on legitimate interest</li>
</ul>
To exercise any of these rights, email us at work.ratananmol@gmail.com. We will respond within 30 days.`,
            },
            {
              title: '8. Cookies',
              body: `We use one category of cookie:

<strong>Analytics (Google Analytics 4):</strong> Used to understand aggregate website traffic. These cookies collect anonymised data and do not identify you personally. They are set only after cookie consent is given (EU/UK visitors) or on first visit (non-EU visitors).

You can refuse or delete cookies at any time via your browser settings. Refusing analytics cookies will not affect your ability to use our website.`,
            },
            {
              title: '9. Third-party services',
              body: `Our website integrates the following third-party services:
<ul style="margin-top:8px;margin-left:20px;display:flex;flex-direction:column;gap:4px;">
<li><strong>Google Analytics 4</strong> — website analytics (Google LLC, USA)</li>
<li><strong>Google Sheets</strong> — contact form and waitlist storage (Google LLC, USA)</li>
<li><strong>Calendly</strong> — booking system for scoping calls (Calendly LLC, USA)</li>
<li><strong>Sanity.io</strong> — content management system (Sanity Inc, USA)</li>
</ul>
Each of these services has its own privacy policy. We recommend reviewing them if you use those integrations.`,
            },
            {
              title: '10. Children\'s privacy',
              body: 'Our services are not directed at children under 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately.',
            },
            {
              title: '11. Changes to this policy',
              body: 'We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. We will not notify you of minor clarifications, but material changes affecting your rights will be communicated via the contact email you provided (if applicable).',
            },
            {
              title: '12. Contact',
              body: 'For any privacy-related questions, requests, or complaints, contact us at: work.ratananmol@gmail.com. We aim to respond within 5 business days.',
            },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: '36px' }}>
              <h2
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      '1.15rem',
                  fontWeight:    700,
                  color:         'var(--color-text)',
                  letterSpacing: '-0.01em',
                  marginBottom:  '12px',
                }}
              >
                {section.title}
              </h2>
              <div
                style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: section.body }}
              />
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
