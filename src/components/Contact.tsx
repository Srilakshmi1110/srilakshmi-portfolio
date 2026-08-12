import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { profile } from '../data/resumeData'

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest uppercase text-blueprint mb-2">
          Get in touch
        </p>
        <h2 className="font-display text-3xl font-semibold text-paper mb-10">Contact</h2>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-paper hover:border-blueprint transition-colors"
          >
            <Mail size={18} className="text-amber shrink-0" />
            <span className="text-sm break-all">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-paper hover:border-blueprint transition-colors"
          >
            <Phone size={18} className="text-amber shrink-0" />
            <span className="text-sm">{profile.phone}</span>
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-paper">
            <MapPin size={18} className="text-amber shrink-0" />
            <span className="text-sm">{profile.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-5 text-paper hover:border-blueprint transition-colors text-sm"
            >
              <Linkedin size={18} className="text-amber" /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-5 text-paper hover:border-blueprint transition-colors text-sm"
            >
              <Github size={18} className="text-amber" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
