# BlokBuren SMP

De eerste homepage van BlokBuren SMP. Astro 5, TypeScript, eigen CSS en lokaal gehost Manrope. Geen UI-framework, CMS of JavaScript-framework. Alleen de homepage is gebouwd; navigatie naar serverinformatie, ranks en nieuws verwijst voorlopig naar secties op die pagina. Regels is als binnenkort gemarkeerd.

## Lokaal werken

Vereist: Node.js 24 en pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
pnpm preview
```

Open het lokale adres dat Astro toont. De productie-uitvoer staat in `dist/`. Telemetrie van Astro kan met `ASTRO_TELEMETRY_DISABLED=1` worden uitgezet.

## Eén plek voor instellingen

`src/config/site.ts` bevat de servernaam, slogan, omschrijving, Discord, serveradres, status, socialmedia, assets, indexeerbaarheid en Analytics-instellingen.

- `server.address` is bewust een voorbeeld. Zet **pas** `addressIsPlaceholder: false` als het echte publiek bereikbare adres is ingevuld. Dan verschijnt de kopieerknop automatisch, met een handmatige fallback als klembordtoegang mislukt.
- Het privéserveradres wordt nergens in de website gebruikt.
- `status.mode: 'placeholder'` toont een verzorgde aankondiging zonder verzonnen aantallen. Het statusmodel bevat online, players, maxPlayers en version. Een toekomstige API-adapter kan die waarden invullen; voor echte live-updates voeg je polling toe aan ServerStatus.astro. De huidige versie doet geen statusverzoeken.
- `social`-URL's zijn leeg. Totdat ze zijn ingevuld, verschijnen neutrale 'volgt'-labels zonder kapotte links.
- Analytics staat uit. Vul een echt `G-…`-ID in en zet enabled aan om de toestemmingkeuze te activeren. Alleen productie en expliciete toestemming laden Google Analytics. Tijdens development wordt nooit Analytics geladen. Lokaal opgeslagen toestemming kun je wissen via de sitegegevens van je browser. Voeg vóór brede inzet een passende privacytekst en zichtbare intrekkingsmogelijkheid toe.

## Logo en sfeerbeeld vervangen

- `public/images/logo.png`: het gevonden bestaande logo met twee huizen, geoptimaliseerd naar 128 × 128. Vervang dit bestand door het echte vierkante logo als er een nieuwere versie is.
- `public/images/favicon.png`: kleine variant van datzelfde logo, 64 × 64.
- `public/images/buurt-dag.webp` en `buurt-nacht.webp`: echte serverscreenshots; volgen de dag-/nachtmodus.
- `site.bluemap` in `src/config/site.ts`: vul de publieke BlueMap-URL in om de knop te activeren.
- Rankup levert extra personal claims op, geen extra homes. Exacte claimlimieten zijn nog niet vastgelegd op de website.
- Plaats toekomstige echte screenshots in `public/images/`. Comprimeer bij voorkeur als WebP en geef vaste beeldafmetingen op.
- Herkomst en illustratieprompt staan in `ASSETS.md`.

## Nieuws

Nieuwsinhoud staat in `src/content/news/*.md`. Astro Content Collections valideert title, summary, category, order en preview. De homepage gebruikt één compacte voorvertoning. Het huidige bericht is duidelijk toekomstig en bevat geen verzonnen gebeurtenissen. Er zijn nog geen losse nieuwsdetailpagina's.

Ranks staan los van de weergave in `src/data/ranks.ts`; de homepage toont alleen een teaser. Er is bewust geen volledige spelersslideshow gebouwd.

## GitHub Pages

De workflow `.github/workflows/deploy.yml` controleert, bouwt en publiceert bij een push naar main. Stel in de repository onder Settings → Pages → Build and deployment de bron op **GitHub Actions** in.

De workflow leidt het tijdelijke domein en repositorypad automatisch af. Alle asset- en homelinks gebruiken Astro's BASE_URL. Voor een eigen domein stel je onder Settings → Secrets and variables → Actions → Variables in:

- `SITE_URL`: bijvoorbeeld `https://www.blokburen.nl` zodra dat domein werkelijk is gekoppeld.
- `BASE_PATH`: `/` voor een eigen domein of een gebruikerssite.

Koppel DNS en het domein ook onder GitHub Pages. Er is bewust geen CNAME voor een nog niet bevestigd domein. Canonical, Open Graph URL en structured data volgen SITE_URL. Zonder SITE_URL laat de lokale build canonical weg. Robots staat op index,follow; zet `seo.indexable` uit voor een tijdelijk niet-indexeerbare preview.

Zie ook de [officiële Astro Pages-documentatie](https://docs.astro.build/en/guides/deploy/github/).

## Ontwerp en toegankelijkheid

Warme lichte ondergrond, terracotta-oranje acties, eigen logo en een Minecraft-buurtbeeld. Subtiele inventory-slots bij ranks, een prikbord voor community-updates en een groene sectie over eerlijke progressie. Animaties zijn klein en respecteren reduced motion. Alle tekst is Nederlands, lettertypen worden lokaal geladen. Geen muziek, trackers tijdens ontwikkeling, betaalde ranks of neppe reviews/statistieken.

Gebruik semantische HTML, zichtbare toetsenbordfocus, een skiplink en een mobiel menu met Escape-ondersteuning. Alleen nav, klembord en optionele Analytics vragen client-JavaScript.

## Scope

Geen overige pagina's, webshop, donaties, login, CMS, voting, BlueMap of profielen. Die kunnen na goedkeuring van de homepage als afzonderlijke routes worden toegevoegd.
