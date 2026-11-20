
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowUpRight,
} from 'lucide-react'

const contactItems = [
  {
    label: 'Email',
    value: 'srilakshmiseshadri11@gmail.com',
    href: 'mailto:srilakshmiseshadri11@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Phone',
    value: '9740966897',
    href: 'tel:+919740966897',
    Icon: Phone,
  },
  {
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
    Icon: MapPin,
  },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Srilakshmi1110',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/srilakshmi-seshadri-757515298/',
    Icon: Linkedin,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
          [ Let's connect ]
        </p>

        <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper">
          Get in touch
        </h2>

        <p className="text-paper/60 mt-4 max-w-xl leading-relaxed">
          Interested in my work, research, or potential opportunities?
          Feel free to reach out. I'd be happy to connect.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mt-10">
          {contactItems.map(({ label, value, href, Icon }) => {
            const content = (
              <>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-amber shrink-0">
                  <Icon size={19} />
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40">
                    {label}
                  </p>
                  <p className="text-sm text-paper mt-1 break-all">
                    {value}
                  </p>
                </div>
              </>
            )

            return href ? (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 hover:border-blueprint transition-colors"
              >
                {content}
              </a>
            ) : (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                {content}
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-paper hover:border-blueprint hover:text-blueprint transition-colors"
            >
              <Icon size={17} />
              {label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
