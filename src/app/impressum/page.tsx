import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von DigitalKlar Oberlausitz.",
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold md:text-4xl">Impressum</h1>

        <div className="mt-10 space-y-8 text-text-secondary leading-relaxed [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text-primary">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            {SITE_CONFIG.owner}<br />
            {SITE_CONFIG.name}<br />
            Oberlausitz, Sachsen
          </p>

          <h2>Kontakt</h2>
          <p>
            E-Mail: {SITE_CONFIG.email}
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            {SITE_CONFIG.owner}<br />
            Oberlausitz, Sachsen
          </p>

          <h2>Haftungsausschluss</h2>
          <h3 className="!mt-4 text-lg font-semibold text-text-primary">
            Haftung für Inhalte
          </h3>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
            sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
            Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>

          <h3 className="!mt-4 text-lg font-semibold text-text-primary">
            Haftung für Links
          </h3>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
            diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
            oder Betreiber der Seiten verantwortlich.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
            der schriftlichen Zustimmung des jeweiligen Autors bzw.
            Erstellers.
          </p>

          <p className="mt-8 text-sm text-text-muted">
            Stand: März 2026
          </p>
        </div>
      </div>
    </section>
  );
}
