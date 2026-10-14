/* Starter legal templates. Have a qualified lawyer review and adapt before publishing. */

export interface LegalSection {
  id: string
  title: string
  paragraphs?: string[]
  items?: string[]
}

export interface LegalDoc {
  title: string
  description: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export const privacyPolicy: LegalDoc = {
  title: 'Privacy Policy',
  description: 'How Sproutix Infotech collects, uses and protects your personal information.',
  updated: '2026-10-01',
  intro:
    'Your privacy matters to us. This policy explains what information Sproutix Infotech collects when you use our website and services, how we use it and the choices you have.',
  sections: [
    {
      id: 'information-we-collect',
      title: 'Information we collect',
      paragraphs: ['We collect information you provide directly and information collected automatically when you visit our website.'],
      items: [
        'Contact details such as name, email address and phone number when you submit a form or email us.',
        'Project information you share when requesting a quote or consultation.',
        'Usage data such as pages visited, device type, browser and approximate location, collected through analytics tools.',
        'Cookies and similar technologies used to keep the site working and understand how it is used.',
      ],
    },
    {
      id: 'how-we-use-information',
      title: 'How we use your information',
      items: [
        'To respond to enquiries and provide proposals or services you request.',
        'To manage projects, invoices and client communication.',
        'To improve our website, content and services.',
        'To send updates or newsletters, only where you have agreed to receive them.',
        'To comply with legal obligations and protect against fraud or misuse.',
      ],
    },
    {
      id: 'sharing',
      title: 'Sharing your information',
      paragraphs: [
        'We do not sell your personal information. We may share it with trusted service providers — such as hosting, analytics, email and payment partners — who process it on our behalf under confidentiality obligations, or where required by law.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and analytics',
      paragraphs: [
        'We use cookies and analytics tools to understand traffic and improve performance. You can disable cookies in your browser settings, although parts of the site may not work as intended.',
      ],
    },
    {
      id: 'data-retention-security',
      title: 'Data retention and security',
      paragraphs: [
        'We keep personal information only as long as needed for the purposes described above or as required by law. We use reasonable technical and organisational measures to protect your data, but no method of transmission over the internet is completely secure.',
      ],
    },
    {
      id: 'your-rights',
      title: 'Your rights',
      paragraphs: ['Depending on where you live, you may have the right to:'],
      items: [
        'Access the personal information we hold about you.',
        'Request correction or deletion of your information.',
        'Object to or restrict certain processing.',
        'Withdraw consent for marketing communications at any time.',
      ],
    },
    {
      id: 'third-party-links',
      title: 'Third-party links',
      paragraphs: ['Our website may link to external sites. We are not responsible for their privacy practices and encourage you to read their policies.'],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      paragraphs: ['We may update this policy from time to time. The latest version will always be available on this page with the updated date shown above.'],
    },
    {
      id: 'contact',
      title: 'Contact us',
      paragraphs: ['If you have questions about this policy or wish to exercise your rights, please contact us at hello@sproutix.com.'],
    },
  ],
}

export const termsOfService: LegalDoc = {
  title: 'Terms of Service',
  description: 'The terms that apply when you use the Sproutix Infotech website and engage our services.',
  updated: '2026-10-01',
  intro:
    'These terms govern your use of the Sproutix Infotech website and the services we provide. By using our website or engaging us, you agree to these terms.',
  sections: [
    {
      id: 'services',
      title: 'Our services',
      paragraphs: [
        'Sproutix Infotech provides web and mobile app development, CMS development, graphic design, UI/UX design and digital marketing services. The specific scope, deliverables, timeline and fees for each project are set out in a written proposal or agreement.',
      ],
    },
    {
      id: 'engagements',
      title: 'Proposals, payments and timelines',
      items: [
        'Quotes are valid for 30 days unless stated otherwise.',
        'Projects begin after acceptance of the proposal and receipt of any agreed advance payment.',
        'Invoices are payable within the period stated on the invoice. Late payments may pause work.',
        'Timelines depend on timely feedback and content from the client.',
      ],
    },
    {
      id: 'client-responsibilities',
      title: 'Client responsibilities',
      paragraphs: [
        'You agree to provide accurate information, timely feedback and the necessary content and access. You confirm that you own or have permission to use any materials you supply.',
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual property',
      paragraphs: [
        'Upon full payment, you own the final deliverables created specifically for you. We retain ownership of our pre-existing tools, frameworks and know-how, and may display completed work in our portfolio unless we agree otherwise in writing.',
      ],
    },
    {
      id: 'revisions',
      title: 'Revisions and changes in scope',
      paragraphs: [
        'Each proposal includes a defined number of revision rounds. Requests outside the agreed scope may require a revised estimate and timeline.',
      ],
    },
    {
      id: 'warranties',
      title: 'Warranties and limitation of liability',
      paragraphs: [
        'We perform services with reasonable skill and care. Except where prohibited by law, we are not liable for indirect or consequential losses, and our total liability is limited to the fees paid for the relevant project.',
      ],
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality',
      paragraphs: ['Both parties agree to keep non-public business and technical information confidential and use it only for the purposes of the project.'],
    },
    {
      id: 'termination',
      title: 'Termination',
      paragraphs: ['Either party may end an engagement with written notice. You will pay for work completed up to the termination date.'],
    },
    {
      id: 'governing-law',
      title: 'Governing law',
      paragraphs: ['These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts in our registered city.'],
    },
    {
      id: 'contact',
      title: 'Contact',
      paragraphs: ['Questions about these terms? Email hello@sproutix.com.'],
    },
  ],
}
