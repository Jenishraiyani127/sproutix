import type { IconType } from 'react-icons'
import { LuBuilding2, LuCalculator, LuHouse, LuStethoscope, LuUtensils } from 'react-icons/lu'

export type WorkCategory = 'Web' | 'App' | 'Web & App' | 'CMS' | 'Design' | 'UI/UX' | 'Marketing'

export interface Project {
  slug: string
  title: string
  industry: string
  category: WorkCategory
  /** e.g. "Web application", shown in the facts panel. */
  platform: string
  /** One-line summary used on cards and in meta descriptions. */
  summary: string
  /** Short capability line shown on project cards. */
  result: string
  tags: string[]
  /** Service slugs (see services.ts). */
  services: string[]
  tech: string[]
  /** Poster image in /public. Projects without one render a branded placeholder. */
  cover?: string
  /** 1200×675 JPG for social sharing. */
  ogImage?: string
  icon: IconType
  accent: [string, string]
  overview: string[]
  /** Objective, target users, core experience … */
  facts: Array<{ label: string; value: string }>
  challenges: string[]
  solution: Array<{ title: string; text: string }>
  modules: Array<{ title: string; items: string[] }>
  journey?: { title: string; steps: Array<{ title: string; text: string }> }
  roles?: Array<{ title: string; text: string; points: string[] }>
  spotlight?: { eyebrow: string; title: string; text: string; points: string[] }
  outcomes: string[]
  seo: { title: string; description: string; keywords: string[] }
}

export const projects: Project[] = [
  {
    slug: 'navratri-food-stall',
    title: 'Navratri Food Stall',
    industry: 'Food & Hospitality',
    category: 'Web',
    platform: 'Web application · QR ordering & POS',
    summary:
      'A food-stall and restaurant management platform with QR ordering, POS billing, a live kitchen screen, online payments and detailed reports.',
    result: 'QR ordering · POS billing · Live kitchen',
    tags: ['QR Ordering', 'POS Billing', 'Payments'],
    services: ['web-development', 'ui-ux-design'],
    tech: ['QR code ordering', 'Real-time order updates', 'Razorpay', 'PhonePe', 'Paytm', 'Stripe'],
    cover: '/projects/navratri-food-stall.webp',
    ogImage: '/projects/navratri-food-stall-og.jpg',
    icon: LuUtensils,
    accent: ['#ff6a1a', '#e11d48'],
    overview: [
      'The Navratri Food Stall Management Platform is a digital solution built to simplify food ordering and stall operations during busy periods such as Navratri festivals, food fairs and peak restaurant hours.',
      'Vendors register their stall, manage menus, generate a stall-specific QR code and accept customer orders without any login. Orders flow into a live kitchen dashboard, while counter-based POS billing, online and cash payments, order history, analytics and sales reports keep digital and in-person orders in one system.',
    ],
    facts: [
      { label: 'Project goal', value: 'Reduce ordering friction and improve order handling during busy service periods.' },
      { label: 'Target users', value: 'Restaurant owners, food-stall vendors, kitchen staff, cashiers and customers.' },
      { label: 'Core experience', value: 'Scan QR → browse menu → add items → checkout → get order token → track preparation.' },
    ],
    challenges: [
      'Long queues at ordering counters during peak hours.',
      'Repeated communication between customers, cashiers and kitchen staff.',
      'Difficulty tracking which orders are new, being prepared or ready for pickup.',
      'Manual billing and challenges managing different payment methods.',
      'Limited visibility into daily revenue, popular products and completed orders.',
      'Extra work for vendors who manage both online and counter orders.',
    ],
    solution: [
      { title: 'Vendor registration & stall setup', text: 'Vendors register, enter business details, set the stall location, upload a logo or signboard picture and create login credentials.' },
      { title: 'Login-free QR ordering', text: 'Customers scan the stall QR code and open the digital menu directly — browsing categories, selecting products and managing the cart without creating an account.' },
      { title: 'Digital checkout & payments', text: 'Customers pay online or choose to pay at the counter, with customer details, order totals and a clear confirmation flow.' },
      { title: 'Live kitchen & token management', text: 'Each order gets an identifiable token. Kitchen staff see incoming orders and update preparation status in real time.' },
      { title: 'POS counter billing', text: 'Cashiers create bills at the counter, change quantities, choose cash, UPI or card, calculate change and record sales.' },
      { title: 'Reports & order history', text: 'Vendors review past orders, filter by date and status, monitor payments, analyse product-wise sales and export reports to CSV.' },
    ],
    modules: [
      { title: 'Vendor registration', items: ['Stall profile & manager details', 'Login credentials', 'Location', 'Logo upload'] },
      { title: 'QR menu & cart', items: ['Stall-specific QR entry point', 'Category filters & product browsing', 'Add/remove items & quantity updates', 'Automatic totals'] },
      { title: 'Checkout & tokens', items: ['Customer details', 'Online or counter payment', 'Unique order token', 'Pickup reference'] },
      { title: 'Live kitchen', items: ['New orders queue', 'Preparing → ready → handed over', 'Real-time status updates', 'Configurable audio alerts'] },
      { title: 'POS billing', items: ['Counter sales', 'Quantity controls', 'Cash, UPI and card', 'Cash change calculation'] },
      { title: 'Product management', items: ['Menu items & prices', 'Categories & discounts', 'Inventory quantities', 'Menu & stall health'] },
      { title: 'Order history', items: ['Search by token, name or phone', 'Date range filtering', 'Order & payment status', 'Online / counter source'] },
      { title: 'Reports & dashboard', items: ['Revenue summaries & order counts', 'Pending cash to collect', 'Product-wise sales & stock reports', 'CSV export'] },
    ],
    journey: {
      title: 'The customer ordering journey',
      steps: [
        { title: 'Scan & browse menu', text: 'The customer scans the stall QR code and opens the digital menu without signing in.' },
        { title: 'Add to cart', text: 'Select items, adjust quantities and review the total before checkout.' },
        { title: 'Checkout & payment', text: 'Pay online through a payment gateway or choose cash at the counter.' },
        { title: 'Receive order token', text: 'Get a token and follow the order from placed to preparing, ready and handed over.' },
      ],
    },
    spotlight: {
      eyebrow: 'Payments',
      title: 'Multiple payment gateways',
      text: 'The platform supports several payment options so customers and vendors can use the method that suits their workflow.',
      points: ['Razorpay', 'PhonePe', 'Paytm', 'Stripe'],
    },
    outcomes: [
      'Shorter queues through self-service QR ordering.',
      'One shared view of orders for customers, cashiers and kitchen staff.',
      'Digital and counter orders managed from a single system.',
      'Daily revenue, popular products and payment status visible at a glance.',
    ],
    seo: {
      title: 'Navratri Food Stall — QR Ordering, POS Billing & Live Kitchen Platform',
      description:
        'Case study: a food stall and restaurant management platform with QR menu ordering, POS billing, live kitchen dashboard, Razorpay, PhonePe, Paytm and Stripe payments, and sales reports.',
      keywords: ['QR code ordering system', 'restaurant POS software', 'food stall management', 'live kitchen display', 'online food ordering web app', 'Razorpay integration', 'Spherotix case study'],
    },
  },
  {
    slug: 'emi-calculator-india',
    title: 'Advanced EMI Calculator India',
    industry: 'Finance',
    category: 'Web',
    platform: 'Web application · Financial calculator',
    summary:
      'A fast, accessible loan EMI calculator for Indian users with live results, repayment charts, a full amortisation schedule and CSV export.',
    result: 'Live EMI · Charts · Repayment schedule',
    tags: ['FinTech', 'Calculator', 'Responsive'],
    services: ['web-development', 'ui-ux-design'],
    tech: ['Replit', 'Financial calculation logic', 'Responsive web interface', 'Input validation'],
    cover: '/projects/emi-calculator-india.webp',
    ogImage: '/projects/emi-calculator-india-og.jpg',
    icon: LuCalculator,
    accent: ['#0f7a4e', '#34d399'],
    overview: [
      'The Advanced EMI Calculator India is a web-based financial tool that helps users estimate loan repayments and understand the cost of borrowing before choosing a loan.',
      'Users explore how loan amount, interest rate and tenure affect the monthly instalment, with clear rupee-based results, total interest, a repayment breakdown and an interactive summary — all in a simple, jargon-free interface.',
    ],
    facts: [
      { label: 'Project objective', value: 'An accessible calculator that helps Indian users estimate loan payments and compare repayment scenarios.' },
      { label: 'Target users', value: 'Homebuyers, vehicle buyers, salaried professionals, students and anyone comparing loans.' },
      { label: 'Development approach', value: 'Built and published as a responsive web application using Replit.' },
    ],
    challenges: [
      'Estimating monthly instalments across different interest rates and tenures is difficult.',
      'A monthly payment alone does not show the total interest paid over the loan period.',
      'Comparing two loan offers manually takes time.',
      'Borrowers rarely see how tenure changes the overall cost of borrowing.',
      'Financial formulas can feel intimidating without a finance background.',
    ],
    solution: [
      { title: 'Loan input & configuration', text: 'Enter the principal, annual interest rate and tenure with synced fields and sliders, and update them to explore scenarios.' },
      { title: 'EMI & repayment summary', text: 'See the estimated monthly instalment, principal, total interest and total repayment instantly.' },
      { title: 'Repayment breakdown', text: 'A donut chart shows the principal-to-interest split and a balance chart shows how the outstanding principal falls over time.' },
      { title: 'Repayment schedule', text: 'A month-by-month schedule lists opening balance, EMI, interest, principal and closing balance, with CSV export.' },
    ],
    modules: [
      { title: 'Loan inputs', items: ['Loan amount in ₹', 'Annual interest rate', 'Tenure in months', 'Slider and field sync'] },
      { title: 'Results', items: ['Prominent monthly EMI', 'Total interest', 'Total repayment', 'Live estimate'] },
      { title: 'Visual insights', items: ['Principal vs interest donut', 'Balance-over-time chart', 'Plain-language summaries', 'Indian rupee formatting'] },
      { title: 'Schedule & export', items: ['Monthly and yearly views', 'Search by month or year', 'Opening/closing balances', 'Export to CSV'] },
      { title: 'Experience', items: ['Clear validation messages', 'Mobile, tablet and desktop layouts', 'No sign-up required', 'Browser-based calculations'] },
    ],
    spotlight: {
      eyebrow: 'How it works',
      title: 'The reducing-balance EMI formula',
      text: 'EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1), where P is the principal, r the monthly interest rate (annual rate ÷ 12 ÷ 100) and n the number of monthly instalments. Total interest is the sum of all instalments minus the principal.',
      points: ['Constant rate and regular monthly payments assumed', 'Zero-interest loans: EMI = principal ÷ instalments', 'Inputs are validated before every calculation'],
    },
    outcomes: [
      'Borrowers can see the full cost of a loan, not just the monthly payment.',
      'Different rates and tenures can be compared in seconds.',
      'Financial maths presented in a clear, approachable interface.',
      'Works on any device without installation or sign-up.',
    ],
    seo: {
      title: 'Advanced EMI Calculator India — Loan EMI, Interest & Repayment Schedule',
      description:
        'Case study: an Indian EMI calculator web app with live monthly instalment, total interest, repayment charts, amortisation schedule and CSV export. Built for homebuyers and borrowers.',
      keywords: ['EMI calculator India', 'loan EMI calculator', 'home loan calculator', 'amortisation schedule', 'financial calculator web app', 'FinTech web development', 'Spherotix case study'],
    },
  },
  {
    slug: 'clinic-management-system',
    title: 'Clinic Management System',
    industry: 'Healthcare',
    category: 'Web',
    platform: 'Web application · Role-based',
    summary:
      'A role-based clinic platform covering appointments, patient records, vitals, consultations, prescriptions, vaccination reminders and billing.',
    result: 'Appointments · Prescriptions · Vaccination reminders',
    tags: ['Healthcare', 'Role-based access', 'Automation'],
    services: ['web-development', 'ui-ux-design'],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Sequelize ORM', 'MySQL'],
    icon: LuStethoscope,
    accent: ['#4a2bf0', '#a12fd0'],
    overview: [
      'The Clinic Management System is a digital platform that streamlines daily clinic operations — from appointment booking to consultation, prescriptions, vaccination follow-ups and payment collection.',
      'Administrators, doctors and clinic staff each get a dedicated workspace. Patients book appointments, staff manage registration and vital signs, doctors review history and record diagnoses, and administrators monitor performance and financial reports. A multi-dose vaccination workflow sends email reminders before upcoming doses.',
    ],
    facts: [
      { label: 'Project objective', value: 'Digitise clinic workflows and centralise appointments, clinical records, vaccinations and payments.' },
      { label: 'User roles', value: 'Admin / clinic administrator, doctor and staff — each with suitable permissions.' },
      { label: 'Core workflow', value: 'Appointment → registration → vitals → consultation → diagnosis & prescription → payment → follow-up.' },
    ],
    challenges: [
      'Difficulty organising appointments and daily patient queues.',
      'Repeated entry of patient information during visits.',
      'Limited access to complete medical history during consultations.',
      'Missed follow-up appointments and vaccination doses.',
      'Manual coordination between doctors and reception staff.',
      'Delays in payment collection and reconciliation.',
      'Hard to produce doctor-wise, clinic-wide and financial reports.',
      'Confidential patient data must be protected with appropriate access.',
    ],
    solution: [
      { title: 'Appointment booking', text: 'Patients choose an available slot and provide booking details; daily lists keep queues organised.' },
      { title: 'Registration & check-in', text: 'Staff verify details, register new patients and update appointment status.' },
      { title: 'Vitals recording', text: 'Blood pressure, pulse, temperature, weight and other configured vitals are linked to the visit.' },
      { title: 'Doctor consultation', text: 'Doctors review history and vitals, document findings, record the diagnosis and create the prescription.' },
      { title: 'Payment collection', text: 'The consultation charge is recorded and staff are notified when payment collection is required.' },
      { title: 'Follow-up & vaccination reminders', text: 'The next check-up date and vaccine doses are tracked, with email reminders where configured.' },
    ],
    modules: [
      { title: 'Appointment management', items: ['Patient appointment booking', 'Doctor-wise scheduling', 'Status & check-in', 'Follow-up dates'] },
      { title: 'Patient management', items: ['Profiles & basic details', 'Medical & visit history', 'Doctor-wise records', 'Consultation history'] },
      { title: 'Vital signs', items: ['Blood pressure & pulse', 'Temperature & weight', 'Visit-linked records', 'Doctor access to vitals'] },
      { title: 'Consultation & prescription', items: ['Diagnosis & notes', 'Medicine, dosage & instructions', 'Prescription history', 'Next check-up scheduling'] },
      { title: 'Vaccination management', items: ['Dose tracking', 'Patient-specific schedules', 'Upcoming & overdue doses', 'Automated email reminders'] },
      { title: 'Billing & payments', items: ['Consultation fee recording', 'Payment status tracking', 'Staff collection notifications', 'Outstanding summaries'] },
      { title: 'Reports & dashboards', items: ['Appointment & doctor-wise reports', 'Patient & payment reports', 'Clinic performance summary', 'Vaccination report'] },
    ],
    roles: [
      {
        title: 'Admin / clinic administrator',
        text: 'An overview of clinic operations and financial performance.',
        points: ['Clinic-level reports and payment summaries', 'Monitor appointments and patient activity', 'Track payments and outstanding collections', 'Manage users and access permissions'],
      },
      {
        title: 'Doctor',
        text: 'A dedicated workspace for consultations and clinical documentation.',
        points: ['View assigned patients and appointments', 'Review history and recorded vitals', 'Record diagnosis, medicines and instructions', 'Schedule the next check-up'],
      },
      {
        title: 'Clinic staff',
        text: 'Reception and pre-consultation activities.',
        points: ['Register patients and manage check-in', 'Record vital signs before consultation', 'Receive payment collection requests', 'Update collection status and follow-ups'],
      },
    ],
    spotlight: {
      eyebrow: 'Automation',
      title: 'Multi-dose vaccination management',
      text: 'Record each vaccine and its required doses with a planned date for every dose. Staff can see completed, upcoming and overdue doses at a glance, and patients are reminded by email.',
      points: ['Reminder 2 days before the due date', 'Follow-up reminder 1 day before', 'Same-day reminder on the due-date morning', 'Dose record updated and next dose scheduled after administration'],
    },
    outcomes: [
      'One place for appointments, records, vaccinations and payments.',
      'Doctors see complete history and vitals during consultations.',
      'Fewer missed follow-ups through scheduled reminders.',
      'Role-based access protects clinical and financial information.',
    ],
    seo: {
      title: 'Clinic Management System — Appointments, Prescriptions & Vaccination Reminders',
      description:
        'Case study: a role-based clinic management web app with appointment booking, patient records, vitals, prescriptions, multi-dose vaccination email reminders, billing and reports. React, TypeScript, Node.js, MySQL.',
      keywords: ['clinic management software', 'hospital management system', 'appointment booking system', 'vaccination reminder system', 'healthcare web application', 'React Node.js MySQL', 'Spherotix case study'],
    },
  },
  {
    slug: 'mysociety',
    title: 'MySociety',
    industry: 'Residential Real Estate',
    category: 'App',
    platform: 'Flutter mobile app · Node.js backend',
    summary:
      'A residential society app for visitor approvals, gate security, complaints, announcements, maintenance reminders and resident management.',
    result: 'Visitor approvals · Complaints · Reminders',
    tags: ['Flutter', 'Society management', 'Security'],
    services: ['mobile-app-development'],
    tech: ['Flutter', 'Node.js', 'TypeScript', 'Sequelize ORM', 'MySQL'],
    icon: LuBuilding2,
    accent: ['#a12fd0', '#ff5a45'],
    overview: [
      'MySociety is a residential society management platform that digitises visitor entry, resident approvals, security operations, maintenance reminders and community communication.',
      'Administrators create societies, manage blocks and flats and approve new residents. Security guards register visitors at the gate and send live approval requests to flat members. Residents manage pre-approved visitors, submit complaints, view announcements and receive maintenance reminders.',
    ],
    facts: [
      { label: 'Objective', value: 'A centralised digital platform for residential security, resident services and society administration.' },
      { label: 'Platform', value: 'Flutter mobile application with a Node.js and TypeScript backend.' },
      { label: 'User roles', value: 'Society admin, security guard, resident / society member, and visitor entry handled at the gate.' },
    ],
    challenges: [
      'Manual visitor registers that are hard to search and review.',
      'Delays in contacting residents for visitor permission.',
      'Unauthorised-entry risk when approvals are unclear.',
      'Managing multiple buildings, blocks and flats.',
      'No centralised complaint tracking.',
      'Scattered contacts for trusted service providers.',
      'Missed maintenance reminders and community announcements.',
      'Manual approval of new residents and accounts.',
    ],
    solution: [
      { title: 'Structured society setup', text: 'Admins create societies and add blocks, buildings and flats, organising users by society and flat.' },
      { title: 'Live visitor approval', text: 'Security records the visitor and destination flat, the resident approves or rejects in real time, and the decision is logged.' },
      { title: 'Pre-approved visitors', text: 'Residents add expected guests in advance so security can verify them quickly at the gate.' },
      { title: 'Community services', text: 'Complaints, announcements, events, a helpful-people directory and maintenance reminders live in one app.' },
    ],
    modules: [
      { title: 'Society, block & flat management', items: ['Create & configure societies', 'Multiple blocks / buildings', 'Flats linked to residents', 'Residential directory'] },
      { title: 'Live visitor approval', items: ['Name & phone registration', 'Destination flat selection', 'Approve / reject requests', 'Searchable visitor logs'] },
      { title: 'Pre-approved visitors', items: ['Add expected visitors', 'Expected visit details', 'Verification by security', 'Visitor history'] },
      { title: 'Complaint management', items: ['Submit with description & category', 'Status & progress tracking', 'Admin resolution workflow', 'Complaint history'] },
      { title: 'Events & announcements', items: ['Important notices', 'Event details & dates', 'Community updates', 'One accessible place'] },
      { title: 'Helpful people directory', items: ['Plumber, electrician, carpenter …', 'Phone numbers & categories', 'Personal recommendations', 'Shared by residents'] },
      { title: 'Maintenance reminders', items: ['Dues & scheduled maintenance', 'Date-based reminders', 'Clear admin-to-resident communication', 'Society notifications'] },
    ],
    roles: [
      {
        title: 'Society admin',
        text: 'Oversees configuration, users and operational records.',
        points: ['Create societies, blocks and flats', 'Approve resident registrations', 'Monitor visitor logs and complaints', 'Publish announcements and configure reminders'],
      },
      {
        title: 'Security guard',
        text: 'Manages entry requests at the society gate.',
        points: ['Register visitor name and phone', 'Send live approval requests to residents', 'Verify pre-approved visitors', 'Maintain searchable gate-entry records'],
      },
      {
        title: 'Resident / member',
        text: 'Controls visitors and accesses community services.',
        points: ['Approve or reject visitor requests', 'Pre-approve expected visitors', 'Submit and track complaints', 'View events, contacts and reminders'],
      },
    ],
    journey: {
      title: 'Controlled registration & approval',
      steps: [
        { title: 'Submit registration', text: 'A new user submits their registration details.' },
        { title: 'Select society & flat', text: 'The user selects or requests access to the correct society and flat.' },
        { title: 'Admin verification', text: 'The administrator verifies and approves or rejects the request.' },
        { title: 'Role-based access', text: 'Approved users receive access matching their assigned role.' },
      ],
    },
    outcomes: [
      'Gate security and residents connected through real-time approvals.',
      'Searchable digital records replace paper visitor registers.',
      'Complaints, announcements and reminders centralised in one app.',
      'More reliable resident records through admin-approved registration.',
    ],
    seo: {
      title: 'MySociety — Visitor Management & Society Management App (Flutter)',
      description:
        'Case study: a Flutter society management app with live visitor approval, pre-approved visitors, complaint tracking, announcements and maintenance reminders. Node.js, TypeScript, Sequelize and MySQL backend.',
      keywords: ['society management app', 'visitor management system', 'apartment management software', 'Flutter app development', 'gate security app', 'Node.js TypeScript backend', 'Spherotix case study'],
    },
  },
  {
    slug: 'tasco-real-estate-platform',
    title: 'TASCO Real Estate Platform',
    industry: 'Real Estate',
    category: 'Web & App',
    platform: 'Website · Flutter app · React admin panel',
    summary:
      'A real estate marketplace with property listings for sale and rent, owner submissions, project management, inquiry handling and AI-powered chat search.',
    result: 'Web · Flutter app · Admin · AI chat search',
    tags: ['Marketplace', 'AI Chat', 'Flutter'],
    services: ['web-development', 'mobile-app-development', 'ui-ux-design'],
    tech: ['React', 'TypeScript', 'Flutter', 'AI integration'],
    icon: LuHouse,
    accent: ['#ff5a45', '#4a2bf0'],
    overview: [
      'TASCO brings property seekers, property owners and the internal real estate team into one connected platform. Customers browse homes for sale or rent, explore real estate projects, submit inquiries and list their own properties.',
      'A web platform and Flutter mobile app serve customers, a React + TypeScript admin panel serves the TASCO team, and an AI-powered chat helps users find properties by describing what they need.',
    ],
    facts: [
      { label: 'Platform', value: 'Responsive website, Flutter mobile app and React + TypeScript admin panel.' },
      { label: 'Audience', value: 'Property seekers, property owners and the internal TASCO team.' },
      { label: 'Highlight', value: 'AI-assisted property discovery grounded in real listings.' },
    ],
    challenges: [
      'Scattered listings, repeated phone calls and limited property information.',
      'Property owners finding it hard to reach interested buyers or tenants.',
      'Real estate teams needing an organised way to manage inquiries and property data.',
      'Different needs across customers, owners and internal staff.',
      'Property search that feels complex with traditional filters alone.',
    ],
    solution: [
      { title: 'Centralised property discovery', text: 'Properties for sale and rent in one platform, with detail pages, search and filters.' },
      { title: 'Simplified listing submission', text: 'Owners submit properties for rent or sale for the TASCO team to review and publish.' },
      { title: 'Structured inquiry management', text: 'Inquiry forms linked to properties capture customer needs for team follow-up.' },
      { title: 'Project & content management', text: 'The admin panel keeps properties, projects and customer-facing content consistent.' },
      { title: 'AI-assisted discovery', text: 'Users describe what they want in chat and see matching, real listings.' },
    ],
    modules: [
      { title: 'Property discovery', items: ['Property cards with images', 'Sale and rental categories', 'Property detail pages', 'Search & filters'] },
      { title: 'Listing submission', items: ['Details and location', 'Rent or sale type', 'Price & property information', 'Owner contact details'] },
      { title: 'Project management', items: ['Project records & images', 'Descriptions & related properties', 'Shown on the customer site', 'Maintained from the admin panel'] },
      { title: 'Inquiry management', items: ['Inquiry forms per property', 'Customer requirements', 'Centralised inbox', 'Team-led follow-up'] },
      { title: 'Mobile experience (Flutter)', items: ['Mobile-friendly browsing', 'Images and key details', 'Sale and rental discovery', 'Inquiry from mobile'] },
      { title: 'Admin dashboard (React + TS)', items: ['Property & project management', 'Inquiry review', 'Property submission review', 'Listing status control'] },
    ],
    spotlight: {
      eyebrow: 'AI-powered discovery',
      title: 'Find a home by describing it',
      text: 'Users explain what they need in natural language. The assistant extracts criteria such as location, budget, property type and bedrooms, searches the platform’s property records and shows matching listings — never inventing properties or prices.',
      points: ['User describes requirements in chat', 'AI identifies location, budget, type and bedrooms', 'Platform searches available listings', 'Matches are shown, ready for an inquiry'],
    },
    outcomes: [
      'Property discovery for buying and renting in one place.',
      'Owner listing submissions flowing into the team’s review process.',
      'Centralised management of properties, projects and inquiries.',
      'A consistent experience across web, mobile and admin.',
    ],
    seo: {
      title: 'TASCO Real Estate Platform — Property Portal, Flutter App & AI Chat Search',
      description:
        'Case study: a real estate platform with property listings for sale and rent, owner submissions, project management, inquiry handling, a Flutter app, React admin panel and AI chat-based property search.',
      keywords: ['real estate portal development', 'property listing website', 'Flutter real estate app', 'AI property search chatbot', 'React TypeScript admin panel', 'real estate software', 'Spherotix case study'],
    },
  },
]

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug)
