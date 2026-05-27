export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  const token = 'E7rdEGgQsrlZER730dumgQtt'
  const today = new Date().toISOString().split('T')[0]

  let stories: any[] = []
  try {
    const data: any = await $fetch('https://api-eu.storyblok.com/v2/cdn/stories', {
      params: {
        token,
        starts_with: 'blog',
        is_startpage: false,
        version: 'published',
        per_page: 100,
      },
    })
    stories = data?.stories ?? []
  } catch {
    stories = []
  }

  const urls = stories
    .map((story) => {
      const slug = story.full_slug
      const lastmod = story.published_at?.split('T')[0] ?? today
      return `
  <url>
    <loc>https://evolatec.de/${slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="de"        href="https://evolatec.de/${slug}/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://evolatec.de/${slug}/"/>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`
})
