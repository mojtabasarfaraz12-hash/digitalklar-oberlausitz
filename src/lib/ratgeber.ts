export type RatgeberArtikel = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  sections: {
    heading: string;
    content: string[];
  }[];
  faqs: { question: string; answer: string }[];
};

export const RATGEBER: RatgeberArtikel[] = [
  {
    slug: "pflegedienst-online-sichtbar-machen",
    title: "Pflegedienst online sichtbar machen: 7 Schritte, die wirklich funktionieren",
    metaTitle: "Pflegedienst online sichtbar machen | 7 Schritte | DigitalKlar",
    metaDescription:
      "Wie Pflegeeinrichtungen online sichtbar werden: Google Business Profil, Website, lokale SEO und Bewertungen. Praxistipps von einem ehemaligen Pflegedienstleiter.",
    excerpt:
      "Angehörige suchen heute online nach Pflegediensten. Wer nicht sichtbar ist, verliert potenzielle Kunden an die Konkurrenz. Diese 7 Schritte helfen Ihrer Einrichtung, bei Google gefunden zu werden.",
    category: "Pflege",
    readingTime: "8 Min.",
    publishedAt: "2026-04-12",
    sections: [
      {
        heading: "Warum Online-Sichtbarkeit für Pflegedienste entscheidend ist",
        content: [
          "Die Suche nach einem Pflegedienst beginnt heute fast immer bei Google. Angehörige, die plötzlich mit der Pflegebedürftigkeit eines Familienmitglieds konfrontiert werden, greifen als Erstes zum Smartphone. Sie suchen nach 'Pflegedienst in der Nähe', 'Tagespflege Bautzen' oder 'ambulante Pflege Oberlausitz'.",
          "Wenn Ihre Einrichtung in diesen Suchergebnissen nicht auftaucht, existieren Sie für diese Menschen nicht. So hart das klingt: Die beste Pflegequalität nützt nichts, wenn niemand Sie findet. Gleichzeitig ist die gute Nachricht: In vielen Regionen der Oberlausitz ist die Online-Konkurrenz unter Pflegediensten noch gering. Wer jetzt handelt, sichert sich einen Vorsprung.",
        ],
      },
      {
        heading: "1. Google Business Profil einrichten und pflegen",
        content: [
          "Ihr Google Business Profil ist der wichtigste Einzelfaktor für lokale Sichtbarkeit. Es erscheint direkt in der Google-Suche und auf Google Maps, mit Telefonnummer, Adresse, Öffnungszeiten und Bewertungen. Für Pflegedienste ist es oft der erste Kontaktpunkt überhaupt.",
          "Achten Sie auf vollständige und aktuelle Informationen: Name, Adresse, Telefon (NAP) müssen überall identisch sein. Wählen Sie die richtige Kategorie ('Ambulanter Pflegedienst', 'Tagespflege' oder 'Pflegeheim'). Laden Sie regelmäßig Fotos hoch: Ihr Team, Ihre Räumlichkeiten, Veranstaltungen. Beantworten Sie Bewertungen zeitnah und professionell.",
        ],
      },
      {
        heading: "2. Eine professionelle Website aufbauen",
        content: [
          "Ihre Website ist Ihre digitale Visitenkarte. Angehörige, die über Google auf Sie aufmerksam werden, besuchen als Nächstes Ihre Website. Dort entscheiden sie in wenigen Sekunden, ob sie Vertrauen fassen oder weitersuchen.",
          "Eine gute Pflegedienst-Website enthält: eine klare Beschreibung Ihrer Leistungen (ambulant, stationär, Tagespflege), Informationen zu Ihrem Team und Ihrer Philosophie, den Aufnahmeprozess und Kontaktmöglichkeiten, aktuelle Informationen zu freien Plätzen. Die Website muss auf dem Smartphone genauso gut funktionieren wie am Computer, denn die Mehrheit der Suchanfragen kommt von mobilen Geräten.",
        ],
      },
      {
        heading: "3. Lokale Keywords gezielt einsetzen",
        content: [
          "Lokale SEO bedeutet, dass Ihre Website für die Suchbegriffe optimiert ist, die Menschen in Ihrer Region tatsächlich eingeben. Für einen Pflegedienst in der Oberlausitz sind das Begriffe wie 'Pflegedienst Bautzen', 'Tagespflege Görlitz', 'ambulante Pflege Kamenz' oder 'Pflegeheim Hoyerswerda'.",
          "Diese Begriffe sollten in Ihren Seitentiteln, Überschriften und Texten natürlich vorkommen. Erstellen Sie für jeden Standort, den Sie bedienen, eine eigene Unterseite mit relevantem, einzigartigem Inhalt. Das signalisiert Google, dass Sie in diesen Gebieten tatsächlich aktiv sind.",
        ],
      },
      {
        heading: "4. Bewertungen aktiv aufbauen",
        content: [
          "Google-Bewertungen sind für Pflegedienste Gold wert. Angehörige, die einen Pflegedienst suchen, achten besonders auf die Erfahrungen anderer Familien. Ein Pflegedienst mit 20 positiven Bewertungen wirkt deutlich vertrauenswürdiger als einer ohne.",
          "Bitten Sie zufriedene Angehörige gezielt um eine Bewertung. Machen Sie es so einfach wie möglich: Senden Sie den direkten Link zu Ihrem Google Business Profil per E-Mail oder als QR-Code. Antworten Sie auf jede Bewertung, ob positiv oder negativ, professionell und wertschätzend.",
        ],
      },
      {
        heading: "5. Inhalte erstellen, die Vertrauen aufbauen",
        content: [
          "Angehörige haben viele Fragen, wenn sie sich erstmals mit dem Thema Pflege beschäftigen: Was kostet ein Pflegeplatz? Welche Leistungen zahlt die Pflegekasse? Wie läuft die Aufnahme ab? Wenn Ihre Website diese Fragen beantwortet, bauen Sie Vertrauen auf und werden gleichzeitig bei Google für diese Suchanfragen gefunden.",
          "Ein kleiner Ratgeber-Bereich auf Ihrer Website mit Artikeln wie 'Was kostet Tagespflege?' oder 'Pflegegrad beantragen: So geht es' bringt nicht nur Besucher, sondern positioniert Sie als kompetenten Ansprechpartner.",
        ],
      },
      {
        heading: "6. Social Media gezielt nutzen",
        content: [
          "Social Media ist für Pflegedienste weniger ein Vertriebskanal als ein Vertrauenskanal. Zeigen Sie Einblicke in Ihren Alltag: gemeinsame Aktivitäten, Teamvorstellungen, saisonale Feste. Das gibt Angehörigen ein Gefühl dafür, wie das Leben in Ihrer Einrichtung aussieht.",
          "Konzentrieren Sie sich auf die Plattform, die Ihre Zielgruppe nutzt. Für die meisten Pflegedienste in der Oberlausitz ist Facebook nach wie vor die wichtigste Plattform, da dort die Generation der Kinder pflegebedürftiger Eltern am aktivsten ist.",
        ],
      },
      {
        heading: "7. Fachkräftegewinnung über den Online-Auftritt",
        content: [
          "Eine starke Online-Präsenz hilft nicht nur bei der Belegung, sondern auch beim Recruiting. Pflegekräfte, die einen neuen Arbeitgeber suchen, informieren sich online. Ihre Website und Ihr Google-Auftritt sind auch ein Schaufenster für potenzielle Mitarbeiter.",
          "Zeigen Sie, was Ihren Betrieb als Arbeitgeber auszeichnet: Teamkultur, Fortbildungsmöglichkeiten, Arbeitszeitmodelle. Eine Karriere-Seite auf Ihrer Website und aktuelle Stellenanzeigen bei Google können den Unterschied machen.",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie schnell sehe ich Ergebnisse bei der Online-Sichtbarkeit meines Pflegedienstes?",
        answer:
          "Ein optimiertes Google Business Profil zeigt oft schon nach 2 bis 4 Wochen Verbesserungen in den lokalen Suchergebnissen. Für organische Google-Rankings rechnen Sie mit 3 bis 6 Monaten. In der Oberlausitz ist der Wettbewerb geringer als in Großstädten, was die Chancen für schnellere Ergebnisse deutlich erhöht.",
      },
      {
        question: "Muss ich Social Media machen, um online sichtbar zu sein?",
        answer:
          "Social Media ist hilfreich, aber nicht zwingend notwendig. Die wichtigsten Bausteine sind ein gepflegtes Google Business Profil und eine professionelle Website. Wenn Sie Social Media nutzen, konzentrieren Sie sich auf eine Plattform und posten regelmäßig, statt auf allen Kanälen sporadisch aktiv zu sein.",
      },
      {
        question: "Was kostet es, einen Pflegedienst online sichtbar zu machen?",
        answer:
          "Die Kosten variieren je nach Umfang. Ein Google Business Profil können Sie kostenlos selbst einrichten. Für eine professionelle Website mit SEO-Optimierung und laufender Betreuung gibt es verschiedene Modelle. Bei DigitalKlar arbeite ich mit einem transparenten monatlichen Sichtbarkeitspaket, damit Sie volle Kostenkontrolle haben.",
      },
    ],
  },
  {
    slug: "website-kosten-bautzen",
    title: "Was kostet eine Website in Bautzen? Ein ehrlicher Überblick",
    metaTitle: "Website Kosten Bautzen | Ehrlicher Preisüberblick | DigitalKlar",
    metaDescription:
      "Was kostet eine professionelle Website in Bautzen und der Oberlausitz? Transparente Übersicht der Preismodelle, von Baukästen bis Agenturlösungen.",
    excerpt:
      "Die Frage nach den Kosten ist berechtigt. Hier bekommen Sie einen ehrlichen Überblick, was eine professionelle Website in der Region Bautzen wirklich kostet und worauf Sie achten sollten.",
    category: "Webdesign",
    readingTime: "6 Min.",
    publishedAt: "2026-04-12",
    sections: [
      {
        heading: "Warum die Frage nach Website-Kosten berechtigt ist",
        content: [
          "Wenn Sie als Unternehmer in Bautzen oder der Oberlausitz nach einer Website suchen, stoßen Sie auf ein breites Spektrum: Von 'kostenlos mit Baukasten' bis '15.000 Euro aufwärts'. Das macht die Entscheidung nicht leichter. Als lokaler Marketing-Experte in der Region möchte ich Ihnen einen ehrlichen Überblick geben.",
          "Die richtige Frage ist nicht 'Was kostet eine Website?', sondern 'Was brauche ich, damit mein Unternehmen online Kunden gewinnt?' Denn eine Website allein bringt nichts. Sie muss gefunden werden, Vertrauen aufbauen und Anfragen generieren.",
        ],
      },
      {
        heading: "Option 1: Website-Baukasten (Wix, Jimdo, Squarespace)",
        content: [
          "Kosten: 0 bis 30 Euro pro Monat. Baukästen sind günstig und schnell aufgesetzt. Für einen Verein oder ein Hobby-Projekt können sie ausreichen. Für ein Unternehmen, das bei Google gefunden werden will, stoßen sie an Grenzen: eingeschränkte SEO-Möglichkeiten, langsame Ladezeiten, generisches Design, eingeschränkte Funktionen.",
          "Meine ehrliche Einschätzung: Wenn Sie Kunden über Google gewinnen möchten, wird ein Baukasten Sie langfristig bremsen. Die niedrigen monatlichen Kosten täuschen über die entgangenen Umsätze hinweg.",
        ],
      },
      {
        heading: "Option 2: WordPress-Website vom Freelancer",
        content: [
          "Kosten: 1.500 bis 5.000 Euro einmalig, plus Hosting und Wartung. WordPress ist das weltweit meistgenutzte System und bietet viele Möglichkeiten. Die Qualität hängt stark vom Freelancer ab. Achten Sie auf: Wird die Seite für mobile Geräte optimiert? Werden SEO-Grundlagen umgesetzt? Gibt es einen Plan für Wartung und Updates?",
          "Risiken: Viele WordPress-Seiten werden nach der Erstellung nicht gewartet. Veraltete Plugins sind Sicherheitsrisiken, und ohne regelmäßige Pflege rutscht die Seite bei Google ab. Klären Sie vorab, wer sich nach dem Launch um die Website kümmert.",
        ],
      },
      {
        heading: "Option 3: Professionelle Website mit laufender Betreuung",
        content: [
          "Kosten: Monatlicher Festpreis, oft zwischen 200 und 500 Euro, je nach Umfang. Dieses Modell, das auch ich mit dem Sichtbarkeitspaket anbiete, kombiniert Website, SEO-Optimierung, Hosting, Wartung und laufende Betreuung in einem transparenten Preis. Sie müssen sich um nichts kümmern und wissen jeden Monat, was es kostet.",
          "Der Vorteil: Ihre Website wird nicht nur erstellt, sondern auch kontinuierlich optimiert. Die Inhalte bleiben aktuell, die Technik wird gewartet und die Sichtbarkeit bei Google wächst Monat für Monat. Kein Überraschungseffekt nach einem Jahr, wenn die einmal erstellte Seite veraltet ist.",
        ],
      },
      {
        heading: "Option 4: Full-Service-Agentur",
        content: [
          "Kosten: 5.000 bis 20.000 Euro und mehr. Große Agenturen bieten umfassende Leistungen, haben aber auch entsprechende Kosten. Für viele kleine und mittlere Unternehmen in Bautzen und der Oberlausitz sind diese Preise schlicht zu hoch und oft auch nicht notwendig.",
          "Meine ehrliche Einschätzung: Für ein lokales Unternehmen mit regionalem Einzugsgebiet ist eine Full-Service-Agentur in den meisten Fällen zu viel des Guten. Die gleiche Wirkung erzielen Sie mit einem fokussierten, regionalen Partner, der Ihren Markt kennt.",
        ],
      },
      {
        heading: "Worauf Sie bei der Auswahl wirklich achten sollten",
        content: [
          "Unabhängig vom Preismodell: Achten Sie auf diese Punkte. Erstens: Wird die Website für Google optimiert oder nur 'schön gemacht'? Zweitens: Ist die Website auf dem Smartphone schnell und bedienbar? Drittens: Gibt es ein Google Business Profil als Teil der Strategie? Viertens: Wer kümmert sich nach dem Launch um Wartung und Updates? Fünftens: Bekommen Sie Transparenz über die Ergebnisse (Reporting)?",
          "Die beste Website ist die, die Ihrem Unternehmen messbar neue Kunden bringt. Ob das eine 2.000-Euro- oder eine 10.000-Euro-Lösung ist, hängt von Ihrem Geschäft ab, nicht von einer Preisliste.",
        ],
      },
    ],
    faqs: [
      {
        question: "Was kostet eine einfache Website für ein kleines Unternehmen in Bautzen?",
        answer:
          "Für eine professionelle, SEO-optimierte Website mit laufender Betreuung rechnen Sie mit einem monatlichen Festpreis. In einem kostenlosen Erstgespräch analysiere ich Ihre Anforderungen und erstelle ein individuelles Angebot ohne versteckte Kosten.",
      },
      {
        question: "Kann ich meine Website selbst erstellen?",
        answer:
          "Technisch ja, mit Baukästen wie Wix oder Jimdo. Wenn Sie jedoch bei Google gefunden werden und professionell wirken möchten, empfehle ich eine professionelle Lösung. Die Zeitersparnis und der professionelle Eindruck machen sich durch gewonnene Kunden schnell bezahlt.",
      },
      {
        question: "Brauche ich neben der Website auch SEO?",
        answer:
          "Ja. Eine Website ohne SEO ist wie ein Geschäft ohne Schild. Die schönste Website bringt nichts, wenn niemand sie findet. Lokale SEO sorgt dafür, dass Ihre Website bei Google für relevante Suchanfragen in Ihrer Region erscheint.",
      },
    ],
  },
  {
    slug: "google-business-profil-optimieren",
    title: "Google Business Profil optimieren: Der komplette Leitfaden für lokale Unternehmen",
    metaTitle: "Google Business Profil optimieren | Leitfaden | DigitalKlar",
    metaDescription:
      "So optimieren Sie Ihr Google Business Profil für mehr Sichtbarkeit, Anrufe und Anfragen. Praktischer Leitfaden für Unternehmen in der Oberlausitz.",
    excerpt:
      "Ihr Google Business Profil ist oft der erste Kontaktpunkt mit neuen Kunden. So optimieren Sie es richtig, damit es Ihnen Anrufe, Anfragen und Besucher bringt.",
    category: "SEO",
    readingTime: "7 Min.",
    publishedAt: "2026-04-12",
    sections: [
      {
        heading: "Warum Ihr Google Business Profil so wichtig ist",
        content: [
          "Wenn jemand in der Oberlausitz bei Google nach einem Handwerker, einem Pflegedienst oder einem Restaurant sucht, erscheint als Erstes das sogenannte 'Local Pack': Eine Box mit drei lokalen Unternehmen, inklusive Bewertungen, Öffnungszeiten und Standort auf der Karte. Diese drei Plätze erhalten den Großteil aller Klicks und Anrufe.",
          "Ob Ihr Unternehmen dort erscheint, hängt maßgeblich von Ihrem Google Business Profil ab. Ein gut gepflegtes Profil ist der wichtigste Einzelfaktor für lokale Sichtbarkeit. Die gute Nachricht: Die Optimierung ist kostenlos und in den meisten Fällen sind einfache Schritte ausreichend, um einen deutlichen Unterschied zu machen.",
        ],
      },
      {
        heading: "Schritt 1: Profil beanspruchen und verifizieren",
        content: [
          "Falls Sie noch kein Google Business Profil haben, erstellen Sie eines unter business.google.com. Falls bereits ein Profil existiert (Google erstellt diese manchmal automatisch), beanspruchen Sie es. Die Verifizierung erfolgt per Postkarte, Telefon oder E-Mail und bestätigt, dass Sie der Inhaber sind.",
          "Wichtig: Nur ein verifiziertes Profil gibt Ihnen volle Kontrolle über die Informationen, die bei Google angezeigt werden. Ohne Verifizierung können Sie keine Bewertungen beantworten, keine Fotos hochladen und keine Beiträge veröffentlichen.",
        ],
      },
      {
        heading: "Schritt 2: NAP-Daten korrekt und einheitlich eintragen",
        content: [
          "NAP steht für Name, Address, Phone. Diese drei Angaben müssen überall im Internet identisch sein: auf Ihrer Website, in Branchenverzeichnissen und in Ihrem Google Business Profil. Schon kleine Abweichungen (z.B. 'Str.' vs. 'Straße') können Google verwirren und Ihre Sichtbarkeit beeinträchtigen.",
          "Tragen Sie den vollständigen Unternehmensnamen ein (ohne Keyword-Stuffing), Ihre vollständige Adresse und Ihre Haupttelefonnummer. Wenn Sie mehrere Standorte haben, erstellen Sie für jeden ein eigenes Profil.",
        ],
      },
      {
        heading: "Schritt 3: Die richtige Kategorie wählen",
        content: [
          "Die Hauptkategorie Ihres Profils ist einer der stärksten Ranking-Faktoren. Wählen Sie die Kategorie, die Ihr Geschäft am genauesten beschreibt. Ein Pflegedienst wählt 'Ambulanter Pflegedienst', nicht 'Gesundheitsdienst'. Ein Dachdecker wählt 'Dachdecker', nicht 'Bauunternehmen'.",
          "Sie können zusätzliche Kategorien hinzufügen, um weitere Leistungen abzudecken. Aber die Hauptkategorie sollte immer die präziseste sein. Google zeigt Ihr Profil vor allem für Suchanfragen an, die zu Ihrer Kategorie passen.",
        ],
      },
      {
        heading: "Schritt 4: Beschreibung und Leistungen optimieren",
        content: [
          "Nutzen Sie die Unternehmensbeschreibung (bis 750 Zeichen), um klar zu kommunizieren, was Sie anbieten, wo Sie tätig sind und was Sie auszeichnet. Vermeiden Sie Werbefloskeln und schreiben Sie für Menschen, nicht für Suchmaschinen.",
          "Fügen Sie alle relevanten Leistungen hinzu, die Google als Optionen anbietet, und erstellen Sie bei Bedarf eigene. Für einen Handwerksbetrieb könnten das z.B. 'Dachsanierung', 'Flachdacharbeitung' und 'Dachrinnenreinigung' sein. Diese Leistungen helfen Google, Ihr Profil für spezifische Suchanfragen anzuzeigen.",
        ],
      },
      {
        heading: "Schritt 5: Fotos und Beiträge regelmäßig hinzufügen",
        content: [
          "Profile mit Fotos erhalten deutlich mehr Klicks und Anfragen als solche ohne. Laden Sie professionelle Fotos hoch: Ihr Team, Ihre Räumlichkeiten, Ihre Arbeit, Ihr Logo. Aktualisieren Sie die Fotos regelmäßig, das signalisiert Google, dass Ihr Profil aktiv gepflegt wird.",
          "Nutzen Sie auch die Beitrags-Funktion, um aktuelle Angebote, Neuigkeiten oder Veranstaltungen zu teilen. Diese Beiträge erscheinen direkt in Ihrem Profil und können den Unterschied machen, wenn ein Kunde zwischen Ihnen und der Konkurrenz wählt.",
        ],
      },
      {
        heading: "Schritt 6: Bewertungen aktiv managen",
        content: [
          "Bewertungen sind der zweitwichtigste Ranking-Faktor für lokale Suchergebnisse, nach der Kategorie. Bitten Sie zufriedene Kunden aktiv um eine Google-Bewertung. Machen Sie es einfach: Senden Sie den direkten Bewertungslink per E-Mail, SMS oder als QR-Code in Ihrem Geschäft.",
          "Beantworten Sie jede Bewertung, ob positiv oder negativ. Positive Bewertungen verdienen ein Dankeschön. Negative Bewertungen erfordern eine professionelle, sachliche Antwort, die zeigt, dass Ihnen Kundenzufriedenheit wichtig ist. Potenzielle Kunden lesen diese Antworten und bilden sich eine Meinung.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ist ein Google Business Profil kostenlos?",
        answer:
          "Ja, die Erstellung und Pflege eines Google Business Profils ist komplett kostenlos. Sie benötigen lediglich ein Google-Konto. Die Investition besteht in der Zeit, die Sie für die Pflege aufwenden, oder in der Beauftragung eines Experten, der das für Sie übernimmt.",
      },
      {
        question: "Wie lange dauert es, bis mein Google Business Profil rankt?",
        answer:
          "Erste Verbesserungen sehen Sie oft schon 2 bis 4 Wochen nach der Optimierung. Für eine stabile Position im Local Pack (die Top-3-Box bei Google) rechnen Sie mit 2 bis 3 Monaten. Regelmäßige Pflege, neue Bewertungen und aktuelle Fotos beschleunigen den Prozess.",
      },
      {
        question: "Kann ich mein Google Business Profil selbst optimieren?",
        answer:
          "Ja, die Grundlagen können Sie selbst umsetzen. Dieser Leitfaden gibt Ihnen alle Schritte an die Hand. Wenn Sie jedoch eine umfassende lokale SEO-Strategie wünschen, die Website, Google Business Profil und Branchenverzeichnisse aufeinander abstimmt, kann ein Experte den Unterschied machen.",
      },
    ],
  },
];

export function getRatgeberBySlug(slug: string): RatgeberArtikel | undefined {
  return RATGEBER.find((a) => a.slug === slug);
}
