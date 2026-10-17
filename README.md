# Mirko Šakić · Portfolio

Statičan sajt, bez build koraka.

## Fajlovi
- `index.html` – početna
- `project.html` – stranica projekta (`project.html?p=pokret-cetkice`, `?p=crystal-art`, `?p=pasiceva-11`)
- `projects.js` – podaci o projektima (novi projekat = kopiraj jedan blok)
- `support.js` – runtime koji pokreće stranice (ne menjati)
- `images/` – slike

## Objava na GitHub Pages
1. Napravi novi repo na github.com (npr. `portfolio`), Public.
2. Add file → Upload files → prevuci SVE iz ovog foldera (i folder `images`). Commit.
3. Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder `/ (root)` → Save.
4. Posle 1-2 minuta sajt je na `https://TVOJ-USERNAME.github.io/portfolio/`.

Napomena: sajt mora da se otvara preko servera (GitHub Pages, Netlify...). Dupli klik na index.html sa računara neće učitati projekte.

## Forma za kontakt
Trenutno ne šalje mejl. Najlakše: napravi besplatan nalog na formspree.io, uzmi URL i stavi ga u `action=""` forme u index.html, pa iz logike obriši `e.preventDefault()`.
