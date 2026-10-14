import { motion } from 'framer-motion'

export function TechChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((t, i) => (
        <motion.li
          key={t}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-semibold text-navy-700 shadow-soft transition-colors hover:border-azure-200 hover:text-azure-700"
        >
          {t}
        </motion.li>
      ))}
    </ul>
  )
}
