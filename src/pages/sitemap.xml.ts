const paths = ['', 'employers', 'talent', 'jobs', 'about', 'contact', 'privacy', 'terms'];

export function GET() {
  const base = 'https://sentinel-agency.github.io/';
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
