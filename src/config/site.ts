export const site = {
  name: 'BlokBuren SMP', slogan: 'Waar survival samen begint.',
  description: 'Jouw plek in een Nederlandse Minecraft Java survivalwereld. Bouw, claim en handel met je buren. Ranks verdien je door te spelen. Geen pay-to-win.',
  discord: 'https://discord.gg/fK33eQGY7m',
  server: { address: 'play.blokburen.nl', addressIsPlaceholder: true, edition: 'Java Edition' },
  // Pas aan naar live en vul waarden via een API-adapter zodra deze beschikbaar is.
  status: { mode: 'placeholder' as 'placeholder' | 'live', online: false, players: null as number | null, maxPlayers: null as number | null, version: null as string | null },
  // Vul hier later de publieke BlueMap-link in; de knop wordt dan vanzelf actief.
  bluemap: '',
  social: { tiktok: '', youtube: '' },
  analytics: { enabled: false, measurementId: '' },
  seo: { indexable: true },
  assets: { logo: 'images/logo.png', hero: 'images/buurt-dag.webp', heroNight: 'images/buurt-nacht.webp', heroIsIllustration: false },
};
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
