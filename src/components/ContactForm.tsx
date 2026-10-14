import { AnimatePresence, motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { LuCheck, LuSend } from 'react-icons/lu'
import { company, contactInterests } from '../data/content'

const inputClass =
  'w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 shadow-soft transition focus:border-azure-400 focus:ring-4 focus:ring-azure-100 focus:outline-none'

interface ContactFormProps {
  /** Pre-selected service (e.g. when coming from a service page). */
  defaultService?: string
}

/**
 * Enquiry form. There is no backend yet: on submit it opens the visitor's mail client
 * with the message pre-filled. Replace `handleSubmit` with an API call when ready.
 */
export function ContactForm({ defaultService }: ContactFormProps) {
  const [sent, setSent] = useState(false)
  const [service, setService] = useState(defaultService ?? contactInterests[0])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('website')) return // honeypot — bots fill hidden fields

    const subject = `New enquiry: ${service}`
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone') || '-'}`,
      `Service: ${service}`,
      '',
      String(data.get('message')),
    ].join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-lift sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy-800">
          Name
          <input name="name" required autoComplete="name" placeholder="Your name" className={`${inputClass} mt-1.5`} />
        </label>
        <label className="block text-sm font-semibold text-navy-800">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={`${inputClass} mt-1.5`}
          />
        </label>
      </div>

      <label className="mt-4 block text-sm font-semibold text-navy-800">
        Phone <span className="font-normal text-navy-400">(optional)</span>
        <input name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" className={`${inputClass} mt-1.5`} />
      </label>

      {/* honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-navy-800">I'm interested in</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {contactInterests.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setService(i)}
              aria-pressed={service === i}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                service === i
                  ? 'border-transparent bg-brand-gradient text-white'
                  : 'border-navy-100 bg-white text-navy-600 hover:border-azure-300'
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 block text-sm font-semibold text-navy-800">
        Project details
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about your goals, timeline and budget…"
          className={`${inputClass} mt-1.5 resize-none`}
        />
      </label>

      <motion.button
        type="submit"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-glow"
      >
        Send message <LuSend size={16} />
      </motion.button>

      <AnimatePresence>
        {sent && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            role="status"
            className="mt-4 flex items-center gap-2 text-sm font-medium text-leaf-600"
          >
            <LuCheck /> Thanks! Your email app should open with your message ready to send.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
