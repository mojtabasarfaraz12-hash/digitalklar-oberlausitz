export type CityFocus = "pflege" | "handwerk" | "gastronomie" | "einzelhandel" | "tourismus";

export type City = {
  slug: string;
  name: string;
  postalCode: string;
  population: string;
  distanceFromBase: string;
  intro: string;
  paragraphs: string[];
  localFacts: string[];
  focusBranchen: CityFocus[];
  whyDigitalklar: string;
  geo: { lat: number; lng: number };
  metaTitle: string;
  metaDescription: string;
};

export const CITIES: City[] = [
  {
    slug: "bautzen",
    name: "Bautzen",
    postalCode: "02625",
    population: "rund 38.000 Einwohner",
    distanceFromBase: "ca. 6 km",
    intro:
      "Webdesign, lokale SEO und digitales Marketing für Unternehmen in Bautzen. Direkt aus Obergurig vor den Toren der Stadt, mit echter Verbindung zur Region und einem klaren Fokus auf Sichtbarkeit, die Kunden bringt.",
    paragraphs: [
      "Bautzen ist das wirtschaftliche und kulturelle Zentrum der Oberlausitz. Zwischen der historischen Altstadt mit ihren Türmen, den Werken am Stadtrand und den vielen kleinen Dienstleistern, Pflegeeinrichtungen und Handwerksbetrieben in den Stadtteilen schlummert ein riesiges Potenzial für Unternehmen, die online sichtbar werden wollen. Die Realität ist aber: Wer in Bautzen heute bei Google nach einem Pflegedienst, einem Steuerberater oder einer Bäckerei sucht, findet meist die gleichen drei Anbieter ganz oben, und die meisten anderen tauchen schlicht nicht auf.",
      "Genau hier setze ich an. Ich baue Ihnen keine Webseite, die nur schön aussieht, sondern eine, die für die Suchanfragen rankt, die in Bautzen tatsächlich gestellt werden. Dazu gehört eine technisch saubere Basis, eine strukturierte lokale SEO-Strategie und ein gepflegtes Google Business Profil, das Anrufe und Anfragen erzeugt. Der Unterschied zu klassischen Agenturen aus der Region: Sie bekommen alles aus einer Hand, in einem klar kalkulierten Monatsmodell, ohne dass Sie sich um Hosting, Updates oder Reporting kümmern müssen.",
      "Bautzen ist außerdem mein Heimathafen. Mein Sitz ist in Obergurig, sechs Kilometer südlich der Stadt, und ich kenne die Wirtschaft hier aus eigener Erfahrung, nicht aus einer PowerPoint-Recherche. Das spüren meine Kunden in jeder Entscheidung, die wir gemeinsam treffen.",
    ],
    localFacts: [
      "Größte Stadt der Oberlausitz und Kreisstadt des Landkreises Bautzen",
      "Starker Mittelstand mit Schwerpunkten in Pflege, Handwerk, Gastronomie und Tourismus",
      "Hohe lokale Suchnachfrage nach Dienstleistungen, aber wenige professionelle Webauftritte",
      "Mein Sitz in Obergurig liegt direkt vor den Toren der Stadt, kurze Wege für persönliche Termine",
    ],
    focusBranchen: ["pflege", "handwerk", "gastronomie"],
    whyDigitalklar:
      "Weil ich nicht aus einer fernen Großstadtagentur komme, sondern selbst in der Region lebe und arbeite. Weil ich Ihre Kunden verstehe, bevor wir über Pixel oder Keywords reden. Und weil mein Modell auf ein langfristiges Ergebnis ausgerichtet ist, nicht auf einen einmaligen Webseiten-Verkauf.",
    geo: { lat: 51.1814, lng: 14.4244 },
    metaTitle: "Webdesign & SEO Bautzen | DigitalKlar Oberlausitz",
    metaDescription:
      "Webdesign, lokale SEO und digitales Marketing für Unternehmen in Bautzen. Persönlich, transparent und mit echter Regionalkenntnis aus Obergurig.",
  },
  {
    slug: "goerlitz",
    name: "Görlitz",
    postalCode: "02826",
    population: "rund 56.000 Einwohner",
    distanceFromBase: "ca. 50 km",
    intro:
      "Webdesign und digitale Sichtbarkeit für Görlitzer Unternehmen. Vom Tourismusbetrieb in der Altstadt bis zum Pflegedienst in der Südstadt, ich helfe Ihnen, online die richtigen Menschen zu erreichen.",
    paragraphs: [
      "Görlitz ist die östlichste Stadt Deutschlands und gleichzeitig eine der schönsten. Die filmreife Altstadt zieht Besucher aus ganz Europa an, und genau dieser Strom an Menschen ist eine Chance, die viele lokale Unternehmen noch nicht voll nutzen. Wer ein Hotel, ein Restaurant, eine kleine Manufaktur oder einen Dienstleistungsbetrieb in Görlitz führt, lebt davon, gefunden zu werden, und zwar nicht nur von Touristen, sondern auch von der eigenen Nachbarschaft jenseits der Neiße.",
      "Ich baue Webseiten und SEO-Strategien für Görlitzer Unternehmen, die diesen Anspruch ernst nehmen. Das heißt: zweisprachige Optionen wo sinnvoll, sauberes mobiles Design für unterwegs, lokale Keywords die wirklich gesucht werden, und ein gepflegter Google-Auftritt, der den Unterschied zwischen einer Anfrage und einem leeren Posteingang macht.",
      "Görlitz hat einen eigenen Charakter, der sich auch in der Online-Kommunikation widerspiegeln sollte. Schablonen aus Berlin oder München funktionieren hier nicht. Ich entwickle mit Ihnen eine Sprache und ein Design, das zu Ihrem Betrieb und zur Stadt passt, und nicht zu einer Vorlage aus dem Theme-Shop.",
    ],
    localFacts: [
      "Östlichste Stadt Deutschlands, mit direkter Anbindung an Polen",
      "Weltbekannte Filmkulisse, dadurch starker Tourismussektor",
      "Wachsender Markt für Pflege, Gesundheit und kreative Dienstleistungen",
      "Viele kleine Betriebe, deren Online-Auftritt noch nicht professionell ist",
    ],
    focusBranchen: ["tourismus", "gastronomie", "pflege", "einzelhandel"],
    whyDigitalklar:
      "Weil ich verstehe, dass Görlitz mehr ist als eine schöne Kulisse. Weil ich Ihren Betrieb sowohl an die Görlitzer selbst als auch an Besucher von außen kommunizieren kann. Und weil ich Ihre Sichtbarkeit langfristig pflege, nicht nur einmal aufbaue.",
    geo: { lat: 51.1551, lng: 14.9876 },
    metaTitle: "Webdesign & SEO Görlitz | DigitalKlar Oberlausitz",
    metaDescription:
      "Webdesign, lokale SEO und Marketing für Unternehmen in Görlitz. Persönlich, regional verankert und für Tourismus, Gastronomie und Pflege spezialisiert.",
  },
  {
    slug: "loebau",
    name: "Löbau",
    postalCode: "02708",
    population: "rund 13.000 Einwohner",
    distanceFromBase: "ca. 30 km",
    intro:
      "Webdesign und SEO für kleine und mittlere Unternehmen in Löbau. Praktisch, ehrlich und genau richtig dimensioniert für Betriebe, die online sichtbar sein müssen, ohne ein Marketingbudget einer Großstadtagentur.",
    paragraphs: [
      "Löbau ist klein, aber nicht unbedeutend. Hier sitzt ein erstaunlich dichtes Netz von Handwerksbetrieben, Pflegediensten, Steuerberatern und Familienunternehmen, die seit Generationen die Wirtschaft der Region tragen. Was ihnen oft fehlt, ist nicht die Qualität der Arbeit, sondern die Sichtbarkeit dafür im Netz. Der jüngere Bauherr, die Tochter, die einen Pflegeplatz für ihre Mutter sucht, der Existenzgründer auf Steuerberatersuche, sie alle starten heute bei Google.",
      "Mein Ansatz für Löbauer Unternehmen ist bewusst pragmatisch. Sie brauchen keine Webseite mit dreißig Unterseiten und sieben Animationen, Sie brauchen eine Seite, die in der Region rankt, schnell lädt, auf dem Handy funktioniert und Ihre Stärken klar kommuniziert. Dazu bekommen Sie ein optimiertes Google Business Profil, das Anrufe direkt auf Ihr Telefon bringt.",
      "Das alles im Sichtbarkeitspaket, monatlich kalkulierbar, ohne überraschende Zusatzkosten und ohne dass Sie selbst zum SEO-Experten werden müssen.",
    ],
    localFacts: [
      "Schöner historischer Stadtkern mit aktiver Wirtschaft im Umland",
      "Starker Anteil an Handwerk, Pflege und mittelständischen Familienbetrieben",
      "Die meisten Mitbewerber haben veraltete Webseiten oder gar keine",
      "Viel Potenzial für lokale SEO, weil das Suchvolumen kaum bedient wird",
    ],
    focusBranchen: ["handwerk", "pflege", "einzelhandel"],
    whyDigitalklar:
      "Weil ich kein Konzern bin, sondern ein direkter Ansprechpartner. Weil ich verstehe, dass ein Handwerksbetrieb in Löbau andere Anforderungen hat als ein Startup in Berlin. Und weil mein Sichtbarkeitspaket genau für Unternehmen Ihrer Größe gedacht ist.",
    geo: { lat: 51.0958, lng: 14.6688 },
    metaTitle: "Webdesign & SEO Löbau | DigitalKlar Oberlausitz",
    metaDescription:
      "Webdesign, lokale SEO und digitales Marketing für Löbauer Unternehmen. Pragmatisch, transparent und gemacht für Handwerk, Pflege und Mittelstand.",
  },
  {
    slug: "zittau",
    name: "Zittau",
    postalCode: "02763",
    population: "rund 24.000 Einwohner",
    distanceFromBase: "ca. 55 km",
    intro:
      "Webdesign und digitale Sichtbarkeit für Unternehmen in Zittau und im Dreiländereck. Für Betriebe, die nicht nur in Sachsen, sondern auch über die Grenze hinaus wahrgenommen werden wollen.",
    paragraphs: [
      "Zittau hat eine besondere Lage. Im Dreiländereck zwischen Deutschland, Polen und Tschechien zieht die Stadt ein Publikum an, das Sie als Unternehmer nicht ignorieren sollten. Eine Hochschule, viele Pflegeeinrichtungen, ein gewachsener Mittelstand und ein Tourismus, der das Zittauer Gebirge als Aushängeschild hat. All das ergibt eine Mischung, die online richtig adressiert werden will.",
      "Ich baue Ihnen eine Webseite, die für Zittauer und für Besucher aus den Nachbarländern gleichermaßen funktioniert. Die lokale SEO orientiert sich an den realen Suchanfragen aus der Region, und die Inhalte werden so strukturiert, dass sie auf dem Smartphone genauso überzeugen wie am Schreibtisch. Dazu kommt ein Google Business Profil, das gepflegt wird statt nur angelegt.",
      "Mein Modell ist transparent: Sie zahlen monatlich, bekommen alles inklusive und können sich darauf verlassen, dass Ihre Sichtbarkeit kontinuierlich wächst, statt nach dem ersten Launch zu stagnieren.",
    ],
    localFacts: [
      "Lage im Dreiländereck Deutschland, Polen, Tschechien",
      "Hochschulstadt mit lebendiger Wirtschaft und starker Pflegelandschaft",
      "Tourismus durch Zittauer Gebirge, ungenutztes Potenzial für Online-Sichtbarkeit",
      "Viele Anbieter konkurrieren um die gleichen wenigen Top-Plätze bei Google",
    ],
    focusBranchen: ["pflege", "tourismus", "gastronomie", "handwerk"],
    whyDigitalklar:
      "Weil ich Ihre Zielgruppe nicht generisch denke, sondern verstehe, dass Zittauer Unternehmen gleichzeitig regionale Verwurzelung und überregionale Sichtbarkeit brauchen.",
    geo: { lat: 50.8964, lng: 14.8081 },
    metaTitle: "Webdesign & SEO Zittau | DigitalKlar Oberlausitz",
    metaDescription:
      "Webdesign, lokale SEO und digitales Marketing für Zittau und das Dreiländereck. Für Pflege, Tourismus und Mittelstand mit echter Regionalkenntnis.",
  },
  {
    slug: "kamenz",
    name: "Kamenz",
    postalCode: "01917",
    population: "rund 14.000 Einwohner",
    distanceFromBase: "ca. 35 km",
    intro:
      "Webdesign, SEO und digitales Marketing für Kamenz. Für Handwerker, Pflegebetriebe und Mittelständler, die in der Lessing-Stadt und im Umland sichtbar werden wollen.",
    paragraphs: [
      "Kamenz, die Lessing-Stadt, ist eine der unterschätzten Wirtschaftsstandorte der Oberlausitz. Es gibt eine ruhige, aber stabile Mittelstandskultur, viele Familienbetriebe im Handwerk, Pflegeeinrichtungen, die seit Jahren im gleichen Atemzug genannt werden, und einen Einzelhandel, der die Konkurrenz aus dem Onlineversand spürt. Was die meisten verbindet: Sie verlassen sich auf Mundpropaganda, und die funktioniert immer schlechter, weil die Suche zuerst online stattfindet.",
      "Ich helfe Kamenzer Unternehmen, diesen Übergang zu schaffen, ohne dass sie sich überfordert fühlen. Eine klare Webseite, die in zwei Sekunden lädt, die wichtigen Informationen sofort zeigt und auf jeder Bildschirmgröße funktioniert. Ein Google Business Profil, das nicht nur existiert, sondern aktiv für Anfragen sorgt. Und eine SEO-Strategie, die auf die Suchbegriffe abgestimmt ist, die in Kamenz tatsächlich getippt werden.",
      "Das Ganze nicht als einmaliges Projekt, sondern als laufender Service. Sie behalten Ihren Fokus auf Ihrem Geschäft, ich kümmere mich um die digitale Sichtbarkeit.",
    ],
    localFacts: [
      "Geburtsstadt von Gotthold Ephraim Lessing, kulturell stark verankert",
      "Stabiler Mittelstand mit Handwerk, Pflege und Einzelhandel",
      "Wenig Konkurrenzdruck im lokalen SEO, gute Chancen für schnelle Sichtbarkeit",
      "Viele Betriebe haben noch keinen modernen Webauftritt",
    ],
    focusBranchen: ["handwerk", "pflege", "einzelhandel"],
    whyDigitalklar:
      "Weil Kamenz eine Stadt der ehrlichen Arbeit ist und ich genauso arbeite. Klare Sprache, klare Preise, sichtbare Ergebnisse.",
    geo: { lat: 51.2683, lng: 14.0936 },
    metaTitle: "Webdesign & SEO Kamenz | DigitalKlar Oberlausitz",
    metaDescription:
      "Webdesign, lokale SEO und Marketing für Unternehmen in Kamenz. Persönlich, transparent und genau richtig für Handwerk, Pflege und Mittelstand.",
  },
  {
    slug: "hoyerswerda",
    name: "Hoyerswerda",
    postalCode: "02977",
    population: "rund 31.000 Einwohner",
    distanceFromBase: "ca. 40 km",
    intro:
      "Webdesign, lokale SEO und digitales Marketing für Hoyerswerda. Für Pflegeheime, Handwerker und Dienstleister, die in einer Stadt mit echtem Wandel ihre digitale Stimme finden wollen.",
    paragraphs: [
      "Hoyerswerda ist eine Stadt im Wandel. Strukturwandel, demografische Veränderung und ein starkes Engagement der lokalen Wirtschaft prägen das Bild. Gleichzeitig gibt es hier eine ungewöhnlich hohe Dichte an Pflegeeinrichtungen, Gesundheitsdienstleistern und Handwerksbetrieben, die alle eines gemeinsam haben: Sie kämpfen um die Aufmerksamkeit der gleichen Zielgruppe in einem Umfeld, in dem Google längst die erste Adresse für jede Suche geworden ist.",
      "Ich baue Ihnen Webauftritte, die in Hoyerswerda funktionieren, weil sie die Realität der Stadt abbilden und nicht die Werbesprache aus einem Lehrbuch. Lokale SEO heißt für mich, dass Ihr Pflegedienst gefunden wird, wenn jemand in der Stadtmitte oder in einem der umliegenden Ortsteile nach Hilfe sucht. Es heißt auch, dass Ihr Handwerksbetrieb auftaucht, wenn ein neuer Bauherr das erste Mal nach Ihrem Gewerk sucht.",
      "Mein Sichtbarkeitspaket ist genau für solche Situationen gemacht. Eine vollständige Lösung, monatlich kalkulierbar und ohne dass Sie sich um Technik, Hosting oder Reporting kümmern müssen. Und ich bin direkt erreichbar, nicht über ein anonymes Ticketsystem.",
    ],
    localFacts: [
      "Wirtschaftliches Zentrum im nördlichen Teil der Oberlausitz",
      "Hohe Dichte an Pflegeeinrichtungen und Gesundheitsdienstleistern",
      "Aktive Handwerks- und Mittelstandsszene",
      "Lokale Suchanfragen wachsen, Webauftritte halten oft nicht Schritt",
    ],
    focusBranchen: ["pflege", "handwerk", "gastronomie"],
    whyDigitalklar:
      "Weil ich aus der Region komme, weil ich verstehe was Hoyerswerda heute braucht, und weil ich speziell in der Pflege als ehemaliger PDL eine Sprache spreche, die Pflegedienstleitungen sofort verstehen.",
    geo: { lat: 51.4378, lng: 14.2547 },
    metaTitle: "Webdesign & SEO Hoyerswerda | DigitalKlar Oberlausitz",
    metaDescription:
      "Webdesign, lokale SEO und digitales Marketing für Hoyerswerda. Spezialisiert auf Pflege, Handwerk und Mittelstand mit echter Branchenerfahrung.",
  },
];

export const FOCUS_LABELS: Record<CityFocus, string> = {
  pflege: "Pflege & Gesundheit",
  handwerk: "Handwerk",
  gastronomie: "Gastronomie",
  einzelhandel: "Einzelhandel",
  tourismus: "Tourismus",
};

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((city) => city.slug === slug);
}
