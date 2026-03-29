"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { NAV_LINKS, SERVICES } from "@/lib/constants";

const leistungenDropdown = [
  ...SERVICES.map((s) => ({ label: s.title, href: `/leistungen/${s.slug}` })),
  { label: "Pflege-Marketing", href: "/branche/pflege-marketing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileLeistungenOpen, setIsMobileLeistungenOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setIsDropdownOpen(false), 150);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 text-lg font-bold tracking-tight"
            onClick={() => setIsMobileOpen(false)}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent-dark">
              Digital
            </span>
            <span className="text-white">Klar</span>
            <span className="text-white/40 ml-1 font-normal text-sm hidden sm:inline">Oberlausitz</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) =>
              link.href === "/leistungen" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-[13px] font-medium text-white/40 transition-colors tracking-wide hover:text-white"
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div className="min-w-[220px] rounded-xl border border-white/[0.08] bg-black/90 backdrop-blur-2xl p-2 shadow-2xl">
                          {leistungenDropdown.map((item, i) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block rounded-lg px-4 py-2.5 text-[13px] text-white/50 transition-all hover:bg-white/[0.06] hover:text-white ${
                                item.href.includes("pflege")
                                  ? "mt-1 border-t border-white/[0.04] pt-3 text-accent-light/60 hover:text-accent-light"
                                  : ""
                              }`}
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium transition-colors tracking-wide ${
                    link.href === "/sichtbarkeitspaket"
                      ? "text-accent-light hover:text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="/buchen"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-[13px] font-bold tracking-wide transition-transform hover:scale-105 active:scale-95"
            >
              Termin buchen
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((link, i) =>
              link.href === "/leistungen" ? (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <button
                    onClick={() => setIsMobileLeistungenOpen(!isMobileLeistungenOpen)}
                    className="inline-flex items-center gap-2 text-3xl font-bold text-white/80 hover:text-white transition-colors tracking-tight"
                  >
                    {link.label}
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-200 ${
                        isMobileLeistungenOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileLeistungenOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden flex flex-col items-center gap-4 mt-4"
                      >
                        {leistungenDropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`text-lg transition-colors ${
                              item.href.includes("pflege")
                                ? "text-accent-light/60 hover:text-accent-light"
                                : "text-white/40 hover:text-white"
                            }`}
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-bold transition-colors tracking-tight ${
                      link.href === "/sichtbarkeitspaket"
                        ? "text-accent-light hover:text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06 }}
            >
              <a
                href="/buchen"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide"
                onClick={() => setIsMobileOpen(false)}
              >
                Termin buchen <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
