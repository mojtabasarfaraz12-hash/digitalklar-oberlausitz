import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von DigitalKlar Oberlausitz.",
};

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold md:text-4xl">Datenschutzerklärung</h1>

        <div className="mt-10 space-y-8 text-text-secondary leading-relaxed [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text-primary [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-text-primary [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
          </p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber: {SITE_CONFIG.owner}, {SITE_CONFIG.name}. Kontakt:{" "}
            {SITE_CONFIG.email}
          </p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet
            (Vercel Inc.). Die personenbezogenen Daten, die auf dieser Website
            erfasst werden, werden auf den Servern des Hosters gespeichert.
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p>
            {SITE_CONFIG.owner}<br />
            {SITE_CONFIG.name}<br />
            E-Mail: {SITE_CONFIG.email}
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
            den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
            geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3>Anfrage per E-Mail</h3>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive
            aller daraus hervorgehenden personenbezogenen Daten (Name,
            Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
            gespeichert und verarbeitet.
          </p>

          <h2>5. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht:</p>
          <ul>
            <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
            <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
            <li>Die Löschung Ihrer Daten zu verlangen</li>
            <li>Die Einschränkung der Verarbeitung zu verlangen</li>
            <li>Der Verarbeitung Ihrer Daten zu widersprechen</li>
            <li>Ihre Daten in einem übertragbaren Format zu erhalten</li>
          </ul>

          <p className="mt-8 text-sm text-text-muted">
            Stand: März 2026
          </p>
        </div>
      </div>
    </section>
  );
}
