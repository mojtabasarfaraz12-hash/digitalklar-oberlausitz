import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block text-xl font-bold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent-dark">
                Digital
              </span>
              <span className="text-white">Klar</span>
              <span className="text-white/40 ml-1 font-normal text-base">Oberlausitz</span>
            </Link>
            <p className="mt-4 text-sm text-white/30 leading-relaxed max-w-xs">
              Lokales Online-Marketing und digitale Sichtbarkeit für
              Unternehmen in der Oberlausitz.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 text-sm text-white/30 transition-colors hover:text-white"
              >
                <Mail size={14} />
                {SITE_CONFIG.email}
              </a>
              <span className="flex items-center gap-2.5 text-sm text-white/30">
                <MapPin size={14} />
                Oberlausitz, Sachsen
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/20 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/30 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/20 mb-5">
              Leistungen
            </h3>
            <ul className="space-y-3.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="group flex items-center gap-1.5 text-sm text-white/30 transition-colors hover:text-white"
                  >
                    {s.title}
                    <ArrowUpRight
                      size={10}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/20 mb-5">
              Loslegen
            </h3>
            <p className="text-sm text-white/30 leading-relaxed mb-5">
              Kostenlose Erstberatung. Unverbindlich und persönlich.
            </p>
            <a
              href="/buchen"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] border border-white/10 text-white/70 rounded-full text-sm font-medium transition-all hover:bg-white/10 hover:text-white"
            >
              Termin buchen <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/15">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
          <div className="flex gap-8">
            <Link
              href="/datenschutz"
              className="text-xs text-white/15 transition-colors hover:text-white/40"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="text-xs text-white/15 transition-colors hover:text-white/40"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
