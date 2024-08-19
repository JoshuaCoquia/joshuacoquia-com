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

export const collections = {
    'article': articleCollection,
}
