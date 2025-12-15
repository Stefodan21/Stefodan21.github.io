import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Stefaan Davis | Software Engineering & Tech Blog',
    description: 'Articles about software engineering, machine learning, cloud infrastructure, and full-stack development.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en</language>`,
  });
}