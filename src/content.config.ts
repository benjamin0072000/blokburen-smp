import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';
const news = defineCollection({loader: glob({pattern: '**/*.md', base: './src/content/news'}), schema: z.object({title: z.string(), summary: z.string(), category: z.string(), order: z.number(), preview: z.boolean().default(true)})});
export const collections = {news};
