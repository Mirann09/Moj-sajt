// PROJEKTI - deljeni podaci za početnu (kartice) i za stranicu projekta (Project.dc.html?p=slug).
// Novi projekat = kopiraj jedan objekat iz niza i promeni vrednosti.
// U Webflow-u ovo postaje CMS kolekcija "Projects", a Project.dc.html postaje njen template.
/* ŠABLON
{
  slug: "ime-projekta", num: "04", year: "2026", name: "Ime projekta",
  url: "https://primer.com", domain: "primer.com",
  image: "images/ime-projekta.png",   // screenshot početne. Prazno = sivi placeholder.
  title: { en: "", sr: "" },           // naslov = koji problem je sajt rešio
  desc:  { en: "", sr: "" },           // 2-3 rečenice za karticu na početnoj
  brief: { en: "", sr: "" },           // šta je klijent hteo (stranica projekta)
  built: [{ en: "", sr: "" }],         // šta sam uradio, jedna stavka po redu
  tags:  [{ en: "Webflow", sr: "Webflow" }],
  facts: [{ value: "", en: "", sr: "" }, { value: "", en: "", sr: "" }],
  gallery: [                          // prvo telefon (uska kolona), pa desktop detalj (široka); ratio = širina / visina slike
    { kind: "mobile", en: "Mobile view", sr: "Prikaz na telefonu", image: "images/ime-mobile.png", ratio: "420 / 850" },
    { kind: "desktop", en: "Detail", sr: "Detalj", image: "images/ime-detalj.png", ratio: "16 / 9" }
  ]
},
*/
export const PROJECTS = [
  {
    slug: "pokret-cetkice", num: "01", year: "2026", name: "Pokret četkice",
    url: "https://pokretcetkice.com", domain: "pokretcetkice.com",
    image: "images/pokret-cetkice.png",
    title: { en: "Every workshop in one place, with sign-ups right on the site.", sr: "Sve radionice na jednom mestu, sa prijavom preko sajta." },
    desc: {
      en: "The client wanted every workshop in one place, with people signing up right on the site. I built 8 pages and three CMS collections, and hand-coded every form, plus a gallery where visitors can open and download photos. Anyone who fills in a form gets an HTML email with their details straight away, sent through Make.",
      sr: "Klijent je hteo da sve radionice budu na jednom mestu i da se ljudi prijavljuju preko sajta. Napravio sam 8 stranica i tri CMS kolekcije, a svaku formu i galeriju u kojoj se slike otvaraju i preuzimaju napisao sam u custom kodu. Ko popuni formu, odmah dobije HTML mejl sa onim što je upisao, preko Make-a."
    },
    brief: {
      en: "The client wanted every workshop in one place, with people signing up right on the site.",
      sr: "Klijent je hteo da sve radionice budu na jednom mestu i da se ljudi prijavljuju preko sajta."
    },
    built: [
      { en: "8 pages, built solo in Webflow", sr: "8 stranica, sve sam radio sam u Webflow-u" },
      { en: "3 CMS collections, two of them linked to each other", sr: "3 CMS kolekcije, dve međusobno povezane" },
      { en: "Custom code for parts of the CMS", sr: "Custom kod za delove CMS-a" },
      { en: "Every form hand-coded", sr: "Svaka forma napisana u custom kodu" },
      { en: "A custom-coded gallery: photos open in a popup and can be downloaded", sr: "Galerija u custom kodu: slike se otvaraju u popupu i mogu da se preuzmu" },
      { en: "HTML emails through Make: anyone who fills in a form gets an email with what they entered", sr: "HTML mejlovi preko Make-a: ko popuni formu, odmah dobije mejl sa onim što je upisao" }
    ],
    tags: [{ en: "Webflow", sr: "Webflow" }, { en: "CMS", sr: "CMS" }, { en: "Custom code", sr: "Custom kod" }, { en: "Make", sr: "Make" }],
    facts: [
      { value: "3", en: "CMS collections, two of them linked", sr: "CMS kolekcije, dve međusobno povezane" },
      { value: "8", en: "pages, built solo", sr: "stranica, sve sam radio sam" }
    ],
    gallery: [
      { kind: "mobile", en: "Mobile - gifts and vouchers page", sr: "Telefon - stranica sa poklonima i vaučerima", image: "images/pokret-cetkice-mobile.png", ratio: "417 / 890" },
      { kind: "desktop", en: "Gallery popup with download", sr: "Galerija u popupu, sa preuzimanjem", image: "images/pokret-cetkice-gallery.png", ratio: "2546 / 1316" }
    ]
  },
  {
    slug: "crystal-art", num: "02", year: "2026", name: "Crystal Art",
    url: "https://crystalart.me", domain: "crystalart.me",
    image: "images/crystal-art.png",
    title: { en: "A product catalog that lets people take a closer look.", sr: "Katalog u kome se proizvodi gledaju izbliza." },
    desc: {
      en: "What mattered most to the client was showing the products well. The catalog runs on Webflow CMS, images respond on hover, and a click opens a popup with the product details. It all works on phones too, with custom code where it was needed.",
      sr: "Klijentu je najvažnije bilo da proizvodi lepo izgledaju. Katalog radi na Webflow CMS-u, slike reaguju na prelazak mišem, a klik otvara prozor sa detaljima proizvoda. Sve je prilagođeno telefonu, uz custom kod gde je trebalo."
    },
    brief: {
      en: "What mattered most to the client was showing the products well.",
      sr: "Klijentu je najvažnije bilo da proizvodi lepo izgledaju."
    },
    built: [
      { en: "Product catalog on Webflow CMS", sr: "Katalog proizvoda na Webflow CMS-u" },
      { en: "Hover effects on product images", sr: "Hover efekti na slikama proizvoda" },
      { en: "Popups with product details", sr: "Popup prozori sa detaljima proizvoda" },
      { en: "Custom code where Webflow needed it", sr: "Custom kod gde je trebalo" },
      { en: "Everything adapted for phones", sr: "Sve prilagođeno telefonu" }
    ],
    tags: [{ en: "Webflow", sr: "Webflow" }, { en: "CMS", sr: "CMS" }, { en: "Custom code", sr: "Custom kod" }, { en: "Interactions", sr: "Interakcije" }],
    facts: [
      { value: "CMS", en: "product catalog", sr: "katalog proizvoda" },
      { value: "Popup", en: "product details without leaving the page", sr: "detalji proizvoda bez napuštanja stranice" }
    ],
    gallery: [
      { kind: "mobile", en: "Mobile - homepage", sr: "Telefon - početna", image: "images/crystal-art-mobile.png", ratio: "420 / 854" },
      { kind: "desktop", en: "Product popup with details", sr: "Popup sa detaljima proizvoda", image: "images/crystal-art-popup.png", ratio: "2533 / 1304" }
    ]
  },
  {
    slug: "pasiceva-11", num: "03", year: "2026", name: "Biznis centar Pašićeva 11",
    url: "https://bizniscentarpasiceva11.com", domain: "bizniscentarpasiceva11.com",
    image: "images/pasiceva-11.png",
    title: { en: "Everything a visitor needs to know, on a single page.", sr: "Sve bitno o biznis centru, na jednoj stranici." },
    desc: {
      en: "A small landing page, a few sections long. Anyone who opens it gets the essentials in one place, without clicking around.",
      sr: "Mali landing page od nekoliko sekcija. Ko ga otvori, na jednom mestu vidi sve što treba da zna, bez lutanja po stranicama."
    },
    brief: {
      en: "A simple site that says everything important on one page.",
      sr: "Jednostavan sajt koji kaže sve bitno na jednoj stranici."
    },
    built: [
      { en: "A landing page, a few sections long", sr: "Landing page od nekoliko sekcija" },
      { en: "Everything important on one page, no subpages", sr: "Sve bitno na jednoj stranici, bez podstranica" }
    ],
    tags: [{ en: "Landing page", sr: "Landing page" }],
    facts: [
      { value: "1", en: "page", sr: "stranica" },
      { value: "Landing", en: "a few sections, nothing extra", sr: "nekoliko sekcija, ništa višak" }
    ],
    gallery: [
      { kind: "mobile", en: "Mobile - top of the page", sr: "Telefon - vrh stranice", image: "images/pasiceva-11-mobile.png", ratio: "395 / 595" },
      { kind: "desktop", en: "One section of the page", sr: "Jedna sekcija stranice", image: "images/pasiceva-11-detail.png", ratio: "2543 / 1040" }
    ]
  }
];
