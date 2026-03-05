import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import SectionReveal from '../components/SectionReveal'

const sections = [
  {
    title: 'Information We Collect',
    content: 'We collect information you voluntarily provide when contacting us, including your name, email address, phone number, and any message you submit. We do not collect sensitive personal data unless explicitly required.',
  },
  {
    title: 'How We Use Your Information',
    content: 'Information provided through our contact form is used solely to respond to your enquiry. We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law.',
  },
  {
    title: 'Data Security',
    content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
  },
  {
    title: 'Cookies',
    content: 'Our website may use basic cookies to improve your browsing experience. You can choose to disable cookies in your browser settings without affecting core site functionality.',
  },
  {
    title: 'Third-Party Links',
    content: 'Our website may contain links to external websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.',
  },
  {
    title: 'Your Rights',
    content: 'You have the right to request access to, correction of, or deletion of any personal information we hold about you. Contact us at info@lainfra.com to exercise these rights.',
  },
  {
    title: 'Updates to This Policy',
    content: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.',
  },
]

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy – LA Infra"
        description="LA Infra's privacy policy explaining how we collect, use, and protect your personal information."
        url="https://lainfra.com/privacy-policy"
        breadcrumbs={[{ name: 'Privacy Policy', path: '/privacy-policy' }]}
      />

      <section className="bg-forest pt-32 pb-16">
        <div className="container-site">
          <SectionReveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-cream/40 font-body">
                <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
                <li className="text-cream/20">/</li>
                <li className="text-cream/60">Privacy Policy</li>
              </ol>
            </nav>
            <h1 className="font-display text-display-md text-cream mb-3">Privacy Policy</h1>
            <p className="text-cream/50 font-body text-sm">Effective Date: January 1, 2025</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-site max-w-3xl">
          <SectionReveal>
            <p className="text-forest/70 font-body leading-relaxed mb-10">
              LA Infra ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or contact us.
            </p>
            <div className="space-y-8">
              {sections.map((s, i) => (
                <div key={i} className="border-t border-brand-100 pt-8">
                  <h2 className="font-display text-xl font-semibold text-forest mb-3">
                    {i + 1}. {s.title}
                  </h2>
                  <p className="text-forest/70 font-body leading-relaxed">{s.content}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-brand-50 border border-brand-200 rounded-sm">
              <p className="font-body text-sm text-forest/70">
                For privacy-related enquiries, please contact us at{' '}
                <a href="mailto:info@lainfra.com" className="text-brand-700 hover:underline">info@lainfra.com</a>
                {' '}or call{' '}
                <a href="tel:+919666088822" className="text-brand-700 hover:underline">+91 96660 88822</a>.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
