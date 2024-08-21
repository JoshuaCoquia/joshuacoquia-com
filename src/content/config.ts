import { z, defineCollection } from 'astro:content';

const articleCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date(),
        tags: z.array(z.string()),
        featured: z.boolean().optional().or(z.literal('')),
        draft: z.boolean().optional().or(z.literal('')),
    }),
});

const linkCollection = defineCollection({
    type: 'data',
    schema: z.object({
        hidden: z.boolean().optional().or(z.literal('')),
        title: z.string(),
        url: z.string(),
    }),
});

export const collections = {
    'article': articleCollection,
    'link': linkCollection,
}
