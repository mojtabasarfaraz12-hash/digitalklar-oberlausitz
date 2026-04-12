import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { RATGEBER, getRatgeberBySlug } from "@/lib/ratgeber";
import { SITE_CONFIG } from "@/lib/constants";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return RATGEBER.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const artikel = getRatgeberBySlug(slug);
  if (!artikel) return {};

  const url = `${SITE_CONFIG.url}/ratgeber/${artikel.slug}`;
  return {
    title: artikel.metaTitle,
    description: artikel.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: artikel.metaTitle,
      description: artikel.metaDescription,
      url,
      type: "article",
    },
  };
}

export default async function RatgeberArtikelPage({ params }: Params) {
  const { slug } = await params;
  const artikel = getRatgeberBySlug(slug);
  if (!artikel) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: artikel.title,
    description: artikel.metaDescription,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.owner,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    datePublished: artikel.publishedAt,
    mainEntityOfPage: `${SITE_CONFIG.url}/ratgeber/${artikel.slug}`,
  };

  const faqJsonLd =
    artikel.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: artikel.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ratgeber",
        item: `${SITE_CONFIG.url}/ratgeber`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: artikel.title,
        item: `${SITE_CONFIG.url}/ratgeber/${artikel.slug}`,
      },
    ],
  };

  const otherArticles = RATGEBER.filter((a) => a.slug !== artikel.slug).slice(
    0,
    2
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <Link
              href="/ratgeber"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Alle Ratgeber
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="accent">{artikel.category}</Badge>
              <span className="flex items-center gap-1.5 text-sm text-white/30">
                <Clock size={13} /> {artikel.readingTime}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/30">
                <Calendar size={13} />{" "}
                {new Date(artikel.publishedAt).toLocaleDateString("de-DE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl leading-tight">
              {artikel.title}
            </h1>
            <p className="mt-6 text-lg text-white/50 font-light leading-relaxed">
              {artikel.excerpt}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-12">
            {artikel.sections.map((section, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl mb-5">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-white/55 leading-relaxed text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {artikel.faqs.length > 0 && (
        <section className="bg-surface-1 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <h2 className="text-center text-3xl font-bold md:text-4xl mb-12">
                Häufige{" "}
                <span className="gradient-text-accent">Fragen</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {artikel.faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <details className="group rounded-xl border border-border bg-surface-2 overflow-hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-5 text-white font-medium hover:text-accent-light transition-colors">
                      <span className="pr-4">{faq.question}</span>
                      <ArrowRight
                        size={16}
                        className="shrink-0 text-white/30 transition-transform group-open:rotate-90"
                      />
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-white/50 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Articles */}
      {otherArticles.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-center md:text-3xl mb-10">
                Weitere{" "}
                <span className="gradient-text-accent">Ratgeber</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {otherArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/ratgeber/${article.slug}`}
                  className="block rounded-xl border border-border bg-surface-2 p-6 transition-colors hover:border-accent/30 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Badge>{article.category}</Badge>
                    <span className="text-xs text-white/30">
                      {article.readingTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-accent-light transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/40 line-clamp-2">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-surface-1 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold md:text-4xl">
              Brauchen Sie{" "}
              <span className="gradient-text-accent">Unterstützung</span>?
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/40 leading-relaxed">
              Sie wissen jetzt, was möglich ist. Wenn Sie es nicht alleine
              umsetzen möchten, helfe ich Ihnen gerne. In einem kostenlosen
              Erstgespräch zeige ich Ihnen, wie Ihr Unternehmen online sichtbar
              wird.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/buchen" variant="gold" size="lg">
                Kostenloses Erstgespräch buchen
              </Button>
              <Button href="/sichtbarkeitspaket" variant="outline" size="lg">
                Sichtbarkeitspaket ansehen
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
